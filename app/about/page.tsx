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
            Liane Olson
          </h1>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="slow">
            <div className="space-y-8 text-[#f4f4f4]/50 text-lg leading-[1.9]">
              <p className="font-display text-2xl md:text-3xl font-light leading-[1.6] text-[#f4f4f4]/60">
                Twenty years on the mat. It started as survival.
              </p>
              <p>
                Diagnosed with a chronic pain disorder in her early twenties,
                Liane turned to yoga not as a hobby but as a way back to her
                own body. That need became a discipline. The discipline became
                a practice. The practice became a life.
              </p>
              <p>
                She earned her 200-hour certification through the Yoga Center
                of Minneapolis, training with a focus on nervous system
                regulation and the quiet, persistent power of mindful movement.
              </p>
              <p>
                Two years ago she discovered sound healing and something
                shifted. The bowls, the frequencies, the way vibration moves
                through a room and through a body. She began studying sound
                healing facilitation, drawn to the place where yoga and sound
                meet and the silence that lives on the other side.
              </p>
              <p>
                LMNO is the space she built to hold that work. Combining yoga
                and sound to create something whole. Supporting her students in
                finding balance, peace, and healing on and off the mat.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-20 pt-16 border-t border-[#f4f4f4]/[0.04]">
              <p className="font-display text-xl text-[#f4f4f4]/35 italic leading-relaxed">
                Liane facilitates Sound Baths, Kriya Yoga, and Yoga Nidra.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
