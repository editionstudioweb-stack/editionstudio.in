"use client";
import { motion } from "framer-motion";

/**
 * PageHeroSection — Matches the original editionstudio.in design with animated scroll indicator.
 */
export default function PageHeroSection({ bgImage, title, subtitle }) {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center bg-black"
      style={{ minHeight: "100vh" }}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        />
        
        {/* Cinematic Multi-layer Overlays */}
        <div 
          className="absolute inset-0" 
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0) 100%)"
          }}
        />
        <div 
          className="absolute inset-0" 
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,1) 100%)"
          }}
        />
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 md:px-16 flex flex-col md:flex-row items-start justify-between pt-40 pb-24">
        <div className="max-w-xl text-left">
          <motion.h1
            className="font-special-gothic font-bold text-white uppercase tracking-wider mb-4"
            style={{ 
              fontSize: "clamp(36px, 6vw, 72px)", 
              lineHeight: 1.05, 
              letterSpacing: "2px" 
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {title || "OUR WORK"}
          </motion.h1>

          {subtitle && (
            <motion.p
              className="font-inter font-normal text-sm md:text-base leading-relaxed max-w-lg"
              style={{ color: "#B3B3B3", letterSpacing: "0.2px" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* --- Exact Match: Animated SCROLL Indicator --- */}
      <div className="absolute left-8 bottom-12 z-10 hidden md:flex flex-col items-center select-none space-y-6">
        {/* Vertical Text */}
        <span 
          className="text-white text-[10px] tracking-[0.3em] font-medium uppercase opacity-60 block transform -rotate-90 origin-center mb-4"
        >
          SCROLL
        </span>

        {/* Animated Line Container */}
        <div className="relative w-[1.5px] h-[50px] bg-black/20 overflow-hidden">
          {/* Framer Motion Animated Line inside */}
          <motion.div
            className="absolute top-0 left-0 w-full bg-white origin-top"
            initial={{ scaleY: 0, y: "0%" }}
            animate={{
              scaleY: [0, 1, 1, 0], 
              y: ["0%", "0%", "100%", "100%"], 
            }}
            transition={{
              duration: 2, 
              repeat: Infinity, 
              ease: [0.6, 0.01, 0.3, 0.99], 
            }}
            style={{ height: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}