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
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← Back to Case Studies
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{caseStudy.title}</h1>
          <div className="flex flex-wrap gap-4 text-blue-100">
            <span className="inline-block px-3 py-1 bg-blue-700 rounded-full text-sm">
              {caseStudy.industry}
            </span>
            <span>Client: {caseStudy.client}</span>
            <span>{new Date(caseStudy.date).toLocaleDateString()}</span>
          </div>
        </div>
      </section>

      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-96 object-cover rounded-lg mb-12"
          />

          {/* Results Highlight */}
          <div className="bg-linear-to-r from-blue-50 to-blue-100 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Results</h2>
            <div className="grid grid-cols-3 gap-6">
              {caseStudy.results.map((result, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{result.value}</div>
                  <div className="text-gray-700 font-semibold">{result.metric}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {caseStudy.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-lg text-gray-700 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Download Button */}
          <div className="border-t pt-8">
            <a
              href={caseStudy.downloadUrl}
              download
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Download Full Case Study PDF
            </a>
          </div>

          {/* Related Case Studies */}
          {relatedStudies.length > 0 && (
            <section className="border-t pt-12 mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedStudies.map((related) => (
                  <Link key={related.id} href={`/case-studies/${related.id}`}>
                    <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition group cursor-pointer h-full">
                      <div className="h-40 bg-linear-to-br from-blue-400 to-blue-600 overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                          {related.industry}
                        </span>
                        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition line-clamp-2 mt-2">
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
