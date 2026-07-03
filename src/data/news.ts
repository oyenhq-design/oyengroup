export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  source: 'OYEN GRID' | 'OYEN GROUP';
  author: string;
  readTime: number;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "AltSchool saves 4 hours weekly using OYEN GRID",
    excerpt: "How AltSchool optimized training operations, cohort tracking, and automation to save hours each week.",
    content: `AltSchool Africa has partnered with OYEN GRID to streamline the administration of its learning cohorts. By leveraging OYEN GRID's automated tracking systems, AltSchool was able to centralize its scheduling, automate notifications, and monitor student progress in real-time.

The operational efficiency gained has freed up more than four hours per coordinator per week, allowing team members to focus on direct mentorship and program innovation rather than administrative overhead.

"OYEN GRID has fundamentally changed how we manage our large-scale training cohorts. The platform is robust, intelligent, and scales seamlessly with our growth," said the Operations Director at AltSchool Africa.`,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    date: "2026-06-28",
    category: "Case Studies",
    source: "OYEN GRID",
    author: "Sarah Johnson",
    readTime: 4,
  },
  {
    id: 2,
    title: "Managing Training Cohorts at Scale",
    excerpt: "Best practices for administering learning cohorts across multiple locations and industries.",
    content: `Managing learning cohorts at scale requires robust digital tools and operational discipline. In this guide, we detail how modern institutions structure their cohorts, automate enrollment workflows, and build reliable communication networks.

Key practices include using templated curricula, setting up automated milestone reminders, and utilizing centralized portals for mentors and participants.`,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
    date: "2026-06-20",
    category: "Learning",
    source: "OYEN GRID",
    author: "David Martinez",
    readTime: 5,
  },
  {
    id: 3,
    title: "Introducing AI Session Notes on OYEN GRID",
    excerpt: "Leveraging machine learning to automatically generate, summarize, and distribute training notes.",
    content: `We are excited to roll out AI Session Notes for all OYEN GRID enterprise customers. This feature automatically records training audio, converts it to text, and uses advanced language models to generate concise summaries, actionable items, and study guides.

By automating session notes, institutions ensure that no critical detail is lost while giving instructors and students more time to engage during live sessions.`,
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800",
    date: "2026-06-15",
    category: "AI",
    source: "OYEN GRID",
    author: "Ahmed Al-Maktoum",
    readTime: 3,
  },
  {
    id: 4,
    title: "Scaling Enterprise Learning in High-Growth Sectors",
    excerpt: "How companies are modernizing their corporate training programs to keep pace with rapid innovation.",
    content: `Corporate training in high-growth sectors requires systems that are both flexible and secure. We explore how modern energy and technology firms are utilizing OYEN GRID to structure compliance courses, track professional certifications, and deploy dynamic training modules to hybrid workforces.`,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800",
    date: "2026-05-30",
    category: "Learning",
    source: "OYEN GRID",
    author: "Sarah Johnson",
    readTime: 6,
  },
  {
    id: 5,
    title: "Engineering Infrastructure for Decades of Growth",
    excerpt: "A deep dive into OYEN GROUP's core architectural patterns for building resilient and durable services.",
    content: `resilient systems are not built overnight. At OYEN GROUP, we adhere to strict architectural patterns that isolate services, ensure atomic data mutations, and scale horizontally. We review our database layering strategy and our approach to hardware-level integration for industrial systems.`,
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9aae9f?w=800",
    date: "2026-05-12",
    category: "Engineering",
    source: "OYEN GROUP",
    author: "Ahmed Al-Maktoum",
    readTime: 8,
  },
  {
    id: 6,
    title: "Security Best Practices for Connected Ecosystems",
    excerpt: "How OYEN GROUP implements end-to-end encryption and compliance standards for critical operations.",
    content: `Connected ecosystems require enterprise-grade security. We details our compliance framework, data privacy guarantees, and how we protect high-volume transactional pipelines from edge network vulnerabilities.`,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
    date: "2026-04-29",
    category: "Engineering",
    source: "OYEN GROUP",
    author: "Michael Chen",
    readTime: 5,
  },
  {
    id: 7,
    title: "OYEN GROUP Launches Innovation Hub 2026",
    excerpt: "Introducing our new state-of-the-art center dedicated to digital transformation and AI integration.",
    content: `OYEN GROUP is thrilled to announce the opening of our Innovation Hub 2026, a facility designed to accelerate digital transformation initiatives. The hub features advanced research laboratories, collaborative workspaces, and cutting-edge technology infrastructure.`,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    date: "2026-04-15",
    category: "Company News",
    source: "OYEN GROUP",
    author: "Sarah Johnson",
    readTime: 4,
  },
  {
    id: 8,
    title: "OYEN GROUP Partners with Leading Global Technology Firm",
    excerpt: "Strategic partnership to expand our digital infrastructure capabilities across emerging markets.",
    content: `OYEN GROUP has entered into a strategic partnership with a leading global technology firm. This collaboration will enable us to deliver enhanced digital transformation solutions, combining our industry expertise with their technological excellence.`,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    date: "2026-04-10",
    category: "Company News",
    source: "OYEN GROUP",
    author: "Michael Chen",
    readTime: 4,
  },
];
