import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Classes',
  description: 'Yoga, sound healing, and private sessions.',
};

const classes = [
  {
    title: 'Vinyasa Flow',
    description:
      'Dynamic, breath-linked movement. Build strength and fluidity through sequences that challenge and restore.',
    duration: '60 min',
    level: 'All levels',
  },
  {
    title: 'Kundalini',
    description:
      'Ancient technology for modern life. Breathwork, mantra, and movement to awaken dormant energy.',
    duration: '75 min',
    level: 'All levels',
  },
  {
    title: 'Sound Bath',
    description:
      'Lie down. Close your eyes. Let crystal bowls, gongs, and chimes dissolve tension you did not know you held.',
    duration: '60 min',
    level: 'No experience needed',
  },
  {
    title: 'Restorative',
    description:
      'Deep rest through supported postures. A practice of surrender, silence, and renewal.',
    duration: '75 min',
    level: 'All levels',
  },
  {
    title: 'Private Sessions',
    description:
      'Tailored guidance for your body, your goals, your timeline. We build the practice around you.',
    duration: 'Custom',
    level: 'Individual',
  },
  {
    title: 'Workshops & Retreats',
    description:
      'Immersive experiences that go deeper. Half-day workshops, weekend retreats, and seasonal gatherings.',
    duration: 'Varies',
    level: 'All levels',
  },
];

export default function Classes() {
  return (
    <div className="page-content pt-32 pb-24 px-6 lg:px-12 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-light tracking-editorial mb-4">
          Classes
        </h1>
        <div className="w-12 h-px bg-[#9DBBAE] mb-16" />

        <div className="space-y-0">
          {classes.map((cls, i) => (
            <div
              key={cls.title}
              className="group py-12 border-b border-[#f4f4f4]/5 last:border-b-0"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="font-display text-3xl md:text-4xl font-light tracking-editorial mb-4 text-[#f4f4f4] group-hover:text-[#9DBBAE] transition-colors duration-500">
                    {cls.title}
                  </h2>
                  <p className="text-[#f4f4f4]/50 text-lg leading-relaxed max-w-xl">
                    {cls.description}
                  </p>
                </div>
                <div className="flex gap-8 text-sm tracking-wide-editorial uppercase text-[#f4f4f4]/30 md:pt-2">
                  <span>{cls.duration}</span>
                  <span>{cls.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/contact"
            className="border border-[#f4f4f4]/20 hover:border-[#9DBBAE] text-[#f4f4f4]/80 hover:text-[#f4f4f4] text-sm tracking-wide-editorial uppercase px-10 py-4 transition-all duration-500 inline-block"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </div>
  );
}
