import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { showSuccessToast } from "@/hooks/use-toast";
import { generatePaymentLink } from "@/lib/payment";
import { DollarSign, Copy, Link as LinkIcon } from "lucide-react";

const RAZORPAY_CURRENCY = "USD";

const GeneratePaymentLink = () => {
  const [amount, setAmount] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow numbers and decimal point
    const value = e.target.value.replace(/[^0-9.]/g, "");
    // Prevent multiple decimal points
    const parts = value.split(".");
    if (parts.length > 2) return;
    // Limit decimal places to 2
    if (parts[1] && parts[1].length > 2) return;
    setAmount(value);
  };

  const formatAmount = (value: string) => {
    if (!value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: RAZORPAY_CURRENCY,
      }).format(0);
    }
    const num = parseFloat(value);
    if (isNaN(num)) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: RAZORPAY_CURRENCY,
      }).format(0);
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: RAZORPAY_CURRENCY,
    }).format(num);
  };

  const handleGenerate = () => {
    const num = parseFloat(amount);
    if (!num || num <= 0) return;

    const baseUrl = window.location.origin;
    const link = generatePaymentLink(num, baseUrl);
    setGeneratedLink(link);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    showSuccessToast({
      title: "Copied!",
      description: "Payment link copied to clipboard",
    });
  };

  return (
    <Layout>
      <Seo
        title="Generate Payment Link | Paras Mahajan"
        description="Generate secure payment links for clients."
      />
      <section className="space-y-6">
        <h1>Generate Payment Link</h1>
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          Create a secure payment link to send to your client. The link is signed to prevent tampering.
        </p>
      </section>

      <section className="mt-10">
        <Card className="max-w-lg p-6">
          <div className="space-y-6">
            {/* Amount Input */}
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-sm font-medium">
                Amount ({RAZORPAY_CURRENCY})
              </Label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input
                  id="amount"
                  type="text"
                  inputMode="decimal"
                  placeholder="0.00"
                  value={amount}
                  onChange={handleAmountChange}
                  className="pl-9 text-lg font-semibold"
                />
              </div>
              {amount && parseFloat(amount) > 0 && (
                <p className="text-sm text-muted-foreground">
                  Client will pay {formatAmount(amount)}
                </p>
              )}
            </div>

            {/* Generate Button */}
            <Button
              type="button"
              variant="cta"
              size="lg"
              className="w-full"
              onClick={handleGenerate}
              disabled={!amount || parseFloat(amount) <= 0}
            >
              <LinkIcon className="mr-2 h-4 w-4" />
              Generate Link
            </Button>

            {/* Generated Link */}
            {generatedLink && (
              <div className="space-y-3 pt-4 border-t">
                <Label className="text-sm font-medium">Payment Link</Label>
                <div className="flex gap-2">
                  <Input
                    readOnly
                    value={generatedLink}
                    className="font-mono text-xs"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={copyToClipboard}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Share this link with your client. They cannot change the amount.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => window.open(generatedLink, "_blank")}
                >
                  Preview Link
                </Button>
              </div>
            )}
          </div>
        </Card>
      </section>
    </Layout>
  );
};

export default GeneratePaymentLink;
