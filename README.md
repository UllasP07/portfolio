# Ullas Puttaiah — Portfolio v2

Next.js 14 portfolio with the **Cool Coastal Vibes** palette, glassmorphism cards, skill icons, experience-first layout, and a floating RAG chatbot.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS + CSS custom properties |
| Fonts | Syne (display) · DM Sans (body) · DM Mono (mono) |
| Animation | Framer Motion |
| AI Chatbot | FastAPI + LangChain + FAISS on Hugging Face Spaces |
| Commit graph | [ghchart.rshah.org](https://ghchart.rshah.org) |

## Palette — Cool Coastal Vibes

| Token | Hex | Role |
|---|---|---|
| Space Indigo | `#2b2d42` | Card backgrounds |
| Lavender Grey | `#8d99ae` | Accents, labels, borders |
| Platinum | `#edf2f4` | Primary text |
| Strawberry Red | `#ef233c` | CTAs, dots, mug fill |
| Flag Red | `#d90429` | Hover state, active |

## Getting started

```bash
cp .env.local.example .env.local   # fill in your values
npm install
npm run dev
```

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_GITHUB_USERNAME` | yes | Your GitHub handle (e.g. `ullasp`) |
| `NEXT_PUBLIC_HF_SPACE_URL` | no | Hugging Face Space URL for the RAG chatbot |

## What to personalise

1. **`src/data/content.ts`** — replace all `// ← replace` lines with real info (resume link, email, companies, project URLs).
2. **`NEXT_PUBLIC_GITHUB_USERNAME`** — your real GitHub username so the commit graph and counter show your data.
3. **`NEXT_PUBLIC_HF_SPACE_URL`** — point to your FastAPI RAG backend once deployed to Hugging Face Spaces.

## Section order

Hero → Experience → Projects → Skills → Coffee + Commits → Contact

## RAG Chatbot

The floating **Ullas AI** button in the bottom-right opens a chat window. Messages are sent as `POST /ask` to your Hugging Face Space. Without the env var set it shows a helpful error telling you how to connect it.

## Deploy

```bash
npm run build   # verify no TS / lint errors first
```

Push to GitHub and connect to Vercel. Set the same env vars in the Vercel dashboard.
