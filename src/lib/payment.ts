// Payment link signing utilities
// Uses HMAC-like signature to prevent URL tampering

const PAYMENT_SECRET = import.meta.env.VITE_PAYMENT_SECRET || "default-secret-change-me";

// Simple hash function for browser (no crypto needed)
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  // Convert to base36 and add some obfuscation
  const base = Math.abs(hash).toString(36);
  const salt = str.length.toString(36);
  return `${base}${salt}`;
}

// Generate a signature for the amount
function generateSignature(amount: number): string {
  const data = `${amount}-${PAYMENT_SECRET}`;
  return simpleHash(data);
}

// Verify signature matches the amount
export function verifyPaymentLink(amount: number, signature: string): boolean {
  const expectedSig = generateSignature(amount);
  return signature === expectedSig;
}

// Generate a complete payment URL
export function generatePaymentLink(amount: number, baseUrl: string = ""): string {
  const signature = generateSignature(amount);
  const url = `${baseUrl}/pay?amount=${amount}&sig=${signature}`;
  return url;
}

// Parse and validate payment URL params
export function parsePaymentParams(searchParams: URLSearchParams): {
  amount: number;
  isValid: boolean;
  error?: string;
} {
  const amountParam = searchParams.get("amount");
  const signature = searchParams.get("sig");

  if (!amountParam) {
    return { amount: 0, isValid: false, error: "Missing amount" };
  }

  const amount = parseFloat(amountParam);
  
  if (isNaN(amount) || amount <= 0) {
    return { amount: 0, isValid: false, error: "Invalid amount" };
  }

  if (!signature) {
    return { amount, isValid: false, error: "Missing signature - link may be tampered" };
  }

  const isValid = verifyPaymentLink(amount, signature);
  
  if (!isValid) {
    return { amount, isValid: false, error: "Invalid signature - link may be tampered" };
  }

  return { amount, isValid: true };
}
