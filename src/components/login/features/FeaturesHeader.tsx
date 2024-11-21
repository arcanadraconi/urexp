import { motion } from 'framer-motion';

export const FeaturesHeader = () => {
  const text = "Revolutionizing Healthcare Decisions";
  const words = text.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-3 sm:space-y-4 px-4 sm:px-0"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              type: "spring",
              stiffness: 100
            }}
            className="inline-block mr-2 bg-gradient-to-r from-[#4b9402] to-[#E9E9E9] bg-clip-text text-transparent"
          >
            {word}
          </motion.span>
        ))}
      </h2>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-sm sm:text-base text-[#E9E9E9]/60 max-w-md leading-relaxed"
      >
        Empowering healthcare providers with AI-driven insights for better patient outcomes
      </motion.p>
    </motion.div>
  );
};
