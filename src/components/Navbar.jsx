'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleContactMouseEnter = useCallback((e) => {
    e.currentTarget.style.transform = 'scale(1.04)';
    e.currentTarget.style.boxShadow = '0 4px 22px rgba(154,205,21,0.35)';
  }, []);

  const handleContactMouseLeave = useCallback((e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = 'none';
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/20 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-8xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative w-[110px] h-[36px] overflow-hidden flex items-center justify-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Edition Studio"
              width={110}
              height={110}
              className="max-w-none object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`font-syne font-semibold text-base transition-colors duration-200 ${
                      isActive ? 'text-accent-lime' : 'text-white/70 hover:text-white'
                    }`}
                    style={{ lineHeight: '16px', letterSpacing: '-0.8px' }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 font-syne font-bold text-base navbar-cta-btn"
              style={{
                background: 'radial-gradient(50% 50% at 4.7% 0%, rgb(154,205,21) 0%, rgb(151,199,30) 100%)',
                border: '1px solid rgb(255,255,255)',
                borderRadius: '54px',
                color: 'rgb(255,255,255)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                lineHeight: '19.2px'
              }}
              onMouseEnter={handleContactMouseEnter}
              onMouseLeave={handleContactMouseLeave}
            >
              Contact Us
            </Link>
            <button
              id="hamburger-btn"
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-20">
              <Link href="/" onClick={() => setMobileOpen(false)} className="relative w-[152px] h-[44px] overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Edition Studio"
                  width={152}
                  height={152}
                  className="max-w-none object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <motion.ul
              className="flex flex-col items-center justify-center flex-1 gap-8"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.li
                    key={link.label}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  >
                    <Link
                      href={link.href}
                      className={`font-syne font-bold text-2xl transition-colors ${
                        isActive ? 'text-accent-lime' : 'text-white hover:text-accent-gold'
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex px-8 py-3 font-syne font-bold text-black text-base"
                  style={{
                    background: 'radial-gradient(127.9% 258% at -40.3% 0%, rgb(255,255,255) 39.3%, rgb(154,205,21) 62.1%, rgb(154,205,21) 100%)',
                    border: 'none',
                    borderRadius: '103px',
                    color: 'rgb(13,13,13)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    lineHeight: '19.2px'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.04)';
                    e.currentTarget.style.boxShadow = '0 4px 28px rgba(154,205,21,0.45)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
