import { useEffect } from 'react';
import { site } from '../content/site';

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/** Updates title, description and canonical / OG URL per route. */
export function usePageMeta(title?: string, description?: string, path = '/') {
  useEffect(() => {
    const fullTitle = title ? `${title} | Kusal Sandipa` : site.seoTitle;
    const desc = description ?? site.seoDescription;
    const url = `${site.siteUrl.replace(/\/$/, '')}${path}`;
    document.title = fullTitle;
    setMeta('meta[name="description"]', 'content', desc);
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', desc);
    setMeta('meta[name="twitter:title"]', 'content', fullTitle);
    setMeta('meta[name="twitter:description"]', 'content', desc);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('link[rel="canonical"]', 'href', url);
  }, [title, description, path]);
}
