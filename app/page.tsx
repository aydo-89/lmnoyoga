import Link from 'next/link';
import type { Metadata } from 'next';
import ScrollReveal from './components/ScrollReveal';


export const metadata: Metadata = {
  title: 'LMNO',
  description: 'Yoga + Sound. In-person & virtual.',
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
              <span className="text-sm md:text-base tracking-[0.5em] uppercase text-[#f4f4f4]/70 font-display">
                Yoga + Sound
              </span>
            </div>
            <div className="mt-4 animate-fade-in opacity-0 delay-800">
              <span className="text-base md:text-lg tracking-[0.35em] uppercase text-[#f4f4f4]/40 font-display">
                In-Person & Virtual
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

      {/* ===== 4 BLOCKS — Yoga, Sound Baths, Community Support, Contact ===== */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Yoga */}
            <ScrollReveal>
              <Link href="/offerings" className="group block p-10 md:p-16 border-b border-r border-[#f4f4f4]/[0.03] hover:bg-[#f4f4f4]/[0.02] transition-all duration-700">
                <span className="text-xs tracking-[0.5em] text-[#9DBBAE]/50 font-display">01</span>
                <h3 className="font-display text-4xl md:text-5xl font-light tracking-editorial mt-4 mb-6 text-[#f4f4f4] group-hover:text-[#9DBBAE] transition-colors duration-700">
                  Yoga
                </h3>
                <p className="text-[#f4f4f4]/40 text-lg leading-relaxed max-w-sm">
                  A practice rooted in Himalayan Kriya yoga.
                </p>
              </Link>
            </ScrollReveal>

            {/* Sound Baths */}
            <ScrollReveal>
              <Link href="/offerings" className="group block p-10 md:p-16 border-b border-[#f4f4f4]/[0.03] hover:bg-[#f4f4f4]/[0.02] transition-all duration-700">
                <span className="text-xs tracking-[0.5em] text-[#9DBBAE]/50 font-display">02</span>
                <h3 className="font-display text-4xl md:text-5xl font-light tracking-editorial mt-4 mb-6 text-[#f4f4f4] group-hover:text-[#9DBBAE] transition-colors duration-700">
                  Sound Baths
                </h3>
                <p className="text-[#f4f4f4]/40 text-lg leading-relaxed max-w-sm">
                  Deep restoration through resonance.
                </p>
              </Link>
            </ScrollReveal>

            {/* Community Support */}
            <ScrollReveal>
              <Link href="/offerings#community" className="group block p-10 md:p-16 border-r border-[#f4f4f4]/[0.03] hover:bg-[#f4f4f4]/[0.02] transition-all duration-700">
                <span className="text-xs tracking-[0.5em] text-[#9DBBAE]/50 font-display">03</span>
                <h3 className="font-display text-4xl md:text-5xl font-light tracking-editorial mt-4 mb-6 text-[#f4f4f4] group-hover:text-[#9DBBAE] transition-colors duration-700">
                  Community
                </h3>
                <p className="text-[#f4f4f4]/40 text-lg leading-relaxed max-w-sm">
                  Consider supporting these organizations.
                </p>
              </Link>
            </ScrollReveal>

            {/* Contact */}
            <ScrollReveal>
              <Link href="/contact" className="group block p-10 md:p-16 hover:bg-[#f4f4f4]/[0.02] transition-all duration-700">
                <span className="text-xs tracking-[0.5em] text-[#9DBBAE]/50 font-display">04</span>
                <h3 className="font-display text-4xl md:text-5xl font-light tracking-editorial mt-4 mb-6 text-[#f4f4f4] group-hover:text-[#9DBBAE] transition-colors duration-700">
                  Contact
                </h3>
                <p className="text-[#f4f4f4]/40 text-lg leading-relaxed max-w-sm">
                  Reach out! We'd love to hear from you.
                </p>
              </Link>
            </ScrollReveal>
          </div>
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
