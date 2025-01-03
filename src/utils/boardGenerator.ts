import { Hex, ResourceType, GridPosition } from '../types/catan';
import { RESOURCE_DISTRIBUTION, NUMBER_DISTRIBUTION, DOTS_MAP } from '../constants/game';
import { GRID } from '../constants/grid';
import { shuffle } from './shuffle';
import { isValidNumberPlacement } from './boardRules';

export function generateBoard(): Hex[] {
  const board: Hex[] = [];
  const shuffledResources = shuffle([...RESOURCE_DISTRIBUTION]);
  let shuffledNumbers = shuffle([...NUMBER_DISTRIBUTION]);
  let resourceIndex = 0;

  // First pass: Place resources
  GRID.LAYOUT.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell === GRID.CELL_TYPES.EMPTY) return;

      const position: GridPosition = { row: rowIndex, col: colIndex };
      const isWater = cell === GRID.CELL_TYPES.WATER;
      
      const hex: Hex = {
        id: `hex-${rowIndex}-${colIndex}`,
        position,
        resource: isWater ? 'water' : shuffledResources[resourceIndex++]
      };

      board.push(hex);
    });
  });

  // Second pass: Place numbers
  const landHexes = board.filter(hex => 
    hex.resource !== 'water' && hex.resource !== 'desert'
  );

  // Keep trying until we find a valid number arrangement
  let attempts = 0;
  const MAX_ATTEMPTS = 100;

  while (attempts < MAX_ATTEMPTS) {
    let validPlacement = true;
    shuffledNumbers = shuffle([...NUMBER_DISTRIBUTION]);
    let numberIndex = 0;

    // Try to place all numbers
    for (const hex of landHexes) {
      if (numberIndex >= shuffledNumbers.length) break;
      
      const number = shuffledNumbers[numberIndex];
      if (!isValidNumberPlacement(number, hex.position, board)) {
        validPlacement = false;
        break;
      }

      hex.number = number;
      hex.dots = DOTS_MAP[number];
      numberIndex++;
    }

    if (validPlacement) break;
    attempts++;

    // Reset numbers if placement failed
    landHexes.forEach(hex => {
      delete hex.number;
      delete hex.dots;
    });
  }

  if (attempts === MAX_ATTEMPTS) {
    console.warn('Could not find valid number placement after maximum attempts');
  }

  return board;
}