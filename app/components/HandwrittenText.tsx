'use client';

import { useEffect, useRef, useState } from 'react';

interface HandwrittenTextProps {
  text: string;
  className?: string;
}

export default function HandwrittenText({ text, className = '' }: HandwrittenTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      <svg
        viewBox="0 0 900 120"
        className="w-full max-w-4xl mx-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <mask id="handwritten-mask">
            <rect width="100%" height="100%" fill="white" />
          </mask>
        </defs>
        <text
          x="450"
          y="80"
          textAnchor="middle"
          className={`handwritten-text ${isVisible ? 'animate' : ''}`}
          fill="none"
          stroke="rgba(244, 244, 244, 0.55)"
          strokeWidth="1"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '64px',
            fontWeight: 400,
          }}
        >
          {text}
        </text>
      </svg>
    </div>
  );
}
