/**
 * CONFIG INJECTION UTILITY
 * ========================
 * Automatically injects configuration values into HTML elements
 * Ensures changes to config.js are reflected immediately in the website
 */

function injectConfigValues() {
    console.log('🔧 Starting config injection...');
    
    if (typeof CONFIG === 'undefined') {
        console.warn('⚠️ CONFIG not loaded yet, retrying in 100ms');
        setTimeout(injectConfigValues, 100);
        return;
    }
    
    // Inject personal info
    if (CONFIG.personal) {
        document.querySelectorAll('[data-config="name"]').forEach(el => {
            el.textContent = CONFIG.personal.name;
        });
        
        document.querySelectorAll('[data-config="title"]').forEach(el => {
            el.textContent = CONFIG.personal.title;
        });
        
        document.querySelectorAll('[data-config="email"]').forEach(el => {
            if (el.tagName === 'A') {
                el.href = 'mailto:' + CONFIG.personal.email;
                el.textContent = CONFIG.personal.email;
            } else {
                el.textContent = CONFIG.personal.email;
            }
        });
        
        document.querySelectorAll('[data-config="location"]').forEach(el => {
            el.textContent = CONFIG.personal.location;
        });
        
        document.querySelectorAll('[data-config="bio"]').forEach(el => {
            if (Array.isArray(CONFIG.personal.bio)) {
                el.innerHTML = CONFIG.personal.bio.map(p => `<p>${p}</p>`).join('');
            }
        });
    }
    
    // Inject social links
    if (CONFIG.social) {
        Object.keys(CONFIG.social).forEach(platform => {
            document.querySelectorAll(`[data-social="${platform}"]`).forEach(el => {
                const url = CONFIG.social[platform];
                if (el.tagName === 'A') {
                    el.href = url;
                    // Update text content if it's email
                    if (platform === 'email' && url.startsWith('mailto:')) {
                        const email = url.replace('mailto:', '');
                        el.textContent = email;
                    }
                }
                el.setAttribute('data-platform', platform);
            });
        });
    }
    
    // Also update contact methods section
    const contactEmail = document.querySelector('[data-contact="email"]');
    if (contactEmail && CONFIG.personal.email) {
        contactEmail.href = 'mailto:' + CONFIG.personal.email;
        const emailSpan = contactEmail.querySelector('span');
        if (emailSpan) emailSpan.textContent = CONFIG.personal.email;
    }
    
    const contactGithub = document.querySelector('[data-contact="github"]');
    if (contactGithub && CONFIG.social.github) {
        contactGithub.href = CONFIG.social.github;
    }
    
    const contactLinkedin = document.querySelector('[data-contact="linkedin"]');
    if (contactLinkedin && CONFIG.social.linkedin) {
        contactLinkedin.href = CONFIG.social.linkedin;
    }
    
    console.log('✅ Config values injected successfully');
}

// Run after DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Use setTimeout to ensure all DOM elements are ready
        setTimeout(injectConfigValues, 50);
    });
} else {
    // DOM already loaded
    setTimeout(injectConfigValues, 50);
}
