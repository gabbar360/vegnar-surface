"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface PageLoaderProps {
  onComplete?: () => void;
  duration?: number;
}

const PageLoader = ({ onComplete, duration = 700 }: PageLoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, duration / 10);

    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(hideTimeout);
    };
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-8">
        {/* Logo Animation */}
        <div className="relative">
          <img 
            src="/lovable-uploads/f10e025c-b30f-4e70-94a6-f647711f6896.png" 
            alt="Vegnar Logo" 
            className="h-20 w-auto object-contain animate-pulse"
          />
        </div>

        {/* Company Name */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-2">VEGNAR</h2>
          <p className="text-sm text-muted-foreground tracking-widest">CERAMICA</p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-orange transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Tile Animation */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={cn(
                "w-3 h-3 bg-orange rounded-sm animate-bounce",
                index === 1 && "animation-delay-200",
                index === 2 && "animation-delay-400"
              )}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageLoader;