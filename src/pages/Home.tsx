import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Download, Code, GraduationCap, Search, Palette, Briefcase, Users, BookOpen, Layout, RefreshCw, Zap, Target, Mail, Send, Sparkles, PenTool, MousePointer, Monitor, MapPin, Globe, Lightbulb, Compass, Layers, CheckCircle, Eye, Check, TrendingUp } from "lucide-react";
import { Badge, GlassCard, SectionTitle, PageTransition } from "@/components/Common";
import { Link, useNavigate } from "react-router-dom";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SparklesCore } from "@/components/ui/sparkles";
import { cn } from "@/lib/utils";
import { useScroll, useTransform } from "motion/react";

import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { useTheme } from "@/components/ThemeProvider";

import { projects } from "@/data/projects";
import { CometCard } from "@/components/ui/comet-card";
import { BorderBeam } from "@/components/ui/border-beam";

export function Home() {
  const { theme } = useTheme();
  const particleColor = theme === "dark" ? "#FFFFFF" : "#09090b";
  const navigate = useNavigate();



  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden bg-background">
        
        {/* HERO SECTION WRAPPER - Isolates all hero backgrounds and floating elements strictly to the hero viewport height */}
        <div className="relative w-full min-h-[100vh] md:min-h-screen overflow-hidden flex flex-col justify-center items-center">
          
          {/* High-visibility grid background (30% opacity) & a single radial glow centered behind the Hero section */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#54268F]/15 rounded-full blur-[140px]" />
          </div>

          {/* Floating Figma-like workspace UI / digital design elements in Hero background */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
            
            {/* 1. Vector Path & Anchor Points (Top-Left) - Shifted top and far left so half of it is visible off-screen */}
            <motion.div 
              animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[4%] left-[-12%] sm:left-[-8%] md:left-[-6%] opacity-30 transition-all duration-300 scale-[0.55] sm:scale-[0.6]"
            >
              <div className="relative">
                <svg width="180" height="100" viewBox="0 0 180 100" fill="none">
                  <path d="M10 80 Q 90 10, 170 80" stroke="rgba(84, 38, 143, 0.85)" strokeWidth="3" strokeDasharray="4 4" />
                  <path d="M10 80 Q 90 10, 170 80" stroke="#54268F" strokeWidth="3.5" />
                  <circle cx="10" cy="80" r="6" fill="#11071F" stroke="#54268F" strokeWidth="3.5" />
                  <circle cx="90" cy="45" r="6" fill="#54268F" />
                  <circle cx="170" cy="80" r="6" fill="#11071F" stroke="#54268F" strokeWidth="3.5" />
                  <line x1="90" y1="45" x2="90" y2="15" stroke="#54268F" strokeWidth="2.5" />
                  <circle cx="90" cy="15" r="5.5" fill="#54268F" />
                </svg>
                <div className="absolute top-[48px] left-[98px] flex items-center gap-1.5 bg-[#1A0B2E] border-2 border-[#54268F] rounded-md px-2.5 py-1 text-[10px] font-mono text-[#EBE9EA] shadow-lg shadow-purple-500/30">
                  <MousePointer size={12} className="rotate-[-90deg] fill-[#EBE9EA] text-[#EBE9EA]" />
                  <span className="font-extrabold tracking-wider">AnchorPoint</span>
                </div>
              </div>
            </motion.div>

            {/* 2. Designer Cursor Coordinate Badge ("Naveen Raja") (Middle-Left) - Reduced transparency (30% opacity), shifted 50px up and reduced size */}
            <motion.div 
              animate={{ y: [15, -15, 15], rotate: [0, 4, -4, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[44%] left-[2%] sm:left-[5%] opacity-30 transition-all duration-300 scale-[0.55] sm:scale-[0.6]"
            >
              <div className="flex items-center gap-2 bg-[#54268F] text-white text-[11px] font-mono font-bold px-3 py-2 rounded shadow-xl shadow-[#54268F]/50 border-2 border-white/50">
                 <MousePointer size={12} className="fill-white text-white" />
                 <span className="font-black">Naveen_Raja</span>
                 <span className="bg-white/20 text-[9px] px-1.5 py-0.5 rounded font-black">X: 180</span>
              </div>
            </motion.div>

            {/* 3. Sizing Wireframe & Handles (Top-Right) - Shifted top and far right so half of it is visible off-screen */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-[4%] right-[-12%] sm:right-[-8%] md:right-[-6%] opacity-30 transition-all duration-300 scale-[0.55] sm:scale-[0.6]"
            >
              <div className="border-2 border-dashed border-[#0C8BE8] p-4 rounded-xl flex flex-col items-center justify-center relative bg-[#1A0B2E] shadow-2xl shadow-[#0C8BE8]/25">
                <div className="absolute -top-3 left-4 px-2.5 py-0.5 bg-[#11071F] text-[9px] font-mono text-[#0C8BE8] border-2 border-[#0C8BE8] rounded font-black">
                  Frame: Hero_Grid
                </div>
                <div className="w-40 h-24 border-2 border-[#0C8BE8]/40 rounded-lg flex items-center justify-center relative bg-[#11071F]">
                  <span className="text-[11px] font-mono text-white font-bold">W: 1920 H: 1080</span>
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#0C8BE8] border-2 border-white rounded-sm shadow-md" />
                  <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#0C8BE8] border-2 border-white rounded-sm shadow-md" />
                  <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#0C8BE8] border-2 border-white rounded-sm shadow-md" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#0C8BE8] border-2 border-white rounded-sm shadow-md" />
                </div>
              </div>
            </motion.div>

            {/* 4. Swatches Color Palette (Middle-Right) - Reduced transparency (30% opacity), shifted 50px up and reduced size */}
            <motion.div
              animate={{ y: [15, -15, 15], rotate: [-3, 3, -3] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
              className="absolute top-[38%] right-[2%] sm:right-[5%] opacity-30 transition-all duration-300 scale-[0.55] sm:scale-[0.6]"
            >
              <div className="bg-[#1A0B2E] border-2 border-[#0C8BE8]/50 p-3.5 rounded-2xl shadow-2xl flex flex-col gap-2 min-w-[140px]">
                <div className="text-[8px] font-mono uppercase text-[#0C8BE8] tracking-widest font-black">Swatches</div>
                <div className="flex gap-2">
                  <div className="w-5.5 h-5.5 rounded bg-[#54268F] shadow-[0_0_10px_rgba(84,38,143,0.8)] border border-white/20" title="#54268F" />
                  <div className="w-5.5 h-5.5 rounded bg-[#EC4899] shadow-[0_0_10px_rgba(236,72,153,0.8)] border border-white/20" title="#EC4899" />
                  <div className="w-5.5 h-5.5 rounded bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.8)] border border-white/20" title="#10B981" />
                  <div className="w-5.5 h-5.5 rounded bg-[#0C8BE8] shadow-[0_0_10px_rgba(12,139,232,0.8)] border border-white/20" title="#0C8BE8" />
                </div>
                <span className="text-[9px] font-mono text-white/90 font-extrabold">Active Palette</span>
              </div>
            </motion.div>

            {/* 5. Layers Hierarchy List Widget (Bottom-Right) - Shifted slightly down (78% top) */}
            <motion.div
              animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
              className="absolute top-[78%] right-[2%] sm:right-[6%] opacity-30 transition-all duration-300 scale-[0.55] sm:scale-[0.6]"
            >
              <div className="bg-[#1A0B2E] border-2 border-[#54268F]/40 p-3.5 rounded-xl shadow-2xl min-w-[150px]">
                <div className="text-[8px] font-mono uppercase text-purple-400 tracking-wider mb-2 font-black">Layers</div>
                <div className="flex flex-col gap-2 font-mono text-[10px] text-white">
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-[#54268F]/20 border border-[#54268F]/60 rounded-md">
                    <Layout size={10} className="text-[#0C8BE8]" />
                    <span className="font-extrabold">HeroSection</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 opacity-70 pl-5">
                    <Layout size={10} className="text-[#EC4899]" />
                    <span>MainTitle</span>
                  </div>
                  {/* Position down/separated */}
                  <div className="flex items-center gap-1.5 px-2 py-1 opacity-70 pl-5 mt-1">
                    <Sparkles size={10} className="text-[#10B981]" />
                    <span>InteractiveBg</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* NEW DESIGNER CURSORS: Left and Right sides, randomly placed behind/beside the main central text with smooth floating movement */}
            
            {/* A. Prototype Cursor (Left Side) - 30% opacity & 10% smaller scale */}
            <motion.div 
              animate={{ y: [-12, 12, -12], x: [4, -4, 4] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-[22%] left-[16%] md:left-[24%] opacity-30 scale-[0.55] sm:scale-[0.6] pointer-events-none hidden sm:block"
            >
              <div className="flex items-center gap-1.5 bg-[#10B981] text-white text-[11px] font-mono font-bold px-2.5 py-1.5 rounded shadow-xl shadow-[#10B981]/40 border-2 border-white/40">
                <MousePointer size={12} className="fill-white text-white" />
                <span className="font-black">prototype</span>
              </div>
            </motion.div>

            {/* B. Research Cursor (Right Side) - Shifted slightly to the right side */}
            <motion.div 
              animate={{ y: [14, -14, 14], x: [-6, 6, -6] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              className="absolute top-[26%] right-[6%] md:right-[12%] opacity-30 scale-[0.55] sm:scale-[0.6] pointer-events-none hidden sm:block"
            >
              <div className="flex items-center gap-1.5 bg-[#EC4899] text-white text-[11px] font-mono font-bold px-2.5 py-1.5 rounded shadow-xl shadow-[#EC4899]/40 border-2 border-white/40">
                <MousePointer size={12} className="fill-white text-white" />
                <span className="font-black">research</span>
              </div>
            </motion.div>

            {/* C. Information Architecture Cursor (Left Side) - Shifted down and towards the slight left */}
            <motion.div 
              animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
              className="absolute top-[82%] left-[4%] md:left-[8%] opacity-30 scale-[0.55] sm:scale-[0.6] pointer-events-none hidden sm:block"
            >
              <div className="flex items-center gap-1.5 bg-[#F59E0B] text-white text-[11px] font-mono font-bold px-2.5 py-1.5 rounded shadow-xl shadow-[#F59E0B]/40 border-2 border-white/40">
                <MousePointer size={12} className="fill-white text-white" />
                <span className="font-black">information_architecture</span>
              </div>
            </motion.div>

            {/* D. AI Cursor (Right Side) - Shifted slightly down and to the right side */}
            <motion.div 
              animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
              className="absolute top-[76%] right-[4%] md:right-[8%] opacity-30 scale-[0.55] sm:scale-[0.6] pointer-events-none hidden sm:block"
            >
              <div className="flex items-center gap-1.5 bg-[#3B82F6] text-white text-[11px] font-mono font-bold px-2.5 py-1.5 rounded shadow-xl shadow-[#3B82F6]/40 border-2 border-white/40">
                <MousePointer size={12} className="fill-white text-white" />
                <span className="font-black">AI</span>
              </div>
            </motion.div>

          </div>

          {/* Hero Section Container (Full immersive viewport height) */}
          <section className="relative z-10 w-full min-h-[100vh] md:min-h-screen flex flex-col justify-center items-center pt-28 md:pt-36 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="w-full grid grid-cols-12 gap-8 items-center justify-center">
              <div className="col-span-12 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 flex flex-col items-center text-center">
              
              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#111113] border border-[rgba(255,255,255,0.08)] shadow-[0_2px_12px_rgba(0,0,0,0.5)] hover:border-[rgba(255,255,255,0.2)] transition-colors duration-300">
                  <div className="relative flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <motion.div 
                      animate={{ opacity: [0.4, 1, 0.4], scale: [1, 2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute w-2 h-2 rounded-full bg-green-400 blur-[1px]"
                    />
                  </div>
                  <span className="text-xs font-semibold tracking-wide text-[#A1A1AA] select-none">
                    Available for Full-time Opportunities
                  </span>
                </div>
              </motion.div>

              {/* Subheading: Role */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="mb-2"
              >
                <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#0C8BE8] uppercase select-none">
                  UI/UX Designer
                </span>
              </motion.div>

              {/* Headline: Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-6 select-none bg-gradient-to-r from-white via-[#F1F5F9] to-[#94A3B8] bg-clip-text text-transparent filter drop-shadow-[0_10px_30px_rgba(84,38,143,0.3)]"
              >
                Naveen Raja
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="text-[#A1A1AA] max-w-2xl mb-12 leading-relaxed font-normal text-pretty text-base sm:text-lg md:text-xl"
              >
                Designing intuitive SaaS products, dashboards, and mobile experiences that simplify complexity and solve real user problems.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
              >
                {/* Primary Button - Filled */}
                <Link to="/work" className="w-full sm:w-auto">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#54268F] text-[#EBE9EA] border border-[#0C8BE8]/50 hover:border-[#0C8BE8] rounded-full text-sm font-semibold tracking-wide flex items-center justify-center gap-2 group transition-all duration-300 shadow-[0_4px_20px_rgba(84,38,143,0.35)] hover:shadow-[0_0_25px_rgba(12,139,232,0.6)] hover:bg-[#6d32b8]"
                  >
                    View Projects
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.div>
                </Link>

                {/* Secondary Button - Outlined Contact */}
                <Link to="/contact" className="w-full sm:w-auto">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-[#EBE9EA] hover:text-white border border-[rgba(255,255,255,0.08)] hover:border-[#0C8BE8] rounded-full text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(84,38,143,0.25)]"
                  >
                    Let's Talk
                  </motion.div>
                </Link>
              </motion.div>

              </div>
            </div>
          </section>
        </div>

        {/* 2. SECTION: Selected Works */}
        <section className="mb-24 relative z-10 px-6 md:px-[100px]">
          <SectionTitle 
            title="Selected Works" 
            subtitle="A selection of user-centered digital products designed to solve real business and user problems."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl mx-auto py-12">
            {projects.slice(0, 3).map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => navigate(`/work/${project.slug}`)}
                className="flex justify-center w-full group cursor-pointer"
              >
                <CometCard className="w-full">
                  <div
                    className="flex w-full cursor-pointer flex-col items-stretch rounded-[20px] border border-border bg-[#1A0B2E]/50 p-2.5 transition-all duration-500 hover:bg-[#1A0B2E]/80"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[16px]">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay z-10`} />
                      {project.image ? (
                        <img
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          alt={project.title}
                          src={project.image}
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-foreground/5">
                          <span className="text-[10px] font-black uppercase tracking-widest text-foreground/20 italic">Visuals Coming Soon</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-3 flex flex-shrink-0 items-center justify-between px-1 pb-1 font-mono text-white">
                      <div className="flex flex-col text-left">
                        <span className="text-sm font-black tracking-tight">{project.title}</span>
                        <span className="text-[9px] text-[#A1A1AA] uppercase tracking-widest mt-0.5">{project.type}</span>
                      </div>
                      <div className="text-[9px] text-[#0C8BE8] font-bold bg-[#54268F]/20 border border-[#0C8BE8]/20 px-2 py-0.5 rounded-md">
                        {project.category}
                      </div>
                    </div>
                    <BorderBeam 
                      size={150} 
                      duration={12} 
                      delay={idx * 2} 
                      colorFrom={project.brandColor || "#6366f1"}
                      colorTo={project.brandColor ? `${project.brandColor}80` : "#9333ea"}
                    />
                  </div>
                </CometCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/work">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold text-sm transition-all inline-flex items-center gap-2 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.02)]"
              >
                View All Projects <ArrowRight size={16} />
              </motion.button>
            </Link>
          </div>
        </section>

        {/* 3. SECTION: About Me */}
        <section className="mb-16 relative z-10 px-6 md:px-[100px]">
          <SectionTitle 
            title="About Me" 
            subtitle="Turning ideas into meaningful digital experiences."
          />

          <div className="max-w-5xl mx-auto mt-12">
            <GlassCard className="p-8 md:p-10 bg-[#1A0B2E]/50 border-white/5 hover:border-[#0C8BE8]/30 transition-all duration-500 overflow-hidden relative">
              {/* Subtle background glows */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#54268F]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#0C8BE8]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col gap-8">
                
                {/* Main Content: Title & Subtitle */}
                <div className="text-left">
                  <motion.h3 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight mb-4"
                  >
                    Designing Products with Empathy, Curiosity, and a Problem-Solving Mindset.
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-[#A1A1AA] leading-relaxed text-sm md:text-base font-medium max-w-4xl"
                  >
                    Hi, I'm Naveen Raja, a UI/UX Designer with 1.6 years of experience designing SaaS platforms, dashboards, and mobile applications. I enjoy simplifying complex problems through thoughtful user experiences and clean interfaces.
                  </motion.p>
                </div>

                {/* Grid layout for facts and strengths to occupy space horizontally */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
                  
                  {/* Left: Quick Facts */}
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#0C8BE8] mb-4">Quick Facts</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { icon: <MapPin className="text-[#0C8BE8] shrink-0" size={16} />, text: "Coimbatore, India" },
                        { icon: <GraduationCap className="text-[#0C8BE8] shrink-0" size={16} />, text: "B.E Computer Science" },
                        { icon: <Briefcase className="text-[#0C8BE8] shrink-0" size={16} />, text: "1.6 Years Experience" },
                        { icon: <Globe className="text-[#0C8BE8] shrink-0" size={16} />, text: "Remote" },
                        { icon: <Layers className="text-[#0C8BE8] shrink-0" size={16} />, text: "Hybrid" },
                        { icon: <Monitor className="text-[#0C8BE8] shrink-0" size={16} />, text: "On-site" }
                      ].map((fact, fIdx) => (
                        <motion.div 
                          key={fIdx}
                          whileHover={{ x: 3 }}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#54268F]/30 hover:bg-[#1A0B2E]/30 transition-all duration-300"
                        >
                          {fact.icon}
                          <span className="text-xs md:text-sm font-semibold text-[#EBE9EA]/90">{fact.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Core Strengths */}
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#0C8BE8] mb-4">Core Strengths</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { icon: <Users className="text-[#0C8BE8] shrink-0" size={16} />, text: "User-Centered Design" },
                        { icon: <Search className="text-[#0C8BE8] shrink-0" size={16} />, text: "UX Research" },
                        { icon: <Layers className="text-[#0C8BE8] shrink-0" size={16} />, text: "Design Systems" },
                        { icon: <RefreshCw className="text-[#0C8BE8] shrink-0" size={16} />, text: "Collaboration" },
                        { icon: <Target className="text-[#0C8BE8] shrink-0" size={16} />, text: "Problem Solving" },
                        { icon: <Layout className="text-[#0C8BE8] shrink-0" size={16} />, text: "Information Architecture" },
                        { icon: <Code className="text-[#0C8BE8] shrink-0" size={16} />, text: "Wireframing & Flows" },
                        { icon: <Palette className="text-[#0C8BE8] shrink-0" size={16} />, text: "Visual Design" }
                      ].map((strength, sIdx) => (
                        <motion.div 
                          key={sIdx}
                          whileHover={{ x: 3 }}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#54268F]/30 hover:bg-[#1A0B2E]/30 transition-all duration-300"
                        >
                          {strength.icon}
                          <span className="text-xs md:text-sm font-semibold text-[#EBE9EA]/90">{strength.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </GlassCard>
          </div>
        </section>

        {/* 4. SECTION: Design Process */}
        <section className="mb-24 relative z-10 px-6 md:px-[100px]">
          <SectionTitle 
            title="Design Process" 
            subtitle="My approach to solving complex problems through user-centered design."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-5xl mx-auto py-12 relative">
            
            {/* Connecting line behind cards on desktop screens */}
            <div className="hidden lg:block absolute top-[5.5rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#0C8BE8]/10 via-[#54268F]/30 to-[#0C8BE8]/10 -z-10" />

            {[
              {
                num: "01",
                title: "Discover",
                desc: "Understand users, business goals, and requirements.",
                icon: Compass,
                glow: "shadow-[0_0_15px_rgba(12,139,232,0.15)]",
                iconColor: "text-[#0C8BE8]"
              },
              {
                num: "02",
                title: "Research",
                desc: "User research, competitor analysis, insights.",
                icon: Users,
                glow: "shadow-[0_0_15px_rgba(84,38,143,0.15)]",
                iconColor: "text-[#8B5CF6]"
              },
              {
                num: "03",
                title: "Ideate",
                desc: "User flows, information architecture, wireframes.",
                icon: Lightbulb,
                glow: "shadow-[0_0_15px_rgba(236,72,153,0.15)]",
                iconColor: "text-[#EC4899]"
              },
              {
                num: "04",
                title: "Design",
                desc: "High-fidelity UI, design systems, prototypes.",
                icon: Layers,
                glow: "shadow-[0_0_15px_rgba(139,92,246,0.15)]",
                iconColor: "text-[#a78bfa]"
              },
              {
                num: "05",
                title: "Validate & Iterate",
                desc: "Usability testing, developer collaboration, continuous improvements.",
                icon: CheckCircle,
                glow: "shadow-[0_0_15px_rgba(6,182,212,0.15)]",
                iconColor: "text-[#06B6D4]"
              }
            ].map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="relative group cursor-pointer"
                >
                  <GlassCard className="p-6 h-full flex flex-col items-center text-center bg-[#1A0B2E]/50 border-white/5 hover:border-[#0C8BE8]/30 transition-all duration-300 relative overflow-hidden">
                    {/* Step number Badge */}
                    <span className="absolute top-3 right-4 font-mono text-3xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-300 select-none">
                      {step.num}
                    </span>

                    {/* Glowing background behind icon */}
                    <div className={cn(
                      "w-14 h-14 rounded-full bg-[#11071F] border border-white/5 flex items-center justify-center mb-5 relative group-hover:border-[#0C8BE8]/30 transition-all duration-300",
                      step.glow
                    )}>
                      <StepIcon className={cn("w-6 h-6 transition-transform duration-300 group-hover:scale-110", step.iconColor)} />
                      {/* Active blinking dot next to first/current step marker */}
                      <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#0C8BE8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                    </div>

                    {/* Step Title */}
                    <h4 className="text-base font-black text-white mb-2 tracking-tight">
                      {step.title}
                    </h4>

                    {/* Step Description */}
                    <p className="text-xs text-[#A1A1AA] leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}

          </div>
        </section>

        {/* 5. SECTION: Professional Experience */}
        <section className="mb-24 relative z-10 px-6 md:px-[100px]">
          <SectionTitle 
            title="Professional Experience" 
            subtitle="Building products, solving problems, and collaborating with teams to deliver meaningful digital experiences."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto py-6">
            {[
              {
                title: "UI/UX Designer",
                company: "Sajal Tech Solutions",
                period: "Nov 2024 – Apr 2026",
                location: "Remote",
                productType: "SaaS Platforms & Analytics Dashboards",
                challenge: "Translating complex, data-heavy enterprise logic into clean, highly intuitive visual configurations.",
                contributions: [
                  { label: "Design Systems", text: "Created a scalable, production-ready component library in Figma, cutting design-to-dev handoff friction significantly." },
                  { label: "Dashboard Interfaces", text: "Designed custom data visualizations, interactive telemetry charts, and high-contrast web configurations." },
                  { label: "End-to-End UX", text: "Spearheaded user research, low-fidelity wireframing, and interactive prototyping to rapidly validate key user journeys." },
                  { label: "Dev Alignment", text: "Partnered directly with developers to guarantee pixel-perfect styling, responsive integrity, and clean CSS layouts." }
                ],
                impact: "Reduced interface styling alignment cycles and established visual uniformity across all main product views.",
                tech: ["Figma", "Design Systems", "SaaS", "Dashboard", "Mobile UI", "Prototyping", "UX Research"]
              },
              {
                title: "UI/UX Design Intern",
                company: "App Innovation Technologies",
                period: "Apr 2024 – Oct 2024",
                location: "Coimbatore",
                productType: "B2B Web Apps & Responsive Solutions",
                challenge: "Assisting teams to optimize user onboarding paths and adapt complex layout configurations across multiple screen sizes.",
                contributions: [
                  { label: "Interactive Mockups", text: "Built comprehensive wireframes, clickable mockups, and high-fidelity page designs centered around user flows." },
                  { label: "Micro-Interactions", text: "Created animated, responsive prototypes to demonstrate complex product mechanics and visual feedback." },
                  { label: "UX Auditing", text: "Conducted competitor analyses and research audits to identify and fix critical usability bottlenecks." },
                  { label: "Asset Management", text: "Maintained design assets and helped establish unified visual assets across core product sections." }
                ],
                impact: "Accelerated visual product feedback loop and streamlined alignment with senior engineering stakeholders.",
                tech: ["Figma", "Wireframing", "Prototyping", "Responsive Design", "UX Research", "Collaboration"]
              }
            ].map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="relative group cursor-pointer"
              >
                {/* Background ambient glow matching index colors */}
                <div className={`absolute -inset-[1px] bg-gradient-to-r ${idx === 0 ? "from-[#0C8BE8]/30 to-[#54268F]/30" : "from-[#54268F]/30 to-[#06B6D4]/30"} rounded-3xl blur-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <GlassCard className="p-8 h-full bg-[#1A0B2E]/50 border-white/5 hover:border-[#0C8BE8]/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
                  <div>
                    {/* Header Section */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5 pb-5 border-b border-white/5">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0C8BE8] mb-1.5 block">
                          Case Study Snapshot
                        </span>
                        <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-sm font-bold text-white/70">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 sm:self-start">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#11071F] border border-white/5 text-white/50 font-mono text-[9px] uppercase tracking-wider">
                          <Briefcase size={10} /> {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#54268F]/20 border border-[#54268F]/30 text-white/80 font-semibold text-[9px] tracking-wide">
                          <MapPin size={10} className="text-[#0C8BE8]" /> {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Product Type & Challenge Row */}
                    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#11071F]/40 border border-white/5">
                      <div>
                        <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-white/40 mb-1">
                          Designed Products
                        </h4>
                        <p className="text-xs font-bold text-white leading-relaxed">
                          {exp.productType}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-white/40 mb-1">
                          Core Challenge
                        </h4>
                        <p className="text-xs text-[#A1A1AA] leading-relaxed font-semibold">
                          {exp.challenge}
                        </p>
                      </div>
                    </div>

                    {/* Key Contributions */}
                    <div className="mb-6">
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#0C8BE8] mb-3">
                        Key Contributions
                      </h4>
                      <ul className="space-y-3">
                        {exp.contributions.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#54268F]/20 border border-[#54268F]/30 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5 text-[#0C8BE8]" strokeWidth={3} />
                            </span>
                            <span className="text-xs md:text-sm text-white/80 font-medium leading-relaxed">
                              <strong className="text-white font-bold">{point.label}: </strong>
                              {point.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Core Impact Box */}
                    <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-[#0C8BE8]/10 to-[#54268F]/10 border border-[#0C8BE8]/20 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0C8BE8]/10 flex items-center justify-center shrink-0">
                        <TrendingUp className="w-4 h-4 text-[#0C8BE8]" />
                      </div>
                      <div>
                        <h5 className="text-[10px] font-extrabold uppercase tracking-wider text-[#0C8BE8] mb-0.5">
                          High-Impact Outcome
                        </h5>
                        <p className="text-xs text-[#EBE9EA]/90 font-semibold leading-relaxed">
                          {exp.impact}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Technologies Used (Chips) */}
                  <div className="pt-5 border-t border-white/5">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-[#A1A1AA] mb-3">
                      Skills & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((techItem, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2.5 py-1 text-[10px] font-bold rounded-lg bg-[#54268F]/10 border border-[#54268F]/20 text-white/90 hover:bg-[#54268F]/20 transition-all"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. SECTION: Let’s Connect */}
        <section className="mb-20 pt-4 md:pt-6 relative z-10 px-6 md:px-[100px]">
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[3rem] bg-[#1A0B2E] border border-[#0C8BE8]/30 shadow-[0_0_80px_rgba(84,38,143,0.45)] p-12 md:p-24 text-center"
          >
            {/* Animated Background Gradient */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 45, 0],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#54268F] rounded-full blur-[150px] pointer-events-none"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -45, 0],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
              className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#0C8BE8] rounded-full blur-[150px] pointer-events-none"
            />

            {/* Floating Icons for Contact Section - Reduced transparency and size */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[Mail, Send, Sparkles, Target].map((Icon, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -12, 0],
                    x: [0, 6, 0],
                    rotate: [0, 8, 0],
                    opacity: [0.08, 0.3, 0.08]
                  }}
                  transition={{ 
                    duration: 6 + i, 
                    repeat: Infinity, 
                    delay: i * 1.5,
                    ease: "easeInOut" 
                  }}
                  className="absolute text-white/10"
                  style={{ 
                    top: `${20 + i * 20}%`, 
                    left: i % 2 === 0 ? `${12 + i * 5}%` : `${78 - i * 5}%` 
                  }}
                >
                  <Icon size={20 + i * 4} />
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl font-black text-white mb-6 tracking-tighter"
              >
                Let's create something extraordinary.
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-sm md:text-base text-white/60 mb-10 leading-relaxed font-medium"
              >
                I’m currently open to freelance projects and full-time opportunities. 
                Whether you have a groundbreaking idea or just want to chat about design, I'm all ears.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link to="/contact">
                  <motion.button
                    whileInView={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="px-8 py-3 bg-[#54268F] hover:bg-[#6d32b8] text-[#EBE9EA] border border-[#0C8BE8] rounded-full font-black text-lg shadow-[0_0_30px_rgba(84,38,143,0.45)] transition-all hover:shadow-[0_0_50px_rgba(12,139,232,0.65)] flex items-center gap-2"
                  >
                    Let’s Work Together <ArrowRight size={20} />
                  </motion.button>
                </Link>
                
                <motion.a
                  href="https://drive.google.com/file/d/1v6mDRdPmUGC5EZCbuafjzNkkcIV_RXGS/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold text-lg transition-all flex items-center gap-2 backdrop-blur-sm"
                >
                  <Download size={20} /> Download Resume
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
}
