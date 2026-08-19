# 🔧 Website Issues - Comprehensive Debugging Guide

## Problem Summary

You're experiencing:
1. ❌ Project page loads as blank HTML
2. ❌ Contact form doesn't work
3. ❌ Email/GitHub/LinkedIn not updating in footer

---

## ✅ Fixes I Just Applied

### 1. **Config Injector Improved**
- Now has better error checking
- Waits for CONFIG to load
- Retries if needed
- Handles contact methods section

### 2. **Contact Section Updated**
- Changed from hardcoded values to data attributes
- Email/GitHub/LinkedIn now pull from CONFIG
- Footer social links work correctly

### 3. **Contact Form Fixed**
- Better error handling and logging
- Console shows exactly what's happening
- Works with Formspree properly
- Proper FormData handling

### 4. **Project Pages Updated**
- rover-xr4.html now includes config-injector
- projects.html has proper script order
- Config values will update on these pages too

---

## 🔍 How to Debug

### Step 1: Open Browser Console

Press **F12** and go to the **Console** tab.

### Step 2: Look for Messages

After page loads, you should see:

```
🚀 Portfolio website initialized
🔧 Starting config injection...
✅ Config values injected successfully
📋 Contact form initialized
```

**If you don't see these, something is wrong.**

### Step 3: Check for Errors

Look for **red text** in console. Common errors:

| Error | Meaning |
|-------|---------|
| `CONFIG is not defined` | config.js didn't load |
| `Cannot read property 'personal'` | CONFIG loaded but empty |
| `fetch is not defined` | Netlify environment issue |
| `404` + file path | File doesn't exist |

### Step 4: Test Each Part

**Test 1: Is CONFIG loaded?**
```javascript
// Type in console:
CONFIG
// Should show your config object with personal, social, contact, etc.
```

**Test 2: Is config injector running?**
```javascript
// Type in console:
document.querySelector('[data-social="github"]')
// Should show the GitHub link element
```

**Test 3: Did it inject the value?**
```javascript
// Type in console:
document.querySelector('[data-social="github"]').href
// Should show your GitHub URL
```

---

## 🚀 Quick Fix Checklist

### For Email Not Updating

1. **Check config.js is correct:**
   ```bash
   # In your repository, verify these values:
   personal.email: "your@email.com"
   social.email: "mailto:your@email.com"
   social.github: "https://github.com/your-username"
   social.linkedin: "https://linkedin.com/..."
   ```

2. **Hard refresh browser:**
   - Mac: `Cmd+Shift+R`
   - Windows: `Ctrl+Shift+R`
   - Don't just close and reopen

3. **Check console for errors:**
   - F12 → Console tab
   - Look for red text

4. **Check git status:**
   ```bash
   git status
   # Should show nothing if committed
   # If config.js shows as modified, you haven't committed yet:
   git add js/config.js
   git commit -m "Update config"
   git push origin main
   ```

### For Contact Form Not Working

1. **Check your Formspree endpoint:**
   - Open `js/config.js`
   - Find `contact.endpoint`
   - Should be `https://formspree.io/f/YOUR_FORM_ID`
   - **NOT** `https://formspree.io/f/YOUR_EMAIL_ADDRESS`

