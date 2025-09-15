"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ROUTES_TO_PRELOAD = [
  '/catalog',
  '/products',
  '/about',
  '/contact',
  '/sample'
];

export default function RoutePreloader() {
  const router = useRouter();

  useEffect(() => {
    // Preload critical routes after initial load
    const preloadRoutes = () => {
      ROUTES_TO_PRELOAD.forEach(route => {
        router.prefetch(route);
      });
    };

    // Delay preloading to not interfere with initial page load
    const timer = setTimeout(preloadRoutes, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return null;
}