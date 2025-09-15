"use client";

import Link from 'next/link';

interface FastLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  prefetch?: boolean;
}

const FastLink: React.FC<FastLinkProps> = ({ 
  href, 
  children, 
  className = "", 
  prefetch = true 
}) => {
  return (
    <Link 
      href={href} 
      className={className}
      prefetch={prefetch}
    >
      {children}
    </Link>
  );
};

export default FastLink;