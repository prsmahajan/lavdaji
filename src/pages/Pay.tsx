import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { showInfoToast, showErrorToast, showSuccessToast } from "@/hooks/use-toast";
import { trackEvent } from "@/lib/analytics";
import { parsePaymentParams } from "@/lib/payment";
import { CreditCard, CheckCircle2, AlertCircle } from "lucide-react";

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image?: string;
  theme?: {
    color?: string;
  };
  handler: (response: RazorpayResponse) => void;
  modal?: {
    ondismiss?: () => void;
    confirm_close?: boolean;
  };
  config?: {
    display: {
      blocks?: {
        banks?: {
          name: string;
          instruments: Array<{
            method: string;
            banks?: string[];
            issuers?: string[];
            providers?: string[];
            types?: string[];
          }>;
        };
        other?: {
          name: string;
          instruments: Array<{
            method: string;
            providers?: string[];
            wallets?: string[];
          }>;
        };
      };
      sequence?: string[];
      preferences?: {
        show_default_blocks?: boolean;
      };
    };
  };
  method?: {
    card?: boolean;
    netbanking?: boolean;
    wallet?: boolean;
    upi?: boolean;
    paylater?: boolean;
    gpay?: boolean;
    paypal?: boolean;
  };
}

interface RazorpayInstance {
  open: () => void;
  close: () => void;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID || "";

const Pay = () => {
  const [searchParams] = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentId, setPaymentId] = useState("");

  // Parse and verify payment params
  const { amount, isValid: isValidAmount, error: validationError } = parsePaymentParams(searchParams);

