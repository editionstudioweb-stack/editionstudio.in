'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FoundersSection() {
  return (
    <section className="section-pad bg-bg-primary">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Section Heading */}
        <motion.h2 
          className="font-syne text-white text-center uppercase mb-12 md:mb-16"
          style={{ fontSize: 'clamp(22px, 4vw, 38.88px)', lineHeight: 1.3, letterSpacing: '-1.5552px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          ABOUT OUR AGENCY
        </motion.h2>

        {/* Content Container (Centered Group) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[36px] w-full">
          {/* Left Column - Founder Cards */}
          <div className="grid grid-cols-2 gap-4 md:gap-5 w-full md:w-[628px] md:h-[329px]">
            {[
              { 
                name: 'Shobhit Gour', 
                role: 'Founder', 
                img: 'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097638/9y54xjdaz3zpf8mpnniajmcloo_qng3ve.webp' 
              },
              { 
                name: 'Devansh Jain', 
                role: 'Co-Founder', 
                img: 'https://res.cloudinary.com/dsmuedwc4/image/upload/q_auto/f_auto/v1781097639/6xrsis8tty36usfqpvfy2bdfpw_iu86sh.webp' 
              },
            ].map((founder, i) => (
              <motion.div
                key={founder.name}
                className="flex flex-col h-full bg-bg-card border border-white/8 rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <div className="aspect-[3/4] md:aspect-auto md:flex-1 overflow-hidden relative">
                  <Image
                    src={founder.img}
                    alt={founder.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="w-full h-full object-cover object-[center_15%] hover:scale-110 transition-transform duration-500"
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                </div>
                {/* Off-white container matching the screenshot */}
                <div className="bg-gradient-to-b from-[#F5F5F7] to-[#E5E5E7] p-4 text-center">
                  <p className="font-inter font-semibold text-[#0D0D0D] text-[20px] leading-[28px] tracking-[-0.2px]">
                    {founder.name}
                  </p>
                  <p className="font-inter font-normal text-[#767676] text-[16px] leading-[22.4px] tracking-[-0.16px] mt-1">
                    {founder.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Founded In Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-[320px] flex flex-col justify-center"
          >
            <p className="font-inter font-normal text-left text-[#777777] tracking-[-0.22px]" style={{ fontSize: 'clamp(15px, 2vw, 22px)', lineHeight: 1.6 }}>
              Founded in 2021 by Shobhit Gour and Devansh Jain, Edition Studio is a creative powerhouse with 1.7M+ followers. We combine elite post-production artistry with growth strategy to deliver high-impact, scroll-stopping content for brands and creators.
            </p>
          </motion.div>
        </div>

        {/* Centered CTA Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <div className="inline-block p-[5px] rounded-full border border-white/10 bg-black shadow-lg">
            <Link href="/about" className="btn-gold">
              Know More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

