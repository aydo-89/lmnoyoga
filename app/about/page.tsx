import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'The practice and philosophy behind LMNO.',
};

export default function About() {
  return (
    <div className="page-content pt-32 pb-24 px-6 lg:px-12 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-light tracking-editorial mb-4">
          About
        </h1>
        <div className="w-12 h-px bg-[#9DBBAE] mb-16" />

        <div className="space-y-8 text-[#f4f4f4]/60 text-lg leading-relaxed">
          <p>
            LMNO was born from a deep belief that movement, breath, and sound
            can transform the way we live. What started as a personal practice
            became a calling to hold space for others.
          </p>
          <p>
            Liane brings years of dedicated study in Vinyasa, Kundalini, and
            Kriya traditions, combined with the healing art of sound. Her
            approach is rooted in authenticity, meeting each person exactly
            where they are.
          </p>
          <p>
            Every class is an invitation to slow down, listen inward, and
            reconnect with the body. No performance. No pretense. Just
            practice.
          </p>
        </div>

        <div className="mt-24 border-t border-[#f4f4f4]/5 pt-16">
          <h2 className="font-display text-3xl font-light tracking-editorial mb-8">
            Training
          </h2>
          <ul className="space-y-4 text-[#f4f4f4]/50 text-lg">
            <li>200-Hour Registered Yoga Teacher</li>
            <li>Kundalini Yoga Certification</li>
            <li>Sound Healing Practitioner</li>
            <li>Kriya Yoga Studies</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
