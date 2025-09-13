'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = async (consentType: 'accepted' | 'denied') => {
    try {
      await trackEvent(consentType);
      localStorage.setItem('cookie-consent', consentType);
      setIsVisible(false);
    } catch (error) {
      console.error('Error tracking analytics:', error);
      // Still hide the banner even if tracking fails
      localStorage.setItem('cookie-consent', consentType);
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:bottom-6 md:right-6 md:left-auto md:max-w-md animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white/95 backdrop-blur-lg rounded-xl md:rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">
                Privacy & Cookies
              </h3>
              <p className="text-xs text-gray-500">Vegnar Surfaces</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            We use essential cookies to ensure our website works properly and analytics cookies to understand how you interact with our site. This helps us improve your experience.
          </p>
          
          <div className="space-y-3">
            <Button
              onClick={() => handleConsent('accepted')}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Accept All Cookies
            </Button>
            
            <Button
              onClick={() => handleConsent('denied')}
              variant="outline"
              className="w-full border-gray-300 bg-white text-gray-700 hover:bg-red-50 hover:border-red-300 hover:text-red-700 py-2.5 rounded-lg font-medium transition-all duration-200"
            >
              Decline
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            By continuing, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}