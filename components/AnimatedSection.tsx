import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up' 
}: AnimatedSectionProps) => {
  const { elementRef, isVisible } = useScrollAnimation();

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0
    }
  };

  const transition = {
    duration: 0.8,
    delay: delay,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
  };

  return (
    <motion.div
      ref={elementRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;