import { newsArticles } from '@/data/news';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');
  const category = searchParams.get('category');

  let filtered = newsArticles;

  if (category) {
    filtered = filtered.filter((article) => article.category === category);
  }

  if (limit) {
    filtered = filtered.slice(0, parseInt(limit));
  }

  return Response.json(filtered);
}
