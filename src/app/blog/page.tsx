import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Blog | Legal Insights & Updates",
  description: "Stay informed with our latest legal insights, industry updates, and expert analysis.",
};

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "Corporate M&A Trends in 2026",
      excerpt: "Strategic insights into the evolving merger and acquisition landscape for the coming year.",
      category: "Corporate Law",
      date: "May 15, 2026",
      readTime: 5,
      image: "📊",
    },
    {
      id: 2,
      title: "New Regulatory Changes Explained",
      excerpt: "Understanding the impact of recent legislation on your business operations and compliance strategy.",
      category: "Regulatory",
      date: "May 10, 2026",
      readTime: 7,
      image: "📋",
    },
    {
      id: 3,
      title: "Intellectual Property Protection Guide",
      excerpt: "Essential strategies for protecting your company's valuable intellectual property assets.",
      category: "IP Law",
      date: "May 5, 2026",
      readTime: 8,
      image: "🔒",
    },
    {
      id: 4,
      title: "Litigation Best Practices",
      excerpt: "Tips and strategies for successfully navigating complex commercial litigation.",
      category: "Litigation",
      date: "April 28, 2026",
      readTime: 6,
      image: "⚖️",
    },
    {
      id: 5,
      title: "Tax Planning for 2026",
      excerpt: "Expert guidance on tax optimization strategies for businesses and individuals.",
      category: "Tax Law",
      date: "April 20, 2026",
      readTime: 9,
      image: "💰",
    },
    {
      id: 6,
      title: "International Business Law Primer",
      excerpt: "A comprehensive guide to navigating international legal requirements and compliance.",
      category: "International Law",
      date: "April 12, 2026",
      readTime: 10,
      image: "🌍",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Legal <span className="text-gold-500">Insights</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Stay informed with our latest analysis, industry updates, and expert commentary
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 bg-white dark:bg-navy-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="rounded-xl border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-800 overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
                >
                  <div className="h-48 bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                    {article.image}
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-gold-700 dark:text-gold-400 bg-gold-100 dark:bg-gold-900/30">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-navy-600 dark:text-slate-400 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-navy-100 dark:border-navy-700">
                      <div className="text-xs text-navy-500 dark:text-slate-500">
                        {article.date} • {article.readTime} min read
                      </div>
                      <span className="text-gold-600 dark:text-gold-400 font-semibold group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}