// Base hex size as a percentage of viewport width
const BASE_SIZE = 28;

export const HEX = {
  SIZE: BASE_SIZE,
  WIDTH: BASE_SIZE * 2,
  HEIGHT: Math.sqrt(3) * BASE_SIZE,
  
  // Fine-tuned spacing for perfect hex alignment
  SPACING: {
    X: 0.92,  // Adjusted for tighter horizontal spacing
    Y: 0.82   // Maintains vertical spacing
  }
} as const;