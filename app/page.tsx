import Link from 'next/link';
import type { Metadata } from 'next';
import ScrollReveal from './components/ScrollReveal';

export const metadata: Metadata = {
  title: 'LMNO',
  description: 'Yoga and sound.',
};

export default function Home() {
  return (
    <>
      {/* ===== HERO — Full viewport video ===== */}
      <section className="relative h-screen w-full overflow-hidden">
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

        <div className="absolute inset-0 video-overlay" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-display display-massive font-light text-[#f4f4f4] animate-fade-in opacity-0">
              LMNO
            </h1>
            <div className="flex items-center justify-center gap-6 mt-6 animate-fade-in opacity-0 delay-800">
              <div className="h-px w-12 bg-[#9DBBAE]/40" />
              <span className="text-xs tracking-[0.5em] uppercase text-[#f4f4f4]/40 font-display">
                Yoga and Sound
              </span>
              <div className="h-px w-12 bg-[#9DBBAE]/40" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 scroll-indicator flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#f4f4f4]/20">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[#f4f4f4]/20 to-transparent" />
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-40 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal variant="slow">
            <p className="font-display text-2xl md:text-4xl font-light leading-[1.6] text-[#f4f4f4]/70">
              A practice rooted in Himalayan Kriya yoga. Deep restoration through resonance.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="ornament-line w-24 mx-auto mt-16" />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== QUOTE ===== */}
      <section className="relative py-48 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <ScrollReveal variant="slow">
            <blockquote className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.2] text-[#f4f4f4]/60 italic text-center">
              Let movement nurture openings
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== CTA ===== */}
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
                href="/offerings"
                className="hover-reveal-line border border-[#f4f4f4]/10 hover:border-[#9DBBAE]/40 text-[#f4f4f4]/60 hover:text-[#f4f4f4] text-sm tracking-[0.3em] uppercase px-12 py-5 transition-all duration-700"
              >
                Offerings
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

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-[#f4f4f4]/[0.03] py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="font-display text-xl tracking-editorial text-[#f4f4f4]/20">
              LMNO
            </span>
            <div className="flex items-center gap-10">
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
