/**
 * PARTICLE BACKGROUND EFFECT
 * ==========================
 * Creates an animated particle system for the hero section.
 * Fully configurable through CONFIG.effects.particles
 */

class ParticleSystem {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null, radius: 150 };
        
        // Load settings from config
        this.config = CONFIG.effects.particles || {};
        this.enabled = this.config.enabled !== false;
        
        if (!this.enabled) {
            this.canvas.style.display = 'none';
            return;
        }

        this.particleCount = this.config.count || 100;
        this.speed = this.config.speed || 0.5;
        this.color = this.config.color || '#00ff9f';
        this.connectionDistance = this.config.connectionDistance || 150;

        this.init();
    }

    init() {
        this.resizeCanvas();
        this.createParticles();
        this.setupEventListeners();
        this.animate();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        const particleCount = Math.min(
            this.particleCount,
            Math.floor((this.canvas.width * this.canvas.height) / 15000)
        );

        for (let i = 0; i < particleCount; i++) {
            this.particles.push(new Particle(
                Math.random() * this.canvas.width,
                Math.random() * this.canvas.height,
                this.speed,
                this.color
            ));
        }
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.createParticles();
        });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });

        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    animate() {
        if (!this.enabled) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and draw particles
        this.particles.forEach(particle => {
            particle.update(this.canvas.width, this.canvas.height, this.mouse);
            particle.draw(this.ctx);
        });

        // Draw connections
        this.connectParticles();

        requestAnimationFrame(() => this.animate());
    }

    connectParticles() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.connectionDistance) {
                    const opacity = 1 - (distance / this.connectionDistance);
                    this.ctx.strokeStyle = this.hexToRgba(this.color, opacity * 0.3);
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }

    hexToRgba(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    toggle() {
        this.enabled = !this.enabled;
        this.canvas.style.display = this.enabled ? 'block' : 'none';
        if (this.enabled) {
            this.animate();
        }
    }
}

class Particle {
    constructor(x, y, speed, color) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * speed;
        this.speedY = (Math.random() - 0.5) * speed;
        this.color = color;
    }

    update(width, height, mouse) {
        // Bounce off edges
        if (this.x > width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y > height || this.y < 0) {
            this.speedY = -this.speedY;
        }

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                const angle = Math.atan2(dy, dx);
                const force = (mouse.radius - distance) / mouse.radius;
                this.speedX -= Math.cos(angle) * force * 0.5;
                this.speedY -= Math.sin(angle) * force * 0.5;
            }
        }

        // Update position
        this.x += this.speedX;
        this.y += this.speedY;

        // Damping to prevent excessive speed
        this.speedX *= 0.99;
        this.speedY *= 0.99;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Initialize when DOM is loaded
let particleSystem;
document.addEventListener('DOMContentLoaded', () => {
    particleSystem = new ParticleSystem('particleCanvas');
});
