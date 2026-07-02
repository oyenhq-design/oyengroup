import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Statistics from '@/components/Statistics';
import Ecosystem from '@/components/Ecosystem';
import Journey from '@/components/Journey';
import CTA from '@/components/CTA';
import LayeredScrollContainer from '@/components/LayeredScrollContainer';

export default function Home() {
  return (
    <main className="bg-black">
      <LayeredScrollContainer>
        <Hero />
        <Services />
        <Statistics />
        <Ecosystem />
        <Journey />
        <CTA />
      </LayeredScrollContainer>
    </main>
  );
}
