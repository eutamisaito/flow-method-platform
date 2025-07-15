'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  rating: number;
  text: string;
  highlight?: string;
  'aria-label'?: string;
}

export default function TestimonialCard({ 
  name, 
  role, 
  company, 
  avatar, 
  rating, 
  text, 
  highlight,
  'aria-label': ariaLabel
}: TestimonialCardProps) {
  // Validate rating
  const validRating = Math.max(0, Math.min(5, rating));
  
  const defaultAriaLabel = `Depoimento de ${name}, ${role}${company ? ` na ${company}` : ''}, avaliação ${validRating} de 5 estrelas`;

  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 focus-within:ring-4 focus-within:ring-purple-300 focus-within:ring-opacity-50"
      role="article"
      aria-label={ariaLabel || defaultAriaLabel}
      tabIndex={0}
    >
      {/* Quote Icon */}
      <div className="flex justify-center mb-4" aria-hidden="true">
        <Quote className="w-8 h-8 text-purple-400" />
      </div>
      
      {/* Rating */}
      <div 
        className="flex justify-center gap-1 mb-4"
        role="img"
        aria-label={`Avaliação ${validRating} de 5 estrelas`}
      >
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < validRating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            aria-hidden="true"
          />
        ))}
      </div>
      
      {/* Testimonial Text */}
      <blockquote 
        className="text-gray-600 text-center mb-6 leading-relaxed"
        cite={`${name}, ${role}${company ? ` na ${company}` : ''}`}
      >
        <span className="sr-only">Depoimento:</span>
        "{text}"
        {highlight && (
          <span className="block mt-2 text-purple-600 font-semibold">
            {highlight}
          </span>
        )}
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center justify-center gap-3">
        {avatar ? (
          <img 
            src={avatar} 
            alt={`Foto de ${name}`}
            className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
            onError={(e) => {
              // Fallback to initials if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
        ) : null}
        <div 
          className={`w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold ${avatar ? 'hidden' : ''}`}
          aria-hidden="true"
        >
          {name.charAt(0).toUpperCase()}
        </div>
        <div className="text-center">
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">
            {role}{company && ` • ${company}`}
          </div>
        </div>
      </div>
    </div>
  );
}