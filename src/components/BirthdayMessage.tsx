import { motion, type Transition, type Easing } from "framer-motion";
import { Heart, Cake, Gift, Star, Sparkles, Moon, Sun, Music, Flower2 } from "lucide-react";
import SparklesEffect from "./Sparkles";
import PhotoFrame from "./PhotoFrame";
import WishCard from "./WishCard";

const easeOut: Easing = [0.25, 0.1, 0.25, 1];

const wishes = [
  {
    icon: Star,
    title: "May Your Dreams Shine",
    message: "Like the brightest stars in the sky, may all your dreams come true this year.",
    iconColor: "text-gold",
  },
  {
    icon: Heart,
    title: "Endless Love",
    message: "You deserve all the love in this world. You're truly one of a kind.",
    iconColor: "text-rose",
  },
  {
    icon: Sparkles,
    title: "Magic Everywhere",
    message: "May every moment be filled with magic and wonderful surprises.",
    iconColor: "text-gold",
  },
  {
    icon: Sun,
    title: "Bright Days Ahead",
    message: "Wishing you sunshine and happiness in everything you do.",
    iconColor: "text-gold",
  },
  {
    icon: Music,
    title: "Joy & Laughter",
    message: "May your life be filled with music, laughter, and beautiful melodies.",
    iconColor: "text-rose",
  },
  {
    icon: Flower2,
    title: "Bloom & Grow",
    message: "Like a beautiful flower, may you continue to bloom and flourish.",
    iconColor: "text-rose-dark",
  },
];

const BirthdayMessage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      } as Transition,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      } as Transition,
    },
  };

  return (
    <div className="relative z-10 min-h-screen">
      <SparklesEffect count={15} />

      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative top element */}
        <motion.div
          className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
          variants={itemVariants}
        >
          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gold animate-pulse-soft" fill="currentColor" />
          <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground font-sans">
            Today is Special
          </span>
          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gold animate-pulse-soft" fill="currentColor" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display text-center mb-2 sm:mb-4 text-foreground"
          variants={itemVariants}
        >
          Happy Birthday
        </motion.h1>

        {/* Her name with special styling */}
        <motion.p
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-script text-rose mb-2"
          variants={itemVariants}
        >
          Daliya
        </motion.p>

        {/* Animated heart */}
        <motion.div
          className="my-4 sm:my-6"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-rose" fill="currentColor" />
        </motion.div>

        {/* Photo Frame */}
        <motion.div className="mb-12 sm:mb-16" variants={itemVariants}>
          <PhotoFrame 
            name="My Beautiful Crush"
            imageSrc="src/img/daliya.jpg"
          />
        </motion.div>

        {/* Script subtitle */}
        <motion.p
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-script text-rose-dark text-center mb-6 sm:mb-8 px-4"
          variants={itemVariants}
        >
          To The Most Amazing Girl In The World
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10"
          variants={itemVariants}
        >
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-rose to-transparent" />
          <Cake className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-rose to-transparent" />
        </motion.div>

        {/* Main Message */}
        <motion.div
          className="max-w-lg sm:max-w-xl md:max-w-2xl mx-auto bg-card/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border border-rose-light/30"
          variants={itemVariants}
        >
          <p className="text-base sm:text-lg md:text-xl text-center leading-relaxed text-foreground/90 font-sans">
            Dear <span className="font-script text-rose text-xl sm:text-2xl">Daliya</span>, on this beautiful day, I want you to know how incredibly special you are. 
            Your smile lights up my world, and your presence makes every moment magical.
          </p>
          
          <div className="my-6 sm:my-8 flex justify-center">
            <motion.div
              className="flex items-center gap-2 text-rose"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={14} fill="currentColor" />
              <Heart size={18} fill="currentColor" />
              <Heart size={14} fill="currentColor" />
            </motion.div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-center leading-relaxed text-foreground/90 font-sans">
            You deserve all the happiness in the world. Today and always! 💕
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12 sm:mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Moon className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.section>

      {/* Wishes Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-foreground mb-3 sm:mb-4">
            Birthday Wishes
          </h2>
          <p className="font-script text-xl sm:text-2xl text-rose-dark">Just for you</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {wishes.map((wish, index) => (
            <WishCard
              key={wish.title}
              icon={wish.icon}
              title={wish.title}
              message={wish.message}
              iconColor={wish.iconColor}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="py-12 sm:py-16 flex flex-col items-center gap-4 sm:gap-6 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 sm:gap-6">
          <motion.div
            className="text-gold"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Gift className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
          <motion.div
            className="text-rose"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Cake className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.div>
          <motion.div
            className="text-gold"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Gift className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
        </div>

        <p className="font-script text-2xl sm:text-3xl md:text-4xl text-rose-dark text-center">
          With All My Love, For You Daliya 💕
        </p>

        <p className="text-xs sm:text-sm text-muted-foreground mt-4">
          Made with ❤️ just for you
        </p>
      </motion.footer>
    </div>
  );
};

export default BirthdayMessage;
