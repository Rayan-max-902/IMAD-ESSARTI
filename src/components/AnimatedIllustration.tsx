/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export const AnimatedIllustration = () => {
  return (
    <div className="relative w-full aspect-square flex items-center justify-center scale-75 md:scale-100">
      {/* Background blobs with more complex motion */}
      <motion.div
        animate={{
          scale: [1, 1.25, 0.9, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
          borderRadius: ["40% 60% 70% 30%", "60% 40% 30% 70%", "40% 60% 70% 30%"],
          background: [
            "rgba(59, 130, 246, 0.15)",
            "rgba(79, 70, 229, 0.15)",
            "rgba(59, 130, 246, 0.15)"
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-[90%] h-[90%]"
      />
      <motion.div
        animate={{
          scale: [1.1, 0.9, 1.2, 1, 1.1],
          rotate: [360, 270, 180, 90, 0],
          borderRadius: ["30% 70% 40% 60%", "70% 30% 60% 40%", "30% 70% 40% 60%"],
          background: [
            "rgba(129, 140, 248, 0.1)",
            "rgba(199, 210, 254, 0.1)",
            "rgba(129, 140, 248, 0.1)"
          ]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-[85%] h-[85%]"
      />

      {/* Hero SVG */}
      <svg
        viewBox="0 0 240 240"
        className="relative z-10 w-full h-full drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="mainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#4f46e5', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Floating Core */}
        <motion.g
          animate={{
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Outer glow ring */}
          <motion.circle
            cx="120"
            cy="120"
            r="55"
            fill="none"
            stroke="url(#mainGrad)"
            strokeWidth="1"
            strokeDasharray="10 15"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* Central Sphere */}
          <motion.circle
            cx="120"
            cy="120"
            r="45"
            fill="url(#mainGrad)"
            filter="url(#glow)"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Tech lines around sphere */}
          <motion.path
            d="M 85 120 L 155 120"
            stroke="white"
            strokeWidth="0.5"
            strokeOpacity="0.3"
          />
          <motion.path
            d="M 120 85 L 120 155"
            stroke="white"
            strokeWidth="0.5"
            strokeOpacity="0.3"
          />
        </motion.g>

        {/* Floating Data Nodes */}
        {[
          { x: 50, y: 70, size: 8, color: '#60a5fa', delay: 0 },
          { x: 190, y: 100, size: 10, color: '#818cf8', delay: 1 },
          { x: 70, y: 180, size: 12, color: '#3b82f6', delay: 2 },
          { x: 170, y: 190, size: 6, color: '#93c5fd', delay: 1.5 },
        ].map((node, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill={node.color}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 4,
                delay: node.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Connection line to center */}
            <motion.path
              d={`M ${node.x} ${node.y} L 120 120`}
              stroke={node.color}
              strokeWidth="0.5"
              strokeOpacity="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.5 }}
            />
          </motion.g>
        ))}

        {/* Orbiting particles */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ originX: '120px', originY: '120px' }}
        >
          <circle cx="210" cy="120" r="3" fill="#60a5fa" />
          <circle cx="30" cy="120" r="2" fill="#818cf8" />
        </motion.g>

        {/* Floating Cubes */}
        {[0, 120, 240].map((angle, i) => {
          const x = 120 + 80 * Math.cos((angle * Math.PI) / 180);
          const y = 120 + 80 * Math.sin((angle * Math.PI) / 180);
          return (
            <motion.rect
              key={i}
              x={x - 10}
              y={y - 10}
              width="20"
              height="20"
              rx="4"
              fill="white"
              fillOpacity="0.1"
              stroke="url(#mainGrad)"
              strokeWidth="1"
              animate={{
                rotate: [0, 180, 360],
                y: [y - 10, y - 30, y - 10]
              }}
              transition={{
                duration: 8,
                delay: i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};
