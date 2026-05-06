import { motion } from 'motion/react';

export default function MeshBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-white">
      {/* Animated Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[60%] aspect-square bg-soul-blue/15 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-5%] right-[-5%] w-[50%] aspect-square bg-soul-pink/15 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] left-[-5%] w-[55%] aspect-square bg-soul-orange/15 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, -80, 0],
          y: [0, -120, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-5%] right-[-10%] w-[45%] aspect-square bg-soul-purple/15 rounded-full blur-[120px]"
      />
      
      {/* Center spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial from-transparent via-white/40 to-white/80" />
    </div>
  );
}
