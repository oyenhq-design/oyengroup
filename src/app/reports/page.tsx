'use client';

import { useState, useEffect } from 'react';
import { Report } from '@/data/reports';

export default function ReportsPage() {
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
  const types = Array.from(new Set(reports.map((r) => r.type)));

  if (loading) {
    return <div className="text-center py-12">Loading reports...</div>;
  }

  return (
    <main>
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Reports & Documents</h1>
          <p className="text-base md:text-lg text-blue-100 leading-relaxed max-w-2xl">
            Access financial reports, sustainability initiatives, and research publications
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setFilterType(null)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filterType === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Reports
            </button>
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  filterType === type
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {filtered.slice(0, 2).map((report) => (
              <div key={report.id} className="bg-linear-to-br from-blue-600 to-blue-800 text-white p-8 rounded-lg">
                <span className="inline-block px-3 py-1 bg-blue-400 text-blue-900 rounded-full text-sm font-semibold mb-4">
                  {report.type}
                </span>
                <h3 className="text-2xl font-bold mb-3">{report.title}</h3>
                <p className="text-blue-100 mb-6">{report.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200 text-sm">{report.fileSize}</span>
                  <a
                    href={report.url}
                    download
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Reports List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Reports</h2>
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
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{report.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{report.description}</p>
                  <span className="text-xs text-gray-500">
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
    </main>
  );
}
