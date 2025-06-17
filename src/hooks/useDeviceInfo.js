// hooks/useDeviceInfo.js
import { useState, useEffect } from 'react';

export default function useDeviceInfo(breakpointMobile = 768, breakpointTablet = 900) {
  const [device, setDevice] = useState({
    isMobile: window.innerWidth <= breakpointMobile,
    isTablet: window.innerWidth > breakpointMobile && window.innerWidth <= breakpointTablet,
    isPortrait: window.matchMedia('(orientation: portrait)').matches,
  });

  useEffect(() => {
    const handleResize = () => {
      setDevice({
        isMobile: window.innerWidth <= breakpointMobile,
        isTablet: window.innerWidth > breakpointMobile && window.innerWidth <= breakpointTablet,
        isPortrait: window.matchMedia('(orientation: portrait)').matches,
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [breakpointMobile, breakpointTablet]);

  return device;
}
