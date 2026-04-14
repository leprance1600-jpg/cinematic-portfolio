"use client";

import { useTransform, motion, MotionValue } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // STRICT SEQUENCING FOR SMOOTH CINEMATIC FLOW:
  // Starts blank. No instant appearance.
  
  // Section 1: Fades in (0.05 - 0.15), stays (0.15 - 0.25), fades out (0.25 - 0.3)
  const opacity1 = useTransform(scrollYProgress, [0.05, 0.15, 0.25, 0.30], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.05, 0.20], [30, 0]);

  // Pause / Breathing room: 0.30 -> 0.35

  // Section 2: Fades in (0.35 - 0.45), stays (0.45 - 0.60), fades out (0.60 - 0.65)
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.45, 0.60, 0.65], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.50], [30, 0]);

  // Pause / Breathing room: 0.65 -> 0.70

  // Section 3: Fades in (0.70 - 0.75), stays (0.75 - 0.90), fades out (0.90 - 0.95)
  const opacity3 = useTransform(scrollYProgress, [0.70, 0.75, 0.90, 0.95], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.70, 0.85], [30, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center max-w-7xl mx-auto px-6">

      {/* SECTION 1: Center */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl">
          I'm Abdou
        </h1>
        <p className="mt-5 text-lg md:text-2xl text-white/80 font-light tracking-wide drop-shadow-lg max-w-lg mx-auto leading-relaxed">
          Créateur de contenu digital & passionné par la technologie
        </p>
      </motion.div>

      {/* SECTION 2: Center on Mobile, Left on Desktop */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex flex-col items-center text-center md:inset-x-auto md:left-12 lg:left-24 md:items-start md:text-left"
      >
        <h2 className="text-[2rem] leading-tight md:text-5xl lg:text-6xl font-bold text-white max-w-sm md:max-w-lg drop-shadow-xl">
          Montage vidéo | Design | Réseaux sociaux | IA
        </h2>
      </motion.div>

      {/* SECTION 3: Center on Mobile, Right on Desktop */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-x-4 top-[50%] md:top-1/2 -translate-y-1/2 flex flex-col items-center text-center md:inset-x-auto md:right-12 lg:right-24 md:items-end md:text-right"
      >
        <h2 className="text-[2rem] leading-tight md:text-5xl lg:text-6xl font-bold text-white max-w-sm md:max-w-lg drop-shadow-xl">
          Je transforme des idées simples en contenu visuel attractif et moderne.
        </h2>
      </motion.div>

    </div>
  );
}
