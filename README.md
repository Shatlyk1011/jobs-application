# Ganat - JobBoard & Mentors Platform

<p align="center">
  <a href="https://ganat.org/" target="_blank"><img height="360" src="public/images/og-image?raw=true" alt="JobBoard & Mentors Platform image"></a>
</p>

A modern open-source platform for posting jobs, resumes, and finding mentors.  
Built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Payload CMS**, optimized for performance, SEO, and easy extension.

## Story behind the project
This project started as an attempt to launch a jobs and mentoring platform in my country. It did not found the right place in the local market, so the code is now **open source**. Maybe it will work in your country, or inspire your own version of it.


## Features
- 🚀 Highly optimized and super fast user experience.
- ⏱️ Debounced requests for search and filters to reduce unnecessary network calls  
- 📝 Rich text editor support for content fields  
- 🔍 Job listings with dynamic detail pages  
- 🎯 Advanced filtering with multiple values (e.g. location, role, seniority, etc.)  
- 🧑‍🏫 Mentor profiles with dynamic detail pages  
- 📝 Resume posting and management  
- 🧑‍💼 Mentor posting and management  
- 📅 Mentor consultation request form  
- 🌓 Light and dark mode toggle  
- ✅ Client-side form validation with **Zod**  
- ⚡ Optimized with **SSR**, **SSG**, and **ISR**  
- ♻️ Cache revalidation via **Incremental Static Regeneration**  
- 📱 Fully responsive design (mobile-first)  
- 🔧 Clean, hand-written codebase ready for extension  
- 🧩 Strong **TypeScript** support  
- 🗂 Integrated **Payload CMS** admin panel  
- 🌐 SEO-friendly routing and metadata  
- 🔎 Search implemented for fast job and mentor discovery  
- 🦴 Loading skeletons for smoother UX while data loads.
- 🖼️ Image upload using Base64 conversion before sending to **Payload CMS**  

## Tech Stack
- **Framework:** Next.js (app router)
- **Rendering:** SSR, SSG, ISR
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **CMS / Backend:** Payload CMS
- **Validation:** Zod
- **Package Manager:** pnpm

### Project structure 🗂️

```shell
├── README.md                       # README file
├── .github                         # GitHub folder
├── data                            # Shared data across application
├── public                          # Static assets folder (fonts images)
├── src                             # Source code directory
│   ├── app                         # Core application folder
│   │   ├── (frontend)              # App router with pages and layouts
│   │   ├── (payload)               # Payload CMS (backend-related configurations)
│   │   │   ├── admin               # Payload Admin Panel (auto-generated)
│   │   │   ├── api                 # Payload API configurations (auto-generated)
│   │   │   └── collections         # Payload CMS collections and schemas
│   │   ├── components              # App components
│   │   │   ├── ui                  # Reusable ui components
│   │   │   └── layout              # Layout components
│   │   ├── composabled             # Reusable custom hooks
│   │   ├── lib                     # Axios interceptor & Zod validation schemes
│   │   ├── services                # Custom API service layer  
│   │   ├── shared                  # Shared utilities and helpers
│   │   └── types                   # Typescript layer
│   └── payload.config.ts           # Payload CMS configuration file
└── tsconfig.json                   # TypeScript configuration file

```

## Getting Started

### Prerequisites
- **Database** -  MongoDB (local or remote)

- **Node.js** (LTS recommended)

- pnpm installed globally:

```shell
npm install -g pnpm
```

### Installation

1. Clone the repository:

```shell
git clone https://github.com/Shatlyk1011/jobs-application

cd jobs-application
```

2. Install dependencies:

```shell

pnpm install
```

3. Create `.env` file with: MongoDB `DATABASE_URI` and `PAYLOAD_SECRET` variables (see .env.example) <br/>

>for more information visit [Payload MongoDB setup section](https://payloadcms.com/docs/database/mongodb)

4. Run the Project

```shell
npm run dev
```
The app will start on `http://localhost:3000`. <br/>
The admin panel available on `http://localhost:3000/admin`

## Payload CMS Admin

This project uses **Payload CMS** as the content backend.

- Access the admin panel at: `http://localhost:3000/admin` (or your configured path)
- Manage:
  - Job postings
  - Mentor profiles
  - Resumes
  - Consultation requests

You can customize collections, fields, and access control directly in the Payload Collection files.

---

## Rendering & Caching

This project makes use of Next.js rendering strategies:

- **SSR** for dynamic pages that require always-fresh data
- **SSG** for static content that rarely changes
- **ISR** for:
  - Regenerating job and mentor pages in the background
  - Cache revalidation when content is updated in Payload

Each job and mentor profile is served via **dynamic routes**, ensuring clean, SEO-friendly URLs.

> You can read more about rendering stretegies on my [Linkedin](https://www.linkedin.com/in/shatlyk1011/)

---


## License

This project is open source under the **MIT License**.  