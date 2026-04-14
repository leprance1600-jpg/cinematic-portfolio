"use client";

import { useEffect, useState, useRef } from "react";
import { useTransform, MotionValue } from "framer-motion";

const TOTAL_FRAMES = 41; // frame_00 to frame_40

const getFrameName = (index: number) => {
  const paddedIndex = index.toString().padStart(2, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.067s.png`;
};

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

export default function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameName(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImages(loadedImages);
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use dimensions of the first image to set canvas resolution
    canvas.width = images[0].naturalWidth || 1920;
    canvas.height = images[0].naturalHeight || 1080;

    const render = (index: number) => {
      if (images[index]) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);
      }
    };

    // Initial render
    render(0);

    const unsubscribe = frameIndex.on("change", (latest) => {
      render(Math.round(latest));
    });

    return () => unsubscribe();
  }, [imagesLoaded, frameIndex, images]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-0"
        style={{ opacity: imagesLoaded ? 1 : 0 }}
      />
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <span className="text-sm uppercase tracking-widest text-white/50 animate-pulse">Loading Experience...</span>
        </div>
      )}
    </>
  );
}
