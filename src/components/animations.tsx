"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function AnimatedButton({
  children,
  className = "",
  onClick,
  disabled = false,
}: AnimatedButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </motion.button>
  );
}

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export function FadeIn({ children, delay = 0, duration = 0.5 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
}

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
}

export function SlideUp({ children, delay = 0 }: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

export function Counter({
  from,
  to,
  duration = 2,
  suffix = "",
}: CounterProps) {
  const [count, setCount] = React.useState(from);

  React.useEffect(() => {
    const controls = {
      from,
      to,
    };

    const spring = {
      type: "spring",
      damping: 100,
      mass: 1,
      stiffness: 100,
    };

    const animation = motion.animate(
      controls,
      { from: to },
      {
        ...spring,
        onUpdate: (latest) => {
          setCount(Math.floor(latest.from));
        },
      }
    );

    return () => animation.stop();
  }, [from, to]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

import React from "react";
