'use client';

import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  showNumbers?: boolean;
  color?: 'purple' | 'blue' | 'green' | 'pink';
  size?: 'sm' | 'md' | 'lg';
}

export default function ProgressBar({ 
  current, 
  total, 
  showNumbers = true, 
  color = 'purple',
  size = 'md'
}: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);
  
  const colors = {
    purple: 'from-purple-500 to-pink-500',
    blue: 'from-blue-500 to-cyan-500',
    green: 'from-green-500 to-emerald-500',
    pink: 'from-pink-500 to-rose-500'
  };
  
  const sizes = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };

  return (
    <div className="w-full">
      {showNumbers && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Pergunta {current} de {total}
          </span>
          <span className="text-sm font-bold text-purple-600">
            {percentage}%
          </span>
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full ${sizes[size]} overflow-hidden`}>
        <div 
          className={`${sizes[size]} bg-gradient-to-r ${colors[color]} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        >
          <div className="w-full h-full bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}