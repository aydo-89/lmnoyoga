import Link from 'next/link';
import type { Metadata } from 'next';
import ScrollReveal from './components/ScrollReveal';

export const metadata: Metadata = {
  title: 'LMNO',
  description: 'Yoga, sound healing, and mindful movement.',
};

export default function Home() {
  return (
    <>
      {/* ===== HERO — Full viewport video ===== */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video with slow zoom */}
        <div className="absolute inset-0 animate-slow-zoom">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-bg.webm" type="video/webm" />
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark vignette overlay */}
        <div className="absolute inset-0 video-overlay" />

        {/* Hero content — Predock-style massive type */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-display display-massive font-light text-[#f4f4f4] animate-fade-in opacity-0">
              LMNO
            </h1>
            <div className="flex items-center justify-center gap-6 mt-6 animate-fade-in opacity-0 delay-800">
              <div className="h-px w-12 bg-[#9DBBAE]/40" />
              <span className="text-xs tracking-[0.5em] uppercase text-[#f4f4f4]/40 font-display">
                Yoga
              </span>
              <div className="ornament-dot" />
              <span className="text-xs tracking-[0.5em] uppercase text-[#f4f4f4]/40 font-display">
                Sound
              </span>
              <div className="ornament-dot" />
              <span className="text-xs tracking-[0.5em] uppercase text-[#f4f4f4]/40 font-display">
                Stillness
              </span>
              <div className="h-px w-12 bg-[#9DBBAE]/40" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 scroll-indicator flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#f4f4f4]/20">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[#f4f4f4]/20 to-transparent" />
        </div>
      </section>

      {/* ===== INTRO — Le Jardin editorial style ===== */}
      <section className="py-40 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal variant="slow">
            <p className="font-display text-2xl md:text-4xl font-light leading-[1.6] text-[#f4f4f4]/70">
              A practice rooted in breath, movement, and the vibration of sound.
              Not performance. Not pretense. Just the quiet work of returning to yourself.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="ornament-line w-24 mx-auto mt-16" />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== OFFERINGS — Staggered editorial reveals ===== */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-6 mb-24">
              <div className="h-px flex-1 bg-[#f4f4f4]/5" />
              <span className="text-xs tracking-[0.5em] uppercase text-[#f4f4f4]/20 font-display">
                Offerings
              </span>
              <div className="h-px flex-1 bg-[#f4f4f4]/5" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              {
                title: 'Yoga',
                text: 'Dynamic flows and slow restorative holds. Every class is an invitation to inhabit your body fully.',
                num: '01',
              },
              {
                title: 'Sound Healing',
                text: 'Crystal bowls, gongs, and overtone chimes. Lie down, close your eyes, and let the vibration do its work.',
                num: '02',
              },
              {
                title: 'Kundalini',
                text: 'Ancient technology for awakening. Breath of fire, mantra, and movement that breaks through what the mind cannot.',
                num: '03',
              },
              {
                title: 'Private Sessions',
                text: 'Built around you. Your body, your history, your pace. One-on-one guidance with nowhere to hide and nothing to prove.',
                num: '04',
              },
            ].map((item) => (
              <ScrollReveal key={item.num}>
                <div className="group p-10 md:p-16 border-b border-r border-[#f4f4f4]/[0.03] hover:bg-[#f4f4f4]/[0.02] transition-all duration-700">
                  <span className="text-xs tracking-[0.5em] text-[#9DBBAE]/50 font-display">
                    {item.num}
                  </span>
                  <h3 className="font-display text-4xl md:text-5xl font-light tracking-editorial mt-4 mb-6 text-[#f4f4f4] group-hover:text-[#9DBBAE] transition-colors duration-700">
                    {item.title}
                  </h3>
                  <p className="text-[#f4f4f4]/40 text-lg leading-relaxed max-w-sm">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FULL BLEED QUOTE — Predock-style massive text over dark ===== */}
      <section className="relative py-48 px-6 lg:px-12 overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <ScrollReveal variant="slow">
            <blockquote className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.2] text-[#f4f4f4]/60 italic">
              The body is your first home. Return to it.
            </blockquote>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-12 flex items-center gap-4">
              <div className="h-px w-16 bg-[#9DBBAE]/30" />
              <span className="text-sm tracking-[0.3em] uppercase text-[#9DBBAE]/40 font-display">
                Liane
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECTION DIVIDER ===== */}
      <div className="section-divider" />

      {/* ===== CTA — Minimal, mysterious ===== */}
      <section className="py-40 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-5xl md:text-7xl font-light tracking-editorial mb-16 text-[#f4f4f4]">
              Begin
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="stagger">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/classes"
                className="hover-reveal-line border border-[#f4f4f4]/10 hover:border-[#9DBBAE]/40 text-[#f4f4f4]/60 hover:text-[#f4f4f4] text-sm tracking-[0.3em] uppercase px-12 py-5 transition-all duration-700"
              >
                Explore Classes
              </Link>
              <Link
                href="/practice-builder"
                className="hover-reveal-line border border-[#f4f4f4]/10 hover:border-[#9DBBAE]/40 text-[#f4f4f4]/60 hover:text-[#f4f4f4] text-sm tracking-[0.3em] uppercase px-12 py-5 transition-all duration-700"
              >
                Build a Practice
              </Link>
              <Link
                href="/contact"
                className="hover-reveal-line border border-[#f4f4f4]/10 hover:border-[#9DBBAE]/40 text-[#f4f4f4]/60 hover:text-[#f4f4f4] text-sm tracking-[0.3em] uppercase px-12 py-5 transition-all duration-700"
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOOTER — Barely there ===== */}
      <footer className="border-t border-[#f4f4f4]/[0.03] py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="font-display text-xl tracking-editorial text-[#f4f4f4]/20">
              LMNO
            </span>
            <div className="flex items-center gap-10">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-reveal-line text-[#f4f4f4]/20 hover:text-[#9DBBAE]/60 transition-colors duration-500 text-xs tracking-[0.3em] uppercase"
              >
                Instagram
              </a>
              <a
                href="mailto:hello@lmnoyoga.com"
                className="hover-reveal-line text-[#f4f4f4]/20 hover:text-[#9DBBAE]/60 transition-colors duration-500 text-xs tracking-[0.3em] uppercase"
              >
                Email
              </a>
              <span className="text-[#f4f4f4]/10 text-xs tracking-wide">
                Minneapolis
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
