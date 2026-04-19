# Oyengroup Website Project

## Project Overview
A professional Next.js landing page website for Oyengroup company built with TypeScript, Tailwind CSS, and React.

## Tech Stack
- **Framework**: Next.js 16.2.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Linting**: ESLint 9
- **Runtime**: Node.js

## Project Structure
```
src/
  app/
    (home)/ - Home page
    about/ - About page
    services/ - Services page
    contact/ - Contact page
    layout.tsx - Root layout
    globals.css - Global styles
  components/
    Header.tsx - Navigation header
    Footer.tsx - Footer
    Hero.tsx - Hero section
    Services.tsx - Services showcase
```

## Available Scripts
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Getting Started
1. Install dependencies: `npm install` (already done)
2. Start dev server: `npm run dev`
3. Open http://localhost:3000 in browser
4. Edit pages in `src/app/` to customize content

## GitHub Deployment
To deploy to GitHub Pages:
1. Add to `next.config.ts`: Configure static export
2. Run: `npm run build`
3. Deploy `out/` folder to GitHub Pages

## Key Files to Customize
- `src/app/page.tsx` - Home page content
- `src/app/about/page.tsx` - About page
- `src/components/Header.tsx` - Update company name and links
- Color scheme and branding in Tailwind config

## Next Steps
1. Replace placeholder content with your company information
2. Add your company logo to `public/` folder
3. Customize colors and styling in Tailwind CSS
4. Add contact form integration
5. Deploy to GitHub Pages
