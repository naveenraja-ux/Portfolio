import React from "react";
import { motion } from "motion/react";
import { Briefcase, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { Badge, GlassCard, PageTransition } from "@/components/Common";
import { cn } from "@/lib/utils";

const experiences = [
  {
    role: "UI/UX Designer",
    company: "Sajal Tech Solutions",
    location: "Remote",
    period: "Nov 2024 – April 2026",
    desc: "Spearheading the design direction for modern, user-centered digital products. I focus on crafting high-fidelity interfaces and maintaining a comprehensive design system.",
    points: [
      "Translating complex product requirements into intuitive UI/UX solutions",
      "Developing and scaling a cross-platform design system for consistency",
      "Collaborating directly with engineering teams to ensure pixel-perfect implementation",
      "Conducting user research and usability testing to iterate on core features"
    ],
    skills: ["Product Strategy", "Design Systems", "Figma", "Prototyping"]
  },
  {
    role: "UI/UX Design Intern",
    company: "App Innovation Technologies",
    location: "Coimbatore, India",
    period: "Apr 2024 – Oct 2024",
    desc: "Gained intensive hands-on experience designing for diverse sectors including Fintech, Marketplaces, and Corporate web applications.",
    points: [
      "Designed responsive web experiences and mobile app interfaces from scratch",
      "Created interactive prototypes for stakeholder presentations and user testing",
      "Assisted in the redesign of legacy platforms to improve accessibility and modern aesthetics",
      "Worked in an agile environment, participating in daily standups and design reviews"
    ],
    skills: ["Visual Design", "Wireframing", "User Research", "Agile"]
  }
];

export function Experience() {
  return (
    <PageTransition showGrid={true}>
      <div className="relative min-h-screen w-full px-6 md:px-[100px] pt-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 100, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, -90, 0],
              x: [0, -50, 0],
              y: [0, 100, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]"
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="py-8 md:py-12 relative z-10">
          <div className="mb-12 md:mb-16">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-7xl font-bold text-gradient mb-6"
          >
            Experience
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl text-lg md:text-xl leading-relaxed"
          >
            A timeline of my professional growth, focusing on creating impact through thoughtful design and technical collaboration.
          </motion.p>
        </div>

        <div className="relative space-y-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Icon Dot */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-indigo-500/30 bg-background shadow-[0_0_20px_rgba(99,102,241,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-110">
                <Briefcase size={20} className="text-indigo-400" />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4.5rem)] md:w-[calc(50%-3rem)] relative">
                {/* Animated Border/Glow */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                
                <div className="relative bg-[#0d0d0f] border border-white/5 rounded-2xl p-6 md:p-10 overflow-hidden shadow-2xl">
                  {/* Card Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 opacity-50" />
                  
                  {/* Floating Motion Graphic */}
                  <motion.div 
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col mb-8">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors duration-300">{exp.role}</h3>
                        <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest">
                          {exp.period}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-base font-semibold">
                        <span className="text-indigo-400/90">{exp.company}</span>
                        <span className="text-white/10">•</span>
                        <span className="flex items-center gap-2 text-muted-foreground/80">
                          <MapPin size={16} className="text-indigo-400/50" /> {exp.location}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-medium border-l-2 border-indigo-500/30 pl-4 py-1">
                      {exp.desc}
                    </p>
                    
                    <div className="grid grid-cols-1 gap-4 mb-10">
                      {exp.points.map((point, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (i * 0.1) }}
                          className="flex items-start gap-4 text-muted-foreground/90 text-base leading-relaxed group/item"
                        >
                          <div className="mt-2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] shrink-0 group-hover/item:scale-150 transition-transform" />
                          {point}
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-8 border-t border-white/5">
                      {exp.skills.map(skill => (
                        <Badge key={skill} className="bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300 cursor-default">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </PageTransition>
  );
}
