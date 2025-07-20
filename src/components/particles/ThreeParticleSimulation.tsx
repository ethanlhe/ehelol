import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeParticleSimulationProps {
  theme: string;
  className?: string;
}

// Particle System for Ethan He  
// Using birthdate (Dec 15, 2002) as seed for generative elements
class ParticleSystem {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  particles: any[];
  particleGeometry: THREE.BufferGeometry | null;
  particleMaterial: THREE.ShaderMaterial | null;
  particleSystem: THREE.Points | null;
  starData: any[];
  starField: THREE.Points | null;
  mouse: THREE.Vector2;
  targetMouse: THREE.Vector2;
  isMouseDown: boolean;
  isMobile: boolean;
  config: any;
  text: string;
  textPositions: any[];
  isFormed: boolean;
  lastExplosion: number;
  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    
    this.particles = [];
    this.particleGeometry = null;
    this.particleMaterial = null;
    this.particleSystem = null;
    
    this.starData = [];
    this.starField = null;
    
    this.mouse = new THREE.Vector2(0, 0);
    this.targetMouse = new THREE.Vector2(0, 0);
    this.isMouseDown = false;
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Configuration based on birthdate
    const isSmallMobile = window.innerWidth < 480 || window.innerHeight < 600;
    this.config = {
      particlesPerLetter: isSmallMobile ? 30 : (this.isMobile ? 50 : 80),
      explosionForce: 5,
      attractionForce: 0.05,
      damping: 0.95,
      mouseRadius: this.isMobile ? 150 : 100,
      cycleTime: 23000, // 23 seconds (birth year 2003)
      birthSeed: 7160 // July 16, 2003
    };
    
    this.text = "ETHAN HE";
    this.textPositions = [];
    this.isFormed = true;
    this.lastExplosion = 0;
    
