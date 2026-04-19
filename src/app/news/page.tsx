export const metadata = {
  title: 'News & Updates - Oyengroup',
  description: 'Latest news, announcements, and updates from Oyengroup',
};

import Link from 'next/link';
import { newsArticles } from '@/data/news';

export default function NewsPage() {
  const categories = Array.from(new Set(newsArticles.map((a) => a.category)));

  return (
    <main>
      <section className="bg-black text-white py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">News & Media</h1>
          <p className="text-base md:text-lg text-[#9ca3af] leading-relaxed max-w-2xl">
            Stay informed with the latest updates from Oyengroup
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#111827] p-6 rounded-lg sticky top-20 border border-[#1f2937]">
                <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const count = newsArticles.filter((a) => a.category === category).length;
                    return (
                      <Link key={category} href={`#`}>
                        <button className="w-full text-left px-4 py-2 rounded hover:bg-[#1f2937] text-white hover:text-[#d4af37] transition">
                          {category} ({count})
                        </button>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {newsArticles.map((article) => (
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
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-3">
                          {article.category}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <span>{article.readTime} min read</span>
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
