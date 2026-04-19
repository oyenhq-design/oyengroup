export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: string;
  readTime: number;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Oyengroup Launches Innovation Hub 2026",
    excerpt:
      "Introducing our new state-of-the-art innovation center dedicated to digital transformation solutions.",
    content: `Oyengroup is thrilled to announce the opening of our Innovation Hub 2026, a state-of-the-art facility designed to accelerate digital transformation initiatives across industries. 

The hub features advanced research laboratories, collaborative workspaces, and cutting-edge technology infrastructure. It will serve as a catalyst for innovation, bringing together our top talent with clients and partners to solve tomorrow's challenges today.

This investment reflects our commitment to staying at the forefront of technological advancement and delivering next-generation solutions to our global clientele.`,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    date: "2026-04-15",
    category: "Innovation",
    author: "Sarah Johnson",
    readTime: 5,
  },
  {
    id: 2,
    title: "Oyengroup Partners with Leading Global Technology Firm",
    excerpt:
      "Strategic partnership to expand our digital transformation capabilities across Asia-Pacific region.",
    content: `Oyengroup has entered into a strategic partnership with a leading global technology firm to expand our service offerings in the Asia-Pacific region.

This collaboration will enable us to deliver enhanced digital transformation solutions, combining our industry expertise with their technological excellence. Together, we aim to help enterprises navigate the complexities of digital evolution.

The partnership is expected to create 500+ new job opportunities and significantly enhance our service delivery capabilities.`,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    date: "2026-04-10",
    category: "Partnerships",
    author: "Michael Chen",
    readTime: 4,
  },
  {
    id: 3,
    title: "Sustainability Report 2025: Achieving Net-Zero Progress",
    excerpt:
      "Oyengroup reports significant progress toward our net-zero emissions target by 2035.",
    content: `Our 2025 Sustainability Report highlights major milestones in our journey toward achieving net-zero emissions by 2035.

Key achievements include:
- 45% reduction in carbon emissions from operations
- 100% renewable energy in 8 global facilities
- Partnerships with 150+ sustainability-focused partners
- $50M invested in green technology initiatives

We remain committed to creating positive environmental impact while delivering exceptional business value.`,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
    date: "2026-04-05",
    category: "Sustainability",
    author: "Emma Williams",
    readTime: 6,
  },
  {
    id: 4,
    title: "New Executive Leadership Team Announced",
    excerpt: "Welcoming industry veterans to strengthen our strategic direction and global presence.",
    content: `Oyengroup is pleased to announce the appointment of three new executive leaders to our management team.

These accomplished professionals bring decades of combined experience in enterprise solutions, international business development, and organizational transformation. Their expertise will be instrumental in driving our expansion into emerging markets and strengthening our position as a global innovator.`,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    date: "2026-03-28",
    category: "Company News",
    author: "David Martinez",
    readTime: 3,
  },
];
