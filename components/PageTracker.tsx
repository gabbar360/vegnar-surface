'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function PageTracker() {
  const pathname = usePathname();
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Track page view if user has accepted cookies
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'accepted') {
      // Track page view (you can extend this to track specific events)
      console.log('Page viewed:', pathname);
    }
  }, [pathname, trackEvent]);

  return null; // This component doesn't render anything
}