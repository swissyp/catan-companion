import React from 'react';

interface NumberTokenProps {
  number: number;
  dots: number;
}

export function NumberToken({ number, dots }: NumberTokenProps) {
  const isRed = number === 6 || number === 8;
  
  return (
    <div className="bg-white rounded-full w-7 h-7 flex flex-col items-center justify-center shadow-sm">
      <span className={`text-base font-bold leading-none ${isRed ? 'text-red-600' : 'text-gray-900'}`}>
        {number}
      </span>
      <div className="flex gap-[1px] mt-0.5">
        {Array(dots).fill(null).map((_, i) => (
          <div 
            key={i} 
            className={`w-0.5 h-0.5 rounded-full ${isRed ? 'bg-red-600' : 'bg-gray-900'}`} 
          />
        ))}
      </div>
    </div>
  );
}