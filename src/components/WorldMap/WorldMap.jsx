import React, { useRef, useEffect } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';

const WorldMap = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const mouse = useMousePosition();
  
  // Define stylized shapes of continents to generate dots
  // Normalized coordinates (0 to 100)
  const landmasses = [
    // North America
    { x: 18, y: 30, rx: 12, ry: 10 },
    { x: 25, y: 22, rx: 8, ry: 6 },
    { x: 14, y: 20, rx: 6, ry: 4 },
    // South America
    { x: 32, y: 60, rx: 6, ry: 12 },
    { x: 35, y: 72, rx: 3, ry: 8 },
    // Africa
    { x: 52, y: 55, rx: 7, ry: 9 },
    { x: 55, y: 68, rx: 4, ry: 7 },
    // Europe
    { x: 48, y: 25, rx: 6, ry: 6 },
    { x: 53, y: 20, rx: 5, ry: 4 },
    // Asia (Eurasia)
    { x: 68, y: 26, rx: 14, ry: 10 },
    { x: 74, y: 34, rx: 10, ry: 8 },
    { x: 62, y: 38, rx: 7, ry: 6 }, // India region
    { x: 80, y: 44, rx: 5, ry: 5 }, // Southeast Asia
    // Australia
    { x: 82, y: 72, rx: 6, ry: 5 },
  ];

  // India coordinate: center of our India landmass
  const indiaPoint = { x: 63, y: 41 };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let pulseRadius = 0;
    let pulseOpacity = 1;

    const resizeCanvas = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create a list of dots once
    const dots = [];
    const gridSize = 14; // spacing between dots
    
    const generateDots = (w, h) => {
      dots.length = 0;
      for (let x = 0; x < w; x += gridSize) {
        for (let y = 0; y < h; y += gridSize) {
          // Normalize coordinates to percentage (0 - 100)
          const px = (x / w) * 100;
          const py = (y / h) * 100;
          
          // Check if grid point is inside any landmass
          let isLand = false;
          for (const land of landmasses) {
            const dx = (px - land.x) / land.rx;
            const dy = (py - land.y) / land.ry;
            if (dx * dx + dy * dy <= 1) {
              isLand = true;
              break;
            }
          }
          
          if (isLand) {
            dots.push({
              x,
              y,
              baseSize: Math.random() * 1.5 + 1.2,
              phase: Math.random() * Math.PI * 2,
              speed: 0.02 + Math.random() * 0.03
            });
          }
        }
      }
    };

    generateDots(canvas.width, canvas.height);

    // Render loop
    const render = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      // Parallax offsets based on mouse position
      // Max offset is 15px
      const targetOffsetX = ((mouse.x / window.innerWidth) - 0.5) * 30;
      const targetOffsetY = ((mouse.y / window.innerHeight) - 0.5) * 30;

      // Draw dotted map
      ctx.fillStyle = 'var(--text)';
      
      dots.forEach((dot) => {
        // Apply smooth breathing animation to dots
        dot.phase += dot.speed;
        const size = dot.baseSize + Math.sin(dot.phase) * 0.4;
        
        // Add mouse offset with slight depth multiplier
        const posX = dot.x + targetOffsetX;
        const posY = dot.y + targetOffsetY;

        ctx.beginPath();
        ctx.arc(posX, posY, size, 0, Math.PI * 2);
        
        // Dark theme: dots are light and soft. Light theme: dots are forest green and soft.
        const isDark = document.documentElement.classList.contains('dark');
        ctx.fillStyle = isDark ? 'rgba(247, 244, 213, 0.15)' : 'rgba(10, 51, 35, 0.12)';
        ctx.fill();
      });

      // India Hotspot Position
      const indiaX = (indiaPoint.x / 100) * w + targetOffsetX;
      const indiaY = (indiaPoint.y / 100) * h + targetOffsetY;

      // Draw glowing pulsing rings
      pulseRadius += 0.8;
      pulseOpacity -= 0.01;
      if (pulseOpacity <= 0) {
        pulseRadius = 4;
        pulseOpacity = 1;
      }

      // Ripple rings
      ctx.strokeStyle = `rgba(211, 150, 140, ${pulseOpacity})`; // Accent color (#D3968C)
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(indiaX, indiaY, pulseRadius, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(indiaX, indiaY, pulseRadius * 1.8, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(211, 150, 140, ${pulseOpacity * 0.4})`;
      ctx.stroke();

      // Solid central pulse
      ctx.fillStyle = '#D3968C'; // Accent
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#D3968C';
      ctx.beginPath();
      ctx.arc(indiaX, indiaY, 5, 0, Math.PI * 2);
      ctx.fill();
      
      // Reset shadows
      ctx.shadowBlur = 0;

      // Draw label "IN"
      ctx.font = 'bold 9px Manrope';
      ctx.fillStyle = '#D3968C';
      ctx.fillText('INDIA', indiaX + 12, indiaY + 3);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mouse]);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[300px] md:min-h-[450px] relative overflow-hidden">
      {/* Background Soft Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/3 left-2/3 w-48 h-48 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
      
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none block" 
      />
    </div>
  );
};

export default WorldMap;