  // Format amount for display
  const formatAmount = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(value);
  };

  const handlePayment = () => {
    if (!isValidAmount) {
      showErrorToast({
        title: "Invalid amount",
        description: "Please use a valid payment link with an amount.",
      });
      return;
    }

    if (!RAZORPAY_KEY) {
      showErrorToast({
        title: "Configuration error",
        description: "Payment gateway is not configured. Please contact support.",
      });
      return;
    }

    setIsProcessing(true);

    const options: RazorpayOptions = {
      key: RAZORPAY_KEY,
      amount: Math.round(amount * 100), // Razorpay expects amount in smallest currency unit (cents for USD)
      currency: "USD",
      name: "Paras Mahajan",
      description: `Payment of ${formatAmount(amount)}`,
      theme: {
        color: "#1a1a1a",
      },
      // Enable all payment methods including international options
      method: {
        card: true,        // Credit/Debit cards (includes Apple Pay on Safari)
        netbanking: true,  // Net banking
        wallet: true,      // Wallets
        upi: true,         // UPI (includes Google Pay)
        paylater: true,    // Pay Later options
        gpay: true,        // Google Pay
        paypal: true,      // PayPal (for international payments)
      },
      config: {
        display: {
          blocks: {
            banks: {
              name: "Pay with Cards & Banks",
              instruments: [
                { method: "card" },
                { method: "netbanking" },
              ],
            },
            other: {
              name: "Other Payment Methods",
              instruments: [
                { method: "wallet", wallets: ["paytm", "phonepe", "amazonpay"] },
                { method: "upi", providers: ["google_pay", "phonepe", "paytm"] },
                { method: "paypal" },
                { method: "paylater", providers: ["simpl", "lazypay"] },
              ],
            },
          },
          sequence: ["block.banks", "block.other"],
          preferences: {
            show_default_blocks: true,
          },
        },
      },
      handler: (response: RazorpayResponse) => {
        setIsProcessing(false);
        setPaymentSuccess(true);
        setPaymentId(response.razorpay_payment_id);

        trackEvent("payment_success", {
          amount: amount,
          payment_id: response.razorpay_payment_id,
        });

        showSuccessToast({
          title: "Payment successful!",
          description: `Payment ID: ${response.razorpay_payment_id}`,
        });
      },
      modal: {
        ondismiss: () => {
          setIsProcessing(false);
          showInfoToast({
            title: "Payment cancelled",
            description: "You can try again whenever you're ready.",
          });
        },
        confirm_close: true,
      },
    };

    try {
      const razorpay = new window.Razorpay(options);
      razorpay.open();

      trackEvent("payment_initiated", {
        amount: amount,
      });
    } catch {
      setIsProcessing(false);
      showErrorToast({
        title: "Error",
        description: "Failed to initialize payment. Please try again.",
      });
    }
  };

  // Success state
  if (paymentSuccess) {
    return (
      <Layout>
        <Seo
          title="Payment Successful | Paras Mahajan"
          description="Your payment has been processed successfully."
        />
        <section className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
          <h1>Payment Successful</h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            Thank you for your payment.
          </p>
          <Card className="mt-8 w-full max-w-sm p-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Amount Paid</span>
                <span className="font-semibold">{formatAmount(amount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Payment ID</span>
                <span className="font-mono text-xs">{paymentId}</span>
              </div>
            </div>
          </Card>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => window.location.href = "/"}
          >
            Back to Home
          </Button>
        </section>
      </Layout>
    );
  }

  // Invalid amount state
  if (!isValidAmount) {
    return (
      <Layout>
        <Seo
          title="Invalid Payment Link | Paras Mahajan"
          description="This payment link is invalid or missing an amount."
        />
        <section className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
            <AlertCircle className="h-10 w-10 text-red-600 dark:text-red-400" />
          </div>
          <h1>Invalid Payment Link</h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            {validationError || "This payment link is invalid. Please contact the sender for a correct link."}
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => window.location.href = "/"}
          >
            Back to Home
          </Button>
        </section>
      </Layout>
    );
  }

  // Main payment page
  return (
    <Layout>
      <Seo
        title="Pay | Paras Mahajan"
        description="Complete your payment securely via Razorpay."
      />
      <section className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Amount Due
        </p>
        <h1 className="text-5xl md:text-6xl font-bold">{formatAmount(amount)}</h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          Click the button below to complete your payment securely via Razorpay.
        </p>

        <div className="mt-10 w-full max-w-sm">
          <Button
            type="button"
            variant="cta"
            size="lg"
            className="w-full text-lg py-6"
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <span className="flex items-center gap-2">
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Processing...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Pay {formatAmount(amount)}
              </span>
            )}
          </Button>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 space-y-3">
          <p className="text-xs text-muted-foreground">Accepted payment methods</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Cards */}
            <div className="flex items-center gap-1.5 rounded-md bg-muted/50 px-2.5 py-1.5 text-xs font-medium">
              <CreditCard className="h-3.5 w-3.5" />
              <span>Cards</span>
            </div>
            {/* PayPal */}
            <div className="flex items-center gap-1.5 rounded-md bg-muted/50 px-2.5 py-1.5 text-xs font-medium">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19a.563.563 0 0 0-.556.479l-1.614 10.527Z"/>
              </svg>
              <span>PayPal</span>
            </div>
            {/* Apple Pay */}
            <div className="flex items-center gap-1.5 rounded-md bg-muted/50 px-2.5 py-1.5 text-xs font-medium">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25"/>
              </svg>
              <span>Apple Pay</span>
            </div>
            {/* Google Pay */}
            <div className="flex items-center gap-1.5 rounded-md bg-muted/50 px-2.5 py-1.5 text-xs font-medium">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 1 1 0-12.064 5.96 5.96 0 0 1 3.957 1.477l2.835-2.835A9.965 9.965 0 0 0 12.545 2 10 10 0 1 0 22.5 12.345h-9.955z"/>
              </svg>
              <span>Google Pay</span>
            </div>
            {/* UPI */}
            <div className="flex items-center gap-1.5 rounded-md bg-muted/50 px-2.5 py-1.5 text-xs font-medium">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.5 3v7.5H4v3h7.5V21h3v-7.5H22v-3h-7.5V3z"/>
              </svg>
              <span>UPI</span>
            </div>
          </div>
        </div>

        <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          Secured by Razorpay
        </p>
      </section>
    </Layout>
  );
};

export default Pay;
