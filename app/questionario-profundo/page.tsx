'use client';

import React, { useState } from 'react';
import { CheckCircle, Star, Clock, Users, Shield, CreditCard } from 'lucide-react';

export default function QuestionarioProfundoPage() {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [showCheckout, setShowCheckout] = useState(false);
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: "3 Metodologias Científicas Combinadas",
      description: "Relief from Royalty Method, Multi-Period Excess Earnings Method e With and Without Method"
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Relatório Detalhado de 40+ Páginas",
      description: "Análise completa dos 6 tipos de ativos intangíveis com cálculos financeiros precisos"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: "Projeções Financeiras de 5-10 Anos",
      description: "Fluxos de caixa projetados e valor presente líquido dos seus ativos intangíveis"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Benchmarking com Taxas de Mercado",
      description: "Comparação com royalties e múltiplos do seu setor usando dados reais"
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-500" />,
      title: "Plano de Maximização de Valor",
      description: "Estratégias específicas para aumentar o valor dos seus ativos intangíveis"
    }
  ];

  const testimonials = [
    {
      name: "Roberto Silva",
      role: "CEO de Consultoria",
      text: "O valuation científico revelou que meus ativos intangíveis valiam R$ 2.3M. Usei o relatório para levantar investimento e expandir 300%!"
    },
    {
      name: "Fernanda Costa",
      role: "Especialista em Transformação",
      text: "Descobri que minha propriedade intelectual valia mais que imaginava. O relatório me ajudou a licenciar metodologias por R$ 500k/ano."
    },
    {
      name: "Carlos Mendes",
      role: "Coach Executivo",
      text: "As projeções financeiras foram precisas! Meu valor de marca cresceu exatamente como previsto no relatório. ROI de 20x em 2 anos."
    }
  ];

  const handlePayment = () => {
    // Simular processamento do pagamento
    setTimeout(() => {
      window.location.href = '/obrigado';
    }, 2000);
  };

  if (showCheckout) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-purple-900 mb-4">
                Finalizar Pagamento
              </h1>
                             <p className="text-gray-600">
                 Relatório Científico de Valuation - R$ 197,00
               </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Escolha a forma de pagamento:
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === 'pix' 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="font-semibold">PIX</div>
                    <div className="text-sm text-gray-600">Aprovação imediata</div>
                  </div>
                </button>

                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === 'card' 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="text-center">
                    <CreditCard className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                    <div className="font-semibold">Cartão</div>
                    <div className="text-sm text-gray-600">Até 12x sem juros</div>
                  </div>
                </button>
              </div>

              {paymentMethod === 'pix' ? (
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl text-center">
                  <h4 className="text-lg font-semibold text-green-900 mb-4">
                    Pagamento via PIX
                  </h4>
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <div className="text-sm text-gray-600 mb-2">Chave PIX:</div>
                    <div className="font-mono text-lg text-gray-900">
                      pagamento@flowmethod.com
                    </div>
                  </div>
                  <p className="text-sm text-green-700 mb-4">
                    Valor: R$ 197,00 • Aprovação imediata
                  </p>
                  <button
                    onClick={handlePayment}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Confirmar Pagamento PIX
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Número do Cartão
                      </label>
                      <input
                        type="text"
                        value={cardData.number}
                        onChange={(e) => setCardData(prev => ({ ...prev, number: e.target.value }))}
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome no Cartão
                      </label>
                      <input
                        type="text"
                        value={cardData.name}
                        onChange={(e) => setCardData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Nome completo"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Validade
                      </label>
                      <input
                        type="text"
                        value={cardData.expiry}
                        onChange={(e) => setCardData(prev => ({ ...prev, expiry: e.target.value }))}
                        placeholder="MM/AA"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        value={cardData.cvv}
                        onChange={(e) => setCardData(prev => ({ ...prev, cvv: e.target.value }))}
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Opções de Parcelamento:</h4>
                    <div className="space-y-1 text-sm text-blue-800">
                      <div>1x de R$ 197,00 (à vista)</div>
                      <div>3x de R$ 65,67 (sem juros)</div>
                      <div>6x de R$ 32,83 (sem juros)</div>
                      <div>12x de R$ 16,42 (sem juros)</div>
                    </div>
                  </div>

                  <button
                    onClick={handlePayment}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Finalizar Pagamento - R$ 197,00
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-purple-900 mb-6">
              Relatório Científico de Valuation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Receba uma análise completa de 40+ páginas com metodologias científicas internacionais: 
              Relief from Royalty, Multi-Period Excess Earnings e With and Without Method.
            </p>
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="text-3xl font-bold text-purple-600">R$ 197,00</div>
              <div className="text-gray-500 line-through">R$ 397,00</div>
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                50% OFF
              </div>
            </div>
          </div>

          {/* Benefícios */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              O que você vai receber:
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Depoimentos */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              O que nossos clientes dizem:
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Urgência */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 mb-16 text-center">
            <h2 className="text-2xl font-bold text-red-900 mb-4">
              🔬 Análise Científica Exclusiva - Oferta Limitada!
            </h2>
            <p className="text-red-700 mb-6">
              Aplicamos metodologias de grandes consultorias (McKinsey, BCG) por uma fração do preço. 
              Normalmente cobrariam R$ 50.000+ por esta análise!
            </p>
            <div className="flex justify-center items-center gap-4 text-red-600 font-semibold">
              <Clock className="w-5 h-5" />
              <span>Apenas para os primeiros 50 usuários do sistema científico</span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={() => setShowCheckout(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl py-6 px-12 rounded-xl font-semibold hover:shadow-lg transition-all mb-6"
            >
              Quero Meu Valuation Científico - R$ 197,00
            </button>
            <p className="text-gray-500 text-sm">
              Metodologia internacional • Garantia de satisfação • Relatório em 24h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}