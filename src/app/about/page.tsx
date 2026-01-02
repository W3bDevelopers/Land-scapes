"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Data for the "Stats" section - RESTORED ORIGINAL
const stats = [
  { value: "200+", label: "[STATS LABEL]" },
  { value: "200+", label: "[STATS LABEL]" },
  { value: "200+", label: "[STATS LABEL]" },
  { value: "200+", label: "[STATS LABEL]" },
];

const features = [
  {title: "[YOUR FEATURE HERE]", text: "[YOUR FEATURE DESCRIPTION HERE]"},
  {title: "[YOUR FEATURE HERE]", text: "[YOUR FEATURE DESCRIPTION HERE]"},
  {title: "[YOUR FEATURE HERE]", text: "[YOUR FEATURE DESCRIPTION HERE]"},
  {title: "[YOUR FEATURE HERE]", text: "[YOUR FEATURE DESCRIPTION HERE]"},
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-50 pt-24">
      
      {/* HERO HEADER - Responsive text sizes added */}
      <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black text-emerald-900 mb-6 leading-tight"
        >
          Rooted in <br/>
          <span className="text-emerald-500">Christchurch</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed border-l-4 border-emerald-500 pl-6"
        >
          [COMPANY DESCRIPTION HERE]
        </motion.p>
      </section>

      {/* MAIN CONTENT GRID */}
      <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: Image */}
        <motion.div 
           initial={{ scale: 0.9, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true }}
           className="relative h-[350px] md:h-[600px] rounded-[40px] overflow-hidden shadow-2xl border-4 md:border-8 border-white"
        >
          <div className="absolute inset-0 bg-stone-200 flex items-center justify-center text-stone-400 font-bold">
             [Team/Work Photo]
          </div>
          <Image 
            src="/images/placeholder.png" 
            alt="The Landscaping Team" 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
        
        {/* Right: Text & Feature Grid */}
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-4">Local Experts</h3>
            <p className="text-stone-600 leading-relaxed text-base md:text-lg">
               Our team is composed of certified digger operators, expert lawn specialists, and passionate horticulturalists who bring a wealth of knowledge to every project. 
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full mb-4"></div>
                <h4 className="font-bold text-emerald-900 text-lg mb-2">{f.title}</h4>
                <p className="text-sm text-stone-500 leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION - Replaced mt-12 with py-24 to fix white gap */}
      <section className="bg-emerald-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-6xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-emerald-200 font-bold uppercase tracking-widest text-[10px] md:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER - Removed mt-12 so it touches the green section */}
      <footer className="bg-stone-900 text-stone-400 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-stone-800 pb-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-black text-white mb-6">LANDSCAPER</h2>
            <p className="max-w-sm mb-6">
              Professional landscaping services in Christchurch. transforming outdoor spaces with precision and care since 2025.
            </p>
            <div className="flex gap-4">
               <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer text-white text-xs font-bold">FB</div>
               <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer text-white text-xs font-bold">IG</div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-emerald-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-emerald-500 transition-colors">Our Projects</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500">📍</span>
                <span> Christchurch,<br/>New Zealand</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500">📞</span>
                <span>022-188-6785</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2025 LANDSCAPER Landscaping. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0 uppercase tracking-widest">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}