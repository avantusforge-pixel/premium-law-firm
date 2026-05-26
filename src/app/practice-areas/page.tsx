import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PRACTICE_AREAS } from "@/data/constants";

export const metadata: Metadata = {
  title: "Practice Areas | Premier Legal Firm",
  description: "Explore our comprehensive practice areas and legal expertise.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Practice <span className="text-gold-500">Areas</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Comprehensive legal expertise across multiple disciplines
            </p>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-20 bg-white dark:bg-navy-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRACTICE_AREAS.map((area) => (
                <div
                  key={area.id}
                  className="rounded-xl border border-navy-200 dark:border-navy-700 bg-gradient-to-br from-white to-navy-50 dark:from-navy-800 dark:to-navy-900 p-8 hover:shadow-xl hover:border-gold-500 transition-all group cursor-pointer"
                >
                  <div className="mb-4 p-3 rounded-lg bg-gold-50 dark:bg-gold-900/20 w-fit group-hover:scale-110 transition-transform">
                    <div className="w-6 h-6 text-gold-600 dark:text-gold-400">
                      ⚖️
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">
                    {area.name}
                  </h3>
                  <p className="text-navy-600 dark:text-slate-400 mb-4">
                    {area.description}
                  </p>
                  <div className="pt-4 border-t border-navy-200 dark:border-navy-700 text-gold-600 dark:text-gold-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="py-20 bg-gradient-to-br from-navy-50 to-white dark:from-navy-800 dark:to-navy-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-8 text-center">
              Comprehensive Legal Solutions
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-navy-700 dark:text-slate-300 mb-6">
                Our firm provides specialized legal representation across a wide range of practice areas. Whether you're a multinational corporation, emerging business, or individual, we have the expertise to handle your legal challenges.
              </p>
              <p className="text-lg text-navy-700 dark:text-slate-300 mb-6">
                With dedicated teams of specialists in each practice area, we deliver strategic, results-oriented legal services tailored to your specific needs and objectives.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}