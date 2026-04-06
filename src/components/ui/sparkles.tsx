"use client";
import React, { useId } from "react";
import { useEffect, useRef, useState } from "react";
import { useMousePosition } from "@/lib/hooks/use-mouse-position";
import { cn } from "@/lib/utils";

interface SparklesProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
  speed?: number;
}

export const SparklesCore = (props: SparklesProps) => {
  const {
    id,
    background = "transparent",
    minSize = 0.6,
    maxSize = 1.4,
    particleDensity = 100,
    className,
    particleColor = "#FFFFFF",
    speed = 1,
  } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useMousePosition();
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const particles = useRef<any[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const generatedId = useId();

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      setContext(ctx);
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const resizeCanvas = () => {
    if (canvasRef.current && canvasRef.current.parentElement) {
      canvasRef.current.width = canvasRef.current.parentElement.clientWidth;
      canvasRef.current.height = canvasRef.current.parentElement.clientHeight;
      initParticles();
    }
  };

  const initParticles = () => {
    if (!canvasRef.current) return;
    const { width, height } = canvasRef.current;
    const particleCount = (width * height) / 10000 * (particleDensity / 100);
    particles.current = [];
    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        opacity: Math.random(),
      });
    }
  };

  const drawParticles = () => {
    if (!context || !canvasRef.current) return;
    const { width, height } = canvasRef.current;
    context.clearRect(0, 0, width, height);
    context.fillStyle = particleColor;

    particles.current.forEach((particle) => {
      context.globalAlpha = particle.opacity;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.random() * Math.PI * 2);
      context.fill();

      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0) particle.x = width;
      if (particle.x > width) particle.x = 0;
      if (particle.y < 0) particle.y = height;
      if (particle.y > height) particle.y = 0;
    });

    animationFrameId.current = requestAnimationFrame(drawParticles);
  };

  useEffect(() => {
    if (context) {
      drawParticles();
    }
  }, [context]);

  return (
    <canvas
      ref={canvasRef}
      id={id || generatedId}
      className={cn("h-full w-full", className)}
      style={{
        background,
      }}
    />
  );
};
