import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Code, GraduationCap, Search, Palette, Briefcase, Users, BookOpen, Layout, RefreshCw, Zap, Target, Mail, Send, Sparkles, PenTool, MousePointer, Monitor, MapPin } from "lucide-react";
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
  const [trackStyle, setTrackStyle] = React.useState({ top: 0, bottom: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  React.useLayoutEffect(() => {
    const updatePositions = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const firstDot = containerRef.current.querySelector('[data-journey-dot="0"]');
      const lastDot = containerRef.current.querySelector('[data-journey-dot="2"]');
      
      if (firstDot && lastDot) {
        const firstRect = firstDot.getBoundingClientRect();
        const lastRect = lastDot.getBoundingClientRect();
        
        const topOffset = (firstRect.top + firstRect.height / 2) - containerRect.top;
        const bottomOffset = containerRect.bottom - (lastRect.top + lastRect.height / 2);
        
        setTrackStyle({
          top: topOffset,
          bottom: bottomOffset
        });
      }
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    const timer = setTimeout(updatePositions, 150);
    
    return () => {
      window.removeEventListener("resize", updatePositions);
      clearTimeout(timer);
    };
  }, []);

  const journeySteps = [
    { 
      year: "2022 - 2024",
      title: "Bachelor of Engineering in Computer Science", 
      subtitle: "Shri Ishwar College of Engineering",
      location: "Coimbatore, India",
      period: "June 2022 – May 2024",
      icon: (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-[#7C5CFC]"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v8" />
          <path d="M9 11h6" />
        </svg>
      ), 
      desc: "Completed my four-year Bachelor of Engineering in Computer Science with a GPA of 8.69. Formed a strong engineering mindset, algorithmic thinking, and structural logic that I apply to simplify user interfaces and build scalable design systems.",
      tags: ["GPA: 8.69", "Systems Logic", "Engineering Foundations", "Coimbatore"]
    },
    { 
      year: "2024",
      title: "UI/UX Design Intern", 
      subtitle: "App Innovation Technology",
      location: "Coimbatore, India",
      period: "April 2024 – October 2024",
      icon: <Briefcase size={20} />, 
      desc: "Gained hands-on professional industry experience, securing an A-grade internship certification. Developed deep empathy for users while mastering core design processes, interactive wireframing, and rigorous user testing under senior designers.",
      tags: ["A-Grade Certified", "Hands-on UX", "Wireframing", "Agile Practice"]
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



  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden bg-[#0B0B0C]">
        
        {/* HERO SECTION WRAPPER - Isolates all hero backgrounds and floating elements strictly to the hero viewport height */}
        <div className="relative w-full min-h-[100vh] md:min-h-screen overflow-hidden flex flex-col justify-center items-center">
          
          {/* High-visibility grid background (30% opacity) & a single radial glow centered behind the Hero section */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C5CFC]/10 rounded-full blur-[140px]" />
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
                  <path d="M10 80 Q 90 10, 170 80" stroke="rgba(124,92,252,0.85)" strokeWidth="3" strokeDasharray="4 4" />
                  <path d="M10 80 Q 90 10, 170 80" stroke="#7C5CFC" strokeWidth="3.5" />
                  <circle cx="10" cy="80" r="6" fill="#0B0B0C" stroke="#7C5CFC" strokeWidth="3.5" />
                  <circle cx="90" cy="45" r="6" fill="#7C5CFC" />
                  <circle cx="170" cy="80" r="6" fill="#0B0B0C" stroke="#7C5CFC" strokeWidth="3.5" />
                  <line x1="90" y1="45" x2="90" y2="15" stroke="#7C5CFC" strokeWidth="2.5" />
                  <circle cx="90" cy="15" r="5.5" fill="#7C5CFC" />
                </svg>
                <div className="absolute top-[48px] left-[98px] flex items-center gap-1.5 bg-[#111113] border-2 border-[#7C5CFC] rounded-md px-2.5 py-1 text-[10px] font-mono text-[#7C5CFC] shadow-lg shadow-purple-500/30">
                  <MousePointer size={12} className="rotate-[-90deg] fill-[#7C5CFC] text-[#7C5CFC]" />
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
              <div className="flex items-center gap-2 bg-[#7C5CFC] text-white text-[11px] font-mono font-bold px-3 py-2 rounded shadow-xl shadow-[#7C5CFC]/50 border-2 border-white/50">
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
              <div className="border-2 border-dashed border-[#7C5CFC] p-4 rounded-xl flex flex-col items-center justify-center relative bg-[#111113] shadow-2xl shadow-[#7C5CFC]/25">
                <div className="absolute -top-3 left-4 px-2.5 py-0.5 bg-[#0B0B0C] text-[9px] font-mono text-[#A855F7] border-2 border-[#7C5CFC] rounded font-black">
                  Frame: Hero_Grid
                </div>
                <div className="w-40 h-24 border-2 border-[#7C5CFC]/40 rounded-lg flex items-center justify-center relative bg-[#0B0B0C]">
                  <span className="text-[11px] font-mono text-white font-bold">W: 1920 H: 1080</span>
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#7C5CFC] border-2 border-white rounded-sm shadow-md" />
                  <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#7C5CFC] border-2 border-white rounded-sm shadow-md" />
                  <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#7C5CFC] border-2 border-white rounded-sm shadow-md" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#7C5CFC] border-2 border-white rounded-sm shadow-md" />
                </div>
              </div>
            </motion.div>

            {/* 4. Swatches Color Palette (Middle-Right) - Reduced transparency (30% opacity), shifted 50px up and reduced size */}
            <motion.div
              animate={{ y: [15, -15, 15], rotate: [-3, 3, -3] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
              className="absolute top-[38%] right-[2%] sm:right-[5%] opacity-30 transition-all duration-300 scale-[0.55] sm:scale-[0.6]"
            >
              <div className="bg-[#111113] border-2 border-emerald-500/50 p-3.5 rounded-2xl shadow-2xl flex flex-col gap-2 min-w-[140px]">
                <div className="text-[8px] font-mono uppercase text-[#10B981] tracking-widest font-black">Swatches</div>
                <div className="flex gap-2">
                  <div className="w-5.5 h-5.5 rounded bg-[#7C5CFC] shadow-[0_0_10px_rgba(124,92,252,0.8)] border border-white/20" title="#7C5CFC" />
                  <div className="w-5.5 h-5.5 rounded bg-[#EC4899] shadow-[0_0_10px_rgba(236,72,153,0.8)] border border-white/20" title="#EC4899" />
                  <div className="w-5.5 h-5.5 rounded bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.8)] border border-white/20" title="#10B981" />
                  <div className="w-5.5 h-5.5 rounded bg-[#3B82F6] shadow-[0_0_10px_rgba(59,130,246,0.8)] border border-white/20" title="#3B82F6" />
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
              <div className="bg-[#111113] border-2 border-purple-500/40 p-3.5 rounded-xl shadow-2xl min-w-[150px]">
                <div className="text-[8px] font-mono uppercase text-purple-400 tracking-wider mb-2 font-black">Layers</div>
                <div className="flex flex-col gap-2 font-mono text-[10px] text-white">
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-[#7C5CFC]/20 border border-[#7C5CFC]/60 rounded-md">
                    <Layout size={10} className="text-[#7C5CFC]" />
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
                <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#7C5CFC] uppercase select-none">
                  UI/UX Designer
                </span>
              </motion.div>

              {/* Headline: Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-6 select-none bg-gradient-to-r from-white via-[#F1F5F9] to-[#94A3B8] bg-clip-text text-transparent filter drop-shadow-[0_10px_30px_rgba(124,92,252,0.15)]"
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
        </div>

        {/* 1. SECTION: My Journey */}
        <section className="mb-12 relative z-10 px-6 md:px-[100px]">
          <SectionTitle 
            title="My Journey" 
            subtitle="My step-by-step evolution from a computer science student to a professional designer."
          />
          
          {/* Merged container of progress line and timeline steps */}
          <div className="relative max-w-5xl mx-auto py-12" ref={containerRef}>
            
            {/* Straight glowing road line connecting the dots of years (z-10 layer to come first and sit above backgrounds/card margins) */}
            <div 
              className="absolute inset-0 grid grid-cols-12 gap-4 md:gap-8 pointer-events-none z-10"
              style={{ top: trackStyle.top, bottom: trackStyle.bottom }}
            >
              <div className="col-span-12 md:col-span-1 md:col-start-5 h-full relative">
                <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[4px]">
                  {/* Faint base dashed line */}
                  <div className="w-full h-full border-l border-dashed border-white/20" />
                  
                  {/* Active animated progress line that grows perfectly with scrolling */}
                  <motion.div 
                    style={{ height: timelineHeight }}
                    className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-[#7C5CFC] via-[#A855F7] to-[#EC4899] origin-top shadow-[0_0_15px_rgba(124,92,252,0.6)]"
                  />

                  {/* Active blinking tip pointer that travels with the scroll progress */}
                  <motion.div
                    style={{ top: timelineHeight }}
                    className="absolute left-[-5px] -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.9)] border-2 border-white flex items-center justify-center"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-white animate-ping" />
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="space-y-12 relative z-20">
              {journeySteps.map((step, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-4 md:gap-8 items-center relative py-6 group">
                  
                  {/* LEFT COLUMN: Year with elegant typography (animates from left to inside) */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
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
                      className="text-5xl sm:text-6xl md:text-7xl font-black font-mono tracking-tighter bg-gradient-to-r from-white via-purple-300 to-white bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(124,92,252,0.3)] select-none leading-none flex flex-col md:items-end items-start"
                    >
                      {step.year.includes("-") ? (
                        <>
                          <span>{step.year.split("-")[0].trim()}</span>
                          <span className="text-[#7C5CFC] text-2xl md:text-3xl my-1 md:my-1.5 block leading-none font-bold select-none">—</span>
                          <span>{step.year.split("-")[1].trim()}</span>
                        </>
                      ) : (
                        step.year
                      )}
                    </motion.h3>
                    <span className="text-xs text-[#A1A1AA]/60 font-medium mt-1 flex items-center gap-1 md:justify-end">
                      <MapPin size={12} className="text-[#7C5CFC] shrink-0" />
                      <span>{step.location}</span>
                    </span>
                  </motion.div>
 
                  {/* CENTER COLUMN: Road Joint Dot / Marker */}
                  <div className="col-span-12 md:col-span-1 flex md:justify-center items-center relative py-2 md:py-0">
                    <div 
                      data-journey-dot={idx}
                      className="absolute left-[16px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-[#09090b]/90 border border-[#7C5CFC]/50 group-hover:border-[#7C5CFC] shadow-[0_0_20px_rgba(124,92,252,0.35)] z-30 transition-all duration-300"
                    >
                      <div className="w-3.5 h-3.5 rounded-full bg-[#7C5CFC] flex items-center justify-center text-white">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                      {/* High visibility blinking pulse ring around each dot */}
                      <motion.div 
                        animate={{ scale: [1, 1.7, 1], opacity: [0.4, 0.9, 0.4] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: idx * 0.4 }}
                        className="absolute w-7 h-7 rounded-full bg-[#7C5CFC]/30 blur-[1.5px] pointer-events-none"
                      />
                      <motion.div 
                        animate={{ scale: [1, 2.2, 1], opacity: [0.15, 0.4, 0.15] }}
                        transition={{ duration: 2.2, repeat: Infinity, delay: idx * 0.4 + 0.2 }}
                        className="absolute w-10 h-10 rounded-full bg-[#EC4899]/20 blur-[2px] pointer-events-none"
                      />
                    </div>
                  </div>
 
                  {/* RIGHT COLUMN: Interactive Content Card (animates from right to inside) */}
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
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
                          <h4 className={cn(
                            "text-xl md:text-2xl font-black text-white tracking-tight mt-1 transition-colors duration-300",
                            (step.title.includes("UI/UX") || step.title.includes("Designer")) ? "" : "group-hover:text-[#8D71FF]"
                          )}>
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
                          {step.tags.map((tag, tIdx) => {
                            const isGPA = tag.includes("GPA");
                            return (
                              <span 
                                key={tIdx} 
                                className={cn(
                                  "text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg transition-all duration-300",
                                  isGPA 
                                    ? "text-white bg-[#7C5CFC]/20 border-2 border-[#7C5CFC]/60 shadow-[0_0_15px_rgba(124,92,252,0.4)]" 
                                    : "text-[#A1A1AA]/60 bg-white/5 border border-white/5"
                                )}
                              >
                                {tag}
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </GlassCard>
                  </motion.div>
 
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* 3. SECTION: Let’s Connect */}
        <section className="mb-20 pt-4 md:pt-6 relative z-10 px-6 md:px-[100px]">
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
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
