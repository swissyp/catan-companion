import { ResourceType } from '../types/catan';

// Resource distribution for the standard Catan board
export const RESOURCE_DISTRIBUTION: ResourceType[] = [
  'wood', 'wood', 'wood', 'wood',       // 4 forests
  'brick', 'brick', 'brick',            // 3 hills
  'wheat', 'wheat', 'wheat', 'wheat',   // 4 fields
  'sheep', 'sheep', 'sheep', 'sheep',   // 4 pastures
  'ore', 'ore', 'ore',                  // 3 mountains
  'desert'                              // 1 desert
];

// Number tokens distribution (2-12, excluding 7)
export const NUMBER_DISTRIBUTION = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];

// Probability dots mapping (dots = pip count)
export const DOTS_MAP: Record<number, number> = {
  2: 1,   // 1 dot
  3: 2,   // 2 dots
  4: 3,   // 3 dots
  5: 4,   // 4 dots
  6: 5,   // 5 dots
  8: 5,   // 5 dots
  9: 4,   // 4 dots
  10: 3,  // 3 dots
  11: 2,  // 2 dots
  12: 1   // 1 dot
};