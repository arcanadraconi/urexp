import { Shield, Zap, Clock, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Shield,
    title: 'Secure Access',
    description: 'Enterprise-grade security protocols and encryption'
  },
  {
    icon: Zap,
    title: 'Real-Time Analysis',
    description: 'Instant medical chart processing and recommendations'
  },
  {
    icon: Clock,
    title: 'Time-Saving',
    description: 'Reduce review time by up to 60% with AI assistance'
  },
  {
    icon: LineChart,
    title: 'Analytics',
    description: 'Comprehensive insights and performance metrics'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const FeatureGrid = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-10 px-4 sm:px-0"
    >
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="transform transition-all duration-200"
        >
          <FeatureCard
            feature={feature}
            index={index}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
