# TONIKA 2 Premium Website

Modern multilingual website for `TONIKA 2 d.o.o.` built with Next.js 15, TypeScript, TailwindCSS, Framer Motion, and an SMTP-backed contact form.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000/sl`.

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
NEXT_PUBLIC_SITE_URL=https://transporttonika2.com
CONTACT_TO_EMAIL=tonika2.si@siol.net
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=website@example.com
SMTP_PASS=replace-with-secure-password
SMTP_FROM=website@example.com
```

## Build

```bash
npm run build
npm run start
```

## cPanel Deployment

This project uses a Next.js API route for the contact form, so cPanel must support Node.js applications.

1. Upload the project to the hosting account or deploy from Git.
2. In cPanel, open **Setup Node.js App**.
3. Create a Node app:
   - Node version: latest LTS available
   - Application root: project folder
   - Startup file: `node_modules/next/dist/bin/next`
4. Add environment variables from `.env.example`.
5. In the cPanel terminal, run:

```bash
npm install
npm run build
```

6. Set the app start command to:

```bash
npm run start
```

7. Point the domain document/root or proxy to the Node app according to the hosting provider's cPanel instructions.

If the cPanel plan does not support Node.js, the contact form must be changed to a static form provider or hosted on Render/Vercel while the domain points there.

## GitHub + Render Deployment

1. Push the project to GitHub.
2. In Render, create a **Web Service** from the repository.
3. Use:
   - Build command: `npm install && npm run build`
   - Start command: `npm run start`
   - Node version: latest LTS
4. Add environment variables from `.env.example`.
5. Deploy and set `NEXT_PUBLIC_SITE_URL` to the production domain.

## SEO

The site includes:

- Localized pages: `/sl`, `/en`, `/de`
- Localized metadata
- `sitemap.xml`
- `robots.txt`
- JSON-LD `LocalBusiness` schema
- Canonical and alternate language URLs
