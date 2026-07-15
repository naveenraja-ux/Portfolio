import React from "react";
import { motion } from "motion/react";

export const Avatar3D: React.FC = () => {
  // Eye state loops for lifelike interaction: blinking and looking down/up
  const [blink, setBlink] = React.useState(false);
  const [lookAtLaptop, setLookAtLaptop] = React.useState(false);

  React.useEffect(() => {
    // Standard human blinking cycle: quick blink every 3 to 4.5 seconds
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 140);
    }, 3600);

    // Realistic work pattern: look down at the laptop screen for a few seconds,
    // then look up to connect with the user, then look down again.
    const lookInterval = setInterval(() => {
      setLookAtLaptop(prev => !prev);
    }, 4500);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(lookInterval);
    };
  }, []);

  return (
    <div className="relative w-[230px] h-[230px] sm:w-[260px] h-[260px] md:w-[320px] md:h-[320px] flex items-center justify-center select-none">
      
      {/* 3D Realistic Radial Light Blooming & Ambient Purple Glow Layers */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Deep Ambient Aura */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.45, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full bg-[#54268F] blur-[55px] opacity-30 mix-blend-screen"
        />
        {/* Dynamic Accent Rim Glow */}
        <motion.div
          animate={{
            scale: [1.1, 0.93, 1.1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute w-[260px] h-[260px] md:w-[350px] md:h-[350px] rounded-full bg-[#0C8BE8] blur-[70px] opacity-25 mix-blend-screen"
        />
        {/* Hot center spot */}
        <div className="absolute w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full bg-purple-600/15 blur-[35px]" />
      </div>

      {/* 3D Floating container representing high-end illustration aesthetics */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-[0_15px_40px_rgba(17,7,31,0.6)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Realistic 3D Skin Gradient: Multi-directional radial lighting mapping depth */}
            <radialGradient id="realisticSkin" cx="48%" cy="38%" r="62%" fx="42%" fy="26%">
              <stop offset="0%" stopColor="#FFF4ED" />
              <stop offset="45%" stopColor="#FFE1D3" />
              <stop offset="82%" stopColor="#FABFA5" />
              <stop offset="100%" stopColor="#E09F81" />
            </radialGradient>

            {/* Specular highlights on forehead and nose representing studio photography */}
            <radialGradient id="foreheadHighlight" cx="50%" cy="30%" r="40%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>

            {/* Natural 3D Cheek shading and volume */}
            <radialGradient id="cheekGlowL" cx="35%" cy="50%" r="40%">
              <stop offset="0%" stopColor="#FFA6A6" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFA6A6" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="cheekGlowR" cx="65%" cy="50%" r="40%">
              <stop offset="0%" stopColor="#FFA6A6" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFA6A6" stopOpacity="0" />
            </radialGradient>

            {/* Volumetric Ear Gradients with ambient occlusion */}
            <radialGradient id="earLGrad" cx="65%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFE1D3" />
              <stop offset="70%" stopColor="#FABFA5" />
              <stop offset="100%" stopColor="#C48467" />
            </radialGradient>
            <radialGradient id="earRGrad" cx="35%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFE1D3" />
              <stop offset="70%" stopColor="#FABFA5" />
              <stop offset="100%" stopColor="#C48467" />
            </radialGradient>

            {/* Stunning Pixar-style deep brown 3D Iris with multiple depth levels */}
            <radialGradient id="iris3D" cx="42%" cy="40%" r="52%">
              <stop offset="0%" stopColor="#A36B4D" />
              <stop offset="35%" stopColor="#784C32" />
              <stop offset="75%" stopColor="#4A2D1B" />
              <stop offset="100%" stopColor="#1E1008" />
            </radialGradient>

            {/* Eye whites with subtle 3D round shadow */}
            <radialGradient id="eyeSclera" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="85%" stopColor="#E8EFF2" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </radialGradient>

            {/* Glossy Hair Gradients (Thick Modern Volumetric Hair styling) */}
            <linearGradient id="hairBase" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2D2D30" />
              <stop offset="50%" stopColor="#18181A" />
              <stop offset="100%" stopColor="#08080A" />
            </linearGradient>
            <linearGradient id="hairSheen1" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#4F4F54" />
              <stop offset="30%" stopColor="#2E2E33" />
              <stop offset="100%" stopColor="#0F0F10" />
            </linearGradient>
            <linearGradient id="hairSheen2" x1="100%" y1="10%" x2="0%" y2="90%">
              <stop offset="0%" stopColor="#3E3E42" />
              <stop offset="60%" stopColor="#1C1C1E" />
              <stop offset="100%" stopColor="#040405" />
            </linearGradient>

            {/* Premium Metallic Aluminum Laptop Gradients (MacBook style silver) */}
            <linearGradient id="macbookMetal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="30%" stopColor="#E2E8F0" />
              <stop offset="70%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            <linearGradient id="macbookChamfer" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            <linearGradient id="macbookScreenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0C8BE8" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#54268F" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8D71FF" stopOpacity="0.5" />
            </linearGradient>

            {/* Apple Logo Glow & Specular */}
            <radialGradient id="appleGlowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </radialGradient>

            {/* Drop Shadows */}
            <filter id="ultraShadow" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="0" dy="12" stdDeviation="8" floodColor="#000000" floodOpacity="0.35" />
            </filter>
            <filter id="macbookShadow" x="-25%" y="-15%" width="150%" height="140%">
              <feDropShadow dx="0" dy="16" stdDeviation="12" floodColor="#080312" floodOpacity="0.65" />
            </filter>
            <filter id="appleLogoGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComponentTransfer in="blur" result="boost">
                <feFuncA type="linear" slope="2.5" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode in="boost" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Apple Logo Bite Mask - cuts a chunk from the right side of the Apple body */}
            <mask id="appleBite">
              <rect x="150" y="230" width="100" height="100" fill="#FFFFFF" />
              {/* The circular bite cut-out */}
              <circle cx="216" cy="272" r="7.5" fill="#000000" />
            </mask>
          </defs>

          {/* LAYER 1: 3D Volumetric Ears & Back Hair */}
          <g>
            {/* Left Ear Backing & Inner Contour */}
            <g transform="translate(112, 185)">
              <circle cx="0" cy="0" r="17" fill="url(#earLGrad)" />
              <circle cx="2" cy="0" r="10" fill="#C48467" opacity="0.5" />
              <path d="M-4 -6 C0 -10, 6 -6, 2 0" stroke="#935B42" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
            </g>
            
            {/* Right Ear Backing & Inner Contour */}
            <g transform="translate(288, 185)">
              <circle cx="0" cy="0" r="17" fill="url(#earRGrad)" />
              <circle cx="-2" cy="0" r="10" fill="#C48467" opacity="0.5" />
              <path d="M4 -6 C0 -10, -6 -6, -2 0" stroke="#935B42" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
            </g>

            {/* Base Back Hair Volumetric Layer */}
            <path
              d="M106 182 C 102 125, 132 60, 200 60 C 268 60, 298 125, 294 182 C 282 182, 276 188, 276 166 C 276 122, 254 82, 200 82 C 146 82, 124 122, 124 166 C 124 188, 118 182, 106 182 Z"
              fill="url(#hairBase)"
            />
          </g>

          {/* LAYER 2: Head & Skin Base with highlights */}
          <g>
            {/* 3D Soft-rendered Face */}
            <path
              d="M125 150 C 125 105, 275 105, 275 150 C 275 205, 275 238, 200 238 C 125 238, 125 205, 125 150 Z"
              fill="url(#realisticSkin)"
            />
            {/* Forehead Ambient Glow / Volumetric Light */}
            <path
              d="M135 145 C 135 110, 265 110, 265 145 C 265 160, 240 170, 200 170 C 160 170, 135 160, 135 145 Z"
              fill="url(#foreheadHighlight)"
              pointerEvents="none"
            />
          </g>

          {/* LAYER 3: Animated 3D Eyes (Blinking & Tracking Laptop Screen) */}
          {/* Eyes group: standard scaling during blink */}
          <g filter="url(#ultraShadow)">
            
            {/* LEFT EYE ASSEMBLY */}
            <g transform="translate(162, 153)">
              {/* Eyelid Mask or animated scale for blinked eye */}
              <motion.g
                animate={{ scaleY: blink ? 0.08 : 1 }}
                transition={{ duration: 0.12, ease: "easeInOut" }}
              >
                {/* Sclera / Eye White */}
                <ellipse cx="0" cy="0" rx="17" ry="20" fill="url(#eyeSclera)" />
                
                {/* Pupil + Iris Group tracking LookDirection */}
                <motion.g
                  animate={{
                    y: lookAtLaptop ? 4.5 : -1.5,
                    x: lookAtLaptop ? 0.8 : -0.5,
                  }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                >
                  {/* Iris */}
                  <circle cx="0" cy="0" r="11.5" fill="url(#iris3D)" />
                  {/* Core Black Pupil */}
                  <circle cx="0" cy="0" r="7" fill="#0A0604" />
                  
                  {/* 3D Specular Highlights representing glossy glass spheres */}
                  <circle cx="-3.5" cy="-4" r="3.2" fill="#FFFFFF" />
                  <circle cx="3" cy="3.5" r="1.5" fill="#FFFFFF" opacity="0.8" />
                </motion.g>
              </motion.g>
            </g>

            {/* RIGHT EYE ASSEMBLY */}
            <g transform="translate(238, 153)">
              <motion.g
                animate={{ scaleY: blink ? 0.08 : 1 }}
                transition={{ duration: 0.12, ease: "easeInOut" }}
              >
                {/* Sclera / Eye White */}
                <ellipse cx="0" cy="0" rx="17" ry="20" fill="url(#eyeSclera)" />
                
                {/* Pupil + Iris Group tracking LookDirection */}
                <motion.g
                  animate={{
                    y: lookAtLaptop ? 4.5 : -1.5,
                    x: lookAtLaptop ? -0.8 : 0.5,
                  }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                >
                  {/* Iris */}
                  <circle cx="0" cy="0" r="11.5" fill="url(#iris3D)" />
                  {/* Core Black Pupil */}
                  <circle cx="0" cy="0" r="7" fill="#0A0604" />
                  
                  {/* Specular Highlights */}
                  <circle cx="-3.5" cy="-4" r="3.2" fill="#FFFFFF" />
                  <circle cx="3" cy="3.5" r="1.5" fill="#FFFFFF" opacity="0.8" />
                </motion.g>
              </motion.g>
            </g>
          </g>

          {/* LAYER 4: Eyebrows, Cute Nose, 3D Cheeks, Friendly Smile */}
          <g>
            {/* Left Eyebrow with motion matching look direction */}
            <motion.path
              animate={{ y: lookAtLaptop ? 1.5 : -1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              d="M138 127 C 146 121, 166 122, 178 131 C 172 126, 150 125, 142 129 Z"
              fill="#1A1A1C"
            />
            {/* Right Eyebrow */}
            <motion.path
              animate={{ y: lookAtLaptop ? 1.5 : -1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              d="M262 127 C 254 121, 234 122, 222 131 C 228 126, 250 125, 258 129 Z"
              fill="#1A1A1C"
            />

            {/* Cheeks blush with 3D depth */}
            <circle cx="145" cy="176" r="13" fill="url(#cheekGlowL)" />
            <circle cx="255" cy="176" r="13" fill="url(#cheekGlowR)" />

            {/* Realistic cute 3D-shaded nose */}
            <path
              d="M194 167 C 194 162, 206 162, 206 167 C 206 172, 194 172, 194 167 Z"
              fill="#EC9C7B"
              opacity="0.9"
            />
            <path
              d="M197 166 C 197 164, 203 164, 203 166 C 203 168, 197 168, 197 166 Z"
              fill="#FFF2EC"
              opacity="0.4"
            />

            {/* Friendly, smiling mouth peeking slightly behind laptop bezel */}
            <path
              d="M184 189 C 184 189, 200 203, 216 189"
              stroke="#B35234"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* LAYER 5: Sweeping Modern 3D Hairstyle (Polished volume overlays) */}
          <g filter="url(#ultraShadow)">
            {/* Main Sweep Left */}
            <path
              d="M110 142 C 105 95, 135 45, 205 45 C 275 45, 295 90, 290 132 C 270 82, 218 75, 184 92 C 150 108, 126 122, 110 142 Z"
              fill="url(#hairSheen1)"
            />
            {/* Overlapping Strands for Realistic 3D Depth */}
            <path
              d="M140 76 C 168 62, 218 62, 245 82 C 212 72, 172 72, 146 87 Z"
              fill="url(#hairSheen2)"
              opacity="0.85"
            />
            <path
              d="M230 55 C 252 70, 272 100, 278 126 C 262 96, 246 80, 230 60 Z"
              fill="url(#hairBase)"
              opacity="0.95"
            />
          </g>

          {/* LAYER 6: Realistic MacBook-Style Silver Laptop facing the viewer */}
          <g filter="url(#macbookShadow)">
            
            {/* The Screen Display Back Panel (Silver metallic, rounded edges) */}
            <path
              d="M85 220 C 85 210, 95 202, 108 202 H 292 C 305 202, 315 210, 315 220 V 314 C 315 318, 308 322, 298 322 H 102 C 92 322, 85 318, 85 314 Z"
              fill="url(#macbookMetal)"
              stroke="url(#macbookChamfer)"
              strokeWidth="2.5"
            />

            {/* Glowing Screen back-edge spill representing light from display panel */}
            <path
              d="M96 207 H 304 V 210 H 96 Z"
              fill="#38BDF8"
              opacity="0.75"
              filter="url(#ultraShadow)"
            />

            {/* Apple Logo Group (Polished Apple shape with realistic leaf & biting mask) */}
            <g filter="url(#appleLogoGlow)">
              {/* Ambient backlight glow underneath the Apple */}
              <ellipse cx="200" cy="272" rx="26" ry="26" fill="#38BDF8" opacity="0.3" />
              <ellipse cx="200" cy="272" rx="16" ry="16" fill="#FFFFFF" opacity="0.45" />

              {/* Precise Apple Leaf */}
              <path 
                d="M199.5 251.5 C202.8 246.8 207.2 244.5 211.5 244.8 C211.0 249.2 207.2 253.8 202.8 255.2 C201.7 255.5 200.6 254.3 199.5 251.5 Z" 
                fill="url(#appleGlowGrad)" 
              />
              {/* Apple Body with Bite Mask applied */}
              <path 
                d="M191.0 254.5 C177.0 254.5 167.0 265.5 167.0 283.5 C167.0 304.5 181.0 317.0 194.5 317.0 C199.0 317.0 201.5 314.0 205.5 314.0 C209.5 314.0 212.0 317.0 216.5 317.0 C230.0 317.0 244.0 304.5 244.0 283.5 C244.0 265.5 234.0 254.5 220.0 254.5 C213.2 254.5 208.8 258.5 205.5 258.5 C202.2 258.5 197.8 254.5 191.0 254.5 Z" 
                fill="url(#appleGlowGrad)" 
                mask="url(#appleBite)" 
              />
            </g>

            {/* Chamfered Laptop keyboard tray / lower body hinge projection */}
            <path
              d="M87 312 L 72 327 C 72 331, 90 335, 112 335 H 288 C 310 335, 328 331, 328 327 L 313 312 Z"
              fill="url(#macbookMetal)"
              stroke="#94A3B8"
              strokeWidth="1"
            />
            {/* Dark keyboard recess representing actual display lid hinge assembly */}
            <path
              d="M102 312 H 298 V 315 H 102 Z"
              fill="#1E293B"
            />
          </g>
        </svg>

        {/* Small floating tag representing the designer tool stack (Figma, perfectly styled) */}
        <motion.div
          animate={{
            x: [0, 6, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[26%] left-[6%] bg-white/10 backdrop-blur-md text-[#38BDF8] text-[10px] font-mono font-bold px-2.5 py-1 rounded-md shadow-md border border-[#0C8BE8]/30 select-none pointer-events-none"
        >
          Figma
        </motion.div>
      </motion.div>
    </div>
  );
};
