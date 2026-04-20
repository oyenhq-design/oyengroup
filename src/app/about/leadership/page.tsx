import LeadershipHero from '@/components/LeadershipHero';
import LeadershipIntro from '@/components/LeadershipIntro';
import LeadershipGrid from '@/components/LeadershipGrid';
import LeadershipVision from '@/components/LeadershipVision';

export default function LeadershipPage() {
  return (
    <main>
      <LeadershipHero />
      <LeadershipIntro />
      <LeadershipGrid />
      <LeadershipVision />
    </main>
  );
}
