# Yugti Tech

Home page and project-brief flow for Yugti Tech (websites, web and mobile apps, software, AI-powered solutions, digital transformation, consulting). Built from the Velora Tech design.

## Run

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Pages

- `/` home: hero build studio, 8 kinds of build, 5-step process, AI tools, FAQ
- `/services` each service: when it fits and what you get
- `/contact` project brief form (`POST /api/inquiry`, emailed with Resend)
- `/privacy` short privacy note

## Notes

- Brand, services, steps, FAQs and AI tool list live in `lib/yugtytechnology/content.ts`.
- No prices, timelines or client names are published. The page says so rather than inventing them.
- Without `RESEND_API_KEY` and `INQUIRY_TO`, a dev server logs the brief; a production server returns 503.
- The build-studio project in the hero is an illustrative sample.
