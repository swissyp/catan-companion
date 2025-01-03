import { HEX } from '../constants/dimensions';
import { Position } from '../types/catan';
import { LAYOUT } from '../constants/layout';

export function calculateHexPosition(row: number, col: number): Position {
  // Calculate board dimensions
  const boardWidth = LAYOUT.DIMENSIONS.COLS * HEX.SPACING.X;
  const boardHeight = LAYOUT.DIMENSIONS.ROWS * HEX.SPACING.Y;
  
  // Calculate offsets to center the board
  const centerX = -boardWidth / 2 + HEX.SPACING.X;
  const centerY = -boardHeight / 2 + HEX.SPACING.Y;
  
  // Calculate position with offset for odd rows
  const x = centerX + (col * HEX.SPACING.X) + (row % 2 ? HEX.SPACING.X / 2 : 0);
  const y = centerY + (row * HEX.SPACING.Y);
  
  return { x, y };
}