2. **Verify Formspree form exists:**
   - Go to [formspree.io](https://formspree.io)
   - Log in
   - Check your form ID matches
   - Check form is "Active"

3. **Test form submission:**
   - F12 → Console
   - Submit form
   - Look for messages like:
     - `📤 Submitting form to: https://formspree.io/f/...`
     - `📬 Response status: 200`
     - `✅ Form submitted successfully`

4. **If you see errors:**
   - Note the error message
   - Check [CONTACT_FORM_TROUBLESHOOTING.md](#) below

### For Project Pages Blank

1. **Check file exists:**
   - `pages/rover-xr4.html` should exist
   - Open in browser directly
   - Should show the project page

2. **Check scripts loaded:**
   - F12 → Network tab
   - Look for failed script loads (red)
   - Verify all .js files loaded

3. **Check for console errors:**
   - F12 → Console
   - Should be clean or have only info messages

---

## 📋 Step-by-Step Testing

### Test 1: Local Testing (Before Git)

```bash
# 1. Make edits to config.js
# 2. Save the file
# 3. Open index.html in browser
# 4. Hard refresh (Cmd+Shift+R)
# 5. Check footer - email should be yours
# 6. If it works, proceed to Step 2
```

### Test 2: Push to GitHub

```bash
# 1. Stage all changes
git add .

# 2. Commit
git commit -m "Fix config injection and contact form"

# 3. Push
git push origin main

# 4. Wait 1-2 minutes for Netlify to deploy
# 5. Check Netlify dashboard for green checkmark
```

### Test 3: Test on Netlify Live Site

```
1. Go to netlify.com
2. Find your site
3. Go to Deployments tab
4. Click latest deployment
5. Wait for green checkmark
6. Visit your live URL
7. F12 → Console
8. Check for error messages
9. Scroll to footer
10. Verify email is yours
```

### Test 4: Test Contact Form

```
1. Fill in all form fields
2. Click Send Message
3. F12 → Console (keep it open)
4. Submit form
5. Watch console for:
   - 📤 Submitting form to: https://formspree.io/f/...
   - 📬 Response status: 200
   - ✅ Form submitted successfully
6. Check Formspree inbox for the message
```

---

## 🐛 Common Issues & Fixes

### Issue 1: Email Still Shows Old Value

**Symptoms:** Footer shows "your.email@example.com" instead of yours

**Cause:** Config not updated OR not deployed OR browser cache

**Fixes (Try in Order):**
1. Hard refresh: `Cmd+Shift+R` or `Ctrl+Shift+R`
2. Clear browser cache: DevTools → Application → Clear storage
3. Verify config.js has your email: Open file and check
4. Verify git pushed: `git status` should be clean
5. Check Netlify deployed: netlify.com → Deployments → Green checkmark?

### Issue 2: Contact Form Shows "Sending..." Forever

**Symptoms:** Button spins but nothing happens

**Cause:** Formspree endpoint wrong OR network blocked

**Fixes:**
1. Check console for errors: F12 → Console
2. Verify endpoint in config.js: Should be `https://formspree.io/f/YOUR_ID`
3. Test endpoint directly:
   ```bash
   curl -X POST https://formspree.io/f/YOUR_ID \
     -H "Content-Type: application/json" \
     -d '{"test": "test"}'
   ```
4. Check Formspree form status: [formspree.io](https://formspree.io) → Form should be Active

### Issue 3: Project Page Is Blank

**Symptoms:** Click "View Projects" → loads blank page

**Cause:** HTML file exists but scripts not loading OR layout broken

**Fixes:**
1. Check file exists: `pages/rover-xr4.html`
2. Open directly in browser: Drag file to browser
3. Check console for errors: F12 → Console
4. Check Network tab: F12 → Network → Look for red X
5. Verify HTML is valid: Right-click → View Page Source

### Issue 4: "Form submission failed" Error

**Symptoms:** Error message in red when submitting form

**Cause:** Formspree endpoint incorrect OR form not active

**Fixes:**
1. Verify endpoint: `contact.endpoint` in config.js
2. Get correct endpoint:
   - Go to [formspree.io](https://formspree.io)
   - Click your form
   - Copy endpoint (should be `https://formspree.io/f/...`)
3. Check form is active: Dashboard should show green dot

---

## 🔐 Privacy & Security

### Formspree Setup (One Time Only)

1. Go to [formspree.io](https://formspree.io)
2. Sign up free
3. Create new form
4. Choose "Email" option (not redirect)
5. Enter your email
6. Copy the form ID from URL
7. Update `js/config.js`:
   ```javascript
   endpoint: 'https://formspree.io/f/YOUR_FORM_ID'
   ```

---

## 📊 Testing Checklist

### Before Pushing to GitHub
- [ ] config.js has correct email
- [ ] config.js has correct GitHub URL
- [ ] config.js has correct LinkedIn URL
- [ ] config.js has correct Formspree endpoint
- [ ] Open index.html locally
- [ ] F12 Console is clean
- [ ] Footer shows YOUR email
- [ ] Social links work
- [ ] Contact form submits without errors

### After Pushing to GitHub
- [ ] Netlify shows green checkmark
- [ ] Deployment completed successfully
- [ ] Visited live site
- [ ] F12 Console is clean
- [ ] Footer shows YOUR email
- [ ] Contact form works
- [ ] Tried submitting test message

### Formspree Inbox
- [ ] Logged into Formspree
- [ ] Checked form dashboard
- [ ] Saw test message arrive
- [ ] Form is marked "Active"

---

## 📞 Advanced Debugging

### Enable Debug Mode

Add this to `js/config.js`:
```javascript
// Add at top of file
window.DEBUG = true;
```

Then console will show more details.

### Check Network Requests

1. F12 → Network tab
2. Reload page
3. Look for XHR/Fetch requests
4. Click on formspree request
5. Check:
   - **Status:** Should be 200
   - **Response:** Should show success message
   - **Headers:** Should show it's JSON

### Check Local Storage

```javascript
// In console:
localStorage.getItem('theme')  // Should show current theme
```

---

## ⚡ Performance Debug

Check why site is slow:

1. F12 → Lighthouse tab
2. Click "Analyze page load"
3. Look for:
   - Slow scripts
   - Large images
   - Unused CSS

### If Images Slow:
- Compress with TinyPNG
- Verify < 500KB each

### If Scripts Slow:
- Disable effects: `particles: { enabled: false }`
- Disable animations: `scrollAnimations: { enabled: false }`

---

## 📝 Error Log Template

If getting help, provide:

```
BROWSER: Chrome/Firefox/Safari
OS: Windows/Mac/Linux
URL: https://...
ERROR: [paste error from console]
STEPS: [what you did before error]
EXPECTED: [what should happen]
ACTUAL: [what happened instead]
```

---

## ✅ Success Indicators

Everything works when:
- ✅ Console clean on page load
- ✅ Footer shows YOUR email
- ✅ Social links are YOUR links
- ✅ Contact form sends without errors
- ✅ Formspree inbox gets message
- ✅ Project page loads with content
- ✅ No red errors in F12 Console

---

## 🎯 Next Steps

1. **Hard refresh your browser:** Cmd+Shift+R
2. **Open F12 Console:** Press F12
3. **Watch for messages:** See if config injection happened
4. **Test footer:** Check if email updated
5. **Test contact form:** Submit a message
6. **Check Formspree:** See if message arrived

**If everything works:** You're done! 🎉

**If something doesn't work:** Follow the troubleshooting above or check Formspree status.

