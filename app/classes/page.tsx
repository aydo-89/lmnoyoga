import Link from 'next/link';
import type { Metadata } from 'next';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Classes',
  description: 'Yoga, sound healing, and private sessions.',
};

const classes = [
  {
    num: '01',
    title: 'Vinyasa Flow',
    description: 'Breath-linked movement that builds heat, strength, and focus. Each sequence is different. Each class is a conversation between body and breath.',
    duration: '60 min',
    level: 'All levels',
  },
  {
    num: '02',
    title: 'Kundalini',
    description: 'The yoga of awareness. Breathwork, mantra, and repetitive movement designed to break through what the conscious mind cannot reach.',
    duration: '75 min',
    level: 'All levels',
  },
  {
    num: '03',
    title: 'Sound Bath',
    description: 'No postures. No effort. Crystal singing bowls, gongs, and overtone chimes wash through the body while you rest. Deeply restorative.',
    duration: '60 min',
    level: 'No experience needed',
  },
  {
    num: '04',
    title: 'Restorative',
    description: 'Supported postures held for extended periods. The practice of letting go — of effort, of holding, of the need to do anything at all.',
    duration: '75 min',
    level: 'All levels',
  },
  {
    num: '05',
    title: 'Private Sessions',
    description: 'Tailored entirely to you. Your body, your goals, your timeline. We meet where you are and build from there.',
    duration: 'Custom',
    level: 'Individual',
  },
  {
    num: '06',
    title: 'Workshops & Retreats',
    description: 'Immersive experiences that go deeper than a single class can. Half-day workshops, weekend retreats, seasonal gatherings.',
    duration: 'Varies',
    level: 'All levels',
  },
];

export default function Classes() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display display-massive font-light text-[#f4f4f4]/90 animate-fade-in opacity-0">
            Classes
          </h1>
        </div>
      </section>

      <div className="section-divider" />

      {/* Classes list */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {classes.map((cls) => (
            <ScrollReveal key={cls.num}>
              <div className="group py-16 border-b border-[#f4f4f4]/[0.04] last:border-b-0">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs tracking-[0.5em] text-[#9DBBAE]/40 font-display">
                        {cls.num}
                      </span>
                      <div className="h-px w-6 bg-[#f4f4f4]/5" />
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-light tracking-editorial mb-6 text-[#f4f4f4]/80 group-hover:text-[#9DBBAE] transition-colors duration-700">
                      {cls.title}
                    </h2>
                    <p className="text-[#f4f4f4]/35 text-lg leading-relaxed max-w-xl">
                      {cls.description}
                    </p>
                  </div>
                  <div className="flex lg:flex-col gap-8 lg:gap-4 text-right lg:pt-12">
                    <span className="text-xs tracking-[0.4em] uppercase text-[#f4f4f4]/15">
                      {cls.duration}
                    </span>
                    <span className="text-xs tracking-[0.4em] uppercase text-[#f4f4f4]/15">
                      {cls.level}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <Link
              href="/contact"
              className="hover-reveal-line border border-[#f4f4f4]/10 hover:border-[#9DBBAE]/40 text-[#f4f4f4]/60 hover:text-[#f4f4f4] text-sm tracking-[0.3em] uppercase px-12 py-5 transition-all duration-700 inline-block"
            >
              Book a Session
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
