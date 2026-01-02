"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    emailjs.sendForm('MYSERVICEID', 'MYTEMPLATEID', form.current!, 'MYPUBLICKEY')
      .then(() => {
          setIsSuccess(true);
          setIsSending(false);
          form.current?.reset();
      }, () => {
          alert("Failed to send email.");
          setIsSending(false);
      });
  };

  return (
    <main className="min-h-screen bg-stone-50 pt-28 md:pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-4xl md:text-6xl font-black text-emerald-900 mb-6 tracking-tight">Get a <span className="text-emerald-500">Quote.</span></h1>
          <p className="text-lg md:text-xl text-stone-500 mb-8 md:mb-12">Fill out the form and we'll get back to you within 24 hours.</p>
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm"><span className="text-2xl">📍</span><p className="font-bold text-stone-700 text-sm md:text-base">Serving Christchurch</p></div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm"><span className="text-2xl">📞</span><p className="font-bold text-stone-700 text-sm md:text-base">022-188-6785</p></div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          {isSuccess ? (
            <div className="bg-emerald-600 text-white p-8 md:p-12 rounded-[40px] text-center shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Message Sent!</h2>
              <button onClick={() => setIsSuccess(false)} className="underline">Send another</button>
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="bg-white p-6 md:p-12 rounded-[30px] md:rounded-[40px] shadow-2xl border border-stone-100">
              <div className="space-y-5 md:space-y-6">
                <div><label className="block text-xs font-bold text-black mb-2 uppercase tracking-widest">Your Name</label><input name="user_name" required type="text" className="w-full bg-stone-50 border text-black p-4 rounded-xl outline-none" placeholder="John Doe" /></div>
                <div><label className="block text-xs font-bold text-black mb-2 uppercase tracking-widest">Email Address</label><input name="user_email" required type="email" className="w-full bg-stone-50 border text-black p-4 rounded-xl outline-none" placeholder="john@example.com" /></div>
                <div><label className="block text-xs font-bold text-black mb-2 uppercase tracking-widest">Message</label><textarea name="message" required rows={4} className="w-full bg-stone-50 border text-black p-4 rounded-xl outline-none" placeholder="How can we help?"></textarea></div>
                <button disabled={isSending} type="submit" className={`w-full py-4 md:py-5 rounded-xl font-bold text-white transition-all ${isSending ? 'bg-stone-400' : 'bg-emerald-600 hover:bg-emerald-700'}`}>
                  {isSending ? "Sending..." : "Request Free Quote"}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </main>
  );
}