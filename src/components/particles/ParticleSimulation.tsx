import React, { useEffect, useRef, useCallback, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  originalVx: number;
  originalVy: number;
}

interface Mouse {
  x: number;
  y: number;
  isPressed: boolean;
}

interface ParticleSimulationProps {
  theme: string;
  className?: string;
  particleCount?: number;
  speed?: number;
}

export const ParticleSimulation: React.FC<ParticleSimulationProps> = ({
  theme,
  className = "",
  particleCount = 50,
  speed = 0.5
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<Mouse>({ x: 0, y: 0, isPressed: false });
  const [interactionMode, setInteractionMode] = useState<'attract' | 'repel'>('attract');

  const initializeParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    const baseColor = theme === 'dark' ? '255,255,255' : '0,0,0';
    
    for (let i = 0; i < particleCount; i++) {
      const vx = (Math.random() - 0.5) * speed;
      const vy = (Math.random() - 0.5) * speed;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx,
        vy,
        originalVx: vx,
        originalVy: vy,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: baseColor
      });
    }
    
    particlesRef.current = particles;
  }, [particleCount, speed, theme]);

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);
    
    const mouse = mouseRef.current;
    
    particlesRef.current.forEach(particle => {
      // Mouse interaction
      if (mouse.isPressed) {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;
        
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const forceMultiplier = interactionMode === 'attract' ? 0.5 : -0.5;
          
          particle.vx += (dx / distance) * force * forceMultiplier;
          particle.vy += (dy / distance) * force * forceMultiplier;
        }
      } else {
        // Gradually return to original velocity when not interacting
        particle.vx += (particle.originalVx - particle.vx) * 0.02;
        particle.vy += (particle.originalVy - particle.vy) * 0.02;
      }
      
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Bounce off edges
      if (particle.x <= 0 || particle.x >= width) {
        particle.vx *= -1;
        particle.originalVx *= -1;
      }
      if (particle.y <= 0 || particle.y >= height) {
        particle.vy *= -1;
        particle.originalVy *= -1;
      }
      
      // Keep particles in bounds
      particle.x = Math.max(0, Math.min(width, particle.x));
      particle.y = Math.max(0, Math.min(height, particle.y));
      
      // Draw particle with size based on velocity for visual feedback
      const velocityMagnitude = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
      const dynamicSize = particle.size + velocityMagnitude * 0.5;
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, Math.min(dynamicSize, particle.size * 2), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`;
      ctx.fill();
    });
    
    // Draw connections between nearby particles
    particlesRef.current.forEach((particle, i) => {
      particlesRef.current.slice(i + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const opacity = (100 - distance) / 100 * 0.2;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.strokeStyle = `rgba(${particle.color}, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    });

    // Draw mouse interaction radius when mouse is pressed
    if (mouse.isPressed) {
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${theme === 'dark' ? '255,255,255' : '0,0,0'}, 0.1)`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }, [interactionMode, theme]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const { width, height } = canvas;
    drawParticles(ctx, width, height);
    
    animationRef.current = requestAnimationFrame(animate);
  }, [drawParticles]);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const parent = canvas.parentElement;
    if (!parent) return;
    
    const rect = parent.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    initializeParticles(rect.width, rect.height);
  }, [initializeParticles]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = event.clientX - rect.left;
    mouseRef.current.y = event.clientY - rect.top;
  }, []);

  const handleMouseDown = useCallback((event: MouseEvent) => {
    mouseRef.current.isPressed = true;
    // Right click switches mode
    if (event.button === 2) {
      setInteractionMode(prev => prev === 'attract' ? 'repel' : 'attract');
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    mouseRef.current.isPressed = false;
  }, []);

  const handleContextMenu = useCallback((event: Event) => {
    event.preventDefault();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('contextmenu', handleContextMenu);
    
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp, handleContextMenu]);

  useEffect(() => {
    handleResize();
    animate();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, animate]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    initializeParticles(canvas.width, canvas.height);
  }, [theme, initializeParticles]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-pointer"
      />
      <div className="absolute top-2 left-2 text-xs opacity-50 pointer-events-none">
        <div>Click & drag to {interactionMode}</div>
        <div>Right-click to switch mode</div>
        <div>Mode: {interactionMode}</div>
      </div>
    </div>
  );
};