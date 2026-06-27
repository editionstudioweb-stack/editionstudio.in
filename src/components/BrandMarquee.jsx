'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { brandLogos } from '@/data/socialAccounts';

export default function BrandMarquee() {
  const doubled = [...brandLogos, ...brandLogos];

  return (
    <section className="section-pad bg-bg-primary overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 mb-12 text-center">

        <motion.h2
          className="font-syne text-white uppercase"
          style={{ fontSize: 'clamp(22px, 4vw, 38.88px)', lineHeight: 1.3, letterSpacing: '-1.5552px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by Leading Brands
        </motion.h2>
      </div>

      {/* Single scrolling marquee row */}
      <div className="relative overflow-hidden marquee-container">
        <div className="marquee-track">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="mx-6 flex-shrink-0 w-28 h-16 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo}
                alt={`Brand logo ${i}`}
                width={112}
                height={64}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
