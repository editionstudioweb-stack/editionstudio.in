import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';

const ShowreelSection = dynamic(() => import('@/components/ShowreelSection'));
const FeaturedProjects = dynamic(() => import('@/components/FeaturedProjects'));
const BrandMarquee = dynamic(() => import('@/components/BrandMarquee'));
const SocialStats = dynamic(() => import('@/components/SocialStats'));
const ServicesSection = dynamic(() => import('@/components/ServicesSection'));
const IndustriesCarousel = dynamic(() => import('@/components/IndustriesCarousel'));
const FoundersSection = dynamic(() => import('@/components/FoundersSection'));
const TestimonialsCarousel = dynamic(() => import('@/components/TestimonialsCarousel'));
const FAQAccordion = dynamic(() => import('@/components/FAQAccordion'));
const ImageStrip = dynamic(() => import('@/components/ImageStrip'));

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
