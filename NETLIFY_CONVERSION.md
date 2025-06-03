
# N1GHTW1RE Netlify Deployment Guide

## 🚀 Complete Guide to Deploying N1GHTW1RE on Netlify with Supabase

This guide will walk you through deploying your N1GHTW1RE cyberpunk site to Netlify while maintaining full Supabase functionality on your custom domain.

---

## 📋 Pre-Deployment Checklist

### 1. Prepare Your Repository
- [ ] Ensure your code is pushed to GitHub
- [ ] Verify all dependencies are in `package.json`
- [ ] Test that `npm run build` works locally
- [ ] Confirm all environment variables are documented

### 2. Gather Required Information
You'll need these details during setup:
- **GitHub repository URL**: `https://github.com/n1ghtw1re/n1ghtw1re-site`
- **Custom domain**: Your domain name (e.g., `n1ghtw1re.com`)
- **Supabase project URL**: `https://jrkhqqafpkykgribayzq.supabase.co`
- **Supabase anon key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

---

## 🏗️ Part 1: Netlify Site Setup

### Step 1: Create Netlify Account & Connect Repository

1. **Sign up/Login to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up using your GitHub account (recommended)

2. **Import Your Project**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your repositories
   - Select your `n1ghtw1re-site` repository

### Step 2: Configure Build Settings

**Build Settings Configuration:**
```
Build command: npm run build
Publish directory: dist
```

**Advanced Build Settings:**
- Node version: 18 or higher
- Package manager: npm

### Step 3: Deploy Initial Version
- Click "Deploy site"
- Wait for initial deployment (5-10 minutes)
- Note the temporary Netlify URL (e.g., `magical-unicorn-123456.netlify.app`)

---

## 🌐 Part 2: Custom Domain Configuration

### Step 1: Add Your Custom Domain to Netlify

1. **In Netlify Dashboard:**
   - Go to your site → "Domain settings"
   - Click "Add custom domain"
   - Enter your domain: `n1ghtw1re.com`
   - Click "Verify" and "Add domain"

2. **Configure DNS (If domain is managed elsewhere):**
   If your domain DNS is managed outside Netlify:
   - Add a CNAME record: `www` pointing to your Netlify subdomain
   - Add an ALIAS/ANAME record: `@` pointing to your Netlify subdomain
   
   If using Netlify DNS:
   - Follow Netlify's nameserver instructions
   - Update nameservers at your domain registrar

### Step 2: Enable HTTPS
- Netlify automatically provisions SSL certificates
- Wait 24-48 hours for DNS propagation
- Verify HTTPS works on your custom domain

---

## 🔧 Part 3: Supabase Configuration for Production

### Step 1: Update Supabase URL Configuration

**CRITICAL**: You must update Supabase settings for your production domain.

