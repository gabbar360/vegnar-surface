"use client";

import { lazy, Suspense } from 'react';

const Globe3D = lazy(() => import('./Globe3D'));

const GlobeLoadingSkeleton = () => (
  <div className="w-full h-[400px] md:h-[600px] bg-gradient-to-r from-gray-900 to-black rounded-2xl flex items-center justify-center">
    <div className="text-white text-lg md:text-xl animate-pulse">Loading Interactive Globe...</div>
  </div>
);

interface LazyGlobe3DProps {
  rotationSpeed?: number;
}

const LazyGlobe3D: React.FC<LazyGlobe3DProps> = ({ rotationSpeed = 0.5 }) => {
  return (
    <Suspense fallback={<GlobeLoadingSkeleton />}>
      <Globe3D rotationSpeed={rotationSpeed} />
    </Suspense>
  );
};

export default LazyGlobe3D;