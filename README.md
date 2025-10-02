# Seamless Website

A modern, full-stack web application built with Next.js, React 19, Prisma, and Tailwind CSS. This project features authentication, blog management, file uploads, and a contact form, with a focus on modularity and developer experience.

---

## Features

- Authentication (using better-auth)
- Blog creation, listing, and details
- File uploads (UploadThing)
- Contact form (Nodemailer)
- Responsive UI (shadcn/ui, Tailwind CSS)
- Global state management (Zustand)

---

## Tech Stack

- Next.js (App Router)
- React 19
- Prisma ORM
- UploadThing
- Zustand
- Tailwind CSS
- Nodemailer
- better-auth
- shadcn/ui

---

## Folder Structure

- `actions/` — Server-side actions (e.g., blog)
- `app/` — Main app directory: routes, layouts, API endpoints, and styles
  - `app/css/` — Main CSS and additional styles
  - `app/(auth)/`, `app/(default)/` — Route groups
  - `app/api/` — API endpoints
- `components/` — Reusable React and UI components (shadcn/ui in `components/ui/`)
- `lib/` — Utilities, authentication, Prisma client
- `prisma/` — Prisma schema
- `public/` — Static assets
- `stores/` — Zustand store
- `utils/` — Custom hooks and utilities

---

## Getting Started

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd seamless-website
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables for database, email, and upload services.
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Build and deploy using Next.js best practices.

---

## Documentation

- See `docs/architecture.md` for detailed architecture and process documentation.
- Inline comments and JSDoc/TSDoc are provided in source files for further guidance.

---

## License

This project is licensed under the MIT License.
