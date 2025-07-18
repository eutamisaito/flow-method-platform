'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Play, Target, TrendingUp, Users, Star, CheckCircle, ArrowRight, Zap, Award, Clock, DollarSign, BarChart3, Crown, Shield, Download, Sparkles, Rocket, Trophy } from 'lucide-react';
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
      role: "Diretora de Marketing",
      company: "Inovação Digital",
      rating: 5,
      text: "Descobri que minha expertise valia 300% mais do que eu cobrava. Agora trabalho menos e ganho muito mais.",
      highlight: "Triplicou seus preços"
    },
    {
      name: "Carlos Eduardo",
      role: "Consultor",
      company: "Estratégia & Resultados",
      rating: 5,
      text: "O relatório me deu a confiança para cobrar R$ 15k por projeto. Antes cobrava R$ 3k. Metodologia incrível!",
      highlight: "Aumentou 500% seus preços"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Metodologia Científica",
      description: "Baseada em pesquisas de Harvard, MIT e validada por McKinsey, BCG e PwC. Não é achismo, é ciência aplicada ao seu valor."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Cálculo Preciso",
      description: "Algoritmo proprietário que analisa 47 variáveis para determinar o valor real dos seus 6 tipos de ativos intangíveis."
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Posicionamento Premium",
      description: "Justificativa científica para cobrar preços premium. Saia da concorrência por preço e entre na diferenciação por valor."
    }
  ];

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Oops! Algo deu errado</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => setError(null)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden relative">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="floating-element w-20 h-20 bg-purple-200 top-1/4 left-1/4 mix-blend-multiply filter blur-xl opacity-40"></div>
        <div className="floating-element w-32 h-32 bg-pink-200 top-3/4 right-1/4 mix-blend-multiply filter blur-xl opacity-40"></div>
        <div className="floating-element w-24 h-24 bg-blue-200 top-1/2 left-3/4 mix-blend-multiply filter blur-xl opacity-40"></div>
      </div>

      {/* Sticky Top Bar with Enhanced Urgency */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-red-600 via-red-700 to-red-600 bg-gradient-animated text-white py-3 px-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-center gap-4">
          <div className="animate-wave">
            <Clock className="w-4 h-4" aria-hidden="true" />
          </div>
          <span className="text-sm font-bold sparkle">🔥 OFERTA LIMITADA:</span>
          <CountdownTimer hours={23} minutes={47} size="sm" />
          <span className="text-sm font-medium">Avaliação GRATUITA expira em breve!</span>
          <Sparkles className="w-4 h-4 animate-sparkle" aria-hidden="true" />
        </div>
      </div>

      {/* Hero Section - Enhanced Above the Fold */}
      <section className="relative" aria-labelledby="hero-heading">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-300 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-300 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative container mx-auto px-4 py-8 lg:py-16">
          {/* Enhanced Trust Signals Header */}
          <div className={`text-center mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="flex flex-wrap justify-center items-center gap-6 mb-4">
              <div className="flex items-center gap-2 glass-strong rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-green-500" aria-hidden="true" />
                <span className="text-sm font-bold text-gray-700">Metodologia Científica</span>
              </div>
              <div className="flex items-center gap-2 glass-strong rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current animate-sparkle" aria-hidden="true" />
                <span className="text-sm font-bold text-gray-700">4.9/5 (2.847 avaliações)</span>
              </div>
              <div className="flex items-center gap-2 glass-strong rounded-full px-4 py-2">
                <Users className="w-5 h-5 text-blue-500" aria-hidden="true" />
                <span className="text-sm font-bold text-gray-700">+10K profissionais</span>
              </div>
            </div>
          </div>

          {/* Enhanced Main Hero Content */}
          <div className="max-w-5xl mx-auto text-center">
            <div className={`mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 via-emerald-100 to-green-100 rounded-full px-6 py-3 mb-6 card-elevated">
                <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                <span className="text-sm font-bold text-green-800">✅ VALIDADO POR McKINSEY, BCG E PwC</span>
                <Trophy className="w-5 h-5 text-green-600 animate-bounce-in" aria-hidden="true" />
              </div>
              
              <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-black text-gradient-animated mb-6 leading-tight">
                Descubra o Valor Real dos Seus<br />
                <span className="text-gradient-purple sparkle">Ativos Intangíveis</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
                Pare de cobrar por tempo. A metodologia científica <span className="font-bold text-gradient-purple">Flow Method™</span> revela quanto você realmente vale - e como aumentar seus preços em até <span className="font-bold text-gradient-success animate-pulse-glow">300%</span>
              </p>

              {/* Enhanced Primary CTA Section */}
              <div className="mb-8">
                <div className="relative inline-block">
                  <AnimatedButton 
                    size="xl" 
                    icon={Download}
                    onClick={navigateToQuestionnaire}
                    className="animate-pulse-glow text-xl py-6 px-12 mb-4 btn-glow sparkle relative z-10"
                    aria-label="Baixar relatório gratuito do Flow Method"
                  >
                    <Rocket className="w-6 h-6 mr-2" aria-hidden="true" />
                    📊 BAIXAR RELATÓRIO GRATUITO
                  </AnimatedButton>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-xl opacity-30 animate-pulse-glow"></div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 glass rounded-full px-4 py-2">
                    <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                    Relatório de 40+ páginas • Resultado em 5 minutos
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 glass rounded-full px-4 py-2">
                    <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                    100% Gratuito • Sem cartão de crédito
                  </div>
                </div>
              </div>

              {/* Enhanced Value Proposition Bullets */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className={`card-elevated rounded-xl p-6 border border-gray-200 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse" aria-hidden="true"></div>
                    <span className="font-bold text-gray-900 text-lg">Descubra seu valor real</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">Cálculo preciso dos seus 6 tipos de ativos intangíveis com metodologia científica</p>
                </div>
                <div className={`card-elevated rounded-xl p-6 border border-gray-200 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" aria-hidden="true"></div>
                    <span className="font-bold text-gray-900 text-lg">Aumente seus preços</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">Justificativa científica para cobrar 3x mais com confiança e credibilidade</p>
                </div>
                <div className={`card-elevated rounded-xl p-6 border border-gray-200 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse" aria-hidden="true"></div>
                    <span className="font-bold text-gray-900 text-lg">Ganhe credibilidade</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">Relatório profissional validado pelas principais consultorias do mundo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Social Proof Stats */}
      <section className="py-12 glass-strong border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
            {stats.map((stat, index) => (
              <div key={index} className={`animate-fadeInUp`} style={{animationDelay: `${1 + index * 0.1}s`}}>
                <StatCard
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  color={stat.color}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-purple-50" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
            <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-bold text-gradient-animated mb-6">
              Veja os Resultados <span className="sparkle">Reais</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Profissionais que descobriram seu valor real e multiplicaram seus ganhos com metodologia científica
            </p>
          </div>

          <div className={`max-w-4xl mx-auto mb-8 ${isVisible ? 'animate-fadeInScale' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
            <div className="card-elevated rounded-2xl overflow-hidden">
              <TestimonialCard {...testimonials[currentTestimonial]} />
            </div>
          </div>

          <div className="flex justify-center gap-3 mb-8" role="tablist" aria-label="Navegação de depoimentos">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-300 ${
                  index === currentTestimonial 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                role="tab"
                aria-selected={index === currentTestimonial}
                aria-label={`Depoimento ${index + 1} de ${testimonials.length}`}
              />
            ))}
          </div>

          {/* Enhanced Secondary CTA */}
          <div className="text-center">
            <AnimatedButton 
              size="lg"
              icon={ArrowRight}
              onClick={navigateToQuestionnaire}
              className="mb-4 btn-glow"
              aria-label="Quero descobrir meu valor real"
            >
              <Sparkles className="w-5 h-5 mr-2" aria-hidden="true" />
              Quero Descobrir Meu Valor Real
            </AnimatedButton>
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <Users className="w-4 h-4" aria-hidden="true" />
              Junte-se a mais de 10.000 profissionais de sucesso
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-20 glass relative overflow-hidden" aria-labelledby="benefits-heading">
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '1s'}}>
            <h2 id="benefits-heading" className="text-3xl md:text-5xl font-bold text-gradient-animated mb-6">
              Por Que o Flow Method™ é <span className="sparkle">Diferente?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A única metodologia científica que calcula o valor real dos seus ativos intangíveis
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '1.2s'}}>
            {benefits.map((benefit, index) => (
              <div key={index} className={`card-elevated rounded-2xl shadow-xl p-8 interactive hover:shadow-2xl focus-within:ring-4 focus-within:ring-purple-300 border border-gray-100 animate-fadeInUp`} style={{animationDelay: `${1.4 + index * 0.2}s`}}>
                <div className="text-gradient-purple mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Enhanced Identity, Influence, Legacy Pillars */}
          <div className={`grid md:grid-cols-3 gap-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '1.4s'}}>
            <div className="bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-2xl shadow-2xl p-8 text-white interactive focus-within:ring-4 focus-within:ring-purple-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
              <Target className="w-12 h-12 mb-6 opacity-90" aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-4">Identidade</h3>
              <p className="opacity-90 leading-relaxed">
                Clareza de propósito, valores e talentos únicos que definem quem você é e como se posiciona no mercado.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700 rounded-2xl shadow-2xl p-8 text-white interactive focus-within:ring-4 focus-within:ring-pink-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
              <TrendingUp className="w-12 h-12 mb-6 opacity-90" aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-4">Influência</h3>
              <p className="opacity-90 leading-relaxed">
                Capacidade de impactar, inspirar e transformar outros através de sua presença, conhecimento e ações.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 rounded-2xl shadow-2xl p-8 text-white interactive focus-within:ring-4 focus-within:ring-indigo-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
              <Users className="w-12 h-12 mb-6 opacity-90" aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-4">Legado</h3>
              <p className="opacity-90 leading-relaxed">
                Impacto duradouro que transcende sua presença física e beneficia gerações futuras de profissionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA Section */}
      <section className="py-20 bg-gradient-animated relative overflow-hidden" aria-labelledby="cta-heading">
        {/* Enhanced Background pattern */}
        <div className="absolute inset-0 bg-black/20" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="floating-element w-40 h-40 bg-white/10 top-1/4 left-1/4"></div>
          <div className="floating-element w-32 h-32 bg-white/10 top-3/4 right-1/4"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`max-w-5xl mx-auto ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '1.6s'}}>
            <div className="mb-8">
              <div className="inline-block bg-red-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 animate-pulse-glow sparkle">
                🚨 ÚLTIMAS VAGAS DISPONÍVEIS
              </div>
              <h2 id="cta-heading" className="text-3xl md:text-6xl font-bold text-white mb-6">
                Descubra Seu Valor Real<br />
                <span className="text-yellow-300 sparkle">Antes Que Seja Tarde</span>
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Mais de 10.000 profissionais já descobriram que valiam muito mais do que imaginavam. Seja o próximo!
              </p>
            </div>
            
            <div className="glass-strong rounded-3xl p-10 mb-8 border border-white/20 backdrop-blur-xl">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Trophy className="w-6 h-6" aria-hidden="true" />
                    O que você vai receber:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-purple-100">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
                      <span className="font-medium">Relatório completo de 40+ páginas</span>
                    </li>
                    <li className="flex items-center gap-3 text-purple-100">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
                      <span className="font-medium">Valoração científica dos seus ativos</span>
                    </li>
                    <li className="flex items-center gap-3 text-purple-100">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
                      <span className="font-medium">Plano de ação personalizado</span>
                    </li>
                    <li className="flex items-center gap-3 text-purple-100">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
                      <span className="font-medium">Justificativa para aumentar preços</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white block mb-2">R$ 0</span>
                    <span className="text-purple-200 line-through text-xl font-medium">R$ 2.997</span>
                  </div>
                  <div className="mb-6">
                    <CountdownTimer hours={23} minutes={47} size="lg" />
                  </div>
                  <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    <Sparkles className="w-4 h-4" aria-hidden="true" />
                    Economia de 100% por tempo limitado
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <AnimatedButton 
                  size="xl"
                  variant="success"
                  icon={Download}
                  onClick={navigateToQuestionnaire}
                  className="w-full md:w-auto text-2xl py-8 px-20 mb-6 animate-pulse-glow btn-glow sparkle relative z-10"
                  aria-label="Baixar relatório gratuito agora"
                >
                  <Rocket className="w-6 h-6 mr-3" aria-hidden="true" />
                  📊 BAIXAR RELATÓRIO GRATUITO AGORA
                </AnimatedButton>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl blur-xl opacity-40 animate-pulse-glow"></div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-purple-200">
              <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
                <Shield className="w-4 h-4" aria-hidden="true" />
                <span className="font-medium">100% Seguro</span>
              </div>
              <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span className="font-medium">Resultado em 5 min</span>
              </div>
              <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4" aria-hidden="true" />
                <span className="font-medium">Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
                <Star className="w-4 h-4" aria-hidden="true" />
                <span className="font-medium">Metodologia científica</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 bg-gray-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-gray-900 to-pink-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <Crown className="w-4 h-4 text-white" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold text-gradient-purple">Flow Method™</span>
          </div>
          <p className="text-gray-400 mb-4 text-lg">
            © 2025 Flow Method™ - Desenvolvido por Tami Saito
          </p>
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <Trophy className="w-4 h-4" aria-hidden="true" />
            Metodologia Científica Validada por McKinsey, BCG e PwC
          </p>
        </div>
      </footer>
    </div>
  );
}
