'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import VideoModal from '@/components/VideoModal';
import { projects, industries, editTypes } from '@/data/projects';
import PageHeroSection from '@/components/PageHeroSection';

export default function PortfolioPage() {
  const [filterType, setFilterType] = useState('INDUSTRY'); // 'INDUSTRY' or 'TYPE_OF_EDIT'
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const currentFilters = filterType === 'INDUSTRY' ? industries : editTypes;

  const filtered = filterType === 'INDUSTRY'
    ? (activeFilter === 'All'
        ? projects.filter((p) => p.industry)
        : projects.filter((p) => p.industry === activeFilter))
    : (activeFilter === 'All'
        ? projects.filter((p) => p.typeOfEdit)
        : projects.filter((p) => {
            if (!p.typeOfEdit) return false;
            if (Array.isArray(p.typeOfEdit)) {
              return p.typeOfEdit.includes(activeFilter);
            }
            return p.typeOfEdit === activeFilter;
          }));

  return (
    <>
      {/* Hero */}
      <PageHeroSection
        bgImage="https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097634/hqnhgnm6vlu1pxjmiycb3p7vt0_wifmpi.jpg"
        title="Portfolio"
        subtitle="Polishing your message through precise editing"
      />



      {/* Filter Bar */}
      <section className="bg-bg-secondary/90 py-6 sticky top-20 z-30 border-b border-white/5 backdrop-blur-xl">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 flex flex-col items-center gap-6">
          {/* Toggle pill */}
          <div className="bg-white rounded-full p-1 inline-flex items-center relative shadow-[0_4px_24px_rgba(0,0,0,0.25)] border border-white/5 select-none">
            {/* Option 1: INDUSTRY */}
            <button
              onClick={() => {
                setFilterType('INDUSTRY');
                setActiveFilter('All');
              }}
              className="relative px-5 py-2 rounded-full font-sans font-semibold text-[13px] uppercase transition-all duration-300 z-10 focus:outline-none"
              style={{ letterSpacing: '1.04px' }}
            >
              <span className={`relative z-10 transition-colors duration-300 ${filterType === 'INDUSTRY' ? 'text-white' : 'text-black/80 font-semibold'}`}>
                INDUSTRY
              </span>
              {filterType === 'INDUSTRY' && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-[#9acd15] rounded-full z-0 shadow-md shadow-[#9acd15]/30"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>

            {/* Option 2: TYPE OF EDIT */}
            <button
              onClick={() => {
                setFilterType('TYPE_OF_EDIT');
                setActiveFilter('All');
              }}
              className="relative px-5 py-2 rounded-full font-sans font-semibold text-[13px] uppercase transition-all duration-300 z-10 focus:outline-none"
              style={{ letterSpacing: '1.04px' }}
            >
              <span className={`relative z-10 transition-colors duration-300 ${filterType === 'TYPE_OF_EDIT' ? 'text-white' : 'text-black/80 font-semibold'}`}>
                TYPE OF EDIT
              </span>
              {filterType === 'TYPE_OF_EDIT' && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-[#9acd15] rounded-full z-0 shadow-md shadow-[#9acd15]/30"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          </div>

          {/* Filters List */}
          <div className="flex flex-wrap justify-center gap-2 w-full">
            {currentFilters.map((filterVal) => (
              <button
                key={filterVal}
                id={`filter-${filterVal.replace(/[\s&]+/g, '-').toLowerCase()}`}
                onClick={() => setActiveFilter(filterVal)}
                className={`px-4 py-2 rounded-full text-[14px] font-inter font-medium uppercase transition-all duration-200 ${
                  activeFilter === filterVal
                    ? 'bg-accent-lime text-black shadow-lg shadow-[#AAFF00]/20'
                    : 'bg-transparent border border-white/15 text-text-muted hover:text-white hover:border-white/40'
                }`}
                style={{ lineHeight: '14px' }}
              >
                {filterVal}
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* Project Grid */}
      <section className="section-pad bg-bg-primary">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          {/* Result count */}
          <div className="mb-8">
            <p className="text-text-muted font-inter text-[15px] font-light" style={{ lineHeight: '22.5px' }}>
              Showing{' '}
              <span className="text-white font-semibold">{filtered.length}</span>{' '}
              project{filtered.length !== 1 ? 's' : ''}
              {activeFilter !== 'All' && (
                <span>
                  {' '}
                  {filterType === 'INDUSTRY' ? 'in' : 'with'}{' '}
                  <span className="text-accent-lime">{activeFilter}</span>
                </span>
              )}
            </p>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  filterType={filterType}
                  onClick={(p) => p.youtubeUrl && setSelectedProject(p)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <motion.div
              className="text-center py-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-text-muted font-inter text-base">No projects found for this filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedProject && (
          <VideoModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
