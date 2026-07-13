import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Code, GraduationCap, Search, Palette, Briefcase, Users, BookOpen, Layout, RefreshCw, Zap, Target, Mail, Send, Sparkles, PenTool, MousePointer, Monitor } from "lucide-react";
import { Badge, GlassCard, SectionTitle, PageTransition } from "@/components/Common";
import { Link } from "react-router-dom";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SparklesCore } from "@/components/ui/sparkles";
import { cn } from "@/lib/utils";
import { useScroll, useTransform } from "motion/react";

import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { useTheme } from "@/components/ThemeProvider";

export function Home() {
  const { theme } = useTheme();
  const particleColor = theme === "dark" ? "#FFFFFF" : "#09090b";
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  const journeySteps = [
    { 
      year: "2024",
      title: "Bachelor of Engineering in Computer Science", 
      subtitle: "Sri Eshwar College of Engineering",
      location: "Coimbatore, India",
      period: "Year 2024",
      icon: <GraduationCap size={20} />, 
      desc: "Completed my four-year Bachelor of Engineering in Computer Science. Formed a strong engineering mindset, algorithmic thinking, and structural logic that I apply to simplify user interfaces and build scalable design systems.",
      tags: ["Systems Logic", "Engineering Foundations", "Coimbatore"]
    },
    { 
      year: "2024",
      title: "UI/UX Design Intern", 
      subtitle: "App Innovation Technologies",
      location: "Coimbatore, India",
      period: "Apr 2024 – Oct 2024",
      icon: <Briefcase size={20} />, 
      desc: "Gained hands-on professional industry experience. Developed deep empathy for users while mastering core design processes, interactive wireframing, and rigorous user testing under senior designers.",
      tags: ["Hands-on UX", "Wireframing", "Agile Practice"]
    },
    { 
      year: "2024 - 2026",
      title: "UI/UX Designer", 
      subtitle: "Sajal Tech Solutions",
      location: "Remote",
      period: "Nov 2024 – April 2026",
      icon: <Briefcase size={20} />, 
      desc: "Owned end-to-end design streams for SaaS dashboards and multi-platform experiences. Collaborated with global teams to design active, live client projects using polished, high-fidelity design systems.",
      tags: ["SaaS Dashboards", "Design Systems", "Live Client Projects"]
    }
  ];

  const designApproach = [
    { 
      title: "User understanding", 
      icon: (
        <motion.div
          animate={{ x: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Users size={24} />
        </motion.div>
      ), 
      desc: "Empathizing with users to uncover their real needs.", 
      color: "text-blue-400",
      visual: (
        <div className="flex -space-x-2">
          {[1, 2, 3].map(i => (
            <motion.div 
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden shadow-lg"
            >
              <img src={`https://picsum.photos/seed/user${i+10}/50/50`} alt="user" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-8 h-8 rounded-full border-2 border-background bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white shadow-lg"
          >
            +
          </motion.div>
        </div>
      )
    },
    { 
      title: "Problem identification", 
      icon: (
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Search size={24} />
        </motion.div>
      ), 
      desc: "Defining the core challenges before jumping into solutions.", 
      color: "text-purple-400",
      visual: (
        <div className="relative w-16 h-10 border border-purple-500/30 rounded-lg bg-purple-500/5 flex items-center justify-center overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl"
          />
          <div className="absolute inset-0 flex flex-col gap-1 p-2">
            <div className="w-full h-1 bg-purple-500/20 rounded-full" />
            <div className="w-2/3 h-1 bg-purple-500/20 rounded-full" />
          </div>
          <Target size={12} className="text-purple-400 relative z-10" />
        </div>
      )
    },
    { 
      title: "Wireframing & prototyping", 
      icon: (
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Layout size={24} />
        </motion.div>
      ), 
      desc: "Mapping out the structure and flow of the experience.", 
      color: "text-indigo-400",
      visual: (
        <div className="w-16 h-12 border-2 border-dashed border-indigo-500/30 rounded-md bg-indigo-500/5 flex flex-col gap-1.5 p-1.5 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-indigo-500/10 blur-sm"
          />
          <div className="w-full h-2 bg-indigo-500/20 rounded-sm" />
          <div className="flex gap-1">
            <div className="flex-1 h-4 bg-indigo-500/10 rounded-sm" />
            <div className="flex-1 h-4 bg-indigo-500/10 rounded-sm" />
          </div>
        </div>
      )
    },
    { 
      title: "Simple UI design", 
      icon: (
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Palette size={24} />
        </motion.div>
      ), 
      desc: "Crafting clean, aesthetically pleasing interfaces.", 
      color: "text-pink-400",
      visual: (
        <div className="flex gap-1.5">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.6)]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.6)]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            className="w-4 h-4 rounded-full bg-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.6)]" 
          />
        </div>
      )
    },
    { 
      title: "Iteration & testing", 
      icon: (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <RefreshCw size={24} />
        </motion.div>
      ), 
      desc: "Refining designs based on real user feedback.", 
      color: "text-emerald-400",
      visual: (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-emerald-500/30 rounded-full"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <RefreshCw size={16} className="text-emerald-400" />
          </motion.div>
        </div>
      )
    }
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden bg-[#0B0B0C]">
        {/* High-visibility grid background (55% opacity) & a single radial glow centered behind the Hero section */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-55">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C5CFC]/10 rounded-full blur-[140px]" />
        </div>

        {/* Floating Figma-like workspace UI / digital design elements in Hero background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          {/* Vector path with anchor points and cursor */}
          <motion.div 
            animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[8%] opacity-20 hover:opacity-50 transition-opacity duration-300 hidden md:block"
          >
            <div className="relative">
              <svg width="180" height="100" viewBox="0 0 180 100" fill="none">
                <path d="M10 80 Q 90 10, 170 80" stroke="rgba(124,92,252,0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M10 80 Q 90 10, 170 80" stroke="#7C5CFC" strokeWidth="1.5" />
                <circle cx="10" cy="80" r="4" fill="#0B0B0C" stroke="#7C5CFC" strokeWidth="2" />
                <circle cx="90" cy="45" r="4" fill="#7C5CFC" />
                <circle cx="170" cy="80" r="4" fill="#0B0B0C" stroke="#7C5CFC" strokeWidth="2" />
                <line x1="90" y1="45" x2="90" y2="10" stroke="#7C5CFC" strokeWidth="1" />
                <circle cx="90" cy="10" r="3" fill="#7C5CFC" />
              </svg>
              <div className="absolute top-[45px] left-[98px] flex items-center gap-1.5 bg-[#111113] border border-white/10 rounded px-1.5 py-0.5 text-[8px] font-mono text-[#7C5CFC]">
                <MousePointer size={8} className="rotate-[-90deg] fill-[#7C5CFC]" />
                <span>AnchorPoint</span>
              </div>
            </div>
          </motion.div>

          {/* Figma Cursor coordinate label */}
          <motion.div 
            animate={{ y: [15, -15, 15], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[65%] left-[8%] opacity-25 hidden lg:block"
          >
            <div className="flex items-center gap-1 bg-[#7C5CFC] text-white text-[10px] font-mono font-bold px-2 py-1 rounded-sm shadow-lg shadow-[#7C5CFC]/20">
              <MousePointer size={10} className="fill-white" />
              <span>Naveen_Raja</span>
            </div>
          </motion.div>

          {/* Wireframe box with sizing dimensions */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[25%] right-[10%] opacity-15 hover:opacity-40 transition-opacity duration-300 hidden md:block"
          >
            <div className="border border-dashed border-white/20 p-4 rounded-lg flex flex-col items-center justify-center relative bg-white/[0.01]">
              <div className="absolute -top-2 left-4 px-1.5 py-0.5 bg-[#111113] text-[8px] font-mono text-[#A1A1AA]/60 border border-white/5 rounded">
                Frame: Hero_Container
              </div>
              <div className="w-40 h-24 border border-white/10 rounded flex items-center justify-center relative">
                <span className="text-[10px] font-mono text-[#A1A1AA]/40">W: 1280 H: 720</span>
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#7C5CFC]" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#7C5CFC]" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#7C5CFC]" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#7C5CFC]" />
              </div>
            </div>
          </motion.div>

          {/* Pen Tool tooltip */}
          <motion.div 
            animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-[75%] right-[15%] opacity-20 hidden md:block"
          >
            <div className="flex items-center gap-1.5 bg-[#111113] border border-white/10 rounded-full px-3 py-1.5 text-xs text-white/70">
              <PenTool size={12} className="text-[#7C5CFC]" />
              <span className="font-mono text-[10px] tracking-wider uppercase">Pen Tool</span>
            </div>
          </motion.div>

          {/* Floating pen icon tooltip (moved from journey to hero) */}
          <motion.div 
            animate={{ y: [-12, 12, -12], rotate: [0, 8, -8, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute top-[15%] right-[24%] opacity-20 hover:opacity-50 transition-opacity duration-300 hidden lg:block text-indigo-400"
          >
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 p-2 rounded-xl backdrop-blur-sm">
              <PenTool size={14} className="text-[#7C5CFC]" />
              <span className="text-[8px] font-mono uppercase tracking-wider text-white/70">Vector.Edit</span>
            </div>
          </motion.div>

          {/* Floating mouse pointer tooltip (moved from journey to hero) */}
          <motion.div 
            animate={{ y: [12, -12, 12], x: [-6, 6, -6] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute top-[68%] right-[22%] opacity-20 hover:opacity-50 transition-opacity duration-300 hidden lg:block text-pink-400"
          >
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 p-2 rounded-xl backdrop-blur-sm">
              <MousePointer size={14} className="text-[#A855F7]" />
              <span className="text-[8px] font-mono uppercase tracking-wider text-white/70">Design.Interact</span>
            </div>
          </motion.div>

          {/* Floating Screen Widget wireframe (moved from journey to hero) */}
          <motion.div 
            animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
            className="absolute top-[35%] left-[25%] opacity-15 hover:opacity-40 transition-opacity duration-300 hidden xl:block border border-dashed border-white/10 rounded-lg p-3 bg-white/[0.01] backdrop-blur-sm"
          >
            <div className="w-24 h-16 border border-white/10 rounded relative flex items-center justify-center">
              <div className="absolute top-1 left-1 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
              <Monitor size={14} className="text-white/20" />
              <span className="absolute bottom-1 right-1 text-[6px] font-mono text-white/20">Canvas</span>
            </div>
          </motion.div>

          {/* Floating UI trends for 2026 */}
          <motion.div 
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-[48%] left-[12%] opacity-20 hidden xl:block"
          >
            <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-md flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest font-mono text-white/80">Spatial UI</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [8, -8, 8] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute top-[52%] right-[10%] opacity-20 hidden xl:block"
          >
            <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-md flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest font-mono text-white/80">Bento UX</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Section Container (Full immersive viewport height) */}
        <section className="relative z-10 w-full min-h-[100vh] md:min-h-screen flex flex-col justify-center items-center pt-36 md:pt-44 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
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
                <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#7C5CFC] uppercase select-none">
                  UI/UX Designer
                </span>
              </motion.div>

              {/* Headline: Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-none mb-6 select-none bg-gradient-to-b from-white to-[#A1A1AA] bg-clip-text text-transparent"
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
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#7C5CFC] text-white rounded-full text-sm font-semibold tracking-wide flex items-center justify-center gap-2 group transition-all duration-300 shadow-[0_4px_20px_rgba(124,92,252,0.25)] hover:shadow-[0_8px_30px_rgba(124,92,252,0.45)] hover:bg-[#8D71FF]"
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
                    className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-[#FFFFFF] hover:text-white border border-[rgba(255,255,255,0.08)] hover:border-[#7C5CFC]/40 rounded-full text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    Let's Talk
                  </motion.div>
                </Link>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 1. SECTION: My Journey */}
        <section className="mb-40 relative z-10 px-6 md:px-[100px]" ref={containerRef}>
          <SectionTitle 
            title="My Journey" 
            subtitle="My step-by-step evolution from a computer science student to a professional designer."
          />
          
          <div className="relative max-w-5xl mx-auto py-12">
            
            {/* Straight glowing road line connecting the dots of years */}
            <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[4px] z-0 pointer-events-none">
              {/* Faint base dashed line */}
              <div className="w-full h-full border-l border-dashed border-white/20" />
              
              {/* Active animated progress line */}
              <motion.div 
                style={{ height: timelineHeight }}
                className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-[#7C5CFC] via-[#A855F7] to-[#EC4899] origin-top shadow-[0_0_15px_rgba(124,92,252,0.6)]"
              />
            </div>
          </div>
 
          <div className="relative max-w-5xl mx-auto py-12">
            <div className="space-y-12 relative z-10">
              {journeySteps.map((step, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-4 md:gap-8 items-center relative py-6">
                  
                  {/* LEFT COLUMN: Year with elegant typography (animates from left to inside) */}
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="col-span-12 md:col-span-4 flex flex-col md:items-end text-left md:text-right relative pl-10 md:pl-0"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7C5CFC] mb-1">
                      {step.period}
                    </span>
                    <motion.h3 
                      animate={{ 
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        y: [0, -3, 0]
                      }}
                      transition={{ 
                        backgroundPosition: { duration: 5, repeat: Infinity, ease: "linear" },
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }
                      }}
                      className="text-5xl md:text-6xl font-black font-mono tracking-tighter bg-gradient-to-r from-white via-purple-300 to-white bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(124,92,252,0.25)] select-none"
                    >
                      {step.year}
                    </motion.h3>
                    <span className="text-xs text-[#A1A1AA]/50 font-medium mt-1">
                      {step.location}
                    </span>
                  </motion.div>
 
                  {/* CENTER COLUMN: Road Joint Dot / Marker */}
                  <div className="col-span-12 md:col-span-1 flex md:justify-center items-center relative py-2 md:py-0">
                    <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-[#09090b]/90 border border-white/10 group-hover:border-[#7C5CFC] shadow-[0_0_15px_rgba(124,92,252,0.15)] z-20 transition-all duration-300">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#7C5CFC] flex items-center justify-center text-white">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                      <motion.div 
                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.4 }}
                        className="absolute w-7 h-7 rounded-full bg-[#7C5CFC]/30 blur-[1px] pointer-events-none"
                      />
                    </div>
                  </div>
 
                  {/* RIGHT COLUMN: Interactive Content Card (animates from right to inside at the same time) */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="col-span-12 md:col-span-7 pl-10 md:pl-0"
                  >
                    <GlassCard className="p-6 md:p-8 hover:border-[#7C5CFC]/30 transition-all duration-500 relative overflow-hidden bg-[rgba(13,13,15,0.75)] group">
                      {/* Ambient subtle glow when hovered */}
                      <div className="absolute -inset-[1px] bg-gradient-to-r from-[#7C5CFC]/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />
                      
                      {/* Card Header */}
                      <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-[rgba(255,255,255,0.05)]">
                        <div>
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7C5CFC]">
                            {step.subtitle}
                          </span>
                          <h4 className="text-xl md:text-2xl font-black text-white tracking-tight mt-1 group-hover:text-[#8D71FF] transition-colors duration-300">
                            {step.title}
                          </h4>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-[#7C5CFC]/10 flex items-center justify-center text-[#7C5CFC] group-hover:bg-[#7C5CFC]/20 transition-all duration-300 shrink-0">
                          {step.icon}
                        </div>
                      </div>
 
                      {/* Card Content */}
                      <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed mb-6">
                        {step.desc}
                      </p>
 
                      {/* Card Tags */}
                      {step.tags && (
                        <div className="flex flex-wrap gap-2">
                          {step.tags.map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="text-[10px] font-bold uppercase tracking-widest text-[#A1A1AA]/60 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </GlassCard>
                  </motion.div>
 
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. SECTION: Design Approach */}
        <section className="mb-32 relative z-10 px-6 md:px-[100px]">
          <SectionTitle 
            title="Design Approach" 
            subtitle="My systematic process for creating meaningful digital experiences."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {designApproach.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.23, 1, 0.32, 1] }}
              >
                <GlassCard className="h-full p-6 flex flex-col items-start text-left transition-all duration-500 group relative overflow-hidden border-white/5 hover:border-indigo-500/30">
                  {/* Background Number */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 0.05, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="absolute -right-4 -bottom-4 text-8xl font-black text-foreground select-none pointer-events-none"
                  >
                    0{idx + 1}
                  </motion.div>
                  
                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <motion.div 
                      whileInView={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className={cn(
                        "absolute inset-0 blur-xl rounded-full",
                        item.color.replace("text-", "bg-")
                      )} 
                    />
                    <motion.div 
                      whileInView={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className={cn(
                        "w-14 h-14 rounded-2xl bg-background/80 border border-border flex items-center justify-center relative z-10 shadow-lg",
                        item.color
                      )}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Visual UI Method Elements */}
                  <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {item.visual}
                  </div>

                  <h3 className="text-lg font-bold mb-3 tracking-tight relative z-10 group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{item.desc}</p>
                  
                  {/* Animated scanning line - now auto-animates on scroll */}
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" 
                  />
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. SECTION: Let’s Connect */}
        <section className="mb-32 pt-20 md:pt-32 relative z-10 px-6 md:px-[100px]">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative overflow-hidden rounded-[3rem] bg-[#0d0d0f] border border-white/5 p-12 md:p-24 text-center"
          >
            {/* Animated Background Gradient */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 45, 0],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-indigo-500 rounded-full blur-[150px] pointer-events-none"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -45, 0],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
              className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500 rounded-full blur-[150px] pointer-events-none"
            />

            {/* Floating Icons for Contact Section */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[Mail, Send, Sparkles, Target].map((Icon, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    rotate: [0, 10, 0],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ 
                    duration: 5 + i, 
                    repeat: Infinity, 
                    delay: i * 1.5,
                    ease: "easeInOut" 
                  }}
                  className="absolute text-white/20"
                  style={{ 
                    top: `${20 + i * 20}%`, 
                    left: i % 2 === 0 ? `${10 + i * 5}%` : `${80 - i * 5}%` 
                  }}
                >
                  <Icon size={32 + i * 8} />
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="text-2xl md:text-4xl font-black text-white mb-6 tracking-tighter"
              >
                Let's create something extraordinary.
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1 }}
                className="text-sm md:text-base text-white/60 mb-10 leading-relaxed font-medium"
              >
                I’m currently open to freelance projects and full-time opportunities. 
                Whether you have a groundbreaking idea or just want to chat about design, I'm all ears.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link to="/contact">
                  <motion.button
                    whileInView={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-black text-lg shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] flex items-center gap-2"
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
