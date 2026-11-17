import React, { useState } from 'react';

export const OrbitalAvatar: React.FC = () => {
  const [imgSrc, setImgSrc] = useState('/assets/profile-avatar.jpg');

  return (
    <div className="orbital-container" aria-label="Profile of Getaneh Dejenie with animated orbital rings">
      {/* Ambient soft emerald glow */}
      <div className="ambient-glow" />

      {/* Signature Dual Opposing Orbital Rings: Inner Red / Outer Green */}
      <svg className="orbital-rings-svg" viewBox="0 0 380 380">
        <defs>
          {/* Inner ring gradient - red / crimson / coral */}
          <linearGradient id="ringGradRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3344" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#FF5252" stopOpacity="0.80" />
            <stop offset="80%" stopColor="#FF1744" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#FF5252" stopOpacity="0.90" />
          </linearGradient>

          {/* Outer ring gradient - neon lime / emerald */}
          <linearGradient id="ringGradGreen" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A8FF3E" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#55D68A" stopOpacity="0.80" />
            <stop offset="85%" stopColor="#22C55E" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#A8FF3E" stopOpacity="0.90" />
          </linearGradient>

          <filter id="particleGlowRed" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="particleGlowGreen" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Inner Ring (Red): Very tiny thickness, close to photo frame (r=128), rotating clockwise */}
        <g className="ring-1">
          <circle
            cx="190"
            cy="190"
            r="128"
            fill="none"
            stroke="url(#ringGradRed)"
            strokeWidth="0.85"
            strokeDasharray="140 18 80 14"
          />
          {/* Subtle tiny accent node on inner red ring */}
          <circle cx="190" cy="62" r="2.2" fill="#FF5252" filter="url(#particleGlowRed)" />
        </g>

        {/* 2. Outer Ring (Green): Very tiny thickness, closely nested (r=136), counter-rotating */}
        <g className="ring-2">
          <circle
            cx="190"
            cy="190"
            r="136"
            fill="none"
            stroke="url(#ringGradGreen)"
            strokeWidth="0.85"
            strokeDasharray="110 22 95 18"
          />
          {/* Subtle tiny accent node on outer green ring */}
          <circle cx="190" cy="326" r="2.2" fill="#A8FF3E" filter="url(#particleGlowGreen)" />
        </g>
      </svg>

      {/* Central Photograph Frame */}
      <div className="photo-frame">
        <img
          src={imgSrc}
          alt="Getaneh Dejenie — Full-Stack & Cybersecurity Developer"
          className="photo-img"
          onError={() => {
            if (imgSrc !== '/assets/profile-placeholder.svg') {
              setImgSrc('/assets/profile-placeholder.svg');
            }
          }}
        />
      </div>

      {/* Floating Status Tag */}
      <div className="avatar-floating-tag">
        <span className="pulse-dot" />
        <span>UoG &bull; CS 4th Year</span>
      </div>
    </div>
  );
};

