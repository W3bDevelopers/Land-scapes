"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 font-sans">
      <header className="relative h-screen flex items-center justify-start px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1558905734-b83d843a03c2?auto=format&fit=crop&q=80')] bg-cover bg-center scale-105"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl text-white pt-20">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-green-400 font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">
            Christchurch Premium [BUISINESS TYPE]
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6">
            [BUISINESS] <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-200">[MOTTO]</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-lg md:text-xl text-stone-300 mb-8">
            [COMPANY DESCRIPTION]
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/projects"><button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">View Gallery</button></a>
            <a href="/contact"><button className="w-full sm:w-auto border-2 border-white/30 backdrop-blur-sm px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">Book Consultation</button></a>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-stone-900">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["💧", "🦗", "🛠️"].map((emoji, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="group relative p-1 bg-gradient-to-b from-green-100 to-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="bg-white p-8 rounded-[22px]">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors text-2xl">{emoji}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">[YOUR EXPERTISE HERE]</h3>
                  <p className="text-stone-500 leading-relaxed text-sm md:text-base">[YOUR INFORMATION HERE]</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}