'use client';

import React from 'react';
import { Play, Target, TrendingUp, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-purple-900 mb-6">
              Flow Method™
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Descubra, desenvolva e maximize seu valor intangível através de uma metodologia 
              científica baseada nos pilares de Identidade, Influência e Legado.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl py-4 px-8 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-3 mx-auto">
              <Play className="w-6 h-6" />
              Iniciar Avaliação
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Identidade</h3>
              <p className="text-gray-600">
                Clareza de propósito, valores e talentos únicos que definem quem você é.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Influência</h3>
              <p className="text-gray-600">
                Capacidade de impactar e inspirar outros através de sua presença e ações.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Legado</h3>
              <p className="text-gray-600">
                Impacto duradouro que transcende sua presença física e beneficia gerações futuras.
              </p>
            </div>
          </div>

          <div className="text-center text-gray-600 text-sm">
            <p>© 2025 Flow Method™ - Desenvolvido por Tami Saito</p>
          </div>
        </div>
      </div>
    </div>
  );
}
