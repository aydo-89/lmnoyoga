'use client';

import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

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
  {
    name: 'Community Aid Network MN',
    url: 'https://www.canmn.org/',
    description: 'Grassroots mutual aid in Minneapolis',
  },
];

export default function Offerings() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

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

      {/* In Person — Heart Space */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-6 mb-16">
              <div className="h-px flex-1 bg-[#f4f4f4]/5" />
              <span className="text-xs tracking-[0.5em] uppercase text-[#f4f4f4]/20 font-display">
                In Person
              </span>
              <div className="h-px flex-1 bg-[#f4f4f4]/5" />
            </div>

            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-light text-[#f4f4f4]/60 mb-4">
                Heart Space Studio
              </p>
              <p className="text-[#f4f4f4]/25 text-lg mb-6">
                South Minneapolis
              </p>
              <p className="text-[#f4f4f4]/30 text-base mb-12 max-w-lg mx-auto leading-relaxed">
                Kriya Yoga, Sound Bath + Yoga Nidra, Gentle Yoga, and Private Events.
                Register through Heart Space to reserve your spot.
                Check the schedule for donation-based sound baths that raise funds
                for community organizations.
              </p>
              <a
                href="https://www.heartspacetherapy.org/sound-bathing-with-liane-1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-reveal-line border border-[#f4f4f4]/10 hover:border-[#9DBBAE]/40 text-[#f4f4f4]/60 hover:text-[#f4f4f4] text-sm tracking-[0.3em] uppercase px-12 py-5 transition-all duration-700 inline-block"
              >
                Register for Classes
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Virtual — Coming Soon + Waitlist */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-6 mb-16">
              <div className="h-px flex-1 bg-[#f4f4f4]/5" />
              <span className="text-xs tracking-[0.5em] uppercase text-[#f4f4f4]/20 font-display">
                Virtual
              </span>
              <div className="h-px flex-1 bg-[#f4f4f4]/5" />
            </div>

            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-light text-[#f4f4f4]/40 mb-12">
                Coming soon
              </p>

              {submitted ? (
                <p className="font-display text-xl text-[#9DBBAE]/60">
                  You are on the list.
                </p>
              ) : (
                <form
                  onSubmit={handleWaitlist}
                  className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent border-b border-[#f4f4f4]/15 focus:border-[#9DBBAE]/40 text-[#f4f4f4]/80 font-display text-lg py-3 outline-none transition-colors duration-700 placeholder:text-[#f4f4f4]/25"
                  />
                  <button
                    type="submit"
                    className="border border-[#f4f4f4]/10 hover:border-[#9DBBAE]/40 text-[#f4f4f4]/60 hover:text-[#f4f4f4] text-sm tracking-[0.3em] uppercase px-8 py-3 transition-all duration-700 shrink-0"
                  >
                    Join Waitlist
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Community Support */}
      <section id="community" className="py-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-6 mb-12">
              <div className="h-px flex-1 bg-[#f4f4f4]/5" />
              <span className="text-xs tracking-[0.5em] uppercase text-[#f4f4f4]/20 font-display">
                Community Support
              </span>
              <div className="h-px flex-1 bg-[#f4f4f4]/5" />
            </div>

            <p className="text-[#f4f4f4]/30 text-lg leading-relaxed mb-10 text-center">
              Practice extends beyond the mat. Please consider a donation to these organizations.
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
