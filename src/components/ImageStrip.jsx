'use client';

const serviceImages = [
  { label: 'VFX', img: 'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097640/ipieejmspp5vgmljiapnih3bo_spn9zw.avif' },
  { label: 'Filming', img: 'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097643/qqrms237jwcryf1liq7uoegb6m_v3d5pb.avif' },
  { label: 'Scriptwriting', img: 'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097645/6h961wxsjc6sfmc21aeuuc54tk_fxqahj.jpg' },
  { label: 'Color Grading', img: 'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097643/dihlauywfo7pgbntgagk7dvdagg_kqypvo.avif' },
  { label: 'Motion Graphics', img: 'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097623/c0ur83ftmqvdunc1it8aoj9z2ku_xec9ls.avif' },
];

const doubled = [...serviceImages, ...serviceImages, ...serviceImages, ...serviceImages];

export default function ImageStrip() {
  return (
    <>
      <style>{`
        /* Keep marquee running on hover — overrides the global pause rule */
        .strip-marquee-container:hover .marquee-track {
          animation-play-state: running !important;
        }

        /* Dot pulse — scale only, wrapper never moves */
        @keyframes dot-pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(0.4); }
        }

        .strip-dot-wrap {
          flex-shrink: 0;
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
        }

        .strip-dot {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background-color: #AAFF00;
          animation: dot-pulse 1.4s ease-in-out infinite;
        }

        .strip-label {
          flex-shrink: 0;
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 5.5vw, 60px);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -5.4px;
          white-space: nowrap;
          background: radial-gradient(37.2% 50% at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          z-index: 2; /* text always above the image */
        }

        /* Each item anchors its hover image — stretches full track height
           so hover works anywhere vertically in the section column */
        .strip-item {
          display: flex;
          align-items: center;
          gap: 50px;
          flex-shrink: 0;
          position: relative;
          align-self: stretch;
        }

        /*
          Hover image sits BEHIND the text (z-index 1).
          Default: large scale + no rotation → invisible.
          Hover: settles to final size, rotated, visible.
        */
        .strip-hover-img {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 260px;
          height: 236px; /* aspect-ratio ≈ 1.1004 */
          border-radius: 14px;
          overflow: hidden;
          transform-origin: 50% 50% 0px;
          will-change: transform, opacity;
          opacity: 0;
          z-index: 1; /* BEHIND text and dot */
          pointer-events: none;
          /* start: centred, large, upright */
          transform: translate(-50%, -50%) scale(1.75) rotate(-12deg);
          transition: opacity 1.25s ease, transform 1.25s ease;
        }

        /* On hover: shrinks, rotates to the right */
        .strip-item:hover .strip-hover-img {
          opacity: 1;
          transform: translate(-50%, -50%) scale(.75) rotate(4deg);
        }

        .strip-hover-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>

      {/*
        Section is tall (160px top+bottom padding) so images fit inside.
        overflow: hidden keeps everything clipped within the section.
      */}
      <section
        className="bg-bg-primary"
        style={{ overflow: 'hidden' }}
      >
        <div
          className="marquee-container strip-marquee-container"
          style={{ overflow: 'hidden' }}
        >
          <div
            className="marquee-track"
            style={{
              animationDuration: '35s',
              gap: '50px',
              /* Explicit height + centered items.
                 strip-item uses align-self:stretch so it fills
                 the full track height — hover works the entire section height */
              height: 'clamp(220px, 30vw, 340px)',
              alignItems: 'center',
            }}
          >
            {doubled.map((item, i) => (
              <div key={i} className="strip-item">
                {/* Hover image — z-index 1, BEHIND text and dot */}
                <div className="strip-hover-img">
                  <img src={item.img} alt={item.label} loading="lazy" />
                </div>

                {/* Images originally in strip — commented out as requested */}
                {/*
                <div className="w-60 h-44 rounded-2xl overflow-hidden flex-shrink-0 relative group">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl" />
                </div>
                */}

                <span className="strip-label">{item.label}</span>
                <span className="strip-dot-wrap">
                  <span className="strip-dot" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
