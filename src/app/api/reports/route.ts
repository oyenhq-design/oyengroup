import { reports } from '@/data/reports';

export async function GET() {
  return Response.json(reports);
}
