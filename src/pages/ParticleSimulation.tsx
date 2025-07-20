import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const ParticleSimulation = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Override body styles
    document.body.style.fontFamily = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
    document.body.style.background = '#000000';
    document.body.style.color = '#ffffff';
    document.body.style.overflow = 'hidden';
    document.body.style.cursor = 'none';
    document.body.style.webkitFontSmoothing = 'antialiased';
    document.body.style.mozOsxFontSmoothing = 'grayscale';
    document.body.style.height = '100vh';
    document.body.style.width = '100vw';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    // Override html styles
    document.documentElement.style.height = '100%';
    document.documentElement.style.position = 'fixed';
    document.documentElement.style.width = '100%';
    document.documentElement.style.overflow = 'hidden';

    // Add Google Fonts
    if (!document.querySelector('link[href*="fonts.googleapis.com"]')) {
      const fontLink = document.createElement('link');
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap';
      fontLink.rel = 'stylesheet';
      document.head.appendChild(fontLink);
    }

    // Add Font Awesome
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const faLink = document.createElement('link');
      faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      faLink.rel = 'stylesheet';
      document.head.appendChild(faLink);
    }

    // Add custom styles
    const style = document.createElement('style');
    style.id = 'particle-simulation-styles';
    style.textContent = `
      :root {
        --primary: #ffffff;
        --accent: #d4af37;
        --accent-dim: #d4af3730;
        --bg: #000000;
        --text-dim: #666666;
      }

      .back-button {
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 1002;
        pointer-events: all;
        background: rgba(0, 0, 0, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: white;
        padding: 8px 16px;
        border-radius: 8px;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      
      .back-button:hover {
        background: rgba(0, 0, 0, 0.9);
        border-color: var(--accent);
        color: var(--accent);
        transform: translateY(-2px);
      }

      #particle-canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        filter: contrast(1.1) brightness(1.05);
      }

      main {
        position: relative;
        z-index: 2;
        pointer-events: none;
        height: 100vh;
        display: flex;
        flex-direction: column;
      }

      .hero {
        height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 20px;
      }

      .name-container {
        position: relative;
        height: clamp(80px, 15vh, 120px);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .about {
        height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem 20px;
      }

      .about-content {
        max-width: 700px;
        text-align: center;
        width: 100%;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .about-content p {
        font-family: 'Crimson Text', Georgia, 'Times New Roman', serif;
        font-size: clamp(1.15rem, 2vw, 1.35rem);
        line-height: 1.7;
        font-weight: 400;
        color: var(--primary);
        letter-spacing: 0.01em;
      }

      .email {
        color: var(--primary);
        text-decoration: none;
        pointer-events: all;
        transition: color 0.3s ease;
        display: inline;
        font-weight: 600;
        font-family: inherit;
      }

      .email:hover {
        color: var(--accent);
      }

      .email .at,
      .email .dot {
        color: rgba(255, 255, 255, 0.7);
        transition: color 0.3s ease;
      }

      .email:hover .at,
      .email:hover .dot {
        color: var(--accent);
      }

      .social-links {
        display: flex;
        gap: 2rem;
        pointer-events: all;
        opacity: 0;
        animation: fadeIn 2s ease 1.5s forwards;
        justify-content: center;
        margin-top: 1.5rem;
      }

      .social-links a {
        color: var(--primary);
        font-size: 1.5rem;
        transition: all 0.3s ease;
        display: inline-block;
      }

      .social-links a:hover {
        color: var(--accent);
        transform: translateY(-3px) scale(1.1);
      }

      @keyframes fadeIn {
        to {
          opacity: 1;
        }
      }

      .cursor-dot,
      .cursor-outline {
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        border-radius: 50%;
        z-index: 1001;
        transform: translate(-50%, -50%);
      }

      .cursor-dot {
        width: 5px;
        height: 5px;
        background-color: #fff;
      }

      .cursor-outline {
        width: 25px;
        height: 25px;
        border: 1px solid #fff;
        transition: transform 0.2s ease-out, border-color 0.2s ease-out;
      }

      .click-animation {
        position: fixed;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 1px solid #fff;
        z-index: 1000;
        animation: click-effect 0.4s ease-out forwards;
        pointer-events: none;
        transform: translate(-50%, -50%);
      }

      @keyframes click-effect {
        from {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.8;
        }
        to {
          transform: translate(-50%, -50%) scale(2.5);
          opacity: 0;
        }
      }

      @media (pointer: coarse) {
        .cursor-dot, .cursor-outline, .click-animation {
          display: none;
        }
        body {
          cursor: default !important;
        }
      }

      @media (max-width: 768px) {
        .hero {
          padding: 0 30px;
          height: 45vh;
        }
        .about {
          height: 55vh;
          padding: 1.5rem 30px;
        }
        .about-content {
          max-width: 500px;
          padding: 0 10px;
        }
        .name-container {
          height: 60px;
        }
        .social-links {
          gap: 1.2rem;
        }
        .social-links a {
          font-size: 1.2rem;
        }
        .about-content p {
          font-size: 0.98rem;
          line-height: 1.6;
        }
      }
    `;
    document.head.appendChild(style);

    // Load Three.js and initialize exactly like the original
    const threeScript = document.createElement('script');
    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    threeScript.onload = () => {
      // EXACT copy of particles.js
      const particleScript = document.createElement('script');
      particleScript.textContent = `
        // Particle System for Ethan He  
        // Using birthdate (Dec 15, 2002) as seed for generative elements

        class ParticleSystem {
            constructor() {
                this.scene = new THREE.Scene();
                this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
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
                    particlesPerLetter: isSmallMobile ? 50 : (this.isMobile ? 80 : 120),
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
                this.renderer.setSize(window.innerWidth, window.innerHeight);
                this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                document.getElementById('particle-canvas').appendChild(this.renderer.domElement);
                
                // Setup camera
                this.camera.position.z = this.isMobile ? 70 : 50;
                this.camera.position.y = this.isMobile ? 0 : 5; // Lower position on mobile to center name
                
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
                
                // Particles are ready - no HTML name to show
            }
            
            createTextParticles() {
                // Create canvas for text rendering
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const fontSize = this.isMobile ? 50 : 100;
                
                canvas.width = 1024;
                canvas.height = 256;
                
                ctx.fillStyle = '#000000';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                ctx.font = \`\${fontSize}px 'Crimson Text', serif\`;
                ctx.fillStyle = '#ffffff';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(this.text, canvas.width / 2, canvas.height / 2);
                
                // Get text data
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
                
                // Extract text positions
                for (let y = 0; y < canvas.height; y += 4) {
                    for (let x = 0; x < canvas.width; x += 4) {
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
                    
                    // Color gradient (white to amber)
                    const t = i / (this.config.particlesPerLetter * this.text.length);
                    colors[i3] = 1;
                    colors[i3 + 1] = 1 - t * 0.3;
                    colors[i3 + 2] = 1 - t * 0.5;
                    
                    sizes[i] = Math.random() * 2 + 1;
                    
                    // Store particle data - starting at target position
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
                        time: { value: 20 } // Start at 20 to skip initial wave animation
                    },
                    vertexShader: \`
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
                    \`,
                    fragmentShader: \`
                        varying vec3 vColor;
                        varying float vSize;
                        
                        void main() {
                            float r = distance(gl_PointCoord, vec2(0.5, 0.5));
                            if (r > 0.5) discard;
                            
                            float opacity = 1.0 - smoothstep(0.0, 0.5, r);
                            gl_FragColor = vec4(vColor, opacity);
                        }
                    \`,
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
                const starCount = 2000;
                const positions = new Float32Array(starCount * 3);
                const colors = new Float32Array(starCount * 3);
                const sizes = new Float32Array(starCount);
                
                for (let i = 0; i < starCount; i++) {
                    const i3 = i * 3;
                    const radius = 100 + Math.random() * 400;
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
                // Mouse/Touch events
                if (this.isMobile) {
                    window.addEventListener('touchstart', (e) => this.onTouchStart(e), { passive: false });
                    window.addEventListener('touchmove', (e) => this.onTouchMove(e), { passive: false });
                    window.addEventListener('touchend', () => this.onTouchEnd(), { passive: false });
                    
                    // Device orientation for mobile
                    if (window.DeviceOrientationEvent) {
                        window.addEventListener('deviceorientation', (e) => this.onDeviceOrientation(e));
                    }
                } else {
                    window.addEventListener('mousemove', (e) => this.onMouseMove(e));
                    window.addEventListener('mousedown', () => this.onMouseDown());
                    window.addEventListener('mouseup', () => this.onMouseUp());
                    window.addEventListener('dblclick', () => this.explode());
                }
                
                window.addEventListener('resize', () => this.onResize());
            }
            
            onMouseMove(event) {
                this.targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                this.targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            }
            
            onTouchStart(event) {
                event.preventDefault();
                const touch = event.touches[0];
                this.targetMouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
                this.targetMouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;
                this.isMouseDown = true;
                
                // Double tap detection
                const now = Date.now();
                if (now - this.lastExplosion < 300) {
                    this.explode();
                }
                this.lastExplosion = now;
            }
            
            onTouchMove(event) {
                event.preventDefault();
                const touch = event.touches[0];
                this.targetMouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
                this.targetMouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;
            }
            
            onTouchEnd() {
                this.isMouseDown = false;
            }
            
            onDeviceOrientation(event) {
                if (event.beta && event.gamma) {
                    const x = event.gamma / 90;
                    const y = event.beta / 180;
                    this.targetMouse.x = x * 0.5;
                    this.targetMouse.y = y * 0.5;
                }
            }
            
            onMouseDown() {
                this.isMouseDown = true;
            }
            
            onMouseUp() {
                this.isMouseDown = false;
            }
            
            onResize() {
                this.camera.aspect = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize(window.innerWidth, window.innerHeight);
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
                // Trigger new supernovas
                if (Math.random() < 0.0005) { // Small chance each frame
                    const starIndex = Math.floor(Math.random() * this.starData.length);
                    if (!this.starData[starIndex].supernova) {
                        this.starData[starIndex].supernova = { progress: 0, duration: 120 }; // 2 seconds
                    }
                }

                const colors = this.starField.geometry.attributes.color.array;
                const sizes = this.starField.geometry.attributes.size.array;

                for (let i = 0; i < this.starData.length; i++) {
                    const star = this.starData[i];
                    let brightness = star.originalBrightness;
                    let size = star.originalSize;

                    // Twinkling
                    star.twinklePhase += star.twinkleSpeed;
                    const twinkleValue = (Math.sin(star.twinklePhase) + 1) / 2 * 0.5;
                    brightness += twinkleValue;

                    // Supernova
                    if (star.supernova) {
                        star.supernova.progress++;
                        const progress = star.supernova.progress / star.supernova.duration;
                        const peak = Math.sin(progress * Math.PI); // 0 -> 1 -> 0 curve
                        brightness += peak * 50; // Flare up
                        size += peak * 15.0;

                        if (star.supernova.progress >= star.supernova.duration) {
                            star.supernova = null; // End of supernova
                        }
                    }
                    
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
                const positions = this.particleGeometry.attributes.position.array;
                const sizes = this.particleGeometry.attributes.size.array;
                
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
                const time = this.particleMaterial.uniforms.time.value;
                this.particleMaterial.uniforms.time.value += 0.01;
                
                // Slowly rotate starfield
                if (this.starField) {
                    this.starField.rotation.y += 0.0001;
                    this.starField.rotation.x += 0.00005;
                }
                
                // Automatic subtle wave animation every 22 seconds (birth year reference)
                const cycleProgress = (time * 10) % this.config.cycleTime;
                if (cycleProgress < 100) {
                    const waveProgress = cycleProgress / 100;
                    this.particles.forEach((particle, i) => {
                        const delay = i / this.particles.length;
                        const waveForce = Math.sin((waveProgress + delay) * Math.PI) * 0.5;
                        particle.vx += Math.sin(i * 0.1) * waveForce * 0.05;
                        particle.vy += Math.cos(i * 0.1) * waveForce * 0.05;
                    });
                }
                
                this.renderer.render(this.scene, this.camera);
            }
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            new ParticleSystem();
        });
      `;
      document.body.appendChild(particleScript);

      // EXACT copy of cursor.js
      const cursorScript = document.createElement('script');
      cursorScript.textContent = `
        // Custom Cursor Logic
        document.addEventListener('DOMContentLoaded', () => {
            // Don't run on touch devices
            if (window.matchMedia("(pointer: coarse)").matches) {
                document.body.style.cursor = 'default';
                return;
            }

            const cursorDot = document.createElement('div');
            cursorDot.className = 'cursor-dot';
            document.body.appendChild(cursorDot);

            const cursorOutline = document.createElement('div');
            cursorOutline.className = 'cursor-outline';
            document.body.appendChild(cursorOutline);

            let mouseX = 0, mouseY = 0;
            let outlineX = 0, outlineY = 0;

            // Cursor following logic
            document.addEventListener('mousemove', e => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                cursorDot.style.left = \`\${mouseX}px\`;
                cursorDot.style.top = \`\${mouseY}px\`;
            });
            
            const animateOutline = () => {
                outlineX += (mouseX - outlineX) * 0.1;
                outlineY += (mouseY - outlineY) * 0.1;
                cursorOutline.style.left = \`\${outlineX}px\`;
                cursorOutline.style.top = \`\${outlineY}px\`;
                requestAnimationFrame(animateOutline);
            }
            animateOutline();

            // Click animation logic
            document.addEventListener('mousedown', e => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(0.8)';
                
                const clickAnimation = document.createElement('div');
                clickAnimation.className = 'click-animation';
                clickAnimation.style.left = \`\${e.clientX}px\`;
                clickAnimation.style.top = \`\${e.clientY}px\`;
                document.body.appendChild(clickAnimation);

                clickAnimation.addEventListener('animationend', () => {
                    clickAnimation.remove();
                });
            });
            
            document.addEventListener('mouseup', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            });

            // Hover effect
            document.querySelectorAll('a, button').forEach(el => {
                el.addEventListener('mouseover', () => {
                    cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                    cursorOutline.style.borderColor = 'var(--accent)';
                });
                el.addEventListener('mouseleave', () => {
                    cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                    cursorOutline.style.borderColor = '#fff';
                });
            });
        });
      `;
      document.body.appendChild(cursorScript);

      // Manually trigger DOMContentLoaded since we're in React
      const event = new Event('DOMContentLoaded');
      document.dispatchEvent(event);
    };
    document.head.appendChild(threeScript);

    // Cleanup function
    return () => {
      // Restore original body styles
      document.body.style.fontFamily = '';
      document.body.style.background = '';
      document.body.style.color = '';
      document.body.style.overflow = '';
      document.body.style.cursor = '';
      document.body.style.webkitFontSmoothing = '';
      document.body.style.mozOsxFontSmoothing = '';
      document.body.style.height = '';
      document.body.style.width = '';
      document.body.style.margin = '';
      document.body.style.padding = '';

      document.documentElement.style.height = '';
      document.documentElement.style.position = '';
      document.documentElement.style.width = '';
      document.documentElement.style.overflow = '';

      // Clean up elements
      const canvas = document.getElementById('particle-canvas');
      if (canvas) {
        while (canvas.firstChild) {
          canvas.removeChild(canvas.firstChild);
        }
      }
      
      const cursorDot = document.querySelector('.cursor-dot');
      const cursorOutline = document.querySelector('.cursor-outline');
      if (cursorDot) cursorDot.remove();
      if (cursorOutline) cursorOutline.remove();
      
      const style = document.getElementById('particle-simulation-styles');
      if (style) style.remove();
    };
  }, []);

  return (
    <>
      <button 
        className="back-button"
        onClick={() => navigate('/fun-stuff')}
      >
        ← Back to Fun Stuff
      </button>
      
      <div id="particle-canvas"></div>
      
      <main>
        <section className="hero">
          <div className="name-container">
            {/* Spacer for particle name - particles render on full-screen canvas */}
          </div>
        </section>
        
        <section className="about">
          <div className="about-content">
            <p>
              From Chicago, Illinois. Prev. @ Reddit. Currently building @ Vimbly Group. Always learning. Want to reach out? <a href="mailto:ethanhe0716@gmail.com" className="email">ethanhe0716<span className="at">@</span>gmail<span className="dot">.</span>com</a>.
            </p>
            <div className="social-links">
              <a href="https://github.com/ethanlhe" target="_blank" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/ethanlhe" target="_blank" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/ethaspr" target="_blank" aria-label="X (Twitter)">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ParticleSimulation;