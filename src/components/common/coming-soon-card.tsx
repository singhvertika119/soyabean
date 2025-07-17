'use client';

import { motion, type Variants } from 'motion/react';
import { SparklesIcon } from 'lucide-react';

export default function ComingSoonCard() {
  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const floatVariants: Variants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'reverse' as const,
      },
    },
  };

  const sparkleVariants: Variants = {
    twinkle: {
      opacity: [0.4, 1, 0.4],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'reverse' as const,
        times: [0, 0.5, 1],
      },
    },
  };

  return (
    <motion.div
      className="border-kawaii-pink group relative flex h-full flex-col overflow-hidden rounded-3xl border-3 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="text-kawaii-mint/20 absolute -top-4 -right-4"
          variants={sparkleVariants}
          animate="twinkle"
        >
          <SparklesIcon className="h-16 w-16" />
        </motion.div>
        <motion.div
          className="text-kawaii-pink/20 absolute -bottom-4 -left-4"
          variants={sparkleVariants}
          animate="twinkle"
        >
          <SparklesIcon className="h-16 w-16" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.div
          className="bg-kawaii-pink/10 mb-6 flex h-20 w-20 items-center justify-center rounded-full"
          variants={floatVariants}
          animate="float"
        >
          <span className="text-4xl">✨</span>
        </motion.div>

        <motion.h3
          className="font-family-bubblegum mb-3 text-2xl font-semibold text-gray-800"
          variants={itemVariants}
        >
          Coming Soon
        </motion.h3>

        <motion.div
          className="from-kawaii-pink/20 to-kawaii-mint/20 mb-4 h-1 w-16 bg-gradient-to-r"
          variants={itemVariants}
        />

        <motion.p className="mb-6 text-gray-600" variants={itemVariants}>
          Something exciting is in the works! Stay tuned.
        </motion.p>

        {/* Animated dots */}
        <motion.div className="flex items-center justify-center space-x-2" variants={itemVariants}>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="bg-kawaii-pink h-3 w-3 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
