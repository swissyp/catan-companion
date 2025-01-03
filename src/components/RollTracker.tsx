import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { RollStats } from '../types/game';

interface RollTrackerProps {
  stats: RollStats;
  totalRolls: number;
  onIncrement: (num: number) => void;
  onDecrement: (num: number) => void;
}

export function RollTracker({ stats, totalRolls, onIncrement, onDecrement }: RollTrackerProps) {
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const maxRolls = Math.max(...Object.values(stats), 1);

  return (
    <div className="w-full space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">
        Roll Stats (Total: {totalRolls})
      </h2>
      
      <div className="space-y-2">
        {numbers.map(num => {
          const count = stats[num] || 0;
          const percentage = totalRolls > 0 ? (count / totalRolls) * 100 : 0;
          const barWidth = totalRolls > 0 ? (count / maxRolls) * 100 : 0;
          
          return (
            <div key={num} className="flex items-center gap-2">
              <div className="flex items-center gap-2 w-24">
                <button
                  onClick={() => onDecrement(num)}
                  className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
                  disabled={!stats[num]}
                >
                  <Minus className="size-4" />
                </button>
                <span className="w-6 text-center font-medium">{num}</span>
                <button
                  onClick={() => onIncrement(num)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Plus className="size-4" />
                </button>
              </div>
              
              <div className="flex-1 h-8 bg-gray-100 rounded-lg relative">
                <div 
                  className="h-full bg-blue-200 rounded-lg transition-all duration-200"
                  style={{ width: `${barWidth}%` }}
                />
                <div className="absolute inset-0 flex items-center justify-between px-2">
                  <span className="text-sm font-medium">{count}</span>
                  <span className="text-sm text-gray-500">{percentage.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}