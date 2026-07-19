import React from "react";
import { motion } from "motion/react";
import { 
  Layout, 
  Target, 
  Layers, 
  Zap, 
  Users, 
  Terminal, 
  Figma, 
  Sparkles, 
  Palette, 
  Code, 
  Component, 
  MousePointer2, 
  Smartphone, 
  RefreshCw, 
  ArrowRight 
} from "lucide-react";
import { PageTransition } from "@/components/Common";
import { cn } from "@/lib/utils";

const expertises = [
  {
    title: "UX Design",
    description: "Designing user-centered experiences through research, user flows, information architecture, wireframes, and interactive prototypes.",
    highlights: ["User Flows", "Wireframes", "Information Architecture", "Prototyping"],
    badge: "Primary Expertise",
    accent: "blue",
    icon: Layout
  },
  {
    title: "Product Design",
    description: "Solving business challenges by creating intuitive digital products that balance user needs with product goals.",
    highlights: ["Problem Solving", "Product Thinking", "User Journeys", "MVP Design"],
    badge: "Core Skill",
    accent: "purple",
    icon: Target
  },
  {
    title: "Design Systems",
    description: "Building scalable and consistent design systems with reusable components and responsive layouts.",
    highlights: ["Components", "Auto Layout", "Variables", "Responsive Design"],
    badge: "Scalable UI",
    accent: "green",
    icon: Layers
  },
  {
    title: "Interaction Design",
    description: "Creating delightful interactions using animations, transitions, feedback states, and micro-interactions.",
    highlights: ["Motion", "Hover States", "Animations", "User Feedback"],
    badge: "Experience Focus",
    accent: "yellow",
    icon: Zap
  },
  {
    title: "User Research",
    description: "Understanding users through research, competitor analysis, usability testing, and data-driven design decisions.",
    highlights: ["Competitor Analysis", "User Interviews", "Usability Testing", "Insights"],
    badge: "Research Driven",
    accent: "cyan",
    icon: Users
  },
  {
    title: "Developer Handoff",
    description: "Preparing production-ready designs with organized components, documentation, and clean developer handoff.",
    highlights: ["Figma Specs", "Components", "Documentation", "Collaboration"],
    badge: "Development Ready",
    accent: "orange",
    icon: Terminal
  }
];

const toolkit = [
  { name: "Figma", icon: Figma, color: "hover:border-[#F24E1E]/50 hover:text-[#F24E1E] hover:shadow-[#F24E1E]/5" },
  { name: "FigJam", icon: Sparkles, color: "hover:border-[#FFC700]/50 hover:text-[#FFC700] hover:shadow-[#FFC700]/5" },
  { name: "Adobe Photoshop", icon: Palette, color: "hover:border-[#31A8FF]/50 hover:text-[#31A8FF] hover:shadow-[#31A8FF]/5" },
  { name: "Illustrator", icon: Layers, color: "hover:border-[#FF9A00]/50 hover:text-[#FF9A00] hover:shadow-[#FF9A00]/5" },
  { name: "HTML", icon: Code, color: "hover:border-[#E34F26]/50 hover:text-[#E34F26] hover:shadow-[#E34F26]/5" },
  { name: "CSS", icon: Layout, color: "hover:border-[#1572B6]/50 hover:text-[#1572B6] hover:shadow-[#1572B6]/5" },
  { name: "Bootstrap", icon: Component, color: "hover:border-[#7952B3]/50 hover:text-[#7952B3] hover:shadow-[#7952B3]/5" },
  { name: "Auto Layout", icon: MousePointer2, color: "hover:border-[#8B5CF6]/50 hover:text-[#8B5CF6] hover:shadow-[#8B5CF6]/5" },
  { name: "Components", icon: Component, color: "hover:border-[#0C8BE8]/50 hover:text-[#0C8BE8] hover:shadow-[#0C8BE8]/5" },
  { name: "Variables", icon: Zap, color: "hover:border-[#10B981]/50 hover:text-[#10B981] hover:shadow-[#10B981]/5" },
  { name: "Prototyping", icon: Smartphone, color: "hover:border-[#EC4899]/50 hover:text-[#EC4899] hover:shadow-[#EC4899]/5" },
  { name: "User Flows", icon: RefreshCw, color: "hover:border-[#06B6D4]/50 hover:text-[#06B6D4] hover:shadow-[#06B6D4]/5" },
  { name: "Wireframing", icon: Layout, color: "hover:border-[#FF5F56]/50 hover:text-[#FF5F56] hover:shadow-[#FF5F56]/5" }
];

