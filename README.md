# Thoughtful Tokens

### Thoughtful gifting, beautifully presented.

[Thoughtful Tokens](https://thoughtfultokens.vercel.app/) is a premium gifting website for meaningful, personalized gifts for businesses, celebrations, and special occasions. Its visual-first editorial design pairs curated imagery and subtle motion with practical category discovery and gifting enquiries.

## Overview

The site introduces Thoughtful Tokens and its gifting services through a visual homepage, dedicated content pages, and a contact form. The experience is designed to feel warm, considered, and easy to browse on desktop and mobile.

## Gifting categories

- **Corporate Gifting** — Gifts curated for businesses, teams, employees, and clients.
- **Mementos** — Keepsakes for milestones, events, and meaningful occasions.
- **Kids' Gifts** — Thoughtfully selected gifts for children.
- **Occasion Gifts** — Gifts for celebrations, festivals, and special moments.
- **Customized Gifts** — Personalized gifting options tailored to individual or business needs.

## Design approach

- Visual-first layouts featuring large editorial imagery.
- A warm off-white palette with restrained blue accents and a subtle grid texture.
- Clear typography, generous spacing, and responsive layouts.
- Understated motion that supports the content without distracting from it.
- Shared components and centralized image/category data for easier updates.

## Tech stack

Verified from `package.json` and the application source:

- **Framework:** Next.js 14 (App Router)
- **UI:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS and `app/globals.css`
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Images:** Next.js Image component
- **Deployment:** Vercel (live site linked above)

## Getting Started

The website is live and ready to explore!

🌐 **Visit Thoughtful Tokens:** [https://thoughtfultokens.vercel.app/](https://thoughtfultokens.vercel.app/)

Open the link in your browser to explore the website and discover our gifting categories. No installation or setup required.

### Available scripts

- `npm run dev` — Start the local development server.
- `npm run lint` — Run the TypeScript check (`tsc --noEmit`).
- `npm run build` — Create an optimized production build.
- `npm start` — Serve the production build.

## Project structure

```text
.
├── app/
│   ├── about/page.tsx
│   ├── collections/
│   │   ├── [slug]/page.tsx
│   │   └── page.tsx
│   ├── contact/page.tsx
│   ├── corporate/page.tsx
│   ├── occasions/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── site.tsx
├── lib/
│   └── data.ts
├── public/
│   └── images/
├── next.config.js
├── package.json
└── README.md
```

## Routes

- `/` — Homepage
- `/corporate` — Corporate gifting
- `/collections` — Gifting categories and curated collections
- `/collections/[slug]` — Collection detail
- `/occasions` — Occasion gifting
- `/about` — Brand story
- `/contact` — Gifting enquiry form

## Updating content and assets

- Edit `lib/data.ts` to update category and collection content, navigation, image URLs, and the clearly marked client-logo placeholders.
- Replace the remote Unsplash image URLs in `lib/data.ts` with approved Thoughtful Tokens photography when it is available. `next.config.js` currently allows optimized images from `images.unsplash.com`.
- The cropped brand mark is in `public/images/thoughtful-tokens-mark.jpg`.
- Review the email and phone displayed in `components/site.tsx` before publishing contact details.
- The contact form currently validates in the browser only. Its handler is in `app/contact/page.tsx`; connect it to an email or enquiry service before relying on it to deliver submissions.
- Client logo and testimonial areas use placeholders. Replace them only with confirmed assets and approved customer statements.

## Deployment

The live site is hosted on Vercel. To deploy another instance, import the repository into Vercel, choose the production branch, verify build settings and any required environment variables, then deploy and confirm the production build.

If automatic deployments are enabled for the connected Git repository, pushing to its configured production branch may trigger a Vercel deployment.

## Future improvements

- Add a portfolio of completed gifting projects.
- Replace placeholder imagery with approved brand photography.
- Add verified client logos and testimonials when available.
- Connect the enquiry form to a production email or CRM workflow.
- Continue refining accessibility, performance, and mobile layouts.

---

<p align="center">
  <strong>Thoughtful Tokens</strong><br />
  Making gifts meaningful and useful.
</p>
