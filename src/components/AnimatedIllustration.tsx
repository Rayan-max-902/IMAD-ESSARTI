/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export const AnimatedIllustration = () => {
  return (
    <div className="relative w-full aspect-square flex items-center justify-center">
      {/* Background blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          borderRadius: ["40%", "50%", "40%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-4/5 h-4/5 bg-blue-100 opacity-50"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
          borderRadius: ["50%", "40%", "50%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-4/5 h-4/5 bg-indigo-50 opacity-50"
      />

      {/* Central animated elements */}
      <svg
        viewBox="0 0 200 200"
        className="relative z-10 w-full h-full"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#4f46e5', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Floating circles */}
        <motion.circle
          cx="100"
          cy="100"
          r="40"
          fill="url(#grad1)"
          animate={{
            y: [-10, 10, -10],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Orbiting elements */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ originX: '100px', originY: '100px' }}
        >
          <motion.rect
            x="30"
            y="30"
            width="20"
            height="20"
            rx="5"
            fill="#3b82f6"
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="170"
            cy="170"
            r="10"
            fill="#818cf8"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.g>

        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ originX: '100px', originY: '100px' }}
        >
          <motion.path
            d="M 160 40 L 180 60 L 140 60 Z"
            fill="#6366f1"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.g>

        {/* Connecting lines */}
        <motion.path
          d="M 100 100 L 40 40"
          stroke="#cbd5e1"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
          d="M 100 100 L 160 160"
          stroke="#cbd5e1"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </svg>
    </div>
  );
};
