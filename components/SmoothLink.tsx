"use client";

import Link from 'next/link';

interface SmoothLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  prefetch?: boolean;
}

export default function SmoothLink({ 
  href, 
  children, 
  className = '', 
  prefetch = true 
}: SmoothLinkProps) {
  return (
    <Link 
      href={href} 
      className={className}
      prefetch={prefetch}
    >
      {children}
    </Link>
  );
}