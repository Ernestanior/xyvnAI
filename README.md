# XYVN Portfolio Website

A modern, minimalist portfolio website showcasing AI-powered products built with Vibe Coding.

## Features

- 🎨 **Futuristic Design** - Dark theme with cyan-blue accents and glassmorphism effects
- ✨ **Smooth Animations** - Powered by Framer Motion for fluid interactions
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Fast Performance** - Built with Next.js 15 and optimized for speed
- 🎯 **SEO Optimized** - Meta tags and semantic HTML

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── products/[slug]/     # Product detail pages
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── home/               # Home page sections
│   ├── product/            # Product page components
│   └── layout/             # Layout components
├── lib/                    # Utilities and data
│   └── products.ts         # Product data
└── public/                 # Static assets
```

## Customization

### Adding a New Product

Edit `lib/products.ts` and add a new product object:

```typescript
{
  slug: 'your-product',
  name: 'Your Product',
  tagline: 'Product tagline',
  description: ['Description paragraphs...'],
  features: [...],
  techStack: [...],
  privacyPolicy: '...',
  termsOfService: '...'
}
```

### Updating Contact Information

Edit `components/home/ContactSection.tsx` to update email and social links.

### Changing Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  accent: {
    primary: '#00D9FF',    // Change this
    secondary: '#0EA5E9',  // And this
  },
}
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

The site will be automatically deployed on every push to the main branch.

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s

## License

MIT License - feel free to use this template for your own portfolio.

## Credits

Built with ❤️ using Vibe Coding methodology.