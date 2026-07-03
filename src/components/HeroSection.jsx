'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LightRays from './LightRays';

/* ─── Service card data ─────────────────────────────────────────── */
const serviceCards = [
  {
    id: 'video-editing',
    title: 'Video Editing',
    desc: 'Cinematic edits that elevate your brand',
    href: '/services#video-editing',
    position: 'top-left',
    rotation: -6,
    floatDelay: '0s',
    delay: 0,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AAFF00" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M10 10l5-3v6l-5-3z" fill="#AAFF00" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'production',
    title: 'Production',
    desc: 'High quality production that tells your story',
    href: '/services#visual-production',
    position: 'top-right',
    rotation: 6,
    floatDelay: '1.5s',
    delay: 0.15,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AAFF00" strokeWidth="2">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" fill="#AAFF00" stroke="none" />
        <path d="M22 7l-2 2M17 2l-1 2" />
      </svg>
    ),
  },
  {
    id: 'scripting',
    title: 'Scripting',
    desc: 'Words that connect. Stories that convert.',
    href: '/services#idea-to-script',
    position: 'bottom-left',
    rotation: -4,
    floatDelay: '2s',
    delay: 0.3,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AAFF00" strokeWidth="2">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    id: 'social-media',
    title: 'Social Media Growth',
    desc: 'Strategy. Content. Growth. All in one place.',
    href: '/services#social-media-growth',
    position: 'bottom-right',
    rotation: 4,
    floatDelay: '3s',
    delay: 0.45,
    stat: '+287% Engagement',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AAFF00" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

/* Card absolute positions — carefully tuned to reference image */
const CARD_POSITIONS = {
  'top-left': { top: '16%', left: '8%' },
  'top-right': { top: '18%', right: '8%' },
  'bottom-left': { bottom: '18%', left: '10%' },
  'bottom-right': { bottom: '18%', right: '10%' },
};

/* ─── Glassmorphism Service Card ────────────────────────────────── */
function ServiceCard({ card }) {
  const pos = CARD_POSITIONS[card.position];
  return (
    <motion.div
      className="absolute z-20 hidden lg:block"
      style={{
        ...pos,
        animation: `float 6s ease-in-out ${card.floatDelay} infinite`,
      }}
      initial={{ opacity: 0, scale: 0.85, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.9, delay: card.delay, ease: 'easeOut' }}
    >
      <Link
        href={card.href}
        style={{
          display: 'block',
          transform: `rotate(${card.rotation}deg)`,
          width: '200px',
          background: 'rgba(20, 30, 20, 0.7)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '24px',
          padding: '18px 18px 14px',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
          textDecoration: 'none',
          transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(170,255,0,0.35)';
          e.currentTarget.style.boxShadow = '0 0 24px rgba(170,255,0,0.12), inset 0 1px 0 rgba(255,255,255,0.05)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.05)';
        }}
      >
        {/* Icon box */}
        <div
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'rgba(170,255,0,0.12)',
            border: '1px solid rgba(170,255,0,0.22)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10px',
          }}
        >
          {card.icon}
        </div>

        <h3
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            color: '#fff',
            fontSize: '14px',
            marginBottom: '5px',
          }}
        >
          {card.title}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            color: 'rgba(255,255,255,0.48)',
            fontSize: '12px',
            lineHeight: '1.5',
            marginBottom: card.stat ? '8px' : '12px',
          }}
        >
          {card.desc}
        </p>

        {/* Stats badge (social media card only) */}
        {card.stat && (
          <div
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              color: '#AAFF00',
              background: 'rgba(170,255,0,0.13)',
              border: '1px solid rgba(170,255,0,0.25)',
              borderRadius: '999px',
              padding: '3px 10px',
              marginBottom: '10px',
            }}
          >
            {card.stat}
          </div>
        )}

        {/* Arrow button — bottom-right */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <span
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: 'rgba(170,255,0,0.14)',
              border: '1px solid rgba(170,255,0,0.28)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#AAFF00" strokeWidth="2.5">
              <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Waveform bars (spread horizontally behind play button) ────── */
const WAVE_BARS = [2, 5, 3, 8, 4, 11, 7, 14, 9, 6, 12, 5, 10, 8, 13, 5, 7, 12, 6, 9, 4, 11, 8, 14, 6, 10, 5, 7, 3, 8, 4];

function Waveform() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '22%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'flex-end',
        gap: '3px',
        zIndex: 10,
        pointerEvents: 'none',
        opacity: 0.55,
        width: '340px',
        justifyContent: 'center',
      }}
    >
      {WAVE_BARS.map((h, i) => (
        <div
          key={i}
          style={{
            width: '4px',
            height: `${h * 2.2}px`,
            borderRadius: '2px',
            background: 'linear-gradient(to top, #AAFF00, rgba(170,255,0,0.15))',
            animation: `waveBar 1.4s ease-in-out ${(i * 0.06).toFixed(2)}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Glass Play Button (rounded square + platform) ────────────── */
function PlayButton() {
  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Dark glass rounded-square button */}
      <div
        style={{
          width: '96px',
          height: '96px',
          borderRadius: '24px',
          background: 'rgba(10, 18, 10, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1.5px solid rgba(255,255,255,0.12)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative',
          zIndex: 2,
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.07)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {/* Green play triangle */}
        <svg width="34" height="34" viewBox="0 0 24 24" style={{ marginLeft: '4px' }}>
          <path d="M6 4l14 8-14 8V4z" fill="#AAFF00" />
        </svg>
      </div>

      {/* Dark circular platform/glow beneath */}
      <div
        style={{
          width: '120px',
          height: '18px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)',
          boxShadow: '0 0 40px 10px rgba(0,0,0,0.8), 0 0 20px 4px rgba(170,255,0,0.06)',
          marginTop: '-6px',
          position: 'relative',
          zIndex: 1,
        }}
      />
    </div>
  );
}

/* ─── Main HeroSection ──────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#000000',
        paddingTop: '80px',
      }}
    >


      {/* ── Subtle center radial glow ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(170,255,0,0.035) 0%, transparent 70%)',
        }}
      />

      {/* ── Light Rays Background ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#AAFF00"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          pulsating={true}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.05}
          distortion={0.05}
        />
      </div>

      {/* ── Bottom-left: impact tagline ── */}
      <motion.div
        className="hidden md:flex"
        style={{
          position: 'absolute',
          bottom: '28px',
          left: '20px',
          zIndex: 30,
          alignItems: 'center',
          gap: '8px',
          fontSize: '12px',
          fontFamily: "'Inter', sans-serif",
          color: 'rgba(255,255,255,0.55)',
        }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#AAFF00',
            display: 'inline-block',
            flexShrink: 0,
          }}
        />
        <span>
          We don&apos;t just create content. We create{' '}
          <span style={{ color: '#AAFF00' }}>impact.</span>
        </span>
      </motion.div>

      {/* ── Bottom-right: Let's build pill ── */}
      <motion.div
        className="hidden md:flex"
        style={{
          position: 'absolute',
          bottom: '28px',
          right: '20px',
          zIndex: 30,
          alignItems: 'center',
          gap: '7px',
          padding: '6px 14px',
          borderRadius: '999px',
          border: '1px solid rgba(255,255,255,0.10)',
          background: 'rgba(20,20,20,0.75)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          fontSize: '11px',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 600,
          color: 'rgba(255,255,255,0.65)',
          whiteSpace: 'nowrap',
        }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.1 }}
      >
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#AAFF00',
            display: 'inline-block',
            animation: 'pulse-glow 2s ease-in-out infinite',
          }}
        />
        Let&apos;s build something iconic.
      </motion.div>

      {/* ── Floating service cards ── */}
      {serviceCards.map((card) => (
        <ServiceCard key={card.id} card={card} />
      ))}

      {/* ── Center content ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 20,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 24px',
          maxWidth: '680px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        {/* ● EDITION STUDIO badge */}
        <motion.div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(18,18,18,0.8)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            fontSize: '11px',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            color: 'rgba(255,255,255,0.75)',
            letterSpacing: '0.12em',
            marginBottom: '24px',
          }}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#AAFF00',
              display: 'inline-block',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }}
          />
          EDITION STUDIO
        </motion.div>

        {/* Main heading */}
        <motion.h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <span
            style={{
              display: 'block',
              fontSize: 'clamp(36px, 5.5vw, 68px)',
              color: '#ffffff',
            }}
          >
            Your Brand Deserves Better
          </span>
          <span
            style={{
              display: 'block',
              fontSize: 'clamp(36px, 5.5vw, 68px)',
              color: '#AAFF00',
              marginTop: '4px',
            }}
          >
            Visual Storytelling
          </span>
        </motion.h1>

        {/* Sub text */}
        <motion.p
          style={{
            fontSize: '13px',
            fontFamily: "'Inter', sans-serif",
            color: 'rgba(255,255,255,0.48)',
            letterSpacing: '0.03em',
            marginBottom: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
        >
          {['Video Editing', 'Production', 'Scriptwriting', 'Social Media Growth'].map((item, i) => (
            <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {item}
              {i < 3 && (
                <span
                  className="hidden sm:inline"
                  style={{ color: 'rgba(255,255,255,0.22)' }}
                >
                  •
                </span>
              )}
            </span>
          ))}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-[14px] w-full max-w-[280px] sm:max-w-none mx-auto"
          style={{
            marginBottom: '40px',
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.52 }}
        >
          <Link
            href="/contact"
            id="hero-cta-project"
            className="w-full sm:w-auto justify-center"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '13px 28px',
              borderRadius: '103px',
              background: 'radial-gradient(127.9% 258% at -40.3% 0%, rgb(255,255,255) 39.3%, rgb(154,205,21) 62.1%, rgb(154,205,21) 100%)',
              border: 'none',
              color: 'rgb(13,13,13)',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: '14px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.04)';
              e.currentTarget.style.boxShadow = '0 4px 28px rgba(154,205,21,0.45)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Start Your Project
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <button
            id="hero-cta-reel"
            className="w-full sm:w-auto justify-center"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '13px 24px',
              borderRadius: '54px',
              background: 'radial-gradient(50% 50% at 4.7% 0%, rgb(154,205,21) 0%, rgb(151,199,30) 100%)',
              border: '1px solid rgb(255,255,255)',
              color: 'rgb(255,255,255)',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.04)';
              e.currentTarget.style.boxShadow = '0 4px 22px rgba(154,205,21,0.35)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => {
              document.getElementById('showreel-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Watch Reel
            <span
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="rgb(13,13,13)">
                <path d="M6 4l14 8-14 8V4z" />
              </svg>
            </span>
          </button>
        </motion.div>

        {/* Glassmorphism play button */}

      </div>


      {/* ── Bottom bar: BRANDS • STORIES • IMPACT ── */}
      <motion.div
        className="hidden md:flex"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '14px 0',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {['BRANDS', 'STORIES', 'IMPACT'].map((word, i) => (
          <span key={word} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '0.25em',
                color: 'rgba(255,255,255,0.38)',
              }}
            >
              {word}
            </span>
            {i < 2 && (
              <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: '11px' }}>•</span>
            )}
          </span>
        ))}
      </motion.div>

      {/* ── Keyframe for waveBar animation ── */}
      <style>{`
        @keyframes waveBar {
          0%   { transform: scaleY(0.4); opacity: 0.5; }
          100% { transform: scaleY(1.0); opacity: 1;   }
        }
      `}</style>
    </section>
  );
}
