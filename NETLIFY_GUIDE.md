# 🚀 Netlify Deployment & Troubleshooting Guide

## Quick Netlify Setup

### Already Deployed?

1. Go to [netlify.com](https://netlify.com)
2. Log in with your account
3. Find your site in "Sites"
4. Copy the site URL (e.g., `your-site.netlify.app`)

### First Time Setup

1. Connect your GitHub repo to Netlify
2. Set build command: (leave empty or `echo 'done'`)
3. Set publish directory: `.` (root folder)
4. Click Deploy

---

## ✅ Common Issues & Fixes

### Issue 1: Site Shows 404 for All Images

**Cause:** Missing images in repo

**Fix:**
1. Add images to `assets/images/projects/`
2. Run: `git add assets/images/`
3. Run: `git commit -m "Add images"`
4. Run: `git push origin main`
5. Wait for Netlify redeploy (~1 min)

### Issue 2: Config Changes Don't Appear

**Cause:** Browser cache or old deploy

**Fix:**
```bash
# Hard refresh in browser
Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

# Or clear Netlify cache:
# Go to Netlify dashboard → Site settings → Cache → Clear cache
```

### Issue 3: Site Rebuilds but Images Still Missing

**Cause:** Images not committed to Git

**Fix:**
1. Verify images in folder: `ls -la assets/images/projects/`
2. Check Git status: `git status`
3. If images show as "?? assets/images/..." they're not staged:
   ```bash
   git add assets/images/
   git commit -m "Add missing project images"
   git push origin main
   ```

### Issue 4: Slow Performance on Netlify

**Cause:** Large uncompressed images

**Fix:**
1. Compress all images with TinyPNG
2. Disable particles in config:
   ```javascript
   effects: {
       particles: { enabled: false }
   }
   ```
3. Clear Netlify cache and redeploy

### Issue 5: Netlify Deploy Keeps Failing

**Cause:** Missing `netlify.toml` or error in build

**Fix:**
1. Make sure `netlify.toml` file exists in repo root
2. Check deploy log in Netlify dashboard for specific error
3. Verify no syntax errors in HTML/CSS/JS files
4. Try clearing cache: Settings → Cache → Clear cache

---

## 📊 Netlify Dashboard Basics

### Checking Deployment Status

1. Go to **Deployments** tab
2. Look for green checkmark = successful
3. Red X = failed - click to see error log

### Understanding Build Times

- Typical build: 10-30 seconds
- Slow build: Check for large files or errors
- Instant "ready": Website is already built

### Monitoring Performance

1. Go to **Analytics** tab
2. View traffic and performance metrics
3. Check if images are being served efficiently

### Cache Management

1. Go to **Settings** → **Netlify Cache**
2. Can clear cache anytime to force rebuild
3. Useful when config changes don't show up

---

## 🔧 Manual Netlify Configuration

### File: netlify.toml

Already created for you in repo root. Contains:
- Build command
- Publish directory
- Cache headers for images
- Security headers

**Don't modify unless you know what you're doing!**

### File: _redirects (Optional)

For SPA routing (single page app):
- Already configured in `netlify.toml`
- Automatically handles page refreshes
- No 404 errors on page reload

---

## 🔍 Debugging Netlify Issues

### Check Site Build Log

```
1. Go to netlify.com
2. Select your site
3. Click "Deployments" tab
4. Click latest deployment
5. Scroll down for build log
6. Look for errors (red text)
```

### Check Site Performance

```
1. Open your site in browser
2. Press F12 (Developer Tools)
3. Go to "Console" tab
4. Look for red error messages
5. Check "Network" tab for 404 errors
```

### Test Locally Before Pushing

```bash
# Simulate Netlify build locally
npx http-server .

# Opens local server at http://localhost:8080
# Test everything before pushing to GitHub
```

---

## 📝 Deployment Checklist

Before pushing to GitHub:

- [ ] All images compressed (< 500KB each)
- [ ] Images placed in correct folder
- [ ] Config.js has correct values
- [ ] No console errors (F12 → Console)
- [ ] All links work locally
- [ ] Mobile responsive (press F12 → Toggle Device)

After pushing:

- [ ] GitHub shows your commit
- [ ] Netlify starts building (check email)
- [ ] Netlify shows green checkmark
- [ ] Your site loads without errors
- [ ] Images appear on live site
- [ ] F12 Console has no red errors

---

## 🚨 Emergency Troubleshooting

If your site is down or broken:

### Step 1: Check Netlify Status
```
Go to netlify.com → Your Site → Deployments tab
Is the latest deploy green (success)?
```

### Step 2: Check GitHub
```
Go to github.com → Your repo
Verify latest commit is there
```

### Step 3: Force Rebuild
```
Netlify dashboard → Deploys → Trigger deploy
This forces a fresh build
```

### Step 4: Clear Everything
```
Netlify → Settings → Cache → Clear cache
GitHub → Push a dummy commit to force redeploy
Browser → Ctrl+Shift+Delete (clear cache)
```

### Step 5: Check Browser Console
```
F12 → Console tab
Screenshot any red errors
Compare with local version
```

---

## 💬 When to Reach Out for Help

You'll need to provide:
1. Your site URL
2. Screenshot of issue
3. Netlify deployment log
4. Browser console errors (F12)
5. When it last worked

---

## 📈 Netlify Limits (Free Plan)

- **Bandwidth:** 100GB/month
- **Build time:** 300 minutes/month
- **Concurrent builds:** 1
- **Typical usage:** Well under limits

**Cost optimization:**
- Compress images (save 80% bandwidth)
- Disable unused effects (save build time)
- Cache properly (reduce rebuilds)

---

## 🎯 Next Steps

1. ✅ Verify images are uploaded
2. ✅ Check Netlify deployment succeeded
3. ✅ Test site in browser
4. ✅ Open F12 Console - should be clean
5. ✅ Share your site with friends!

