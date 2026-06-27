'use client';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Skip animation on first load (SSR)
  if (!mounted) return <>{children}</>;

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
