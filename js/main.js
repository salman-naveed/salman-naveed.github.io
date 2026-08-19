/**
 * MAIN JAVASCRIPT
 * ===============
 * Core functionality for the website
 */

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeWebsite();
    initializeNavigation();
    initializeTheme();
    initializeAnimations();
    initializeTypingAnimation();
    initializeProjectFilters();
    initializeSkills();
    initializeBlog();
    initializeContactForm();
    initializeScrollEffects();
    initializeEasterEggs();
    measureLoadTime();
});

// ==================== WEBSITE INITIALIZATION ====================
function initializeWebsite() {
    console.log('🚀 Portfolio website initialized');
    
    // Apply accessibility preferences
    if (CONFIG.accessibility.respectReducedMotion) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            document.body.classList.add('reduced-motion');
            CONFIG.effects.scrollAnimations.enabled = false;
        }
    }

    // Set up effects toggle
    const effectsToggle = document.getElementById('effectsToggle');
    if (effectsToggle) {
        effectsToggle.addEventListener('click', toggleEffects);
    }
}

// ==================== NAVIGATION ====================
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offset = 80; // navbar height
                const targetPosition = targetSection.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: CONFIG.effects.smoothScroll.enabled ? 'smooth' : 'auto'
                });

                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Close mobile menu
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });

    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ==================== THEME SYSTEM ====================
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || CONFIG.theme.default;
    
    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const themes = CONFIG.theme.availableThemes;
            const currentIndex = themes.indexOf(currentTheme);
            const nextTheme = themes[(currentIndex + 1) % themes.length];
            
            applyTheme(nextTheme);
            
            if (CONFIG.theme.rememberPreference) {
                localStorage.setItem('theme', nextTheme);
            }
        });
    }
}

function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    console.log(`🎨 Theme changed to: ${theme}`);
}

// ==================== TYPING ANIMATION ====================
function initializeTypingAnimation() {
    if (!CONFIG.effects.typingAnimation.enabled) return;

    const output = document.getElementById('terminalOutput');
    if (!output) return;

    const text = CONFIG.effects.typingAnimation.text;
    const speed = CONFIG.effects.typingAnimation.speed;
    let index = 0;

    function type() {
        if (index < text.length) {
            if (text.charAt(index) === '\n') {
                output.innerHTML += '<br>';
            } else {
                output.innerHTML += text.charAt(index);
            }
            index++;
            setTimeout(type, speed);
        }
    }

    setTimeout(type, 500);
}

// ==================== ANIMATIONS ====================
function initializeAnimations() {
    if (!CONFIG.effects.scrollAnimations.enabled) return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: `0px 0px -${CONFIG.effects.scrollAnimations.offset}px 0px`
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// ==================== PROJECT FILTERS ====================
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectsGrid = document.getElementById('projectsGrid');

    // Load featured projects initially
    const featuredProjects = getFeaturedProjects();
    renderProjects(featuredProjects);

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            const filter = button.getAttribute('data-filter');
            const filteredProjects = filter === 'all' 
                ? PROJECTS 
                : getProjectsByCategory(filter);
            
            // Fade out
            projectsGrid.style.opacity = '0';
            
            setTimeout(() => {
                renderProjects(filteredProjects);
                projectsGrid.style.opacity = '1';
            }, 300);
        });
    });
}

// ==================== SKILLS ====================
function initializeSkills() {
    const skillsContainer = document.getElementById('skillsContainer');
    if (!skillsContainer) return;

    CONFIG.skills.categories.forEach((category, index) => {
        const categoryElement = createSkillCategory(category, index);
        skillsContainer.appendChild(categoryElement);
    });
}

function createSkillCategory(category, index) {
    const div = document.createElement('div');
    div.className = 'skill-category';
    div.setAttribute('data-aos', 'fade-up');
    div.setAttribute('data-aos-delay', index * 100);

    div.innerHTML = `
        <h3 class="skill-category-title">
            <i class="${category.icon}"></i>
            ${category.name}
        </h3>
        <div class="skill-items">
            ${category.items.map(skill => `
                <div class="skill-item">
                    <div class="skill-header">
                        <span class="skill-name">
                            ${skill.icon ? `<i class="${skill.icon}"></i>` : ''}
                            ${skill.name}
                        </span>
                        <span class="skill-level">${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: ${skill.level}%"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    return div;
}

// ==================== BLOG ====================
function initializeBlog() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid || !CONFIG.blog.enabled) return;

    // Placeholder blog posts (you can create a separate blog.js file)
    const posts = [
        {
            title: "Building My First FPGA Audio Synthesizer",
            excerpt: "A journey into digital signal processing and FPGA development...",
            date: "2025-12-15",
            category: "tutorials",
            image: "assets/images/blog/fpga-synth.jpg",
            link: "pages/blog/fpga-audio-synthesizer.html"
        },
        {
            title: "DIY Solar-Powered Projects: Tips and Tricks",
            excerpt: "Everything I learned building solar-powered IoT devices...",
            date: "2025-11-20",
            category: "projects",
            image: "assets/images/blog/solar-power.jpg",
            link: "pages/blog/solar-powered-projects.html"
        },
        {
            title: "My Favorite PCB Design Tools in 2025",
            excerpt: "A comparison of KiCAD, Eagle, and other PCB design software...",
            date: "2025-10-05",
            category: "reviews",
            image: "assets/images/blog/pcb-tools.jpg",
            link: "pages/blog/pcb-design-tools.html"
        }
    ];

    posts.forEach((post, index) => {
        const postCard = createBlogCard(post, index);
        blogGrid.appendChild(postCard);
    });
}

