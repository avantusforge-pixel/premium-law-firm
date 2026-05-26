import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Our Firm",
  description: "Learn about our history, mission, values, and commitment to legal excellence.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Our <span className="text-gold-500">Firm</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              With over 35 years of distinguished legal practice, we've established ourselves as a beacon of excellence in the global legal landscape.
            </p>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-white dark:bg-navy-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-navy-700 dark:text-slate-300 text-lg leading-relaxed">
                  To provide exceptional legal representation that protects our clients' interests, advances their objectives, and upholds the highest standards of professionalism and integrity.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">
                  Our Values
                </h2>
                <ul className="space-y-3 text-navy-700 dark:text-slate-300">
                  <li>✓ Excellence in every legal matter</li>
                  <li>✓ Unwavering client commitment</li>
                  <li>✓ Ethical conduct above all</li>
                  <li>✓ Innovation in legal strategies</li>
                  <li>✓ Diversity and inclusion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-gradient-to-r from-navy-900 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-gold-500 mb-2">35+</div>
                <p className="text-slate-300">Years of Service</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-gold-500 mb-2">2,847+</div>
                <p className="text-slate-300">Cases Won</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-gold-500 mb-2">250+</div>
                <p className="text-slate-300">Attorneys</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-gold-500 mb-2">12</div>
                <p className="text-slate-300">Global Offices</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white dark:bg-navy-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-navy-900 dark:text-white mb-16">
              Our Journey
            </h2>
            <div className="space-y-8">
              {[
                { year: "1989", title: "Founded", description: "Premier Legal Firm established with 5 founding partners" },
                { year: "1998", title: "Expansion", description: "Opened first international office in London" },
                { year: "2008", title: "Global Reach", description: "Expanded to 12 offices across major financial centers" },
                { year: "2020", title: "Innovation", description: "Launched AI-powered legal research platform" },
                { year: "2026", title: "Excellence", description: "Recognized as Top 10 Global Law Firm" },
              ].map((milestone, i) => (
                <div key={i} className="flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold">
                      {i + 1}
                    </div>
                    {i < 4 && <div className="w-1 h-20 bg-gold-500 mt-4" />}
                  </div>
                  <div className="pb-8">
                    <div className="text-sm font-semibold text-gold-600 dark:text-gold-400">{milestone.year}</div>
                    <h3 className="text-2xl font-bold text-navy-900 dark:text-white">{milestone.title}</h3>
                    <p className="text-navy-600 dark:text-slate-400 mt-2">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
