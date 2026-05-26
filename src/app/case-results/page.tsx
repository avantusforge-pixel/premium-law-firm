import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Case Results | Premier Legal Firm",
  description: "Explore our proven track record of successful cases and settlements.",
};

export default function CaseResultsPage() {
  const results = [
    {
      id: 1,
      title: "Multi-Billion Dollar M&A Transaction",
      amount: "$2.3 Billion",
      category: "Corporate Law",
      year: 2024,
      description: "Successfully negotiated and closed one of the largest tech industry acquisitions.",
      details: "Represented Fortune 500 tech company in multi-billion dollar acquisition. Successfully navigated complex regulatory requirements across 8 jurisdictions.",
    },
    {
      id: 2,
      title: "Product Liability Class Action Settlement",
      amount: "$150 Million",
      category: "Litigation",
      year: 2023,
      description: "Secured substantial settlement in complex product liability class action.",
      details: "Defended multinational manufacturer in class action litigation involving 50,000+ plaintiffs. Achieved favorable settlement through strategic litigation and negotiation.",
    },
    {
      id: 3,
      title: "Patent Infringement Victory",
      amount: "Patent Upheld",
      category: "Intellectual Property",
      year: 2023,
      description: "Successfully defended patent against challenges in federal court.",
      details: "Protected client's valuable technology patent through comprehensive federal litigation. Defeated multiple infringement challenges.",
    },
    {
      id: 4,
      title: "Criminal Defense Acquittal",
      amount: "Not Guilty Verdict",
      category: "Criminal Defense",
      year: 2023,
      description: "Won complete acquittal in high-profile white-collar crime trial.",
      details: "Represented executive in federal securities fraud trial. Jury returned not guilty verdict on all charges after 6-week trial.",
    },
    {
      id: 5,
      title: "Regulatory Investigation Settlement",
      amount: "$85 Million",
      category: "Corporate Law",
      year: 2022,
      description: "Negotiated favorable settlement with federal regulators.",
      details: "Represented financial services company in complex regulatory investigation. Achieved favorable resolution with minimal penalties.",
    },
    {
      id: 6,
      title: "Real Estate Dispute Resolution",
      amount: "$200 Million",
      category: "Property Law",
      year: 2022,
      description: "Resolved complex commercial real estate dispute through strategic negotiation.",
      details: "Handled multi-party real estate dispute involving commercial portfolio worth $200M. Achieved expedited resolution through mediation.",
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
              Case <span className="text-gold-500">Results</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Our proven track record of exceptional outcomes
            </p>
          </div>
        </section>

        {/* Results Grid */}
        <section className="py-20 bg-white dark:bg-navy-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((result) => (
                <div key={result.id} className="rounded-xl border border-gold-200 dark:border-gold-900/30 bg-gradient-to-br from-gold-50 to-white dark:from-gold-900/20 dark:to-navy-800 p-8 hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-gold-700 dark:text-gold-400 bg-gold-100 dark:bg-gold-900/30">
                      {result.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-3">
                    {result.title}
                  </h3>
                  <div className="mb-4 pb-4 border-b border-gold-200 dark:border-gold-900/30">
                    <div className="text-3xl font-bold text-gold-600 dark:text-gold-400">
                      {result.amount}
                    </div>
                  </div>
                  <p className="text-navy-700 dark:text-slate-300 mb-4">
                    {result.details}
                  </p>
                  <p className="text-sm text-navy-600 dark:text-slate-400">
                    <strong>Year:</strong> {result.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-gradient-to-r from-navy-900 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-gold-500 mb-2">$15B+</div>
                <p className="text-slate-300">In Recoveries</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-gold-500 mb-2">2,847+</div>
                <p className="text-slate-300">Cases Won</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-gold-500 mb-2">94%</div>
                <p className="text-slate-300">Success Rate</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-gold-500 mb-2">35+</div>
                <p className="text-slate-300">Years Track Record</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}