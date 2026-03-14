'use client';

import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

interface Pose {
  name: string;
  duration: string;
  description: string;
}

interface Practice {
  title: string;
  duration: string;
  poses: Pose[];
}

export default function PracticeBuilder() {
  const [goal, setGoal] = useState('');
  const [level, setLevel] = useState('');
  const [duration, setDuration] = useState('');
  const [practice, setPractice] = useState<Practice | null>(null);
  const [loading, setLoading] = useState(false);

  const goals = ['Flexibility', 'Strength', 'Stress Relief', 'Energy', 'Meditation'];
  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const durations = ['15', '30', '45', '60'];

  const handleGenerate = async () => {
    if (!goal || !level || !duration) return;
    setLoading(true);
    setPractice(null);

    try {
      const res = await fetch('/api/practice-builder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goal, level, duration }),
      });
      const data = await res.json();
      setPractice(data.practice);
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display display-massive font-light text-[#f4f4f4]/90 animate-fade-in opacity-0">
            Practice
          </h1>
          <p className="font-display text-xl text-[#f4f4f4]/30 mt-6 animate-fade-in opacity-0 delay-400">
            Build a sequence shaped to you.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Intention */}
          <ScrollReveal>
            <div>
              <span className="block text-xs tracking-[0.5em] uppercase text-[#f4f4f4]/20 mb-6 font-display">
                Intention
              </span>
              <div className="flex flex-wrap gap-3">
                {goals.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGoal(g)}
                    className={`border text-sm tracking-[0.3em] uppercase px-8 py-4 transition-all duration-700 font-display ${
                      goal === g
                        ? 'border-[#9DBBAE]/50 text-[#f4f4f4]/80'
                        : 'border-[#f4f4f4]/[0.06] text-[#f4f4f4]/25 hover:border-[#f4f4f4]/15 hover:text-[#f4f4f4]/40'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Level */}
          <ScrollReveal>
            <div>
              <span className="block text-xs tracking-[0.5em] uppercase text-[#f4f4f4]/20 mb-6 font-display">
                Level
              </span>
              <div className="flex flex-wrap gap-3">
                {levels.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLevel(l)}
                    className={`border text-sm tracking-[0.3em] uppercase px-8 py-4 transition-all duration-700 font-display ${
                      level === l
                        ? 'border-[#9DBBAE]/50 text-[#f4f4f4]/80'
                        : 'border-[#f4f4f4]/[0.06] text-[#f4f4f4]/25 hover:border-[#f4f4f4]/15 hover:text-[#f4f4f4]/40'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Duration */}
          <ScrollReveal>
            <div>
              <span className="block text-xs tracking-[0.5em] uppercase text-[#f4f4f4]/20 mb-6 font-display">
                Duration
              </span>
              <div className="flex flex-wrap gap-3">
                {durations.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`border text-sm tracking-[0.3em] uppercase px-8 py-4 transition-all duration-700 font-display ${
                      duration === d
                        ? 'border-[#9DBBAE]/50 text-[#f4f4f4]/80'
                        : 'border-[#f4f4f4]/[0.06] text-[#f4f4f4]/25 hover:border-[#f4f4f4]/15 hover:text-[#f4f4f4]/40'
                    }`}
                  >
                    {d} min
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Generate */}
          <button
            onClick={handleGenerate}
            disabled={!goal || !level || !duration || loading}
            className={`border text-sm tracking-[0.3em] uppercase px-12 py-5 transition-all duration-700 font-display ${
              goal && level && duration && !loading
                ? 'border-[#9DBBAE]/40 text-[#f4f4f4]/70 hover:text-[#f4f4f4] hover:bg-[#9DBBAE]/5'
                : 'border-[#f4f4f4]/[0.03] text-[#f4f4f4]/10 cursor-not-allowed'
            }`}
          >
            {loading ? 'Generating...' : 'Generate Practice'}
          </button>
        </div>
      </section>

      {/* Result */}
      {practice && (
        <>
          <div className="section-divider" />
          <section className="py-24 px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-4xl md:text-5xl font-light tracking-editorial mb-2 text-[#f4f4f4]/80">
                {practice.title}
              </h2>
              <p className="text-xs tracking-[0.5em] uppercase text-[#9DBBAE]/40 font-display mb-16">
                {practice.duration}
              </p>

              {practice.poses?.map((pose, i) => (
                <div
                  key={i}
                  className="py-8 border-b border-[#f4f4f4]/[0.04] last:border-b-0"
                >
                  <div className="flex items-baseline justify-between gap-6 mb-2">
                    <span className="font-display text-xl text-[#f4f4f4]/70">
                      {pose.name}
                    </span>
                    <span className="text-sm text-[#9DBBAE]/50 tracking-[0.2em] shrink-0 font-display">
                      {pose.duration}
                    </span>
                  </div>
                  <p className="text-[#f4f4f4]/30 text-base leading-relaxed">
                    {pose.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
