import React from 'react';

// 1. Coding Icon (Browser + Gear)
export const CodingIcon = ({ className, ...props }) => (
  <svg 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" 
    strokeLinecap="round" strokeLinejoin="round" className={className} {...props}
  >
    <path d="M15 22H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7" />
    <path d="M2 9h20" /><path d="M6 6.5h.01" /><path d="M9 6.5h.01" />
    <path d="m7 13-2 2 2 2" /><path d="m11 13 2 2-2 2" />
    <circle cx="19" cy="19" r="3" />
    <path d="M19 15v1" /><path d="M19 22v1" /><path d="M22 19h-1" /><path d="M16 19h-1" />
  </svg>
);

// 2. SEO Icon (Magnifying Glass + Growth Arrow)
export const SeoIcon = ({ className, ...props }) => (
  <svg 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" 
    strokeLinecap="round" strokeLinejoin="round" className={className} {...props}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
    <path d="M7 13l3-3 2 2 4-4" />
    <path d="M13 6h3v3" />
  </svg>
);

// 3. Web Dev Icon (The 'Web Programming' replacement)
export const WebDevIcon = ({ className, ...props }) => (
  <svg 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" 
    strokeLinecap="round" strokeLinejoin="round" className={className} {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m10 10-2 2 2 2" /><path d="m14 10 2 2-2 2" /><path d="m13 8-2 8" />
  </svg>
);

// 4. Web Security Icon (Browser + Shield)
export const SecurityIcon = ({ className, ...props }) => (
  <svg 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" 
    strokeLinecap="round" strokeLinejoin="round" className={className} {...props}
  >
    <path d="M12 22s8-4 8-10V6l-8-3-8 3v6c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);