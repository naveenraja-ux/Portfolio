import React from "react";
import { motion } from "motion/react";
import { Layout, Sparkles, MousePointer2, Layers, Smartphone, CheckCircle2, Figma, Palette, Zap, Target, Users, Terminal, Globe, Search, BarChart3, Component } from "lucide-react";
import { GlassCard, PageTransition, Badge } from "@/components/Common";
import { cn } from "@/lib/utils";
import { useMotionValue, useSpring, useTransform } from "motion/react";

// --- Skill Graphics Components ---

const UIUXGraphic = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
    <motion.div 
      animate={{ 
        y: [0, -10, 0],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 left-10 w-24 h-16 border border-indigo-500/30 rounded-lg"
    />
    <motion.div 
      animate={{ 
        y: [0, 10, 0],
        opacity: [0.2, 0.5, 0.2]
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-10 right-10 w-20 h-20 border border-blue-500/30 rounded-full"
    />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
  </div>
);

const VisualGraphic = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
        className={cn(
          "absolute rounded-full blur-2xl",
          i === 0 ? "top-0 left-0 w-32 h-32 bg-purple-500" :
          i === 1 ? "bottom-0 right-0 w-40 h-40 bg-pink-500" :
          "top-1/2 left-1/2 w-24 h-24 bg-indigo-500"
        )}
      />
    ))}
  </div>
);

const InteractionGraphic = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
    <motion.div
      animate={{
        x: ["10%", "90%", "10%"],
        y: ["20%", "80%", "20%"],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="w-4 h-4 bg-amber-500 rounded-full blur-sm"
    />
    <motion.div
      animate={{
        x: ["80%", "20%", "80%"],
        y: ["70%", "30%", "70%"],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="w-6 h-6 bg-orange-500 rounded-full blur-md"
    />
  </div>
);

const DesignSystemGraphic = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none p-6">
    <div className="grid grid-cols-4 gap-2 h-full">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scale: [0.9, 1, 0.9]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
          className="bg-emerald-500/20 rounded-md border border-emerald-500/10"
        />
      ))}
    </div>
  </div>
);

const StrategyGraphic = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
    <svg className="w-full h-full" viewBox="0 0 200 200">
      <motion.path
        d="M 20 150 Q 60 50 100 120 T 180 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-rose-500"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="180" cy="40" r="5"
        fill="currentColor"
        className="text-rose-500"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  </div>
);

const ResearchGraphic = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
        className="absolute w-2 h-2 bg-cyan-500 rounded-full"
        style={{
          top: `${20 + Math.random() * 60}%`,
          left: `${20 + Math.random() * 60}%`,
        }}
      />
    ))}
    <svg className="w-full h-full absolute inset-0">
      <line x1="20%" y1="20%" x2="80%" y2="80%" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500/30" />
      <line x1="80%" y1="20%" x2="20%" y2="80%" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500/30" />
    </svg>
  </div>
);

const expertise = [
  { 
    title: "UI/UX Design", 
    icon: <Layout size={24} />, 
    desc: "Designing intuitive, user-friendly interfaces with focus on clarity and accessibility.",
    color: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
    graphic: <UIUXGraphic />
  },
  { 
    title: "Visual Design", 
    icon: <Palette size={24} />, 
    desc: "Crafting clean, modern visuals using typography, color theory, and visual hierarchy.",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
    graphic: <VisualGraphic />
  },
  { 
    title: "Interaction Design", 
    icon: <Zap size={24} />, 
    desc: "Creating smooth, engaging user interactions and micro-animations that delight users.",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
    graphic: <InteractionGraphic />
  },
  { 
    title: "Design Systems", 
    icon: <Layers size={24} />, 
    desc: "Building consistent, scalable components and patterns for seamless product growth.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
    graphic: <DesignSystemGraphic />
  },
  { 
    title: "Product Strategy", 
    icon: <Target size={24} />, 
    desc: "Aligning user needs with business goals to create impactful digital solutions.",
    color: "from-rose-500/20 to-red-500/20",
    iconColor: "text-rose-400",
    graphic: <StrategyGraphic />
  },
  { 
    title: "User Research", 
    icon: <Users size={24} />, 
    desc: "Gathering deep insights to validate assumptions and refine the user experience.",
    color: "from-cyan-500/20 to-sky-500/20",
    iconColor: "text-cyan-400",
    graphic: <ResearchGraphic />
  }
];

