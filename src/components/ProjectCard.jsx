'use client';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index = 0, filterType = 'INDUSTRY', onClick }) {
  const hasVideo = Boolean(project.youtubeUrl);
  const displayTag = filterType === 'INDUSTRY'
    ? project.industry
    : (project.typeOfEdit ? (Array.isArray(project.typeOfEdit) ? project.typeOfEdit.join(' / ') : project.typeOfEdit) : 'Edit');

  return (
    <motion.div
      layout
      className="relative rounded-2xl overflow-hidden bg-bg-card border border-white/8 group cursor-pointer aspect-[4/3]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => onClick && onClick(project)}
    >
      <img
        src={project.thumbnail}
        alt={project.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
        <span className="inline-block font-inter font-semibold text-accent-lime uppercase mb-2" style={{ fontSize: '10px', lineHeight: '16px', letterSpacing: '0.5px' }}>
          {displayTag}
        </span>
        <h3 className="font-inter font-semibold text-white text-[18px]" style={{ lineHeight: '23.4px' }}>{project.name}</h3>
      </div>

      {/* Play button — 1.5× circle, bottom-right, vertically aligned with hover text */}
      {hasVideo && (
        <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-1 group-hover:translate-y-0">
          <div className="w-[54px] h-[54px] rounded-full bg-black/75 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <svg width="18" height="21" viewBox="0 0 12 14" fill="none">
              <path d="M1 1.5l10 5.5-10 5.5V1.5z" fill="white"/>
            </svg>
          </div>
        </div>
      )}

      {/* Always visible industry/edit tag (bottom) */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-0 group-hover:opacity-0 transition-opacity duration-300">
        <span className="font-inter font-semibold text-text-muted uppercase" style={{ fontSize: '10px', lineHeight: '16px', letterSpacing: '0.5px' }}>
          {displayTag}
        </span>
      </div>
    </motion.div>
  );
}
