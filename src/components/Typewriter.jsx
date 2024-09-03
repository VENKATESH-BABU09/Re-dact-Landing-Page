import { motion } from 'framer-motion';

export const sentenceVariants = {
  hidden: {},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.01,
      repeat: Infinity,  // Repeat the animation infinitely
      repeatType: 'loop' // Repeat type 'loop' to make it continuous
    }
  }
};

export const letterVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.8, // Adjust this to control the fade in duration
        repeat: Infinity, // Repeat the fade in and out effect
        repeatType: 'mirror' // Repeat the animation in a mirror pattern
      }
    }
  }
};

export const Typewriter = ({ text, ...rest }) => (
  <motion.p
    key={text}
    variants={sentenceVariants}
    initial="hidden"
    animate="visible"
    {...rest}
  >
    {text.split("").map((char, i) => (
      <motion.span key={`${char}-${i}`} variants={letterVariants}>
        {char}
      </motion.span>
    ))}
  </motion.p>
);
