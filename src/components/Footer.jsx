'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useCallback } from 'react';

const quickLinksCol1 = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const quickLinksCol2 = [
  { label: 'Privacy Policy', href: '#' },
];

export default function Footer() {
  const handleCtaMouseEnter = useCallback((e) => {
    e.currentTarget.style.transform = 'scale(1.04)';
    e.currentTarget.style.boxShadow = '0 4px 28px rgba(154,205,21,0.45)';
  }, []);

  const handleCtaMouseLeave = useCallback((e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = 'none';
  }, []);

  return (
    <footer className="bg-bg-secondary border-t border-white/5 pt-16 pb-8">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">

        {/* 1. Centered Logo */}
        <div className="flex justify-center mb-10">
          <Link href="/" className="relative w-[220px] md:w-[308px] h-[111px] overflow-hidden flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Edition Studio"
              width={308}
              height={308}
              className="w-[220px] md:w-[308px] h-[220px] md:h-[308px] max-w-none object-contain"
            />
          </Link>
        </div>

        {/* 2. Two equal-width, equal-height columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-6 items-stretch">

          {/* Left — Contact Info */}
          <div className="flex flex-col h-full">
            <div className="space-y-4 mb-8">
              <p>
                <span className="block font-inter font-normal text-white/50 mb-1" style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: '27px', letterSpacing: '-0.36px' }}>Email</span>
                <a href="mailto:work@editionstudio.in" className="font-inter font-light text-text-muted hover:text-accent-gold transition-colors break-all" style={{ fontSize: 'clamp(13px, 1.4vw, 18px)', lineHeight: '27px', letterSpacing: '-0.36px' }}>
                  work@editionstudio.in
                </a>
                <span className="text-text-muted" style={{ fontSize: 'clamp(13px, 1.4vw, 18px)' }}> / </span>
                <a href="mailto:editingeditionstudio@gmail.com" className="font-inter font-light text-text-muted hover:text-accent-gold transition-colors break-all" style={{ fontSize: 'clamp(13px, 1.4vw, 18px)', lineHeight: '27px', letterSpacing: '-0.36px' }}>
                  editingeditionstudio@gmail.com
                </a>
              </p>
              <p>
                <span className="block font-inter font-normal text-white/50 mb-1" style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: '27px', letterSpacing: '-0.36px' }}>Phone</span>
                <a href="tel:8989195551" className="font-inter font-light text-text-muted hover:text-accent-gold transition-colors" style={{ fontSize: 'clamp(13px, 1.4vw, 18px)', lineHeight: '27px', letterSpacing: '-0.36px' }}>8989195551</a>
              </p>
              <p>
                <span className="block font-inter font-normal text-white/50 mb-1" style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: '27px', letterSpacing: '-0.36px' }}>Business Hours</span>
                <span className="font-inter font-light text-text-muted" style={{ fontSize: 'clamp(13px, 1.4vw, 18px)', lineHeight: '27px', letterSpacing: '-0.36px' }}>Sunday – Thursday: 9am to 5pm</span>
              </p>
            </div>
            <div className="mt-auto">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 font-syne font-bold text-black text-[12px]"
                style={{
                  background: 'radial-gradient(127.9% 258% at -40.3% 0%, rgb(255,255,255) 39.3%, rgb(154,205,21) 62.1%, rgb(154,205,21) 100%)',
                  border: 'none',
                  borderRadius: '103px',
                  color: 'rgb(13,13,13)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  whiteSpace: 'nowrap',
                  lineHeight: '14.4px',
                  letterSpacing: 'normal'
                }}
                onMouseEnter={handleCtaMouseEnter}
                onMouseLeave={handleCtaMouseLeave}
              >
                Let&apos;s Collaborate →
              </Link>
            </div>
          </div>

          {/* Right — Quick Links, two explicit columns, no heading */}
          <div className="flex flex-col h-full">
            <div className="flex gap-x-16 flex-1">
              {/* Column 1: Home → Contact (top-aligned) */}
              <ul className="flex flex-col h-full justify-between">
                {quickLinksCol1.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-text-muted hover:text-white transition-colors font-inter font-semibold text-[13px] uppercase"
                      style={{ lineHeight: '26px' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Column 2: Privacy Policy — pushed to bottom to match original site */}
              <ul className="flex flex-col h-full">
                <li>
                  <Link
                    href="#"
                    className="text-text-muted hover:text-white transition-colors font-inter font-semibold text-[13px] uppercase"
                    style={{ lineHeight: '26px' }}
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Two social bars side by side — no borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

          {/* YouTube bar */}
          <a
            href="https://www.youtube.com/@EditionStudiosOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-bg-card rounded-2xl px-8 py-5 group hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-text-muted group-hover:text-white transition-colors">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span className="font-inter font-light text-white text-[12px] uppercase" style={{ lineHeight: '24px' }}>YouTube</span>
            </div>
            <span className="text-text-muted group-hover:text-white group-hover:translate-x-1 transition-all duration-200 text-lg">→</span>
          </a>

          {/* Instagram bar */}
          <a
            href="https://www.instagram.com/_edition.studio_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-bg-card rounded-2xl px-8 py-5 group hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-text-muted group-hover:text-white transition-colors">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="font-inter font-light text-white text-[12px] uppercase" style={{ lineHeight: '24px' }}>Instagram</span>
            </div>
            <span className="text-text-muted group-hover:text-white group-hover:translate-x-1 transition-all duration-200 text-lg">→</span>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 text-center text-text-muted font-inter font-light text-[15px]" style={{ lineHeight: '22.5px' }}>
          Copyright © 2025 Edition Studio. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
