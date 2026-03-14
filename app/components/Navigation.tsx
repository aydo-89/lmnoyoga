'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/offerings', label: 'Offerings' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/contact', label: 'Contact' },
  ];

  // On homepage: logo is very dark/subtle. On inner pages: brighter.
  const logoOpacity = isHome
    ? scrolled
      ? 'text-[#f4f4f4]/30'
      : 'text-[#f4f4f4]/10'
    : 'text-[#f4f4f4]/60';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo — subtle on homepage, visible on inner pages */}
          <Link href="/" className="relative z-10">
            <span
              className={`font-display text-2xl font-semibold tracking-editorial transition-colors duration-700 ${logoOpacity}`}
            >
              LMNO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#f4f4f4]/70 hover:text-[#f4f4f4] text-sm tracking-wide-editorial uppercase transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-10 p-2"
            aria-label="Menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-px bg-[#f4f4f4] transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-[4px]' : ''
                }`}
              />
              <span
                className={`block h-px bg-[#f4f4f4] transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-px bg-[#f4f4f4] transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-[4px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu — full screen */}
      <div
        className={`md:hidden fixed inset-0 bg-[#0a0a0a] transition-all duration-500 flex items-center justify-center ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-3xl tracking-editorial text-[#f4f4f4]/80 hover:text-[#f4f4f4] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
