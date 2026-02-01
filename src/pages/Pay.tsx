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
  theme?: {
    color?: string;
  };
  handler: (response: RazorpayResponse) => void;
  modal?: {
    ondismiss?: () => void;
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

        <p className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
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
