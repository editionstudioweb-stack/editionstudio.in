import HeroSection from '@/components/HeroSection';
import ShowreelSection from '@/components/ShowreelSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import BrandMarquee from '@/components/BrandMarquee';
import SocialStats from '@/components/SocialStats';
import ServicesSection from '@/components/ServicesSection';
import IndustriesCarousel from '@/components/IndustriesCarousel';
import FoundersSection from '@/components/FoundersSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import FAQAccordion from '@/components/FAQAccordion';
import ImageStrip from '@/components/ImageStrip';

export const unstable_instant = { prefetch: 'static' };

export const metadata = {
  title: 'Edition Studio — Crafting Visual into Magic',
  description: 'Premium creative agency specializing in video editing, VFX, color grading & motion graphics. 1.7M+ followers, 2992+ projects delivered.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ShowreelSection />
      <FeaturedProjects />
      <BrandMarquee />
      <SocialStats />
      <ServicesSection />
      <IndustriesCarousel />
      <FoundersSection />
      <TestimonialsCarousel />
      <FAQAccordion />
      <ImageStrip />
    </>
  );
}
