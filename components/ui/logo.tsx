// components/Logo.tsx
"use client"

import Link from "next/link"

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      {/* Icon */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#06b6d4" />   {/* teal */}
            <stop offset="1" stopColor="#7c3aed" />   {/* purple */}
          </linearGradient>
        </defs>

        {/* rounded square */}
        <rect x="2" y="2" width="60" height="60" rx="12" fill="url(#g1)" />

        {/* Z shape */}
        <path
          d="M18 18 H46 L22 46 H46"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.96"
        />

        {/* subtle inner stroke */}
        <rect x="4" y="4" width="56" height="56" rx="10" stroke="white" strokeOpacity="0.06" />
      </svg>

      {/* Text */}
      <span className="text-xl font-bold text-foreground">Zona Web</span>
    </Link>
  )
}
