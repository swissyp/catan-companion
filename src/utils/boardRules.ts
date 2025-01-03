import { Hex, GridPosition } from '../types/catan';
import { GRID } from '../constants/grid';

// Get all adjacent hex positions for a given position
export function getAdjacentPositions(pos: GridPosition): GridPosition[] {
  const { row, col } = pos;
  const isEvenRow = row % 2 === 0;
  
  // Directions for adjacent hexes (even/odd rows have different patterns)
  const directions = [
    { row: -1, col: isEvenRow ? -1 : 0 },  // top-left
    { row: -1, col: isEvenRow ? 0 : 1 },   // top-right
    { row: 0, col: -1 },                    // left
    { row: 0, col: 1 },                     // right
    { row: 1, col: isEvenRow ? -1 : 0 },   // bottom-left
    { row: 1, col: isEvenRow ? 0 : 1 }     // bottom-right
  ];

  return directions
    .map(dir => ({
      row: row + dir.row,
      col: col + dir.col
    }))
    .filter(pos => 
      pos.row >= 0 && 
      pos.row < GRID.DIMENSIONS.ROWS && 
      pos.col >= 0 && 
      pos.col < GRID.DIMENSIONS.COLS &&
      GRID.LAYOUT[pos.row][pos.col] === GRID.CELL_TYPES.LAND
    );
}

// Check if a number placement is valid
export function isValidNumberPlacement(
  number: number,
  position: GridPosition,
  board: Hex[]
): boolean {
  // Only check 6 and 8
  if (number !== 6 && number !== 8) return true;

  const adjacentPositions = getAdjacentPositions(position);
  
  // Check if any adjacent hex has a 6 or 8
  return !adjacentPositions.some(adjPos => {
    const adjacentHex = board.find(
      hex => hex.position.row === adjPos.row && hex.position.col === adjPos.col
    );
    return adjacentHex?.number === 6 || adjacentHex?.number === 8;
  });
}