# Cedar Health Clinic

A single-page medical clinic website built with Next.js 16, TypeScript, Tailwind CSS 4, and shadcn/ui. Designed in the structure of a medical/health WordPress theme, but rebuilt as a modern React app.

## What's inside

- Single page with smooth-scroll navigation: Home, About, Services, Doctors, Patients, Contact
- Services: Family Medicine, Pediatrics, Cardiology, Women's Health, Mental Health, Lab and Diagnostics
- Working appointment form (react-hook-form + zod) with validation and success state
- Custom brand identity (Cedar Health Clinic), custom SVG logo and favicon
- Real medical imagery via OSS-hosted CDN URLs
- Mobile responsive with a slide-in mobile menu
- "Designed By hanifah Studio" linked footer credit

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, standalone output)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) components
- [lucide-react](https://lucide.dev) icons
- [react-hook-form](https://react-hook-form.com) + [zod](https://zod.dev)
- [Prisma](https://www.prisma.io) ORM (schema included; not actively used by the current build)

## Local development

```bash
# install deps
bun install

# start dev server on http://localhost:3000
bun run dev

# lint
bun run lint
```

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js. The included `vercel.json` pins the framework, build command (`next build`), install command (`bun install`), and region.
4. No environment variables are required for the site to build and run (the appointment form is currently client-side only; wire a backend route + email service to receive real submissions).
5. Deploy.

### Self-host / Docker

The Next.js config uses `output: "standalone"`, so a production build produces a self-contained server at `.next/standalone/server.js`:

```bash
bun run build
NODE_ENV=production bun .next/standalone/server.js
```

## Project structure

```
src/
├── app/
│   ├── globals.css         # Brand palette + global styles
│   ├── layout.tsx          # Metadata, fonts, favicon
│   └── page.tsx            # Page assembly
├── components/
│   ├── site/
│   │   ├── top-bar.tsx
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── quick-info.tsx
│   │   ├── services.tsx
│   │   ├── about.tsx
│   │   ├── doctors.tsx
│   │   ├── testimonials.tsx
│   │   ├── appointment.tsx
│   │   ├── footer.tsx
│   │   └── data.ts          # Services, doctors, testimonials, contact info
│   └── ui/                  # shadcn/ui primitives
└── lib/
    └── utils.ts

public/
├── logo.svg
└── favicon.svg
```

## Customising for a real clinic

Before going live, replace the placeholder content in `src/components/site/data.ts`:

- Doctor names, photos, education, bios
- Clinic address, phone, email, hours
- Service descriptions if the practice differs

Replace `public/logo.svg` with the clinic's actual logo, and update the brand palette in `src/app/globals.css` (CSS custom properties on `:root`).

## Wiring the appointment form

The form currently shows a success message client-side. To make it actually save or email submissions, add a Next.js route handler at `src/app/api/appointment/route.ts` and update `onSubmit` in `src/components/site/appointment.tsx` to `fetch('/api/appointment', { method: 'POST', body: JSON.stringify(data) })`.

## License

Proprietary. All rights reserved.
