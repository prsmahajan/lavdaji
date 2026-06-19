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

const configuredGtmId =
  import.meta.env.VITE_GTM_ID || import.meta.env.VITE_GOOGLE_TAG_MANAGER_ID;
const configuredGtagId = import.meta.env.VITE_GOOGLE_TAG_ID || import.meta.env.VITE_GTAG_ID;

const GTM_ID =
  configuredGtmId ||
  (typeof configuredGtagId === "string" && configuredGtagId.startsWith("GTM-") ? configuredGtagId : "");
const GTAG_ID = GTM_ID ? "" : configuredGtagId;

const toDataLayerEvent = (event: AnalyticsEvent) => ({
  event: event.name,
  ...(event.payload || {}),
  event_time: Math.round(event.timestamp / 1000),
});

const appendScript = (src: string) => {
  const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
  if (existingScript) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
};

const setupDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
};

const sendToGtag = (event: AnalyticsEvent) => {
  if (!GTAG_ID || typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", event.name, {
    ...(event.payload || {}),
    event_time: Math.round(event.timestamp / 1000),
  });
};

const sendToGtm = (event: AnalyticsEvent) => {
  if (!GTM_ID || typeof window === "undefined") return;

  setupDataLayer();
  window.dataLayer!.push(toDataLayerEvent(event));
};

const setupGtm = () => {
  if (!GTM_ID || typeof document === "undefined") return;

  setupDataLayer();
  window.dataLayer!.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });
  appendScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);
};

const setupGtag = () => {
  if (!GTAG_ID || typeof document === "undefined") return;
  if (typeof window.gtag === "function") return;

  setupDataLayer();
  // Must use arguments object (not rest params): GA4 script checks for Arguments type in dataLayer
  // eslint-disable-next-line prefer-rest-params
  window.gtag = function () { window.dataLayer!.push(arguments); } as unknown as typeof window.gtag;

  appendScript(`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`);

  window.gtag("js", new Date());
  window.gtag("config", GTAG_ID, { send_page_view: false });
};

let initialized = false;

export const initAnalytics = () => {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  setupGtm();
  setupGtag();

  window.addEventListener("analytics:track", (event: Event) => {
    const detail = (event as CustomEvent<AnalyticsEvent>).detail;
    if (!detail) return;

    sendToGtm(detail);
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
