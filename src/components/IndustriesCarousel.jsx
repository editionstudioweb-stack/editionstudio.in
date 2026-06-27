'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { industryVideos } from '@/data/socialAccounts';

// Card size per absolute-offset position (desktop baseline)
const CARD_SIZES_BASE = [
  { w: 370, h: 480 }, // abs=0  center
  { w: 303, h: 408 }, // abs=1  adjacent
  { w: 234, h: 336 }, // abs=2  side
  { w: 234, h: 336 }, // abs=3  pre-render buffer (invisible)
];

const SIDE_STEP_BASE = 200;   // px between card centres (desktop)
const N          = industryVideos.length;
const AUTO_MS    = 3000;  // auto-advance every 3 s

// Hook: returns current window inner width (updates on resize)
function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler, { passive: true });
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
}

// Helper to generate a lightweight poster image from Cloudinary video URL
function getPosterUrl(videoUrl) {
  if (!videoUrl) return '';
  if (videoUrl.includes('cloudinary.com')) {
    let poster = videoUrl.replace(/\.mp4$/, '.jpg');
    // Using crop fill, width 370, height 480 (matches CARD_SIZES_BASE[0])
    poster = poster.replace('/video/upload/', '/video/upload/f_auto,q_auto,w_370,h_480,c_fill/');
    return poster;
  }
  return '';
}

