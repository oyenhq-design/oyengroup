import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Statistics from '@/components/Statistics';
import FeaturedNews from '@/components/FeaturedNews';
import FeaturedCaseStudies from '@/components/FeaturedCaseStudies';
import ReportsSection from '@/components/ReportsSection';
import StayConnected from '@/components/StayConnected';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Statistics />
      <FeaturedNews />
      <FeaturedCaseStudies />
      <ReportsSection />
      <StayConnected />
      <CTA />
    </main>
  );
}
