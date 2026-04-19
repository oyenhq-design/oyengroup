'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NewsArticle } from '@/data/news';

export default function FeaturedNews() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/news?limit=3')
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading news...</div>;
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-xl text-gray-600">
              Stay updated with Oyengroup's latest developments and announcements
            </p>
          </div>
          <Link href="/news" className="text-blue-600 hover:text-blue-700 font-semibold">
            View All News →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article) => (
            <Link key={article.id} href={`/news/${article.id}`}>
              <div className="h-full bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition group cursor-pointer">
                <div className="h-48 bg-linear-to-br from-blue-400 to-blue-600 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.readTime} min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{article.author}</span>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
