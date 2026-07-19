import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Check, MapPin, Calendar, Sparkles } from "lucide-react";
import { PageTransition } from "@/components/Common";

interface ExperienceCardProps {
  title: string;
  company: string;
  type: string;
  location: string;
  duration: string;
  summary: string;
  achievements: string[];
  metrics: string[];
  tags: string[];
}

const experienceData: ExperienceCardProps[] = [
  {
    title: "UI/UX Designer",
    company: "Sajal Tech Solutions",
    type: "Full-time",
    location: "Remote",
    duration: "Nov 2024 – Apr 2026",
    summary: "Designed scalable SaaS dashboards and cross-platform digital products while collaborating with developers and stakeholders to create intuitive user experiences.",
    achievements: [
      "Designed responsive SaaS dashboards and web applications.",
      "Built reusable design systems for consistent user experiences.",
      "Collaborated with developers to deliver pixel-perfect implementations."
    ],
    metrics: ["1.6 Years Experience", "12+ Projects", "Cross Platform"],
    tags: ["Figma", "Design Systems", "Developer Handoff"]
  },
  {
    title: "UI/UX Design Intern",
    company: "App Innovation Technologies",
    type: "Internship",
    location: "Coimbatore",
    duration: "Apr 2024 – Oct 2024",
    summary: "Built strong UX foundations through hands-on client projects, wireframing, prototyping, and usability testing under senior designers.",
    achievements: [
      "Designed responsive web and mobile interfaces.",
      "Created interactive wireframes and prototypes.",
      "Participated in usability testing and design reviews."
    ],
    metrics: ["Internship", "A Grade", "6 Months"],
    tags: ["Figma", "UX Research", "User Testing"]
  },
  {
    title: "Bachelor of Engineering",
    company: "Sri Eshwar College of Engineering",
    type: "Computer Science",
    location: "Coimbatore",
    duration: "2020 – 2024",
    summary: "Developed a strong engineering mindset that supports structured problem-solving, scalable design thinking, and technical collaboration.",
    achievements: [
      "Graduated with CGPA 8.69.",
      "Built strong analytical and systems thinking.",
      "Applied engineering principles to modern UI design."
    ],
    metrics: ["CGPA 8.69", "Engineering", "Coimbatore"],
    tags: ["Systems Thinking", "UI Engineering", "Analytical Design"]
  }
];

