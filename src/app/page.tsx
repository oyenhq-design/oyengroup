import Hero from '@/components/Hero';
import AtAGlance from '@/components/AtAGlance';
import Services from '@/components/Services';
import Statistics from '@/components/Statistics';
import FeaturedNews from '@/components/FeaturedNews';
import FeaturedCaseStudies from '@/components/FeaturedCaseStudies';
import ReportsSection from '@/components/ReportsSection';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <AtAGlance />
      <Services />
      <Statistics />
      <FeaturedNews />
      <FeaturedCaseStudies />
      <ReportsSection />
      <CTA />
    </main>
  );
}
