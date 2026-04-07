import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { GlassCard, PageTransition, Behance } from "@/components/Common";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <PageTransition showGrid={true}>
      <div className="relative h-screen w-full px-6 md:px-[100px] flex flex-col justify-center items-center overflow-hidden">
        <div className="w-full max-w-5xl relative z-10 flex flex-col gap-8 md:gap-12">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-4xl lg:text-5xl font-black text-gradient mb-4 tracking-tighter"
            >
              Let's create something extraordinary.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed font-medium"
            >
              I’m currently open to freelance projects and full-time opportunities. 
              Whether you have a groundbreaking idea or just want to chat about design, I'm all ears.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
            <div className="flex flex-col gap-3 md:gap-4">
              <GlassCard className="flex items-center gap-4 p-4 md:p-5 hover:border-indigo-500/30 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                  <Mail size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-muted-foreground mb-0.5 font-bold uppercase tracking-wider">Email Me</p>
                  <a href="mailto:naveenraja1297@gmail.com" className="text-sm md:text-base font-bold hover:text-indigo-400 transition-colors truncate block">
                    naveenraja1297@gmail.com
                  </a>
                </div>
              </GlassCard>

              <GlassCard className="flex items-center gap-4 p-4 md:p-5 hover:border-indigo-500/30 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                  <Phone size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-muted-foreground mb-0.5 font-bold uppercase tracking-wider">Call Me</p>
                  <a href="tel:+916385941180" className="text-sm md:text-base font-bold hover:text-indigo-400 transition-colors truncate block">
                    +91 6385941180
                  </a>
                </div>
              </GlassCard>

              <GlassCard className="flex items-center gap-4 p-4 md:p-5 hover:border-indigo-500/30 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                  <MapPin size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground mb-0.5 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-sm md:text-base font-bold">Coimbatore, India</p>
                </div>
              </GlassCard>
            </div>

            <GlassCard className="accent-gradient border-none p-6 md:p-10 flex flex-col justify-center items-center text-center relative overflow-hidden group min-h-[200px]">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              
              {/* Animated Glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000" />
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-black text-white mb-6 tracking-tight">Follow My Journey</h3>
                <div className="flex justify-center gap-4 md:gap-5">
                  <motion.a 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.linkedin.com/in/naveen-raja-s-80282023a/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-white border border-white/10"
                  >
                    <Linkedin size={24} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.behance.net/naveenraja12" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-white border border-white/10"
                  >
                    <Behance size={24} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href="mailto:naveenraja1297@gmail.com" 
                    className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-white border border-white/10"
                  >
                    <Mail size={24} />
                  </motion.a>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
