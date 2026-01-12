// src/app/page.tsx
import HeroSection from '@/components/home/HeroSection';
import QuickActions from '@/components/home/QuickActions';
import TrustBadges from '@/components/home/TrustBadges';
import ServicesGrid from '@/components/sections/ServicesGrid';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickActions />
      <TrustBadges />
      <ServicesGrid />
      <TestimonialsSection />
    </>
  );
}