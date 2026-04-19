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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Reports & Documents</h2>
        <p className="text-xl text-gray-600 mb-12">
          Access our latest financial reports, sustainability initiatives, and research publications
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setFilterType(null)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              filterType === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
              className="flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:shadow-md transition"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                    {report.type}
                  </span>
                  <span className="text-sm text-gray-500">{report.fileSize}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{report.title}</h3>
                <p className="text-gray-600">{report.description}</p>
                <span className="text-sm text-gray-500 mt-2 block">
                  {new Date(report.date).toLocaleDateString()}
                </span>
              </div>
              <a
                href={report.url}
                download
                className="ml-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition whitespace-nowrap"
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
