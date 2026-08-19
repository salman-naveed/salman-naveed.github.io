<!-- SVG Placeholder Generator - Add this to index.html before closing body tag -->
<svg id="placeholder-template" style="display:none;">
  <!-- This SVG will be used to generate placeholder images -->
  <defs>
    <pattern id="placeholder-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <rect width="40" height="40" fill="#1a1f3a"/>
      <path d="M0,0 l40,40 M40,0 l-40,40" stroke="#00ff9f" stroke-width="0.5" opacity="0.2"/>
    </pattern>
  </defs>
</svg>

<script>
/**
 * PLACEHOLDER IMAGE GENERATOR
 * Creates lightweight SVG placeholders for missing images
 * Prevents 404 errors and improves perceived performance
 */

function generatePlaceholderImage(text, width = 800, height = 600) {
    const svg = `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#1a1f3a;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#2a2f4a;stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect width="${width}" height="${height}" fill="url(#grad)"/>
            <circle cx="${width/2}" cy="${height/2 - 40}" r="40" fill="#00ff9f" opacity="0.3"/>
            <rect x="${width/4}" y="${height/2 + 20}" width="${width/2}" height="2" fill="#00ff9f" opacity="0.3"/>
            <text x="${width/2}" y="${height - 60}" font-family="monospace" font-size="18" fill="#00ff9f" text-anchor="middle" opacity="0.6">
                ${text}
            </text>
            <text x="${width/2}" y="${height - 20}" font-family="monospace" font-size="14" fill="#6272a4" text-anchor="middle">
                Add image to portfolio
            </text>
        </svg>
    `;
    return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

// Set placeholders on images with broken src
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img[onerror]').forEach(img => {
        // Already has error handler, good
    });
    
    // Add error handler to all images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            const altText = this.alt || 'Image Not Found';
            this.src = generatePlaceholderImage(altText);
            this.style.backgroundColor = '#1a1f3a';
        });
    });
});

// For dynamically added images
function onImageError(img) {
    const altText = img.alt || 'Image Not Found';
    img.src = generatePlaceholderImage(altText);
}
</script>
