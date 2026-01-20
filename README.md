# Salman Naveed - Personal Portfolio Website

> A sleek, customizable portfolio website for showcasing your work as an Electrical Engineer, DIY Maker, and Tech Polymath.

🌐 **Live Site**: [salman-naveed.github.io](https://salman-naveed.github.io)

---

## ✨ Features

- 🎨 **5 Built-in Themes**: Cyberpunk (default), Synthwave, Matrix, Minimal, Dracula
- 🌓 **Theme Switcher**: Easy toggle between themes with localStorage persistence
- ⚡ **Particle Background**: Animated particle system with mouse interaction
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🎭 **Smooth Animations**: Scroll-triggered animations and transitions
- 🔧 **Highly Customizable**: Configuration-driven design for easy content updates
- 🚀 **Performance Optimized**: Fast loading, lazy image loading
- ♿ **Accessible**: ARIA labels, keyboard navigation, reduced motion support
- 🎮 **Easter Eggs**: Konami code and hidden features
- 📊 **Project Showcase**: Filterable project grid with categories
- 💼 **Skills Display**: Visual skill bars with categorization
- 📝 **Blog Section**: Ready for blog posts and tutorials
- 📧 **Contact Form**: Integrated with Formspree/Getform

---

## 🚀 Quick Start

### Option 1: Simple Setup (Recommended)

1. **Clone or download this repository**
2. **Edit `js/config.js`** - Update your personal information, social links, and preferences
3. **Edit `js/projects.js`** - Add your projects
4. **Add your images** to `assets/images/`
5. **Open `index.html`** in a browser or deploy to GitHub Pages

### Option 2: GitHub Pages Deployment

1. Fork this repository
2. Go to Settings > Pages
3. Set Source to "main" branch
4. Your site will be live at `https://your-username.github.io`

---

## 📁 Project Structure

```
salman-naveed.github.io/
├── index.html                 # Main homepage
├── css/
│   ├── style.css             # Core styles
│   ├── themes.css            # Theme definitions
│   └── animations.css        # Animation library
├── js/
│   ├── config.js             # ⚙️ MAIN CONFIG FILE - Edit this!
│   ├── projects.js           # 📂 PROJECT DATA - Edit this!
│   ├── main.js               # Core functionality
│   └── particles.js          # Particle system
├── assets/
│   ├── images/
│   │   ├── profile.jpg       # Your profile photo
│   │   ├── projects/         # Project screenshots
│   │   └── blog/             # Blog post images
│   └── resume/
│       └── your-resume.pdf   # Your resume
├── pages/
│   ├── projects.html         # All projects page
│   ├── blog.html             # Blog listing page
│   └── about.html            # Extended about page (optional)
├── projects/
│   └── [project-name].html   # Individual project pages
└── README.md
```

---

## ⚙️ Customization Guide

### 1. Update Personal Information

**File**: `js/config.js`

```javascript
personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    // ... edit all fields
}
```

### 2. Change Social Links

```javascript
social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    // ... add or remove links
}
```

### 3. Select Default Theme

```javascript
theme: {
    default: 'cyberpunk', // Options: cyberpunk, synthwave, matrix, minimal, dracula
    allowThemeSwitch: true,
    availableThemes: ['cyberpunk', 'synthwave', 'matrix', 'minimal', 'dracula']
}
```

### 4. Configure Effects

```javascript
effects: {
    particles: {
        enabled: true,
        count: 100,
        speed: 0.5,
        color: '#00ff9f'
    },
    typingAnimation: {
        enabled: true,
        speed: 50,
        text: "Your custom text here"
    }
}
```

### 5. Add Projects

**File**: `js/projects.js`

```javascript
{
    id: "your-project-id",
    title: "Project Title",
    description: "Brief description",
    category: "electrical", // electrical, diy, software, robotics, iot
    tags: ["Arduino", "Python", "IoT"],
    image: "assets/images/projects/your-image.jpg",
    github: "https://github.com/...",
    featured: true, // Show on homepage
    date: "2026-01-20"
}
```

### 6. Update Skills

**File**: `js/config.js`

```javascript
skills: {
    categories: [
        {
            name: "Your Category",
            icon: "fas fa-code",
            items: [
                { name: "Skill Name", level: 90, icon: "fab fa-python" }
            ]
        }
    ]
}
```

---

## 🎨 Theme Customization

### Using Existing Themes

Themes auto-switch via the theme toggle button (moon icon in navbar).

### Creating a Custom Theme

**File**: `css/themes.css`

Add a new theme block:

```css
body[data-theme="your-theme"] {
    --bg-primary: #000000;
    --bg-secondary: #111111;
    --text-primary: #ffffff;
    --accent-primary: #ff0000;
    /* ... more variables */
}
```

Then add to `config.js`:

```javascript
theme: {
    availableThemes: ['cyberpunk', 'your-theme']
}
```

---

## 📝 Adding Content

### Add a New Project

1. Edit `js/projects.js`
2. Add project object to `PROJECTS` array
3. Add project image to `assets/images/projects/`
4. (Optional) Create detailed project page in `projects/`

### Add Blog Posts

1. Edit `js/main.js` - find `initializeBlog()` function
2. Add post object to `posts` array
3. Add post image to `assets/images/blog/`
4. Create post page in `pages/blog/`

### Add New Section

1. Add section HTML to `index.html`
2. Add navigation link in `config.js`
3. Style in `css/style.css`

---

## 🛠️ Advanced Customization

### Disable Effects

```javascript
// In config.js
effects: {
    particles: { enabled: false },
    glitchEffect: { enabled: false },
    scrollAnimations: { enabled: false }
}
```

### Change Fonts

Edit `<head>` in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Then in `css/style.css`:

```css
:root {
    --font-sans: 'Your Font', sans-serif;
}
```

### Add New Page

1. Create `pages/your-page.html`
2. Copy structure from `index.html`
3. Link in navigation

---

## 📷 Adding Images

### Profile Image
- **Location**: `assets/images/profile.jpg`
- **Recommended size**: 400x400px
- **Format**: JPG or PNG

### Project Images
- **Location**: `assets/images/projects/`
- **Recommended size**: 800x600px
- **Format**: JPG or PNG
- **Naming**: `project-name.jpg`

### Blog Images
- **Location**: `assets/images/blog/`
- **Recommended size**: 1200x630px

### Placeholder Images
If an image is missing, the site will use placeholder images automatically.

---

## 🔧 Contact Form Setup

The site supports multiple contact form backends:

### Option 1: Formspree (Recommended)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your endpoint
4. Update `config.js`:

```javascript
contact: {
    backend: 'formspree',
    endpoint: 'https://formspree.io/f/YOUR_FORM_ID'
}
```

### Option 2: Getform

1. Sign up at [getform.io](https://getform.io)
2. Follow same process as Formspree

### Option 3: mailto (Fallback)

```javascript
contact: {
    backend: 'mailto',
    fallbackEmail: 'your.email@example.com'
}
```

---

## 🎮 Easter Eggs

### Konami Code
Type: `↑ ↑ ↓ ↓ ← → ← → B A`

Activates secret mode with rainbow effects!

To disable:
```javascript
features: {
    easterEggs: { enabled: false }
}
```

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (limited support)

---

## 📱 Mobile Optimization

The site is fully responsive with:
- Hamburger menu on mobile
- Touch-friendly buttons
- Optimized images
- Reduced animations on mobile

---

## ♿ Accessibility Features

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Skip to content link
- High contrast mode option
- Reduced motion support

---

## 🚀 Performance Tips

1. **Optimize Images**: Use compressed images (TinyPNG, ImageOptim)
2. **Lazy Loading**: Images load as you scroll
3. **Minimize Effects**: Disable effects on slower devices
4. **CDN Fonts**: Google Fonts are cached globally

---

## 📊 Analytics (Optional)

### Add Google Analytics

In `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

---

## 🐛 Troubleshooting

### Images Not Showing
- Check file paths are correct
- Ensure images are in `assets/images/`
- Check file extensions match code

### Theme Not Switching
- Clear browser cache
- Check browser console for errors
- Verify theme name in `config.js`

### Particles Not Working
- Check `CONFIG.effects.particles.enabled = true`
- Ensure JavaScript is not blocked
- Try different browser

### Contact Form Not Working
- Verify endpoint URL in `config.js`
- Check Formspree/Getform dashboard
- Look for CORS errors in console

---

## 📚 Resources

### Icons
- [Font Awesome](https://fontawesome.com) - Icon library

### Fonts
- [Google Fonts](https://fonts.google.com) - Free web fonts

### Colors
- [Coolors](https://coolors.co) - Color scheme generator
- [Adobe Color](https://color.adobe.com) - Color wheel

### Images
- [Unsplash](https://unsplash.com) - Free stock photos
- [Pexels](https://pexels.com) - Free stock photos

---

## 🤝 Contributing

This is a personal portfolio template. Feel free to:
- Fork and customize for your own use
- Submit issues for bugs
- Suggest new features

---

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

## 🙏 Credits

- **Design & Development**: Salman Naveed
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Fira Code, Inter)

---

## 📞 Support

If you have questions or need help customizing:
- Open an issue on GitHub
- Check the troubleshooting section
- Review the customization guide

---

## 🎯 Roadmap

Future enhancements:
- [ ] Dark/Light mode toggle
- [ ] Blog with Markdown support
- [ ] Project search functionality
- [ ] More theme options
- [ ] Animation presets
- [ ] PWA support

---

## 🌟 Show Your Support

If you found this template helpful:
- ⭐ Star the repository
- 🍴 Fork and customize
- 📢 Share with others

---

**Built with ❤️ and code by Salman Naveed**

Happy coding! 🚀
