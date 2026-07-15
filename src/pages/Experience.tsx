import React from "react";
import { motion } from "motion/react";
import { Briefcase, MapPin } from "lucide-react";
import { Badge, GlassCard, PageTransition } from "@/components/Common";
import { cn } from "@/lib/utils";
import { useScroll, useTransform } from "motion/react";

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
    points: [
      "Graduated with a high Cumulative GPA of 8.69/10",
      "Specialized in data structures, design patterns, and systems architecture",
      "Applied computer science logic to improve front-end design workflows and component standards"
    ],
    tags: ["GPA: 8.69", "Systems Logic", "Engineering Foundations", "Coimbatore"]
  },
  { 
    year: "2024",
    title: "UI/UX Design Intern", 
    subtitle: "App Innovation Technologies",
    location: "Coimbatore, India",
    period: "April 2024 – October 2024",
    icon: <Briefcase size={20} />, 
    desc: "Gained hands-on professional industry experience, securing an A-grade internship certification. Developed deep empathy for users while mastering core design processes, interactive wireframing, and rigorous user testing under senior designers.",
    points: [
      "Designed responsive web experiences and mobile app interfaces from scratch",
      "Created interactive prototypes for stakeholder presentations and user testing",
      "Assisted in the redesign of legacy platforms to improve accessibility and modern aesthetics",
      "Worked in an agile environment, participating in daily standups and design reviews"
    ],
    tags: ["A-Grade Certified", "Hands-on UX", "Wireframing", "Agile Practice", "Visual Design", "User Research"]
  },
  { 
    year: "2024 - 2026",
    title: "UI/UX Designer", 
    subtitle: "Sajal Tech Solutions",
    location: "Remote",
    period: "Nov 2024 – April 2026",
    icon: <Briefcase size={20} />, 
    desc: "Owned end-to-end design streams for SaaS dashboards and multi-platform experiences. Collaborated with global teams to design active, live client projects using polished, high-fidelity design systems.",
    points: [
      "Translating complex product requirements into intuitive UI/UX solutions",
      "Developing and scaling a cross-platform design system for consistency",
      "Collaborating directly with engineering teams to ensure pixel-perfect implementation",
      "Conducting user research and usability testing to iterate on core features"
    ],
    tags: ["SaaS Dashboards", "Design Systems", "Live Client Projects", "Product Strategy", "Figma", "Prototyping"]
  }
];

