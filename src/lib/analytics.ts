export interface AnalyticsEvent {
  name: string;
  payload?: Record<string, unknown>;
  timestamp: number;
}

export const trackEvent = (name: string, payload?: Record<string, unknown>) => {
  if (typeof window === "undefined") return;

  const event: AnalyticsEvent = {
    name,
    payload,
    timestamp: Date.now(),
  };

  window.dispatchEvent(new CustomEvent<AnalyticsEvent>("analytics:track", { detail: event }));

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", event);
  }
};
