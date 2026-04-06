import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { GlassCard, PageTransition, Behance } from "@/components/Common";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <PageTransition showGrid={true}>
      <div className="relative min-h-screen w-full px-6 md:px-[100px] pt-32 overflow-hidden">
        <div className="py-8 md:py-12 relative z-10">
          <div className="mb-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold text-gradient mb-6"
          >
            Let's create something extraordinary.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-xl leading-relaxed"
          >
            I’m currently open to freelance projects and full-time opportunities. 
            Whether you have a groundbreaking idea or just want to chat about design, I'm all ears.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <GlassCard className="flex items-center gap-6 p-8">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Mail size={32} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email Me</p>
                <a href="mailto:naveenraja1297@gmail.com" className="text-xl font-bold hover:text-indigo-400 transition-colors">
                  naveenraja1297@gmail.com
                </a>
              </div>
            </GlassCard>

            <GlassCard className="flex items-center gap-6 p-8">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Phone size={32} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Call Me</p>
                <a href="tel:+916385941180" className="text-xl font-bold hover:text-indigo-400 transition-colors">
                  +91 6385941180
                </a>
              </div>
            </GlassCard>

            <GlassCard className="flex items-center gap-6 p-8">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <MapPin size={32} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-xl font-bold">Coimbatore, India</p>
              </div>
            </GlassCard>
          </div>

          <GlassCard className="accent-gradient border-none p-12 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-8">Follow My Journey</h3>
              <div className="flex justify-center gap-6">
                <a href="https://www.linkedin.com/in/naveen-raja-s-80282023a/" target="_blank" rel="noopener noreferrer" className="p-6 rounded-3xl bg-white/10 hover:bg-white/20 transition-all text-white hover:scale-110">
                  <Linkedin size={32} />
                </a>
                <a href="https://www.behance.net/naveenraja12" target="_blank" rel="noopener noreferrer" className="p-6 rounded-3xl bg-white/10 hover:bg-white/20 transition-all text-white hover:scale-110">
                  <Behance size={32} />
                </a>
                <a href="mailto:naveenraja1297@gmail.com" className="p-6 rounded-3xl bg-white/10 hover:bg-white/20 transition-all text-white hover:scale-110">
                  <Mail size={32} />
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
      </div>
    </PageTransition>
  );
}
