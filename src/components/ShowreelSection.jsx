"use client";

import { useEffect, useRef, useState } from "react";

const SHOWREEL_URL = "https://res.cloudinary.com/dsmuedwc4/video/upload/q_auto/f_auto/v1779787415/edit9_nnuwtd.mp4";
const SHOWREEL_POSTER = "https://res.cloudinary.com/dsmuedwc4/video/upload/f_auto,q_auto,w_800,c_fill,so_0/v1779787415/edit9_nnuwtd.jpg";

export default function ShowreelSection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    let rafId;

    const fit = () => {
      const container = containerRef.current; 
      const text = textRef.current;
      if (!container || !text) return;

      text.style.transform = "none";
      text.style.fontSize = "100px";
      text.style.width = "fit-content";

      const containerWidth = container.offsetWidth;
      const textWidth = text.offsetWidth;
      text.style.width = "";

      if (!textWidth) return;

      const newSize = (containerWidth / textWidth) * 100;
      text.style.fontSize = `${newSize}px`;
    };

    fit();
    document.fonts.ready.then(fit);

    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(fit);
    });

    if (containerRef.current) ro.observe(containerRef.current);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  // Lazy-load video only when section is near viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Auto-play once loaded and visible
  useEffect(() => {
    if (!shouldLoad || !videoRef.current) return;
    const video = videoRef.current;

    const playObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    playObserver.observe(video);
    return () => playObserver.disconnect();
  }, [shouldLoad]);

  return (
    <section
      id="showreel-section"
      className="relative bg-bg-secondary"
    >
      {/* SHOWREEL text — sticks to top when scrolled */}
      <div
        ref={containerRef}
        className="sticky top-0 z-10 w-full overflow-hidden"
        style={{ padding: 0, margin: 0 }}
      >
        <h2
          ref={textRef}
          className="select-none font-syne"
          style={{
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.05em",
            textTransform: "uppercase",
            background:
              "linear-gradient(180deg, #ffffff 0%, #f0f0f0 40%, #c0c0c0 70%, #6a6a6a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            whiteSpace: "nowrap",
            margin: 0,
            padding: 0,
            display: "block",
          }}
        >
          SHOWREEL
        </h2>
      </div>

      {/* Video scrolls up over the text */}
      <div className="relative w-full z-20">
        <div className="aspect-video w-full overflow-hidden">
          <video
            ref={videoRef}
            src={shouldLoad ? SHOWREEL_URL : undefined}
            poster={SHOWREEL_POSTER}
            autoPlay={false}
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover block"
          />
        </div>
      </div>
    </section>
  );
}
