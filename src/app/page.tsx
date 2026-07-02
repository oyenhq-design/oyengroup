import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Statistics from '@/components/Statistics';
import CTA from '@/components/CTA';
import LayeredScrollContainer from '@/components/LayeredScrollContainer';

export default function Home() {
  return (
    <main className="bg-black">
      <LayeredScrollContainer>
        <Hero />
        <Services />
        <Statistics />
        <CTA />
      </LayeredScrollContainer>
    </main>
  );
}
