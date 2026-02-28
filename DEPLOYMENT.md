# Deployment Guide

## Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js application.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~2 minutes
   - Get a production URL like `your-project.vercel.app`

### Custom Domain

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Deploy to Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: None required

## Deploy to Your Own Server

### Build for Production

```bash
npm run build
npm start
```

### Using PM2 (Process Manager)

```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

### Using Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Environment Variables

This project doesn't require any environment variables by default.

If you add features that need env vars (analytics, CMS, etc.), create a `.env.local` file:

```env
NEXT_PUBLIC_ANALYTICS_ID=your-id
```

## Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Use Next.js Image component
   - Compress images with tools like TinyPNG

2. **Check Bundle Size**
   ```bash
   npm run build
   ```
   Review the output for large bundles

3. **Test Performance**
   - Run Lighthouse in Chrome DevTools
   - Aim for 90+ scores

### After Deployment

1. **Enable Caching**
   - Vercel handles this automatically
   - For custom servers, configure CDN

2. **Monitor Performance**
   - Use Vercel Analytics
   - Or integrate Google Analytics

## Troubleshooting

### Build Fails

- Check Node.js version (18+)
- Clear `.next` folder and rebuild
- Check for TypeScript errors

### Styles Not Loading

- Ensure Tailwind is properly configured
- Check `globals.css` is imported in layout

### 404 on Product Pages

- Ensure `generateStaticParams` is working
- Check product slugs match URLs

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Test product detail pages
- [ ] Verify contact links work
- [ ] Check SEO meta tags
- [ ] Test performance with Lighthouse
- [ ] Set up custom domain (optional)
- [ ] Enable analytics (optional)

## Support

For issues, check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Issues](https://github.com/vercel/next.js/issues)