import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const BlurText = ({
  text = '',
  className = '',
  variant = {
    hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
    visible: { filter: 'blur(0px)', opacity: 1, y: 0 },
  },
  animationFrom,
  animationTo,
  delay = 0,
  onAnimationComplete,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const defaultContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay / 1000,
      },
    },
  };

  const defaultItemVariants = {
    hidden: animationFrom || variant.hidden,
    visible: animationTo || variant.visible,
  };

  return (
    <motion.h1
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={defaultContainerVariants}
      onAnimationComplete={onAnimationComplete}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={defaultItemVariants}
          style={{ display: 'inline-block' }}
          transition={{
            duration: 0.8,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default BlurText;
