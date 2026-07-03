'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCounter } from '@/hooks/useCounter';
import { socialAccounts } from '@/data/socialAccounts';

/* ─── Data ─────────────────────────────────────────────── */
const instagramAccounts = socialAccounts.filter(a => a.platform === 'Instagram');
const youtubeAccounts = socialAccounts.filter(a => a.platform === 'YouTube');

const portfolioImages = [
  'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097644/gqxswc9djex5ps2d9mc6nefa_vyq6hs.png',
  'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097588/tfzkhzyapuhdzsur6k1qcksls_pmvvx6.png',
  'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097639/ahyampg806k0olisqbrwhavoa_zualzs.jpg',
  'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097640/ldb5yr2ealrgtddqfztfwams44_hcygfp.png',
  'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097627/njt23jzldkgdstvczthhash4kco_yjwki2.jpg',
];

/* ─── Shared card style ─────────────────────────────────── */
const cardStyle = {
  background: '#ffffff0a',
  border: '2px solid #ffffff80',
};

/* ─── Slide animation variants ──────────────────────────── */
const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: ({ x: 0, opacity: 1 }),
  exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
};
const slideTrans = { type: 'tween', duration: 0.38, ease: 'easeInOut' };

/* ─── Gradient-fade text mask style ────────────────────── */
const gradientTextStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  WebkitMaskImage: 'linear-gradient(to right, white 55%, transparent 95%)',
  maskImage: 'linear-gradient(to right, white 55%, transparent 95%)',
  width: '100%',
};

/* ─── Auto-cycling image carousel ──────────────────────── */
function useAutoCarousel(length, interval = 3000) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (length <= 1) return;
    const t = setInterval(() => setIndex(i => (i + 1) % length), interval);
    return () => clearInterval(t);
  }, [length, interval]);
  return index;
}

/* ─── Animated counter stat ─────────────────────────────── */
function AnimatedStat({ target, suffix, label, isLast }) {
  const { count, ref } = useCounter(target, 2200);
  const display = target >= 1000 ? count.toLocaleString() : count;
  return (
    <div ref={ref} style={{
      textAlign: 'center', flex: 1,
      padding: '6px 8px',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        fontSize: 'clamp(26px, 5vw, 44px)', fontFamily: 'Inter, sans-serif',
        fontWeight: 700, color: '#fff', lineHeight: 'normal', whiteSpace: 'nowrap',
      }}>
        {display}<span style={{ color: '#AAFF00' }}>{suffix}</span>
      </div>
      <p style={{ fontSize: 'clamp(13px, 2.5vw, 22px)', fontFamily: 'Inter, sans-serif', color: '#B0B0B0', marginTop: 8, lineHeight: 1.3, letterSpacing: '-0.44px', fontWeight: 400, textAlign: 'center' }}>
        {label}
      </p>
    </div>
  );
}

/* ─── Dot indicators ────────────────────────────────────── */
function Dots({ count, active, onClick }) {
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
      {Array.from({ length: count }).map((_, i) => (
        <button key={i} onClick={() => onClick(i)} aria-label={`Slide ${i + 1}`} style={{
          width: 10, height: 10, borderRadius: '50%',
          border: 'none', padding: 0, cursor: 'pointer', flexShrink: 0,
          background: i === active ? '#fff' : 'rgba(255,255,255,0.3)',
          transition: 'background 0.2s',
        }} />
      ))}
    </div>
  );
}

/* ─── Arrow button ──────────────────────────────────────── */
function ArrowBtn({ onClick, dir, label, style: extra }) {
  return (
    <button onClick={onClick} aria-label={label} style={{
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: '50%', width: 34, height: 34,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', fontSize: 20, cursor: 'pointer',
      transition: 'background 0.2s', flexShrink: 0,
      ...extra,
    }}
      onMouseEnter={e => e.currentTarget.style.background = 'rgba(170,255,0,0.18)'}
      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
    >
      {dir === 'left' ? '‹' : '›'}
    </button>
  );
}

