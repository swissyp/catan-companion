import React from 'react';
import { Play, RefreshCw } from 'lucide-react';
import { GameState } from '../types/game';

interface GameControlsProps {
  gameState: GameState;
  hasExistingGame: boolean;
  onStartGame: () => void;
  onNewBoard: () => void;
  onContinueGame: () => void;
  onShuffle: () => void;
}

export function GameControls({ 
  gameState, 
  hasExistingGame, 
  onStartGame, 
  onNewBoard, 
  onContinueGame,
  onShuffle
}: GameControlsProps) {
  if (gameState === 'playing') {
    return (
      <button
        onClick={onNewBoard}
        className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600"
      >
        <RefreshCw className="size-4" />
        New Board
      </button>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-2">
      <button
        onClick={onShuffle}
        className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600"
      >
        <RefreshCw className="size-4" />
        Shuffle Board
      </button>
      
      <button
        onClick={onStartGame}
        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
      >
        <Play className="size-4" />
        Start New Game
      </button>
      
      {hasExistingGame && (
        <button
          onClick={onContinueGame}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          <Play className="size-4" />
          Continue Previous Game
        </button>
      )}
    </div>
  );
}