# 🚀 Quick Setup Guide

Get your portfolio up and running in 5 minutes!

## Step 1: Personal Info (2 min)

Open `js/config.js` and update:

```javascript
personal: {
    name: "YOUR NAME HERE",
    title: "YOUR TITLE HERE",
    email: "YOUR EMAIL HERE",
    // ... update all fields
}

social: {
    github: "YOUR GITHUB URL",
    linkedin: "YOUR LINKEDIN URL",
    // ... update all links
}
```

## Step 2: Add Your Photo (30 sec)

Add your profile photo as:
- `assets/images/profile.jpg` (400x400px recommended)

## Step 3: Add Projects (2 min)

Open `js/projects.js` and:

1. Delete or modify the example projects
2. Add your own projects:

```javascript
{
    id: "my-project",
    title: "My Awesome Project",
    description: "Brief description",
    category: "electrical", // or diy, software, robotics, iot
    tags: ["Arduino", "C++"],
    image: "assets/images/projects/my-project.jpg",
    featured: true,
    date: "2026-01-20"
}
```

3. Add project images to `assets/images/projects/`

## Step 4: Choose Theme (10 sec)

In `js/config.js`:

```javascript
theme: {
    default: 'cyberpunk', // or synthwave, matrix, minimal, dracula
}
```

## Step 5: Test It! (30 sec)

1. Open `index.html` in your browser
2. Click through sections
3. Try the theme toggle button
4. Check mobile view (F12 → Device Toolbar)

## ✅ You're Done!

Your portfolio is ready to use!

## Optional: Deploy to GitHub Pages

1. Push to GitHub (repo name: `your-username.github.io`)
2. Go to Settings → Pages
3. Set source to `main` branch
4. Visit `https://your-username.github.io`

## Need More Help?

- Read [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) for detailed instructions
- Check [README.md](README.md) for full documentation

---

**Pro Tips:**

💡 Use browser DevTools (F12) to preview changes live
💡 Start with 3-5 featured projects on homepage
💡 Compress images before adding them (use tinypng.com)
💡 Test on actual mobile device, not just browser emulation

Happy building! 🎉
