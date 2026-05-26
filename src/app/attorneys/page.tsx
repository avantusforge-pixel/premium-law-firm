import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Our Attorneys | Premier Legal Firm",
  description: "Meet our award-winning team of experienced attorneys specializing in corporate law, litigation, and more.",
};

export default function AttorneysPage() {
  const attorneys = [
    {
      id: 1,
      name: "Jonathan Mitchell",
      title: "Managing Partner",
      specialties: ["Corporate Law", "M&A", "Corporate Transactions"],
      education: ["Harvard Law School (J.D.)", "Yale University (B.A.)"],
      experience: "35+ years",
    },
    {
      id: 2,
      name: "Elizabeth Chen",
      title: "Senior Counsel",
      specialties: ["Litigation", "Dispute Resolution", "Trial Practice"],
      education: ["Columbia Law School (J.D.)", "Stanford University (B.A.)"],
      experience: "28 years",
    },
    {
      id: 3,
      name: "David Richardson",
      title: "Partner",
      specialties: ["Criminal Defense", "Appeals", "White Collar Crime"],
      education: ["Yale Law School (J.D.)", "Princeton University (B.A.)"],
      experience: "22 years",
    },
    {
      id: 4,
      name: "Sarah Anderson",
      title: "Counsel",
      specialties: ["Family Law", "Estate Planning", "Trusts & Probate"],
      education: ["NYU Law School (J.D.)", "Dartmouth College (B.A.)"],
      experience: "18 years",
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
              Our <span className="text-gold-500">Attorneys</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Award-winning legal professionals with decades of combined expertise
            </p>
          </div>
        </section>

        {/* Attorneys Grid */}
        <section className="py-20 bg-white dark:bg-navy-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {attorneys.map((attorney) => (
                <div key={attorney.id} className="rounded-xl border border-navy-200 dark:border-navy-700 p-6 hover:shadow-xl transition-shadow">
                  <div className="w-full h-48 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg mb-4 flex items-center justify-center text-4xl font-bold text-white opacity-70">
                    {attorney.name[0]}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-1">
                    {attorney.name}
                  </h3>
                  <p className="text-gold-600 dark:text-gold-400 font-semibold text-sm mb-4">
                    {attorney.title}
                  </p>
                  <p className="text-sm text-navy-600 dark:text-slate-400 mb-4">
                    <strong>Experience:</strong> {attorney.experience}
                  </p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-navy-900 dark:text-white mb-2">SPECIALTIES</p>
                    <div className="flex flex-wrap gap-1">
                      {attorney.specialties.map((spec) => (
                        <span key={spec} className="text-xs bg-gold-100 dark:bg-gold-900/20 text-gold-700 dark:text-gold-400 px-2 py-1 rounded">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy-900 dark:text-white mb-1">EDUCATION</p>
                    {attorney.education.map((edu) => (
                      <p key={edu} className="text-xs text-navy-600 dark:text-slate-400">
                        {edu}
                      </p>
                    ))}
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