export function Experience() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [trackStyle, setTrackStyle] = React.useState({ top: 0, bottom: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
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
            className="absolute top-1/4 -left-20 w-96 h-96 bg-[#54268F]/5 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, -90, 0],
              x: [0, -50, 0],
              y: [0, 100, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#0C8BE8]/5 rounded-full blur-[120px]"
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
              className="text-muted-foreground max-w-2xl text-lg md:text-xl leading-relaxed font-medium"
            >
              My step-by-step evolution from a computer science student to a professional designer.
            </motion.p>
          </div>

          {/* Merged container of progress line and timeline steps */}
          <div className="relative max-w-5xl mx-auto py-12" ref={containerRef}>
            
            {/* Straight glowing road line connecting the dots of years */}
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
                    className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-[#54268F] via-[#0C8BE8] to-[#54268F] origin-top shadow-[0_0_15px_rgba(84,38,143,0.75)]"
                  />

                  {/* Active blinking tip pointer that travels with the scroll progress */}
                  <motion.div
                    style={{ top: timelineHeight }}
                    className="absolute left-[-5px] -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#0C8BE8] shadow-[0_0_15px_rgba(12,139,232,0.9)] border-2 border-white flex items-center justify-center"
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
                  
                  {/* LEFT COLUMN: Year with elegant typography */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="col-span-12 md:col-span-4 flex flex-col md:items-end text-left md:text-right relative pl-10 md:pl-0"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0C8BE8] mb-1">
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
                      className="text-5xl sm:text-6xl md:text-7xl font-black font-mono tracking-tighter bg-gradient-to-r from-white via-purple-300 to-white bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(84,38,143,0.35)] select-none leading-none flex flex-col md:items-end items-start"
                    >
                      {step.year.includes("-") ? (
                        <>
                          <span>{step.year.split("-")[0].trim()}</span>
                          <span className="text-[#54268F] text-2xl md:text-3xl my-1 md:my-1.5 block leading-none font-bold select-none">—</span>
                          <span>{step.year.split("-")[1].trim()}</span>
                        </>
                      ) : (
                        step.year
                      )}
                    </motion.h3>
                    <span className="text-xs text-[#A1A1AA]/60 font-medium mt-1 flex items-center gap-1 md:justify-end">
                      <MapPin size={12} className="text-[#0C8BE8] shrink-0" />
                      <span>{step.location}</span>
                    </span>
                  </motion.div>
 
                  {/* CENTER COLUMN: Road Joint Dot / Marker */}
                  <div className="col-span-12 md:col-span-1 flex md:justify-center items-center relative py-2 md:py-0">
                    <div 
                      data-journey-dot={idx}
                      className="absolute left-[16px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-[#11071F]/90 border border-[#54268F]/50 group-hover:border-[#0C8BE8] shadow-[0_0_20px_rgba(84,38,143,0.45)] z-30 transition-all duration-300"
                    >
                      <div className="w-3.5 h-3.5 rounded-full bg-[#54268F] flex items-center justify-center text-white">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                      {/* High visibility blinking pulse ring around each dot */}
                      <motion.div 
                        animate={{ scale: [1, 1.7, 1], opacity: [0.4, 0.9, 0.4] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: idx * 0.4 }}
                        className="absolute w-7 h-7 rounded-full bg-[#54268F]/30 blur-[1.5px] pointer-events-none"
                      />
                      <motion.div 
                        animate={{ scale: [1, 2.2, 1], opacity: [0.15, 0.4, 0.15] }}
                        transition={{ duration: 2.2, repeat: Infinity, delay: idx * 0.4 + 0.2 }}
                        className="absolute w-10 h-10 rounded-full bg-[#EC4899]/20 blur-[2px] pointer-events-none"
                      />
                    </div>
                  </div>
 
                  {/* RIGHT COLUMN: Interactive Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="col-span-12 md:col-span-7 pl-10 md:pl-0"
                  >
                    <GlassCard className="p-6 md:p-8 hover:border-[#0C8BE8]/40 transition-all duration-500 relative overflow-hidden bg-[#1A0B2E]/75 group">
                      {/* Ambient subtle glow when hovered */}
                      <div className="absolute -inset-[1px] bg-gradient-to-r from-[#54268F]/20 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />
                      
                      {/* Card Header */}
                      <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-[rgba(255,255,255,0.05)]">
                        <div>
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0C8BE8]">
                            {step.subtitle}
                          </span>
                          <h4 className={cn(
                            "text-xl md:text-2xl font-black text-white tracking-tight mt-1 transition-colors duration-300",
                            (step.title.includes("UI/UX") || step.title.includes("Designer")) ? "" : "group-hover:text-[#0C8BE8]"
                          )}>
                            {step.title}
                          </h4>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-[#54268F]/10 flex items-center justify-center text-[#0C8BE8] group-hover:bg-[#54268F]/20 transition-all duration-300 shrink-0">
                          {step.icon}
                        </div>
                      </div>
 
                      {/* Card Content */}
                      <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed mb-4 font-medium">
                        {step.desc}
                      </p>

                      {/* Bullet points detailing the role */}
                      <div className="grid grid-cols-1 gap-3 mb-6">
                        {step.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-3 text-[#A1A1AA]/80 text-sm md:text-base leading-relaxed group/item">
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C8BE8] shadow-[0_0_8px_rgba(12,139,232,0.5)] shrink-0 group-hover/item:scale-125 transition-transform" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
 
                      {/* Card Tags */}
                      {step.tags && (
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                          {step.tags.map((tag, tIdx) => {
                            const isGPA = tag.includes("GPA") || tag.includes("Grade");
                            return (
                              <span 
                                key={tIdx} 
                                className={cn(
                                  "text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg transition-all duration-300",
                                  isGPA 
                                    ? "text-white bg-[#54268F]/20 border-2 border-[#54268F]/60 shadow-[0_0_15px_rgba(84,38,143,0.4)]" 
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
        </div>
      </div>
    </PageTransition>
  );
}
