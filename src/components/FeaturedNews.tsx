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
    <section className="py-20 md:py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Latest News</h2>
            <p className="text-base md:text-lg text-[#9ca3af] leading-relaxed">
              Stay updated with Oyengroup's latest developments and announcements
            </p>
          </div>
          <Link href="/news" className="text-[#d4af37] hover:text-[#e5c158] font-semibold text-base hidden md:block whitespace-nowrap">
            View All News →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {news.map((article) => (
            <Link key={article.id} href={`/news/${article.id}`}>
              <div className="h-full bg-[#111827] rounded-lg overflow-hidden hover:shadow-lg transition group cursor-pointer border border-[#111827] hover:border-[#d4af37]">
                <div className="h-48 bg-linear-to-br from-[#1f2937] to-[#111827] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-[#d4af37] bg-[#1f2937] rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-[#9ca3af]">{article.readTime} min</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-[#d4af37] transition leading-tight line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-base text-[#9ca3af] mb-4 leading-relaxed line-clamp-2">{article.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-[#9ca3af]">
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
