console.log("[Cal.js] Starting initialization...");
(function (C, A, L) {
  let p = function (a, ar) {
    a.q.push(ar);
  };
  let d = C.document;
  C.Cal =
    C.Cal ||
    function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        const script = d.createElement("script");
        script.src = A;
        script.onload = function() {
          console.log("[Cal.js] Script loaded successfully from:", A);
        };
        script.onerror = function() {
          console.error("[Cal.js] Script failed to load from:", A);
        };
        d.head.appendChild(script);
        cal.loaded = true;
        console.log("[Cal.js] Script loading from:", A);
      }
      if (ar[0] === L) {
        const api = function () {
          p(api, arguments);
        };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
          console.log("[Cal.js] Namespace initialized:", namespace);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
})(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "60", { origin: "https://app.cal.com" });
console.log("[Cal.js] Cal object after init:", {
  type: typeof window.Cal,
  ns: window.Cal?.ns ? Object.keys(window.Cal.ns) : null,
});

// Check if Cal actually has the embed API loaded
setTimeout(() => {
  console.log("[Cal.js] Status check at 5 seconds:", {
    type: typeof window.Cal,
    ns: window.Cal?.ns ? Object.keys(window.Cal.ns) : null,
    hasUI: typeof window.Cal?.ns?.["60"] === 'function' ? 'yes' : 'no',
  });
}, 5000);

try {
  Cal.ns["60"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
  console.log("[Cal.js] UI initialized for namespace 60");
} catch (e) {
  console.error("[Cal.js] Error initializing UI:", e);
}
