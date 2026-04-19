import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }: { params: { id: string } }) {
  const caseStudy = caseStudies.find((cs) => cs.id === parseInt(params.id));
  return {
    title: `${caseStudy?.title} - Oyengroup Case Study`,
    description: caseStudy?.excerpt,
  };
}

export default function CaseStudyDetailPage({ params }: { params: { id: string } }) {
  const caseStudy = caseStudies.find((cs) => cs.id === parseInt(params.id));

  if (!caseStudy) {
    notFound();
  }

  const relatedStudies = caseStudies
    .filter((cs) => cs.industry === caseStudy.industry && cs.id !== caseStudy.id)
    .slice(0, 2);

  return (
    <main>
      <section className="bg-black text-white py-20 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/case-studies" className="text-[#d4af37] hover:text-[#e5c158] mb-4 inline-block">
            ← Back to Case Studies
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{caseStudy.title}</h1>
          <div className="flex flex-wrap gap-4 text-[#9ca3af]">
            <span className="inline-block px-3 py-1 bg-[#111827] rounded-full text-sm text-[#d4af37]">
              {caseStudy.industry}
            </span>
            <span>Client: {caseStudy.client}</span>
            <span>{new Date(caseStudy.date).toLocaleDateString()}</span>
          </div>
        </div>
      </section>

      <article className="py-20 md:py-24 lg:py-32 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-96 object-cover rounded-lg mb-12"
          />

          {/* Results Highlight */}
          <div className="bg-[#111827] border border-[#1f2937] p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Key Results</h2>
            <div className="grid grid-cols-3 gap-6">
              {caseStudy.results.map((result, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-[#d4af37] mb-2">{result.value}</div>
                  <div className="text-[#9ca3af] font-semibold">{result.metric}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {caseStudy.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-lg text-[#9ca3af] mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Download Button */}
          <div className="border-t border-[#1f2937] pt-8">
            <a
              href={caseStudy.downloadUrl}
              download
              className="inline-block bg-[#d4af37] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#e5c158] transition"
            >
              Download Full Case Study PDF
            </a>
          </div>

          {/* Related Case Studies */}
          {relatedStudies.length > 0 && (
            <section className="border-t border-[#1f2937] pt-12 mt-12">
              <h2 className="text-3xl font-bold text-white mb-8">Related Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedStudies.map((related) => (
                  <Link key={related.id} href={`/case-studies/${related.id}`}>
                    <div className="bg-[#111827] rounded-lg overflow-hidden hover:shadow-lg transition group cursor-pointer h-full border border-[#1f2937] hover:border-[#d4af37]">
                      <div className="h-40 bg-linear-to-br from-[#1f2937] to-[#111827] overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs font-semibold text-[#d4af37] bg-[#1f2937] px-2 py-1 rounded">
                          {related.industry}
                        </span>
                        <h3 className="font-bold text-white mb-2 group-hover:text-[#d4af37] transition line-clamp-2 mt-2">
                          {related.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </main>
  );
}
