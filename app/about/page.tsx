import type { Metadata } from 'next';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'About',
  description: 'The practice and philosophy behind LMNO.',
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

      {/* Story — Le Jardin editorial narrative */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="slow">
            <p className="font-display text-3xl md:text-4xl font-light leading-[1.6] text-[#f4f4f4]/60 mb-16">
              LMNO began the way most honest things do. Not with a plan, but with a feeling that would not leave.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-8 text-[#f4f4f4]/40 text-lg leading-[1.9]">
              <p>
                Liane spent years on the mat before she ever stood at the front of a room.
                What drew her in was not the postures themselves but what lived between them
                — the pause, the breath, the moment the mind stops narrating and the body
                takes over.
              </p>
              <p>
                She trained in Vinyasa, went deeper into Kundalini and Kriya traditions,
                and discovered the transformative power of sound healing. Each discipline
                revealed a different door into the same room: presence.
              </p>
              <p>
                LMNO is the space she built to hold that work. Classes here are not about
                performance or perfection. They are about the quiet, persistent act of
                returning — to breath, to body, to the version of yourself that exists
                before the noise.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Training */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-6 mb-16">
              <div className="h-px flex-1 bg-[#f4f4f4]/5" />
              <span className="text-xs tracking-[0.5em] uppercase text-[#f4f4f4]/20 font-display">
                Training
              </span>
              <div className="h-px flex-1 bg-[#f4f4f4]/5" />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="stagger">
            <div className="space-y-8">
              {[
                '200-Hour Registered Yoga Teacher',
                'Kundalini Yoga Certification',
                'Sound Healing Practitioner',
                'Kriya Yoga Studies',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-6 group"
                >
                  <div className="h-px w-6 bg-[#9DBBAE]/30 group-hover:w-12 transition-all duration-500" />
                  <span className="font-display text-xl md:text-2xl font-light text-[#f4f4f4]/50 group-hover:text-[#f4f4f4]/70 transition-colors duration-500">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal variant="slow">
            <blockquote className="font-display text-3xl md:text-5xl font-light leading-[1.3] text-[#f4f4f4]/50 italic">
              The quieter you become, the more you can hear.
            </blockquote>
            <div className="ornament-line w-16 mx-auto mt-12" />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
