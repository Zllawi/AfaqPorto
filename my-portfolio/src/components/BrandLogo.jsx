import React from "react";

export function BrandIcon({ size = 32, className = "" }) {
  const s = { width: size, height: size };
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Afaq mark"
      className={className}
      style={s}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="bowlCut">
          <rect width="64" height="64" fill="#000" />
          {/* bowl */}
          <path
            d="M8 44 C 20 28, 44 28, 56 44 L 56 54 L 8 54 Z"
            fill="#fff"
          />
          {/* cut out flowing arcs */}
          <path
            d="M12 44 C 24 34, 40 34, 52 44"
            stroke="#000"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M24 52 C 30 42, 40 40, 50 48"
            stroke="#000"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
        </mask>
      </defs>

      {/* Head */}
      <circle cx="32" cy="18" r="8" fill="currentColor" />
      {/* Bowl with cutouts */}
      <g mask="url(#bowlCut)">
        <rect x="0" y="0" width="64" height="64" fill="currentColor" />
      </g>
    </svg>
  );
}

export default function BrandLogo({
  variant = "nav", // 'nav' | 'header'
  ar = "أفق للأنظمة وتقنية المعلومات",
  en = "Afaq Systems & IT",
  imgSrc, // optional: use image from public if provided
}) {
  const isHeader = variant === "header";
  return (
    <div className={`brand-logo ${variant}`} dir="rtl">
      {imgSrc ? (
        <img
          src={imgSrc}
          alt="Afaq mark"
          className="brand-img"
          width={isHeader ? 40 : 32}
          height={isHeader ? 40 : 32}
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/brand/afaq-nav.svg"; }}
        />
      ) : (
        <BrandIcon size={isHeader ? 40 : 32} className="brand-icon" />
      )}
      <div className="brand-words">
        <span className="brand-ar">{ar}</span>
        <span className="brand-en">{en}</span>
      </div>
    </div>
  );
}
