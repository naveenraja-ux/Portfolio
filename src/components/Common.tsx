import React, { ReactNode, Key } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  key?: Key;
}

export const GlassCard = ({ children, className = "" }: GlassCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`glass-card p-6 ${className}`}
  >
    {children}
  </motion.div>
);

interface BadgeProps {
  children: ReactNode;
  className?: string;
  key?: Key;
}

export const Badge = ({ children, className = "" }: BadgeProps) => (
  <span className={`px-3 py-1 text-xs font-medium rounded-full glass border border-border text-muted-foreground ${className}`}>
    {children}
  </span>
);

export const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-gradient mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export const GridBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div
      className={cn(
        "absolute inset-0",
        "[background-size:40px_40px]",
        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
      )}
    />
    <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
  </div>
);

export const PageTransition = ({ children, showGrid = false }: { children: ReactNode, showGrid?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="w-full relative min-h-screen"
  >
    {showGrid && <GridBackground />}
    <div className="relative z-10 w-full">
      {children}
    </div>
  </motion.div>
);

export const Behance = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.268 14.584h-6.193c.209 1.824 1.812 2.135 3.101 2.135 1.482 0 2.661-.412 2.661-.412l.344 2.545s-1.515.791-4.16.791c-4.826 0-5.464-3.51-5.464-5.603 0-3.058 1.312-5.775 5.158-5.775 4.816 0 4.553 4.414 4.553 6.319zm-6.149-2.327h2.983c0-2.106-1.352-2.027-1.482-2.027-1.473 0-1.501 2.027-1.501 2.027zm-10.403-3.364h-3.996v10.111h4.052c5.154 0 5.202-4.619 5.202-5.036 0-1.936-1.364-5.075-5.258-5.075zm-3.996 3.72h3.267c1.531 0 1.5 2.704 0 2.704h-3.267v-2.704zm10.37-5.056h5.895v1.456h-5.895v-1.456z"/>
  </svg>
);