    this.init();
  }
  
  init() {
    // Setup renderer
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.container.appendChild(this.renderer.domElement);
    
    // Setup camera
    this.camera.position.z = this.isMobile ? 70 : 50;
    this.camera.position.y = this.isMobile ? 0 : 5;
    
    // Create particles
    this.createTextParticles();
    
    // Setup lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    
    // Add star field background
    this.createStarField();
    
    // Event listeners
    this.setupEventListeners();
    
    // Start animation
    this.animate();
  }
  
  createTextParticles() {
    // Create canvas for text rendering
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const fontSize = this.isMobile ? 30 : 60;
    
    canvas.width = 512;
    canvas.height = 128;
    
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.font = `${fontSize}px 'Inter', sans-serif`;
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.text, canvas.width / 2, canvas.height / 2);
    
    // Get text data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    // Extract text positions
    for (let y = 0; y < canvas.height; y += 3) {
      for (let x = 0; x < canvas.width; x += 3) {
        const index = (y * canvas.width + x) * 4;
        if (data[index] > 128) {
          this.textPositions.push({
            x: (x - canvas.width / 2) * 0.1,
            y: -(y - canvas.height / 2) * 0.1,
            z: 0
          });
        }
      }
    }
    
    // Create geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.config.particlesPerLetter * this.text.length * 3);
    const colors = new Float32Array(this.config.particlesPerLetter * this.text.length * 3);
    const sizes = new Float32Array(this.config.particlesPerLetter * this.text.length);
    
    // Initialize particles
    for (let i = 0; i < this.config.particlesPerLetter * this.text.length; i++) {
      const i3 = i * 3;
      const targetIndex = i % this.textPositions.length;
      const target = this.textPositions[targetIndex];
      
      // Start particles exactly at their target positions
      positions[i3] = target.x;
      positions[i3 + 1] = target.y;
      positions[i3 + 2] = target.z;
      
      // Color gradient (white to cyan)
      const t = i / (this.config.particlesPerLetter * this.text.length);
      colors[i3] = 1;
      colors[i3 + 1] = 1 - t * 0.3;
      colors[i3 + 2] = 1 - t * 0.5;
      
      sizes[i] = Math.random() * 2 + 1;
      
      // Store particle data
      this.particles.push({
        x: target.x,
        y: target.y,
        z: target.z,
        targetX: target.x,
        targetY: target.y,
        targetZ: target.z,
        vx: 0,
        vy: 0,
        vz: 0,
        originalSize: sizes[i]
      });
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // Create material with custom shader
    this.particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 20 }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vSize;
        
        void main() {
          vColor = color;
          vSize = size;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vSize;
        
        void main() {
          float r = distance(gl_PointCoord, vec2(0.5, 0.5));
          if (r > 0.5) discard;
          
          float opacity = 1.0 - smoothstep(0.0, 0.5, r);
          gl_FragColor = vec4(vColor, opacity);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    
    this.particleSystem = new THREE.Points(geometry, this.particleMaterial);
    this.scene.add(this.particleSystem);
    
    this.particleGeometry = geometry;
  }
  
  createStarField() {
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 500;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    
    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      const radius = 50 + Math.random() * 200;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      positions[i3]     = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      const brightness = 0.3 + Math.random() * 0.4;
      const size = 0.4 + Math.random() * 0.4;

      colors[i3] = brightness;
      colors[i3 + 1] = brightness;
      colors[i3 + 2] = brightness;
      sizes[i] = size;

      this.starData.push({
        originalBrightness: brightness,
        originalSize: size,
        twinkleSpeed: Math.random() * 0.01 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2
      });
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    starsGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    
    this.starField = new THREE.Points(starsGeometry, starsMaterial);
    this.scene.add(this.starField);
  }
  
  setupEventListeners() {
    // Mouse/Touch events for the container
    if (this.isMobile) {
      this.container.addEventListener('touchstart', (e) => this.onTouchStart(e), { passive: false });
      this.container.addEventListener('touchmove', (e) => this.onTouchMove(e), { passive: false });
      this.container.addEventListener('touchend', () => this.onTouchEnd(), { passive: false });
    } else {
      this.container.addEventListener('mousemove', (e) => this.onMouseMove(e));
      this.container.addEventListener('mousedown', () => this.onMouseDown());
      this.container.addEventListener('mouseup', () => this.onMouseUp());
      this.container.addEventListener('dblclick', () => this.explode());
    }
  }
  
  onMouseMove(event: MouseEvent) {
    const rect = this.container.getBoundingClientRect();
    this.targetMouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.targetMouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }
  
  onTouchStart(event: TouchEvent) {
    event.preventDefault();
    const touch = event.touches[0];
    const rect = this.container.getBoundingClientRect();
    this.targetMouse.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
    this.targetMouse.y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
    this.isMouseDown = true;
    
    // Double tap detection
    const now = Date.now();
    if (now - this.lastExplosion < 300) {
      this.explode();
    }
    this.lastExplosion = now;
  }
  
  onTouchMove(event: TouchEvent) {
    event.preventDefault();
    const touch = event.touches[0];
    const rect = this.container.getBoundingClientRect();
    this.targetMouse.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
    this.targetMouse.y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
  }
  
  onTouchEnd() {
    this.isMouseDown = false;
  }
  
  onMouseDown() {
    this.isMouseDown = true;
  }
  
  onMouseUp() {
    this.isMouseDown = false;
  }
  
  explode() {
    this.isFormed = false;
    this.particles.forEach(particle => {
      const force = this.config.explosionForce;
      particle.vx = (Math.random() - 0.5) * force;
      particle.vy = (Math.random() - 0.5) * force;
      particle.vz = (Math.random() - 0.5) * force;
    });
    
    setTimeout(() => {
      this.isFormed = true;
    }, 1000);
  }
  
  updateStarField() {
    if (!this.starField) return;
    
    const colors = this.starField.geometry.attributes.color.array as Float32Array;
    const sizes = this.starField.geometry.attributes.size.array as Float32Array;

    for (let i = 0; i < this.starData.length; i++) {
      const star = this.starData[i];
      let brightness = star.originalBrightness;
      let size = star.originalSize;

      // Twinkling
      star.twinklePhase += star.twinkleSpeed;
      const twinkleValue = (Math.sin(star.twinklePhase) + 1) / 2 * 0.5;
      brightness += twinkleValue;
      
      const i3 = i * 3;
      colors[i3] = brightness;
      colors[i3 + 1] = brightness;
      colors[i3 + 2] = brightness;
      sizes[i] = size;
    }
    this.starField.geometry.attributes.color.needsUpdate = true;
    this.starField.geometry.attributes.size.needsUpdate = true;
  }
  
  updateParticles() {
    if (!this.particleGeometry) return;
    
    const positions = this.particleGeometry.attributes.position.array as Float32Array;
    const sizes = this.particleGeometry.attributes.size.array as Float32Array;
    
    // Smooth mouse movement
    this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.1;
    this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.1;
    
    // Convert mouse to world coordinates
    const vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 0.5);
    vector.unproject(this.camera);
    const dir = vector.sub(this.camera.position).normalize();
    const distance = -this.camera.position.z / dir.z;
    const mousePos = this.camera.position.clone().add(dir.multiplyScalar(distance));
    
    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];
      const i3 = i * 3;
      
      // Calculate forces
      let fx = 0, fy = 0, fz = 0;
      
      // Attraction to target position
      if (this.isFormed) {
        fx += (particle.targetX - particle.x) * this.config.attractionForce;
        fy += (particle.targetY - particle.y) * this.config.attractionForce;
        fz += (particle.targetZ - particle.z) * this.config.attractionForce;
      }
      
      // Mouse interaction
      const dx = mousePos.x - particle.x;
      const dy = mousePos.y - particle.y;
      const dz = -particle.z;
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
      
      if (distance < this.config.mouseRadius) {
        const force = (1 - distance / this.config.mouseRadius) * 0.5;
        if (this.isMouseDown) {
          // Attract
          fx += dx * force * 0.1;
          fy += dy * force * 0.1;
          fz += dz * force * 0.1;
        } else {
          // Repel
          fx -= dx * force * 0.05;
          fy -= dy * force * 0.05;
          fz -= dz * force * 0.05;
        }
        
        // Size effect
        sizes[i] = particle.originalSize * (1 + force * 0.5);
      } else {
        sizes[i] = particle.originalSize;
      }
      
      // Update velocity
      particle.vx += fx;
      particle.vy += fy;
      particle.vz += fz;
      
      // Apply damping
      particle.vx *= this.config.damping;
      particle.vy *= this.config.damping;
      particle.vz *= this.config.damping;
      
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.z += particle.vz;
      
      // Update geometry
      positions[i3] = particle.x;
      positions[i3 + 1] = particle.y;
      positions[i3 + 2] = particle.z;
    }
    
    this.particleGeometry.attributes.position.needsUpdate = true;
    this.particleGeometry.attributes.size.needsUpdate = true;
  }
  
  animate() {
    requestAnimationFrame(() => this.animate());
    
    this.updateParticles();
    this.updateStarField();
    
    // Update time uniform
    if (this.particleMaterial) {
      this.particleMaterial.uniforms.time.value += 0.01;
    }
    
    // Slowly rotate starfield
    if (this.starField) {
      this.starField.rotation.y += 0.0001;
      this.starField.rotation.x += 0.00005;
    }
    
    this.renderer.render(this.scene, this.camera);
  }
  
  onResize() {
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
  }
  
  dispose() {
    // Clean up resources
    if (this.particleGeometry) this.particleGeometry.dispose();
    if (this.particleMaterial) this.particleMaterial.dispose();
    if (this.starField && this.starField.geometry) this.starField.geometry.dispose();
    if (this.starField && this.starField.material) {
      if (Array.isArray(this.starField.material)) {
        this.starField.material.forEach(material => material.dispose());
      } else {
        this.starField.material.dispose();
      }
    }
    this.renderer.dispose();
    if (this.container.contains(this.renderer.domElement)) {
      this.container.removeChild(this.renderer.domElement);
    }
  }
}

const ThreeParticleSimulation: React.FC<ThreeParticleSimulationProps> = ({ theme, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particleSystemRef = useRef<ParticleSystem | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize particle system
    particleSystemRef.current = new ParticleSystem(containerRef.current);

    // Resize handler
    const handleResize = () => {
      if (particleSystemRef.current) {
        particleSystemRef.current.onResize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (particleSystemRef.current) {
        particleSystemRef.current.dispose();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full overflow-hidden ${className}`}
      style={{ cursor: 'none' }}
    />
  );
};

export default ThreeParticleSimulation;