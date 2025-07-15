'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function AnimatedButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon,
  loading = false,
  disabled = false,
  className = '',
  'aria-label': ariaLabel,
  type = 'button'
}: AnimatedButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-3 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100 min-h-[44px] min-w-[44px]";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl focus:ring-purple-300 focus:ring-opacity-50",
    secondary: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300 shadow-md hover:shadow-lg focus:ring-gray-300 focus:ring-opacity-50",
    success: "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl focus:ring-green-300 focus:ring-opacity-50",
    danger: "bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700 shadow-lg hover:shadow-xl focus:ring-red-300 focus:ring-opacity-50"
  };
  
  const sizes = {
    sm: "text-sm py-2 px-4",
    md: "text-base py-3 px-6",
    lg: "text-lg py-4 px-8",
    xl: "text-xl py-5 px-10"
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    
    try {
      onClick?.();
    } catch (error) {
      console.error('Button click error:', error);
      // You could add error handling here, like showing a toast notification
    }
  };

  const buttonContent = loading ? (
    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current" aria-hidden="true"></div>
  ) : (
    <>
      {Icon && <Icon className="w-5 h-5" aria-hidden="true" />}
      {children}
    </>
  );

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      aria-label={ariaLabel}
      aria-disabled={disabled || loading}
      aria-busy={loading}
    >
      {buttonContent}
    </button>
  );
}