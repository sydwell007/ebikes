# Civitas Cargo E-Bikes architecture

## 1. Experience architecture

The site is organised around four decision journeys instead of a flat list
of marketing pages.

| Audience | Entry points | Conversion |
| --- | --- | --- |
| Fleet operators / delivery businesses | `/product`, `/fleet`, `/use-cases` | Partnership request (Fleet Leasing) |
| StreetShops / township commerce | `/streetshops`, `/impact` | Partnership request (Delivery Pilot) |
| Municipalities & campuses | `/use-cases`, `/technology` | Partnership request (Municipality / Campus) |
| Investors | `/investors`, `/about` | Investor pack request |

The shared header keeps the vehicle story (**Product**, **Technology**,
**Use Cases**) separate from the platform story (**Fleet Platform**,
**StreetShops**, **Charging & Energy**) and the company story (**Impact**,
**Investors**, **About**). Mobile navigation mirrors the same hierarchy with
focus trapping, Escape-to-close, and scroll locking.

## 2. Frontend runtime

- Next.js App Router with Server Components by default.
- Static rendering for every marketing and legal route.
- Dynamic rendering only for API route handlers.
- Small client boundaries only for forms, mobile navigation, the animated
  stat counters, and scroll-reveal.
- Shared design tokens (dark, green/mint/blue "connected infrastructure"
  theme) live in `src/app/globals.css`.

## 3. Data flow

```text
Browser form
  -> same-origin Next.js Route Handler
  -> validation + request ID + size/content-type checks
  -> authenticated PHP bridge request
  -> PHP validation + salted rate limit
  -> MySQL lead table + consent/attribution audit record
```

The API key is server-only. Browser code never receives PHP or database
credentials. If bridge configuration is absent or temporarily unavailable,
forms show a human-readable direct-contact fallback rather than failing
silently or pretending to submit.

## 4. Backend assets

- `public/php/shared`: authentication, CORS, database, validation, response,
  rate-limit, and lead-metadata primitives (shared across endpoints).
- `public/php/partnerships`: single-purpose write endpoint backing the
  Fleet Leasing / StreetShops Pilot / Municipality / Campus / Investor /
  Manufacturing partnership form.
- `public/php/contact`: general contact form endpoint.
- `public/php/health.php`: protected service and database health check.
- `public/sql`: ordered MySQL schema, rate-limit, and consent metadata
  migrations.

## 5. Security and compliance

- Framework security headers are configured in `next.config.ts`.
- Next.js validates JSON content type, body size, and all required values.
- PHP endpoints repeat validation at the trust boundary.
- Every lead requires explicit privacy consent.
- Campaign attribution and consent receipts are stored separately from
  operational lead tables.
- Raw visitor IPs are not stored; rate limits and audit records use salted
  hashes.

## 6. Deployment contract

1. Build and deploy the Next.js application (Vercel).
2. Import SQL migrations in numeric order on Afrihost MySQL.
3. Deploy the PHP bridge and create an uncommitted `config.php`.
4. Add matching `EBIKES_BRIDGE_URL` and `EBIKES_API_KEY` values to the
   Next.js host.
5. Verify `/api/health`, then submit a non-production test lead and confirm
   both the lead row and `lead_submission_meta` audit row.

## 7. Relationship to sibling Civitas platforms

This site is the vehicle + delivery-platform story. It links out to, but
does not duplicate:

- **Civitas Energy** (`energy` repo) — the general EV charging, BESS, and
  smart power infrastructure company. This site's `/energy` page covers
  only e-bike battery-swap and depot charging, and should cross-link to the
  Civitas Energy site once it is live.
- **StreetShops** (`streetshops` repo) — the township commerce marketplace
  this platform delivers for.
