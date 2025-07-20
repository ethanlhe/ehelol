import React, { useEffect, useRef } from 'react';

interface ParticlePreviewProps {
  theme: string;
  className?: string;
}

const ParticlePreview: React.FC<ParticlePreviewProps> = ({ theme, className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create text particles
    const createTextParticles = () => {
      const text = "ETHAN HE";
      const fontSize = Math.min(canvas.width / 12, 24);
      
      // Create temporary canvas to get text data
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d')!;
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      
      tempCtx.fillStyle = '#000000';
      tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
      tempCtx.font = `${fontSize}px Inter, sans-serif`;
      tempCtx.fillStyle = '#ffffff';
      tempCtx.textAlign = 'center';
      tempCtx.textBaseline = 'middle';
      tempCtx.fillText(text, tempCanvas.width / 2, tempCanvas.height / 2);
      
      const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
      const data = imageData.data;
      
      const particles: any[] = [];
      const step = 4;
      
      for (let y = 0; y < tempCanvas.height; y += step) {
        for (let x = 0; x < tempCanvas.width; x += step) {
          const index = (y * tempCanvas.width + x) * 4;
          if (data[index] > 128) {
            particles.push({
              x: x / window.devicePixelRatio,
              y: y / window.devicePixelRatio,
              targetX: x / window.devicePixelRatio,
              targetY: y / window.devicePixelRatio,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 2,
              size: Math.random() * 2 + 1,
              opacity: Math.random() * 0.5 + 0.5
            });
          }
        }
      }
      
      return particles;
    };

    particlesRef.current = createTextParticles();

    // Animation loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Set background
      ctx.fillStyle = theme === 'dark' ? '#000000' : '#ffffff';
      ctx.fillRect(0, 0, rect.width, rect.height);
      
      // Draw particles
      particlesRef.current.forEach(particle => {
        // Simple physics - move toward target
        const dx = particle.targetX - particle.x;
        const dy = particle.targetY - particle.y;
        
        particle.vx += dx * 0.01;
        particle.vy += dy * 0.01;
        
        particle.vx *= 0.98; // damping
        particle.vy *= 0.98;
        
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Draw particle
        ctx.fillStyle = theme === 'dark' 
          ? `rgba(255, 255, 255, ${particle.opacity})`
          : `rgba(0, 0, 0, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ background: theme === 'dark' ? '#000000' : '#ffffff' }}
    />
  );
};

export default ParticlePreview;