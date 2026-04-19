import { caseStudies } from '@/data/caseStudies';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');

  let filtered = caseStudies;

  if (limit) {
    filtered = filtered.slice(0, parseInt(limit));
  }

  return Response.json(filtered);
}
