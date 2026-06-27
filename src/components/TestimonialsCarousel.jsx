'use client';

import { FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '@/data/testimonials';

const row1 = [...testimonials, ...testimonials];
const row2 = [...testimonials].reverse();
const doubledRow2 = [...row2, ...row2];

function TestimonialCard({ testimonial }) {
  return (
    <div className="shrink-0 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent backdrop-blur-sm p-6 md:p-8 flex flex-col justify-between"
      style={{ width: 'clamp(280px, 40vw, 520px)', height: 'clamp(180px, 20vw, 270px)' }}>
      <p className="font-inter font-light text-white tracking-[-1.44px]" style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', lineHeight: 1.3 }}>
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div>
        <FaQuoteLeft className="text-white mb-3 opacity-80" style={{ fontSize: 'clamp(16px, 2vw, 30px)' }} />

        <p className="font-syne font-normal tracking-[-1.6px] text-gray-400 uppercase" style={{ fontSize: 'clamp(12px, 1.5vw, 20px)', lineHeight: 1.4 }}>
          {testimonial.author}
        </p>
      </div>
    </div>
  );
}

export default function TestimonialsCarousel() {
  return (
    <section className="relative overflow-hidden bg-bg-secondary py-28">

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none testimonials-grid-bg" />

      <div className="relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="font-syne text-white uppercase" style={{ fontSize: 'clamp(20px, 4vw, 38.88px)', lineHeight: 1.3, letterSpacing: '-1.5552px' }}>
            CLIENT SUCCESS STORIES &amp; FEEDBACK
          </h2>
        </div>

        {/* First Row */}
        <div className="overflow-hidden mb-8">
          <div
            className="flex gap-8 marquee-track"
            style={{ animationDuration: '40s' }}
          >
            {row1.map((testimonial, index) => (
              <TestimonialCard
                key={`row1-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="overflow-hidden">
          <div
            className="flex gap-8 marquee-track-reverse"
            style={{ animationDuration: '40s' }}
          >
            {doubledRow2.map((testimonial, index) => (
              <TestimonialCard
                key={`row2-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}