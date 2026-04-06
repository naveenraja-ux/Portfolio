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

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Icon Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={16} className="text-indigo-400" />
              </div>

              {/* Content Card */}
              <GlassCard className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 md:p-8 hover:border-indigo-500/30 transition-all duration-500">
                <div className="flex flex-col mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">{exp.role}</h3>
                    <Badge className="bg-indigo-500/10 text-indigo-400 border-indigo-500/20 px-3 py-1 text-xs font-bold">
                      {exp.period}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <span className="text-indigo-400">{exp.company}</span>
                    <span className="text-muted-foreground/40">•</span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{exp.desc}"
                </p>
                
                <div className="space-y-4 mb-8">
                  {exp.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                      {point}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-border/50">
                  {exp.skills.map(skill => (
                    <Badge key={skill} className="bg-background/50 border-border text-muted-foreground hover:text-foreground transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
      </div>
    </PageTransition>
  );
}
