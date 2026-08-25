# SALVAGE — sekhmet-site

PG300 salvage pass (2026-08-25). Picked up from Kimi AgentSwarm uncommitted diff; kept all working Kimi edits.

## Applied this pass
- `robots.txt` now points to a real `sitemap.xml` (created; was pointing at the HTML index / missing XML).
- Geography `grid-3` no longer jumps to 3 columns at 700px (headings like "Dendera, Esna, Edfu, Philae" overflowed at 768px); now 2-col at 700px, 3-col at 1000px. `.card-head` wraps, `h3` gets `overflow-wrap`.
- Desktop nav breakpoint lowered 1100px → 1000px (hamburger was held too high on tablet landscape); link padding tightened at 1000–1199px, restored at 1200px.
- Google Fonts stylesheet loaded non-render-blocking (`media="print" onload` + `noscript` fallback).
- Scroll spy throttled via `requestAnimationFrame` (was unthrottled on every scroll event).
- JPEGs recompressed (`magick -strip -interlace Plane -quality 80`): 1.2 MB → 529 KB total (-56%), dimensions unchanged so existing width/height attributes stay correct.

## Already applied by Kimi (kept)
- `/images/` absolute paths → relative (two 404 myth images).
- Duplicate "Claim Audit" nav entries removed (desktop + mobile).
- OG locale/site_name/image dims, Twitter card tags, JSON-LD WebSite, author meta.
- Myth image `alt` text; `--subtle`/`--danger`/`--contested` contrast raised to WCAG AA; `:focus-visible` styles.
- Inline style → `.mt-section` utility; hero `h1` clamp floor lowered; xbrd-spark/sekhmet substrate footer link.

## Leftover (not shipped)
- CSS/JS not minified and no cache-busting hashes (16 KB / 1.5 KB — low value, churn risk on a single-page dossier).
- kimi.app / kimi.pro mirror: BLOCKED globally (see /tmp/pg300/BLOCKERS.md) — no CLI/API publishing surface exists.
- Breakpoint tokens still mixed (700/800/900/1000/1200) but each now carries a distinct layout role; full consolidation not attempted.
