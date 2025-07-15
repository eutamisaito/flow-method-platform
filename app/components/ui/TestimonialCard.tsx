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
}

export default function TestimonialCard({ 
  name, 
  role, 
  company, 
  avatar, 
  rating, 
  text, 
  highlight 
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
      {/* Quote Icon */}
      <div className="flex justify-center mb-4">
        <Quote className="w-8 h-8 text-purple-400" />
      </div>
      
      {/* Rating */}
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      {/* Testimonial Text */}
      <blockquote className="text-gray-600 text-center mb-6 leading-relaxed">
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
            alt={name}
            className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold">
            {name.charAt(0)}
          </div>
        )}
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