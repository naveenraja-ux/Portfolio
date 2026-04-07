import React, { useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { 
  Linkedin, 
  Mail
} from "lucide-react";
import { Header } from "@/components/Header";
import { Behance } from "@/components/Common";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Experience } from "./pages/Experience";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-indigo-500/30">
      {/* Global Grid Background */}
      <div className="fixed inset-0 z-[-1] bg-background">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 accent-gradient origin-left z-50"
        style={{ scaleX }}
      />

      {/* Header */}
      <Header />

      <main className="w-full relative">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:projectId" element={<ProjectDetail />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 md:px-[100px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-muted-foreground/60 text-sm">
            © 2026 Naveen Raja S. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-muted-foreground/60 hover:text-foreground text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground/60 hover:text-foreground text-sm transition-colors">Terms of Service</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/naveen-raja-s-80282023a/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={18} /></a>
              <a href="https://www.behance.net/naveenraja12" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Behance size={18} /></a>
              <a href="mailto:naveenraja1297@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors"><Mail size={18} /></a>
            </div>
            <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for new projects
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
