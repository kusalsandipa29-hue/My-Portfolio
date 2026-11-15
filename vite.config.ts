import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/content/site';
import { projects } from './src/content/projects';

/**
 * Injects the public site URL into index.html (Open Graph tags need absolute URLs)
 * and emits sitemap.xml + robots.txt at build time, so both stay in sync with
 * src/content/site.ts and the project list. Nothing here needs manual editing.
 */
function seoFiles(): Plugin {
  const base = site.siteUrl.replace(/\/$/, '');
  const routes = ['/', '/resume', ...projects.map((p) => `/projects/${p.slug}`)];
  return {
    name: 'portfolio-seo-files',
    transformIndexHtml(html) {
      return html.replace(/%SITE_URL%/g, base);
    },
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);
      const urls = routes
        .map((r) => `  <url><loc>${base}${r === '/' ? '/' : r}</loc><lastmod>${today}</lastmod></url>`)
        .join('\n');
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`,
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoFiles()],
});
