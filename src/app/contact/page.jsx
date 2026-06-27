'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser'; // 1. Import EmailJS
import FAQAccordion from '@/components/FAQAccordion';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track loading state

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Your EmailJS credentials
    const SERVICE_ID = 'service_6j5qjqt';
    const TEMPLATE_ID = 'template_quzho7u';
    const PUBLIC_KEY = 'uhoJL47y3gEI0-NS1';

    // 2. Map form data to match variables in your EmailJS template
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      phone_number: form.phone,
      message: form.message,
    };

    try {
      // 3. Send email via EmailJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' }); // Clear form
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-bg-primary">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-syne text-white uppercase" style={{ fontSize: 'clamp(22px, 4vw, 38.88px)', lineHeight: 1.3, letterSpacing: '0.5552px' }}>
              Question? <br />Send us a message.{' '} <br />
              <span className="">Don&apos;t be shy</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-pad bg-bg-primary pt-0">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — Visit info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-syne text-white uppercase mb-8" style={{ fontSize: 'clamp(22px, 4vw, 38.88px)', lineHeight: 1.3, letterSpacing: '-1.5552px' }}>
                Visit us
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="block font-inter font-medium uppercase mb-1" style={{ fontSize: '12px', lineHeight: '14.4px', letterSpacing: 'normal' }}>Business Hours</p>
                    <p className="font-inter font-light text-white text-[17px] leading-[25.5px] tracking-[-0.34px]">Monday – Thursday</p>
                    <p className="font-inter font-light text-white text-[17px] leading-[25.5px] tracking-[-0.34px]">9:00 AM – 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="block font-inter font-medium uppercase mb-1" style={{ fontSize: '12px', lineHeight: '14.4px', letterSpacing: 'normal' }}>Email</p>
                    <a href="mailto:editingeditionstudio@gmail.com" className="font-inter font-light text-white text-[17px] leading-[25.5px] tracking-[-0.34px] hover:text-accent-gold transition-colors break-all">
                      editingeditionstudio@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="block font-inter font-medium uppercase mb-1" style={{ fontSize: '12px', lineHeight: '14.4px', letterSpacing: 'normal' }}>Phone</p>
                    <a href="tel:8989195551" className="font-inter font-light text-white text-[17px] leading-[25.5px] tracking-[-0.34px] hover:text-accent-gold transition-colors">
                      8989195551
                    </a>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-10">
                <p className="block font-inter font-medium text-text-muted uppercase mb-4" style={{ fontSize: '12px', lineHeight: '14.4px', letterSpacing: 'normal' }}>
                  Follow Our Work
                </p>
                <div className="flex gap-6">
                  {/* Instagram */}
                  <a href="https://www.instagram.com/_edition.studio_" target="_blank" rel="noopener noreferrer"
                    className="text-text-muted hover:text-white transition-colors font-inter font-light text-[17px] leading-[25.5px] tracking-[-0.34px] flex items-center gap-2 group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted group-hover:text-white transition-colors">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span>Instagram</span>
                  </a>

                  {/* YouTube */}
                  <a href="https://www.youtube.com/@EditionStudiosOfficial" target="_blank" rel="noopener noreferrer"
                    className="text-text-muted hover:text-white transition-colors font-inter font-light text-[17px] leading-[25.5px] tracking-[-0.34px] flex items-center gap-2 group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted group-hover:text-white transition-colors">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
                      <polygon points="10 15 15 12 10 9" />
                    </svg>
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-bg-card border border-white/8 rounded-3xl p-8">
                <h2 className="font-syne text-white uppercase mb-6" style={{ fontSize: 'clamp(22px, 4vw, 38.88px)', lineHeight: 1.3, letterSpacing: '-1.5552px' }}>
                  Send a Message
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">✅</div>
                    <p className="font-montserrat font-bold text-white text-lg mb-2">Message Sent!</p>
                    <p className="text-text-muted font-inter text-sm">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe', required: true },
                      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com', required: true },
                      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210', required: false },
                    ].map((field) => (
                      <div key={field.name}>
                        <label htmlFor={`contact-${field.name}`} className="block font-inter font-medium text-text-muted uppercase mb-2" style={{ fontSize: '12px', lineHeight: '14.4px', letterSpacing: 'normal' }}>
                          {field.label}
                        </label>
                        <input
                          id={`contact-${field.name}`}
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.required}
                          value={form[field.name]}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white font-inter font-light text-[17px] placeholder-white/30 focus:outline-none focus:border-accent-gold/60 transition-colors"
                          style={{ lineHeight: '25.5px', letterSpacing: '-0.34px' }}
                        />
                      </div>
                    ))}

                    <div>
                      <label htmlFor="contact-message" className="block font-inter font-medium text-text-muted uppercase mb-2" style={{ fontSize: '12px', lineHeight: '14.4px', letterSpacing: 'normal' }}>
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your project..."
                        value={form.message}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white font-inter font-light text-[17px] placeholder-white/30 focus:outline-none focus:border-accent-gold/60 transition-colors resize-none"
                        style={{ lineHeight: '25.5px', letterSpacing: '-0.34px' }}
                      />
                    </div>

                    <button
                      type="submit"
                      id="contact-submit"
                      disabled={isSubmitting}
                      className="w-full py-4 font-inter font-semibold text-[14px] disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        background: 'radial-gradient(127.9% 258% at -40.3% 0%, rgb(255,255,255) 39.3%, rgb(154,205,21) 62.1%, rgb(154,205,21) 100%)',
                        border: 'none',
                        borderRadius: '103px',
                        color: 'rgb(13,13,13)',
                        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                        cursor: 'pointer',
                        lineHeight: '16.8px'
                      }}
                      onMouseEnter={e => {
                        if (!isSubmitting) {
                          e.currentTarget.style.transform = 'scale(1.02)';
                          e.currentTarget.style.boxShadow = '0 4px 28px rgba(154,205,21,0.45)';
                        }
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message →'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQAccordion />
    </>
  );
}