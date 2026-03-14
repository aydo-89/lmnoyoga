import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LMNO',
  description: 'Yoga, sound healing, and mindful movement.',
};

export default function Home() {
  return (
    <>
      {/* Full-screen Video Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-bg.webm" type="video/webm" />
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Dark mysterious overlay */}
        <div className="absolute inset-0 video-overlay" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <h1 className="font-display text-7xl md:text-9xl font-light tracking-editorial text-[#f4f4f4] animate-fade-in opacity-0">
            LMNO
          </h1>
          <div className="separator animate-reveal-line mt-8 mb-6" />
          <p className="text-sm md:text-base tracking-wide-editorial uppercase text-[#f4f4f4]/60 animate-fade-in opacity-0 delay-600">
            Yoga &nbsp;&middot;&nbsp; Sound &nbsp;&middot;&nbsp; Stillness
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
          <svg
            width="20"
            height="30"
            viewBox="0 0 20 30"
            fill="none"
            className="text-[#f4f4f4]/40"
          >
            <rect
              x="1"
              y="1"
              width="18"
              height="28"
              rx="9"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="10" cy="10" r="2" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Offerings - minimal grid */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {[
              {
                title: 'Yoga',
                text: 'Vinyasa flows and restorative practices. Strength, flexibility, presence.',
              },
              {
                title: 'Sound Healing',
                text: 'Crystal bowls, gongs, and vibration. Deep restoration through resonance.',
              },
              {
                title: 'Kundalini',
                text: 'Breath, movement, and meditation. Awakening energy from within.',
              },
              {
                title: 'Private Sessions',
                text: 'One-on-one guidance shaped to your body, your goals, your pace.',
              },
            ].map((item) => (
              <div key={item.title} className="group">
                <h3 className="font-display text-3xl md:text-4xl font-light tracking-editorial mb-4 text-[#f4f4f4]">
                  {item.title}
                </h3>
                <div className="w-8 h-px bg-[#9DBBAE] mb-6 group-hover:w-16 transition-all duration-500" />
                <p className="text-[#f4f4f4]/50 text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-24 px-6 lg:px-12 border-t border-[#f4f4f4]/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-2xl md:text-4xl font-light leading-relaxed text-[#f4f4f4]/80 italic">
            The body is your temple. Keep it pure and clean for the soul to reside in.
          </p>
          <div className="w-8 h-px bg-[#9DBBAE] mx-auto mt-8" />
        </div>
      </section>

      {/* CTA - minimal */}
      <section className="py-32 px-6 lg:px-12 border-t border-[#f4f4f4]/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-editorial mb-8 text-[#f4f4f4]">
            Begin
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/schedule"
              className="border border-[#f4f4f4]/20 hover:border-[#9DBBAE] text-[#f4f4f4]/80 hover:text-[#f4f4f4] text-sm tracking-wide-editorial uppercase px-10 py-4 transition-all duration-500"
            >
              View Schedule
            </Link>
            <Link
              href="/contact"
              className="border border-[#f4f4f4]/20 hover:border-[#9DBBAE] text-[#f4f4f4]/80 hover:text-[#f4f4f4] text-sm tracking-wide-editorial uppercase px-10 py-4 transition-all duration-500"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#f4f4f4]/5 py-12 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-display text-lg tracking-editorial text-[#f4f4f4]/40">
            LMNO
          </span>
          <div className="flex items-center gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f4f4f4]/30 hover:text-[#9DBBAE] transition-colors duration-300 text-sm tracking-wide-editorial uppercase"
            >
              Instagram
            </a>
            <a
              href="mailto:hello@lmnoyoga.com"
              className="text-[#f4f4f4]/30 hover:text-[#9DBBAE] transition-colors duration-300 text-sm tracking-wide-editorial uppercase"
            >
              Email
            </a>
          </div>
          <span className="text-[#f4f4f4]/20 text-xs tracking-wide">
            {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </>
  );
}
