export const designTokens = {
  // Typography Scale (based on 1.25 ratio)
  typography: {
    fontSizes: {
      xs: "clamp(0.64rem, calc(0.58rem + 0.29vw), 0.8rem)",
      sm: "clamp(0.8rem, calc(0.73rem + 0.37vw), 1rem)",
      base: "clamp(1rem, calc(0.91rem + 0.47vw), 1.25rem)",
      lg: "clamp(1.25rem, calc(1.14rem + 0.59vw), 1.56rem)",
      xl: "clamp(1.56rem, calc(1.42rem + 0.73vw), 1.95rem)",
      "2xl": "clamp(1.95rem, calc(1.77rem + 0.91vw), 2.44rem)",
      "3xl": "clamp(2.44rem, calc(2.22rem + 1.14vw), 3.05rem)",
      "4xl": "clamp(3.05rem, calc(2.77rem + 1.42vw), 3.82rem)",
      "5xl": "clamp(3.82rem, calc(3.46rem + 1.77vw), 4.77rem)",
    },
    fontWeights: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeights: {
      none: 1,
      tight: 1.2,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
  },

  // Space Scale (based on 1.5 ratio)
  space: {
    px: "1px",
    0: "0",
    0.5: "clamp(0.13rem, calc(0.11rem + 0.07vw), 0.17rem)",
    1: "clamp(0.25rem, calc(0.23rem + 0.11vw), 0.31rem)",
    2: "clamp(0.5rem, calc(0.46rem + 0.22vw), 0.63rem)",
    3: "clamp(0.75rem, calc(0.68rem + 0.33vw), 0.94rem)",
    4: "clamp(1rem, calc(0.91rem + 0.43vw), 1.25rem)",
    5: "clamp(1.5rem, calc(1.37rem + 0.65vw), 1.88rem)",
    6: "clamp(2rem, calc(1.83rem + 0.87vw), 2.5rem)",
    8: "clamp(3rem, calc(2.74rem + 1.3vw), 3.75rem)",
    10: "clamp(4rem, calc(3.65rem + 1.74vw), 5rem)",
    12: "clamp(6rem, calc(5.48rem + 2.61vw), 7.5rem)",
    16: "clamp(8rem, calc(7.3rem + 3.48vw), 10rem)",
    20: "clamp(12rem, calc(10.96rem + 5.22vw), 15rem)",
    24: "clamp(16rem, calc(14.61rem + 6.96vw), 20rem)",
    32: "clamp(24rem, calc(21.91rem + 10.43vw), 30rem)",
  },

  // Animations
  animations: {
    durations: {
      fastest: "100ms",
      faster: "200ms",
      fast: "300ms",
      normal: "500ms",
      slow: "700ms",
      slower: "1000ms",
      slowest: "1500ms",
    },
    easings: {
      // Productive
      productive: "cubic-bezier(0.2, 0, 0.38, 0.9)",
      productiveEntrance: "cubic-bezier(0, 0, 0.38, 0.9)",
      productiveExit: "cubic-bezier(0.2, 0, 1, 0.9)",
      // Expressive
      expressive: "cubic-bezier(0.4, 0.14, 0.3, 1)",
      expressiveEntrance: "cubic-bezier(0, 0, 0.3, 1)",
      expressiveExit: "cubic-bezier(0.4, 0.14, 1, 1)",
    },
  },
}

// Type helpers
export type SpaceToken = keyof typeof designTokens.space
export type FontSizeToken = keyof typeof designTokens.typography.fontSizes
export type FontWeightToken = keyof typeof designTokens.typography.fontWeights
export type LineHeightToken = keyof typeof designTokens.typography.lineHeights
export type LetterSpacingToken = keyof typeof designTokens.typography.letterSpacing
export type AnimationDurationToken = keyof typeof designTokens.animations.durations
export type AnimationEasingToken = keyof typeof designTokens.animations.easings

