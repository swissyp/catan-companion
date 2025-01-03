import React, { useMemo } from 'react';
import { Hex } from './Hex';
import { generateBoard } from '../utils/boardGenerator';
import { calculateHexPosition } from '../utils/hexPosition';
import { useResponsiveScale } from '../hooks/useResponsiveScale';

export function Board() {
  const [board] = React.useState(() => generateBoard());
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scale, screenSize } = useResponsiveScale(containerRef);

  const hexElements = useMemo(() => 
    board.map((hex) => {
      const position = calculateHexPosition(hex.position.row, hex.position.col, screenSize);
      return (
        <Hex
          key={hex.id}
          hex={hex}
          position={position}
        />
      );
    }), [board, screenSize]
  );

  return (
    <div ref={containerRef} className="w-full aspect-square relative bg-gray-50 overflow-hidden rounded-lg">
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="relative"
          style={{
            width: '500px',
            height: '400px',
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
            willChange: 'transform',
          }}
        >
          {hexElements}
        </div>
      </div>
    </div>
  );
}