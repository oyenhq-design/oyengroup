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
    <section className="py-20 md:py-24 lg:py-32 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Case Studies</h2>
          <p className="text-base md:text-lg text-[#9ca3af] leading-relaxed">
            See how we've helped leading organizations achieve their transformation goals
          </p>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {caseStudies.map((caseStudy, index) => (
            <Link key={caseStudy.id} href={`/case-studies/${caseStudy.id}`}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12 items-center bg-black p-8 lg:p-10 rounded-lg hover:shadow-lg transition cursor-pointer group border border-[#111827] hover:border-[#d4af37]`}
              >
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-[#d4af37] bg-[#1f2937] rounded-full mb-4">
                    {caseStudy.industry}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#d4af37] transition">
                    {caseStudy.title}
                  </h3>
                  <p className="text-lg text-[#9ca3af] mb-6">{caseStudy.excerpt}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {caseStudy.results.map((result, idx) => (
                      <div key={idx}>
                        <div className="text-2xl font-bold text-[#d4af37]">{result.value}</div>
                        <div className="text-sm text-[#9ca3af]">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <button className="text-[#d4af37] font-semibold hover:text-[#e5c158]">
                    Read Full Case Study →
                  </button>
                </div>
                <div className="flex-1">
                  <div className="h-64 bg-linear-to-br from-[#1f2937] to-[#111827] rounded-lg overflow-hidden">
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
            <button className="bg-[#d4af37] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#e5c158] transition">
              View All Case Studies
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
