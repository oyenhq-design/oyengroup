# Oyengroup Website

A professional Next.js landing page for Oyengroup company with multiple pages, responsive design, and GitHub Pages deployment ready.

## 🚀 Features

- ✅ Multi-page website (Home, About, Services, Contact)
- ✅ Responsive design optimized for all devices
- ✅ Professional components (Header, Footer, Hero, CTA)
- ✅ Contact form with validation
- ✅ Built with Next.js 16, TypeScript, Tailwind CSS 4
- ✅ SEO optimized with metadata
- ✅ ESLint for code quality

## 📋 Tech Stack

- **Framework**: Next.js 16.2.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Linting**: ESLint 9
- **Runtime**: Node.js

## 🎯 Project Structure

```
src/
├── app/
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page component
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services showcase
│   └── CTA.tsx           # Call-to-action section
└── public/               # Static assets
```

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Create production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 💻 Development

1. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

2. **Edit pages**: Files in `src/app/` will hot-reload automatically.

3. **Add components**: Create new `.tsx` files in `src/components/`.

## 📝 Customization

### Update Company Information
- Edit `src/components/Header.tsx` - Update company name and navigation
- Edit `src/app/page.tsx` - Update hero content and messaging
- Edit `src/components/Footer.tsx` - Update contact information and links

### Add Your Logo
1. Place your logo in `public/` folder
2. Update `Header.tsx` to display your logo

### Customize Colors
Edit Tailwind CSS classes in components. Update the color scheme:
- Blue (`from-blue-600`, `to-blue-800`) to match your brand

### Contact Form
The contact form in `src/app/contact/page.tsx` currently logs to console. To save submissions:
- Connect to a backend API
- Use a service like Formspree, EmailJS, or Netlify Forms

## 🚀 Deployment to GitHub Pages

1. Update `next.config.ts`:
   ```typescript
   const nextConfig = {
     output: 'export',
   };
   export default nextConfig;
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy `out/` folder to GitHub Pages:
   - Push to `gh-pages` branch, or
   - Configure GitHub Actions workflow

## 📖 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

Feel free to use this template for your business website.

## 🤝 Next Steps

1. Replace placeholder content with your company information
2. Add your company logo to `public/` folder
3. Customize the color scheme to match your brand
4. Integrate contact form with your backend service
5. Deploy to GitHub Pages or your hosting provider
6. Set up domain name and SSL certificate

---

Built with ❤️ using Next.js and Tailwind CSS

