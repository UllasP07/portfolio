# Ullas Puttaiah — Portfolio

Next.js 14 portfolio that blends responsive UX and DevOps proof points.

## Stack

- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS with the Summer Ocean Breeze palette
- **Effects**: Framer Motion for the interactive coffee counter

## Getting Started

```bash
npm install
npm run dev
```

### Environment variables

Create `.env.local` with the following keys:

```
NEXT_PUBLIC_GITHUB_USERNAME=ullasp
```

## Multi-device testing

- Uses fluid grids (`repeat(auto-fit, minmax())`) for sections and cards
- Touch-friendly controls (44px+) on hero CTAs, chat input, and coffee counter
- CSS aspect ratios keep project art + cards consistent on phones to ultrawide displays

## Scripts

- `npm run dev` – local dev server
- `npm run build` – production build
- `npm run start` – preview build
- `npm run lint` – Next.js lint rules

Deploy easily to Vercel/Netlify and connect your Hugging Face Space for the chatbot responses.
