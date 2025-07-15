'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Play, Target, TrendingUp, Users, Star, CheckCircle, ArrowRight, Zap, Award, Clock, DollarSign, BarChart3, Crown, Shield, Download } from 'lucide-react';
import AnimatedButton from './components/ui/AnimatedButton';
import StatCard from './components/ui/StatCard';
import TestimonialCard from './components/ui/TestimonialCard';
import CountdownTimer from './components/ui/CountdownTimer';

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Memoize the navigation function to prevent unnecessary re-renders
  const navigateToQuestionnaire = useCallback(() => {
    try {
      window.location.href = '/questionario';
    } catch (err) {
      setError('Erro ao navegar para o questionário. Tente novamente.');
      console.error('Navigation error:', err);
    }
  }, []);

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
      icon: <Zap className="w-8 h-8" aria-hidden="true" />,
      title: "Metodologia Científica",
      description: "3 métodos internacionais validados por McKinsey, BCG e PwC"
    },
    {
      icon: <Crown className="w-8 h-8" aria-hidden="true" />,
      title: "Autoridade Instantânea", 
      description: "Relatório de 40+ páginas que comprova seu valor real"
    },
    {
      icon: <BarChart3 className="w-8 h-8" aria-hidden="true" />,
      title: "Valoração Precisa",
      description: "Cálculo exato dos seus 6 tipos de ativos intangíveis"
    }
  ];

  // Error boundary component
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="text-center p-8">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ops! Algo deu errado</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      {/* Sticky Top Bar with Urgency */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-center gap-4">
          <Clock className="w-4 h-4" aria-hidden="true" />
          <span className="text-sm font-semibold">🔥 OFERTA LIMITADA:</span>
          <CountdownTimer hours={23} minutes={47} size="sm" />
          <span className="text-sm">Avaliação GRATUITA expira em breve!</span>
        </div>
      </div>

      {/* Hero Section - Optimized Above the Fold */}
      <section className="relative" aria-labelledby="hero-heading">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative container mx-auto px-4 py-8 lg:py-16">
          {/* Trust Signals Header */}
          <div className={`text-center mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="flex justify-center items-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-700">Metodologia Científica</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-700">4.9/5 (2.847 avaliações)</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-700">+10K profissionais</span>
              </div>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="max-w-5xl mx-auto text-center">
            <div className={`mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-2 mb-6">
                <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                <span className="text-sm font-bold text-green-800">✅ VALIDADO POR McKINSEY, BCG E PwC</span>
              </div>
              
              <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-black text-gradient mb-6 leading-tight">
                Descubra o Valor Real dos Seus<br />
                <span className="text-purple-600">Ativos Intangíveis</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
                Pare de cobrar por tempo. A metodologia científica <span className="font-bold text-purple-600">Flow Method™</span> revela quanto você realmente vale - e como aumentar seus preços em até <span className="font-bold text-green-600">300%</span>
              </p>

              {/* Primary CTA Section */}
              <div className="mb-8">
                <AnimatedButton 
                  size="xl" 
                  icon={Download}
                  onClick={navigateToQuestionnaire}
                  className="animate-pulse-glow text-xl py-6 px-12 mb-4"
                  aria-label="Baixar relatório gratuito do Flow Method"
                >
                  📊 BAIXAR RELATÓRIO GRATUITO
                </AnimatedButton>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                    Relatório de 40+ páginas • Resultado em 5 minutos
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                    100% Gratuito • Sem cartão de crédito
                  </div>
                </div>
              </div>

              {/* Value Proposition Bullets */}
              <div className="grid md:grid-cols-3 gap-4 mb-8 text-left">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                    <span className="font-semibold text-gray-900">Descubra seu valor real</span>
                  </div>
                  <p className="text-sm text-gray-600">Cálculo preciso dos seus 6 tipos de ativos intangíveis</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" aria-hidden="true"></div>
                    <span className="font-semibold text-gray-900">Aumente seus preços</span>
                  </div>
                  <p className="text-sm text-gray-600">Justificativa científica para cobrar 3x mais</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true"></div>
                    <span className="font-semibold text-gray-900">Ganhe credibilidade</span>
                  </div>
                  <p className="text-sm text-gray-600">Relatório profissional validado por consultorias top</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats - Moved Up */}
      <section className="py-8 bg-white/70 backdrop-blur-sm border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
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
      </section>

      {/* Testimonials Section - Moved Up for Social Proof */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veja os Resultados <span className="text-gradient">Reais</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profissionais que descobriram seu valor real e multiplicaram seus ganhos
            </p>
          </div>

          <div className={`max-w-4xl mx-auto mb-6 ${isVisible ? 'animate-fadeInScale' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
            <TestimonialCard {...testimonials[currentTestimonial]} />
          </div>

          <div className="flex justify-center gap-2 mb-8" role="tablist" aria-label="Navegação de depoimentos">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-300 ${
                  index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                }`}
                role="tab"
                aria-selected={index === currentTestimonial}
                aria-label={`Depoimento ${index + 1} de ${testimonials.length}`}
              />
            ))}
          </div>

          {/* Secondary CTA */}
          <div className="text-center">
            <AnimatedButton 
              size="lg"
              icon={ArrowRight}
              onClick={navigateToQuestionnaire}
              className="mb-4"
              aria-label="Quero descobrir meu valor real"
            >
              Quero Descobrir Meu Valor Real
            </AnimatedButton>
            <p className="text-sm text-gray-500">Junte-se a mais de 10.000 profissionais</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/50" aria-labelledby="benefits-heading">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '1s'}}>
            <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Por Que o Flow Method™ é Diferente?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A única metodologia científica que calcula o valor real dos seus ativos intangíveis
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '1.2s'}}>
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 interactive hover:shadow-2xl focus-within:ring-4 focus-within:ring-purple-300 border border-gray-100">
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
          <div className={`grid md:grid-cols-3 gap-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '1.4s'}}>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white interactive focus-within:ring-4 focus-within:ring-purple-300">
              <Target className="w-12 h-12 mb-4 opacity-90" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-4">Identidade</h3>
              <p className="opacity-90 leading-relaxed">
                Clareza de propósito, valores e talentos únicos que definem quem você é e como se posiciona no mercado.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl shadow-xl p-8 text-white interactive focus-within:ring-4 focus-within:ring-pink-300">
              <TrendingUp className="w-12 h-12 mb-4 opacity-90" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-4">Influência</h3>
              <p className="opacity-90 leading-relaxed">
                Capacidade de impactar, inspirar e transformar outros através de sua presença, conhecimento e ações.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl shadow-xl p-8 text-white interactive focus-within:ring-4 focus-within:ring-indigo-300">
              <Users className="w-12 h-12 mb-4 opacity-90" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-4">Legado</h3>
              <p className="opacity-90 leading-relaxed">
                Impacto duradouro que transcende sua presença física e beneficia gerações futuras de profissionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Stronger Urgency */}
      <section className="py-16 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 relative overflow-hidden" aria-labelledby="cta-heading">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-black/20" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '1.6s'}}>
            <div className="mb-6">
              <span className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                🚨 ÚLTIMAS VAGAS DISPONÍVEIS
              </span>
              <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold text-white mb-4">
                Descubra Seu Valor Real<br />
                <span className="text-yellow-300">Antes Que Seja Tarde</span>
              </h2>
              <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
                Mais de 10.000 profissionais já descobriram que valiam muito mais do que imaginavam
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">O que você vai receber:</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center gap-3 text-purple-100">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
                      <span>Relatório completo de 40+ páginas</span>
                    </li>
                    <li className="flex items-center gap-3 text-purple-100">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
                      <span>Valoração científica dos seus ativos</span>
                    </li>
                    <li className="flex items-center gap-3 text-purple-100">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
                      <span>Plano de ação personalizado</span>
                    </li>
                    <li className="flex items-center gap-3 text-purple-100">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
                      <span>Justificativa para aumentar preços</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white block">R$ 0</span>
                    <span className="text-purple-200 line-through text-lg">R$ 2.997</span>
                  </div>
                  <div className="mb-4">
                    <CountdownTimer hours={23} minutes={47} size="lg" />
                  </div>
                  <p className="text-sm text-purple-200">
                    Economia de 100% por tempo limitado
                  </p>
                </div>
              </div>
              
              <AnimatedButton 
                size="xl"
                variant="success"
                icon={Download}
                onClick={navigateToQuestionnaire}
                className="w-full md:w-auto text-2xl py-6 px-16 mb-4 animate-pulse-glow"
                aria-label="Baixar relatório gratuito agora"
              >
                📊 BAIXAR RELATÓRIO GRATUITO AGORA
              </AnimatedButton>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-purple-200">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" aria-hidden="true" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span>Resultado em 5 min</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" aria-hidden="true" />
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" aria-hidden="true" />
                <span>Metodologia científica</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-400 mb-4">
            © 2025 Flow Method™ - Desenvolvido por Tami Saito
          </p>
          <p className="text-sm text-gray-500">
            Metodologia Científica Validada por McKinsey, BCG e PwC
          </p>
        </div>
      </footer>
    </div>
  );
}
