'use client';

import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Schedule() {
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
            Schedule
          </h1>
        </div>
      </section>

      <div className="section-divider" />

      {/* In Person */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="mb-20">
              <div className="flex items-center gap-6 mb-12">
                <div className="h-px flex-1 bg-[#f4f4f4]/5" />
                <span className="text-xs tracking-[0.5em] uppercase text-[#f4f4f4]/20 font-display">
                  In Person
                </span>
                <div className="h-px flex-1 bg-[#f4f4f4]/5" />
              </div>

              <div className="text-center">
                <p className="font-display text-2xl md:text-3xl font-light text-[#f4f4f4]/60 mb-4">
                  Heart Space Studio
                </p>
                <p className="text-[#f4f4f4]/25 text-lg mb-10">
                  South Minneapolis
                </p>
                <a
                  href="https://www.heartspacempls.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-reveal-line border border-[#f4f4f4]/10 hover:border-[#9DBBAE]/40 text-[#f4f4f4]/60 hover:text-[#f4f4f4] text-sm tracking-[0.3em] uppercase px-12 py-5 transition-all duration-700 inline-block"
                >
                  View Classes
                </a>
              </div>
            </div>
          </ScrollReveal>

          <div className="section-divider" />

          {/* Virtual — Coming Soon + Waitlist */}
          <ScrollReveal>
            <div className="mt-20">
              <div className="flex items-center gap-6 mb-12">
                <div className="h-px flex-1 bg-[#f4f4f4]/5" />
                <span className="text-xs tracking-[0.5em] uppercase text-[#f4f4f4]/20 font-display">
                  Virtual
                </span>
                <div className="h-px flex-1 bg-[#f4f4f4]/5" />
              </div>

              <div className="text-center">
                <p className="font-display text-2xl md:text-3xl font-light text-[#f4f4f4]/40 mb-10">
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
                      className="flex-1 bg-transparent border-b border-[#f4f4f4]/[0.06] focus:border-[#9DBBAE]/40 text-[#f4f4f4]/80 font-display text-lg py-3 outline-none transition-colors duration-700 placeholder:text-[#f4f4f4]/15"
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
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
