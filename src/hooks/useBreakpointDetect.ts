'use client';

import { useState, useEffect } from 'react';
import { debounce } from '@/helpers/template';
import tailwindConfig from 'tailwind.config';
import { Breakpoints } from '@/constants/enums';

const useBreakpoint = () => {
  const getBreakpoint = (): Breakpoints => {
    const { theme } = tailwindConfig;
    const { screens } = theme;

    for (const [key, value] of Object.entries(screens).reverse()) {
      if (typeof window !== 'undefined' && window.matchMedia(`(min-width: ${value})`).matches) {
        return key as Breakpoints;
      }
    }

    return Breakpoints.xs;
  };

  const [breakpoint, setBreakpoint] = useState<Breakpoints>();

  useEffect(() => {
    const handleResize = debounce(() => {
      setBreakpoint(getBreakpoint());
    }, 250);

    setBreakpoint(getBreakpoint());

    window?.addEventListener('resize', handleResize);

    return () => {
      window?.removeEventListener('resize', handleResize);
    };
  }, []);

  return breakpoint;
};

export default useBreakpoint;