export function Experience() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  // Track scroll progress for custom path animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <PageTransition showGrid={false}>
      <div className="relative min-h-screen w-full px-4 md:px-8 lg:px-[100px] pt-32 pb-24 overflow-hidden bg-background">
        
        {/* Custom Grid Background with 12% Opacity */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-12">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        {/* Dynamic ambient glowing backgrounds behind card containers */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8B5CF6]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-[#0C8BE8]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto" ref={containerRef}>
          
          {/* Header Section */}
          <div className="mb-24 pt-10 text-left max-w-[720px]">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#A78BFA] text-xs font-black uppercase tracking-widest mb-6"
            >
              <span>✦ Professional Journey</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-[64px] font-black text-white leading-[1.08] tracking-tighter mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
            >
              Building Better Products Through Design
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 text-base md:text-[20px] leading-relaxed font-medium"
            >
              A timeline of my evolution from engineering student to professional UI/UX Designer, creating user-centered digital experiences across SaaS, web, and mobile products.
            </motion.p>
          </div>

          {/* Timeline Layout */}
          <div className="relative max-w-[920px] mx-auto pl-10 md:pl-28">
            
            {/* The Thin Premium Vertical Timeline Line */}
            <div className="absolute left-4 md:left-14 top-4 bottom-4 w-[2px] bg-white/[0.04]">
              {/* Animated scroll progress overlay line */}
              <motion.div 
                style={{ height: timelineHeight }}
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#8B5CF6] via-[#0C8BE8] to-[#8B5CF6] origin-top shadow-[0_0_15px_rgba(139,92,246,0.6)]"
              />
            </div>

            {/* List of Milestones */}
            <div className="space-y-16">
              {experienceData.map((item, index) => (
                <div key={index} className="relative group">
                  
                  {/* Timeline Indicator Node with year label and duration positioned to the left on desktop */}
                  <div className="absolute left-[-32px] md:left-[-102px] top-6 flex items-center gap-4 z-20">
                    
                    {/* Time Metadata Label for Desktop (Positioned left of the node) */}
                    <div className="hidden md:flex flex-col items-end text-right w-20 shrink-0">
                      <span className="text-sm font-black text-white/90 font-mono tracking-tight">{item.duration.split("–")[0].trim().split(" ").pop()}</span>
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{item.duration.includes("–") ? "Duration" : "Graduation"}</span>
                    </div>

                    {/* Node with glowing pulse */}
                    <div className="relative w-4 h-4 rounded-full bg-[#0A0718] border-2 border-[#8B5CF6]/60 group-hover:border-[#8B5CF6] flex items-center justify-center transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] group-hover:bg-[#0C8BE8] transition-colors" />
                      
                      {/* Interactive Pulsing Circles */}
                      <div className="absolute -inset-2 rounded-full bg-[#8B5CF6]/10 animate-ping opacity-40 pointer-events-none group-hover:bg-[#0C8BE8]/20" />
                    </div>
                  </div>

                  {/* Experience Card Container (overlapped slightly with timeline depth) */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                    whileHover={{ y: -8, scale: 1.01 }}
                    className="relative max-w-[720px] rounded-[28px] bg-[#0A0718]/90 border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 p-6 md:p-8 transition-all duration-300 shadow-xl hover:shadow-[0_0_40px_rgba(139,92,246,0.12)] cursor-pointer overflow-hidden group/card"
                  >
                    
                    {/* Inner Premium Diagonal Glow Effect */}
                    <div className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#0C8BE8]/5 opacity-0 group-hover/card:opacity-100 transition-all duration-500 pointer-events-none" />

                    {/* Year/Duration info for mobile viewport */}
                    <div className="flex md:hidden items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-[#A78BFA] bg-[#8B5CF6]/10 px-2.5 py-0.5 rounded-full border border-[#8B5CF6]/20">
                        {item.duration}
                      </span>
                    </div>

                    {/* Job Title - Always Largest Text */}
                    <h2 className="text-2xl md:text-[34px] md:leading-[1.1] font-black text-white tracking-tighter transition-colors duration-300 group-hover/card:text-white">
                      {item.title}
                    </h2>

                    {/* Sub-Header metadata row: Company, Employment Type, Location, Duration */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-2 mb-5 text-sm md:text-[18px] text-white/50 font-medium">
                      <span className="text-white font-bold tracking-tight">{item.company}</span>
                      <span className="text-white/20">•</span>
                      <span className="text-xs md:text-sm px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-white/60 font-semibold">{item.type}</span>
                      <span className="text-white/20">•</span>
                      <span className="flex items-center gap-1 text-xs md:text-sm text-white/40">
                        <MapPin size={12} className="text-[#0C8BE8]" /> {item.location}
                      </span>
                      <span className="hidden md:inline text-white/20">•</span>
                      <span className="hidden md:inline text-xs md:text-[15px] text-white/40 font-mono font-medium">{item.duration}</span>
                    </div>

                    {/* Summary text */}
                    <p className="text-[16px] md:text-[18px] text-white/60 leading-relaxed font-normal mb-6">
                      {item.summary}
                    </p>

                    {/* Achievements List - Styled with Check ✓ */}
                    <div className="space-y-3 mb-8 text-[15px] md:text-[16px]">
                      {item.achievements.map((achievement, actIdx) => (
                        <div key={actIdx} className="flex items-start gap-3 text-white/70 group-hover/card:text-white/80 transition-colors">
                          <span className="text-[#10B981] font-black text-lg shrink-0 select-none">✓</span>
                          <span className="leading-relaxed font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom row: Metrics (Left) & Technology Chips (Right) */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-white/[0.04] mt-2">
                      
                      {/* Metrics Row */}
                      <div className="flex items-center gap-3">
                        {item.metrics.map((metric, metIdx) => (
                          <div key={metIdx} className="flex items-center gap-2">
                            {metIdx > 0 && <span className="w-1 h-1 rounded-full bg-white/15" />}
                            <span className="text-xs md:text-sm font-bold text-white/40 uppercase tracking-wider">{metric}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Chips - Maximum Three chips per card, brighten on hover */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.slice(0, 3).map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="text-[12px] md:text-[13px] font-bold px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/50 group-hover/card:text-white/90 group-hover/card:border-[#8B5CF6]/30 group-hover/card:bg-[#8B5CF6]/5 transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>

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
