"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  color = "#6366f1",
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
    color?: string;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = useCallback(
    (currentDirection: Direction): Direction => {
      const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
      const currentIndex = directions.indexOf(currentDirection);
      const nextIndex = clockwise
        ? (currentIndex - 1 + directions.length) % directions.length
        : (currentIndex + 1) % directions.length;
      return directions[nextIndex];
    },
    [clockwise]
  );

  const mapDirectionToGradient = (dir: Direction) => {
    const gradients = {
      TOP: `radial-gradient(20.7% 50% at 50% 0%, ${color} 0%, rgba(99, 102, 241, 0) 100%)`,
      LEFT: `radial-gradient(16.6% 43.1% at 0% 50%, ${color} 0%, rgba(99, 102, 241, 0) 100%)`,
      BOTTOM: `radial-gradient(20.7% 50% at 50% 100%, ${color} 0%, rgba(99, 102, 241, 0) 100%)`,
      RIGHT: `radial-gradient(16.2% 41.2% at 100% 50%, ${color} 0%, rgba(99, 102, 241, 0) 100%)`,
    };
    return gradients[dir];
  };

  const highlight = `radial-gradient(75% 181.15942028985506% at 50% 50%, ${color} 0%, rgba(255, 255, 255, 0) 100%)`;

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, rotateDirection]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex w-fit content-center bg-background/20 hover:bg-background/10 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone rounded-full",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-foreground z-10 bg-background px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: mapDirectionToGradient(direction) }}
        animate={{
          background: hovered
            ? [highlight, mapDirectionToGradient(direction)]
            : mapDirectionToGradient(direction),
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="bg-background absolute inset-[2px] flex-none z-0 rounded-[inherit]" />
    </Tag>
  );
}
