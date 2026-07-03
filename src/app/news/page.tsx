import Newsroom from '@/components/Newsroom';
import { newsArticles } from '@/data/news';

export const metadata = {
  title: 'Insights & News - OYEN GROUP',
  description: 'Discover the latest product updates, engineering insights, customer stories, research, and company announcements.',
};

export default function NewsPage() {
  return <Newsroom articles={newsArticles} />;
}
