'use client';

import { useEffect, useRef, useState } from 'react';

interface HandwrittenTextProps {
  text: string;
  className?: string;
}

export default function HandwrittenText({ text, className = '' }: HandwrittenTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);

  // Trigger on scroll into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Animate characters one by one
  useEffect(() => {
    if (!started) return;

    const chars = text.length;
    const baseDelay = 80; // ms per character
    let frame: number;
    let current = 0;

    const tick = () => {
      current++;
      setVisibleCount(current);
      if (current < chars) {
        // Slight variance — slower on spaces (like lifting a pen)
        const nextChar = text[current];
        const delay = nextChar === ' ' ? baseDelay * 2.5 : baseDelay;
        frame = window.setTimeout(tick, delay);
      }
    };

    frame = window.setTimeout(tick, 400); // initial pause before writing starts
    return () => clearTimeout(frame);
  }, [started, text]);

  return (
    <div ref={ref} className={className}>
      <p
        className="text-center leading-[1.4]"
        style={{
          fontFamily: "var(--font-cursive), 'Italianno', cursive",
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 400,
          letterSpacing: '0.02em',
        }}
        aria-label={text}
      >
        {text.split('').map((char, i) => {
          // Check if this character is the first letter of a word
          const isWordStart = i === 0 || text[i - 1] === ' ';
          const isLetter = char !== ' ';
          const isInitial = isWordStart && isLetter;

          return (
            <span
              key={i}
              className="inline-block transition-all"
              style={{
                opacity: i < visibleCount ? 1 : 0,
                transform: i < visibleCount ? 'translateY(0)' : 'translateY(8px)',
                color: isInitial
                  ? 'rgba(157, 187, 174, 0.75)'  // sage accent for L, M, N, O
                  : 'rgba(244, 244, 244, 0.45)',
                transitionDuration: '600ms',
                transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
                width: char === ' ' ? '0.3em' : undefined,
              }}
            >
              {char === ' ' ? '\u00A0' : isInitial ? char.toUpperCase() : char}
            </span>
          );
        })}
      </p>
    </div>
  );
}
