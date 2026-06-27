'use client';
import { useEffect } from 'react';

export default function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace('#', '');

    // Retry a few times to handle SSR hydration delay
    let attempts = 0;
    const maxAttempts = 10;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };

    // Small initial delay so the page fully renders first
    setTimeout(tryScroll, 150);
  }, []);

  return null;
}
