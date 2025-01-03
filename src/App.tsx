import React from 'react';
import { Board } from './components/Board';
import { RollTracker } from './components/RollTracker';
import { GameControls } from './components/GameControls';
import { GameData } from './types/game';

export default function App() {
  const [boardKey, setBoardKey] = React.useState(0);
  const [gameData, setGameData] = React.useState<GameData>({
    rollStats: {},
    totalRolls: 0,
    state: 'setup',
    hasExistingGame: false
  });

  const handleStartGame = () => {
    setGameData(prev => ({
      ...prev,
      state: 'playing',
      rollStats: {},
      totalRolls: 0,
      hasExistingGame: false
    }));
  };

  const handleNewBoard = () => {
    setBoardKey(prev => prev + 1);
    setGameData(prev => ({
      ...prev,
      state: 'setup',
      hasExistingGame: prev.totalRolls > 0
    }));
  };

  const handleContinueGame = () => {
    setGameData(prev => ({
      ...prev,
      state: 'playing'
    }));
  };

  const handleShuffle = () => {
    setBoardKey(prev => prev + 1);
  };

  const handleIncrement = (num: number) => {
    setGameData(prev => ({
      ...prev,
      rollStats: {
        ...prev.rollStats,
        [num]: (prev.rollStats[num] || 0) + 1
      },
      totalRolls: prev.totalRolls + 1
    }));
  };

  const handleDecrement = (num: number) => {
    if (!gameData.rollStats[num]) return;
    
    setGameData(prev => ({
      ...prev,
      rollStats: {
        ...prev.rollStats,
        [num]: prev.rollStats[num] - 1
      },
      totalRolls: prev.totalRolls - 1
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-4 sm:p-8 w-full max-w-4xl">
        <div className="flex flex-col gap-4 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Catan Companion
          </h1>
          
          <div className="flex justify-center">
            <GameControls
              gameState={gameData.state}
              hasExistingGame={gameData.hasExistingGame}
              onStartGame={handleStartGame}
              onNewBoard={handleNewBoard}
              onContinueGame={handleContinueGame}
              onShuffle={handleShuffle}
            />
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {gameData.state === 'playing' && (
            <div className="lg:w-64">
              <RollTracker
                stats={gameData.rollStats}
                totalRolls={gameData.totalRolls}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            </div>
          )}
          
          <div className="flex-1">
            <Board key={boardKey} />
          </div>
        </div>
      </div>
    </div>
  );
}