# Salong Najs

Redesign proposal for [salongnajs.com](https://salongnajs.com), the website of a hair salon on Södermalm in Stockholm. Built with Next.js 16 (App Router, Cache Components), TypeScript and Tailwind CSS 4. Every page is prerendered as static content.

## Design

The site takes its colour from the salon's blue floral wallpaper:

- **Colours:** cobalt `#2236c8` as the accent, with paper `#f6f5f1`, ink `#15171f` and a light blue `#e9ecf7` for section backgrounds.
- **Images:** wall photos in their original colours and black-and-white stylist portraits.
- **Typefaces:** Newsreader for headings and Familjen Grotesk (made by Familjen STHLM) for text.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` if the production domain differs from `https://salongnajs.com`. Canonical URLs, the sitemap, robots.txt and structured data all use it.

## Structure

| Path | Contents |
| --- | --- |
| `src/content/` | All business content: contact details, booking links, prices, team, policies, images |
| `src/components/home/` | Homepage sections |
| `src/components/` | Shared pieces: page header, price list, policies, booking section, buttons |
| `src/components/layout/` | Header, navigation, mobile menu, mobile booking bar, footer |
| `src/lib/` | Price formatting, metadata and JSON-LD |
| `docs/content-review.md` | Content to confirm with the salon before launch |

To change prices, edit `src/content/prices.ts`. The homepage preview, the price page and the structured data all read from it.

## Booking

The site does not take bookings itself. It links to:

- Timma (`boka.timma.se/salongnajs`) for Ida, Jenny, Madelaine and Nadire
- Bokadirekt for Heliko

Links from the old site (`/work/priser/` and the others) redirect permanently to the new routes.
