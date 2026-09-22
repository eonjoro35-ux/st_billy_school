# St. Billy's Community School — Website

A full MERN-stack website for **St. Billy's Community School**, a fictionalised community school
based in Dandora, Nairobi. Built with:

- **Frontend:** React + TypeScript + Tailwind CSS (Vite)
- **Backend:** Node.js + Express + TypeScript
- **Database:** MongoDB (Mongoose)

## Project structure

```
st-billys-school/
├── backend/              Express + TypeScript API
│   └── src/
│       ├── config/       Database connection
│       ├── models/       Mongoose schemas
│       ├── controllers/  Route handlers
│       ├── routes/       Express routers
│       ├── middleware/   Error handling
│       ├── utils/        Shared helpers
│       └── seed/         Starter content + seed script
└── frontend/              React + TypeScript + Tailwind app
    └── src/
        ├── components/   Reusable UI, layout, and page-section components
        ├── pages/         One file per route
        ├── lib/           API client + data-fetching hook
        └── types/         Shared TypeScript types
```

## Pages included

Home · About · Academics · Admissions (with inquiry form) · Gallery (filterable) ·
News & Events (list + detail) · Contact (with message form) · Donate

## 1. Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- A MongoDB database — either:
  - **Local:** install MongoDB Community Server and run it (`mongod`), or
  - **Cloud:** a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (recommended if you don't want to install anything locally)

## 2. Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

Open `.env` and set `MONGO_URI` to your database connection string (a local URI or an Atlas
connection string both work out of the box).

Seed the database with starter content (programs, staff, sample news, and gallery placeholders):

```bash
npm run seed
```

Start the API in development mode (auto-restarts on file changes):

```bash
npm run dev
```

The API runs at `http://localhost:5000`. Check it's alive by visiting
`http://localhost:5000/api/health`.

## 3. Frontend setup

In a **second terminal**:

```bash
cd frontend
npm install
npm run dev
```

The site runs at `http://localhost:5173`. It talks to the API automatically — Vite proxies any
request to `/api/...` through to the backend on port 5000 (see `vite.config.ts`), so nothing extra
needs configuring for local development.

## 4. Building for production

```bash
# Backend
cd backend
npm run build   # compiles TypeScript to backend/dist
npm start       # runs the compiled server

# Frontend
cd frontend
npm run build   # outputs static files to frontend/dist
npm run preview # preview the production build locally
```

Deploy `frontend/dist` to any static host (Netlify, Vercel, S3, etc.) and `backend/dist` to any
Node host (Render, Railway, a VPS, etc.). Point the frontend at the deployed API by setting
`VITE_API_BASE_URL` in `frontend/.env` before building, and set `CLIENT_ORIGIN` in the backend's
`.env` to the deployed frontend's URL so CORS allows it.

## 5. Content you'll want to replace before launch

This project ships with realistic placeholder content so the site isn't empty, but the following
should be swapped for the school's real information:

- **Contact details** — email, phone, and location appear in `frontend/src/components/layout/Footer.tsx`
  and `frontend/src/pages/Contact.tsx`.
- **Donation channels** — M-Pesa Paybill / bank details in `frontend/src/pages/Donate.tsx`.
- **Photos** — the gallery, news articles, and hero section currently use illustrated placeholders.
  Add real photo URLs via the `imageUrl` / `coverImageUrl` fields (edit `backend/src/seed/seedData.ts`
  and re-run `npm run seed`, or POST directly to the API — see below).
- **Social media links** — placeholder `#` hrefs in the footer.

## 6. Managing content

There's no admin dashboard UI in this build (to keep scope focused on the public-facing site), but
every content type has a working REST API you can use with a tool like
[Postman](https://www.postman.com/) or `curl`:

| Content         | Endpoint                     |
|-----------------|-------------------------------|
| Programs        | `GET/POST /api/programs`      |
| Team members    | `GET/POST /api/team`          |
| News & events   | `GET/POST /api/news`, `GET /api/news/:slug` |
| Gallery images  | `GET/POST /api/gallery`, `DELETE /api/gallery/:id` |
| Contact messages (submissions) | `GET /api/contact` |
| Admission inquiries (submissions) | `GET /api/admissions` |

If you'd like a proper admin dashboard added later (with login-protected pages to manage all of
this from the browser), that's a natural next step to build on top of this API.

## Notes

- Content throughout the site is written for a fictional school ("St. Billy's Community School")
  inspired by the brief, not copied from any real organisation's website — please review and adapt
  the wording to reflect the real school's actual history and programs.
- Rate limiting is enabled on the contact and admissions endpoints to reduce spam.
