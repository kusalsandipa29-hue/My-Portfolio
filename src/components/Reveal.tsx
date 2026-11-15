import { motion, type HTMLMotionProps } from 'framer-motion';

/** Fade-and-rise on first scroll into view. Respects reduced motion via <MotionConfig>. */
export function Reveal({ delay = 0, y = 18, ...props }: HTMLMotionProps<'div'> & { delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    />
  );
}
