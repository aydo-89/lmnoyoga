'use client';

import { useState } from 'react';

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

  const OptionGroup = ({
    label,
    options,
    value,
    onChange,
  }: {
    label: string;
    options: string[];
    value: string;
    onChange: (v: string) => void;
  }) => (
    <div>
      <span className="block text-sm tracking-wide-editorial uppercase text-[#f4f4f4]/30 mb-4">
        {label}
      </span>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`border text-sm tracking-wide-editorial uppercase px-6 py-3 transition-all duration-500 ${
              value === opt
                ? 'border-[#9DBBAE] text-[#f4f4f4]'
                : 'border-[#f4f4f4]/10 text-[#f4f4f4]/40 hover:border-[#f4f4f4]/30 hover:text-[#f4f4f4]/60'
            }`}
          >
            {opt === '15' || opt === '30' || opt === '45' || opt === '60'
              ? `${opt} min`
              : opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="page-content pt-32 pb-24 px-6 lg:px-12 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-light tracking-editorial mb-4">
          Practice
        </h1>
        <p className="text-[#f4f4f4]/40 text-lg mb-4">
          Build a sequence tailored to you.
        </p>
        <div className="w-12 h-px bg-[#9DBBAE] mb-16" />

        <div className="space-y-12">
          <OptionGroup
            label="Intention"
            options={goals}
            value={goal}
            onChange={setGoal}
          />
          <OptionGroup
            label="Level"
            options={levels}
            value={level}
            onChange={setLevel}
          />
          <OptionGroup
            label="Duration"
            options={durations}
            value={duration}
            onChange={setDuration}
          />

          <button
            onClick={handleGenerate}
            disabled={!goal || !level || !duration || loading}
            className={`border text-sm tracking-wide-editorial uppercase px-10 py-4 transition-all duration-500 ${
              goal && level && duration && !loading
                ? 'border-[#9DBBAE] text-[#f4f4f4] hover:bg-[#9DBBAE]/10'
                : 'border-[#f4f4f4]/5 text-[#f4f4f4]/20 cursor-not-allowed'
            }`}
          >
            {loading ? 'Generating...' : 'Generate Practice'}
          </button>
        </div>

        {/* Result */}
        {practice && (
          <div className="mt-20 border-t border-[#f4f4f4]/5 pt-16">
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-editorial mb-2 text-[#f4f4f4]">
              {practice.title}
            </h2>
            <p className="text-sm tracking-wide-editorial uppercase text-[#f4f4f4]/30 mb-12">
              {practice.duration}
            </p>

            <div className="space-y-0">
              {practice.poses?.map((pose, i) => (
                <div
                  key={i}
                  className="py-6 border-b border-[#f4f4f4]/5 last:border-b-0"
                >
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <span className="font-display text-xl text-[#f4f4f4]/80">
                      {pose.name}
                    </span>
                    <span className="text-sm text-[#9DBBAE] tracking-wide shrink-0">
                      {pose.duration}
                    </span>
                  </div>
                  <p className="text-[#f4f4f4]/40 text-base leading-relaxed">
                    {pose.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
