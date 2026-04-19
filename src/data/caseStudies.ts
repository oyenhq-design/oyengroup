export interface CaseStudy {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  client: string;
  industry: string;
  results: {
    metric: string;
    value: string;
  }[];
  image: string;
  date: string;
  downloadUrl: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Digital Transformation of Global Manufacturing Leader",
    excerpt:
      "How we helped a Fortune 500 manufacturer modernize operations and achieve 40% efficiency gains.",
    content: `A leading global manufacturing company faced challenges with legacy systems, siloed operations, and slow decision-making processes.

**Challenge:** 
Multiple disconnected systems across 45 facilities, limited real-time visibility, and difficulty scaling operations.

**Solution:**
Oyengroup implemented an integrated cloud-based platform connecting all operations, providing real-time analytics, and automating key processes.

**Results:**
- 40% improvement in operational efficiency
- 60% reduction in system maintenance costs
- Real-time insights enabling 25% faster decision-making
- Achieved ISO 27001 compliance across all operations`,
    client: "Global Manufacturing Corp",
    industry: "Manufacturing",
    results: [
      { metric: "Efficiency Improvement", value: "40%" },
      { metric: "Cost Reduction", value: "60%" },
      { metric: "Decision Speed", value: "25% faster" },
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    date: "2026-02-15",
    downloadUrl: "/downloads/case-study-manufacturing.pdf",
  },
  {
    id: 2,
    title: "E-Commerce Platform Scaling for 10x Growth",
    excerpt:
      "Enabling an Asian e-commerce retailer to scale from $50M to $500M revenue in 18 months.",
    content: `A rapidly growing e-commerce company needed to scale their platform to handle 10x growth while maintaining performance.

**Challenge:**
Legacy infrastructure couldn't handle increased traffic, checkout failures during peak times, and outdated analytics capabilities.

**Solution:**
Complete platform redesign using microservices architecture, auto-scaling infrastructure, and advanced real-time analytics.

**Results:**
- Scaled to handle 100x traffic without performance degradation
- Checkout abandonment reduced from 8% to 1.2%
- Real-time inventory across 200+ warehouses
- 99.99% uptime achieved`,
    client: "Asia E-Commerce Leader",
    industry: "Retail & E-Commerce",
    results: [
      { metric: "Traffic Capacity", value: "100x" },
      { metric: "Checkout Abandonment", value: "Down to 1.2%" },
      { metric: "System Uptime", value: "99.99%" },
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    date: "2026-01-20",
    downloadUrl: "/downloads/case-study-ecommerce.pdf",
  },
  {
    id: 3,
    title: "Financial Services Data Security Overhaul",
    excerpt:
      "Implementing enterprise-grade security and compliance for a leading regional bank.",
    content: `A major regional bank needed to modernize their security infrastructure to meet new regulatory requirements and protect customer data.

**Challenge:**
Outdated security systems, manual compliance processes, and vulnerability to emerging threats.

**Solution:**
Implemented zero-trust security architecture, automated compliance monitoring, and advanced threat detection.

**Results:**
- Zero security breaches post-implementation
- 99% automated compliance reporting
- Threat detection time reduced from hours to minutes
- Full GDPR and PCI-DSS compliance achieved`,
    client: "Regional Banking Group",
    industry: "Financial Services",
    results: [
      { metric: "Security Breaches", value: "Zero" },
      { metric: "Compliance Automation", value: "99%" },
      { metric: "Threat Detection", value: "Minutes" },
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    date: "2025-12-10",
    downloadUrl: "/downloads/case-study-fintech.pdf",
  },
];
