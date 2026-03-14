import type { Metadata } from 'next';
import ScrollReveal from '../components/ScrollReveal';
import NameToLMNO from '../components/NameToLMNO';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet Liane Olson — yoga practitioner, sound healing facilitator, and founder of LMNO.',
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <NameToLMNO />
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="slow">
            <div className="space-y-8 text-[#f4f4f4]/45 text-lg leading-[1.9]">
              <p className="font-display text-2xl md:text-3xl font-light leading-[1.6] text-[#f4f4f4]/55">
                My journey in yoga and sound started as a way back to myself.
              </p>

              <p>
                Diagnosed with a chronic pain disorder in my early twenties, I turned
                to yoga not as a trend or a hobby but as a lifeline. What began as
                self-care became discipline, and discipline became devotion.
              </p>

              <p>
                I earned my 200-hour certification through the Yoga Center of
                Minneapolis, training with a deep focus on nervous system regulation
                and the quiet, persistent power of mindful movement. The body holds
                everything. Learning to listen to it changed my life. Teaching others
                to listen to theirs is the work I was meant to do.
              </p>

              <p>
                Two years ago, I discovered sound healing and something shifted.
                The bowls, the frequencies, the way vibration moves through a room
                and settles into the body. I began studying sound healing facilitation,
                drawn to the space where yoga and sound meet and the stillness that
                lives on the other side of resonance.
              </p>

              <p>
                LMNO is the space I built to hold all of it. Yoga rooted in Himalayan
                Kriya tradition. Sound baths designed for deep restoration. A practice
                that honors the whole person. I believe healing is not a destination
                but a rhythm, and my role is to help you find yours.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slow">
            <p className="mt-20 font-display text-2xl md:text-3xl font-light italic text-[#f4f4f4]/25 tracking-editorial">
              let movement nurture openings
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-16 pt-12 border-t border-[#f4f4f4]/[0.04]">
              <p className="text-[#f4f4f4]/30 text-base leading-relaxed">
                Liane facilitates Sound Baths, Kriya Yoga + Yoga Nidra.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
