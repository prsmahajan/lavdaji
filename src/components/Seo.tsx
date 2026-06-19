import { useEffect } from "react";

const BASE_URL = "https://prsmahajan.com";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export const Seo = ({ title, description, path, ogImage, noIndex = false }: SeoProps) => {
  useEffect(() => {
    if (typeof document === "undefined") return;

    document.title = title;

    const ensureMeta = (selector: string, attrName: string, attrValue: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    const ensureLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    const canonicalUrl = path ? `${BASE_URL}${path}` : BASE_URL;
    const image = ogImage ?? `${BASE_URL}/favicon.png`;

    ensureMeta('meta[name="description"]', "name", "description", description);
    ensureMeta('meta[name="robots"]', "name", "robots", noIndex ? "noindex, nofollow" : "index, follow");

    ensureMeta('meta[property="og:title"]', "property", "og:title", title);
    ensureMeta('meta[property="og:description"]', "property", "og:description", description);
    ensureMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    ensureMeta('meta[property="og:image"]', "property", "og:image", image);

    ensureMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    ensureMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    ensureMeta('meta[name="twitter:image"]', "name", "twitter:image", image);

    ensureLink("canonical", canonicalUrl);
  }, [title, description, path, ogImage, noIndex]);

  return null;
};