export function Skills() {
  return (
    <PageTransition showGrid={false}>
      <div className="relative min-h-screen w-full px-6 md:px-12 lg:px-[100px] pt-32 pb-24 overflow-hidden bg-background">
        
        {/* Custom Grid Background with 15% Opacity */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        {/* Subtle glowing radial gradient in the top-right corner */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-20 pt-10 text-left max-w-[760px]">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#A78BFA] text-xs font-black uppercase tracking-widest mb-6"
            >
              <span>✦ Core Expertise</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-[72px] font-black text-white leading-[1.05] tracking-tighter mb-6 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent"
            >
              Designing Products That Users Love & Businesses Value
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 text-lg md:text-[20px] leading-relaxed font-medium"
            >
              I transform complex ideas into intuitive digital experiences by combining user research, strategic thinking, interaction design, and scalable UI systems.
            </motion.p>
          </div>

          {/* Cards Grid */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          >
            {expertises.map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative cursor-pointer h-[340px] rounded-[28px] bg-[#0A0718] border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-all duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] overflow-hidden flex flex-col justify-between p-6 md:p-8"
                >
                  {/* Subtle internal overlay */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />
                  
                  {/* Inner neon border glow on hover */}
                  <div className="absolute -inset-px rounded-[28px] bg-gradient-to-r from-transparent via-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none" />

                  {/* Top Portion: Icon & Text */}
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex justify-between items-start w-full">
                      {/* Icon container: 64px, Glass background, soft glowing effect */}
                      <div className={cn(
                        "w-16 h-16 rounded-[18px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110",
                        skill.accent === "blue" ? "group-hover:border-blue-500/40 group-hover:shadow-blue-500/10" :
                        skill.accent === "purple" ? "group-hover:border-[#8B5CF6]/40 group-hover:shadow-[#8B5CF6]/10" :
                        skill.accent === "green" ? "group-hover:border-emerald-500/40 group-hover:shadow-emerald-500/10" :
                        skill.accent === "yellow" ? "group-hover:border-amber-500/40 group-hover:shadow-amber-500/10" :
                        skill.accent === "cyan" ? "group-hover:border-cyan-500/40 group-hover:shadow-cyan-500/10" :
                        "group-hover:border-orange-500/40 group-hover:shadow-orange-500/10"
                      )}>
                        <IconComponent className={cn(
                          "w-7 h-7 transition-all duration-300 group-hover:rotate-[5deg]",
                          skill.accent === "blue" ? "text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" :
                          skill.accent === "purple" ? "text-[#A78BFA] group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" :
                          skill.accent === "green" ? "text-emerald-400 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" :
                          skill.accent === "yellow" ? "text-amber-400 group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" :
                          skill.accent === "cyan" ? "text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" :
                          "text-orange-400 group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]"
                        )} />
                      </div>
                      <span className="text-[10px] font-mono text-white/20 group-hover:text-white/40 transition-colors">0{idx + 1}</span>
                    </div>

                    <div className="text-left">
                      <h3 className="text-xl sm:text-2xl md:text-[30px] font-black tracking-tight text-white group-hover:text-white transition-colors duration-300">
                        {skill.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-[17px] text-white/50 leading-relaxed font-medium mt-1.5 group-hover:text-white/70 transition-colors line-clamp-3">
                        {skill.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Portion: Highlights and Badge */}
                  <div className="flex flex-col gap-3 w-full">
                    <div className="flex flex-wrap gap-1.5 transition-transform duration-300 group-hover:translate-y-[-2px]">
                      {skill.highlights.map((highlight, hIdx) => (
                        <span 
                          key={hIdx} 
                          className="text-[10px] sm:text-xs md:text-[14px] font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.02] border border-white/[0.04] text-white/60 group-hover:text-white/80 group-hover:border-white/10 group-hover:bg-white/[0.04] transition-all duration-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-white/[0.04] pt-3 mt-1">
                      <span className="text-[11px] sm:text-xs md:text-[13px] font-bold text-[#8B5CF6] group-hover:text-[#A78BFA] uppercase tracking-wider transition-colors">
                        {skill.badge}
                      </span>
                      <ArrowRight size={12} className="text-white/20 group-hover:text-[#8B5CF6] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Design Toolkit Section */}
          <div className="mt-28 relative">
            <div className="flex flex-col items-start text-left mb-10">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8B5CF6] mb-3 block">
                ✦ Design Toolkit
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter">
                Tools & Methods I Use to Build Products
              </h2>
            </div>

            <div className="flex flex-wrap gap-3 max-w-4xl justify-start">
              {toolkit.map((badge, idx) => {
                const BadgeIcon = badge.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className={cn(
                      "px-5 py-3 rounded-full bg-white/[0.02] border border-white/[0.06] text-white/70 text-xs sm:text-sm md:text-[14px] font-bold flex items-center gap-2.5 backdrop-blur-sm cursor-pointer transition-colors duration-300 shadow-xl",
                      badge.color
                    )}
                  >
                    <BadgeIcon size={16} />
                    <span>{badge.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
