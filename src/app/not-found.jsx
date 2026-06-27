import Link from 'next/link';

export const metadata = {
  title: '404 — Page Not Found | Edition Studio',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-bg-primary px-6 text-center">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(170,255,0,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10">

        <h1 className="text-8xl md:text-[160px] font-montserrat font-extrabold text-white/10 leading-none mb-4 select-none">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-montserrat font-extrabold text-white mb-4 -mt-8">
          Page Not Found
        </h2>
        <p className="text-text-muted font-inter text-base max-w-md mx-auto mb-10 leading-relaxed">
          Looks like this frame got cut in the edit. The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-gold">
            Back to Home →
          </Link>
          <Link href="/portfolio" className="btn-outline">
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
