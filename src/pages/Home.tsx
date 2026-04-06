import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Code, GraduationCap } from "lucide-react";
import { Badge, GlassCard, SectionTitle, PageTransition } from "@/components/Common";
import { Link } from "react-router-dom";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SparklesCore } from "@/components/ui/sparkles";
import { cn } from "@/lib/utils";

import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { useTheme } from "@/components/ThemeProvider";

export function Home() {
  const { theme } = useTheme();
  const particleColor = theme === "dark" ? "#FFFFFF" : "#09090b";

  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Sparkles Background Section - Now truly full screen and reaches top */}
        <div className="fixed inset-0 w-full h-full bg-background flex flex-col items-center justify-center overflow-hidden z-0">
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

        <section className="min-h-screen flex flex-col justify-center items-center text-center relative z-10 pt-36 pb-16 px-6 md:px-[100px]">
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
              className="flex flex-wrap justify-center gap-6"
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

      <section className="mb-32 relative z-10 px-6 md:px-[100px]">
        <SectionTitle 
          title="The logic of an engineer. The eye of a designer." 
          subtitle="I sit at the rare intersection of Computer Science and Creative Design."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Engineering Mindset - Large Card */}
          <GlassCard className="lg:col-span-7 flex flex-col justify-between group overflow-hidden relative min-h-[450px] border-indigo-500/10">
            {/* Animated Blueprint Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                
                {/* Moving Scanning Line */}
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
                
                {/* Floating Code Snippets */}
                <motion.text
                  x="300" y="100"
                  className="text-[10px] font-mono fill-indigo-500/40"
                  animate={{ opacity: [0.2, 0.6, 0.2], y: [100, 90, 100] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {"<div />"}
                </motion.text>
                <motion.text
                  x="50" y="300"
                  className="text-[10px] font-mono fill-indigo-500/40"
                  animate={{ opacity: [0.2, 0.6, 0.2], y: [300, 310, 300] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                >
                  {"const app = () => {}"}
                </motion.text>

                <motion.circle
                  cx="50" cy="50" r="4" fill="currentColor"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.circle
                  cx="250" cy="250" r="4" fill="currentColor"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </svg>
            </div>

            <div className="absolute -right-20 -top-20 w-96 h-96 bg-indigo-500/10 blur-[120px] group-hover:bg-indigo-500/20 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl accent-gradient flex items-center justify-center shadow-2xl shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-500">
                  <Code className="text-white" size={32} />
                </div>
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

          {/* Education - Visual Card */}
          <GlassCard className="lg:col-span-5 flex flex-col group overflow-hidden relative min-h-[450px] border-purple-500/10">
            {/* HUD / Automotive Background Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                {/* Moving HUD Lines */}
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
                {/* Scanning Arc */}
                <motion.path
                  d="M 40 100 A 60 60 0 0 1 160 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-purple-400/30"
                  animate={{ opacity: [0.1, 0.5, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </svg>
            </div>

            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-purple-500/10 blur-[100px] group-hover:bg-purple-500/20 transition-colors duration-500" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-10">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-purple-500/10">
                  <GraduationCap className="text-purple-400" size={32} />
                </div>
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
                    {/* Speedometer Style Gauge */}
                    <svg className="w-full h-full -rotate-[220deg]" viewBox="0 0 100 100">
                      {/* Background Track */}
                      <circle
                        cx="50" cy="50" r="40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeDasharray="180 360"
                        className="text-muted/10"
                      />
                      {/* Active Gauge */}
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
                      {/* Ticks */}
                      {[...Array(10)].map((_, i) => (
                        <line
                          key={i}
                          x1="50" y1="10" x2="50" y2="15"
                          stroke="currentColor"
                          strokeWidth="1"
                          className="text-muted-foreground/30"
                          transform={`rotate(${i * 20} 50 50)`}
                        />
                      ))}
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
        </div>
      </section>
      </div>
    </PageTransition>
  );
}