/* ─── Instagram Carousel ────────────────────────────────── */
function InstagramCarousel({ sharedIdx, direction, onPrev, onNext, setDotIdx }) {
  const igIdx = ((sharedIdx % instagramAccounts.length) + instagramAccounts.length) % instagramAccounts.length;
  const acc = instagramAccounts[igIdx];

  return (
    <>
      {/* Arrows — sit on card edges */}
      <ArrowBtn onClick={onPrev} dir="left" label="Previous" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }} />
      <ArrowBtn onClick={onNext} dir="right" label="Next" style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }} />

      {/* Animated slide */}
      <div style={{ width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={igIdx}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {/* Avatar */}
            <div style={{
              width: 130, height: 130,
              borderRadius: acc.isLogo ? 24 : '50%',
              overflow: 'hidden',
              marginBottom: 18,
              flexShrink: 0,
              background: acc.isLogo ? '#111' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <img
                src={acc.avatar}
                alt={acc.displayName}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: acc.isLogo ? 'contain' : 'cover',
                  padding: acc.isLogo ? 12 : 0,
                }}
              />
            </div>

            {/* Account name */}
            <p style={{
              fontSize: 'clamp(26px, 3.5vw, 36px)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#fff',
              lineHeight: '1.2',
              marginBottom: 10,
              textAlign: 'center',
              width: '100%',
              paddingLeft: 16,
              paddingRight: 16,
              wordBreak: 'break-word',
              letterSpacing: 'normal'
            }}>
              {acc.displayName}
            </p>

            <p style={{
              fontSize: 'clamp(18px, 2.5vw, 22px)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#fff',
              textAlign: 'center',
              width: '100%',
              paddingLeft: 16,
              paddingRight: 16,
              lineHeight: '1.3',
              letterSpacing: 'normal'
            }}>
              {acc.followers} {acc.followerLabel.toLowerCase()}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Button */}
      <a href={acc.link} target="_blank" rel="noopener noreferrer"
        className="btn-outline">
        Show Accounts
      </a>

      {/* Dots */}
      <Dots count={instagramAccounts.length} active={igIdx} onClick={(i) => setDotIdx(i)} />
    </>
  );
}

/* ─── YouTube Carousel ──────────────────────────────────── */
function YoutubeCarousel({ sharedIdx, direction, onPrev, onNext, setDotIdx }) {
  const ytIdx = ((sharedIdx % youtubeAccounts.length) + youtubeAccounts.length) % youtubeAccounts.length;
  const acc = youtubeAccounts[ytIdx];

  return (
    <>
      {/* Arrows — sit on card edges relative to avatar center */}
      <ArrowBtn onClick={onPrev} dir="left" label="Previous" style={{ position: 'absolute', left: 10, top: 110, zIndex: 10 }} />
      <ArrowBtn onClick={onNext} dir="right" label="Next" style={{ position: 'absolute', right: 10, top: 110, zIndex: 10 }} />

      {/* Animated slide */}
      <div style={{ width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={ytIdx}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {/* Avatar */}
            <div style={{
              width: 76, height: 76,
              borderRadius: '50%',
              overflow: 'hidden',
              marginBottom: 8,
              flexShrink: 0,
            }}>
              <img
                src={acc.avatar}
                alt={acc.displayName}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Account name */}
            <p style={{
              fontSize: 'clamp(18px, 2.5vw, 20px)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#fff',
              lineHeight: '1.2',
              marginBottom: 4,
              textAlign: 'center',
              width: '100%',
              paddingLeft: 12,
              paddingRight: 12,
              wordBreak: 'break-word',
              letterSpacing: 'normal'
            }}>
              {acc.displayName}
            </p>

            <p style={{
              fontSize: 'clamp(14px, 1.8vw, 16px)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#B0B0B0',
              lineHeight: '1.2',
              textAlign: 'center',
              width: '100%',
              paddingLeft: 12,
              paddingRight: 12,
              letterSpacing: 'normal'
            }}>
              {acc.followers} {acc.followerLabel.toLowerCase()}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Button — centered */}
      <a href={acc.link} target="_blank" rel="noopener noreferrer"
        className="btn-outline"
        style={{ fontSize: 13, padding: '10px 20px' }}>
        Show Accounts
      </a>

      {/* Dots — after button */}
      <Dots count={youtubeAccounts.length} active={ytIdx} onClick={(i) => setDotIdx(i)} />
    </>
  );
}

/* ─── Image Auto-Carousel — no arrows, no dots ──────────── */
function ImageCarousel() {
  const imgIdx = useAutoCarousel(portfolioImages.length, 3000);
  return (
    <>
      {portfolioImages.map((src, i) => (
        <img key={i} src={src} alt={`Portfolio ${i + 1}`} style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%', objectFit: 'cover',
          opacity: i === imgIdx ? 1 : 0,
          transition: 'opacity 0.9s ease',
        }} />
      ))}
    </>
  );
}

