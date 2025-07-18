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

  const navigateToDemo = useCallback(() => {
    try {
      // Scroll to a demo section or open modal
      const demoSection = document.querySelector('#demo-section');
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback to questionnaire if demo section doesn't exist
        window.location.href = '/questionario';
      }
    } catch (err) {
      setError('Erro ao acessar demonstração. Tente novamente.');
      console.error('Demo navigation error:', err);
    }
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Navigation background on scroll
    const handleScroll = () => {
      const nav = document.querySelector('.nav') as HTMLElement;
      if (nav) {
        if (window.scrollY > 50) {
          nav.style.background = 'rgba(255, 255, 255, 0.95)';
          nav.style.backdropFilter = 'blur(20px)';
        } else {
          nav.style.background = 'rgba(255, 255, 255, 0.8)';
          nav.style.backdropFilter = 'blur(20px)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      window.removeEventListener('scroll', handleScroll);
    };
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
      title: "Metodologia Científica Flow Method™",
      description: "Baseada em pesquisas de Harvard, MIT e validada por McKinsey, BCG e PwC. Transforme sua expertise em autoridade de mercado."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Sistema de Autoridade Proprietário",
      description: "30+ ferramentas exclusivas que analisam identidade, influência e legado para posicionamento premium."
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Posicionamento de Referência",
      description: "Saia da concorrência por preço e torne-se a referência no seu mercado com diferenciação autêntica."
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
    <div>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #7c0ef8;
          --secondary: #f9c614;
          --dark: #000064;
          --light: #ded7e3;
          --gray-50: #fafafa;
          --gray-100: #f5f5f5;
          --gray-200: #e5e5e5;
          --gray-300: #d4d4d4;
          --gray-600: #525252;
          --gray-800: #262626;
          --gray-900: #171717;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: var(--gray-900);
          background: #fff;
        }

        /* Enhanced gradients and animations */
        .text-gradient-purple {
          background: linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .text-gradient-success {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .glass-strong {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .card-elevated {
          background: white;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .card-elevated:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 56px;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          z-index: 999;
          transition: all 0.3s ease;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 60px;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 40px;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--gray-800);
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        .cta-button {
          background: var(--primary);
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .cta-button:hover {
          background: var(--dark);
          transform: scale(1.05);
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(124, 14, 248, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(124, 14, 248, 0.6);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(180deg);
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg);
          }
          75% {
            transform: rotate(-15deg);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }

        .animate-fadeInScale {
          animation: fadeInScale 0.8s ease forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease forwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        .animate-wave {
          animation: wave 1s ease-in-out infinite;
        }

        .animate-bounce-in {
          animation: fadeInScale 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .animate-on-scroll.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .sparkle::after {
          content: '✨';
          margin-left: 8px;
          animation: sparkle 2s ease-in-out infinite;
        }

        .btn-glow {
          position: relative;
          overflow: hidden;
        }

        .btn-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }

        .btn-glow:hover::before {
          left: 100%;
        }

        /* Background patterns */
        .floating-element {
          position: absolute;
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .bg-gradient-animated {
          background: linear-gradient(135deg, var(--primary) 0%, var(--dark) 50%, var(--primary) 100%);
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .text-gradient-animated {
          background: linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
        }

        .text-gradient-animated::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          color: var(--gray-900);
          z-index: -1;
          -webkit-text-fill-color: var(--gray-900);
        }

        /* Mobile Menu */
        .mobile-menu-button {
          display: none;
          flex-direction: column;
          gap: 4px;
          cursor: pointer;
        }

        .mobile-menu-button span {
          width: 25px;
          height: 3px;
          background: var(--gray-800);
          transition: all 0.3s ease;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-button {
            display: flex;
          }
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 relative">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="floating-element w-20 h-20 bg-purple-200 top-1/4 left-1/4 mix-blend-multiply filter blur-xl opacity-40"></div>
          <div className="floating-element w-32 h-32 bg-pink-200 top-3/4 right-1/4 mix-blend-multiply filter blur-xl opacity-40"></div>
          <div className="floating-element w-24 h-24 bg-blue-200 top-1/2 left-3/4 mix-blend-multiply filter blur-xl opacity-40"></div>
        </div>

        {/* Sticky Top Bar */}
        <div className="sticky top-0 z-50 bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white py-3 px-4 shadow-lg">
          <div className="container mx-auto flex items-center justify-center gap-4">
            <div className="animate-wave">
              <Clock className="w-4 h-4" aria-hidden="true" />
            </div>
            <span className="text-sm font-bold sparkle">🔥 TRANSFORMAÇÃO LIMITADA:</span>
            <CountdownTimer hours={23} minutes={47} size="sm" />
            <span className="text-sm font-medium">Diagnóstico GRATUITO expira em breve!</span>
            <Sparkles className="w-4 h-4 animate-sparkle" aria-hidden="true" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <div className="nav-container">
            <a href="#" className="logo">Flow Method™</a>
            <ul className="nav-links">
              <li><a href="#pilares">Pilares</a></li>
              <li><a href="#ferramentas">Ferramentas</a></li>
              <li><a href="#resultados">Resultados</a></li>
              <li><a href="#sobre">Sobre</a></li>
            </ul>
            <button onClick={navigateToQuestionnaire} className="cta-button">Comece Agora</button>
            <div className="mobile-menu-button">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32" aria-labelledby="hero-heading">
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-300 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-300 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="relative container mx-auto px-4 py-8 lg:py-16">
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

            <div className="max-w-5xl mx-auto text-center">
              <div className={`mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 via-emerald-100 to-green-100 rounded-full px-6 py-3 mb-6 card-elevated">
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                  <span className="text-sm font-bold text-green-800">✅ FLOW METHOD™ - AUTORIDADE DE MERCADO</span>
                  <Trophy className="w-5 h-5 text-green-600 animate-bounce-in" aria-hidden="true" />
                </div>
                
                <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-black text-gradient-animated mb-6 leading-tight">
                  Transforme sua expertise em<br />
                  <span className="text-gradient-purple sparkle">Autoridade de Mercado</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
                  Arsenal completo de <span className="font-bold text-gradient-purple">30+ ferramentas proprietárias</span> para líderes que querem se tornar <span className="font-bold text-gradient-success animate-pulse-glow">referências</span> no mercado
                </p>

                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <AnimatedButton 
                      size="xl" 
                      icon={Download}
                      onClick={navigateToQuestionnaire}
                      className="animate-pulse-glow text-xl py-6 px-12 btn-glow sparkle relative z-10"
                      aria-label="Fazer diagnóstico estratégico gratuito"
                    >
                      <Rocket className="w-6 h-6 mr-2" aria-hidden="true" />
                      🎯 DIAGNÓSTICO ESTRATÉGICO GRATUITO
                    </AnimatedButton>
                    
                    <AnimatedButton 
                      size="lg" 
                      variant="secondary"
                      icon={Play}
                      onClick={navigateToDemo}
                      className="btn-glow"
                      aria-label="Ver demonstração do método"
                    >
                      ▶️ Ver Demo do Método
                    </AnimatedButton>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 glass rounded-full px-4 py-2">
                      <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                      Diagnóstico completo • Resultado em 5 minutos
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 glass rounded-full px-4 py-2">
                      <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                      100% Gratuito • Metodologia validada
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className={`card-elevated rounded-xl p-6 border border-gray-200 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse" aria-hidden="true"></div>
                      <span className="font-bold text-gray-900 text-lg">Identidade de Autoridade</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">Construa uma identidade única através de essência, expressão e impacto autênticos</p>
                  </div>
                  <div className={`card-elevated rounded-xl p-6 border border-gray-200 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" aria-hidden="true"></div>
                      <span className="font-bold text-gray-900 text-lg">Influência Estratégica</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">Desenvolva influência autêntica através de autoridade, visibilidade e conexão</p>
                  </div>
                  <div className={`card-elevated rounded-xl p-6 border border-gray-200 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse" aria-hidden="true"></div>
                      <span className="font-bold text-gray-900 text-lg">Legado Duradouro</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">Crie impacto duradouro através de criação, amplificação e perpetuação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 glass-strong border-y border-gray-200" id="resultados">
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

        {/* Testimonials Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-purple-50" aria-labelledby="testimonials-heading">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
              <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-bold text-gradient-animated mb-6">
                Veja os Resultados <span className="sparkle">Reais</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Profissionais que descobriram seu valor real e se tornaram autoridades em seus mercados
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

            <div className="text-center">
              <AnimatedButton 
                size="lg"
                icon={ArrowRight}
                onClick={navigateToQuestionnaire}
                className="mb-4 btn-glow"
                aria-label="Quero me tornar uma autoridade"
              >
                <Sparkles className="w-5 h-5 mr-2" aria-hidden="true" />
                Quero Me Tornar uma Autoridade
              </AnimatedButton>
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                <Users className="w-4 h-4" aria-hidden="true" />
                Junte-se a mais de 10.000 líderes de sucesso
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section - Flow Method Pillars */}
        <section className="py-20 bg-white/50 backdrop-blur-sm relative animate-on-scroll" aria-labelledby="benefits-heading" id="pilares">
          <div className="container mx-auto px-4 relative z-10">
            <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '1s'}}>
              <h2 id="benefits-heading" className="text-3xl md:text-5xl font-bold text-gradient-purple mb-6">
                3 Pilares da <span className="sparkle">Transformação</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Uma jornada estruturada em 8 etapas para construir identidade, influência e legado duradouro
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

            <div className={`grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '1.4s'}}>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg p-8 text-white transform hover:scale-105 transition-all duration-300">
                <Target className="w-12 h-12 mb-6 opacity-90" aria-hidden="true" />
                <h3 className="text-2xl font-bold mb-4">Identidade</h3>
                <p className="opacity-90 leading-relaxed">
                  Flow Identity Matrix™ - Construção de identidade de autoridade através de Essência, Expressão e Impacto
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl shadow-lg p-8 text-white transform hover:scale-105 transition-all duration-300">
                <TrendingUp className="w-12 h-12 mb-6 opacity-90" aria-hidden="true" />
                <h3 className="text-2xl font-bold mb-4">Influência</h3>
                <p className="opacity-90 leading-relaxed">
                  Flow Influence System™ - Desenvolvimento de influência autêntica através de Autoridade, Visibilidade e Conexão
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl shadow-lg p-8 text-white transform hover:scale-105 transition-all duration-300">
                <Users className="w-12 h-12 mb-6 opacity-90" aria-hidden="true" />
                <h3 className="text-2xl font-bold mb-4">Legado</h3>
                <p className="opacity-90 leading-relaxed">
                  Flow Legacy Architecture™ - Criação de legado duradouro através de Criação, Amplificação e Perpetuação
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Preview Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 animate-on-scroll" id="ferramentas">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gradient-purple mb-6">
                Arsenal Completo de <span className="sparkle">Ferramentas</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Mais de 30 ferramentas organizadas estrategicamente para sua transformação em autoridade
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { tag: "Diagnóstico", title: "Flow Values Assessment™", description: "Mapeamento profundo dos valores essenciais e sua aplicação na liderança" },
                { tag: "Estratégia", title: "Strategic Positioning Canvas", description: "Definição do posicionamento estratégico baseado em diferenciação autêntica" },
                { tag: "Implementação", title: "Flow Storytelling Matrix™", description: "Estrutura para desenvolvimento de narrativas de autoridade e conexão" },
                { tag: "Monitoramento", title: "Impact Measurement Dashboard", description: "Métricas de impacto da identidade na percepção de autoridade" },
                { tag: "Escalabilidade", title: "Systems Architecture Blueprint", description: "Estruturação de sistemas escaláveis para amplificação de impacto" },
                { tag: "Legado", title: "Succession Planning Framework™", description: "Planejamento estratégico para perpetuação do legado através de sucessores" }
              ].map((tool, index) => (
                <div key={index} className="card-elevated rounded-2xl p-6 border border-gray-200">
                  <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {tool.tag}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{tool.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 bg-white" id="demo-section">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-gradient-animated mb-6">
                Veja o Flow Method™ <span className="sparkle">em Ação</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Descubra como nossa metodologia científica pode transformar sua expertise em autoridade de mercado
              </p>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white font-bold">1</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Diagnóstico Estratégico</h4>
                    <p className="text-gray-600 text-sm">Análise profunda da sua identidade e posicionamento atual</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white font-bold">2</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Estratégia Personalizada</h4>
                    <p className="text-gray-600 text-sm">Plano customizado para sua transformação em autoridade</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white font-bold">3</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Implementação Guiada</h4>
                    <p className="text-gray-600 text-sm">Suporte completo na execução das estratégias definidas</p>
                  </div>
                </div>
                
                <AnimatedButton 
                  size="xl"
                  icon={Play}
                  onClick={navigateToQuestionnaire}
                  className="animate-pulse-glow btn-glow sparkle"
                >
                  <Rocket className="w-6 h-6 mr-2" aria-hidden="true" />
                  Começar Minha Transformação Agora
                </AnimatedButton>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-animated relative overflow-hidden" aria-labelledby="cta-heading">
          <div className="absolute inset-0 bg-black/20" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="floating-element w-40 h-40 bg-white/10 top-1/4 left-1/4"></div>
            <div className="floating-element w-32 h-32 bg-white/10 top-3/4 right-1/4"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`max-w-5xl mx-auto ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '1.6s'}}>
              <div className="mb-8">
                <div className="inline-block bg-red-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 animate-pulse-glow sparkle">
                  🚨 TRANSFORMAÇÃO LIMITADA DISPONÍVEL
                </div>
                <h2 id="cta-heading" className="text-3xl md:text-6xl font-bold text-white mb-6">
                  Pronto para se tornar<br />
                  <span className="text-yellow-300 sparkle">uma Referência?</span>
                </h2>
                <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Comece sua jornada de transformação com diagnóstico estratégico gratuito. Mais de 10.000 líderes já descobriram seu potencial!
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
                        <span className="font-medium">Diagnóstico estratégico completo</span>
                      </li>
                      <li className="flex items-center gap-3 text-purple-100">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
                        <span className="font-medium">Análise científica da sua autoridade</span>
                      </li>
                      <li className="flex items-center gap-3 text-purple-100">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
                        <span className="font-medium">Plano de ação personalizado</span>
                      </li>
                      <li className="flex items-center gap-3 text-purple-100">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
                        <span className="font-medium">Acesso às ferramentas exclusivas</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-white block mb-2">GRATUITO</span>
                      <span className="text-purple-200 line-through text-xl font-medium">R$ 4.997</span>
                    </div>
                    <div className="mb-6">
                      <CountdownTimer hours={23} minutes={47} size="lg" />
                    </div>
                    <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      <Sparkles className="w-4 h-4" aria-hidden="true" />
                      Oferta limitada por tempo limitado
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
                    aria-label="Agendar diagnóstico estratégico gratuito"
                  >
                    <Rocket className="w-6 h-6 mr-3" aria-hidden="true" />
                    🚀 AGENDAR DIAGNÓSTICO ESTRATÉGICO
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

        {/* Footer */}
        <footer className="py-12 bg-gray-900 text-center relative" id="sobre">
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
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2 mb-6">
              <Trophy className="w-4 h-4" aria-hidden="true" />
              Metodologia Científica - Transformação integral de líderes em referências de autoridade
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="/questionario" className="text-gray-400 hover:text-purple-400 transition-colors">Diagnóstico</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Termos</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contato</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