1. **Login to Supabase Dashboard**
   - Go to [supabase.com](https://supabase.com)
   - Navigate to your project: `jrkhqqafpkykgribayzq`

2. **Update Authentication URLs**
   - Go to "Authentication" → "URL Configuration"
   - **Site URL**: `https://n1ghtw1re.com`
   - **Redirect URLs**: Add both:
     - `https://n1ghtw1re.com`
     - `https://n1ghtw1re.com/**`
     - `https://www.n1ghtw1re.com`
     - `https://www.n1ghtw1re.com/**`

3. **Update CORS Settings (if needed)**
   - Go to "Settings" → "API"
   - Ensure your domain is allowed in CORS settings

### Step 2: Environment Variables (None Needed!)
**Good news**: Your app doesn't use environment variables! The Supabase URL and keys are hardcoded in the client configuration, so no additional setup is required.

---

## 🔄 Part 4: Deployment Optimization

### Step 1: Configure Netlify Build Settings

Create a `netlify.toml` file in your project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://jrkhqqafpkykgribayzq.supabase.co; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://jrkhqqafpkykgribayzq.supabase.co wss://jrkhqqafpkykgribayzq.supabase.co;"

[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### Step 2: Performance Optimizations

1. **Enable Asset Optimization**
   - In Netlify dashboard → "Site settings" → "Build & deploy"
   - Enable "Asset optimization"
   - Check: Minify CSS, Minify JS, Compress images

2. **Configure Branch Deploys**
   - Set production branch to `main` or `master`
   - Enable automatic deploys from GitHub

---

## 🧪 Part 5: Testing & Verification

### Step 1: Functionality Testing Checklist

After deployment, test these features:

**Core Site Functions:**
- [ ] Homepage loads with Matrix rain effect
- [ ] Navigation works (all menu items)
- [ ] Blog page loads and displays posts
- [ ] Individual blog posts open correctly
- [ ] About page displays properly
- [ ] Tools page functions

**Supabase Integration:**
- [ ] Admin login works (`/admin`)
- [ ] Blog post creation/editing (if you have admin access)
- [ ] Database connections are working
- [ ] No console errors related to Supabase

**SEO & Performance:**
- [ ] Meta tags are correctly set
- [ ] Social media previews work
- [ ] Site loads quickly (< 3 seconds)
- [ ] Mobile responsiveness works

### Step 2: Performance Monitoring

**Tools to test your site:**
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

**Expected Performance Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

---

## 🚨 Troubleshooting Common Issues

### Issue 1: Supabase Authentication Fails
**Symptoms**: Login doesn't work, auth errors in console
**Solution**: 
- Verify Supabase Site URL is set to your custom domain
- Check redirect URLs include your domain
- Clear browser cache and cookies

### Issue 2: 404 Errors on Page Refresh
**Symptoms**: Direct URLs return 404 errors
**Solution**: 
- Ensure `netlify.toml` redirect rule is in place
- Verify build settings in Netlify dashboard

### Issue 3: CORS Errors
**Symptoms**: API calls blocked by CORS policy
**Solution**:
- Update Supabase CORS settings
- Add your domain to allowed origins

### Issue 4: Build Failures
**Symptoms**: Deployment fails during build
**Solution**:
- Check build logs in Netlify dashboard
- Verify `package.json` includes all dependencies
- Test `npm run build` locally

### Issue 5: Slow Loading
**Symptoms**: Site takes > 5 seconds to load
**Solution**:
- Enable Netlify asset optimization
- Verify images are optimized
- Check for console errors

---

## 📊 Part 6: Post-Launch Monitoring

### Step 1: Set Up Analytics (Optional)

Add Google Analytics to track site performance:

1. **Create Google Analytics Property**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create new property for your domain

2. **Add Tracking Code**
   - Replace the placeholder in `src/components/SEO.tsx`
   - Find the comment: `GOOGLE ANALYTICS CODE SHOULD BE ADDED HERE`
   - Add your GA4 measurement ID

### Step 2: Monitor Site Health

**Weekly Checks:**
- [ ] Site accessibility test
- [ ] Performance score check
- [ ] Broken link verification
- [ ] Mobile responsiveness test

**Monthly Checks:**
- [ ] Security headers verification
- [ ] SSL certificate status
- [ ] Backup verification (Supabase handles this)
- [ ] Performance optimization review

---

## 🔐 Part 7: Security Considerations

### Production Security Checklist

**Netlify Security:**
- [ ] HTTPS is enforced (auto-redirect)
- [ ] Security headers are configured
- [ ] Asset optimization is enabled
- [ ] Access controls are set (if needed)

**Supabase Security:**
- [ ] Row Level Security (RLS) is enabled
- [ ] API keys are properly configured
- [ ] Only necessary permissions are granted
- [ ] Regular security updates applied

### Monitoring & Alerts

**Set up monitoring for:**
- Site uptime (Netlify provides basic monitoring)
- Supabase database performance
- SSL certificate renewal
- Domain expiration alerts

---

## 📞 Part 8: Support Resources

### Documentation Links
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **Custom Domain Setup**: [docs.netlify.com/domains-https/custom-domains/](https://docs.netlify.com/domains-https/custom-domains/)

### Community Support
- **Netlify Community**: [community.netlify.com](https://community.netlify.com)
- **Supabase Discord**: [discord.supabase.com](https://discord.supabase.com)
- **GitHub Issues**: Create issues in your repository

### Emergency Contacts
- **Domain Issues**: Your domain registrar support
- **Netlify Issues**: Netlify support (Premium plans get priority)
- **Supabase Issues**: Supabase support or community

---

## ⚡ Quick Reference Commands

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Git Workflow
```bash
# Push changes to trigger deploy
git add .
git commit -m "Update: description of changes"
git push origin main
```

### Netlify CLI (Optional)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy manually
netlify deploy --prod
```

---

## ✅ Final Launch Checklist

Before announcing your site launch:

**Technical Verification:**
- [ ] All pages load correctly on custom domain
- [ ] Supabase authentication works
- [ ] Blog functionality operates properly
- [ ] Mobile responsiveness confirmed
- [ ] Performance scores meet targets
- [ ] Security headers are active

**Content Verification:**
- [ ] All links work correctly
- [ ] Images display properly
- [ ] Contact information is accurate
- [ ] Social media links are functional
- [ ] Blog posts are published correctly

**SEO Verification:**
- [ ] Google Search Console is set up
- [ ] Sitemap is accessible
- [ ] Meta descriptions are optimized
- [ ] Social media previews work
- [ ] Analytics tracking is active

**Announcement Preparation:**
- [ ] Social media posts ready
- [ ] Community announcements prepared
- [ ] Press kit available (if applicable)
- [ ] Backup plans in place

---

## 🎉 You're Ready to Launch!

Once you've completed this guide, your N1GHTW1RE cyberpunk site will be live on your custom domain with full Supabase functionality. The digital resistance has found its home on the web!

**Remember**: This deployment maintains all the site's features while providing production-level security, performance, and reliability.

**Need Help?** 
- Contact: n1ghtw1re@proton.me
- GitHub: github.com/n1ghtw1re
- Site: https://n1ghtw1re.com

*"Code is our weapon. Privacy is our shield. Decentralization is our path."*

---

*Last updated: 2025-06-03*
*Version: 1.0*
*N1GHTW1RE Digital Liberation Collective*
