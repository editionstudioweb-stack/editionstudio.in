"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const featuredProjects = [
  { title: "Sunfeast Wowzers", video: "https://res.cloudinary.com/dsmuedwc4/video/upload/q_auto/f_auto/v1779787331/edit7_guilc7.mp4" },
  { title: "Tata Motors",       video: "https://res.cloudinary.com/dsmuedwc4/video/upload/q_auto/f_auto/v1779787263/edit10_m1zmsd.mp4" },
  { title: "Rapido",            video: "https://res.cloudinary.com/dsmuedwc4/video/upload/q_auto/f_auto/v1779786606/edit8_pwqux0.mp4" },
  { title: "Redmi",             video: "https://res.cloudinary.com/dsmuedwc4/video/upload/q_auto/f_auto/v1779786511/edit11_phfp2h.mp4" },
  { title: "Samsung",         video: "https://res.cloudinary.com/dsmuedwc4/video/upload/q_auto/f_auto/v1780659868/1_g7vbq3.mp4" },
  { title: "Red Bull",         video: "https://res.cloudinary.com/dsmuedwc4/video/upload/q_auto/f_auto/v1780664279/5_t9kmcf.mp4" },
  { title: "project",         video: "https://res.cloudinary.com/dsmuedwc4/video/upload/q_auto/f_auto/v1780986489/7_1_c8ulok.mp4" },
];

// Duplicate for seamless infinite loop
const loopItems = [...featuredProjects, ...featuredProjects];

// Helper to generate a lightweight poster image from Cloudinary video URL
function getPosterUrl(videoUrl) {
  if (!videoUrl) return '';
  if (videoUrl.includes('cloudinary.com')) {
    let poster = videoUrl.replace(/\.mp4$/, '.jpg');
    // Using crop fill, width 400, height 533 (matches aspect ratio 3:4)
    poster = poster.replace('/video/upload/', '/video/upload/f_auto,q_auto,w_400,h_533,c_fill/');
    return poster;
  }
  return '';
}

/* ── Single video card with its own play/pause via IntersectionObserver ── */
function VideoItem({ project }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="flex-shrink-0 mx-2 overflow-hidden cursor-pointer group video-card"
      style={{ width: 'clamp(160px, 45vw, 320px)' }}
    >
      <div className="aspect-[3/4] relative">
        <video
          ref={videoRef}
          src={project.video}
          poster={getPosterUrl(project.video)}
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {project.title && (
          <p className="absolute bottom-4 left-4 right-4 font-syne text-white text-2xl" style={{ lineHeight: "28.8px" }}>
            {project.title}
          </p>
        )}
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <section className="section-pad bg-bg-primary overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="font-syne tracking-[-1.5552px] text-white uppercase max-w-xl" style={{ fontSize: "clamp(24px, 4vw, 38.88px)", lineHeight: 1.3 }}>Featured Projects That Define Excellence</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Link href="/portfolio" className="font-syne font-bold text-base text-accent-lime hover:text-white transition-colors flex items-center gap-2" style={{ lineHeight: "19.2px" }}>
              See All Projects <span>→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Infinite scrolling marquee — full width, no container constraint */}
      <div className="marquee-container overflow-hidden">
        <div className="marquee-track" style={{ animationDuration: "28s" }}>
          {loopItems.map((project, i) => (
            <VideoItem key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
