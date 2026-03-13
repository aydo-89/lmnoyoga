'use client';

import { useState } from 'react';

type Practice = {
  title: string;
  duration: string;
  poses: Array<{
    name: string;
    duration: string;
    description: string;
  }>;
};

export default function PracticeBuilder() {
  const [goal, setGoal] = useState('');
  const [level, setLevel] = useState('');
  const [duration, setDuration] = useState('');
  const [practice, setPractice] = useState<Practice | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const goals = [
    { value: 'flexibility', label: 'Flexibility', icon: '🤸' },
    { value: 'strength', label: 'Strength', icon: '💪' },
    { value: 'stress-relief', label: 'Stress Relief', icon: '🧘' },
    { value: 'energy', label: 'Energy Boost', icon: '⚡' },
    { value: 'meditation', label: 'Meditation & Calm', icon: '🕉️' },
  ];

  const levels = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
  ];

  const durations = [
    { value: '15', label: '15 minutes' },
    { value: '30', label: '30 minutes' },
    { value: '45', label: '45 minutes' },
    { value: '60', label: '60 minutes' },
  ];

  const generatePractice = async () => {
    if (!goal || !level || !duration) {
      setError('Please select all options');
      return;
    }

    setLoading(true);
    setError('');
    setPractice(null);

    try {
      const response = await fetch('/api/practice-builder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ goal, level, duration }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate practice');
      }

      const data = await response.json();
      setPractice(data.practice);
    } catch (err) {
      setError('Failed to generate practice. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center text-white">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            AI Practice Builder
          </h1>
          <p className="text-xl md:text-2xl text-cream-100">
            Create your personalized yoga sequence
          </p>
        </div>
      </section>

      {/* Builder Form */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!practice ? (
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold text-sage-800 mb-8 text-center">
                Build Your Practice
              </h2>

              {/* Goal Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-sage-800 mb-4">
                  What's your goal today?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {goals.map((g) => (
                    <button
                      key={g.value}
                      onClick={() => setGoal(g.value)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        goal === g.value
                          ? 'border-sage-600 bg-sage-50 shadow-md'
                          : 'border-sage-200 hover:border-sage-400'
                      }`}
                    >
                      <div className="text-3xl mb-2">{g.icon}</div>
                      <div className="text-sm font-medium text-sage-800">
                        {g.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Level Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-sage-800 mb-4">
                  What's your level?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {levels.map((l) => (
                    <button
                      key={l.value}
                      onClick={() => setLevel(l.value)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        level === l.value
                          ? 'border-sage-600 bg-sage-50 shadow-md'
                          : 'border-sage-200 hover:border-sage-400'
                      }`}
                    >
                      <div className="text-base font-medium text-sage-800">
                        {l.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-sage-800 mb-4">
                  How much time do you have?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {durations.map((d) => (
                    <button
                      key={d.value}
                      onClick={() => setDuration(d.value)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        duration === d.value
                          ? 'border-sage-600 bg-sage-50 shadow-md'
                          : 'border-sage-200 hover:border-sage-400'
                      }`}
                    >
                      <div className="text-base font-medium text-sage-800">
                        {d.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  {error}
                </div>
              )}

              {/* Generate Button */}
              <button
                onClick={generatePractice}
                disabled={loading || !goal || !level || !duration}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                  loading || !goal || !level || !duration
                    ? 'bg-sage-300 text-sage-600 cursor-not-allowed'
                    : 'bg-sage-600 hover:bg-sage-700 text-white transform hover:scale-105'
                }`}
              >
                {loading ? 'Generating Your Practice...' : 'Generate Practice'}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Practice Header */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-serif font-bold text-sage-800 mb-2">
                  {practice.title}
                </h2>
                <p className="text-lg text-sage-600">
                  Duration: {practice.duration}
                </p>
              </div>

              {/* Pose Sequence */}
              {practice.poses.map((pose, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-serif font-semibold text-sage-800">
                      {index + 1}. {pose.name}
                    </h3>
                    <span className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-medium">
                      {pose.duration}
                    </span>
                  </div>
                  <p className="text-sage-700">{pose.description}</p>
                </div>
              ))}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setPractice(null)}
                  className="flex-1 bg-sage-600 hover:bg-sage-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
                >
                  Create Another Practice
                </button>
                <button
                  onClick={() => window.print()}
                  className="flex-1 bg-white hover:bg-cream-50 text-sage-700 font-semibold px-6 py-3 rounded-lg border-2 border-sage-300 transition-all duration-200"
                >
                  Print Practice
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
