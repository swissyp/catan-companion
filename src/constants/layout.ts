// Layout constants for the Catan board
export const LAYOUT = {
  // Number of hexes in each row from top to bottom (land + water)
  ROW_SIZES: [3, 5, 7, 7, 7, 5, 3],
  
  // The exact layout of the Catan board (0: empty, 1: land, 2: water)
  GRID: [
    [0, 0, 2, 2, 2, 0, 0],         // Row 0: 3 water
    [0, 2, 1, 1, 1, 2, 0],         // Row 1: 3 land, 2 water
    [2, 1, 1, 1, 1, 1, 2],         // Row 2: 5 land, 2 water
    [2, 1, 1, 1, 1, 1, 2],         // Row 3: 5 land, 2 water
    [2, 1, 1, 1, 1, 1, 2],         // Row 4: 5 land, 2 water
    [0, 2, 1, 1, 1, 2, 0],         // Row 5: 3 land, 2 water
    [0, 0, 2, 2, 2, 0, 0],         // Row 6: 3 water
  ] as const,

  DIMENSIONS: {
    ROWS: 7,
    COLS: 7,
    LAND_HEXES: 19,
    WATER_HEXES: 18
  }
} as const;