'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const tags = [
  { icon: '✨', label: 'VFX' },
  { icon: '🔊', label: 'SFX' },
  { icon: '🎨', label: 'Color Grading' },
  { icon: '📺', label: 'Advance Transition' },
];

const steps = [
  { icon: '💡', title: 'Ideate to Script', desc: 'Transforming your raw ideas into powerful scripts and compelling structures.' },
  { icon: '🎨', title: 'Grading to Sound Design', desc: 'Every visual element is crafted intentionally to match the story and elevate the message.' },
  { icon: '📈', title: 'Social Media Growth', desc: 'Data-driven strategies to make your content go viral and reach the right audience.' },
];

export default function ServicesSection() {
  return (
    <section className="section-pad bg-bg-primary">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          <h2 className="font-special-gothic font-normal tracking-[5.4px] text-white uppercase mb-4" style={{ fontSize: 'clamp(32px, 6vw, 60px)', lineHeight: 1 }}>
            Our Services
          </h2>
          <p className="text-[16px] md:text-[20px] font-albert-sans font-normal leading-[20px] tracking-[-1px] text-text-muted max-w-xl mx-auto">
            A perfect blend of creativity and technology to turn your vision into reality.
          </p>
        </motion.div>

        {/* Main service card */}
        <motion.div
          className="rounded-3xl bg-bg-card border border-white/8 p-8 md:p-12 mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-montserrat font-semibold text-accent-lime uppercase tracking-widest3 mb-4">
                Core Service
              </span>
              <h3 className="text-[26px] font-syne font-semibold leading-[39px] tracking-[-1.3px] text-white mb-4">
                Video Editing
              </h3>
              <p className="text-[18px] font-inter font-light leading-[27px] tracking-[-0.36px] text-text-muted mb-8">
                We transform raw footage into an engaging story. Whether it&apos;s for YouTube or commercials, we optimize every frame for impact and maximum audience retention.
              </p>
              <Link href="/portfolio" className="btn-gold">
                View Portfolio →
              </Link>
            </div>

            {/* Tags */}
            <div>
              <p className="font-syne font-semibold tracking-[1px] text-text-muted mb-4" style={{ fontSize: 'clamp(28px, 5vw, 52px)', lineHeight: 1.2 }}>
                Type of Editing
              </p>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-sm font-montserrat font-semibold text-white hover:border-accent-gold/50 hover:bg-accent-gold/5 transition-all cursor-default"
                  >
                    <span>{tag.icon}</span>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="rounded-2xl bg-bg-card border border-white/8 p-6 hover:border-accent-gold/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="text-3xl mb-4">{step.icon}</div>
              <h4 className="font-syne font-medium text-white tracking-[1px] mb-3" style={{ fontSize: 'clamp(20px, 3vw, 25px)', lineHeight: 1.4 }}>{step.title}</h4>
              <p className="font-albert-sans text-text-muted text-[15px] md:text-[18px] font-normal leading-[1.5] tracking-[0.1px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-[17px] font-inter font-light text-text-muted leading-[25.5px] tracking-[-0.34px] mb-8 max-w-2xl mx-auto">
            This process ensures your investment in content delivers measurable results.
          </p>
          <Link href="/services" className="btn-outline">
            Explore Services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
