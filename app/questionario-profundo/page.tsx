'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, Star, Clock, Users, Shield, CreditCard, Zap, Crown, DollarSign, Target, Award, ArrowRight, AlertCircle } from 'lucide-react';
import AnimatedButton from '../components/ui/AnimatedButton';
import CountdownTimer from '../components/ui/CountdownTimer';
import TestimonialCard from '../components/ui/TestimonialCard';

export default function QuestionarioProfundoPage() {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [showCheckout, setShowCheckout] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: "3 Metodologias Científicas Combinadas",
      description: "Relief from Royalty Method, Multi-Period Excess Earnings Method e With and Without Method - mesmas usadas por McKinsey, BCG e PwC",
      value: "R$ 50.000"
    },
    {
      icon: <Crown className="w-8 h-8 text-yellow-500" />,
      title: "Relatório Executivo de 40+ Páginas",
      description: "Análise detalhada dos 6 tipos de ativos intangíveis com cálculos financeiros precisos e estratégias específicas",
      value: "R$ 15.000"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Projeções Financeiras de 5-10 Anos",
      description: "Fluxos de caixa projetados, valor presente líquido e cenários de crescimento dos seus ativos intangíveis",
      value: "R$ 12.000"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Benchmarking com Líderes de Mercado",
      description: "Comparação detalhada com royalties e múltiplos do seu setor usando dados reais de empresas similares",
      value: "R$ 8.000"
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      title: "Plano de Maximização de Valor",
      description: "Estratégias específicas e acionáveis para aumentar o valor dos seus ativos intangíveis em 200-500%",
      value: "R$ 25.000"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: "Certificado de Valuation Oficial",
      description: "Documento oficial para uso em captação de investimentos, parcerias estratégicas e apresentações corporativas",
      value: "R$ 5.000"
    }
  ];

  const testimonials = [
    {
      name: "Roberto Silva",
      role: "CEO",
      company: "TechCorp",
      rating: 5,
      text: "O valuation científico revelou que meus ativos intangíveis valiam R$ 2.3M. Usei o relatório para levantar R$ 5M em investimento! ROI de 2.500% sobre os R$ 197 investidos.",
      highlight: "Captou R$ 5M em investimento"
    },
    {
      name: "Marina Santos",
      role: "Consultora Sênior",
      company: "BizConsult",
      rating: 5,
      text: "Descobri que estava subvalorizando meus conhecimentos em 78%. Com o relatório, aumentei meus preços em 300% e hoje fecho 3x mais contratos. Melhor investimento da minha carreira!",
      highlight: "300% de aumento nos preços"
    },
    {
      name: "Carlos Ferreira",
      role: "Coach Executivo",
      rating: 5,
      text: "A metodologia científica me deu credibilidade total com C-levels. Agora cobro R$ 15K por projeto, antes eram R$ 3K. O relatório se pagou em 2 semanas!",
      highlight: "Preços 5x maiores em 2 semanas"
    }
  ];

  const urgencyElements = [
    "🔥 Apenas 50 relatórios por mês (38 já vendidos)",
    "⏰ Oferta especial termina em 23h47min",
    "💎 Desconto de 99.6% sobre valor de consultoria tradicional",
    "🚀 Garantia de 30 dias ou dinheiro de volta"
  ];

  const handlePayment = () => {
    setTimeout(() => {
      alert('Pagamento processado com sucesso! Você receberá o relatório em até 48h no seu email.');
      window.location.href = '/obrigado';
    }, 2000);
  };

  if (showCheckout) {
    const pixDiscount = 0.05; // 5% desconto no PIX
    const basePrice = 197;
    const finalPrice = paymentMethod === 'pix' ? basePrice * (1 - pixDiscount) : basePrice;
    const installmentPrice = finalPrice / 12;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 animate-fadeInScale">
            <div className="text-center mb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Finalizar Pedido
              </h2>
              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6">
                <div className="text-2xl font-bold text-gray-900">
                  Análise Completa de Ativos Intangíveis
                </div>
                <div className="text-4xl font-bold text-green-600 my-2">
                  R$ {finalPrice.toFixed(2).replace('.', ',')}
                </div>
                {paymentMethod === 'card' && (
                  <div className="text-sm text-gray-600">
                    12x de R$ {installmentPrice.toFixed(2).replace('.', ',')} sem juros
                  </div>
                )}
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === 'pix'
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className="font-semibold">PIX</div>
                  <div className="text-sm">5% desconto</div>
                  <div className="text-lg font-bold text-green-600">
                    R$ {(basePrice * (1 - pixDiscount)).toFixed(2).replace('.', ',')}
                  </div>
                </button>
                
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === 'card'
                      ? 'border-purple-500 bg-purple-50 text-purple-800'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="font-semibold">Cartão</div>
                  <div className="text-sm">12x sem juros</div>
                  <div className="text-lg font-bold text-purple-600">
                    R$ {basePrice.toFixed(2).replace('.', ',')}
                  </div>
                </button>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4 animate-fadeInUp">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Número do Cartão
                      </label>
                      <input
                        type="text"
                        value={cardData.number}
                        onChange={(e) => setCardData(prev => ({ ...prev, number: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="0000 0000 0000 0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome no Cartão
                      </label>
                      <input
                        type="text"
                        value={cardData.name}
                        onChange={(e) => setCardData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Nome Completo"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Validade
                      </label>
                      <input
                        type="text"
                        value={cardData.expiry}
                        onChange={(e) => setCardData(prev => ({ ...prev, expiry: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="MM/AA"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        value={cardData.cvv}
                        onChange={(e) => setCardData(prev => ({ ...prev, cvv: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="000"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <AnimatedButton
              size="xl"
              icon={CreditCard}
              onClick={handlePayment}
              className="w-full mb-4"
            >
              Finalizar Pagamento - R$ {finalPrice.toFixed(2).replace('.', ',')}
            </AnimatedButton>

            <div className="text-center text-sm text-gray-500">
              <Shield className="w-4 h-4 inline mr-1" />
              Pagamento 100% seguro • SSL 256 bits • Garantia de 30 dias
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative container mx-auto px-4 py-12 lg:py-20">
          {/* Urgency Bar */}
          <div className={`text-center mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-6 rounded-full inline-block mb-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                <span className="font-semibold">OFERTA LIMITADA</span>
              </div>
            </div>
            <CountdownTimer hours={23} minutes={47} size="lg" color="red" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 text-sm">
              {urgencyElements.map((element, index) => (
                <div key={index} className="bg-white/80 rounded-lg p-2 text-gray-700">
                  {element}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto text-center">
            <div className={`mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6 leading-tight">
                Análise Científica Completa
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Receba um <span className="font-bold text-purple-600">relatório executivo de 40+ páginas</span> 
                com a valoração completa dos seus ativos intangíveis usando as mesmas metodologias de 
                <span className="font-bold text-purple-600"> McKinsey, BCG e PwC</span>
              </p>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl p-8 mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 line-through">Consultoria Tradicional</div>
                    <div className="text-2xl font-bold text-red-600">R$ 50.000+</div>
                  </div>
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                  <div className="text-center">
                    <div className="text-sm text-green-600 font-semibold">Flow Method™</div>
                    <div className="text-5xl font-bold text-green-600">R$ 197</div>
                  </div>
                </div>
                <div className="text-lg font-bold text-gray-900">
                  💰 Economia de 99.6% • ROI Médio: 2.540%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              O Que Você Vai <span className="text-gradient">Receber</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Valor total: <span className="line-through text-red-500">R$ 115.000</span> 
              <span className="text-green-600 font-bold ml-2">Hoje por apenas R$ 197</span>
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 interactive hover:shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  {benefit.icon}
                  <div className="text-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    Valor: {benefit.value}
                  </div>
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
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Resultados <span className="text-gradient">Comprovados</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como o relatório científico transformou a vida profissional de nossos clientes
            </p>
          </div>

          <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fadeInScale' : 'opacity-0'}`} style={{animationDelay: '1s'}}>
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

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '1.2s'}}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pronto para Receber Sua Análise?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Investimento de apenas R$ 197 com potencial de retorno de milhões
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-white">
                <div className="text-center">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                  <div className="text-2xl font-bold">48 horas</div>
                  <div className="text-purple-200">Entrega garantida</div>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-green-300" />
                  <div className="text-2xl font-bold">30 dias</div>
                  <div className="text-purple-200">Garantia total</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                  <div className="text-2xl font-bold">254%</div>
                  <div className="text-purple-200">ROI médio</div>
                </div>
              </div>
            </div>
            
            <AnimatedButton 
              size="xl"
              variant="secondary"
              icon={ArrowRight}
              onClick={() => setShowCheckout(true)}
              className="mb-6 animate-pulse-glow"
            >
              Quero Minha Análise Completa - R$ 197
            </AnimatedButton>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-purple-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>PIX com 5% desconto</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Cartão 12x sem juros</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 bg-gray-900 text-center">
        <p className="text-gray-400">
          © 2025 Flow Method™ - Desenvolvido por Tami Saito • Relatório Científico Certificado
        </p>
      </div>
    </div>
  );
}