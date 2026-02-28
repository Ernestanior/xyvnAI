import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import TrustedBySection from '@/components/home/TrustedBySection';
import ShowcaseSection from '@/components/home/ShowcaseSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ShowcaseSection />
      <ProductsSection />
      <TestimonialsSection />
    </>
  );
}