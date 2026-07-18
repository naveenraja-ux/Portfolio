import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Download, Code, GraduationCap, Search, Palette, Briefcase, Users, BookOpen, Layout, RefreshCw, Zap, Target, Mail, Send, Sparkles, PenTool, MousePointer, Monitor, MapPin, Globe, Lightbulb, Compass, Layers, CheckCircle, Eye, Check, TrendingUp, Linkedin, Copy, ExternalLink } from "lucide-react";
import { Badge, GlassCard, SectionTitle, PageTransition, Behance } from "@/components/Common";
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
  const [activeAboutTab, setActiveAboutTab] = React.useState<'visual' | 'facts' | 'strengths'>('visual');
  const [expMode, setExpMode] = React.useState<'achievements' | 'metrics'>('achievements');
  const [copied, setCopied] = React.useState(false);

  const copyEmailToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("naveenraja1297@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("contact-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };



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
                <button onClick={scrollToContact} className="w-full sm:w-auto">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-[#EBE9EA] hover:text-white border border-[rgba(255,255,255,0.08)] hover:border-[#0C8BE8] rounded-full text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(84,38,143,0.25)] cursor-pointer"
                  >
                    Let's work together
                  </motion.div>
                </button>
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
        <section className="mb-20 relative z-10 px-6 lg:px-[100px] w-full max-w-[1440px] mx-auto">
          <div 
            className="w-full rounded-[32px] border border-[rgba(120,90,255,0.18)] px-6 md:px-[48px] py-[48px] bg-gradient-to-b from-[#0D1020] via-[#0B1020] to-[#090C18] relative overflow-hidden flex flex-col justify-center shadow-2xl"
          >
            {/* Subtle background glow */}
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#8B5CF6]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-[#5B8CFF]/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Main Split Layout */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* LEFT SIDE: Content and Integrated CTA */}
              <div className="lg:col-span-7 flex flex-col justify-between text-left items-start">
                <div className="w-full">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block bg-[rgba(126,87,255,0.12)] border border-[rgba(126,87,255,0.35)] py-[6px] px-[14px] rounded-[999px] text-[12px] font-bold tracking-[1px] uppercase text-[#9F7BFF] mb-4"
                  >
                    ABOUT ME
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 }}
                    className="text-[28px] md:text-[38px] font-extrabold leading-[1.15] tracking-[-1.5px] text-white mb-4 font-sans"
                  >
                    Designing Products with<br />
                    Empathy, Curiosity &<br />
                    <span className="bg-gradient-to-r from-[#8B5CF6] to-[#6D7DFF] bg-clip-text text-transparent">
                      Impact.
                    </span>
                  </motion.h2>

                  {/* Paragraph */}
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-white/70 text-sm md:text-[15px] font-normal leading-[1.65] max-w-[540px] mb-6"
                  >
                    Hi, I'm Naveen Raja, a UI/UX Designer with 1.6 years of experience designing SaaS platforms, dashboards, and mobile applications. I enjoy simplifying complex problems through thoughtful user experiences and clean interfaces.
                  </motion.p>
                </div>

                {/* Integrated Bottom CTA: Large glass panel quote + button */}
                <div className="w-full mt-auto pt-4 border-t border-white/[0.06] flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-[36px] h-[36px] rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#5B8CFF] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(139,92,246,0.25)]">
                      <Sparkles className="w-4 h-4 text-white animate-pulse" />
                    </div>
                    <p className="text-[12px] md:text-[13px] text-white/80 leading-normal font-medium italic">
                      "I believe great design is the perfect blend of user needs, business goals, and meaningful interactions."
                    </p>
                  </div>

                  <Link to="/work" className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-[200px] h-[44px] rounded-[14px] bg-gradient-to-r from-[#8B5CF6] to-[#5B8CFF] text-white text-[13px] font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all shrink-0"
                    >
                      View My Work <ArrowRight size={14} />
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* RIGHT SIDE: Segmented Tab Board */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                {/* Interactive Switcher Header */}
                <div className="flex items-center justify-between p-1 rounded-xl bg-white/[0.03] border border-white/[0.05] mb-5 w-full">
                  {[
                    { id: 'visual', label: 'Overview', icon: Sparkles },
                    { id: 'facts', label: 'Quick Facts', icon: GraduationCap },
                    { id: 'strengths', label: 'Core Strengths', icon: Target }
                  ].map((tab) => {
                    const TabIcon = tab.icon;
                    const isActive = activeAboutTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveAboutTab(tab.id as 'visual' | 'facts' | 'strengths')}
                        className={`relative flex-1 py-2 px-1 rounded-lg text-[11px] md:text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer z-10 ${isActive ? 'text-white' : 'text-white/40 hover:text-white/60'}`}
                      >
                        <TabIcon size={13} />
                        <span>{tab.label}</span>
                        {isActive && (
                          <motion.div
                            layoutId="activeAboutTab"
                            className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/30 to-[#5B8CFF]/30 border border-[#8B5CF6]/40 rounded-lg -z-10"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Content Box with fixed height to prevent sizing jump & scrolling */}
                <div className="flex-1 min-h-[350px] max-h-[350px] relative overflow-hidden flex items-center justify-center bg-white/[0.02] border border-white/[0.04] rounded-2xl p-5">
                  <AnimatePresence mode="wait">
                    {activeAboutTab === 'visual' && (
                      <motion.div
                        key="visual"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="w-full h-full flex items-center justify-center select-none relative overflow-visible"
                      >
                        {/* Visualizer Frame */}
                        {/* Glassmorphic main browser frame */}
                        <motion.div
                          animate={{ y: [-4, 4, -4], rotate: [-0.2, 0.2, -0.2] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute w-full max-w-[320px] h-[200px] rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden z-10"
                        >
                          {/* Header */}
                          <div className="h-8 border-b border-white/[0.06] px-3 flex items-center justify-between bg-white/[0.02]">
                            <div className="flex gap-1">
                              <span className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
                              <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
                              <span className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
                            </div>
                            <div className="w-32 h-4.5 rounded-md bg-white/[0.04] border border-white/[0.04] text-[8px] text-white/30 flex items-center justify-center font-mono">
                              naveenraja.design/analytics
                            </div>
                            <div className="w-3" />
                          </div>

                          {/* Browser Content */}
                          <div className="flex-1 p-3 flex flex-col justify-between">
                            <div className="flex justify-between items-center">
                              <div className="h-3.5 px-2 bg-[#8B5CF6]/15 border border-[#8B5CF6]/25 rounded-full flex items-center text-[7px] font-bold text-[#8B5CF6] uppercase tracking-wider">
                                SaaS Analytics
                              </div>
                              <div className="h-2.5 w-10 bg-white/[0.05] rounded-full border border-white/[0.05]" />
                            </div>

                            {/* Analytics Graph mockup */}
                            <div className="flex-1 mt-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] p-2.5 flex flex-col justify-between">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="text-[8px] text-white/40 uppercase tracking-widest font-mono">Engagement</div>
                                  <div className="text-sm font-bold text-white font-mono mt-0.5">94.2%</div>
                                </div>
                                <span className="text-[7px] text-[#5B8CFF] bg-[#5B8CFF]/10 px-1.5 py-0.5 rounded font-bold border border-[#5B8CFF]/20">+12.4%</span>
                              </div>

                              {/* Chart Line with area gradient */}
                              <div className="h-10 w-full relative mt-1">
                                <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 300 40">
                                  <defs>
                                    <linearGradient id="aboutChartGlowSmall" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                                    </linearGradient>
                                  </defs>
                                  <path d="M 0 35 Q 50 15, 100 25 T 200 10 T 300 5 L 300 40 L 0 40 Z" fill="url(#aboutChartGlowSmall)" />
                                  <path d="M 0 35 Q 50 15, 100 25 T 200 10 T 300 5" stroke="#8B5CF6" strokeWidth="2" fill="none" strokeLinecap="round" />
                                  <circle cx="200" cy="10" r="3" fill="#8B5CF6" stroke="#FFFFFF" strokeWidth="1" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Floating Analytics Card (Top Right) */}
                        <motion.div
                          animate={{ y: [6, -6, 6], x: [3, -3, 3] }}
                          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                          className="absolute top-2 -right-1 w-[130px] p-2 rounded-lg bg-[#0D1020]/95 border border-[#8B5CF6]/35 backdrop-blur-md shadow-[0_10px_20px_rgba(0,0,0,0.4)] z-20"
                        >
                          <div className="flex gap-2 items-center">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#5B8CFF] flex items-center justify-center text-white text-[8px] font-black shadow-[0_0_8px_rgba(139,92,246,0.3)]">
                              NR
                            </div>
                            <div className="text-left">
                              <div className="text-[9px] font-black text-white leading-none">Naveen Raja</div>
                              <div className="text-[7px] text-[#A56EFF] font-bold mt-0.5">Product Designer</div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Floating Check Icon Card (Bottom Left) */}
                        <motion.div
                          animate={{ y: [-6, 6, -6], x: [-3, 3, -3] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                          className="absolute -bottom-2 -left-1 w-[120px] p-2 rounded-lg bg-[#0D1020]/95 border border-[#5B8CFF]/25 backdrop-blur-md shadow-[0_10px_20px_rgba(0,0,0,0.4)] z-20 flex items-center gap-2"
                        >
                          <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                            <Check className="w-3 h-3 text-emerald-400" strokeWidth={3} />
                          </div>
                          <div className="text-left">
                            <div className="text-[8px] font-bold text-white uppercase tracking-wider">UX Verified</div>
                            <div className="text-[7px] text-white/50">Optimal Flow</div>
                          </div>
                        </motion.div>

                        {/* Floating Cursor with label */}
                        <motion.div
                          animate={{ 
                            x: [-10, 25, -5, -10],
                            y: [30, -5, 20, 30]
                          }}
                          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute pointer-events-none text-[#8B5CF6] drop-shadow-[0_2px_8px_rgba(139,92,246,0.5)] z-30"
                        >
                          <MousePointer size={14} fill="currentColor" />
                          <span className="absolute left-3.5 top-1.5 bg-[#8B5CF6] text-white text-[7px] font-black px-1.5 py-0.5 rounded font-mono leading-none shadow-md">Naveen</span>
                        </motion.div>
                      </motion.div>
                    )}

                    {activeAboutTab === 'facts' && (
                      <motion.div
                        key="facts"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="w-full flex flex-col justify-center gap-3 py-1"
                      >
                        {[
                          {
                            icon: MapPin,
                            label: "LOCATION",
                            value: "Coimbatore",
                            desc: "India"
                          },
                          {
                            icon: GraduationCap,
                            label: "EDUCATION",
                            value: "B.E",
                            desc: "Computer Science"
                          },
                          {
                            icon: Briefcase,
                            label: "EXPERIENCE",
                            value: "1.6 Years",
                            desc: "Experience"
                          }
                        ].map((fact, idx) => {
                          const FactIcon = fact.icon;
                          return (
                            <div
                              key={idx}
                              className="rounded-xl bg-white/[0.03] border border-white/[0.05] p-3 flex items-center justify-between hover:bg-white/[0.06] transition-all duration-300 group cursor-pointer"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-[36px] h-[36px] rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#5B8CFF] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(139,92,246,0.25)]">
                                  <FactIcon size={16} className="text-white" />
                                </div>
                                <div className="text-left">
                                  <span className="text-[9px] uppercase tracking-wider font-bold text-white/40 block mb-0.5">
                                    {fact.label}
                                  </span>
                                  <span className="text-xs font-semibold text-white/72 leading-none block">
                                    {fact.desc}
                                  </span>
                                </div>
                              </div>

                              <div className="text-right">
                                <span className="text-base font-extrabold text-white tracking-tight">
                                  {fact.value}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </motion.div>
                    )}

                    {activeAboutTab === 'strengths' && (
                      <motion.div
                        key="strengths"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="w-full grid grid-cols-2 gap-2"
                      >
                        {[
                          { icon: Users, text: "User-Centered Design" },
                          { icon: Search, text: "UX Research" },
                          { icon: Layers, text: "Design Systems" },
                          { icon: RefreshCw, text: "Collaboration" },
                          { icon: Target, text: "Problem Solving" },
                          { icon: Layout, text: "Information Architecture" },
                          { icon: Code, text: "Wireframing & Flows" },
                          { icon: Palette, text: "Visual Design" }
                        ].map((strength, sIdx) => {
                          const StrengthIcon = strength.icon;
                          return (
                            <div 
                              key={sIdx}
                              className="h-[48px] rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center gap-2.5 px-3 transition-all duration-300 hover:bg-white/[0.06]"
                            >
                              <div className="w-6.5 h-6.5 rounded-lg bg-gradient-to-tr from-[#8B5CF6]/10 to-[#5B8CFF]/10 flex items-center justify-center text-[#8B5CF6] shrink-0 border border-[#8B5CF6]/20">
                                <StrengthIcon size={12} className="text-[#8B5CF6]" />
                              </div>
                              <span className="text-[11px] font-medium text-white/90 truncate text-left">{strength.text}</span>
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </div>

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
                desc: "Define business goals and user requirements.",
                icon: Compass,
                glow: "shadow-[0_0_15px_rgba(12,139,232,0.15)]",
                iconColor: "text-[#0C8BE8]"
              },
              {
                num: "02",
                title: "Research",
                desc: "Analyze industry competitors and collect insights.",
                icon: Users,
                glow: "shadow-[0_0_15px_rgba(84,38,143,0.15)]",
                iconColor: "text-[#8B5CF6]"
              },
              {
                num: "03",
                title: "Ideate",
                desc: "Sketch initial wireframes and user flows.",
                icon: Lightbulb,
                glow: "shadow-[0_0_15px_rgba(236,72,153,0.15)]",
                iconColor: "text-[#EC4899]"
              },
              {
                num: "04",
                title: "Design",
                desc: "Build visual layouts and interactive prototypes.",
                icon: Layers,
                glow: "shadow-[0_0_15px_rgba(139,92,246,0.15)]",
                iconColor: "text-[#a78bfa]"
              },
              {
                num: "05",
                title: "Validate",
                desc: "Conduct usability tests and optimize interfaces.",
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
        <section className="mb-24 relative z-10 px-6 lg:px-[100px] w-full max-w-6xl mx-auto">
          <SectionTitle 
            title="Professional Experience" 
            subtitle="My journey building products, solving user problems, and collaborating with cross-functional teams."
          />

          {/* Interactive Toggle Switch */}
          <div className="flex justify-center mb-10 mt-6 relative z-20">
            <div className="relative flex items-center p-1 bg-white/[0.02] border border-white/[0.08] rounded-full backdrop-blur-md">
              <button
                onClick={() => setExpMode('achievements')}
                className={cn(
                  "relative px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-colors duration-300 z-10",
                  expMode === 'achievements' ? "text-black" : "text-white/60 hover:text-white"
                )}
              >
                {expMode === 'achievements' && (
                  <motion.div
                    layoutId="activeExpPill"
                    className="absolute inset-0 bg-white rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                Key Achievements
              </button>
              <button
                onClick={() => setExpMode('metrics')}
                className={cn(
                  "relative px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-colors duration-300 z-10",
                  expMode === 'metrics' ? "text-black" : "text-white/60 hover:text-white"
                )}
              >
                {expMode === 'metrics' && (
                  <motion.div
                    layoutId="activeExpPill"
                    className="absolute inset-0 bg-white rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                Design Impact
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mt-6">
            {[
              {
                title: "UI/UX Designer",
                company: "Sajal Tech Solutions",
                period: "Nov 2024 – Apr 2026",
                duration: "1.5 Years",
                location: "Remote",
                badge: "Full-Time",
                productType: "SaaS & Analytics Dashboards",
                accent: "from-[#8B5CF6]/30 to-[#0C8BE8]/30",
                glowBorder: "hover:border-[#8B5CF6]/50 shadow-[0_0_20px_rgba(139,92,246,0.05)]",
                achievements: [
                  "Scaled robust Figma design systems to optimize asset reuse.",
                  "Engineered data-heavy dashboard layouts for seamless user tracking.",
                  "Conducted targeted research interviews to validate critical user flows."
                ],
                metrics: [
                  { stat: "+35%", desc: "Accelerated design-to-developer handoff times." },
                  { stat: "-40%", desc: "Eliminated structural component styling inconsistencies." },
                  { stat: "98%", desc: "Sourced top validation ratings from clients." }
                ],
                tech: ["Figma", "Design Systems", "SaaS Dashboards", "Prototyping", "UX Research"]
              },
              {
                title: "UI/UX Design Intern",
                company: "App Innovation Technologies",
                period: "Apr 2024 – Oct 2024",
                duration: "6 Months",
                location: "Coimbatore",
                badge: "Internship",
                productType: "B2B Apps & Web Solutions",
                accent: "from-[#0C8BE8]/30 to-[#06B6D4]/30",
                glowBorder: "hover:border-[#0C8BE8]/50 shadow-[0_0_20px_rgba(12,139,232,0.05)]",
                achievements: [
                  "Developed interactive mobile wireframes for core onboarding journeys.",
                  "Created clickable micro-interaction motion prototypes for dev handoff.",
                  "Conducted complete usability audits to resolve interface layout issues."
                ],
                metrics: [
                  { stat: "+50%", desc: "Streamlined product feedback cycles via prototyping." },
                  { stat: "20+", desc: "Delivered high-fidelity screens for complex dashboards." },
                  { stat: "100%", desc: "Optimized fluid responsive experiences across viewports." }
                ],
                tech: ["Figma", "Wireframe Design", "Responsive Layouts", "Prototypes", "Usability Audits"]
              }
            ].map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={cn(
                  "relative group rounded-[28px] border border-white/[0.06] bg-gradient-to-b from-[#0D1020]/90 to-[#050711]/90 p-8 flex flex-col justify-between transition-all duration-500 overflow-hidden min-h-[480px]",
                  exp.glowBorder
                )}
              >
                {/* Blueprint Grid Overlay for aesthetic designer feel */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-50" />
                
                {/* Background ambient glow matching card index colors */}
                <div className={cn(
                  "absolute -inset-[1px] bg-gradient-to-r rounded-[28px] blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
                  exp.accent
                )} />

                <div>
                  {/* Metadata Header Bar (Highlighted Dates) */}
                  <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.06] relative z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/50 font-mono text-[10px] tracking-wider uppercase">
                      <Briefcase size={11} className="text-[#8B5CF6]" /> {exp.period}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-white/80 font-bold text-[9px] uppercase tracking-wider">
                        {exp.duration}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#A78BFA] font-black text-[9px] uppercase tracking-wider">
                        {exp.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Organization Info */}
                  <div className="mb-5 text-left relative z-10">
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-1.5 flex items-center gap-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-white/60 font-semibold">
                      <span className="text-white font-bold text-sm">{exp.company}</span>
                      <span className="text-white/20">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-[#0C8BE8]" /> {exp.location}
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="text-[#06B6D4]">{exp.productType}</span>
                    </div>
                  </div>

                  {/* Dynamic Switchable Content Area */}
                  <div className="min-h-[170px] relative z-10 mb-6">
                    <AnimatePresence mode="wait">
                      {expMode === 'achievements' ? (
                        <motion.div
                          key="achievements"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-4 text-left"
                        >
                          {exp.achievements.map((item, aIdx) => (
                            <div key={aIdx} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3 h-3 text-[#06B6D4]" strokeWidth={3} />
                              </div>
                              <p className="text-sm text-white/85 leading-relaxed font-medium">
                                {item}
                              </p>
                            </div>
                          ))}
                        </motion.div>
                      ) : (
                        <motion.div
                          key="metrics"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="grid grid-cols-3 gap-3"
                        >
                          {exp.metrics.map((metric, mIdx) => (
                            <div 
                              key={mIdx} 
                              className="p-3.5 rounded-2xl bg-white/[0.01] border border-white/[0.05] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-300 text-left flex flex-col justify-between h-[155px]"
                            >
                              <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent tracking-tight">
                                {metric.stat}
                              </div>
                              <p className="text-[11px] text-white/60 leading-normal font-semibold">
                                {metric.desc}
                              </p>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Footer Design Chips (Skills) */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5 justify-start relative z-10">
                  {exp.tech.map((techItem, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-[10px] font-bold rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/50 hover:text-white/85 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. SECTION: Let’s Connect */}
        <section id="contact-section" className="mb-24 pt-4 md:pt-6 relative z-10 px-4 md:px-8 lg:px-12 w-full max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#0A0718] border border-[#8B5CF6]/20 shadow-[0_0_60px_rgba(139,92,246,0.12)] p-6 md:p-10 lg:p-12"
          >
            {/* Elegant static gradient overlay - lightweight, fast performance */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-b from-[#8B5CF6]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-b from-[#0C8BE8]/5 to-transparent rounded-full blur-[80px] pointer-events-none" />
            
            {/* Micro Blueprint Grid Overlay for aesthetic designer look */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-25" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
              
              {/* LEFT COLUMN: Call to Action (5 Columns wide) */}
              <div className="lg:col-span-5 text-left space-y-4 md:space-y-5">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#9F7BFF] mb-2 block">
                    Available for Opportunities
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tighter leading-tight">
                    Let's create something extraordinary.
                  </h2>
                </div>
                
                <p className="text-xs md:text-sm text-white/60 leading-relaxed font-medium max-w-md">
                  I'm open to freelance projects, collaboration, and full-time opportunities. Let's transform complex ideas into elegant, human-centric user experiences.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <motion.button
                    onClick={() => navigate("/contact")}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-white text-[#0A0718] hover:bg-white/90 rounded-full font-bold text-sm shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all flex items-center justify-center gap-2 cursor-pointer border border-transparent"
                  >
                    Let’s Work Together <ArrowRight size={16} />
                  </motion.button>
                  
                  <motion.a
                    href="https://drive.google.com/file/d/1v6mDRdPmUGC5EZCbuafjzNkkcIV_RXGS/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-white/[0.03] hover:bg-white/[0.07] text-white border border-white/[0.08] hover:border-white/[0.15] rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                  >
                    <Eye size={16} className="text-[#06B6D4]" /> View My CV
                  </motion.a>
                </div>
              </div>

              {/* RIGHT COLUMN: Interactive Connect Cards (7 Columns wide - wider cards, perfectly aligned, 100% visible details) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                
                {/* 1. Direct Email Card */}
                <div 
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#8B5CF6]/40 transition-all duration-300 text-left flex flex-col justify-between h-[115px] group relative"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#A78BFA]">
                      <Mail size={16} />
                    </div>
                    <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Direct Channel</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider block mb-0.5">Email Address</span>
                    <div className="flex items-center justify-between gap-2 w-full">
                      <span className="text-sm font-bold text-white group-hover:text-[#A78BFA] transition-colors truncate block">
                        naveenraja1297@gmail.com
                      </span>
                      <button 
                        onClick={copyEmailToClipboard}
                        className="p-1 rounded-md bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all shrink-0 flex items-center justify-center"
                        title="Copy Email"
                      >
                        {copied ? (
                          <span className="text-[9px] font-black text-emerald-400 flex items-center gap-0.5">
                            <Check size={10} strokeWidth={3} /> Copied
                          </span>
                        ) : (
                          <Copy size={10} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* 2. Linkedin Card */}
                <a 
                  href="https://www.linkedin.com/in/naveen-raja-s-80282023a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-[#0C8BE8]/40 transition-all duration-300 text-left flex flex-col justify-between h-[115px] group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-[#0C8BE8]/10 border border-[#0C8BE8]/20 flex items-center justify-center text-[#0C8BE8]">
                      <Linkedin size={16} />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Professional</span>
                      <ExternalLink size={10} className="text-white/30 group-hover:text-[#0C8BE8] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider block mb-0.5">LinkedIn Profile</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#0C8BE8] transition-colors truncate block">
                      linkedin.com/in/naveen-raja-s
                    </span>
                  </div>
                </a>

                {/* 3. Behance Portfolio */}
                <a 
                  href="https://www.behance.net/naveenraja12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-[#06B6D4]/40 transition-all duration-300 text-left flex flex-col justify-between h-[115px] group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center text-[#06B6D4]">
                      <Behance size={16} />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Portfolio</span>
                      <ExternalLink size={10} className="text-white/30 group-hover:text-[#06B6D4] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider block mb-0.5">Design Showcase</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#06B6D4] transition-colors truncate block">
                      behance.net/naveenraja12
                    </span>
                  </div>
                </a>

                {/* 4. Location Status */}
                <div 
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-left flex flex-col justify-between h-[115px]"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                      <MapPin size={16} />
                    </div>
                    <span className="text-[8px] font-bold text-green-400 uppercase tracking-widest flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Active
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider block mb-0.5">Current Location</span>
                    <span className="text-sm font-bold text-white truncate block">
                      Coimbatore, India
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
}
