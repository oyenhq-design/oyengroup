import AtGlanceHero from '@/components/AtGlanceHero';
import AtGlanceSection from '@/components/AtGlanceSection';

const oyenAtGlanceData = [
  {
    title: 'Integrated Energy Company',
    description: 'Delivering solutions across upstream, midstream, and downstream operations.',
  },
  {
    title: 'Technology-Driven',
    description: 'Leveraging data, analytics, and modern engineering tools to improve efficiency.',
  },
  {
    title: 'Sustainability Focused',
    description: 'Building responsible energy systems for long-term environmental impact.',
  },
];

const operationsAtGlanceData = [
  {
    title: 'Upstream',
    description: 'Exploration support, drilling solutions, and resource development.',
  },
  {
    title: 'Midstream',
    description: 'Logistics, storage, and energy transportation systems.',
  },
  {
    title: 'Downstream',
    description: 'Refining support, distribution, and energy delivery solutions.',
  },
];

const technologyData = [
  {
    title: 'Digital Energy Systems',
    description: 'Using data to optimize performance and decision-making.',
  },
  {
    title: 'Engineering Excellence',
    description: 'Modern tools and processes for scalable energy solutions.',
  },
  {
    title: 'Continuous Innovation',
    description: 'Adapting to industry shifts with forward-thinking strategies.',
  },
];

const sustainabilityData = [
  {
    title: 'Lower Carbon Focus',
    description: 'Supporting cleaner and more efficient energy practices.',
  },
  {
    title: 'Operational Efficiency',
    description: 'Reducing waste and improving system performance.',
  },
  {
    title: 'Responsible Growth',
    description: 'Balancing expansion with environmental responsibility.',
  },
];

export default function AtGlancePage() {
  return (
    <main>
      <AtGlanceHero />
      <AtGlanceSection title="OYEN at a Glance" cards={oyenAtGlanceData} />
      <AtGlanceSection title="Operations at a Glance" cards={operationsAtGlanceData} accent />
      <AtGlanceSection title="Technology & Innovation" cards={technologyData} />
      <AtGlanceSection title="Sustainability" cards={sustainabilityData} accent />
    </main>
  );
}
