'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { debounce } from '@/helpers/template';

interface IStarffiledProps {
  isMobile?: boolean;
}

const Starfield = ({ isMobile = false }: IStarffiledProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c = canvas.getContext('2d');
    if (!c) return;

    let w = document.body.clientWidth;
    let h = document.body.clientHeight;
    canvas.width = w;
    canvas.height = h;

    const stars = Array.from({ length: isMobile ? 3500 : 7000 }, () => ({
      x: Math.random() * 1600 - 800,
      y: Math.random() * 900 - 450,
      z: Math.random() * 1000,
    }));

    const setCanvasExtents = () => {
      w = document.body.clientWidth;
      h = document.body.clientHeight;
      canvas.width = w;
      canvas.height = h;
    };

    // Debounce the resize handler
    const handleResize = debounce(() => setCanvasExtents(), 100);

    window.addEventListener('resize', handleResize);

    const clearCanvas = () => {
      c.fillStyle = '#181818';
      c.fillRect(0, 0, w, h);
    };

    const putPixel = (x: number, y: number, brightness: number) => {
      const intensity = Math.floor(brightness * 255);
      c.fillStyle = `rgb(${intensity},${intensity},${intensity})`;
      c.fillRect(x, y, 1, 1);
    };

    const moveStars = (distance: number) => {
      stars.forEach((star) => {
        star.z -= distance;
        if (star.z <= 1) star.z += 1000;
      });
    };

    let prevTime: number = performance.now();

    const tick = (time: number) => {
      const elapsed = time - prevTime;
      prevTime = time;

      moveStars(elapsed * 0.1);
      clearCanvas();

      const cx = w / 2;
      const cy = h / 2;

      stars.forEach((star) => {
        const x = cx + star.x / (star.z * 0.001);
        const y = cy + star.y / (star.z * 0.001);

        if (x >= 0 && x < w && y >= 0 && y < h) {
          const distanceFactor = star.z / 1000;
          const brightness = 1 - distanceFactor * distanceFactor;
          putPixel(x, y, brightness);
        }
      });

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        zIndex: -1,
      }}
    />
  );
};

export default Starfield;
