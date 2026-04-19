'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CaseStudy } from '@/data/caseStudies';

export default function FeaturedCaseStudies() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/case-studies?limit=2')
      .then((res) => res.json())
      .then((data) => {
        setCaseStudies(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading case studies...</div>;
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Case Studies</h2>
          <p className="text-xl text-gray-600">
            See how we've helped leading organizations achieve their transformation goals
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((caseStudy, index) => (
            <Link key={caseStudy.id} href={`/case-studies/${caseStudy.id}`}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center bg-white p-8 rounded-lg hover:shadow-lg transition cursor-pointer group`}
              >
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                    {caseStudy.industry}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition">
                    {caseStudy.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">{caseStudy.excerpt}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {caseStudy.results.map((result, idx) => (
                      <div key={idx}>
                        <div className="text-2xl font-bold text-blue-600">{result.value}</div>
                        <div className="text-sm text-gray-600">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <button className="text-blue-600 font-semibold hover:text-blue-700">
                    Read Full Case Study →
                  </button>
                </div>
                <div className="flex-1">
                  <div className="h-64 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg overflow-hidden">
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

        <div className="text-center mt-12">
          <Link href="/case-studies">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              View All Case Studies
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
