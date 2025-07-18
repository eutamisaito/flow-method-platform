'use client';

import React from 'react';

interface SkeletonLoaderProps {
  variant?: 'text' | 'avatar' | 'card' | 'button';
  width?: string;
  height?: string;
  className?: string;
  lines?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  variant = 'text',
  width,
  height,
  className = '',
  lines = 1
}) => {
  const baseClasses = 'skeleton animate-pulse bg-gray-200 rounded';
  
  const variantClasses = {
    text: 'skeleton-text h-4 w-full mb-2',
    avatar: 'skeleton-avatar w-12 h-12 rounded-full',
    card: 'w-full h-32 rounded-lg',
    button: 'h-10 w-24 rounded-full'
  };

  const style = {
    width: width || undefined,
    height: height || undefined
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${variantClasses[variant]}`}
            style={{
              ...style,
              width: index === lines - 1 ? '75%' : '100%'
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
};

// Componente para skeleton de card completo
export const CardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`card-modern p-6 ${className}`}>
    <div className="flex items-center gap-3 mb-4">
      <SkeletonLoader variant="avatar" width="12px" height="12px" />
      <SkeletonLoader variant="text" width="120px" />
    </div>
    <SkeletonLoader variant="text" lines={3} />
  </div>
);

// Componente para skeleton de botão
export const ButtonSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <SkeletonLoader variant="button" className={`btn-primary-mega ${className}`} />
);

// Componente para skeleton de lista
export const ListSkeleton: React.FC<{ items?: number; className?: string }> = ({ 
  items = 3, 
  className = '' 
}) => (
  <div className={`space-y-4 ${className}`}>
    {Array.from({ length: items }).map((_, index) => (
      <div key={index} className="flex items-center gap-4">
        <SkeletonLoader variant="avatar" />
        <div className="flex-1">
          <SkeletonLoader variant="text" width="200px" />
          <SkeletonLoader variant="text" width="150px" />
        </div>
      </div>
    ))}
  </div>
);

export default SkeletonLoader;