"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import PageHeroSection from "@/components/PageHeroSection";


const showcaseProjects = [
  { name: "Audible", image: "https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097637/zj12luceeri6ojftfy9onqldu_podhp5.png", video: "https://framerusercontent.com/assets/Kg9n2J32SF5HrU1AIUDZIDWEfI.mp4" },
  { name: "Music Video", image: "https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097635/91ud6qtzaqbaqneoyj1oyzrazg_jaqw1e.png", video: "https://framerusercontent.com/assets/2rrNsJ5K0dIcGubAAJ11FpvuXq4.mp4" },
  { name: "Bag2Bag", image: "https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097620/numcbgwefuba6ussdgcwi1pcucc_ez7img.png", video: "https://framerusercontent.com/assets/8qOv2qq5PkiZTCgof9F1woOSD0.mp4" },
  { name: "Comp", image: "https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097646/yhmsuxxladhpn5d4plfqs7ezy_ul4cwg.png", video: "https://framerusercontent.com/assets/etKezjrBVYoF38SMl8freI4sSvc.mp4" },
  { name: "Kala Jadoo", image: "https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097651/60cacohf3fo7rpjo5s6ql1xdy_pdjdna.png", video: "https://framerusercontent.com/assets/QT9KYImnZW9gNYXjUewEBPCCNc.mp4" },
];

export default function OurWorkPage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const modalVideoRef = useRef(null);

  const handleOpen = (videoUrl) => setActiveVideo(videoUrl);
  const handleClose = () => {
    setActiveVideo(null);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    if (activeVideo) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  useEffect(() => {
    if (activeVideo && modalVideoRef.current) {
      modalVideoRef.current.play().catch(() => {});
    }
  }, [activeVideo]);

  return (
    <>
      {/* Hero */}
      <PageHeroSection
        bgImage="https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097626/zpvereyeghevskvaycquitxeyuu_awzsao.jpg"
        title="Our Work"
        subtitle="Explore our portfolio of compelling photo stories in the albums, showcasing our expertise."
      />



      {/* HOW WE WORK: Our 4-Step Creative Process Section */}
      <section className="section-pad bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#AAFF00]/[0.02] blur-3xl" />
        </div>

        <div className="max-w-8xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Process Text */}
            <motion.div className="lg:col-span-7" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="font-syne uppercase mb-3 block" style={{ fontSize: 'clamp(22px, 4vw, 38.88px)', lineHeight: 1.3, letterSpacing: '-1.5552px' }}>
                HOW WE WORK
              </span>
              <h2 className="font-inter font-bold text-white text-[18px] mb-4" style={{ lineHeight: '27px', letterSpacing: '-0.36px' }}>Our 4-Step Creative Process</h2>
              <p className="italic text-text-muted font-inter text-[18px] font-normal mb-10 max-w-2xl" style={{ lineHeight: '27px', letterSpacing: '-0.36px' }}>
                "Our workflow is designed to remove confusion and deliver clarity at every stage."
              </p>

              {/* 4 Steps */}
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Understanding the Brand",
                    desc: "We begin by deeply understanding your brand voice, goals, target audience, and creative vision. This foundation ensures every piece of content aligns with your identity.",
                  },
                  {
                    step: "02",
                    title: "Idea to Script Development",
                    desc: "We shape raw concepts into structured scripts with storytelling flow, emotional beats, and production clarity. Every video starts with a solid narrative.",
                  },
                  {
                    step: "03",
                    title: "Visual Production Excellence",
                    desc: "From lighting to framing, color grading to sound design — every visual element is crafted intentionally to match the story and elevate the message.",
                  },
                  {
                    step: "04",
                    title: "Strategic Distribution & Growth",
                    desc: "Content is optimized for platforms, algorithms, and audience behavior to maximize reach, engagement, and conversions.",
                  },
                ].map((item, i) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <span className="font-montserrat font-extrabold text-sm md:text-base px-3 py-1 rounded-lg border border-white/10 bg-white/5" style={{ color: "#AAFF00" }}>
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-inter font-bold text-white text-[18px] mb-2" style={{ lineHeight: '27px', letterSpacing: '-0.36px' }}>{item.title}</h3>
                      <p className="font-inter font-light text-text-muted text-[18px] max-w-xl" style={{ lineHeight: '27px', letterSpacing: '-0.36px' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Closing Line */}
              <div className="mt-10 pt-6 border-t border-white/5 max-w-2xl">
                <p className="font-inter font-normal text-[17px]" style={{ lineHeight: '25.5px', letterSpacing: '-0.34px' }}>This process ensures your investment in content delivers measurable results.</p>
              </div>
            </motion.div>

            {/* Right Column: Original Image */}
            <motion.div className="lg:col-span-5" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-bg-card aspect-[4/5] relative group">
                <img
                  src="https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097634/xrl27le4sw71y1dyijjdvivdou_inkrim.png"
                  alt="Creative Video Production Workflow"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Showcase Grid Section */}
      <section className="section-pad bg-bg-secondary">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="font-syne text-white uppercase" style={{ fontSize: 'clamp(22px, 4vw, 38.88px)', lineHeight: 1.3, letterSpacing: '-1.5552px' }}>Project Showcase Grid</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseProjects.map((project, i) => (
              <motion.div
                key={project.name + i}
                className="flex flex-col bg-bg-card/40 border border-white/5 rounded-3xl p-4 hover:border-[#AAFF00]/35 hover:bg-bg-card/80 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => handleOpen(project.video)}
                whileHover={{ scale: 1.01 }}>
                {/* Image Wrapper */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-black/40 border border-white/5 mb-4">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Name Label Below Image */}
                <div className="px-2 pb-2">
                  <h3 className="font-inter font-semibold text-white text-[16px] group-hover:text-[#AAFF00] transition-colors" style={{ lineHeight: '19.2px', letterSpacing: '-0.16px' }}>{project.name}</h3>
                  <p className="font-inter text-text-muted text-xs uppercase tracking-wider mt-1">Featured Project</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            id="showreel-modal"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}>
            <motion.div
              className="relative w-full max-w-6xl px-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}>
              <button id="close-showreel" className="absolute -top-12 right-4 text-white/70 hover:text-white transition-colors" onClick={handleClose} aria-label="Close showreel">
                <X size={32} />
              </button>
              <div className="aspect-video bg-black rounded-2xl overflow-hidden">
                <video ref={modalVideoRef} src={activeVideo} controls className="w-full h-full" playsInline />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
