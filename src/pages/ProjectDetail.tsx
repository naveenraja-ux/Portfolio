import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { X, ArrowRight, ExternalLink, CheckCircle2, Target, Users, AlertCircle, Lightbulb, TrendingUp, Award, Layers, ArrowLeft, ArrowUp } from "lucide-react";
import { Badge, PageTransition } from "@/components/Common";
import { projects } from "@/data/projects";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { BorderBeam } from "@/components/ui/border-beam";

export function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === projectId);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 text-foreground">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-foreground/60 mb-8">The project you are looking for does not exist.</p>
          <button
            onClick={() => navigate("/work")}
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold flex items-center gap-2"
          >
            <ArrowLeft size={20} /> Back to Work
          </button>
        </div>
      </PageTransition>
    );
  }

  const cs = project.caseStudy;
  const brandColor = project.brandColor || "#7A50A2";

  const SectionHeader = ({ icon: Icon, title, index }: { icon: any, title: string, index?: string }) => (
    <div className="flex flex-col mb-12">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(to bottom right, ${brandColor}, transparent)` }} />
          <Icon size={18} style={{ color: brandColor }} className="relative z-10" />
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-foreground/10 to-transparent" />
      </div>
      <div className="flex items-baseline gap-3">
        {index && <span className="text-[10px] font-black text-foreground/20 tracking-widest uppercase">{index}</span>}
        <h2 className="text-xs uppercase tracking-[0.3em] font-black text-foreground/40">{title}</h2>
      </div>
    </div>
  );

  return (
    <PageTransition>
      {/* Sticky Top Bar with Back Button */}
      <div className="fixed top-0 left-0 w-full z-[90] pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 md:px-[100px] py-6 flex justify-between items-center">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/work")}
            className="pointer-events-auto group flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md border border-foreground/10 text-[10px] uppercase tracking-[0.2em] font-black text-foreground/40 hover:text-foreground hover:border-foreground/20 transition-all shadow-xl shadow-black/5"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" style={{ color: brandColor }} />
            <span>Back to Work</span>
          </motion.button>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 z-[100] w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-foreground/10 flex items-center justify-center text-foreground/40 hover:text-foreground hover:border-foreground/20 transition-all shadow-2xl shadow-black/20 group"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" style={{ color: brandColor }} />
      </motion.button>

      <div className="relative w-full text-foreground min-h-screen font-['Poppins',_sans-serif] overflow-x-hidden pt-32 pb-20 px-6 md:px-[100px]">
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-foreground/5">
          <motion.div 
            className="h-full" 
            style={{ width: `${scrollProgress}%`, backgroundColor: brandColor }}
          />
        </div>

        {cs ? (
          <div className="flex flex-col max-w-6xl mx-auto px-6 md:px-0">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex flex-col justify-center py-20 overflow-hidden">
              {/* Background Graphics - Subtle */}
              <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,var(--brand-color)_0%,transparent_70%)] opacity-20" style={{ '--brand-color': brandColor } as any} />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-12" style={{ backgroundColor: brandColor }} />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40">Case Study 2026</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
                  {cs.hero.title}
                </h1>
                <p className="text-lg md:text-xl font-medium text-foreground/80 mb-6 tracking-tight leading-tight max-w-2xl">
                  {cs.hero.subtitle}
                </p>
                <p className="text-sm md:text-base text-foreground/60 max-w-xl mb-10 leading-relaxed">
                  {cs.hero.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <button 
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      className="bg-foreground text-background px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-foreground/90 transition-colors"
                    >
                      View Live Project <ExternalLink size={16} />
                    </button>
                  )}
                </div>
              </motion.div>
            </section>

            {/* Project Image Section */}
            {cs.hero.visual && (
              <section className="-mt-10 mb-20 relative z-20">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-foreground/10 relative"
                >
                  <img src={cs.hero.visual} alt={project.title} className="w-full h-full object-cover" />
                  <BorderBeam size={300} duration={20} colorFrom={brandColor} colorTo={`${brandColor}80`} />
                </motion.div>
              </section>
            )}

            <div className="w-full space-y-32">
              {/* 2. PROJECT OVERVIEW */}
              <section className="py-20">
                <SectionHeader icon={TrendingUp} title="Overview" index="01" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  <div className="lg:col-span-7">
                    <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-semibold tracking-tight">
                      {cs.overview.text}
                    </p>
                  </div>
                  <div className="lg:col-span-5">
                    <div className="p-8 rounded-3xl border border-foreground/5 bg-foreground/[0.01] backdrop-blur-sm relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/[0.02] rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-foreground/[0.05] transition-colors duration-700" />
                      <div className="space-y-8 relative z-10">
                        <div>
                          <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-foreground/30 mb-4">Role</h4>
                          <p className="text-lg font-black text-foreground">{cs.overview.role}</p>
                        </div>
                        <div>
                          <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-foreground/30 mb-4">Responsibilities</h4>
                          <ul className="space-y-3">
                            {cs.overview.responsibilities.map(r => (
                              <li key={r} className="text-foreground/70 font-bold flex items-center gap-3 text-xs">
                                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: brandColor }} /> {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. PROBLEM STATEMENT */}
              <section className="py-20">
                <SectionHeader icon={AlertCircle} title="Problem" index="02" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                  <div className="lg:col-span-6">
                    <h3 className="text-3xl md:text-4xl font-black text-foreground mb-8 tracking-tighter leading-[1.1]">
                      {project.title === "Domain Markt" 
                        ? "The domain trading process was fragmented and manual, creating friction for both buyers and sellers."
                        : "Identifying and solving core user pain points through strategic design thinking."}
                    </h3>
                  </div>
                  <div className="lg:col-span-6 space-y-4">
                    {cs.problem.points.map((p, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ x: 10 }}
                        className="flex gap-6 p-8 rounded-2xl bg-foreground/[0.02] border border-foreground/5 hover:bg-foreground/[0.04] transition-all duration-300"
                      >
                        <div className="text-xs font-black text-foreground/10 shrink-0 mt-1">0{i + 1}</div>
                        <p className="text-sm font-bold text-foreground/70 leading-relaxed">{p}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 4. USER INSIGHTS */}
              <section className="py-20">
                <SectionHeader icon={Users} title="Insights" index="03" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {cs.insights.points.map((p, i) => (
                    <div key={i} className="p-8 rounded-3xl border border-foreground/5 bg-foreground/[0.01] hover:border-foreground/10 transition-colors duration-500">
                      <div className="w-8 h-1 rounded-full mb-6" style={{ backgroundColor: brandColor }} />
                      <p className="text-base font-bold leading-relaxed text-foreground/80">{p}</p>
                    </div>
                  ))}
                </div>
                <div className="p-10 rounded-3xl bg-foreground/[0.02] border border-foreground/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 20% 50%, ${brandColor}, transparent)` }} />
                  <p className="text-[10px] uppercase tracking-[0.4em] font-black text-foreground/20 mb-6 relative z-10">Core Insight</p>
                  <p className="text-2xl md:text-4xl font-black tracking-tighter text-foreground italic relative z-10 leading-tight">"{cs.insights.highlight}"</p>
                </div>
              </section>

              {/* VISUAL HIGHLIGHTS - Project Specific Graphics */}
              {cs.visuals && (
                <section className="py-24">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cs.visuals.map((v, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-3xl bg-foreground/[0.02] border border-foreground/5 flex flex-col items-center text-center group hover:bg-foreground/[0.04] transition-all duration-500 relative overflow-hidden"
                      >
                        {/* Animated Background Element */}
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0],
                            opacity: [0.05, 0.1, 0.05]
                          }}
                          transition={{ 
                            duration: 10, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: i * 2
                          }}
                          className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl"
                          style={{ backgroundColor: brandColor }}
                        />

                        <div className="w-20 h-20 rounded-2xl bg-foreground/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-black/5 relative z-10">
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                          >
                            {React.cloneElement(v.icon as React.ReactElement<any>, { size: 32, style: { color: brandColor } })}
                          </motion.div>
                        </div>
                        <h4 className="text-lg font-bold text-foreground mb-2 relative z-10">{v.label}</h4>
                        <p className="text-sm text-foreground/50 leading-relaxed relative z-10">{v.description}</p>
                        <BorderBeam 
                          size={100} 
                          duration={10} 
                          delay={i * 2} 
                          colorFrom={brandColor} 
                          colorTo={`${brandColor}80`} 
                        />
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}

              {/* 5. CHALLENGES */}
              <section className="py-20">
                <SectionHeader icon={Target} title="Challenges" index="04" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {cs.challenges.map((c, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -5 }}
                      className="p-8 rounded-3xl border border-foreground/5 bg-foreground/[0.01] flex flex-col justify-between min-h-[180px] group hover:bg-foreground/[0.03] transition-all duration-500"
                    >
                      <CheckCircle2 size={20} className="mb-6 group-hover:scale-110 transition-transform" style={{ color: brandColor }} />
                      <p className="text-sm font-black text-foreground/70 leading-snug tracking-tight">{c}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* 6. SOLUTION APPROACH */}
              <section className="py-20">
                <SectionHeader icon={Lightbulb} title="Solution" index="05" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cs.solution.items.map((item, i) => (
                    <div key={i} className="p-10 rounded-3xl bg-foreground/[0.02] border border-foreground/5 group hover:bg-foreground/[0.04] transition-colors duration-500">
                      <h4 className="text-xl font-black text-foreground mb-4 tracking-tight" style={{ color: brandColor }}>{item.title}</h4>
                      <p className="text-sm font-bold text-foreground/50 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 7. DESIGN PROCESS */}
              <section className="py-20">
                <SectionHeader icon={Layers} title="Process" index="06" />
                <div className="flex flex-wrap items-center gap-4">
                  {cs.process.map((step, i) => (
                    <React.Fragment key={i}>
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="px-8 py-4 rounded-2xl bg-foreground/[0.02] border border-foreground/5 text-xs font-black text-foreground/60 tracking-widest uppercase"
                      >
                        {step}
                      </motion.div>
                      {i < cs.process.length - 1 && (
                        <ArrowRight size={16} className="text-foreground/10" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </section>

              {/* 8. UI SHOWCASE */}
              {cs.uiShowcase && (
                <section className="py-20">
                  <SectionHeader icon={Award} title="UI Showcase" index="07" />
                  <div className="space-y-24">
                    {cs.uiShowcase.map((item, i) => (
                      <div key={i} className="space-y-12">
                        <motion.div 
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="w-full rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-foreground/10 relative group"
                        >
                          <img src={item.image} alt={item.title} className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-1000" />
                          <BorderBeam size={400} duration={20} colorFrom={brandColor} colorTo={`${brandColor}80`} />
                        </motion.div>
                        <div className="max-w-3xl mx-auto text-center">
                          <h4 className="text-2xl font-black text-foreground mb-4 tracking-tighter">{item.title}</h4>
                          <p className="text-base font-bold text-foreground/50 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 9. IMPACT & RESULTS */}
              <section className="py-20">
                <SectionHeader icon={TrendingUp} title="Impact" index="08" />
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {cs.impact.map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.05 }}
                      className="p-10 rounded-3xl bg-foreground/[0.02] border border-foreground/5 text-center relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(to bottom right, ${brandColor}, transparent)` }} />
                      <p className="text-5xl font-black mb-3 tracking-tighter relative z-10" style={{ color: brandColor }}>{item.value}</p>
                      <p className="text-[10px] uppercase tracking-[0.3em] font-black text-foreground/30 relative z-10">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* 10. FINAL OUTCOME */}
              <section className="py-20">
                <SectionHeader icon={Award} title="Outcome" index="09" />
                <div className="max-w-4xl">
                  <div className="space-y-8">
                    {cs.outcome.map((o, i) => (
                      <p key={i} className="text-2xl md:text-4xl font-black text-foreground/90 leading-[1.1] tracking-tighter">
                        {o}
                      </p>
                    ))}
                  </div>
                </div>
              </section>

              {/* 11. KEY LEARNINGS */}
              <section className="py-20">
                <SectionHeader icon={CheckCircle2} title="Learnings" index="10" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cs.learnings.map((l, i) => (
                    <div key={i} className="flex gap-6 p-8 rounded-3xl bg-foreground/[0.02] border border-foreground/5 hover:bg-foreground/[0.04] transition-colors duration-500">
                      <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={18} style={{ color: brandColor }} />
                      </div>
                      <p className="text-base font-bold text-foreground/70 leading-relaxed">{l}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 12. CASE STUDY SHEET */}
              {cs.finalSheet && (
                <section className="py-20">
                  <SectionHeader icon={Layers} title="Case Study Sheet" index="11" />
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full rounded-[40px] overflow-hidden shadow-[0_48px_96px_-24px_rgba(0,0,0,0.4)] border border-foreground/10 relative"
                  >
                    <img src={cs.finalSheet} alt="Case Study Sheet" className="w-full h-auto object-cover" />
                    <BorderBeam size={500} duration={25} colorFrom={brandColor} colorTo={`${brandColor}80`} />
                  </motion.div>
                </section>
              )}

              {/* 13. CTA SECTION */}
              <section className="py-32 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-10 tracking-tight">
                  Let’s build something <br /> <span style={{ color: brandColor }}>impactful</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => navigate("/contact")}
                    className="bg-foreground text-background px-10 py-3 rounded-full font-bold text-sm hover:bg-foreground/90 transition-colors"
                  >
                    Contact Me
                  </button>
                  <button 
                    onClick={() => navigate("/work")}
                    className="bg-transparent text-foreground border border-foreground/10 px-10 py-3 rounded-full font-bold text-sm hover:bg-foreground/5 transition-colors"
                  >
                    View More Projects
                  </button>
                </div>
              </section>

              {/* Next Project Footer */}
              {(() => {
                const currentIndex = projects.findIndex(p => p.slug === project.slug);
                const nextProject = projects[(currentIndex + 1) % projects.length];
                return (
                  <section 
                    onClick={() => navigate(`/work/${nextProject.slug}`)}
                    className="py-16 border-t border-foreground/5 cursor-pointer group relative overflow-hidden rounded-2xl mb-20"
                  >
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/[0.01] transition-colors duration-500" />
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-foreground/20 mb-4 group-hover:text-foreground/40 transition-colors">Next Project</span>
                      <h3 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight group-hover:scale-105 transition-transform duration-500">
                        {nextProject.title}
                      </h3>
                      <div className="mt-6 w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-500">
                        <ArrowRight size={16} className="group-hover:text-background transition-colors" />
                      </div>
                    </div>
                  </section>
                );
              })()}
            </div>
          </div>
        ) : (
          <div className="p-20 text-center min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-6xl font-black mb-10 tracking-tighter">{project.title}</h2>
            <p className="text-2xl text-foreground/40 mb-16 font-medium">Case study coming soon...</p>
            <button
              onClick={() => navigate("/work")}
              className="px-12 py-6 rounded-full font-black text-xl"
              style={{ backgroundColor: brandColor }}
            >
              Back to Projects
            </button>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
