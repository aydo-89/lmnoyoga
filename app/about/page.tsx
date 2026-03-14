import type { Metadata } from 'next';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet Liane of LMNO Yoga.',
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display display-massive font-light text-[#f4f4f4]/90 animate-fade-in opacity-0">
            About
          </h1>
        </div>
      </section>

      <div className="section-divider" />

      {/* Liane's Story */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-5xl font-light tracking-editorial mb-4 text-[#f4f4f4]/80">
              Liane Olson
            </h2>
            <div className="w-12 h-px bg-[#9DBBAE]/40 mb-12" />
          </ScrollReveal>

          <ScrollReveal variant="slow">
            <div className="space-y-8 text-[#f4f4f4]/50 text-lg leading-[1.9]">
              <p>
                With over 20 years of yoga practice, my journey began as a personal
                path to healing. Diagnosed with a chronic pain disorder in my early
                20s, I turned to yoga as a means of self-care and recovery.
              </p>
              <p>
                This commitment led me to pursue a 200-hour certification through
                the Yoga Center of Minneapolis, where I honed my focus on nervous
                system regulation and the transformative power of mindful movement.
              </p>
              <p>
                In the past two years, I discovered the profound effects of sound
                baths, which inspired me to begin studying sound healing facilitation.
                Combining yoga and sound, I aim to create a holistic experience for
                my students, supporting them in finding balance, peace, and healing
                on and off the mat.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-16 pt-16 border-t border-[#f4f4f4]/[0.04]">
              <p className="font-display text-xl text-[#f4f4f4]/40 italic leading-relaxed">
                Liane facilitates Sound Baths, Kriya Yoga, and Yoga Nidra.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal variant="slow">
            <blockquote className="font-display text-3xl md:text-5xl font-light leading-[1.3] text-[#f4f4f4]/50 italic">
              Let movement nurture openings
            </blockquote>
            <div className="ornament-line w-16 mx-auto mt-12" />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
