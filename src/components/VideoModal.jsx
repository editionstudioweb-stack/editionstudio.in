'use client';
import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  // Handle YouTube Shorts links
  const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
  if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}?autoplay=1&rel=0`;
  // Handle youtu.be short links
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}?autoplay=1&rel=0`;
  // Handle full youtube.com links
  const fullMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (fullMatch) return `https://www.youtube.com/embed/${fullMatch[1]}?autoplay=1&rel=0`;
  return null;
}

export default function VideoModal({ project, onClose }) {
  const embedUrl = getYouTubeEmbedUrl(project?.youtubeUrl);

  const handleKeyDown = useCallback(
    (e) => { if (e.key === 'Escape') onClose(); },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          {/* Blurred backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

          {/* Modal panel */}
          <motion.div
            className="relative w-full max-w-4xl z-10"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4 px-1">
              <div>
                <span className="text-xs font-montserrat font-bold text-accent-lime uppercase tracking-widest2">
                  {project.industry}
                </span>
                <h2 className="text-white font-montserrat font-bold text-xl mt-0.5">
                  {project.name}
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close video"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 1l14 14M15 1L1 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Video container */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
              style={{ paddingBottom: '56.25%' /* 16:9 */ }}>
              {project?.youtubeUrl && (project.youtubeUrl.endsWith('.mp4') || project.youtubeUrl.includes('/video/upload')) ? (
                <video
                  src={project.youtubeUrl}
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                  controls
                  autoPlay
                  playsInline
                />
              ) : embedUrl ? (
                <iframe
                  src={embedUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  title={project.name}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-bg-card">
                  <p className="text-text-muted font-inter text-sm">No video linked yet.</p>
                </div>
              )}
            </div>

            {/* Hint */}
            <p className="text-center text-text-muted font-inter text-xs mt-4">
              Press <kbd className="bg-white/10 border border-white/15 rounded px-1.5 py-0.5 text-white text-xs">Esc</kbd> or click outside to close
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
