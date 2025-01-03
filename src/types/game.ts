export interface RollStats {
  [key: number]: number;
}

export type GameState = 'setup' | 'playing';

export interface GameData {
  rollStats: RollStats;
  totalRolls: number;
  state: GameState;
  hasExistingGame: boolean;
}