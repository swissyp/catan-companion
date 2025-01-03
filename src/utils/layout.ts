import { BOARD_CONFIG } from '../constants/board';

export function generateLayoutMatrix() {
  const { ROWS, COLS, ROW_SIZES, ROW_OFFSETS } = BOARD_CONFIG;
  const layout: number[][] = [];
  
  for (let row = 0; row < ROWS; row++) {
    const rowArray = Array(COLS).fill(0);
    const size = ROW_SIZES[row];
    const offset = ROW_OFFSETS[row];
    
    for (let col = 0; col < size; col++) {
      rowArray[offset + col] = 1;
    }
    
    layout.push(rowArray);
  }
  
  return layout;
}