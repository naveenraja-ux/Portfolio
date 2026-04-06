import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { PageTransition } from "@/components/Common";
import { projects } from "@/data/projects";
import { CometCard } from "@/components/ui/comet-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";

export function Work() {
  const navigate = useNavigate();

  return (
    <PageTransition showGrid={true}>
      <div className="relative min-h-screen flex flex-col justify-start pt-32 pb-4 px-6 md:px-[100px] overflow-hidden antialiased">
        <div className="relative z-10 mb-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-foreground tracking-tighter mb-2"
          >
            Selected <span className="text-indigo-500">Work</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-base font-medium px-4"
          >
            Strategic design solutions across healthcare, fintech, and social platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
          {projects.slice(0, 6).map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => navigate(`/work/${project.slug}`)}
              className="flex justify-center w-full"
            >
              <CometCard className="w-full max-w-[400px] sm:max-w-none">
                <button
                  type="button"
                  className="flex w-full cursor-pointer flex-col items-stretch rounded-[20px] border border-border bg-card p-2.5 transition-all duration-500 hover:bg-accent/10"
                  aria-label={`View ${project.title}`}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="flex-1">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[16px]">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay z-10`} />
                      {project.image ? (
                        <img
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                          alt={project.title}
                          src={project.image}
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-foreground/5">
                          <span className="text-[10px] font-black uppercase tracking-widest text-foreground/20 italic">Visuals Coming Soon</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 flex flex-shrink-0 items-center justify-between px-1 pb-1 font-mono text-foreground">
                    <div className="flex flex-col">
                      <span className="text-xs font-black tracking-tight">{project.title}</span>
                      <span className="text-[9px] text-muted-foreground uppercase tracking-widest mt-0.5">{project.type}</span>
                    </div>
                    <div className="text-[9px] text-indigo-500 font-bold bg-indigo-500/10 px-2 py-0.5 rounded-md">
                      {project.category}
                    </div>
                  </div>
                  <BorderBeam 
                    size={150} 
                    duration={12} 
                    delay={idx * 2} 
                    colorFrom={project.brandColor || "#6366f1"}
                    colorTo={project.brandColor ? `${project.brandColor}80` : "#9333ea"}
                  />
                </button>
              </CometCard>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
