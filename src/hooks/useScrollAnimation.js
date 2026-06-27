'use client';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  return { ref, isInView };
}

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export const blurRevealVariants = {
  hidden: { opacity: 0, filter: 'blur(20px)', scale: 0.95 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};
