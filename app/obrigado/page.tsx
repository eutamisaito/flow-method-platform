'use client';

import React, { useState } from 'react';
import { CheckCircle, Star, Clock, Gift, Video, Target, Users, Trophy, CreditCard } from 'lucide-react';

export default function ObrigadoPage() {
  const [selectedOffer, setSelectedOffer] = useState<'consultoria' | 'sessoes'>('consultoria');
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('card');
  
  const bonuses = [
    {
      icon: <Gift className="w-6 h-6 text-yellow-500" />,
      title: "E-book Exclusivo",
      description: "\"7 Estratégias para Maximizar seu Valor Intangível\"",
      value: "R$ 97,00"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Acesso VIP ao Grupo",
      description: "Comunidade exclusiva com outros líderes de alto nível",
      value: "R$ 197,00"
    },
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: "Templates Personalizados",
      description: "Planilhas e ferramentas para acompanhar seu progresso",
      value: "R$ 147,00"
    },
    {
      icon: <Trophy className="w-6 h-6 text-purple-500" />,
      title: "Certificado de Participação",
      description: "Certificado oficial do Flow Method™",
      value: "R$ 67,00"
    }
  ];

  const handlePayment = () => {
    // Simular processamento do pagamento
    setTimeout(() => {
      alert('Pagamento processado com sucesso! Você receberá um email com as instruções de acesso.');
      window.location.href = '/';
    }, 2000);
  };

  if (showCheckout) {
    const price = selectedOffer === 'consultoria' ? 997 : 1394; // 2 sessões x 697
    const installments = selectedOffer === 'consultoria' ? 83.08 : 116.17; // 12x

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-purple-900 mb-4">
                Finalizar Pagamento
              </h1>
              <p className="text-gray-600">
                {selectedOffer === 'consultoria' 
                  ? 'Consultoria Estratégica Online - R$ 997,00' 
                  : '2 Sessões de Consultoria - R$ 1.394,00'}
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl mb-8">
              <h3 className="text-lg font-semibold text-orange-900 mb-4">
                🎁 Bônus Inclusos (Valor: R$ 508,00)
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0" />
                    <span className="text-orange-800">{bonus.title}</span>
                  </div>
                ))}
              </div>
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
                    <div className="text-sm text-gray-600">5% de desconto</div>
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
                    Pagamento via PIX - 5% de desconto
                  </h4>
                  <div className="text-2xl font-bold text-green-600 mb-4">
                    R$ {Math.round(price * 0.95).toLocaleString('pt-BR')}
                  </div>
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <div className="text-sm text-gray-600 mb-2">Chave PIX:</div>
                    <div className="font-mono text-lg text-gray-900">
                      consultoria@flowmethod.com
                    </div>
                  </div>
                  <button
                    onClick={handlePayment}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Confirmar Pagamento PIX
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Opções de Parcelamento:</h4>
                    <div className="space-y-1 text-sm text-blue-800">
                      <div>1x de R$ {price.toLocaleString('pt-BR')} (à vista)</div>
                      <div>3x de R$ {Math.round(price / 3).toLocaleString('pt-BR')} (sem juros)</div>
                      <div>6x de R$ {Math.round(price / 6).toLocaleString('pt-BR')} (sem juros)</div>
                      <div className="font-semibold">12x de R$ {installments.toLocaleString('pt-BR')} (sem juros)</div>
                    </div>
                  </div>

                  <button
                    onClick={handlePayment}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Finalizar Pagamento - R$ {price.toLocaleString('pt-BR')}
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
          {/* Header de Confirmação */}
          <div className="text-center mb-16">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-purple-900 mb-6">
              Obrigado!
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Seu pagamento foi processado com sucesso. Você receberá seu relatório 
              detalhado em até 24 horas no email cadastrado.
            </p>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-2xl inline-block">
              <p className="text-green-800 font-semibold">
                ✅ Questionário Profundo Flow Method™ - Confirmado
              </p>
            </div>
          </div>

          {/* Oferta Especial */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 mb-16 text-center">
            <h2 className="text-3xl font-bold text-orange-900 mb-4">
              🚀 Oferta Exclusiva - Apenas Para Você!
            </h2>
            <p className="text-orange-700 mb-6">
              Agora que você tem seu diagnóstico, que tal acelerar seus resultados 
              com uma consultoria estratégica personalizada comigo?
            </p>
            <div className="flex justify-center items-center gap-4 text-orange-600 font-semibold">
              <Clock className="w-5 h-5" />
              <span>Esta oferta expira em 30 minutos!</span>
            </div>
          </div>

          {/* Opções de Consultoria */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Consultoria Completa */}
            <div 
              className={`bg-white rounded-3xl shadow-2xl p-8 border-4 transition-all cursor-pointer ${
                selectedOffer === 'consultoria' 
                  ? 'border-purple-500 transform scale-105' 
                  : 'border-gray-200 hover:border-purple-300'
              }`}
              onClick={() => setSelectedOffer('consultoria')}
            >
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-2xl mb-4">
                  <Video className="w-12 h-12 text-purple-600 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-2">
                  Consultoria Estratégica Online
                </h3>
                <p className="text-gray-600">
                  Sessão individual de 90 minutos comigo para acelerar seus resultados
                </p>
              </div>

              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  R$ 997,00
                </div>
                <div className="text-gray-500 line-through text-xl">
                  R$ 1.997,00
                </div>
                <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  50% OFF
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">90 minutos de consultoria individual</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Plano de ação personalizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Estratégias específicas para seu perfil</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Suporte pós-consultoria (15 dias)</span>
                </div>
              </div>

              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">
                  Ou em até 12x de R$ 83,08 sem juros
                </div>
              </div>
            </div>

            {/* 2 Sessões */}
            <div 
              className={`bg-white rounded-3xl shadow-2xl p-8 border-4 transition-all cursor-pointer ${
                selectedOffer === 'sessoes' 
                  ? 'border-purple-500 transform scale-105' 
                  : 'border-gray-200 hover:border-purple-300'
              }`}
              onClick={() => setSelectedOffer('sessoes')}
            >
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-2xl mb-4">
                  <Users className="w-12 h-12 text-green-600 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  2 Sessões de Consultoria
                </h3>
                <p className="text-gray-600">
                  Acompanhamento completo com 2 sessões de 90 minutos
                </p>
              </div>

              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  R$ 1.394,00
                </div>
                <div className="text-gray-500 line-through text-xl">
                  R$ 2.794,00
                </div>
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  MELHOR OFERTA
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">2 sessões de 90 minutos cada</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Acompanhamento de resultados</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Ajustes e refinamentos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Suporte pós-consultoria (30 dias)</span>
                </div>
              </div>

              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">
                  Ou em até 12x de R$ 116,17 sem juros
                </div>
              </div>
            </div>
          </div>

          {/* Bônus */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center text-orange-900 mb-8">
              🎁 Bônus Exclusivos (Valor: R$ 508,00)
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {bonuses.map((bonus, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {bonus.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {bonus.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {bonus.description}
                      </p>
                      <div className="text-orange-600 font-semibold">
                        Valor: {bonus.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Depoimentos */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Resultados Reais dos Meus Clientes:
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Roberto Silva",
                  role: "CEO de Startup",
                  result: "Aumentou receita em 300%",
                  text: "A consultoria me ajudou a identificar oportunidades que eu não via. Minha empresa triplicou o faturamento em 6 meses!"
                },
                {
                  name: "Fernanda Costa",
                  role: "Diretora de RH",
                  result: "Promoção em 2 meses",
                  text: "Desenvolvi uma presença executiva que me levou à promoção que eu buscava há anos."
                },
                {
                  name: "João Mendes",
                  role: "Consultor Senior",
                  result: "Dobrou a carteira de clientes",
                  text: "As estratégias de influência me fizeram dobrar minha base de clientes e aumentar meus honorários."
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                    {testimonial.result}
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

          {/* CTA Final */}
          <div className="text-center">
            <button
              onClick={() => setShowCheckout(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-2xl py-6 px-12 rounded-xl font-semibold hover:shadow-lg transition-all mb-6"
            >
              {selectedOffer === 'consultoria' 
                ? 'Garantir Minha Consultoria - R$ 997,00' 
                : 'Garantir Minhas 2 Sessões - R$ 1.394,00'}
            </button>
            <p className="text-gray-500 text-sm mb-8">
              Pagamento 100% seguro • Garantia de 30 dias • Bônus inclusos
            </p>
            
            <div className="text-center text-gray-600">
              <p className="mb-4">
                <strong>Atenção:</strong> Esta oferta é válida apenas para quem acabou de adquirir o Questionário Profundo
              </p>
              <p>
                ⏰ Oferta expira em 30 minutos ou quando as vagas se esgotarem
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}