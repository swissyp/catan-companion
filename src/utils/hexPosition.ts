import { HEX } from '../constants/dimensions';
import { Position } from '../types/catan';

export function calculateHexPosition(
  row: number, 
  col: number, 
  screenSize: 'mobile' | 'medium' | 'desktop'
): Position {
  // Calculate base position
  const x = HEX.WIDTH * HEX.SPACING.X * (col + 0.5 * (row & 1));
  const y = HEX.HEIGHT * HEX.SPACING.Y * row;
  
  // Adjust offsets based on screen size
  let OFFSET_X;
  switch (screenSize) {
    case 'mobile':
      OFFSET_X = 130;
      break;
    case 'medium':
      OFFSET_X = 250;
      break;
    case 'desktop':
      OFFSET_X = 250;
      break;
  }
  
  const OFFSET_Y = 200;
  
  return {
    x: x + OFFSET_X - (HEX.WIDTH * 3.5),
    y: y + OFFSET_Y - (HEX.HEIGHT * 3)
  };
}