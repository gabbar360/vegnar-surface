"use client";

import dynamic from "next/dynamic";

export const LazyWhatsAppWidget = dynamic(() => import("@/components/WhatsAppWidget"), {
  ssr: false,
  loading: () => null,
});

export const LazyCookieConsent = dynamic(() => import("@/components/CookieConsent"), {
  ssr: false,
  loading: () => null,
});

export const LazyPageTracker = dynamic(() => import("@/components/PageTracker"), {
  ssr: false,
  loading: () => null,
});

export const LazyRoutePreloader = dynamic(() => import("@/components/RoutePreloader"), {
  ssr: false,
  loading: () => null,
});