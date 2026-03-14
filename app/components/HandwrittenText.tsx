'use client';

import { useEffect, useRef, useState } from 'react';

interface HandwrittenTextProps {
  text: string;
  className?: string;
}

export default function HandwrittenText({ text, className = '' }: HandwrittenTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [pathLength, setPathLength] = useState(3000);

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

  useEffect(() => {
    if (textRef.current) {
      const len = textRef.current.getComputedTextLength?.();
      if (len) setPathLength(Math.ceil(len * 1.5));
    }
  }, []);

  return (
    <div ref={ref} className={className}>
      <svg
        viewBox="0 0 900 140"
        className="w-full max-w-4xl mx-auto overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <text
          ref={textRef}
          x="450"
          y="95"
          textAnchor="middle"
          className={`handwritten-text ${isVisible ? 'animate' : ''}`}
          fill="none"
          stroke="rgba(244, 244, 244, 0.5)"
          strokeWidth="0.8"
          style={{
            fontFamily: "var(--font-cursive), 'Alex Brush', cursive",
            fontSize: '72px',
            fontWeight: 400,
            strokeDasharray: pathLength,
            strokeDashoffset: isVisible ? 0 : pathLength,
          }}
        >
          {text}
        </text>
      </svg>
    </div>
  );
}
