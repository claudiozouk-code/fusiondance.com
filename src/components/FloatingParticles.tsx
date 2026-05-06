import { useEffect, useRef } from 'react';

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const colors = ['#f4009a', '#ff7c00', '#fdfd00', '#00d44b', '#00abf1', '#8a33ff'];

    class Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      speedY: number;
      speedX: number;
      opacity: number;
      maxSize: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.maxSize = Math.random() * 80 + 20;
        this.size = 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedY = Math.random() * 0.5 + 0.1; // Slow drip down
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.05 + 0.02;
      }

      update(w: number, h: number) {
        this.y += this.speedY;
        this.x += this.speedX;
        
        // Drip effect: grow size as it "falls"
        if (this.size < this.maxSize) {
          this.size += 0.1;
        }

        if (this.y > h + this.size) {
          this.y = -this.size;
          this.x = Math.random() * w;
          this.size = 1;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.globalAlpha = this.opacity;
        context.fill();
        // Add a soft glow
        context.shadowBlur = 20;
        context.shadowColor = this.color;
      }
    }

    const init = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      particles = [];
      const count = Math.floor((w * h) / 15000); // Responsive density
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(w, h));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 bg-gray-50/30"
      style={{ filter: 'blur(40px)' }}
    />
  );
}
