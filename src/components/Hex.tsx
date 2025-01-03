import React, { memo } from 'react';
import { Hex as HexType } from '../types/catan';
import { RESOURCE_COLORS } from '../constants/colors';
import { NumberToken } from './NumberToken';
import { HEX } from '../constants/dimensions';

interface HexProps {
  hex: HexType;
  position: { x: number; y: number };
}

export const Hex = memo(function Hex({ hex, position }: HexProps) {
  const { resource, number, dots } = hex;
  const color = RESOURCE_COLORS[resource];
  
  return (
    <div 
      className={`hexagon ${color} absolute`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        width: `${HEX.WIDTH}px`,
        height: `${HEX.HEIGHT}px`,
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      }}
    >
      {number && dots && (
        <div className="absolute inset-0 flex items-center justify-center">
          <NumberToken number={number} dots={dots} />
        </div>
      )}
    </div>
  );
});