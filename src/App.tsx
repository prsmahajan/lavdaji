import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { initAnalytics, trackEvent } from "@/lib/analytics";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import V1 from "./pages/V1";
import V1Offers from "./pages/V1Offers";
import V1Services from "./pages/V1Services";
import V2 from "./pages/V2";
import Services from "./pages/Services";
import Proof from "./pages/Proof";
import Offers from "./pages/Offers";
import Process from "./pages/Process";
import FAQ from "./pages/FAQ";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import Pay from "./pages/Pay";
import GeneratePaymentLink from "./pages/GeneratePaymentLink";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import NotFound from "./pages/NotFound";
import { SpeedInsights } from "@vercel/speed-insights/react"

const queryClient = new QueryClient();

const AnalyticsListener = () => {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackEvent("page_view", {
      page_path: location.pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  return null;
};

const renderV1Routes = () => (
  <>
    <Route path="services" element={<V1Services />} />
    <Route path="what-i-build" element={<V1Services />} />
    <Route path="offers" element={<V1Offers />} />
    <Route path="proof" element={<Proof />} />
    <Route path="process" element={<Process />} />
    <Route path="faq" element={<FAQ />} />
    <Route path="schedule" element={<Schedule />} />
    <Route path="contact" element={<Contact />} />
    <Route path="pay" element={<Pay />} />
    <Route path="generate-link" element={<GeneratePaymentLink />} />
    <Route path="privacy-policy" element={<PrivacyPolicy />} />
    <Route path="terms-of-service" element={<TermsOfService />} />
    <Route path="refund-policy" element={<RefundPolicy />} />
  </>
);

const renderV2Routes = () => (
  <>
    <Route path="services" element={<Services />} />
    <Route path="what-i-build" element={<Services />} />
    <Route path="offers" element={<Offers />} />
    <Route path="proof" element={<Proof />} />
    <Route path="process" element={<Process />} />
    <Route path="faq" element={<FAQ />} />
    <Route path="schedule" element={<Schedule />} />
    <Route path="contact" element={<Contact />} />
    <Route path="pay" element={<Pay />} />
    <Route path="generate-link" element={<GeneratePaymentLink />} />
    <Route path="privacy-policy" element={<PrivacyPolicy />} />
    <Route path="terms-of-service" element={<TermsOfService />} />
    <Route path="refund-policy" element={<RefundPolicy />} />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SpeedInsights />
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsListener />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/v1" element={<V1 />} />
          <Route path="/v2" element={<V2 />} />
          <Route path="/v1/*">{renderV1Routes()}</Route>
          <Route path="/v2/*">{renderV2Routes()}</Route>
          <Route path="/services" element={<Services />} />
          <Route path="/what-i-build" element={<Services />} />
          <Route path="/proof" element={<Proof />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/process" element={<Process />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/generate-link" element={<GeneratePaymentLink />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
