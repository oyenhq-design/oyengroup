export interface Report {
  id: number;
  title: string;
  description: string;
  fileSize: string;
  date: string;
  type: "Annual" | "Quarterly" | "Sustainability" | "Research";
  url: string;
}

export const reports: Report[] = [
  {
    id: 1,
    title: "Annual Report 2025",
    description:
      "Comprehensive overview of Oyengroup's financial performance, strategic initiatives, and global operations for fiscal year 2025.",
    fileSize: "24.5 MB",
    date: "2026-03-15",
    type: "Annual",
    url: "/downloads/oyengroup-annual-report-2025.pdf",
  },
  {
    id: 2,
    title: "Q4 2025 Financial Results",
    description:
      "Detailed financial statements and key performance metrics for the fourth quarter of 2025, including year-over-year comparisons.",
    fileSize: "8.2 MB",
    date: "2026-02-10",
    type: "Quarterly",
    url: "/downloads/oyengroup-q4-2025-results.pdf",
  },
  {
    id: 3,
    title: "Sustainability & ESG Report 2025",
    description:
      "Our commitment to environmental sustainability, social responsibility, and governance excellence across all operations.",
    fileSize: "19.8 MB",
    date: "2026-03-20",
    type: "Sustainability",
    url: "/downloads/oyengroup-sustainability-report-2025.pdf",
  },
  {
    id: 4,
    title: "Digital Transformation Trends 2026",
    description:
      "Industry research and analysis on emerging digital transformation trends, market opportunities, and strategic implications.",
    fileSize: "12.3 MB",
    date: "2026-04-01",
    type: "Research",
    url: "/downloads/oyengroup-dt-trends-2026.pdf",
  },
  {
    id: 5,
    title: "Q3 2025 Interim Report",
    description: "Three-quarter financial performance update with operational highlights and forward-looking statements.",
    fileSize: "5.7 MB",
    date: "2025-11-15",
    type: "Quarterly",
    url: "/downloads/oyengroup-q3-2025-interim.pdf",
  },
];
