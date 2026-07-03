'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/faqs';

export default function FAQAccordion() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section className="section-pad bg-bg-primary">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <h2 className="font-syne text-white" style={{ fontSize: 'clamp(26px, 5vw, 50px)', lineHeight: 1.4, letterSpacing: '-2.5px' }}>
            Curious? Check Out the Scoop! (FAQs)
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: Math.min(i * 0.05, 0.2) }}
              className="group border border-white/8 rounded-2xl overflow-hidden bg-bg-card"
            >
              <button
                id={`faq-btn-${faq.id}`}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => toggle(faq.id)}
                aria-expanded={openId === faq.id}
              >
                <span className="font-syne text-white text-[20px] leading-[27px] tracking-[1px] pr-4 group-hover:opacity-60 transition-opacity">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full border border-white flex items-center justify-center text-white group-hover:border-accent-lime group-hover:text-accent-lime transition-all">
                  {openId === faq.id ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    id={`faq-content-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-text-muted font-inter text-[18px] font-light leading-[27px] tracking-[-0.36px] border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
