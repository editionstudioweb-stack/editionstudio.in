import PageHeroSection from '@/components/PageHeroSection';
import ImageStrip from '@/components/ImageStrip';
import Link from 'next/link';
import { Check } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollToHash from '@/components/ScrollToHash';

export const unstable_instant = { prefetch: 'static' };

export const metadata = {
  title: 'Services — Edition Studio',
  description: 'Explore Edition Studio\'s full range of services: Video Editing, VFX, SFX, Color Grading, Motion Graphics, Scriptwriting and Social Media Growth.',
};


const serviceBlocks = [
  {
    id: "video-editing",
    title: "Video Editing",
    description: "We shape raw footage into clean, engaging videos that feel natural, professional, and platform-ready. Every edit focuses on storytelling, pacing, and clarity — High-impact video edits built with strong flow, sharp timing, and clear visual intent.",
    image: "https://res.cloudinary.com/dsmuedwc4/image/upload/v1782553429/WhatsApp_Image_2026-06-26_at_6.02.32_PM_2_ef9fxm.jpg",
    includesHeader: "What This Includes :",
    features: [
      {
        title: "Story-Based Editing :",
        description: "Editing with structure and flow to deliver your message clearly and keep viewers engaged."
      },
      {
        title: "AI-Assisted Editing :",
        description: "AI-driven precision edits, refined by expert editors to deliver powerful, next-level visuals."
      },
      {
        title: "VFX :",
        description: "Subtle visual effects for enhancement, continuity, and polish — only where required."
      },
      {
        title: "Color Grading :",
        description: "Professional color correction and grading for consistent, clean, and cinematic visuals."
      },
      {
        title: "SFX :",
        description: "Carefully placed sound effects to add depth and realism without distraction."
      },
      {
        title: "Motion Graphics:",
        description: "Minimal text animations, titles, and lower thirds that support the story and brand."
      }
    ]
  },
  {
    id: "visual-production",
    title: "Visual Production",
    description: "We bring your script to life with precise planning, clean cinematography, and professional lighting. Every frame is crafted with intention to ensure your story is captured with clarity, style, and visual impact.",
    image: "https://res.cloudinary.com/dsmuedwc4/image/upload/v1782553432/WhatsApp_Image_2026-06-26_at_6.02.32_PM_1_ubxwyg.jpg",
    includesHeader: "What This Includes:",
    features: [
      {
        title: "Shot Planning :",
        description: "Preparing exact frame compositions based on the script and storyboard."
      },
      {
        title: "Lighting Setup :",
        description: "Professional lighting design to match the tone and mood."
      },
      {
        title: "Cinematography in 4K :",
        description: "High-quality filming with premium gear and lenses."
      },
      {
        title: "Exceptional Creativity",
        description: "Ensuring performance, frames, and movements stay on brief."
      },
      {
        title: "Equipment & Technical Setup :",
        description: "Cameras, stabilizers, audio, lighting, and required gear arranged end-to-end."
      }
    ]
  },
  {
    id: "idea-to-script",
    title: "Idea to Script",
    description: "We turn your ideas into clear, engaging scripts that align with your brand and message. Every concept is shaped into a structured roadmap ready for production.",
    image: "https://res.cloudinary.com/dsmuedwc4/image/upload/v1782554774/CGRwULOpVOeIx2lEd4mBiruQJAU_tvsrae.avif",
    includesHeader: "What This Includes:",
    features: [
      {
        title: "Ideation: ",
        description: "Crafting unique concepts that align with your goal and audience."
      },
      {
        title: "Story Development: ",
        description: "Expanding the idea into a meaningful structure with emotional beats."
      },
      {
        title: "Script Writing:",
        description: "Writing a polished script with dialogues, scenes, and flow."
      },
      {
        title: "Detailed Breakdown: ",
        description: "Props, locations, timings, technical needs, and shot references."
      },
      {
        title: "Storyboarding: ",
        description: "Visual scene-by-scene breakdown to plan the entire shoot."
      }
    ]
  },
  {
    id: "social-media-growth",
    title: "Social Media Growth",
    description: "We help brands and creators grow strategically across platforms. From content planning to trend research and performance tracking, we ensure every post reaches the right audience and drives engagement.",
    image: "https://res.cloudinary.com/dsmuedwc4/image/upload/v1782553419/Untitled_design_7_siahlk.png",
    includesHeader: "What This Includes :",
    features: [
      {
        title: "Content Calendar Creation :",
        description: "Planning a consistent 15/30-day posting strategy."
      },
      {
        title: "Hashtag & Trend Research :  ",
        description: "Using platform trends for better discoverability."
      },
      {
        title: "Performance Tracking & Insights : ",
        description: "Monthly analytics and insights."
      },
      {
        title: "Exceptional Creativity",
        description: "Paid campaigns designed for conversions and visibility."
      },
      {
        title: "Organic Reach Optimization : ",
        description: "Timing, format suggestions, and algorithm-friendly posting."
      }
    ]
  }
];

