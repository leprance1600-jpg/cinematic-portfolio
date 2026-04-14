"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Single source of truth for the entire 500vh hero section sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="h-[500vh] relative w-full bg-[#121212]">
      {/* Sticky wrapper pinning the canvas and text to the screen while scrolling the 500vh */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <ScrollyCanvas scrollYProgress={scrollYProgress} />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
