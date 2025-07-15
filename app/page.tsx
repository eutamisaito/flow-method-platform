'use client';

import React, { useState, useEffect } from 'react';
import { Play, Target, TrendingUp, Users, Star, CheckCircle, ArrowRight, Zap, Award, Clock, DollarSign, BarChart3, Crown } from 'lucide-react';
import AnimatedButton from './components/ui/AnimatedButton';
import StatCard from './components/ui/StatCard';
import TestimonialCard from './components/ui/TestimonialCard';
import CountdownTimer from './components/ui/CountdownTimer';

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: DollarSign, value: "R$ 2.3M", label: "Valor Médio Descoberto", color: "green" as const },
    { icon: Users, value: "2.847", label: "Profissionais Avaliados", color: "blue" as const },
    { icon: TrendingUp, value: "254%", label: "ROI Médio dos Clientes", color: "purple" as const },
    { icon: Award, value: "99.6%", label: "Economia vs Consultoria", color: "pink" as const }
  ];

  const testimonials = [
    {
      name: "Roberto Silva",
      role: "CEO",
      company: "TechCorp",
      rating: 5,
      text: "O valuation científico revelou que meus ativos intangíveis valiam R$ 2.3M. Usei o relatório para levantar investimento!",
      highlight: "Consegui R$ 5M em investimento"
    },
    {
      name: "Marina Santos",
      role: "Consultora",
      company: "BizConsult",
      rating: 5,
      text: "Descobri que estava subvalorizando meu conhecimento em 78%. Aumentei meus preços e hoje fecho 3x mais contratos.",
      highlight: "300% de aumento na receita"
    },
    {
      name: "Carlos Ferreira",
      role: "Coach Executivo",
      rating: 5,
      text: "A metodologia científica me deu credibilidade total. Agora cobro R$ 15K por projeto, antes eram R$ 3K.",
      highlight: "Preços 5x maiores"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Metodologia Científica",
      description: "3 métodos internacionais validados por McKinsey, BCG e PwC"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Autoridade Instantânea", 
      description: "Relatório de 40+ páginas que comprova seu valor real"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Valoração Precisa",
      description: "Cálculo exato dos seus 6 tipos de ativos intangíveis"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative container mx-auto px-4 py-12 lg:py-20">
          {/* Top Bar with Urgency */}
          <div className={`text-center mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <CountdownTimer hours={23} minutes={47} size="lg" />
            <p className="text-sm text-gray-600 mt-2">
              ⚡ <strong>Avaliação Gratuita</strong> por tempo limitado
            </p>
          </div>

          {/* Main Hero Content */}
          <div className="max-w-6xl mx-auto text-center">
            <div className={`mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-2 mb-6">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-sm font-semibold text-purple-800">Metodologia Científica Validada</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient mb-6 leading-tight">
                Flow Method™
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Descubra o <span className="font-bold text-purple-600">valor real dos seus ativos intangíveis</span> através de uma metodologia científica usada por McKinsey, BCG e PwC
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <AnimatedButton 
                  size="xl" 
                  icon={Play}
                  onClick={() => window.location.href = '/questionario'}
                  className="animate-pulse-glow"
                >
                  Descobrir Meu Valor Agora
                </AnimatedButton>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  100% Gratuito • 5 minutos • Resultado imediato
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2">4.9/5 (2.847 avaliações)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Usado por +10K profissionais</span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  color={stat.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Descubra Seu <span className="text-gradient">Valor Real</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pare de cobrar por tempo. Comece a cobrar pelo valor que você realmente entrega.
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 interactive hover:shadow-2xl">
                <div className="text-purple-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Identity, Influence, Legacy Pillars */}
          <div className={`grid md:grid-cols-3 gap-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '1s'}}>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white interactive">
              <Target className="w-12 h-12 mb-4 opacity-90" />
              <h3 className="text-2xl font-semibold mb-4">Identidade</h3>
              <p className="opacity-90 leading-relaxed">
                Clareza de propósito, valores e talentos únicos que definem quem você é e como se posiciona no mercado.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl shadow-xl p-8 text-white interactive">
              <TrendingUp className="w-12 h-12 mb-4 opacity-90" />
              <h3 className="text-2xl font-semibold mb-4">Influência</h3>
              <p className="opacity-90 leading-relaxed">
                Capacidade de impactar, inspirar e transformar outros através de sua presença, conhecimento e ações.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl shadow-xl p-8 text-white interactive">
              <Users className="w-12 h-12 mb-4 opacity-90" />
              <h3 className="text-2xl font-semibold mb-4">Legado</h3>
              <p className="opacity-90 leading-relaxed">
                Impacto duradouro que transcende sua presença física e beneficia gerações futuras de profissionais.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '1.2s'}}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Resultados <span className="text-gradient">Reais</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como profissionais como você descobriram e maximizaram seu valor
            </p>
          </div>

          <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fadeInScale' : 'opacity-0'}`} style={{animationDelay: '1.4s'}}>
            <TestimonialCard {...testimonials[currentTestimonial]} />
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-16 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '1.6s'}}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pronto para Descobrir Seu Valor Real?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de profissionais que já descobriram e maximizaram seus ativos intangíveis
            </p>
            
            <AnimatedButton 
              size="xl"
              variant="secondary"
              icon={ArrowRight}
              onClick={() => window.location.href = '/questionario'}
              className="mb-6"
            >
              Começar Avaliação Gratuita
            </AnimatedButton>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-purple-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Resultado imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>100% científico</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 bg-gray-900 text-center">
        <p className="text-gray-400">
          © 2025 Flow Method™ - Desenvolvido por Tami Saito • Metodologia Científica Validada
        </p>
      </div>
    </div>
  );
}
