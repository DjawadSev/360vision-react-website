# SEO Configuration Guide

## Critical Environment Variables for Google Indexing

Your website needs the `NEXT_PUBLIC_SITE_URL` environment variable properly configured to enable Google indexing.

### Setup Instructions

1. Create or update your `.env` file in the project root
2. Add the following variable:

```env
NEXT_PUBLIC_SITE_URL=https://360vision.io
```

**Important**: Replace `https://360vision.io` with your actual production domain.

### Why This Matters

This variable is used throughout the site for:
- **Canonical URLs**: Tells Google which URL is the primary version of each page
- **Sitemap Generation**: Creates proper absolute URLs in your sitemap
- **OpenGraph & Twitter Cards**: Ensures social media shares have correct URLs
- **Robots.txt**: Provides correct sitemap location to search engines

### Verification

After setting this variable:
1. Restart your development server: `npm run dev`
2. Visit `http://localhost:3000/robots.txt` - should show your production URL
3. Visit `http://localhost:3000/sitemap.xml` - should show proper absolute URLs
4. Build and deploy to production: `npm run build && npm start`

## Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (https://360vision.io)
3. Choose verification method (HTML tag recommended)
4. Add your verification code to `app/[locale]/layout.tsx` in the metadata section
5. Update the verification object:

```typescript
verification: {
  google: 'your-verification-code-here',
},
```

## Additional SEO Features Implemented

✅ Comprehensive metadata on all pages
✅ OpenGraph tags for social sharing  
✅ Twitter Card metadata
✅ Structured data (Schema.org) for Organization and Website
✅ Canonical URLs on all pages
✅ Proper robots.txt configuration
✅ Dynamic sitemap.xml with proper priorities
✅ Multi-language support (hreflang)
✅ Optimized for Google Bot

## Testing Your SEO

Use these tools to verify everything is working:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **OpenGraph Debugger**: https://www.opengraph.xyz/
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
4. **Structured Data Testing Tool**: https://validator.schema.org/

## Common Issues

### Issue: Sitemap shows localhost URLs
**Solution**: Make sure `NEXT_PUBLIC_SITE_URL` is set in your production environment

### Issue: Pages not being indexed
**Solution**: 
- Verify robots.txt allows indexing
- Submit sitemap to Google Search Console
- Check for crawl errors in Search Console
- Ensure pages have proper metadata

### Issue: OpenGraph images not showing
**Solution**: Ensure image URLs are absolute (starting with https://)