const tools = [
  { name: "Figma", logo: "https://southern-apricot-n5c9yizh2f.edgeone.app/figma.png" },
  { name: "Canva", logo: "https://shaggy-moccasin-idnqm9cb2n.edgeone.app/canva.png" },
  { name: "Framer", logo: "https://traditional-red-7kwygtop43.edgeone.app/Framer.png" },
  { name: "Notion", logo: "https://curious-teal-i642un90n6.edgeone.app/notion.png" },
  { name: "Lightroom", logo: "https://limited-moccasin-omij83lg4w.edgeone.app/lr.png" },
  { name: "Miro", logo: "https://uneven-black-pz2kkvyr0i.edgeone.app/miro.png" },
  { name: "Balsamiq", logo: "https://medical-yellow-toefnvwvin.edgeone.app/bal.png" },
  { name: "Wix Studio", logo: "https://slimy-black-bvn6xn6ykn.edgeone.app/wix.png" },
  { name: "CorelDraw", logo: "https://dear-copper-l5udx6absq.edgeone.app/coreldraw.png" }
];

const ToolItem = ({ tool }: { tool: typeof tools[0] }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const scale = useMotionValue(1);
  const grayscale = useMotionValue(100);
  const y = useMotionValue(0);
  
  const springScale = useSpring(scale, { stiffness: 100, damping: 20 });
  const springGrayscale = useSpring(grayscale, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });
  
  const grayscaleFilter = useTransform(springGrayscale, (v) => `grayscale(${v}%)`);
  const textOpacity = useTransform(springGrayscale, [0, 100], [1, 0.3]);

  React.useEffect(() => {
    let animId: number;
    const update = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const itemCenterX = rect.left + rect.width / 2;
      const distance = Math.abs(centerX - itemCenterX);
      
      const threshold = 300;
      const progress = Math.max(0, 1 - distance / threshold);
      
      scale.set(1 + progress * 0.4);
      grayscale.set(100 - progress * 100);
      y.set(progress * -15);
      
      animId = requestAnimationFrame(update);
    };
    
    animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, [scale, grayscale, y]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-6 py-12 px-6">
      <motion.div 
        style={{ 
          scale: springScale, 
          filter: grayscaleFilter,
          y: springY
        }}
        className="w-24 h-24 rounded-[2rem] bg-foreground/[0.03] border border-foreground/10 flex items-center justify-center p-5 shadow-2xl shadow-black/10 backdrop-blur-md relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity" />
        <img 
          src={tool.logo} 
          alt={tool.name} 
          className="w-full h-full object-contain relative z-10" 
          referrerPolicy="no-referrer" 
        />
      </motion.div>
      <motion.span 
        style={{ opacity: textOpacity, y: springY }}
        className="text-[11px] font-black uppercase tracking-[0.3em] text-foreground/60"
      >
        {tool.name}
      </motion.span>
    </div>
  );
};

export function Skills() {
  return (
    <PageTransition showGrid={true}>
      <div className="relative min-h-screen w-full px-6 md:px-[100px] pt-32 overflow-hidden pb-24">
        <div className="py-8 md:py-12 relative z-10">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-start"
            >
              <Badge className="mb-4 bg-indigo-500/10 text-indigo-400 border-indigo-500/20">Capabilities</Badge>
              <h1 className="text-5xl md:text-7xl font-black text-gradient mb-6 tracking-tighter">
                My Expertise
              </h1>
              <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed font-medium">
                I specialize in the end-to-end design process, transforming complex requirements into polished, user-centered interfaces.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {expertise.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassCard className="group h-full p-8 border-border/50 hover:border-indigo-500/30 transition-all duration-500 relative overflow-hidden">
                  {/* Background Graphic */}
                  {skill.graphic}

                  {/* Background Glow */}
                  <div className={cn(
                    "absolute -right-10 -top-10 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br",
                    skill.color
                  )} />
                  
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-background/50 border border-border group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg relative z-10",
                    skill.iconColor
                  )}>
                    {skill.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-indigo-400 transition-colors relative z-10">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium relative z-10">
                    {skill.desc}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-32">
            <h2 className="text-xs uppercase tracking-[0.5em] font-black text-foreground/20 mb-16 text-center">Design Arsenal</h2>
            <div className="relative w-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-60 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-60 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />
              
              <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="flex gap-20 w-max items-center"
              >
                {[...tools, ...tools, ...tools].map((tool, idx) => (
                  <ToolItem key={idx} tool={tool} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