/* ─── Main Section ──────────────────────────────────────── */
export default function SocialStats() {
  /* Shared autoplay state — both Instagram & YouTube advance together */
  const [sharedIdx, setSharedIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  /* Autoplay every 3 seconds */
  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1);
      setSharedIdx(i => i + 1);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  const goNext = () => { setDirection(1); setSharedIdx(i => i + 1); };
  const goPrev = () => { setDirection(-1); setSharedIdx(i => i - 1); };

  /* Jump to dot index (for Instagram) */
  const setIgDot = (i) => {
    const cur = ((sharedIdx % instagramAccounts.length) + instagramAccounts.length) % instagramAccounts.length;
    setDirection(i > cur ? 1 : -1);
    setSharedIdx(prev => prev + (i - cur));
  };

  /* Jump to dot index (for YouTube) */
  const setYtDot = (i) => {
    const cur = ((sharedIdx % youtubeAccounts.length) + youtubeAccounts.length) % youtubeAccounts.length;
    setDirection(i > cur ? 1 : -1);
    setSharedIdx(prev => prev + (i - cur));
  };

  return (
    <section className="section-pad" style={{ background: '#0B0B0B' }}>
      <div className="max-w-8xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{
            fontSize: 'clamp(22px, 4vw, 38.88px)',
            fontFamily: 'Syne, sans-serif',
            color: '#fff',
            textTransform: 'uppercase',
            lineHeight: 1.3,
            letterSpacing: '-1.5552px',
          }}>
            We Are In Numbers
          </h2>
        </motion.div>

        {/* Outer flex row */}
        <div style={{ display: 'flex', gap: 25, alignItems: 'flex-start', justifyContent: 'center', textAlign: 'center' }}
          className="social-outer-row">

          {/* LEFT: Instagram card — 407 × 592 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              ...cardStyle,
              width: 407, minWidth: 407, height: 510,
              borderRadius: 34,
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', position: 'relative', gap: 18,
              flexShrink: 0,
              overflow: 'hidden',
            }}
            className="social-ig-card"
          >
            <h3 style={{
              fontSize: 'clamp(22px, 4vw, 38.88px)', fontFamily: 'Syne, sans-serif', fontWeight: 600,
              color: '#fff', lineHeight: 1.3, letterSpacing: '-1.5552px', margin: 0,
            }}>
              INSTAGRAM
            </h3>
            <InstagramCarousel
              sharedIdx={sharedIdx}
              direction={direction}
              onPrev={goPrev}
              onNext={goNext}
              setDotIdx={setIgDot}
            />
          </motion.div>

          {/* RIGHT column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Stats row — 648px */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                ...cardStyle,
                width: 648, borderRadius: 23,
                padding: '20px 20px',
                display: 'flex', alignItems: 'stretch',
              }}
              className="social-stats-bar"
            >
              <AnimatedStat target={97} suffix="%" label="Project Completion" isLast={false} />
              <AnimatedStat target={99} suffix="%" label="Client Satisfaction" isLast={false} />
              <AnimatedStat target={3000} suffix="+" label="Projects Delivered" isLast={true} />
            </motion.div>

            {/* YouTube + Image row */}
            <div style={{ display: 'flex', gap: 23, textAlign: 'center' }} className="social-yt-row">

              {/* YouTube card — 312.5 × 317 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  ...cardStyle,
                  width: 312.5, height: 317, minWidth: 312.5,
                  borderRadius: 34,
                  padding: '0px 20px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  justifyContent: 'center', gap: 14,
                  flexShrink: 0, overflow: 'hidden',
                  position: 'relative',
                }}
                className="social-yt-card"
              >
                <h3 style={{
                  fontSize: 'clamp(22px, 4vw, 38.88px)', fontFamily: 'Syne, sans-serif', fontWeight: 600,
                  color: '#fff', lineHeight: 1.3, letterSpacing: '-1.5552px', flexShrink: 0, margin: 0,
                }}>
                  YOUTUBE
                </h3>
                <YoutubeCarousel
                  sharedIdx={sharedIdx}
                  direction={direction}
                  onPrev={goPrev}
                  onNext={goNext}
                  setDotIdx={setYtDot}
                />
              </motion.div>

              {/* Image carousel — 312.5 × 317, no arrows, no dots */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                style={{
                  ...cardStyle,
                  width: 312.5, height: 317, minWidth: 312.5,
                  borderRadius: 34,
                  position: 'relative', overflow: 'hidden',
                  flexShrink: 0,
                }}
                className="social-img-card"
              >
                <ImageCarousel />
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .social-outer-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          /* Instagram card: full-width, auto height */
          .social-ig-card {
            width: 100% !important;
            min-width: unset !important;
            height: auto !important;
            padding: 32px 20px !important;
          }
          /* Stats bar: full-width */
          .social-stats-bar {
            width: 100% !important;
            padding: 32px 12px !important;
          }
          /* Stats bar numbers: smaller on mobile */
          .social-stats-bar > div > div:first-child {
            font-size: 32px !important;
          }
          /* YouTube + image row: stack on very small screens */
          .social-yt-row {
            flex-direction: column !important;
          }
          .social-yt-card,
          .social-img-card {
            width: 100% !important;
            min-width: unset !important;
            height: 260px !important;
          }
        }
        @media (max-width: 480px) {
          .social-stats-bar > div > div:first-child {
            font-size: 26px !important;
          }
          .social-stats-bar > div > p {
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
