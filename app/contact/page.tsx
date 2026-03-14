'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service
    alert('Message sent. We will be in touch.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page-content pt-32 pb-24 px-6 lg:px-12 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-light tracking-editorial mb-4">
          Contact
        </h1>
        <div className="w-12 h-px bg-[#9DBBAE] mb-16" />

        <form onSubmit={handleSubmit} className="space-y-10">
          <div>
            <label className="block text-sm tracking-wide-editorial uppercase text-[#f4f4f4]/30 mb-3">
              Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-transparent border-b border-[#f4f4f4]/10 focus:border-[#9DBBAE] text-[#f4f4f4] font-display text-xl py-3 outline-none transition-colors duration-500"
            />
          </div>

          <div>
            <label className="block text-sm tracking-wide-editorial uppercase text-[#f4f4f4]/30 mb-3">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-transparent border-b border-[#f4f4f4]/10 focus:border-[#9DBBAE] text-[#f4f4f4] font-display text-xl py-3 outline-none transition-colors duration-500"
            />
          </div>

          <div>
            <label className="block text-sm tracking-wide-editorial uppercase text-[#f4f4f4]/30 mb-3">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-transparent border-b border-[#f4f4f4]/10 focus:border-[#9DBBAE] text-[#f4f4f4] font-display text-xl py-3 outline-none transition-colors duration-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="border border-[#f4f4f4]/20 hover:border-[#9DBBAE] text-[#f4f4f4]/80 hover:text-[#f4f4f4] text-sm tracking-wide-editorial uppercase px-10 py-4 transition-all duration-500"
          >
            Send
          </button>
        </form>

        <div className="mt-24 border-t border-[#f4f4f4]/5 pt-16 space-y-6 text-[#f4f4f4]/40 text-lg">
          <p>hello@lmnoyoga.com</p>
          <p>Minneapolis-St. Paul, Minnesota</p>
        </div>
      </div>
    </div>
  );
}
