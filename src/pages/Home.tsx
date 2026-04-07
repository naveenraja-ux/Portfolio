import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Code, GraduationCap, Search, Palette, Briefcase, Users, BookOpen, Layout, RefreshCw, Zap, Target, Mail, Send, Sparkles } from "lucide-react";
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
    { title: "Curiosity about digital products", icon: <Search size={20} />, desc: "Always wondered how apps were built to be so engaging." },
    { title: "UI/UX interest during academics", icon: <Palette size={20} />, desc: "Discovered the perfect blend of logic and creativity." },
    { title: "Real-world project experience", icon: <Briefcase size={20} />, desc: "Started applying design principles to actual products." },
    { title: "Team collaboration & leadership", icon: <Users size={20} />, desc: "Learned the value of diverse perspectives in design." },
    { title: "Continuous learning", icon: <BookOpen size={20} />, desc: "Staying updated with the latest design trends and tools." }
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

  const whatIBring = [
    { 
      title: "Problem-solving", 
      icon: <Zap size={24} />, 
      desc: "Turning complex hurdles into seamless user paths.",
      visual: (
        <div className="relative w-full h-32 flex items-center justify-center overflow-hidden rounded-xl bg-indigo-500/5 border border-indigo-500/10 mt-6">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <motion.path
                d="M 10 50 Q 25 20 40 50 T 70 50 T 90 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-indigo-500"
                animate={{ pathLength: [0, 1], pathOffset: [0, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>
          <div className="relative z-10 flex gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Target size={16} />
            </div>
            <ArrowRight size={16} className="text-muted-foreground mt-2" />
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
              <Zap size={16} />
            </div>
          </div>
        </div>
      )
    },
    { 
      title: "Clean UI skills", 
      icon: <Layout size={24} />, 
      desc: "Minimalist aesthetics with maximum functionality.",
      visual: (
        <div className="mt-6 grid grid-cols-3 gap-2 h-32">
          <div className="col-span-2 bg-indigo-500/5 rounded-xl border border-indigo-500/10 p-3 flex flex-col gap-2">
            <div className="w-full h-2 bg-indigo-500/20 rounded-full" />
            <div className="w-2/3 h-2 bg-indigo-500/20 rounded-full" />
            <div className="mt-auto flex gap-1">
              <div className="w-4 h-4 rounded-full bg-indigo-500/40" />
              <div className="w-4 h-4 rounded-full bg-purple-500/40" />
            </div>
          </div>
          <div className="bg-indigo-500/5 rounded-xl border border-indigo-500/10 p-3 flex flex-col items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-indigo-500/20" />
            <div className="w-full h-1 bg-indigo-500/20 rounded-full" />
            <div className="w-full h-1 bg-indigo-500/20 rounded-full" />
          </div>
        </div>
      )
    },
    { 
      title: "Attention to detail", 
      icon: <Target size={24} />, 
      desc: "Pixel-perfect precision in every component.",
      visual: (
        <div className="mt-6 relative h-32 w-full bg-indigo-500/5 rounded-xl border border-indigo-500/10 overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-10">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="border-[0.5px] border-indigo-500" />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-16 h-16 border-2 border-dashed border-indigo-500/40 rounded-lg" />
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-indigo-500" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-indigo-500" />
              <div className="absolute top-1/2 left-full ml-2 -translate-y-1/2 text-[10px] font-mono text-indigo-500">64px</div>
            </div>
          </div>
        </div>
      )
    },
    { 
      title: "Team collaboration", 
      icon: <Users size={24} />, 
      desc: "Bridging the gap between design and development.",
      visual: (
        <div className="mt-6 flex items-center justify-center h-32 bg-indigo-500/5 rounded-xl border border-indigo-500/10">
          <div className="flex -space-x-4">
            {[1, 2, 3].map(i => (
              <motion.div 
                key={i}
                animate={{ x: [0, i * 2, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                className="w-12 h-12 rounded-full border-4 border-background bg-muted flex items-center justify-center overflow-hidden shadow-xl"
              >
                <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-background bg-indigo-500 flex items-center justify-center text-white text-xs font-bold shadow-xl z-10">
              +5
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Sparkles Background Section - Now truly full screen and reaches top */}
        <div className="fixed inset-0 w-full h-full bg-background flex flex-col items-center justify-center overflow-hidden z-0 translate-y-[20px]">
          <div className="w-full h-full absolute inset-0 z-0">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor={particleColor}
            />
          </div>
          
          <div className="w-full max-w-[40rem] h-[175px] relative z-10 mt-[156px] md:mt-[220px]">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>

        <section className="min-h-screen flex flex-col justify-center items-center text-center relative z-10 pt-32 md:pt-44 pb-16 px-6 md:px-[100px]">
          <div className="relative z-20 flex flex-col items-center -mt-[23px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 relative"
            >
              <div className="absolute -inset-4 accent-gradient blur-2xl opacity-20 rounded-full animate-pulse" />
              <Badge className="mb-4 text-indigo-400 border-indigo-500/20 bg-indigo-500/5 flex items-center gap-2 px-4 py-1.5">
                <div className="relative flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <motion.div 
                    animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-2 h-2 rounded-full bg-green-400 blur-[1px]"
                  />
                </div>
                Available for Opportunities
              </Badge>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 drop-shadow-sm w-full flex justify-center"
            >
              <LayoutTextFlip
                text="Hey, I’m "
                words={["Naveen Raja", "UI/UX Designer"]}
                className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight"
              />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mb-10 leading-relaxed font-medium px-4 whitespace-nowrap hidden md:block"
            >
              Designing intuitive, user-centered digital experiences that solve real problems.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base text-muted-foreground max-w-xs mb-10 leading-relaxed font-medium px-4 md:hidden"
            >
              Designing intuitive, user-centered digital experiences that solve real problems.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <Link to="/work">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="div"
                  className="bg-background text-foreground flex items-center space-x-2 px-6 py-2"
                >
                  <span className="font-semibold flex items-center gap-2">
                    View My Work <ArrowRight size={18} />
                  </span>
                </HoverBorderGradient>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 1. SECTION: My Journey */}
        <section className="mb-32 relative z-10 px-6 md:px-[100px]" ref={containerRef}>
          <SectionTitle 
            title="My Journey" 
            subtitle="How I evolved from a curious student to a professional designer."
          />
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 overflow-hidden">
              <motion.div 
                style={{ height: timelineHeight }}
                className="w-full bg-indigo-500 origin-top"
              />
            </div>

            <div className="space-y-12">
              {journeySteps.map((step, idx) => (
                <div key={idx} className={cn(
                  "relative flex items-center gap-8 md:gap-0",
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}>
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-indigo-500 -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
                  />
                  
                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.23, 1, 0.32, 1] }}
                    className="w-full md:w-[45%]"
                  >
                    <GlassCard className="p-6 hover:border-indigo-500/30 transition-all duration-300 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-indigo-500/[0.01] group-hover:bg-indigo-500/[0.03] transition-colors" />
                      <div className="flex items-center gap-4 mb-4 relative z-10">
                        <motion.div 
                          whileInView={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                          className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400"
                        >
                          {step.icon}
                        </motion.div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-indigo-400 transition-colors">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed relative z-10">{step.desc}</p>
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

        {/* 3. SECTION: Engineering Mindset */}
        <section className="mb-32 relative z-10 px-6 md:px-[100px]">
          <SectionTitle 
            title="The logic of an engineer. The eye of a designer." 
            subtitle="I sit at the rare intersection of Computer Science and Creative Design."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Engineering Mindset - Large Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <GlassCard className="h-full flex flex-col justify-between group overflow-hidden relative min-h-[450px] border-indigo-500/10 p-8 md:p-12">
                {/* Animated Blueprint Background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <defs>
                      <pattern id="grid-pattern-mindset" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern-mindset)" />
                    
                    <motion.line
                      x1="0" y1="0" x2="400" y2="0"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-indigo-500/30"
                      animate={{ y: [0, 400, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />

                    <motion.path
                      d="M 50 50 Q 150 50 150 150 T 250 250"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="10 5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>
                </div>

                <div className="absolute -right-20 -top-20 w-96 h-96 bg-indigo-500/10 blur-[120px] group-hover:bg-indigo-500/20 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div 
                      whileInView={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-16 h-16 rounded-2xl accent-gradient flex items-center justify-center shadow-2xl shadow-indigo-500/30"
                    >
                      <Code className="text-white" size={32} />
                    </motion.div>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent" />
                  </div>
                  
                  <h3 className="text-4xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">Engineering Mindset</h3>
                  <p className="text-muted-foreground text-xl leading-relaxed max-w-xl">
                    While most designers stop at "how it looks," I dig deeper into "how it works." My technical background allows me to build <span className="text-indigo-400 font-bold">scalable design systems</span> and <span className="text-indigo-400 font-bold">feasible user flows</span> that bridge the gap between imagination and execution.
                  </p>
                </div>

                <div className="mt-12 flex gap-3 flex-wrap relative z-10">
                  {["System Architecture", "React/Next.js", "Design Systems", "UI Engineering"].map((tag) => (
                    <Badge key={tag} className="bg-indigo-500/5 border-indigo-500/10 text-indigo-400/80 px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-indigo-500/10 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* Education - Visual Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <GlassCard className="h-full flex flex-col group overflow-hidden relative min-h-[450px] border-purple-500/10 p-8 md:p-10">
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <motion.path
                      d="M 10 10 L 190 10 M 10 190 L 190 190"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-purple-500"
                      strokeDasharray="4 4"
                      animate={{ strokeDashoffset: [0, 8] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.circle
                      cx="100" cy="100" r="80"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.2"
                      className="text-purple-500"
                      strokeDasharray="2 10"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>
                </div>

                <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-purple-500/10 blur-[100px] group-hover:bg-purple-500/20 transition-colors duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-10">
                    <motion.div 
                      whileInView={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shadow-lg shadow-purple-500/10"
                    >
                      <GraduationCap className="text-purple-400" size={32} />
                    </motion.div>
                    <div className="text-right">
                      <Badge className="bg-purple-500/10 border-purple-500/20 text-purple-400 mb-2">Class of 2024</Badge>
                      <p className="text-2xl font-black text-foreground tracking-tighter">Graduated</p>
                    </div>
                  </div>

                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-black mb-3">Degree</h3>
                      <p className="text-indigo-400 font-black text-3xl leading-tight tracking-tighter">B.E. Computer Science Engineering</p>
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-black mb-3">Institution</h3>
                      <p className="text-foreground text-xl font-bold">Sri Eshwar College of Engineering</p>
                      <p className="text-muted-foreground font-medium">Coimbatore, India</p>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-8 border-t border-border/50 relative z-10">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <p className="text-sm font-black uppercase tracking-widest text-foreground">Distinction</p>
                        </div>
                        <div className="w-full h-2 bg-muted/20 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "86.9%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-indigo-500"
                          />
                        </div>
                      </div>
                      
                      <div className="relative flex items-center justify-center w-24 h-24 shrink-0">
                        <svg className="w-full h-full -rotate-[220deg]" viewBox="0 0 100 100">
                          <circle
                            cx="50" cy="50" r="40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="8"
                            strokeDasharray="180 360"
                            className="text-muted/10"
                          />
                          <motion.circle
                            cx="50" cy="50" r="40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="8"
                            strokeDasharray="180 360"
                            initial={{ strokeDashoffset: 180 }}
                            whileInView={{ strokeDashoffset: 180 * (1 - 8.69 / 10) }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "circOut" }}
                            className="text-indigo-500"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
                          <span className="text-2xl font-black text-foreground tracking-tighter">8.69</span>
                          <span className="text-[8px] text-muted-foreground font-bold uppercase tracking-widest">CGPA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* 4. SECTION: What I Bring (Super UI Redesign) */}
        <section className="mb-32 relative z-10 px-6 md:px-[100px] overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute top-20 right-[10%] w-64 h-64 border border-indigo-500/20 rounded-full"
            />
            <motion.div 
              animate={{ 
                y: [0, 20, 0],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{ duration: 12, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 left-[5%] w-96 h-96 border border-purple-500/10 rounded-full"
            />
          </div>

          <SectionTitle 
            title="What I Bring" 
            subtitle="The unique value I add to every project and team."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
            {whatIBring.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.23, 1, 0.32, 1] }}
              >
                <GlassCard className="group h-full p-10 flex flex-col md:flex-row gap-8 transition-all duration-700 border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/[0.02] relative overflow-hidden">
                  {/* Decorative Gradient Background */}
                  <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500/5 blur-[80px] group-hover:bg-indigo-500/10 transition-colors duration-700" />
                  
                  <div className="flex-1 relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        whileInView={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shadow-inner"
                      >
                        {item.icon}
                      </motion.div>
                      <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/20 to-transparent" />
                    </div>

                    <h3 className="text-3xl font-black mb-4 tracking-tighter text-foreground group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                    
                    <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400/60">
                      <div className="w-8 h-[1px] bg-indigo-500/30" />
                      Core Expertise
                    </div>
                  </div>

                  <div className="w-full md:w-[45%] shrink-0 relative z-10">
                    <motion.div
                      whileInView={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {item.visual}
                    </motion.div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. SECTION: Let’s Connect */}
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
                  href="#" // Replace with actual resume link
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
