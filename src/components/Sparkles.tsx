import { motion } from "framer-motion";
import { Sparkles as SparkleIcon } from "lucide-react";

interface SparklesProps {
  count?: number;
}

const Sparkles = ({ count = 8 }: SparklesProps) => {
  const sparkles = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    size: 8 + Math.random() * 12,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute text-gold"
          style={{
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 2,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <SparkleIcon size={sparkle.size} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
};

export default Sparkles;
