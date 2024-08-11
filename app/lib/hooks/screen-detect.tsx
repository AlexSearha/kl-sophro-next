import { useState, useEffect } from 'react';

export default function useScreenDetect() {
  const [screenSize, setScreenSize] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
}
