# jebraat.com

This project was bootstrapped from scratch with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tech

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Supabase](https://supabase.com)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Tracking**: [Plausible](https://plausible.io/)

## Overview

- `components/*` - Reusable react components used within the app
- `data/siteMetadata.ts` - Settings for the entire app, such as social links, banners, domain etc.
- `data/blog/*` - Static blog posts (md/mdx) parsed during the build step
- `layouts/*` - Reusable page layouts
- `lib/*` - Shared utility functions
- `pages/api/*` - [API Routes](https://nextjs.org/docs/api-routes/introduction) manages blog post metadata and newsletter subs
- `pages/blog/*` - Static pre-rendered blog pages using MDX - supports nested routes
- `pages/tags/*` - Static pre-rendered pages for each tag used in blog posts (e.g. #saas)
- `pages/*` - All other static pages
- `public/*` - Static assets including images, custom cursor and [automatically generated](https://github.com/iamvishnusankar/next-sitemap) sitemap.xml + robots.txt
- `styles/*` - Tailwind initialization, a few global styles and styles for prism (code highlighting in blog posts)

## Credit

I took inspiration from two separate repositories:

- [timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog/tree/4bd9eb9c7c54222eb0c1c56e68a108e9dd476a80)
- [leerob/leerob.io](https://github.com/leerob/leerob.io)

Make sure to check them out too.
