'use client';

import React, { useMemo } from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  showNumbers?: boolean;
  color?: 'purple' | 'blue' | 'green' | 'pink';
  size?: 'sm' | 'md' | 'lg';
  'aria-label'?: string;
}

export default function ProgressBar({ 
  current, 
  total, 
  showNumbers = true, 
  color = 'purple',
  size = 'md',
  'aria-label': ariaLabel
}: ProgressBarProps) {
  // Validate inputs and calculate percentage
  const validCurrent = Math.max(0, Math.min(total, current));
  const validTotal = Math.max(1, total);
  const percentage = useMemo(() => Math.round((validCurrent / validTotal) * 100), [validCurrent, validTotal]);
  
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

  const defaultAriaLabel = `Progresso: ${validCurrent} de ${validTotal} (${percentage}%)`;

  return (
    <div className="w-full" role="progressbar" aria-label={ariaLabel || defaultAriaLabel} aria-valuenow={validCurrent} aria-valuemin={0} aria-valuemax={validTotal}>
      {showNumbers && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Pergunta {validCurrent} de {validTotal}
          </span>
          <span className="text-sm font-bold text-purple-600">
            {percentage}%
          </span>
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full ${sizes[size]} overflow-hidden`}>
        <div 
          className={`${sizes[size]} bg-gradient-to-r ${colors[color]} rounded-full transition-all duration-500 ease-out relative`}
          style={{ width: `${percentage}%` }}
          aria-hidden="true"
        >
          <div className="w-full h-full bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}