import PageHeroSection from '@/components/PageHeroSection';
import BrandMarquee from '@/components/BrandMarquee';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import FAQAccordion from '@/components/FAQAccordion';

import { Sparkles, Award, Users, Lightbulb, Briefcase, Search } from 'lucide-react';

export const unstable_instant = { prefetch: 'static' };

export const metadata = {
  title: 'About Us — Edition Studio',
  description: 'Learn about Edition Studio — founded in 2021 by Shobhit Gour and Devansh Jain. A creative powerhouse with 1.7M+ followers.',
};

const reasons = [
  { icon: Sparkles, title: 'Exceptional Creativity', desc: "Clients choose us for our unparalleled creative prowess. We breathe life into ideas, turning them into visually stunning, memorable videos." },
  { icon: Award, title: 'Proven Track Record', desc: "Our portfolio is a testament to our success. We've consistently delivered outstanding results, earning the trust of clients time and again." },
  { icon: Users, title: 'Collaborative Approach', desc: "We don't just work for our clients; we work with them. Our collaborative spirit ensures that each project is a true partnership, vision coming to life." },
  { icon: Lightbulb, title: 'Innovative Solutions', desc: "We're known for pushing boundaries and finding innovative solutions. Clients appreciate our ability to think outside the box and deliver beyond expectations." },
  { icon: Briefcase, title: 'Exceptional Team', desc: "Our team is a powerhouse of talent, experience, and passion. Clients choose us for the depth of expertise and dedication we bring to every project." },
  { icon: Search, title: 'Attention to Detail', desc: "We obsess over the finer points. Every frame, every edit, every sound is carefully crafted to ensure the highest quality and maximum impact." },
];

const storyBlocks = [
  {
    img: 'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097638/9y54xjdaz3zpf8mpnniajmcloo_qng3ve.webp',
    text: 'Edition Studio was founded in 2021, beginning as a passion-driven creative journey rather than a conventional studio setup. In the early days, Shobhit started experimenting with random edits across diverse topics, using clips from movies and web series. These edits were purely creative explorations—focused on understanding visual storytelling, pacing, and emotional impact. What began as experimentation soon evolved into a distinctive editing style.',
    imgLeft: true,
  },
  {
    img: 'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097639/6xrsis8tty36usfqpvfy2bdfpw_iu86sh.webp',
    text: "As the creative momentum grew, Devansh joined the studio to handle the business and growth side—bringing structure, client coordination, and strategic direction. This balance between creativity and management became the foundation of Edition Studio. Initially, the studio was deeply focused on post-production, delivering high-end, creative editing across multiple styles including VFX, motion graphics, animation, and professional color grading. Every project, regardless of scale, was approached with precision, originality, and attention to detail.",
    imgLeft: false,
  },
  {
    img: 'https://res.cloudinary.com/dsmuedwc4/image/upload/v1782553425/WhatsApp_Image_2026-06-26_at_6.02.32_PM_3_kbjdb1.jpg',
    text: 'Over time, Edition Studio began producing its own original content, pushing creative boundaries alongside client work. This self-driven content became highly influential, helping us achieve over 1.7 million followers across social media platforms. The strong reach and engagement naturally led to collaborations with brands, companies, and creators. Today, Edition Studio is a growing creative studio known for delivering outstanding, performance-driven visual projects—combining strong storytelling, technical excellence, and strategic execution. What started as simple edits has grown into a studio trusted by many, and we continue to evolve with every project we create.',
    imgLeft: true,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHeroSection
        bgImage="https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097631/y0lrjx1qy5a51poji3lhdzsng_civgvo.png"
        title="About Us"
        subtitle="Discover the Team That Adds a Dose of Fun to Video Production. This Is Us, the Edition Studio Family, where passion meets pixels with a smile!"
      />

      {/* Origin Story */}
      <section className="section-pad bg-bg-primary">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="font-syne uppercase text-white" style={{ fontSize: 'clamp(36px, 7vw, 77px)', lineHeight: 0.5, letterSpacing: '-3.08px' }}>
              It all started with<br />
              <span className="font-inter capitalize" style={{ fontSize: 'clamp(18px, 3vw, 30px)', lineHeight: 1.4}}>One big dream</span>
            </h2>
          </div>

          <div className="space-y-20">
            {storyBlocks.map((block, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row gap-12 items-center ${!block.imgLeft ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2 rounded-3xl overflow-hidden border border-white/8 aspect-[4/3] flex-shrink-0">
                  <img
                    src={block.img}
                    alt={`Story block ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    />
                </div>
                <div className="w-full md:w-1/2">
                  <p className="font-inter text-text-muted text-[15px] font-medium leading-[19.5px] tracking-[-0.15px]">{block.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandMarquee />


      {/* Why Us (Updated to match image layout perfectly) */}
      <section className="section-pad bg-bg-primary">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Side: Camera Image */}
            <div className="rounded-3xl overflow-hidden aspect-[4/3] w-full">
              <img 
                src="https://res.cloudinary.com/dsmuedwc4/image/upload/v1782553421/WhatsApp_Image_2026-06-26_at_6.02.32_PM_4_fcz1zp.jpg" 
                alt="Cinema Camera" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side: Text details */}
            <div className="text-left space-y-6">
              <h2 className="font-syne font-semibold text-white uppercase" style={{ fontSize: 'clamp(20px, 3vw, 40px)', letterSpacing: '-1px' }}>
                WHY US?
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-[25px] font-inter font-bold text-white tracking-tight">
                  Story First. Strategy Always.
                </h3>
                <p className="font-inter font-light text-[#A8A8A8] text-[20px] leading-relaxed">
                  Trends change. Algorithms evolve.<br />
                  But strong storytelling remains timeless.
                </p>
                <p className="font-inter font-light text-[#A8A8A8] text-[20px] leading-relaxed">
                  At Edition Studio, every project begins with understanding:
                </p>
                
                <ul className="space-y-2 font-inter font-light text-[#A8A8A8] text-[20px] list-disc list-inside pl-1">
                  <li>The brand voice</li>
                  <li>The audience mindset</li>
                  <li>The platform behavior</li>
                </ul>

                <p className="font-inter font-light text-[#A8A8A8] text-[20px] pt-2">
                  Only then do we create visuals that truly connect.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="section-pad bg-bg-primary border-t border-white/5">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">

          {/* Heading */}
          <div className="text-center mb-20">
            <h2
              className="font-syne uppercase text-white tracking-widest"
              style={{
                fontSize: "30px",
                lineHeight: 1.2,
              }}
            >
              WAIT! THERE'S MORE.....
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-16">

            {reasons.map((reason, i) => (
              <div key={reason.title} className="flex flex-col items-start">

                {/* Icon Rendering correctly now */}
                <div className="mb-4 text-accent-lime">
                  <reason.icon size={20} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3
                  className="font-syne font-bold text-white mb-4"
                  style={{
                    fontSize: "clamp(26px, 2.5vw, 42px)",
                    lineHeight: 1.1,
                    letterSpacing: "-1.5px",
                  }}
                >
                  {reason.title}
                </h3>

                {/* Description */}
                <p
                  className="font-inter text-[#8a8a8a] text-[14px] font-light"
                  style={{
                    lineHeight: "22px",
                  }}
                >
                  {reason.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>
      
      <TestimonialsCarousel />
      <FAQAccordion />
    </>
  );
}