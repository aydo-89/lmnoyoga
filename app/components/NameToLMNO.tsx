'use client';

import { useEffect, useState } from 'react';

/**
 * Animated reveal: "Liane Olson" → collapses to "L O" → "MN" appears → "LMNO"
 * 
 * Timeline:
 *  0.0s - Full name fades in
 *  2.0s - "iane" and "lson" fade out, letters collapse inward
 *  3.0s - "MN" fades in between L and O
 *  3.5s - Settled as "LMNO"
 */
export default function NameToLMNO() {
  const [phase, setPhase] = useState<'full' | 'collapse' | 'reveal' | 'done'>('full');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('collapse'), 2000);
    const t2 = setTimeout(() => setPhase('reveal'), 3200);
    const t3 = setTimeout(() => setPhase('done'), 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const showInner = phase === 'full' || phase === 'collapse';
  const innerOpacity = phase === 'full' ? 1 : 0;
  const mnOpacity = phase === 'reveal' || phase === 'done' ? 1 : 0;
  const isDone = phase === 'done';

  return (
    <div className="animate-fade-in opacity-0">
      <h1 className="font-display text-4xl md:text-5xl font-light tracking-editorial text-[#f4f4f4]/90 relative">
        {/* L */}
        <span className="inline-block transition-all duration-1000 ease-in-out">
          L
        </span>

        {/* iane */}
        <span
          className="inline-block overflow-hidden transition-all duration-1000 ease-in-out align-bottom"
          style={{
            maxWidth: showInner ? '10em' : '0em',
            opacity: innerOpacity,
          }}
        >
          <span className="inline-block whitespace-nowrap">iane</span>
        </span>

        {/* Space between first and last name — collapses */}
        <span
          className="inline-block transition-all duration-1000 ease-in-out"
          style={{
            width: showInner ? '0.3em' : '0em',
          }}
        />

        {/* MN — slides in */}
        <span
          className="inline-block overflow-hidden transition-all duration-700 ease-out align-bottom"
          style={{
            maxWidth: mnOpacity ? '3em' : '0em',
            opacity: mnOpacity,
          }}
        >
          <span
            className={`inline-block whitespace-nowrap transition-colors duration-700 ${
              isDone ? 'text-[#9DBBAE]/70' : 'text-[#9DBBAE]/50'
            }`}
          >
            MN
          </span>
        </span>

        {/* O */}
        <span className="inline-block transition-all duration-1000 ease-in-out">
          O
        </span>

        {/* lson */}
        <span
          className="inline-block overflow-hidden transition-all duration-1000 ease-in-out align-bottom"
          style={{
            maxWidth: showInner ? '10em' : '0em',
            opacity: innerOpacity,
          }}
        >
          <span className="inline-block whitespace-nowrap">lson</span>
        </span>
      </h1>

      {/* Subtle label that appears after animation completes */}
      <p
        className="mt-3 text-xs tracking-[0.5em] uppercase font-display transition-opacity duration-1000"
        style={{ opacity: isDone ? 0.2 : 0 }}
      >
        Minneapolis, MN
      </p>
    </div>
  );
}
