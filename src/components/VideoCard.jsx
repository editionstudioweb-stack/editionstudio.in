'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function VideoCard({ videoUrl, title, index = 0 }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setPlaying(false);
    }
  };

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden bg-bg-card border border-white/8 cursor-pointer group video-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aspect-[9/16] relative">
        <video
          ref={videoRef}
          src={videoUrl}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
        {/* Overlay when not playing */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-400 ${
            playing ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      {title && (
        <div className="p-4">
          <p className="font-montserrat font-semibold text-white text-sm">{title}</p>
        </div>
      )}
    </motion.div>
  );
}
