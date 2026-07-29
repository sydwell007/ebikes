# Civitas Cargo E-Bikes

Production marketing and partnership-capture application for Civitas Cargo -
Civitas Holdings' smart electric cargo mobility platform for African
last-mile logistics, StreetShops deliveries, fleet leasing and future
battery-swap energy infrastructure.

## Product journeys

- **Fleet operators & delivery businesses:** understand the vehicle,
  fleet telematics platform, and request a leasing partnership.
- **StreetShops / township commerce:** see how Civitas Cargo becomes the
  delivery layer connecting local shops to customers.
- **Municipalities & campuses:** review municipal service and campus
  mobility use cases and start a pilot conversation.
- **Investors:** review the platform's revenue model and request an
  investor pack.

The complete information architecture is documented in
[`ARCHITECTURE.md`](./ARCHITECTURE.md).

## Local development

```bash
npm install
npm run dev
```

The frontend runs without external infrastructure. When the PHP bridge is
not configured, lead-capture forms show a direct-contact fallback instead of
silently failing.

Copy `.env.example` to `.env.local` to connect the live backend:

```env
NEXT_PUBLIC_SITE_URL=https://ebikes.civitasholdings.co.za
EBIKES_BRIDGE_URL=https://ebikes.civitasholdings.co.za/php/
EBIKES_API_KEY=
EBIKES_API_TIMEOUT_MS=10000
```

## Production checks

```bash
npm run lint
npx tsc --noEmit
npm run build
npm audit --omit=dev
```

`GET /api/health` reports whether the application is in live bridge mode or
fallback mode. It never exposes backend credentials.

## PHP and MySQL deployment

- Upload the contents of `public/php` to the PHP host, at the `php/` web
  path (e.g. `https://ebikes.civitasholdings.co.za/php/`).
- Copy `config.example.php` to `config.php` on that host and add real
  secrets. `config.php` is gitignored and must never be committed.
- Import `public/sql/001_*.sql` through `003_*.sql` in numeric order.
- Verify `GET /php/health.php` with the protected `X-API-Key` header.

See [`public/sql/README.md`](./public/sql/README.md) for the complete
migration and operational checklist.
