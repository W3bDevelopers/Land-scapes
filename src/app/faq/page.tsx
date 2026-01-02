"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    q: "[QUESTION HERE]",
    a: "[ANSWER HERE]"
  },
  {
    q: "[QUESTION HERE]",
    a: "[ANSWER HERE]"
  },
  {
    q: "[QUESTION HERE]",
    a: "[ANSWER HERE]"
  },
  {
    q: "[QUESTION HERE]",
    a: "[ANSWER HERE]"
  },
  {
    q: "[QUESTION HERE]",
    a: "[ANSWER HERE]"
  },
  {
    q: "[QUESTION HERE]",
    a: "[ANSWER HERE]"
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-stone-50 pt-24 md:pt-32">
      <div className="max-w-3xl mx-auto px-6 mb-20">
        
        {/* Header - Responsive sizes */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black text-emerald-900 mb-4 leading-tight">
            Common <span className="text-emerald-500">Questions.</span>
          </h1>
          <p className="text-stone-500 text-base md:text-lg">
            Everything you need to know about your new Canterbury lawn.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl md:rounded-3xl border border-stone-200 shadow-sm overflow-hidden"
            >
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none">
                <h3 className="text-base md:text-lg font-bold text-emerald-900 group-open:text-emerald-600 transition-colors pr-4">
                  {faq.q}
                </h3>
                <span className="text-emerald-500 transition-transform duration-300 group-open:rotate-180 flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 md:px-6 pb-6 text-stone-600 text-sm md:text-base leading-relaxed border-t border-stone-50 pt-4">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>

        {/* Call to Action - Responsive padding and text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 p-8 md:p-12 bg-emerald-900 rounded-[30px] md:rounded-[40px] text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-emerald-200 mb-8 text-sm md:text-base">We are happy to chat about your specific project needs.</p>
            <Link 
              href="/contact" 
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-full transition-all active:scale-95 text-sm md:text-base"
            >
              Contact Our Team
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full -mr-20 -mt-20 opacity-50 blur-3xl"></div>
        </motion.div>
      </div>

      {/* FOOTER - Restoration of global footer style */}
      <footer className="bg-stone-900 text-stone-400 py-16 px-6 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-stone-800 pb-12 mb-12">
            <div>
              <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tighter">LANDSCAPER</h2>
              <p className="text-sm leading-relaxed max-w-xs">
                Premium landscaping and hydroseeding across Christchurch and the greater Canterbury region.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h3>
              <ul className="space-y-4 text-sm">
                <li><Link href="/" className="hover:text-emerald-500 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
                <li><Link href="/projects" className="hover:text-emerald-500 transition-colors">Projects</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h3>
              <p className="text-sm mb-2">Christchurch, NZ</p>
              <p className="text-sm">022-188-6785</p>
            </div>
          </div>
          <div className="text-center text-[10px] md:text-xs font-medium uppercase tracking-widest">
            © 2026 LANDSCAPER Landscaping.
          </div>
        </div>
      </footer>
    </main>
  );
}