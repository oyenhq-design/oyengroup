export const metadata = {
  title: 'Case Studies - Oyengroup',
  description: 'See our success stories and how we helped clients achieve their goals',
};

import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudiesPage() {
  const industries = Array.from(new Set(caseStudies.map((cs) => cs.industry)));

  return (
    <main>
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Case Studies</h1>
          <p className="text-base md:text-lg text-blue-100 leading-relaxed max-w-2xl">
            Discover how we've helped leading organizations achieve their transformation goals
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {caseStudies.map((caseStudy, index) => (
              <Link key={caseStudy.id} href={`/case-studies/${caseStudy.id}`}>
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 items-center bg-gray-50 p-8 rounded-lg hover:shadow-lg transition group cursor-pointer`}
                >
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                      {caseStudy.industry}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition">
                      {caseStudy.title}
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">{caseStudy.excerpt}</p>

                    <div className="grid grid-cols-3 gap-4">
                      {caseStudy.results.map((result, idx) => (
                        <div key={idx}>
                          <div className="text-2xl font-bold text-blue-600">{result.value}</div>
                          <div className="text-sm text-gray-600">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg overflow-hidden">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
