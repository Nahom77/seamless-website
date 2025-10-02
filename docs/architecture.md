# Seamless Website Architecture & Process Documentation

## Overview

This document provides a high-level overview of the architecture and main processes of the Seamless Website project. It is intended to help developers understand the structure, data flow, and key features of the codebase.

---

## 1. Project Structure

- **actions/**: Server-side actions (e.g., blog actions)
- **app/**: Next.js app directory, including routes, layouts, API endpoints, and CSS
- **components/**: Reusable React components and UI elements
- **lib/**: Utility libraries, authentication, Prisma client, and helpers
- **prisma/**: Prisma schema for database models
- **public/**: Static assets (images, fonts, videos)
- **stores/**: Zustand store for global state management
- **utils/**: Custom React hooks and utilities

---

## 2. Main Processes

### Authentication

Uses the **better-auth** library for authentication logic, configured in `lib/auth.ts` and `lib/auth-client.ts`.
API routes under `app/api/auth/[...all]/route.ts` handle sign-in, sign-up, and password reset.
Frontend pages: `app/(auth)/signin/page.tsx`, `app/(auth)/signup/page.tsx`, `app/(auth)/reset-password/page.tsx`.

### Blog Management

- Blog creation handled in `app/create-blog/page.tsx` and `actions/blog.action.ts`.
- Blog listing and details: `app/blogs/`, `app/blog/[id]/`.
- Uses Prisma ORM for database operations (`lib/prisma.ts`).

### File Uploads

- Uses UploadThing (`@uploadthing/react`, `uploadthing`) for file uploads.
- API routes: `app/api/uploadthing/route.ts` and core logic in `app/api/uploadthing/core.ts`.
- Image upload component: `components/image-upload.tsx`.

### Contact Form

- API route: `app/api/contact/route.ts`.
- Frontend component: `components/contact-us.tsx`.
- Uses Nodemailer for sending emails.

### State Management

- Uses Zustand (`stores/user.store.ts`) for managing user state.

### Styling

- Tailwind CSS for utility-first styling (`postcss.config.js`, `tailwind.config.js`, CSS files in `app/css/`).

---

## 3. Data Flow

- Frontend components interact with API routes for data operations.
- API routes use Prisma to read/write to the database.
- Authentication state is managed via cookies/sessions.
- File uploads are processed and stored via UploadThing.

---

## 4. Key Technologies

- Next.js (App Router)
- React 19
- Prisma ORM
- UploadThing
- Zustand
- Tailwind CSS
- Nodemailer
- Better-auth
- Shadcn

---

## 5. Development Process

1. Clone the repository and install dependencies (`npm install`).
2. Set up environment variables for database, email, and upload services.
3. Run the development server (`npm run dev`).
4. Make changes in the appropriate folder (see structure above).
5. Use API routes for backend logic and React components for UI.
6. Build and deploy using Next.js best practices.

---

## 6. Extending the Project

- Add new features by creating new API routes and components.
- Update the Prisma schema for new database models.
- Use Zustand for new global state needs.
- Follow the folder structure for maintainability.

---

## 7. Additional Notes

- See individual files for inline documentation and comments.
- For questions, refer to the README or contact the maintainers.
