import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
}

export const Seo = ({ title, description }: SeoProps) => {
  useEffect(() => {
    if (typeof document === "undefined") return;

    document.title = title;

    const ensureMeta = (selector: string, attr: "content", value: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement("meta");
        if (selector.startsWith("meta[name=")) {
          const name = selector.match(/meta\[name=\"(.+?)\"/i)?.[1];
          if (name) element.setAttribute("name", name);
        } else if (selector.startsWith("meta[property=")) {
          const property = selector.match(/meta\[property=\"(.+?)\"/i)?.[1];
          if (property) element.setAttribute("property", property);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attr, value);
    };

    ensureMeta('meta[name="description"]', "content", description);
    ensureMeta('meta[property="og:title"]', "content", title);
    ensureMeta('meta[property="og:description"]', "content", description);
    ensureMeta('meta[name="twitter:title"]', "content", title);
    ensureMeta('meta[name="twitter:description"]', "content", description);
  }, [title, description]);

  return null;
};