function createBlogCard(post, index) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index % 3) * 100);

    const date = new Date(post.date);
    const formattedDate = date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    card.innerHTML = `
        <div class="blog-image">
            <img src="${post.image}" alt="${post.title}" loading="lazy" onerror="this.src='assets/images/blog/placeholder.jpg'">
            <span class="blog-category">${post.category}</span>
        </div>
        <div class="blog-content">
            <div class="blog-meta">
                <span class="blog-date"><i class="fas fa-calendar"></i> ${formattedDate}</span>
            </div>
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <a href="${post.link}" class="blog-link">
                Read More <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;

    return card;
}

// ==================== CONTACT FORM ====================
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Collect form data
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const subject = form.querySelector('#subject').value;
        const message = form.querySelector('#message').value;

        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;

        try {
            if (CONFIG.contact.backend === 'formspree' || CONFIG.contact.backend === 'getform') {
                // Create FormData object
                const formData = new FormData();
                formData.append('name', name);
                formData.append('email', email);
                formData.append('subject', subject);
                formData.append('message', message);

                const endpoint = CONFIG.contact.endpoint;
                console.log('📤 Submitting form to:', endpoint);

                const response = await fetch(endpoint, {
                    method: 'POST',
                    body: formData
                });

                console.log('📬 Response status:', response.status);

                if (response.ok || response.status === 200 || response.status === 201) {
                    showNotification('✅ Message sent successfully! Thank you for reaching out.', 'success');
                    form.reset();
                    console.log('✅ Form submitted successfully');
                } else {
                    console.error('❌ Submission failed with status:', response.status);
                    const text = await response.text();
                    console.error('Response:', text);
                    throw new Error(`HTTP ${response.status}`);
                }
            } else if (CONFIG.contact.backend === 'mailto') {
                // Fallback to mailto
                const mailtoLink = `mailto:${CONFIG.contact.fallbackEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
                window.location.href = mailtoLink;
                showNotification('Opening your email client...', 'info');
            } else {
                throw new Error('Unknown contact backend: ' + CONFIG.contact.backend);
            }
        } catch (error) {
            console.error('❌ Form submission error:', error);
            showNotification('❌ ' + (CONFIG.contact.messages.error || 'Failed to send message. Please try again.'), 'error');
        } finally {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
    });

    console.log('📋 Contact form initialized');
}

// ==================== SCROLL EFFECTS ====================
function initializeScrollEffects() {
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ==================== EASTER EGGS ====================
function initializeEasterEggs() {
    if (!CONFIG.features.easterEggs.enabled) return;

    if (CONFIG.features.easterEggs.konamiCode) {
        initializeKonamiCode();
    }
}

function initializeKonamiCode() {
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateEasterEgg() {
    showNotification('🎮 Konami Code Activated! Secret mode enabled!', 'success');
    document.body.classList.add('secret-mode');
    // Add fun effects here!
}

// ==================== UTILITIES ====================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function toggleEffects() {
    const effectsEnabled = document.body.classList.toggle('effects-disabled');
    
    // Toggle particles
    if (typeof particleSystem !== 'undefined') {
        particleSystem.toggle();
    }
    
    showNotification(
        effectsEnabled ? 'Effects disabled' : 'Effects enabled',
        'info'
    );
}

function measureLoadTime() {
    if (!CONFIG.performance.showLoadTime) return;

    window.addEventListener('load', () => {
        const loadTime = performance.now();
        const loadTimeElement = document.getElementById('loadTime');
        if (loadTimeElement) {
            loadTimeElement.textContent = `Load time: ${(loadTime / 1000).toFixed(2)}s`;
        }
    });
}

// ==================== EXPORTS ====================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { showNotification, applyTheme };
}
