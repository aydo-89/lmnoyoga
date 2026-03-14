import type { Metadata } from 'next';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Offerings',
  description: 'Yoga, sound healing, and community.',
};

const communityLinks = [
  {
    name: 'Immigration Law Center',
    url: 'https://www.ilcm.org/',
    description: 'Immigration support and legal services',
  },
  {
    name: 'Smitten Kitten',
    url: 'https://www.smittenkittenonline.com/',
    description: 'Community-centered education and wellness',
  },
  {
    name: 'World Central Kitchen',
    url: 'https://wck.org/',
    description: 'Nourishing communities through food',
  },
];

export default function Offerings() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display display-massive font-light text-[#f4f4f4]/90 animate-fade-in opacity-0">
            Offerings
          </h1>
        </div>
      </section>

      <div className="section-divider" />

      {/* Yoga */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="group py-16 border-b border-[#f4f4f4]/[0.04]">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs tracking-[0.5em] text-[#9DBBAE]/40 font-display">01</span>
                <div className="h-px w-6 bg-[#f4f4f4]/5" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light tracking-editorial mb-6 text-[#f4f4f4]/80">
                Yoga
              </h2>
              <p className="text-[#f4f4f4]/35 text-lg leading-relaxed max-w-xl">
                A practice rooted in Himalayan Kriya yoga. Breath-linked movement
                that builds presence, strength, and stillness from the inside out.
              </p>
            </div>
          </ScrollReveal>

          {/* Sound Healing */}
          <ScrollReveal>
            <div className="group py-16 border-b border-[#f4f4f4]/[0.04]">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs tracking-[0.5em] text-[#9DBBAE]/40 font-display">02</span>
                <div className="h-px w-6 bg-[#f4f4f4]/5" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light tracking-editorial mb-6 text-[#f4f4f4]/80">
                Sound Healing
              </h2>
              <p className="text-[#f4f4f4]/35 text-lg leading-relaxed max-w-xl">
                Crystal bowls, gongs, and overtone chimes. Lie down, close your eyes,
                and let the vibration do its work. Deep restoration through resonance.
              </p>
            </div>
          </ScrollReveal>

          {/* Community Support */}
          <ScrollReveal>
            <div className="group py-16">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs tracking-[0.5em] text-[#9DBBAE]/40 font-display">03</span>
                <div className="h-px w-6 bg-[#f4f4f4]/5" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light tracking-editorial mb-6 text-[#f4f4f4]/80">
                Community Support
              </h2>
              <p className="text-[#f4f4f4]/35 text-lg leading-relaxed max-w-xl mb-10">
                Practice extends beyond the mat. These are organizations doing meaningful
                work in our community.
              </p>

              <div className="space-y-6">
                {communityLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-6 hover:gap-8 transition-all duration-500"
                  >
                    <div className="h-px w-6 bg-[#9DBBAE]/20 group-hover/link:w-12 group-hover/link:bg-[#9DBBAE]/40 transition-all duration-500" />
                    <div>
                      <span className="font-display text-xl text-[#f4f4f4]/50 group-hover/link:text-[#9DBBAE] transition-colors duration-500">
                        {link.name}
                      </span>
                      <span className="block text-sm text-[#f4f4f4]/20 mt-1">
                        {link.description}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
