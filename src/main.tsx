import { createRoot } from "react-dom/client";
import Lenis from "lenis";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);

  const lenis = new Lenis({
    duration: 1.3,
    easing: (t: number) => 1 - Math.pow(1 - t, 4),
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  root.render(<App />);
}
