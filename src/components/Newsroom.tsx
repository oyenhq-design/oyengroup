'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { NewsArticle } from '@/data/news';

interface NewsroomProps {
  articles: NewsArticle[];
}

export default function Newsroom({ articles }: NewsroomProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Company News',
    'OYEN GRID',
    'Engineering',
    'Technology',
    'AI',
    'Learning',
    'Case Studies',
    'Product Updates',
  ];

  // Identify the featured article (AltSchool saves 4 hours weekly)
  const featuredArticle = useMemo(() => {
    return articles.find(a => a.id === 1) || articles[0];
  }, [articles]);

  // Filter remaining articles based on category chip and search query
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      // Exclude featured article from the main grid lists to avoid duplicate display
      if (article.id === featuredArticle.id && selectedCategory === 'All') {
        return false;
      }

      // Filter by category chip
      const matchesCategory =
        selectedCategory === 'All' ||
        (selectedCategory === 'OYEN GRID' && article.source === 'OYEN GRID') ||
        (selectedCategory === 'Technology' && (article.category === 'Technology' || article.category === 'AI')) ||
        article.category.toLowerCase() === selectedCategory.toLowerCase();

      // Filter by search query
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery, featuredArticle]);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-black to-[#050505] overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative max-w-6xl mx-auto px-6 z-10 text-center md:text-left">
          <span className="text-xs md:text-sm tracking-[0.3em] text-[#d4af37] uppercase font-semibold block mb-4">
            RESOURCES
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-white leading-[1.1] tracking-tight max-w-4xl">
            Insights, Stories & <br />
            Engineering News
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#9ca3af] font-light max-w-2xl leading-relaxed">
            Discover the latest product updates, engineering insights, customer stories, research, and company announcements.
          </p>
        </div>
      </section>

      {/* Toolbar: Search & Categories */}
      <section className="py-8 bg-black border-t border-b border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          {/* Search bar */}
          <div className="max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-[#111] border border-white/10 rounded-xl px-5 py-3.5 pl-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition duration-300"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21-21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.637 10.637z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Categories Horizontal Chips Row */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs md:text-sm rounded-full font-medium transition duration-300 border ${
                  selectedCategory === category
                    ? 'bg-[#d4af37] border-[#d4af37] text-black'
                    : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 bg-black relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Show Featured Article only if we are on "All" category and not searching */}
          {selectedCategory === 'All' && !searchQuery && featuredArticle && (
            <div className="mb-20 md:mb-28">
              <div className="mb-6">
                <span className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-bold">
                  FEATURED STORY
                </span>
              </div>

              {/* Large Apple-style Featured Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#070707] border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl hover:border-[#d4af37]/20 transition duration-500 group">
                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#111]">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover transition-transform duration-750 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                <div className="lg:col-span-5 space-y-5">
                  <span className="inline-block text-xs font-semibold text-[#d4af37] tracking-wider uppercase">
                    {featuredArticle.source} &bull; {featuredArticle.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-light text-white leading-snug group-hover:text-[#d4af37] transition duration-300">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/5">
                    <span>{featuredArticle.readTime} min read</span>
                    <span>{new Date(featuredArticle.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="pt-2">
                    <Link
                      href={`/news/${featuredArticle.id}`}
                      className="inline-flex items-center text-xs font-bold text-[#d4af37] hover:text-[#e5c158] uppercase tracking-wider group/link"
                    >
                      <span className="relative pb-0.5">
                        Read Story
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d4af37] transition-all duration-300 group-hover/link:w-full" />
                      </span>
                      <span className="ml-1.5 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Articles Grid Title */}
          <div className="mb-8 border-b border-white/5 pb-4 flex justify-between items-center">
            <h3 className="text-xs md:text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h3>
            <span className="text-xs text-gray-500">{filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found</span>
          </div>

          {/* Grid list of filtered articles */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map(article => (
                <div key={article.id} className="group flex flex-col justify-between h-full bg-[#050505] border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg">
                  <div>
                    {/* Portrait card thumbnail */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                      />
                    </div>

                    <div className="p-6 space-y-4">
                      {/* Label highlighting OYEN GRID vs OYEN GROUP source */}
                      <span className="text-[10px] font-bold text-[#d4af37] tracking-wider uppercase">
                        {article.source} &bull; {article.category}
                      </span>
                      <h4 className="text-lg md:text-xl font-light text-white leading-snug group-hover:text-[#d4af37] transition duration-300">
                        {article.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 space-y-4">
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/5">
                      <span>{article.readTime} min read</span>
                      <span>{new Date(article.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div>
                      <Link
                        href={`/news/${article.id}`}
                        className="inline-flex items-center text-xs font-bold text-[#d4af37] hover:text-[#e5c158] uppercase tracking-wider group/link"
                      >
                        <span className="relative pb-0.5">
                          Read Story
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d4af37] transition-all duration-300 group-hover/link:w-full" />
                        </span>
                        <span className="ml-1.5 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 border border-dashed border-white/10 rounded-2xl bg-[#050505]">
              <p className="text-gray-500 font-light">No articles matches your query. Try a different filter or search term.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Block */}
      <section className="py-24 md:py-32 bg-[#050505]/40 backdrop-blur-[2px] border-t border-white/5 relative z-10">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs tracking-[0.3em] text-[#d4af37] uppercase font-semibold block">
            STAY CONNECTED
          </span>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight">
            Subscribe to our Insights
          </h2>
          <p className="text-sm text-gray-400 font-light max-w-md mx-auto leading-relaxed">
            Get the latest engineering insights, product updates, and case studies delivered directly to your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-2">
            <input
              type="email"
              placeholder="Email address"
              required
              className="flex-grow bg-black border border-white/10 rounded-xl px-5 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition"
            />
            <button
              type="submit"
              className="bg-[#d4af37] hover:bg-[#e5c158] text-black font-semibold text-xs uppercase tracking-wider rounded-xl py-3 px-6 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
