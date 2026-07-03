import React from 'react';
import Link from 'next/link';
import { newsArticles } from '@/data/news';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const resolvedParams = await params;
  const article = newsArticles.find((a) => a.id === parseInt(resolvedParams.id));
  return {
    title: `${article?.title || 'Article'} - OYEN GROUP`,
    description: article?.excerpt,
  };
}

export default async function NewsDetailPage({ params }: { params: { id: string } }) {
  const resolvedParams = await params;
  const article = newsArticles.find((a) => a.id === parseInt(resolvedParams.id));

  if (!article) {
    notFound();
  }

  const relatedArticles = newsArticles
    .filter((a) => (a.category === article.category || a.source === article.source) && a.id !== article.id)
    .slice(0, 3);

  return (
    <main className="bg-black text-white min-h-screen relative">
      {/* Background Subtle Blueprint Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-screen select-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bg-grid-detail" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#d4af37" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-grid-detail)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5 bg-gradient-to-b from-black to-[#050505] overflow-hidden z-10">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/news"
            className="inline-flex items-center text-xs font-bold text-[#d4af37] hover:text-[#e5c158] uppercase tracking-wider mb-8 group/back"
          >
            <span className="mr-1.5 transition-transform duration-300 group-hover/back:-translate-x-1">←</span>
            <span className="relative pb-0.5">
              Back to Insights & News
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d4af37] transition-all duration-300 group-hover/back:w-full" />
            </span>
          </Link>

          <span className="block text-xs font-bold text-[#d4af37] tracking-wider uppercase mb-4">
            {article.source} &bull; {article.category}
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight tracking-tight mb-8">
            {article.title}
          </h1>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500 font-light border-t border-white/5 pt-6">
            <div>
              <span className="text-gray-600 mr-1.5">Written by</span>
              <span className="text-gray-300 font-normal">{article.author}</span>
            </div>
            <div className="hidden sm:block text-gray-700">|</div>
            <div>
              <span className="text-gray-600 mr-1.5">Published</span>
              <span className="text-gray-300 font-normal">
                {new Date(article.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            <div className="hidden sm:block text-gray-700">|</div>
            <div>
              <span className="text-gray-300 font-normal">{article.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24 bg-black relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 bg-[#111] mb-16 shadow-2xl">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 text-base md:text-lg text-gray-400 font-light leading-relaxed">
            {article.content.split('\n\n').map((paragraph, idx) => {
              // Render blockquotes if the paragraph starts with a quote
              if (paragraph.startsWith('"') || paragraph.startsWith('“')) {
                return (
                  <blockquote key={idx} className="border-l-2 border-[#d4af37] pl-6 py-2 italic my-8 text-white">
                    <p className="text-lg md:text-xl font-light leading-relaxed">{paragraph}</p>
                  </blockquote>
                );
              }
              return (
                <p key={idx}>
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="border-t border-white/10 pt-16 mt-20">
              <h3 className="text-xs tracking-[0.25em] text-[#d4af37] uppercase font-bold mb-10">
                Related Articles
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link key={relatedArticle.id} href={`/news/${relatedArticle.id}`} className="group">
                    <div className="bg-[#050505] border border-white/5 group-hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 shadow-md flex flex-col justify-between h-full">
                      <div>
                        <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
                          <img
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                          />
                        </div>
                        <div className="p-4 space-y-2">
                          <span className="text-[9px] font-bold text-[#d4af37] tracking-wider uppercase">
                            {relatedArticle.source}
                          </span>
                          <h4 className="text-sm font-semibold text-white group-hover:text-[#d4af37] transition duration-300 line-clamp-2">
                            {relatedArticle.title}
                          </h4>
                        </div>
                      </div>
                      
                      <div className="p-4 pt-0 text-[10px] text-gray-500">
                        {new Date(relatedArticle.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
