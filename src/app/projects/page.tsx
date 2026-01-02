"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
    "/images/projectsplaceholder.png",
    "/images/projectsplaceholder.png",
    "/images/projectsplaceholder.png",
    "/images/projectsplaceholder.png",
    "/images/projectsplaceholder.png",
    "/images/projectsplaceholder.png"
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-stone-50 pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        {/* Header - Text sizes updated for mobile compatibility */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-emerald-900 mb-4 leading-tight">
            [TITLE] <span className="text-emerald-500">[HIGHLIGHTED TEXT]</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-500 max-w-2xl">
            [BRIEF DESCRIPTION ABOUT PROJECT GALLERY]
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg border border-stone-200"
            >
              <Image 
                src={src} 
                alt={`Project ${i + 1}`} 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER - Sits flush at the bottom */}
      <footer className="bg-stone-900 text-stone-400 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-stone-800 pb-12 mb-12">
            
            {/* Branding */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">[COMPANY NAME]</h2>
              <p className="max-w-sm mb-6 text-sm md:text-base leading-relaxed">
                [COMPANY DESCRIPTION HERE]
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer text-white font-bold text-xs">FB</div>
                <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer text-white font-bold text-xs">IG</div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h3>
              <ul className="space-y-4 text-sm">
                <li><Link href="/" className="hover:text-emerald-500 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-emerald-500 transition-colors">Services</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500">📍</span>
                  <span>[CITY], [COUNTRY]</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500">📞</span>
                  <span>022-188-6785</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-medium uppercase tracking-widest gap-4 text-center">
            <p>© 2026 [COMPANY NAME]. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}