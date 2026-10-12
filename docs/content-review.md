# Content review – items to confirm with Salong Najs

Sources checked on 2026-10-11:

- salongnajs.com. The live site currently returns Loopia's "website is currently not available" page, so content was taken from the Wayback Machine snapshots dated 2026-04-20 (`/work/priser/`), 2026-05-18 (`/`, `/work/kontakt/`) and 2026-06-07 (`/work/omoss/`, `/work/bokatid/`).
- The salon's Timma booking page `boka.timma.se/salongnajs`, read through its public API.
- Heliko's Bokadirekt page `bokadirekt.se/places/salong-najs-heliko-56261`.

The website price list uses the salon's own price page as its source. All prices live in `src/content/prices.ts`.

## 1. Price differences between sources

| Service | salongnajs.com | Timma (salon) | Bokadirekt (Heliko) |
| --- | --- | --- | --- |
| Klippning | fr. 950 kr | 950 kr | fr. 850 kr |
| Bottenfärgning / toning | fr. 1 800 kr | 1 800 kr | fr. 1 590 kr |
| Slingor och nyansering | fr. 2 100 kr | 2 100 kr | fr. 2 300 kr |
| Slingor, färg och klippning | fr. 2 750 kr | 2 750 kr | fr. 2 500 kr (kort hår) |
| Slingor, färg och klippning – långt hår | fr. 3 100 kr | 3 100 kr | fr. 2 990 kr |
| Färg/toning hela håret + klippning | – | 2 600 kr | fr. 1 990 kr |
| Balayage/slingor, extra tid inkl. klippning | – | 3 550 kr | fr. 3 290 kr |
| Permanent | fr. 2 800 kr | not listed publicly | – |
| Barn 0–6 år | fr. 600 kr | 600 kr | – |
| Barn 7–12 år | fr. 750 kr | 750 kr | – |
| Barnklippning 0–9 år | – | – | 650 kr |
| Uppsättning | fr. 1 000 kr/tim | – | – |
| Hårstylist vid fotografering | – | 900 kr | – |
| Bruduppsättning | på förfrågan | – | – |
| Kur i samband med behandling | fr. 250 kr | – | 400 kr |
| Ny frisyr | – | listed, no price | – |

Questions for the owner:

1. Should *Färg/toning hela håret + klippning* (2 600 kr) and *Balayage/slingor extra tid* (3 550 kr) be added to the website price list? Both can be booked on Timma but are missing from the price page.
2. Is *Permanent* (fr. 2 800 kr) still offered? It is not visible in the online booking.
3. Heliko's prices on Bokadirekt differ from the salon list. Should the website show only the salon's prices (as it does now), or add a note that Heliko has separate prices?
4. Is *Uppsättning* still fr. 1 000 kr/tim, or should it match "Hårstylist vid fotografering" at 900 kr?

## 2. Policies

- The website says: "Avbokning måste ske senast 24 timmar innan … Vi debiterar vid uteblivet besök."
- Timma's terms say: "Vi förbehåller oss rätten att debitera 50 % av bokningspriset vid utebliven ankomst eller avbokning senare än 24 timmar innan bokningens starttid."

Both texts appear on `/boka-tid`. Please confirm that the 50 % figure is current.

The price page asks customers with thick or extra-long hair to book "3 timmar, vilket är klipp + sling + färg i internetbokningen". In Timma, the 3-hour service is *Balayage/slingor extra tid inklusive klippning*, and *Slingor och färg + klippning långt hår* is 150 min. Please confirm which service customers should pick.

## 3. Team

Confirmed in Timma in October 2026: Nadire, Madde (Madelaine), Heliko, Jenny and Ida, which matches the five names on the old About page.

- Portraits are the 2017 black-and-white photos from the old site (670 × 377 px). For sharper images on large screens, new photos at about 2 000 px wide would help.
- Heliko's contact email on the old site is a private Gmail address (traksheliko@gmail.com). Please confirm that Heliko wants it published.
- No biographies, specialities or experience are shown, because none were available to verify.

## 4. Imagery

- The blue floral photo comes from the salon's Timma profile (uploaded May 2021). The site describes it as the wallpaper inside the salon ("Väggen i salongen"). **Please confirm this is correct and that the photo can be used.**
- No photos of hair work or the salon interior were available. Real images can be swapped in through `src/content/media.ts`.
- The hibiscus mark comes from the old site's 512 px favicon. A vector version of the logo would be better.
- No Instagram content is embedded. The Instagram section links to @salongnajs.

## 5. Not included on purpose

- Opening hours (not published anywhere we could verify).
- Reviews and ratings. Bokadirekt shows 4.9/5 from 906 reviews for Heliko, but these are not shown or added to structured data.
- A contact form. No delivery backend is configured, so the site shows phone and email links instead.
- The old price-page link to `boka.itsperfect.se`, which no longer resolves.
