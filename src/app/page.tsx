import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Philosophy from '@/components/Philosophy';
import Statistics from '@/components/Statistics';
import Ecosystem from '@/components/Ecosystem';
import Journey from '@/components/Journey';
import LeadershipSlideIn from '@/components/LeadershipSlideIn';
import CTA from '@/components/CTA';
import LayeredScrollContainer from '@/components/LayeredScrollContainer';

export default function Home() {
  return (
    <main className="bg-black">
      <LayeredScrollContainer>
        <Hero />
        <Services />
        <Philosophy />
        <Statistics />
        <Ecosystem />
        <Journey />
        <CTA />
      </LayeredScrollContainer>
      <LeadershipSlideIn />
    </main>
  );
}
