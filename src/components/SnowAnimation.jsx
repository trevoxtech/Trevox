import React, { useRef, useEffect } from "react";

// SnowAnimation.jsx
// Default export: <SnowAnimation />
// Usage: import SnowAnimation from './SnowAnimation'; then include <SnowAnimation /> in your app.

export default function SnowAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    // Reduce particle count on mobile for better performance
    const particleCount = window.innerWidth < 768 ? 100 : 180;
    const mouse = { x: -9999, y: -9999 };

    class Snowflake {
      constructor(x = Math.random() * width, y = Math.random() * -height) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = Math.random() * 1.2 + 0.3; // falls down
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.8 + 0.2;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Use a color that works on both or check theme
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        ctx.fillStyle = isLight ? `rgba(0, 0, 0, ${this.opacity * 0.5})` : `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }

      update() {
        // Fall straight down
        this.x += this.vx;
        this.y += this.vy;

        // If out of screen → reset to top
        if (this.y > height) {
          this.y = -10;
          this.x = Math.random() * width;
        }

        // Mouse repulsion
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const repelRange = 90;
        if (dist < repelRange) {
          const angle = Math.atan2(dy, dx);
          const force = (repelRange - dist) / repelRange;
          this.x += Math.cos(angle) * force * 6;
          this.y += Math.sin(angle) * force * 6;
        }

        this.draw();
      }
    }

    // Initial snow
    for (let i = 0; i < particleCount; i++) particles.push(new Snowflake());

    // Track mouse
    function onMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    // ❄️ CLICK → spawn snow that falls straight down
    function onClick(e) {
      if (!e) return;
      for (let i = 0; i < 35; i++) {
        particles.push(new Snowflake(e.clientX + (Math.random() - 0.5) * 20, e.clientY + (Math.random() - 0.5) * 20));
      }
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("click", onClick);

    // Animation
    let raf;
    function animate() {
      ctx.clearRect(0, 0, width, height);

      // background
      // Removed solid background to allow hero gradient to show
      // const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      // bgGrad.addColorStop(0, "#6a8e97");
      // bgGrad.addColorStop(1, "rgb(46, 89, 102)");
      // ctx.fillStyle = bgGrad;
      // ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => p.update());

      // keep particle array from growing without bound
      if (particles.length > 1000) particles.splice(0, particles.length - 1000);

      raf = requestAnimationFrame(animate);
    }

    animate();

    function onResize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Container styles: full-screen canvas as background
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", zIndex: 0 }}>
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
    </div>
  );
}

