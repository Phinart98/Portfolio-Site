export const fullDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export const shortDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

export const monthYear = (d: Date | string) =>
  (typeof d === 'string' ? new Date(`${d}-01T00:00:00Z`) : d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', timeZone: 'UTC' });

export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

// A series part's title without the series name in front of it, so lists
// read "The Final Report" under the series heading instead of repeating it.
export const partTitle = (title: string, series: string) =>
  title.toLowerCase().startsWith(`${series.toLowerCase()}: `) ? title.slice(series.length + 2) : title;

// With build.format 'file', Astro.url.pathname is "/blog.html" at build time.
// Vercel serves it as "/blog" (cleanUrls), so canonical URLs and nav state use
// the clean form.
export const cleanPath = (pathname: string) =>
  pathname.replace(/\.html$/, '').replace(/\/index$/, '/') || '/';

// Turns [text](url) into links. External links open in the same tab, which
// keeps the back button working the way people expect.
export function linkify(text: string): string {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return esc(text).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, label, href) => `<a href="${href.replace(/"/g, '&quot;')}">${label}</a>`);
}
