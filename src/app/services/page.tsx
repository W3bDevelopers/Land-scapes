"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// --- DATA CONFIGURATION - FULLY RESTORED ---

const mainServices = [
  {
    title: "YOUR SERVICE HERE",
    description: "DESCRIPTION HERE",
    features: ["Feature One", "Feature Two", "Feature Three"],
    image: "/images/placeholer.png",
    placeholderColor: "bg-black/10"
  },
  {
    title: "YOUR SERVICE HERE",
    description: "DESCRIPTION HERE",
    features: ["Feature One", "Feature Two", "Feature Three"],
    image: "/images/placeholer.png",
    placeholderColor: "bg-black/10"
  },
  {
    title: "YOUR SERVICE HERE",
    description: "DESCRIPTION HERE",
    features: ["Feature One", "Feature Two", "Feature Three"],
    image: "/images/placeholer.png",
    placeholderColor: "bg-black/10"
  },
  {
    title: "YOUR SERVICE HERE",
    description: "DESCRIPTION HERE",
    features: ["Feature One", "Feature Two", "Feature Three"],
    image: "/images/placeholer.png",
    placeholderColor: "bg-black/10"
  },
];

const checklistServices = [
    "EXTRA SERVICE",
    "EXTRA SERVICE",
    "EXTRA SERVICE",
    "EXTRA SERVICE",
    "EXTRA SERVICE",
    "EXTRA SERVICE",
    "EXTRA SERVICE",
    "EXTRA SERVICE",
    "EXTRA SERVICE",
    "EXTRA SERVICE",
    "EXTRA SERVICE",
    "EXTRA SERVICE",
];

// --- COMPONENT ---

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-stone-50 pt-24">
      
      {/* 1. HERO HEADER - Text sizes updated for mobile */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black text-emerald-900 mb-6"
        >
          [Expertise <span className="text-emerald-500">Text]</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto">
          [EXPERTISE DESCRIPTION HERE]
        </p>
      </section>

      {/* MAIN SERVICES (Zig-Zag Layout) - Spacing adjusted for small screens */}
      <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto space-y-20 md:space-y-32">
        {mainServices.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col gap-8 md:gap-12 items-center ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            {/* Image Side */}
            <div className="flex-1 w-full">
              <div className={`relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl ${service.placeholderColor}`}>
                <div className="absolute inset-0 flex items-center justify-center text-stone-500/50 font-bold text-xl md:text-2xl">
                  {service.title} Image
                </div>
                
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Text Side */}
            <div className="flex-1 space-y-4 md:space-y-6 w-full">
              <div className="w-12 h-2 bg-emerald-500 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">{service.title}</h2>
              <p className="text-base md:text-lg text-stone-600 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 pt-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-stone-700 text-sm md:text-base">
                    <span className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-emerald-100 text-emerald-600 text-[10px] md:text-xs">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 3. ADDITIONAL CAPABILITIES - No top margin to avoid gaps */}
      <section className="bg-emerald-900 py-20 px-6 md:px-12 text-white rounded-t-[40px] md:rounded-t-[60px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Additional Capabilities</h2>
            <p className="text-emerald-200 text-sm md:text-base">We handle the little details too.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {checklistServices.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/20 transition-colors"
              >
                <div className="text-emerald-400">✦</div>
                <span className="font-semibold tracking-wide text-sm md:text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER - Removed border-t and fixed gaps */}
      <footer className="bg-stone-900 text-stone-400 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 mb-12 border-b border-stone-800">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-black text-white mb-6">[SERVICE]</h2>
            <p className="max-w-sm mb-6 text-sm md:text-base">
              [SERVICE DESCRIPTION HERE]
            </p>
            
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors">
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                   <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.797 1.603-2.797 2.898v1.074h5.306l-.525 3.667h-4.782v7.98h-5.016z" />
                 </svg>
               </a>

               <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white transition-all">
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                 </svg>
               </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h3>
            <ul className="space-y-4 text-sm">
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
                <span>[CITY], [COUNTRY]</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500">📞</span>
                <span>022-188-6785</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] md:text-sm uppercase tracking-widest">
          <p>© 2025 [COMPANY NAME]. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}