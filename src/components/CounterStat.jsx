'use client';
import { useCounter } from '@/hooks/useCounter';

export default function CounterStat({ target, suffix = '', label }) {
  const { count, ref } = useCounter(target, 2200);

  return (
    <div ref={ref} className="text-center">
      <div className="font-montserrat font-extrabold text-5xl md:text-6xl text-white mb-2">
        {count.toLocaleString()}
        <span className="text-accent-lime">{suffix}</span>
      </div>
      <p className="font-inter text-text-muted text-sm uppercase tracking-widest2">{label}</p>
    </div>
  );
}
