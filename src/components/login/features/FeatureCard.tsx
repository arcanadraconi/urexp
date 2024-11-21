import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  feature: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
  index: number;
}

export const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const { icon: Icon, title, description } = feature;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: 0.1 * (index + 1),
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group p-4 sm:p-6 rounded-xl backdrop-blur-sm bg-[#0D1D2D]/20 border border-[#4b9402]/10 
                 hover:bg-[#4b9402]/5 hover:border-[#4b9402]/30 transition-all duration-300
                 touch-manipulation cursor-pointer"
    >
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="flex-shrink-0">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#4b9402] group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="space-y-1 sm:space-y-2 flex-1">
          <h3 className="text-sm sm:text-base font-medium text-[#E9E9E9] group-hover:text-[#4b9402] 
                         transition-colors duration-300 leading-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-[#E9E9E9]/60 
                       group-hover:text-[#E9E9E9]/80 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
