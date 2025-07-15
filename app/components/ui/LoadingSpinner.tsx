'use client';

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'purple' | 'white' | 'gray';
  text?: string;
  'aria-label'?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'purple',
  text,
  'aria-label': ariaLabel
}: LoadingSpinnerProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colors = {
    purple: 'border-purple-600',
    white: 'border-white',
    gray: 'border-gray-600'
  };

  const defaultAriaLabel = text || 'Carregando...';

  return (
    <div className="flex flex-col items-center justify-center gap-3" role="status" aria-label={ariaLabel || defaultAriaLabel}>
      <div 
        className={`${sizes[size]} border-2 border-gray-200 border-t-current rounded-full animate-spin ${colors[color]}`}
        aria-hidden="true"
      />
      {text && (
        <span className="text-sm text-gray-600 animate-pulse">
          {text}
        </span>
      )}
    </div>
  );
}