"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/20">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-black text-emerald-900 tracking-tighter">
          [COMPANY LOGO]
        </Link>

        {/* DESKTOP LINKS (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-bold text-stone-600 hover:text-emerald-600 transition-colors">
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="bg-emerald-700 text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-800 transition-all">
            Get a Quote
          </Link>
        </div>

        {/* MOBILE MENU BUTTON (Hidden on Desktop) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-emerald-900 focus:outline-none p-2"
        >
          <div className="space-y-1.5">
            <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} className="block w-6 h-0.5 bg-current"></motion.span>
            <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="block w-6 h-0.5 bg-current"></motion.span>
            <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} className="block w-6 h-0.5 bg-current"></motion.span>
          </div>
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-white rounded-[32px] shadow-2xl overflow-hidden border border-stone-100"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-emerald-900"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="bg-emerald-600 text-white text-center py-4 rounded-2xl font-bold"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}