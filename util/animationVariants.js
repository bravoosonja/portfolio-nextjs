// animation transition
export const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

// animation variants
export const titleSlideUp = {
  initial: { y: 200 },
  animate: { y: 0 },
};

export const parent = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

export const maskAnimation = {
  initial: { width: "100%" },
  animate: { width: 0 },
};
