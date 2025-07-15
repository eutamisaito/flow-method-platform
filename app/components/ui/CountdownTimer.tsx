'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  hours?: number;
  minutes?: number;
  onComplete?: () => void;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'red' | 'orange' | 'purple';
  'aria-label'?: string;
}

export default function CountdownTimer({ 
  hours = 0, 
  minutes = 15, 
  onComplete,
  showIcon = true,
  size = 'md',
  color = 'red',
  'aria-label': ariaLabel
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(() => hours * 3600 + minutes * 60);
  const [error, setError] = useState<string | null>(null);
  
  // Memoize the initial time to prevent unnecessary recalculations
  const initialTime = useMemo(() => hours * 3600 + minutes * 60, [hours, minutes]);
  
  useEffect(() => {
    // Reset time if props change
    setTimeLeft(initialTime);
  }, [initialTime]);
  
  useEffect(() => {
    if (timeLeft <= 0) {
      try {
        onComplete?.();
      } catch (err) {
        console.error('Countdown completion error:', err);
        setError('Erro ao completar contador');
      }
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);
  
  const formatTime = useCallback((seconds: number) => {
    if (seconds < 0) return '00:00';
    
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);
  
  const colors = {
    red: {
      bg: 'bg-red-100 border-red-200',
      text: 'text-red-600',
      accent: 'text-red-500'
    },
    orange: {
      bg: 'bg-orange-100 border-orange-200',
      text: 'text-orange-600',
      accent: 'text-orange-500'
    },
    purple: {
      bg: 'bg-purple-100 border-purple-200',
      text: 'text-purple-600',
      accent: 'text-purple-500'
    }
  };
  
  const sizes = {
    sm: {
      container: 'px-3 py-2 text-sm',
      icon: 'w-4 h-4',
      time: 'text-sm font-mono font-bold'
    },
    md: {
      container: 'px-4 py-3 text-base',
      icon: 'w-5 h-5',
      time: 'text-lg font-mono font-bold'
    },
    lg: {
      container: 'px-6 py-4 text-lg',
      icon: 'w-6 h-6',
      time: 'text-2xl font-mono font-bold'
    }
  };
  
  const isUrgent = timeLeft < 300; // Less than 5 minutes
  const formattedTime = formatTime(timeLeft);
  
  // Error state
  if (error) {
    return (
      <div className="inline-flex items-center gap-2 rounded-lg border-2 bg-red-100 border-red-200 px-4 py-3 text-red-600">
        <span className="text-sm">Erro no contador</span>
      </div>
    );
  }
  
  return (
    <div 
      className={`
        inline-flex items-center gap-2 rounded-lg border-2 
        ${colors[color].bg} ${sizes[size].container}
        ${isUrgent ? 'animate-pulse' : ''}
        focus-within:ring-2 focus-within:ring-opacity-50 focus-within:ring-current
      `}
      role="timer"
      aria-label={ariaLabel || `Contador regressivo: ${formattedTime} restantes`}
      aria-live={isUrgent ? 'polite' : 'off'}
    >
      {showIcon && (
        <Clock 
          className={`${sizes[size].icon} ${colors[color].accent}`} 
          aria-hidden="true" 
        />
      )}
      <span className={`${colors[color].text} font-medium`}>
        Oferta expira em:
      </span>
      <span 
        className={`${sizes[size].time} ${colors[color].text}`}
        aria-label={`${formattedTime} restantes`}
      >
        {formattedTime}
      </span>
    </div>
  );
}