const stripImages = [
  { label: 'VFX', img: 'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097640/ipieejmspp5vgmljiapnih3bo_spn9zw.avif' },
  { label: 'Filming', img: 'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097643/qqrms237jwcryf1liq7uoegb6m_v3d5pb.avif' },
  { label: 'Scriptwriting', img: 'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097645/6h961wxsjc6sfmc21aeuuc54tk_fxqahj.jpg' },
  { label: 'Sound Design', img: 'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097616/39bkmmpexji1pmnff0ogfsxpw_hmgshs.jpg' },
  { label: 'Color Grading', img: 'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097643/dihlauywfo7pgbntgagk7dvdagg_kqypvo.avif' },
  { label: 'Motion Graphics', img: 'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097623/c0ur83ftmqvdunc1it8aoj9z2ku_xec9ls.avif' },
];

const doubledStrip = [...stripImages, ...stripImages, ...stripImages, ...stripImages];

export default function ServicesPage() {
  return (
    <>
      <ScrollToHash />
      {/* Hero */}
      <PageHeroSection
        bgImage="https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097632/bwsbvh8jxecbxmrjrm7dymjn9g_y5cnqz.png"
        title="Services"
        subtitle="Join us on a journey where ideas transform into captivating video content, with a dash of creativity and a whole lot of fun."
      />



      {/* Services Grid */}
      <section className="section-pad bg-bg-secondary relative overflow-hidden">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-manrope font-medium text-white mb-4" style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.2, letterSpacing: '0.5px' }}>
              Our Services
            </h2>
            <p className="text-text-muted font-manrope font-normal max-w-2xl mx-auto" style={{ fontSize: 'clamp(15px, 2vw, 22px)', lineHeight: 1.5, letterSpacing: '-0.3px' }}>
              See how we’ve transformed homes with our expert craftsmanship and attention to detail.
            </p>
          </div>

          {/* Stack Container */}
          <div className="flex flex-col gap-12 relative">
            {serviceBlocks.map((block, index) => (
              <div
                key={block.id}
                id={block.id}
                className="sticky top-28 w-full py-4"
                style={{ zIndex: (index + 1) * 10 }}
              >
                <div className="bg-black border border-white/8 rounded-[24px] p-6 md:p-10 lg:p-14 w-full flex flex-col lg:flex-row gap-10 lg:gap-14 items-center shadow-[0_-20px_50px_rgba(0,0,0,0.85)]">
                  {/* Left Column: Image with Badge Overlay */}
                  <div className="w-full lg:w-[400px] flex-shrink-0">
                    <div className="aspect-[4/5] w-full max-w-[400px] mx-auto rounded-[16px] overflow-hidden relative group border border-white/10">
                      <img
                        src={block.image}
                        alt={block.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                        loading="lazy"
                      />
                      {/* Image tag overlay */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md border border-white/15 px-5 py-2 rounded-full">
                        <span className="font-montserrat font-extrabold text-xs uppercase tracking-widest text-[#AAFF00] whitespace-nowrap">
                          {block.imageLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Content */}
                  <div className="flex-1 w-full text-left">
                    <h3 className="font-manrope font-medium text-white mb-4" style={{ fontSize: 'clamp(24px, 3.5vw, 42px)', lineHeight: 1.2, letterSpacing: '-1px' }}>
                      {block.title}
                    </h3>
                    <p className="font-manrope font-normal text-text-muted text-[18px] mb-8" style={{ lineHeight: '27px', letterSpacing: '-0.1px' }}>
                      {block.description}
                    </p>

                    {/* Includes Section */}
                    <div>
                      <h4 className="font-manrope font-medium text-white mb-6 border-b border-white/5 pb-2" style={{ fontSize: 'clamp(16px, 2vw, 22px)', lineHeight: 1.4, letterSpacing: '-0.2px' }}>
                        {block.includesHeader}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                        {block.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex gap-3.5 items-start">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#AAFF00]/10 border border-[#AAFF00]/25 flex items-center justify-center text-[#AAFF00] mt-0.5">
                              <Check size={11} strokeWidth={3.5} />
                            </span>
                            <div className="flex flex-col gap-1">
                              <h5 className="font-syne font-medium text-white text-[18px]" style={{ lineHeight: '27px', letterSpacing: '-0.9px' }}>
                                {feature.title}
                              </h5>
                              <p className="font-inter font-light text-text-muted text-[15px]" style={{ lineHeight: '22.5px' }}>
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Contact Us Button */}
          <div className="flex justify-center mt-20 pb-4">
            <Link
              href="/contact"
              className="btn-gold font-syne font-bold uppercase text-[16px] px-9 py-4"
              style={{ lineHeight: '19.2px' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion />

      {/* Image Strip Marquee */}
      <ImageStrip />
    </>
  );
}
