/**
 * CONFIG INJECTION UTILITY
 * ========================
 * Automatically injects configuration values into HTML elements
 * Ensures changes to config.js are reflected immediately in the website
 */

function injectConfigValues() {
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
                }
                el.setAttribute('data-platform', platform);
            });
        });
    }
    
    console.log('✅ Config values injected successfully');
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', injectConfigValues);

// Also run immediately in case config loads before this script
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectConfigValues);
} else {
    injectConfigValues();
}
