export interface AnalyticsEvent {
  name: string;
  payload?: Record<string, unknown>;
  timestamp: number;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GTAG_ID = import.meta.env.VITE_GTAG_ID;

const sendToGtag = (event: AnalyticsEvent) => {
  if (!GTAG_ID || typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", event.name, {
    ...(event.payload || {}),
    event_time: Math.round(event.timestamp / 1000),
  });
};

const setupGtag = () => {
  if (!GTAG_ID || typeof document === "undefined") return;
  if (typeof window.gtag === "function") return;

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }

  window.gtag = gtag as typeof window.gtag;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", GTAG_ID, { send_page_view: false });
};

let initialized = false;

export const initAnalytics = () => {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  setupGtag();

  window.addEventListener("analytics:track", (event: Event) => {
    const detail = (event as CustomEvent<AnalyticsEvent>).detail;
    if (!detail) return;

    sendToGtag(detail);
  });
};

export const trackEvent = (name: string, payload?: Record<string, unknown>) => {
  if (typeof window === "undefined") return;

  const event: AnalyticsEvent = {
    name,
    payload,
    timestamp: Date.now(),
  };

  window.dispatchEvent(new CustomEvent<AnalyticsEvent>("analytics:track", { detail: event }));

  if (import.meta.env.DEV) {
    console.debug("[analytics]", event);
  }
};
