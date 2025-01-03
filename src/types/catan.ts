export type ResourceType = 'wood' | 'brick' | 'wheat' | 'sheep' | 'ore' | 'desert' | 'water';

export interface Position {
  x: number;
  y: number;
}

export interface GridPosition {
  row: number;
  col: number;
}

export interface Hex {
  id: string;
  position: GridPosition;
  resource: ResourceType;
  number?: number;
  dots?: number;
}