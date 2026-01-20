# 🎨 Complete Customization Guide

This guide will help you customize every aspect of your portfolio website easily.

---

## Table of Contents

1. [Quick Start Checklist](#quick-start-checklist)
2. [Updating Personal Information](#updating-personal-information)
3. [Adding & Managing Projects](#adding--managing-projects)
4. [Customizing Skills](#customizing-skills)
5. [Theme Customization](#theme-customization)
6. [Effects & Animations](#effects--animations)
7. [Adding Blog Posts](#adding-blog-posts)
8. [Contact Form Setup](#contact-form-setup)
9. [Navigation & Sections](#navigation--sections)
10. [Advanced Customization](#advanced-customization)

---

## Quick Start Checklist

✅ Complete these steps first:

- [ ] Update `js/config.js` with your personal info
- [ ] Add your profile image to `assets/images/profile.jpg`
- [ ] Update `js/projects.js` with your projects
- [ ] Add project images to `assets/images/projects/`
- [ ] Update social media links in `config.js`
- [ ] Set up contact form (Formspree/Getform)
- [ ] Choose your default theme
- [ ] Test on mobile and desktop

---

## Updating Personal Information

### File: `js/config.js`

### 1. Basic Info

```javascript
personal: {
    name: "Your Full Name",
    title: "Your Professional Title",
    email: "your.email@example.com",
    location: "Your City, Country",
    tagline: "Brief tagline about what you do",
    bio: [
        "First paragraph about yourself...",
        "Second paragraph...",
        "Third paragraph..."
    ]
}
```

### 2. Social Links

```javascript
social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    twitter: "https://twitter.com/yourhandle",
    youtube: "https://youtube.com/@yourchannel",
    instagram: "https://instagram.com/yourhandle",
    hackaday: "https://hackaday.io/yourprofile",
    email: "mailto:your.email@example.com"
}
```

**Tips:**
- Remove any social links you don't use
- Add new ones following the same pattern
- Icons are from Font Awesome (use their class names)

---

## Adding & Managing Projects

### File: `js/projects.js`

### Project Template

```javascript
{
    id: "unique-project-id",              // URL-friendly identifier
    title: "Project Title",                // Display name
    description: "Brief one-line description for cards",
    longDescription: `
        Detailed multi-paragraph description.
        This appears on individual project pages.
        
        You can use multiple paragraphs here.
    `,
    category: "electrical",                // Choose: electrical, diy, software, robotics, iot
    tags: ["Tag1", "Tag2", "Tag3"],       // Technology/tool tags
    image: "assets/images/projects/project-name.jpg",
    github: "https://github.com/...",     // Optional
    demo: "https://demo-url.com",         // Optional
    featured: true,                        // Show on homepage?
    date: "2026-01-20",                   // YYYY-MM-DD format
    gallery: [                             // Optional: additional images
        "assets/images/projects/proj-1.jpg",
        "assets/images/projects/proj-2.jpg"
    ]
}
```

### Adding a New Project

1. Copy the template above
2. Fill in all fields
3. Add to the `PROJECTS` array in `js/projects.js`
4. Add your project image(s) to `assets/images/projects/`
5. Refresh your page!

### Categories Explained

- **electrical**: Circuit design, PCBs, electronics
- **diy**: Maker projects, 3D printing, crafts
- **software**: Apps, websites, scripts
- **robotics**: Robots, automation, mechatronics
- **iot**: Internet of Things, smart devices

### Featured Projects

Set `featured: true` to show on homepage. Limit to 4-6 for best layout.

---

## Customizing Skills

### File: `js/config.js`

### Skill Category Template

```javascript
{
    name: "Category Name",
    icon: "fas fa-code",  // Font Awesome icon
    items: [
        { 
            name: "Skill Name", 
            level: 90,  // 0-100
            icon: "fab fa-python"  // Optional
        }
    ]
}
```

### Complete Example

```javascript
skills: {
    categories: [
        {
            name: "Programming Languages",
            icon: "fas fa-code",
            items: [
                { name: "Python", level: 90, icon: "fab fa-python" },
                { name: "JavaScript", level: 85, icon: "fab fa-js" },
                { name: "C++", level: 80 }
            ]
        },
        {
            name: "Hardware",
            icon: "fas fa-microchip",
            items: [
                { name: "Arduino", level: 95 },
                { name: "Raspberry Pi", level: 85 },
                { name: "PCB Design", level: 80 }
            ]
        }
    ]
}
```

### Finding Icons

1. Go to [fontawesome.com/icons](https://fontawesome.com/icons)
2. Search for your skill
3. Copy the class name (e.g., `fab fa-python`)
4. Use in your config

---

## Theme Customization

### Switching Default Theme

**File**: `js/config.js`

```javascript
theme: {
    default: 'cyberpunk',  // Change this!
    // Options: cyberpunk, synthwave, matrix, minimal, dracula
    
    allowThemeSwitch: true,  // Allow users to switch?
    availableThemes: ['cyberpunk', 'synthwave', 'matrix'],
    rememberPreference: true  // Remember user's choice?
}
```

### Creating a Custom Theme

**File**: `css/themes.css`

1. Copy an existing theme block
2. Change `data-theme` name
3. Update all color variables

```css
body[data-theme="my-theme"] {
    /* Backgrounds */
    --bg-primary: #1a1a2e;
    --bg-secondary: #16213e;
    --bg-tertiary: #0f3460;
    
    /* Text */
    --text-primary: #eaeaea;
    --text-secondary: #c5c5c5;
    --text-tertiary: #a0a0a0;
    
    /* Accents */
    --accent-primary: #e94560;
    --accent-secondary: #ff6b9d;
    
    /* Borders */
    --border-color: rgba(233, 69, 96, 0.3);
    
    /* Special */
    --bg-nav: rgba(26, 26, 46, 0.95);
    --bg-footer: #0f0f1e;
    --bg-terminal: #0f0f1e;
    --bg-terminal-header: #16213e;
    --bg-tag: rgba(233, 69, 96, 0.1);
    --text-tag: #e94560;
}
```

4. Add theme name to `config.js`:

```javascript
availableThemes: ['cyberpunk', 'my-theme']
```

### Color Variable Guide

| Variable | Usage |
|----------|-------|
| `--bg-primary` | Main background |
| `--bg-secondary` | Cards, sections |
| `--text-primary` | Main text color |
| `--text-secondary` | Secondary text |
| `--accent-primary` | Links, buttons |
| `--accent-secondary` | Hover states |

---

## Effects & Animations

### File: `js/config.js`

### Particle Background

```javascript
effects: {
    particles: {
        enabled: true,           // Turn on/off
        count: 100,             // Number of particles
        speed: 0.5,             // Movement speed (0.1-2.0)
        color: '#00ff9f',       // Particle color (hex)
        connectionDistance: 150  // Line connection distance
    }
}
```

**Performance Tips:**
- Lower `count` on slower devices (50-75)
- Reduce `speed` for calmer effect
- Disable completely with `enabled: false`

### Typing Animation

```javascript
typingAnimation: {
    enabled: true,
    speed: 50,  // Milliseconds per character
    text: "Your custom text here.\nUse \\n for new lines."
}
```

### Glitch Effect

```javascript
glitchEffect: {
    enabled: true,
    intensity: 'medium'  // Options: low, medium, high
}
```

### Scroll Animations

```javascript
scrollAnimations: {
    enabled: true,
    offset: 100  // Pixels before triggering
}
```

### Disable All Effects

```javascript
// Quick disable for performance
effects: {
    particles: { enabled: false },
    typingAnimation: { enabled: false },
    glitchEffect: { enabled: false },
    scrollAnimations: { enabled: false }
}
```

---

## Adding Blog Posts

### File: `js/main.js`

Find the `initializeBlog()` function and add to the `posts` array:

```javascript
const posts = [
    {
        title: "Your Blog Post Title",
        excerpt: "Brief summary of the post (150-200 characters)...",
        date: "2026-01-20",  // YYYY-MM-DD
        category: "tutorials",  // tutorials, projects, reviews, thoughts
        image: "assets/images/blog/post-image.jpg",
        link: "pages/blog/your-post.html"
    }
];
```

### Creating a Blog Post Page

1. Create `pages/blog/your-post.html`
2. Copy structure from `index.html`
3. Replace content section with your post
4. Add images to `assets/images/blog/`

### Blog Settings

**File**: `js/config.js`

```javascript
blog: {
    enabled: true,
    postsPerPage: 6,
    showExcerpt: true,
    excerptLength: 150,
    showReadTime: true,
    categories: ["tutorials", "projects", "reviews", "thoughts"]
}
```

---

## Contact Form Setup

### Option 1: Formspree (Recommended)

1. **Sign up**: [formspree.io](https://formspree.io)
2. **Create a new form**
3. **Copy your endpoint**: `https://formspree.io/f/YOUR_FORM_ID`
4. **Update config.js**:

```javascript
contact: {
    backend: 'formspree',
    endpoint: 'https://formspree.io/f/YOUR_FORM_ID',
    messages: {
        success: "Thanks! I'll get back to you soon.",
        error: "Oops! Please try again or email me directly."
    }
}
```

### Option 2: Getform

Same process as Formspree:
1. Sign up at [getform.io](https://getform.io)
2. Create form
3. Copy endpoint
4. Update `config.js`

### Option 3: Simple mailto

```javascript
contact: {
    backend: 'mailto',
    fallbackEmail: 'your.email@example.com'
}
```

**Note**: This opens the user's email client.

### Customizing Form Fields

**File**: `js/config.js`

```javascript
contact: {
    fields: {
        name: { required: true, label: "Your Name" },
        email: { required: true, label: "Email Address" },
        subject: { required: true, label: "Subject" },
        message: { required: true, label: "Message", rows: 5 },
        // Add custom fields:
        phone: { required: false, label: "Phone (optional)" }
    }
}
```

---

## Navigation & Sections

### Adding a New Section

1. **Add HTML** to `index.html`:

```html
<section id="new-section" class="section">
    <div class="container">
        <h2 class="section-title">
            <span class="title-number">06.</span> New Section
        </h2>
        <!-- Your content here -->
    </div>
</section>
```

2. **Add navigation link** in `config.js`:

```javascript
navigation: {
    links: [
        { text: "Home", href: "#home" },
        { text: "New Section", href: "#new-section" },
        // ... other links
    ]
}
```

3. **Style** in `css/style.css` if needed.

### Removing a Section

1. Delete section HTML from `index.html`
2. Remove navigation link from `config.js`
3. Update section numbers if using them

### Reordering Sections

Just rearrange the `<section>` blocks in `index.html`. Navigation will follow automatically.

---

## Advanced Customization

### Changing Fonts

**File**: `index.html` - Update `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;600;700&display=swap" rel="stylesheet">
```

**File**: `css/style.css` - Update variables:

```css
:root {
    --font-mono: 'Your Mono Font', monospace;
    --font-sans: 'Your Sans Font', sans-serif;
}
```

### Adjusting Layout Widths

**File**: `css/style.css`

```css
.container {
    max-width: 1200px;  /* Change this */
}
```

### Custom Animations

**File**: `css/animations.css`

Add your own:

```css
@keyframes myAnimation {
    from { /* start state */ }
    to { /* end state */ }
}

.my-element {
    animation: myAnimation 1s ease;
}
```

### Adding Google Analytics

**File**: `index.html` - Before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### SEO Optimization

**File**: `js/config.js`

```javascript
seo: {
    title: "Your Name | Portfolio",
    description: "Your compelling description (150-160 characters)",
    keywords: "electrical engineer, your skills, your specialties",
    image: "assets/images/og-image.jpg",  // 1200x630px
    twitterHandle: "@yourhandle"
}
```

**File**: `index.html` - These will be auto-generated in future updates:

```html
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your Description">
<meta property="og:image" content="URL to image">
<meta name="twitter:card" content="summary_large_image">
```

---

## Testing Checklist

Before going live, test:

- [ ] All links work (internal and external)
- [ ] Images load correctly
- [ ] Mobile responsive (use browser dev tools)
- [ ] Contact form sends messages
- [ ] Theme switching works
- [ ] All projects display correctly
- [ ] Skills show proper percentages
- [ ] Navigation smooth scrolls
- [ ] Effects can be toggled
- [ ] Load time is acceptable
- [ ] No console errors

---

## Common Questions

### Q: How do I change the color of buttons?

**A:** Edit `--accent-primary` in your theme in `css/themes.css`

### Q: Can I add more themes?

**A:** Yes! Follow the theme creation guide above. Add as many as you want.

### Q: How do I make text bigger/smaller?

**A:** Change `font-size` in `css/style.css` or adjust `html { font-size: 16px; }` for global scaling.

### Q: Can I use this for commercial projects?

**A:** Yes! It's MIT licensed. Feel free to use it however you'd like.

### Q: How do I remove the particle effect permanently?

**A:** In `js/config.js`, set `effects.particles.enabled: false`

---

## Need Help?

- Check the main [README.md](README.md)
- Review code comments in files
- Open an issue on GitHub
- Search existing issues

---

**Happy Customizing! 🎨**
