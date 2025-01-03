// Grid layout for the Catan board
export const GRID = {
  CELL_TYPES: {
    EMPTY: 0,
    LAND: 1,
    WATER: 2
  },

  // Updated layout with correct water hex position
  LAYOUT: [
    [0, 0, 2, 2, 2, 2, 0],     // Row 0: 4 water
    [0, 2, 1, 1, 1, 2, 0],     // Row 1: 3 land, 2 water
    [0, 2, 1, 1, 1, 1, 2],     // Row 2: 5 land, 2 water
    [2, 1, 1, 1, 1, 1, 2],     // Row 3: 5 land, 2 water
    [0, 2, 1, 1, 1, 1, 2],     // Row 4: 5 land, 2 water
    [0, 2, 1, 1, 1, 2, 0],     // Row 5: 3 land, 2 water
    [0, 0, 2, 2, 2, 2, 0],     // Row 6: 3 water
  ] as const,

  DIMENSIONS: {
    ROWS: 7,
    COLS: 7,
    LAND_HEXES: 19,
    WATER_HEXES: 18
  }
} as const;