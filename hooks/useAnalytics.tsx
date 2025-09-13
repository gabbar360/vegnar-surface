'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { api } from '@/lib/api';

export function useAnalytics() {
  const pathname = usePathname();
  const sessionStartRef = useRef<number>(0);
  const pageCountRef = useRef<number>(0);
  const lastPathRef = useRef<string>('');

  useEffect(() => {
    // Initialize session tracking
    if (sessionStartRef.current === 0) {
      sessionStartRef.current = Date.now();
    }

    // Track page changes
    if (pathname !== lastPathRef.current) {
      pageCountRef.current += 1;
      lastPathRef.current = pathname;
    }
  }, [pathname]);

  const trackEvent = async (consentType: 'accepted' | 'denied') => {
    try {
      const sessionDuration = Math.floor((Date.now() - sessionStartRef.current) / 1000);
      
      await api.trackUserAnalytics({
        consent_type: consentType,
        total_pages: pageCountRef.current,
        session_duration: sessionDuration
      });
    } catch (error) {
      console.error('Error tracking analytics:', error);
    }
  };

  return {
    trackEvent,
    pageCount: pageCountRef.current,
    sessionDuration: () => Math.floor((Date.now() - sessionStartRef.current) / 1000)
  };
}