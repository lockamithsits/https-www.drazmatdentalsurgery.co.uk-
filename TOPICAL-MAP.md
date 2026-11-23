# TOPICAL MAP — Dr Azmat Dental Surgery (DRAFT)

Status: DRAFT 2026-11-23. No service page is built until its service is CONFIRMED
by raza — the GBP profile lists NO services, so every entity below is a CANDIDATE
drawn from standard dental practice coverage + treatments named in reviews.
[CONFIRM] = needs his word. Never build a page for an unconfirmed service.

## Service entities (candidates — all [CONFIRM])

Core (named in reviews, strongest signal):
- Emergency dentist / dental emergency [CONFIRM]
- Root canal treatment [CONFIRM]
- Dental fillings [CONFIRM]
- Scale and polish / hygiene / cleaning [CONFIRM]
- Dental X-rays [CONFIRM]

Standard practice coverage (no GBP signal — his word needed):
- Dental check-up / examination [CONFIRM]
- Tooth extraction [CONFIRM]
- Dental crowns [CONFIRM]
- Dental bridges [CONFIRM]
- Dentures (full / partial) [CONFIRM]
- Teeth whitening [CONFIRM]
- Dental implants [CONFIRM]
- Orthodontics / braces [CONFIRM]
- Children's dentistry [CONFIRM]
- Gum disease treatment [CONFIRM]
- Veneers [CONFIRM]
- Wisdom tooth removal [CONFIRM]

## Location entities

- Hub: Alum Rock (practice location, B8 3NU)
- Birmingham districts — build ONLY after he confirms the service area.
  (ECU precedent: "all Birmingham locations" was an explicit confirm; here it is
  NOT confirmed. Do not assume.)
- Service area map: Plus code F5P9+W4 Birmingham.

## Page architecture (working default)

- / — home (NAP, hours, call CTA, about the practice, services hub link)
- /about/ — practice, dentists [CONFIRM names], approach (no invented claims)
- /contact/ — address, hours, phone, map embed (Plus code / address search)
- /services/ — hub listing ONLY confirmed services
- /services/<service>-birmingham/ — one page per CONFIRMED service
- /areas-we-cover/ — only after service-area confirm
- Utility: /privacy/, /terms/, /sitemap.xml, /robots.txt, /llms.txt

## Rules (standing, from the other builds)

- Zero invented facts; unconfirmed = [CONFIRM] / held, never written as fact.
- No prices, no arrival-time claims, no "best / cheapest / #1" superlatives.
- No reviews, no rating, no Review/AggregateRating schema on v1 (gate 5).
- No NHS/private claim, no accessibility claim, no staff names until confirmed.
- FAQ JSON-LD must byte-match visible FAQ text; bare <script> tags (no code blocks).
- Titles 50–60 chars, metas 140–155. llms.txt + consistent citable facts on every page.
- Brand-pure: never name sibling brands; never name competitors.
