'use client';

import { useState, useEffect } from 'react';
import { Report } from '@/data/reports';

export default function ReportsSection() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/reports')
      .then((res) => res.json())
      .then((data) => {
        setReports(data);
        setLoading(false);
      });
  }, []);

  const filtered = filterType ? reports.filter((r) => r.type === filterType) : reports;

  if (loading) {
    return <div className="text-center py-8">Loading reports...</div>;
  }

  const types = Array.from(new Set(reports.map((r) => r.type)));

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Reports & Documents</h2>
        <p className="text-base md:text-lg text-[#9ca3af] mb-12 leading-relaxed max-w-2xl">
          Access our latest financial reports, sustainability initiatives, and research publications
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => setFilterType(null)}
            className={`px-6 py-2 rounded-full font-semibold transition text-sm ${
              filterType === null
                ? 'bg-[#d4af37] text-black'
                : 'bg-[#111827] text-white hover:bg-[#1f2937]'
            }`}
          >
            All
          </button>
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                filterType === type
                  ? 'bg-[#d4af37] text-black'
                  : 'bg-[#111827] text-white hover:bg-[#1f2937]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Reports List */}
        <div className="space-y-4">
          {filtered.map((report) => (
            <div
              key={report.id}
              className="flex items-center justify-between p-6 bg-[#111827] rounded-lg hover:shadow-md transition border border-[#1f2937] hover:border-[#d4af37]"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-[#d4af37] bg-[#1f2937] rounded-full">
                    {report.type}
                  </span>
                  <span className="text-sm text-[#9ca3af]">{report.fileSize}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{report.title}</h3>
                <p className="text-[#9ca3af]">{report.description}</p>
                <span className="text-sm text-[#9ca3af] mt-2 block">
                  {new Date(report.date).toLocaleDateString()}
                </span>
              </div>
              <a
                href={report.url}
                download
                className="ml-4 bg-[#d4af37] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#e5c158] transition whitespace-nowrap"
              >
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
