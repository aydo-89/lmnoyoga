'use client';

import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display display-massive font-light text-[#f4f4f4]/90 animate-fade-in opacity-0">
            Contact
          </h1>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          {sent ? (
            <ScrollReveal>
              <div className="text-center py-20">
                <p className="font-display text-3xl font-light text-[#f4f4f4]/60">
                  Message received. We will be in touch.
                </p>
                <div className="ornament-line w-16 mx-auto mt-8" />
              </div>
            </ScrollReveal>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              <ScrollReveal>
                <div>
                  <label className="block text-sm tracking-[0.3em] uppercase text-[#f4f4f4]/50 mb-4 font-display font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-[#f4f4f4]/15 focus:border-[#9DBBAE]/40 text-[#f4f4f4]/90 font-display text-xl md:text-2xl py-4 outline-none transition-colors duration-700"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <label className="block text-sm tracking-[0.3em] uppercase text-[#f4f4f4]/50 mb-4 font-display font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-[#f4f4f4]/15 focus:border-[#9DBBAE]/40 text-[#f4f4f4]/90 font-display text-xl md:text-2xl py-4 outline-none transition-colors duration-700"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <label className="block text-sm tracking-[0.3em] uppercase text-[#f4f4f4]/50 mb-4 font-display font-medium">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-[#f4f4f4]/15 focus:border-[#9DBBAE]/40 text-[#f4f4f4]/90 font-display text-xl md:text-2xl py-4 outline-none transition-colors duration-700 resize-none"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <button
                  type="submit"
                  className="hover-reveal-line border border-[#f4f4f4]/10 hover:border-[#9DBBAE]/40 text-[#f4f4f4]/60 hover:text-[#f4f4f4] text-sm tracking-[0.3em] uppercase px-12 py-5 transition-all duration-700"
                >
                  Send
                </button>
              </ScrollReveal>
            </form>
          )}

          <ScrollReveal>
            <div className="mt-32 border-t border-[#f4f4f4]/[0.04] pt-16 space-y-4">
              <p className="text-[#f4f4f4]/40 font-display text-lg">hello@lmnoyoga.com</p>
              <p className="text-[#f4f4f4]/25 font-display text-lg">Minneapolis-St. Paul, Minnesota</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
