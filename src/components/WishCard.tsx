import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface WishCardProps {
  icon: LucideIcon;
  title: string;
  message: string;
  delay?: number;
  iconColor?: string;
}

const WishCard = ({ icon: Icon, title, message, delay = 0, iconColor = "text-rose" }: WishCardProps) => {
  return (
    <motion.div
      className="bg-card/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-lg border border-rose-light/30 h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <motion.div
        className={`${iconColor} mb-3`}
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay }}
      >
        <Icon size={28} />
      </motion.div>
      <h3 className="font-display text-lg sm:text-xl text-foreground mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{message}</p>
    </motion.div>
  );
};

export default WishCard;
