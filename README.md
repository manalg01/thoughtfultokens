# Thoughtful Tokens™ website

A responsive Next.js website for a premium corporate and occasion gifting studio.

## Run locally

1. Install Node.js 20 or later.
2. Run `npm install`.
3. Run `npm run dev` and open http://localhost:3000.
4. Run `npm run build` to create a production build, then `npm start` to serve it.

## Replaceable content

- Edit `lib/data.ts` to change collections, gallery images, categories, and navigation.
- Images currently use Unsplash remote URLs so the visual layout is ready to explore. Replace them with Thoughtful Tokens photography when available. `next.config.js` allows `images.unsplash.com`.
- Replace the contact email and phone placeholders in `components/site.tsx`.
- The contact form performs frontend validation only. Connect its submit handler in `app/contact/page.tsx` to an email or enquiry service before launch.
- Social proof text is explicitly placeholder copy, not attributed to real clients.

## Routes

`/`, `/corporate`, `/collections`, `/collections/[slug]`, `/occasions`, `/about`, `/contact`
