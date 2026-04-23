/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Calendar, MapPin, Clock, Info } from "lucide-react";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="min-h-screen bg-editorial-black text-editorial-paper font-sans relative overflow-hidden flex flex-col selection:bg-gold/30">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] text-[40vw] font-serif italic text-white/[0.03] select-none leading-none pointer-events-none">
        26
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 flex flex-col relative z-20"
      >
        {/* Top Navigation Style Header */}
        <header className="w-full p-8 md:p-12 flex justify-between items-start">
          <motion.div variants={itemVariants} className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold mb-1">Invitation No.</span>
            <span className="text-xs font-mono opacity-50 uppercase">04-26-2026-GT</span>
          </motion.div>
          <motion.div variants={itemVariants} className="hidden md:flex flex-col text-right">
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold mb-1">An Exclusive Double Celebration</span>
            <div className="h-[1px] w-full bg-gold/30 mt-2"></div>
          </motion.div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 px-8 md:px-12 flex flex-col justify-center">
          <div className="flex flex-col md:flex-row md:items-end mb-12 gap-6 md:gap-12">
            <motion.div 
              variants={itemVariants}
              className="hidden md:block w-1 bg-gold h-48"
            />
            <div className="flex flex-col">
              <motion.h2 
                variants={itemVariants}
                className="text-xs md:text-sm uppercase tracking-[0.6em] text-gold mb-6 font-medium"
              >
                The Honor of Your Presence is Requested
              </motion.h2>
              <motion.h1 
                variants={itemVariants}
                className="text-6xl md:text-[120px] lg:text-[140px] font-serif italic leading-[0.8] tracking-tighter"
              >
                Gaurik <br className="md:hidden" />
                <span className="text-2xl md:text-4xl font-sans not-italic align-middle mx-2 md:mx-4 text-white/30">&</span> <br className="md:hidden" />
                Tanush
              </motion.h1>
            </div>
          </div>

          {/* Grid Information */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-4 md:mt-12 w-full pb-12">
            <motion.div variants={itemVariants} className="md:col-span-3 md:border-r border-white/10 pr-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4 flex items-center gap-2">
                <Calendar size={12} strokeWidth={3} /> The Date
              </p>
              <p className="text-3xl font-serif">Sunday</p>
              <p className="text-xl font-serif text-gold tracking-tight">April 26, 2026</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="md:col-span-3 md:border-r border-white/10 pr-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4 flex items-center gap-2">
                <MapPin size={12} strokeWidth={3} /> The Venue
              </p>
              <p className="text-3xl font-serif leading-tight">The Nest</p>
              <p className="text-sm uppercase tracking-widest opacity-60">Hotel Grand Sharda</p>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-2 md:border-r border-white/10 pr-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4 flex items-center gap-2">
                <Clock size={12} strokeWidth={3} /> The Hour
              </p>
              <p className="text-3xl font-serif tracking-tighter">5:00</p>
              <p className="text-sm uppercase tracking-widest opacity-60">In the Evening</p>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col justify-center">
              <div className="bg-editorial-dark border border-gold/20 p-6 md:p-8 flex flex-col items-center text-center group hover:border-gold/40 transition-colors">
                <p className="text-[9px] uppercase tracking-[0.4em] text-gold mb-2 font-bold">Gifting Policy</p>
                <p className="text-lg md:text-xl font-serif italic mb-2">No Gifts, Please</p>
                <p className="text-[10px] uppercase tracking-[0.15em] opacity-40 leading-relaxed max-w-[240px]">
                  Your presence and well-wishes are the only presents we desire for this milestone celebration.
                </p>
              </div>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
          <motion.div variants={itemVariants} className="max-w-xs text-center md:text-left">
            <p className="text-[10px] leading-relaxed opacity-40 uppercase tracking-[0.2em]">
              Kindly RSVP by the fifteenth of April.<br/>Dress Code: Semi-Formal / Elegant.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-4 group cursor-default"
          >
            <div className="h-[1px] w-12 md:w-24 bg-white/20 group-hover:w-32 transition-all duration-700"></div>
            <span className="text-[10px] uppercase tracking-[1em] font-bold text-gold">Curated by Gaurik</span>
          </motion.div>
        </footer>
      </motion.div>

      {/* Vertical Global Accent Line */}
      <div className="absolute left-8 md:left-12 top-0 h-full w-[1px] bg-white/5 pointer-events-none"></div>
    </div>
  );
}
