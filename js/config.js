/**
 * WEBSITE CONFIGURATION
 * =====================
 * Edit this file to easily customize your website content, themes, and settings.
 * No need to touch HTML, CSS, or other JS files for basic content changes!
 */

const CONFIG = {
    // ==================== PERSONAL INFO ====================
    personal: {
        name: "Salman Naveed",
        title: "Electrical Engineer • DIY Maker • Tech Polymath",
        email: "your.email@example.com",
        location: "Your Location",
        tagline: "Building innovative solutions at the intersection of hardware and software",
        bio: [
            "Hello! I'm Salman, an electrical engineer with a passion for creating innovative solutions at the intersection of hardware and software.",
            "As a DIY maker and tech enthusiast, I love diving deep into various domains – whether it's building robots, experimenting with IoT devices, or exploring new programming paradigms.",
            "When I'm not soldering circuits or writing code, you can find me tinkering with new technologies, reading about the latest innovations, or working on my next maker project."
        ]
    },

    // ==================== SOCIAL LINKS ====================
    social: {
        github: "https://github.com/salman-naveed",
        linkedin: "https://linkedin.com/in/yourprofile",
        twitter: "https://twitter.com/yourhandle",
        youtube: "https://youtube.com/@yourchannel",
        instagram: "https://instagram.com/yourhandle",
        hackaday: "https://hackaday.io/yourprofile",
        email: "mailto:your.email@example.com"
    },

    // ==================== NAVIGATION ====================
    navigation: {
        enabled: true,
        links: [
            { text: "Home", href: "#home", icon: "fas fa-home" },
            { text: "About", href: "#about", icon: "fas fa-user" },
            { text: "Projects", href: "#projects", icon: "fas fa-code" },
            { text: "Skills", href: "#skills", icon: "fas fa-cogs" },
            { text: "Blog", href: "#blog", icon: "fas fa-blog" },
            { text: "Contact", href: "#contact", icon: "fas fa-envelope" }
        ]
    },

    // ==================== THEME SETTINGS ====================
    theme: {
        // Default theme: 'cyberpunk', 'synthwave', 'matrix', 'minimal', 'dracula'
        default: 'cyberpunk',
        
        // Enable theme switching
        allowThemeSwitch: true,
        
        // Available themes (users can switch between these)
        availableThemes: ['cyberpunk', 'synthwave', 'matrix', 'minimal', 'dracula'],
        
        // Remember user's theme preference
        rememberPreference: true
    },

    // ==================== EFFECTS & ANIMATIONS ====================
    effects: {
        // Particle background
        particles: {
            enabled: true,
            count: 100,
            speed: 0.5,
            color: '#00ff9f',
            connectionDistance: 150
        },
        
        // Typing animation in terminal
        typingAnimation: {
            enabled: true,
            speed: 50, // milliseconds per character
            text: "Electrical Engineer | DIY Maker | Tech Polymath\nBuilding the future, one project at a time."
        },
        
        // Glitch effect on title
        glitchEffect: {
            enabled: true,
            intensity: 'medium' // 'low', 'medium', 'high'
        },
        
        // Scroll animations
        scrollAnimations: {
            enabled: true,
            offset: 100 // pixels before element comes into view
        },
        
        // Smooth scrolling
        smoothScroll: {
            enabled: true,
            duration: 800 // milliseconds
        },
        
        // Sound effects (optional)
        soundEffects: {
            enabled: false,
            volume: 0.3
        }
    },

    // ==================== SKILLS ====================
    skills: {
        // Categories of skills
        categories: [
            {
                name: "Programming Languages",
                icon: "fas fa-code",
                items: [
                    { name: "Python", level: 90, icon: "fab fa-python" },
                    { name: "C/C++", level: 85, icon: "fas fa-code" },
                    { name: "JavaScript", level: 80, icon: "fab fa-js" },
                    { name: "MATLAB", level: 75, icon: "fas fa-chart-line" },
                    { name: "Verilog/VHDL", level: 70, icon: "fas fa-microchip" }
                ]
            },
            {
                name: "Hardware & Electronics",
                icon: "fas fa-microchip",
                items: [
                    { name: "PCB Design (KiCAD/Eagle)", level: 90 },
                    { name: "Arduino/ESP32", level: 95 },
                    { name: "Raspberry Pi", level: 85 },
                    { name: "FPGA Development", level: 70 },
                    { name: "Circuit Analysis", level: 90 },
                    { name: "Oscilloscope/Logic Analyzer", level: 85 }
                ]
            },
            {
                name: "Software & Tools",
                icon: "fas fa-tools",
                items: [
                    { name: "Git & GitHub", level: 90, icon: "fab fa-git-alt" },
                    { name: "Linux/Unix", level: 85, icon: "fab fa-linux" },
                    { name: "Docker", level: 75, icon: "fab fa-docker" },
                    { name: "VS Code", level: 95 },
                    { name: "Fusion 360", level: 80 },
                    { name: "LTSpice", level: 85 }
                ]
            },
            {
                name: "Web Development",
                icon: "fas fa-laptop-code",
                items: [
                    { name: "HTML/CSS", level: 90 },
                    { name: "React", level: 75, icon: "fab fa-react" },
                    { name: "Node.js", level: 70, icon: "fab fa-node" },
                    { name: "RESTful APIs", level: 80 }
                ]
            },
            {
                name: "Specialized",
                icon: "fas fa-brain",
                items: [
                    { name: "IoT Solutions", level: 85 },
                    { name: "Robotics", level: 80 },
                    { name: "Machine Learning", level: 70 },
                    { name: "Signal Processing", level: 75 },
                    { name: "3D Printing", level: 85 }
                ]
            }
        ]
    },

    // ==================== PROJECTS ====================
    // Note: Detailed projects are in projects.js
    // This section controls project page settings
    projects: {
        showFeaturedOnly: false,
        itemsPerPage: 6,
        categories: ["all", "electrical", "diy", "software", "robotics", "iot"],
        sortBy: "date", // 'date', 'name', 'category'
        sortOrder: "desc" // 'asc', 'desc'
    },

    // ==================== BLOG ====================
    blog: {
        enabled: true,
        postsPerPage: 6,
        showExcerpt: true,
        excerptLength: 150,
        showReadTime: true,
        showAuthor: false, // Set to true if you have guest authors
        categories: ["tutorials", "projects", "reviews", "thoughts"]
    },

    // ==================== CONTACT FORM ====================
    contact: {
        // Form backend service (choose one)
        // Options: 'formspree', 'getform', 'custom', 'mailto'
        backend: 'formspree',
        
        // Your form endpoint (for formspree/getform)
        endpoint: 'https://formspree.io/f/YOUR_FORM_ID',
        
        // Email for mailto fallback
        fallbackEmail: 'your.email@example.com',
        
        // Form fields
        fields: {
            name: { required: true, label: "Name" },
            email: { required: true, label: "Email" },
            subject: { required: true, label: "Subject" },
            message: { required: true, label: "Message", rows: 5 }
        },
        
        // Success/Error messages
        messages: {
            success: "Thanks for reaching out! I'll get back to you soon.",
            error: "Oops! Something went wrong. Please try again or email me directly."
        }
    },

    // ==================== SEO & META ====================
    seo: {
        title: "Salman Naveed | Electrical Engineer & DIY Maker",
        description: "Portfolio of Salman Naveed - Electrical Engineer, DIY Maker, and Tech Polymath. Showcasing projects in electronics, robotics, and software development.",
        keywords: "electrical engineer, DIY maker, electronics, robotics, IoT, embedded systems, portfolio",
        author: "Salman Naveed",
        image: "assets/images/og-image.jpg", // Open Graph image
        twitterHandle: "@yourhandle"
    },

    // ==================== FEATURES ====================
    features: {
        // Show GitHub contribution graph
        githubActivity: {
            enabled: false,
            username: "salman-naveed"
        },
        
        // Show latest YouTube videos
        youtubeVideos: {
            enabled: false,
            channelId: "YOUR_CHANNEL_ID",
            maxVideos: 3
        },
        
        // Show visitor count
        visitorCount: {
            enabled: false,
            service: 'goatcounter' // 'goatcounter', 'simple-analytics', etc.
        },
        
        // Easter eggs
        easterEggs: {
            enabled: true,
            konamiCode: true, // Up, Up, Down, Down, Left, Right, Left, Right, B, A
            secretCommands: true // Special terminal commands
        },
        
        // Resume/CV download
        resume: {
            enabled: true,
            file: "assets/resume/salman-naveed-resume.pdf"
        }
    },

    // ==================== PERFORMANCE ====================
    performance: {
        // Show load time in footer
        showLoadTime: true,
        
        // Lazy load images
        lazyLoadImages: true,
        
        // Preload critical resources
        preloadResources: true
    },

    // ==================== ACCESSIBILITY ====================
    accessibility: {
        // High contrast mode
        highContrastMode: false,
        
        // Reduce motion for users who prefer it
        respectReducedMotion: true,
        
        // Skip to content link
        skipToContent: true
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
