'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  color?: 'purple' | 'blue' | 'green' | 'pink' | 'orange';
  'aria-label'?: string;
}

export default function StatCard({ 
  icon: Icon, 
  value, 
  label, 
  trend = 'neutral', 
  trendValue,
  color = 'purple',
  'aria-label': ariaLabel
}: StatCardProps) {
  const colors = {
    purple: {
      bg: 'from-purple-500 to-purple-600',
      icon: 'text-purple-100',
      text: 'text-purple-50'
    },
    blue: {
      bg: 'from-blue-500 to-blue-600',
      icon: 'text-blue-100',
      text: 'text-blue-50'
    },
    green: {
      bg: 'from-green-500 to-green-600',
      icon: 'text-green-100',
      text: 'text-green-50'
    },
    pink: {
      bg: 'from-pink-500 to-pink-600',
      icon: 'text-pink-100',
      text: 'text-pink-50'
    },
    orange: {
      bg: 'from-orange-500 to-orange-600',
      icon: 'text-orange-100',
      text: 'text-orange-50'
    }
  };

  const trendColors = {
    up: 'text-green-400',
    down: 'text-red-400',
    neutral: 'text-gray-300'
  };

  const trendIcons = {
    up: '↗',
    down: '↘',
    neutral: '→'
  };

  const defaultAriaLabel = `${label}: ${value}${trendValue ? `, tendência ${trend === 'up' ? 'positiva' : trend === 'down' ? 'negativa' : 'neutra'} ${trendValue}` : ''}`;

  return (
    <div 
      className={`relative overflow-hidden bg-gradient-to-br ${colors[color].bg} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus-within:ring-4 focus-within:ring-white focus-within:ring-opacity-50`}
      role="article"
      aria-label={ariaLabel || defaultAriaLabel}
      tabIndex={0}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mr-4 -mt-4" aria-hidden="true">
        <div className="w-20 h-20 bg-white/10 rounded-full"></div>
      </div>
      <div className="absolute bottom-0 left-0 -ml-4 -mb-4" aria-hidden="true">
        <div className="w-16 h-16 bg-white/10 rounded-full"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <Icon 
            className={`w-8 h-8 ${colors[color].icon}`} 
            aria-hidden="true"
          />
          {trendValue && (
            <span 
              className={`text-sm font-medium ${trendColors[trend]}`}
              aria-label={`Tendência ${trend === 'up' ? 'positiva' : trend === 'down' ? 'negativa' : 'neutra'}: ${trendValue}`}
            >
              {trendIcons[trend]} {trendValue}
            </span>
          )}
        </div>
        
        <div className={`text-3xl font-bold ${colors[color].text} mb-2`}>
          {value}
        </div>
        
        <div className={`text-sm ${colors[color].text} opacity-90`}>
          {label}
        </div>
      </div>
    </div>
  );
}