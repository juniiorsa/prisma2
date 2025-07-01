import React from 'react';

const Logo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto" viewBox="0 0 450 100">
      <defs>
        <linearGradient id="prismaGovGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#0074E4"/>
          <stop offset="50%" stopColor="#24C9A0"/>
          <stop offset="100%" stopColor="#7D3FD1"/>
        </linearGradient>
      </defs>
      <g transform="translate(0, -5) scale(0.9)">
        <g transform="translate(18, 0) scale(0.9)">
          <path d="M 35 15 H 85 L 85 90 H 35 Z" fill="#E5E7EB"/>
          <path d="M 85 15 L 70 30 H 85 Z" fill="#D1D5DB"/>
          <g transform="translate(-5, 0)">
            <path d="M 40 85 L 40 15 L 60 25 L 60 75 Z" fill="#4A5568"/>
            <polygon points="60,25 105,50 60,75" fill="#2D3748"/>
            <polygon points="60,25 105,50 80,25" fill="#718096"/>
          </g>
          <path d="M 100 50 L 163 22 L 163 78 Z" fill="url(#prismaGovGradient)"/>
        </g>
      </g>
      <g transform="translate(185, 20)">
        <text y="40" fontFamily="Montserrat, sans-serif" fontSize="40" fontWeight="700" fill="#1F2937">Prisma<tspan fill="#0074E4">Gov</tspan></text>
      </g>
    </svg>
  );
};

export default Logo;

