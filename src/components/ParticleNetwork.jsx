import React, { useEffect, useRef } from "react";

const ParticleNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrame = null;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    let pulses = [];
    let isDark = document.documentElement.classList.contains("dark");
    let isVisible = true;

    const mouse = {
      x: null,
      y: null,
      radius: 140, // Mouse glow & push area
    };

    const getConfig = () => {
      const mobile = window.innerWidth < 768;
      const tablet = window.innerWidth < 1024;

      return {
        count: mobile ? 40 : tablet ? 65 : 90,
        connectionDistance: mobile ? 100 : tablet ? 120 : 140,
        speed: mobile ? 0.2 : 0.3,
        particleSize: mobile ? 1.2 : 1.5,
      };
    };

    let config = getConfig();

    const getTheme = () => {
      if (isDark) {
        return {
          particle1: "129, 140, 248",
          particle2: "192, 132, 252",
          glowColor: "224, 231, 255",
          line: "99, 102, 241",
          lineOpacity: 0.3,
          coreOpacity: 0.85,
        };
      }

      // Light Mode
      return {
        particle1: "67, 56, 202", 
        particle2: "126, 34, 206",
        glowColor: "99, 102, 241",
        line: "79, 70, 229",
        lineOpacity: 0.38,
        coreOpacity: 0.9,
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      config = getConfig();
      createParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * config.speed + 0.05;

        this.vx = Math.cos(angle) * velocity;
        this.vy = Math.sin(angle) * velocity;
        this.baseRadius = Math.random() * config.particleSize + 0.6;
        this.radius = this.baseRadius;

        this.opacity = Math.random() * 0.5 + 0.4;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.colorType = Math.random() > 0.5 ? 1 : 2;
        this.isGlowing = false;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        this.pulsePhase += 0.02;
        this.radius = this.baseRadius + Math.sin(this.pulsePhase) * 0.3;

        // Screen wrap
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        if (this.y > height + 20) this.y = -20;

        // Mouse Push (Repulsion) & Glow Logic
        this.isGlowing = false;
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            this.isGlowing = true;

            // Push force away from mouse
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * force * 2.2;
            this.y += Math.sin(angle) * force * 2.2;
          }
        }

        // Pulse Response on Click
        pulses.forEach((pulse) => {
          const dx = this.x - pulse.x;
          const dy = this.y - pulse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (Math.abs(distance - pulse.currentRadius) < 30) {
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * 3;
            this.y += Math.sin(angle) * 3;
          }
        });
      }

      draw() {
        const theme = getTheme();
        const baseColor =
          this.colorType === 1 ? theme.particle1 : theme.particle2;

        if (this.isGlowing) {
          // Extra outer glow when near mouse
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${theme.glowColor}, 0.25)`;
          ctx.fill();

          // Bright Core Particle
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${theme.glowColor}, 1)`;
          ctx.fill();
        } else {
          // Standard Particle
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${baseColor}, ${this.opacity * theme.coreOpacity})`;
          ctx.fill();
        }
      }
    }

    const createParticles = () => {
      particles = Array.from({ length: config.count }, () => new Particle());
    };

    const drawConnections = () => {
      const theme = getTheme();
      const maxDistance = config.connectionDistance;
      const maxDistanceSquared = maxDistance * maxDistance;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared > maxDistanceSquared) continue;

          const distance = Math.sqrt(distanceSquared);
          let opacity = (1 - distance / maxDistance) * theme.lineOpacity;
          let isHovered = false;

          // Highlight and thicken line around mouse
          if (mouse.x !== null && mouse.y !== null) {
            const centerX = (p1.x + p2.x) / 2;
            const centerY = (p1.y + p2.y) / 2;
            const mdx = centerX - mouse.x;
            const mdy = centerY - mouse.y;
            const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy);

            if (mouseDist < mouse.radius) {
              opacity += (1 - mouseDist / mouse.radius) * 0.45;
              isHovered = true;
            }
          }

          const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
          const c1 = isHovered ? theme.glowColor : theme.particle1;
          const c2 = isHovered ? theme.glowColor : theme.particle2;

          gradient.addColorStop(0, `rgba(${c1}, ${opacity})`);
          gradient.addColorStop(1, `rgba(${c2}, ${opacity})`);

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = isHovered ? 1.4 : isDark ? 0.75 : 0.9;
          ctx.stroke();
        }
      }
    };

    const drawPulses = () => {
      const theme = getTheme();

      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.currentRadius += 4;
        pulse.opacity -= 0.015;

        if (pulse.opacity <= 0 || pulse.currentRadius > pulse.maxRadius) {
          pulses.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(pulse.x, pulse.y, pulse.currentRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${theme.particle1}, ${pulse.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleClick = (event) => {
      const rect = canvas.getBoundingClientRect();
      pulses.push({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        currentRadius: 5,
        maxRadius: 180,
        opacity: 0.6,
      });
    };

    const themeObserver = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains("dark");
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const handleVisibility = () => {
      isVisible = document.visibilityState === "visible";
      if (isVisible && !animationFrame) animate();
    };

    const animate = () => {
      animationFrame = requestAnimationFrame(animate);
      if (!isVisible) return;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => particle.update());
      drawConnections();
      drawPulses();
      particles.forEach((particle) => particle.draw());
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);
    document.addEventListener("visibilitychange", handleVisibility);

    resize();
    animate();

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
      document.removeEventListener("visibilitychange", handleVisibility);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
};

export default React.memo(ParticleNetwork);
