class ConstellationBackground {
    constructor() {
        this.canvas = document.getElementById('constellation-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        this.mouse = { x: 0, y: 0 };
        this.maxDistance = 150;
        this.isInteractive = this.checkIfInteractive();

        this.init();
        this.createStars();
        this.animate();
        this.bindEvents();
    }

    checkIfInteractive() {
        // Only interactive on index page
        const path = window.location.pathname;
        return path === '/' || path === '/index.html';
    }

    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createStars() {
        const numStars = Math.floor((this.canvas.width * this.canvas.height) / 8000);

        for (let i = 0; i < numStars; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.6 + 0.4,
                twinkleSpeed: Math.random() * 0.02 + 0.01,
                vx: (Math.random() - 0.5) * 2.5,
                vy: (Math.random() - 0.5) * 2.5
            });
        }
    }

    drawStars() {
        this.stars.forEach(star => {
            this.ctx.save();
            this.ctx.globalAlpha = star.opacity;
            this.ctx.fillStyle = '#ffffff';
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();

            // Stable opacity - no more twinkling/fading
            star.opacity = 0.8;
        });
    }

    drawConnections() {
        this.stars.forEach((star, i) => {
            // Connect to mouse
            const distToMouse = Math.sqrt(
                Math.pow(star.x - this.mouse.x, 2) +
                Math.pow(star.y - this.mouse.y, 2)
            );

            if (distToMouse < this.maxDistance) {
                this.ctx.save();
                const opacity = (1 - distToMouse / this.maxDistance) * 0.8;
                this.ctx.globalAlpha = opacity;
                this.ctx.strokeStyle = '#3b82f6';
                this.ctx.lineWidth = 1;
                this.ctx.beginPath();
                this.ctx.moveTo(star.x, star.y);
                this.ctx.lineTo(this.mouse.x, this.mouse.y);
                this.ctx.stroke();
                this.ctx.restore();
            }

            // Connect to other nearby stars
            for (let j = i + 1; j < this.stars.length; j++) {
                const otherStar = this.stars[j];
                const distance = Math.sqrt(
                    Math.pow(star.x - otherStar.x, 2) +
                    Math.pow(star.y - otherStar.y, 2)
                );

                if (distance < 120) {
                    this.ctx.save();
                    const opacity = (1 - distance / 120) * 0.6;
                    this.ctx.globalAlpha = opacity;
                    this.ctx.strokeStyle = '#ffffff';
                    this.ctx.lineWidth = 0.5;
                    this.ctx.beginPath();
                    this.ctx.moveTo(star.x, star.y);
                    this.ctx.lineTo(otherStar.x, otherStar.y);
                    this.ctx.stroke();
                    this.ctx.restore();
                }
            }
        });
    }

    updateStars() {
        this.stars.forEach(star => {
            // Cursor repulsion force - only on interactive pages
            if (this.isInteractive) {
                const distToMouse = Math.sqrt(
                    Math.pow(star.x - this.mouse.x, 2) +
                    Math.pow(star.y - this.mouse.y, 2)
                );

                if (distToMouse < this.maxDistance && distToMouse > 0) {
                    const force = (this.maxDistance - distToMouse) / this.maxDistance;
                    const angle = Math.atan2(star.y - this.mouse.y, star.x - this.mouse.x);
                    const pushStrength = force * 2;

                    star.vx += Math.cos(angle) * pushStrength * 0.1;
                    star.vy += Math.sin(angle) * pushStrength * 0.1;
                }
            }

            // Attraction to nearby stars (clustering effect)
            this.stars.forEach(otherStar => {
                if (star !== otherStar) {
                    const distance = Math.sqrt(
                        Math.pow(star.x - otherStar.x, 2) +
                        Math.pow(star.y - otherStar.y, 2)
                    );

                    if (distance < 80 && distance > 0) {
                        const force = 0.0005;
                        const angle = Math.atan2(otherStar.y - star.y, otherStar.x - star.x);

                        star.vx += Math.cos(angle) * force;
                        star.vy += Math.sin(angle) * force;
                    }
                }
            });

            // Apply velocity with damping
            star.vx *= 0.99;
            star.vy *= 0.99;

            star.x += star.vx;
            star.y += star.vy;

            // Keep stars within frame boundaries
            if (star.x < 0) {
                star.x = 0;
                star.vx = Math.abs(star.vx) * 0.5; // bounce back with reduced velocity
            }
            if (star.x > this.canvas.width) {
                star.x = this.canvas.width;
                star.vx = -Math.abs(star.vx) * 0.5; // bounce back with reduced velocity
            }
            if (star.y < 0) {
                star.y = 0;
                star.vy = Math.abs(star.vy) * 0.5; // bounce back with reduced velocity
            }
            if (star.y > this.canvas.height) {
                star.y = this.canvas.height;
                star.vy = -Math.abs(star.vy) * 0.5; // bounce back with reduced velocity
            }
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.updateStars();
        this.drawConnections();
        this.drawStars();

        requestAnimationFrame(() => this.animate());
    }

    bindEvents() {
        // Only bind mouse events on interactive pages
        if (this.isInteractive) {
            window.addEventListener('mousemove', (e) => {
                this.mouse.x = e.clientX;
                this.mouse.y = e.clientY;
            });
        }

        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.stars = [];
            this.createStars();
        });
    }
}

// Initialize constellation background when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ConstellationBackground();
});