export default function IndustriesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowWidth();

  // Scale factor: shrink cards on small screens, keep desktop at 1.0
  const scale = Math.min(1, (windowWidth - 24) / 800);
  const CARD_SIZES = CARD_SIZES_BASE.map(({ w, h }) => ({
    w: Math.round(w * scale),
    h: Math.round(h * scale),
  }));
  const SIDE_STEP = Math.round(SIDE_STEP_BASE * scale);
  // Refs keyed by videoIndex — each video element keeps its DOM node
  // for as long as it stays within the ±3 render window
  const videoRefs  = useRef({});
  const dragStartX = useRef(null);
  const timerRef   = useRef(null);

  // ── navigation ──────────────────────────────────────────────────
  const advance = useCallback((dir) => {
    setActiveIndex((i) => ((i + dir) % N + N) % N);
  }, []);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => advance(1), AUTO_MS);
  }, [advance]);

  // Start auto-advance on mount, clear on unmount
  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  // ── play / pause ─────────────────────────────────────────────────
  // Only the center video (offset=0) plays; all others pause.
  useEffect(() => {
    for (let offset = -3; offset <= 3; offset++) {
      const vi = ((activeIndex + offset) % N + N) % N;
      const v  = videoRefs.current[vi];
      if (!v) continue;
      if (offset === 0) {
        v.play().catch(() => {});
      } else {
        v.pause();
        v.currentTime = 0;
      }
    }
  }, [activeIndex]);

  // ── drag / swipe ─────────────────────────────────────────────────
  const handlePointerDown = (e) => {
    dragStartX.current = e.clientX ?? e.touches?.[0]?.clientX;
  };
  const handlePointerUp = (e) => {
    if (dragStartX.current === null) return;
    const endX = e.clientX ?? e.changedTouches?.[0]?.clientX;
    const diff = dragStartX.current - endX;
    if (Math.abs(diff) > 50) { advance(diff > 0 ? 1 : -1); resetTimer(); }
    dragStartX.current = null;
  };

  // ── build card list (±3) ─────────────────────────────────────────
  // abs=3 cards are invisible (opacity:0) — they pre-load the next/prev
  // video so it slides in smoothly without a flash when it reaches abs=2.
  const cards = [];
  for (let offset = -3; offset <= 3; offset++) {
    const abs        = Math.abs(offset);
    const videoIndex = ((activeIndex + offset) % N + N) % N;
    const item       = industryVideos[videoIndex];
    const { w, h }   = CARD_SIZES[abs];          // abs=3 reuses abs=2 size
    const opacity    = abs === 0 ? 1 : abs === 1 ? 0.6 : abs === 2 ? 0.4 : 0;
    const zIndex     = abs === 0 ? 30 : abs === 1 ? 20 : abs === 2 ? 10 : 5;
    cards.push({ offset, abs, videoIndex, item, w, h, opacity, zIndex });
  }

  return (
    <section className="section-pad overflow-hidden" style={{ background: '#0B0B0B' }}>
      <div className="max-w-8xl mx-auto px-6 lg:px-12">

        {/* ── heading ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-syne text-white mb-3 uppercase" style={{ fontSize: 'clamp(22px, 4vw, 38.88px)', lineHeight: 1.3, letterSpacing: '-1.5552px' }}>
            Crafting Work for All Fields
          </h2>
          <p className="text-text-muted font-inter font-normal max-w-xl mx-auto" style={{ fontSize: 'clamp(16px, 2.5vw, 30px)', lineHeight: 1.4, letterSpacing: '-1.2px' }}>
            High-impact visuals for factories, manufacturing, and engineering brands.
          </p>
        </motion.div>

        {/* ── carousel stage ── */}
        <div
          className="relative select-none"
          style={{ height: `${CARD_SIZES[0].h + 40}px` }}
          onMouseDown={handlePointerDown}
          onMouseUp={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchEnd={handlePointerUp}
        >
          {cards.map(({ offset, abs, videoIndex, item, w, h, opacity, zIndex }) => (
            /*
             * key = videoIndex   → same DOM node slides as the card moves through positions.
             *                      The node is created once (when the card enters the ±3 window)
             *                      and destroyed once (when it leaves). Because abs=3 cards are
             *                      opacity:0, both the creation flash and the exit flash are invisible.
             */
            <div
              key={videoIndex}
              onClick={() => { setActiveIndex(videoIndex); resetTimer(); }}
              className="absolute cursor-pointer rounded-2xl overflow-hidden"
              style={{
                width     : `${w}px`,
                height    : `${h}px`,
                top       : '50%',
                left      : '50%',
                marginTop : `-${h / 2}px`,
                marginLeft: `-${w / 2}px`,
                transform : `translateX(${offset * SIDE_STEP}px)`,
                opacity,
                zIndex,
                // animate size, position, and opacity — all the sliding + resizing is here
                transition:
                  'width 0.5s cubic-bezier(.25,.46,.45,.94),' +
                  'height 0.5s cubic-bezier(.25,.46,.45,.94),' +
                  'margin 0.5s cubic-bezier(.25,.46,.45,.94),' +
                  'transform 0.5s cubic-bezier(.25,.46,.45,.94),' +
                  'opacity 0.5s ease',
                willChange: 'transform, opacity, width, height',
              }}
            >
              {/* video — no key here, so React never recreates the element */}
              <video
                ref={(el) => { videoRefs.current[videoIndex] = el; }}
                src={item.video}
                poster={getPosterUrl(item.video)}
                muted
                loop
                playsInline
                preload="none"
                className="w-full h-full object-cover"
              />

              {/* gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to bottom,rgba(0,0,0,0.6) 0%,transparent 38%,rgba(0,0,0,0.3) 100%)',
                }}
              />

              {/* label (only on visible cards) */}
              {abs <= 2 && (
                <div className="absolute top-5 left-5 z-10">
                  <p
                    className="font-inter font-bold text-white"
                    style={{
                      fontSize: abs === 0 ? '24px' : abs === 1 ? '18px' : '14px',
                      lineHeight: abs === 0 ? '24px' : abs === 1 ? '18px' : '14px'
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── prev / next ── */}
        <div className="flex items-center justify-center gap-14 mt-10">
          <button
            id="industries-prev-btn"
            onClick={() => { advance(-1); resetTimer(); }}
            className="group flex items-center gap-2 font-sans font-semibold text-white/75 hover:text-white transition-colors duration-200"
            style={{ fontSize: '15px', lineHeight: 'normal', letterSpacing: 'normal' }}
          >
            <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">←</span>
            <span>Prev</span>
          </button>

          <button
            id="industries-next-btn"
            onClick={() => { advance(1); resetTimer(); }}
            className="group flex items-center gap-2 font-sans font-semibold text-white/75 hover:text-white transition-colors duration-200"
            style={{ fontSize: '15px', lineHeight: 'normal', letterSpacing: 'normal' }}
          >
            <span>Next</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* ── cta ── */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/services" className="btn-outline">
            View Showcase →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
