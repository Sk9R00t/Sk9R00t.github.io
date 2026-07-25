import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface PhotoFrameProps {
  imageSrc?: string;
  name?: string;
}

const PhotoFrame = ({ imageSrc, name = "My Special Someone" }: PhotoFrameProps) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {/* Decorative hearts around frame */}
      <motion.div
        className="absolute -top-4 -left-4 text-rose"
        animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Heart size={24} fill="currentColor" />
      </motion.div>
      <motion.div
        className="absolute -top-4 -right-4 text-rose"
        animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      >
        <Heart size={24} fill="currentColor" />
      </motion.div>
      <motion.div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-gold"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Heart size={28} fill="currentColor" />
      </motion.div>

      {/* Photo frame */}
      <div className="relative p-2 bg-gradient-to-br from-gold via-gold-light to-gold rounded-2xl shadow-2xl">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 overflow-hidden rounded-xl bg-rose-light">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-rose-dark/50 p-4">
              <Heart size={48} className="mb-2" />
              <span className="text-sm text-center font-script">Add her photo here</span>
            </div>
          )}
        </div>
      </div>

      {/* Name badge */}
      <motion.div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card px-6 py-2 rounded-full shadow-lg border border-rose-light/50"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <p className="font-script text-lg sm:text-xl text-rose-dark whitespace-nowrap">{name}</p>
      </motion.div>
    </motion.div>
  );
};

export default PhotoFrame;
