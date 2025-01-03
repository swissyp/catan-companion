import { useState, useEffect, RefObject } from 'react';

export function useResponsiveScale(containerRef: RefObject<HTMLDivElement>) {
  const [scale, setScale] = useState(1);
  const [screenSize, setScreenSize] = useState<'mobile' | 'medium' | 'desktop'>('desktop');

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const containerWidth = container.clientWidth;
      const baseWidth = 500; // Base width of the board
      
      // Determine screen size
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('medium');
      } else {
        setScreenSize('desktop');
      }
      
      // Calculate scale based on container width
      const newScale = Math.min(containerWidth / baseWidth, 1);
      setScale(newScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [containerRef]);

  return { scale, screenSize };
}