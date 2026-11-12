import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * ScrollReveal Component
 * High-performance, accessible scroll-triggered entrance animation.
 * Follows Nielsen's Usability Heuristics:
 * - Subtle, purposeful motion (350-450ms) that aids visual hierarchy
 * - Never blocks interaction or delays content accessibility
 * - Automatically disables when user has prefers-reduced-motion set
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.45,
  yOffset = 20,
  once = true,
  scale = 1
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, scale: scale !== 1 ? scale : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerGrid Component
 * Staggers children entrance animations sequentially as grid scrolls into view.
 */
export function StaggerGrid({
  children,
  className = '',
  staggerDelay = 0.08,
  yOffset = 20
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return (
          <motion.div key={child.key || index} variants={itemVariants} className="h-full">
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
