'use client';

import React, { useState, useEffect } from 'react';
import { Play, Users, Star, CheckCircle, Rocket, Shield, Trophy } from 'lucide-react';
import RippleButton from './components/ui/RippleButton';
import DarkModeToggle from './components/ui/DarkModeToggle';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navigateToQuestionnaire = () => {
    window.location.href = '/questionario';
  };

  const navigateToDemo = () => {
    const demoSection = document.querySelector('#demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/questionario';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden relative">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="floating-element w-20 h-20 bg-purple-200 top-1/4 left-1/4 mix-blend-multiply filter blur-xl opacity-40"></div>
        <div className="floating-element w-32 h-32 bg-pink-200 top-3/4 right-1/4 mix-blend-multiply filter blur-xl opacity-40"></div>
        <div className="floating-element w-24 h-24 bg-blue-200 top-1/2 left-3/4 mix-blend-multiply filter blur-xl opacity-40"></div>
      </div>

      {/* Navigation Enhanced */}
      <nav className="nav fixed top-0 left-0 right-0 z-50">
        <div className="nav-container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-purple-600">Flow Method™</a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#pilares" className="text-gray-700 hover:text-purple-600 transition-colors">Pilares</a>
            <a href="#ferramentas" className="text-gray-700 hover:text-purple-600 transition-colors">Ferramentas</a>
            <a href="#resultados" className="text-gray-700 hover:text-purple-600 transition-colors">Resultados</a>
            <a href="#sobre" className="text-gray-700 hover:text-purple-600 transition-colors">Sobre</a>
          </div>
          
          <div className="flex items-center gap-4">
            <DarkModeToggle />
            <RippleButton 
              onClick={navigateToQuestionnaire}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full"
            >
              Comece Agora
            </RippleButton>
          </div>
        </div>
      </nav>

      {/* Hero Section Enhanced */}
      <section className="hero-enhanced relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="hero-bg absolute inset-0 bg-gradient-mesh opacity-30" aria-hidden="true"></div>
        
        <div className="hero-content relative z-10 text-center max-w-6xl mx-auto px-4">
          {/* Badges */}
          <div className={`mb-8 ${isVisible ? 'text-reveal' : 'opacity-0'}`}>
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
              <div className="flex items-center gap-2 glass-advanced rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-gray-700">Metodologia Científica</span>
              </div>
              <div className="flex items-center gap-2 glass-advanced rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-sm font-bold text-gray-700">4.9/5 (2.847 avaliações)</span>
              </div>
              <div className="flex items-center gap-2 glass-advanced rounded-full px-4 py-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-bold text-gray-700">+10K profissionais</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className={`mb-8 ${isVisible ? 'text-reveal-delay-1' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 via-emerald-100 to-green-100 rounded-full px-6 py-3 mb-8">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-bold text-green-800">✅ FLOW METHOD™ - AUTORIDADE DE MERCADO</span>
              <Trophy className="w-5 h-5 text-green-600" />
            </div>
            
            <h1 className="hero-title-mega text-gradient-animated-mega mb-8 leading-none">
              Transforme sua
              <span className="block text-gradient-animated-mega">Expertise</span>
              em Autoridade
            </h1>
            
            <p className="hero-subtitle-mega text-gray-600 mb-12 max-w-4xl mx-auto">
              Arsenal completo de <span className="font-bold text-gradient-animated-mega">30+ ferramentas proprietárias</span> para líderes que querem se tornar <span className="font-bold text-purple-600">referências</span> no mercado
            </p>

            {/* CTA Buttons */}
            <div className={`hero-buttons flex flex-col sm:flex-row gap-6 justify-center mb-8 ${isVisible ? 'text-reveal-delay-2' : 'opacity-0'}`}>
              <RippleButton 
                size="xl"
                className="btn-primary-mega"
                onClick={navigateToQuestionnaire}
              >
                <Rocket className="w-6 h-6 mr-2" />
                🎯 Diagnóstico Gratuito
              </RippleButton>
              
              <RippleButton 
                size="lg"
                variant="secondary"
                className="btn-secondary-mega"
                onClick={navigateToDemo}
              >
                <Play className="w-6 h-6 mr-2" />
                ▶️ Ver Demo
              </RippleButton>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="card-modern card-3d p-6 optimized-animation">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
                  <span className="font-bold text-gray-900 text-lg">Identidade de Autoridade</span>
                </div>
                <p className="text-gray-600 leading-relaxed">Construa uma identidade única através de essência, expressão e impacto autênticos</p>
              </div>
              
              <div className="card-modern card-3d p-6 optimized-animation">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                  <span className="font-bold text-gray-900 text-lg">Influência Estratégica</span>
                </div>
                <p className="text-gray-600 leading-relaxed">Desenvolva influência autêntica através de autoridade, visibilidade e conexão</p>
              </div>
              
              <div className="card-modern card-3d p-6 optimized-animation">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
                  <span className="font-bold text-gray-900 text-lg">Legado Duradouro</span>
                </div>
                <p className="text-gray-600 leading-relaxed">Crie impacto duradouro através de criação, amplificação e perpetuação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">R$ 2.3M</div>
              <div className="text-gray-600">Valor Médio Descoberto</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2.847</div>
              <div className="text-gray-600">Profissionais Avaliados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">254%</div>
              <div className="text-gray-600">ROI Médio dos Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">99.6%</div>
              <div className="text-gray-600">Economia vs Consultoria</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">Flow Method™</div>
          <p className="text-gray-400 mb-8">Transformando expertise em autoridade de mercado</p>
          <div className="flex justify-center gap-8">
            <a href="/questionario" className="text-gray-400 hover:text-white transition-colors">Diagnóstico</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}