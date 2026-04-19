import Link from 'next/link';
import { newsArticles } from '@/data/news';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }: { params: { id: string } }) {
  const article = newsArticles.find((a) => a.id === parseInt(params.id));
  return {
    title: `${article?.title} - Oyengroup News`,
    description: article?.excerpt,
  };
}

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const article = newsArticles.find((a) => a.id === parseInt(params.id));

  if (!article) {
    notFound();
  }

  const relatedArticles = newsArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <main>
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/news" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← Back to News
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
          <div className="flex flex-wrap gap-4 text-blue-100">
            <span className="inline-block px-3 py-1 bg-blue-700 rounded-full text-sm">
              {article.category}
            </span>
            <span>{article.author}</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
            <span>{article.readTime} min read</span>
          </div>
        </div>
      </section>

      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover rounded-lg mb-12"
          />

          <div className="prose prose-lg max-w-none mb-12">
            {article.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-lg text-gray-700 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="border-t pt-12 mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link key={relatedArticle.id} href={`/news/${relatedArticle.id}`}>
                    <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition group cursor-pointer h-full">
                      <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
                        <img
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {new Date(relatedArticle.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </main>
  );
}
