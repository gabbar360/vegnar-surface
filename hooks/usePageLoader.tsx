"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const usePageLoader = (duration = 300) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [pathname, duration]);

  return { isLoading, setIsLoading };
};