'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, Star, Clock, Gift, Video, Target, Users, Trophy, CreditCard, Crown, Zap, ArrowRight, AlertCircle, Shield } from 'lucide-react';
import AnimatedButton from '../components/ui/AnimatedButton';
import CountdownTimer from '../components/ui/CountdownTimer';

export default function ObrigadoPage() {
  const [selectedOffer, setSelectedOffer] = useState<'consultoria' | 'sessoes'>('consultoria');
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('card');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const bonuses = [
    {
      icon: <Crown className="w-8 h-8 text-yellow-500" />,
      title: "Sessão VIP de Estratégia (2h)",
      description: "Análise 1:1 do seu relatório com plano de ação personalizado para maximizar seus ativos",
      value: "R$ 2.000,00"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Acesso Vitalício ao Grupo VIP",
      description: "Comunidade exclusiva com outros líderes de alto nível e networking qualificado",
      value: "R$ 1.500,00"
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Templates Exclusivos Premium",
      description: "Planilhas, apresentações e ferramentas para implementar suas estratégias",
      value: "R$ 800,00"
    },
    {
      icon: <Trophy className="w-8 h-8 text-purple-500" />,
      title: "Certificado Flow Method™",
      description: "Certificação oficial reconhecida no mercado para aumentar sua credibilidade",
      value: "R$ 500,00"
    },
    {
      icon: <Video className="w-8 h-8 text-red-500" />,
      title: "Masterclass Exclusiva",
      description: "\"Como Vender Consultoria de Alto Valor\" - gravação especial de 90 minutos",
      value: "R$ 1.200,00"
    }
  ];

  const offers = {
    consultoria: {
      title: "Consultoria Estratégica Completa",
      subtitle: "Implementação Guiada dos Seus Ativos",
      originalPrice: 3500,
      currentPrice: 997,
      installments: 12,
      installmentPrice: 83.08,
      highlights: [
        "3 meses de acompanhamento direto",
        "Implementação completa das estratégias",
        "Suporte por WhatsApp",
        "Revisões quinzenais do progresso"
      ]
    },
    sessoes: {
      title: "Pacote Premium 2 Sessões",
      subtitle: "Implementação Intensiva + Follow-up",
      originalPrice: 2000,
      currentPrice: 1394,
      installments: 12,
      installmentPrice: 116.17,
      highlights: [
        "2 sessões de 2h cada",
        "Plano de ação detalhado",
        "30 dias de suporte",
        "Material de implementação"
      ]
    }
  };

  const urgencyElements = [
    "🔥 Apenas 3 vagas restantes este mês",
    "⏰ Oferta expira em 15 minutos", 
    "💎 71% de desconto exclusivo",
    "🚀 Acesso imediato após pagamento"
  ];

  const handlePayment = () => {
    setTimeout(() => {
      alert('Pagamento processado com sucesso! Você receberá um email com as instruções de acesso em até 10 minutos.');
      window.location.href = '/';
    }, 2000);
  };

  if (showCheckout) {
    const offer = offers[selectedOffer];
    const pixDiscount = 0.05;
    const finalPrice = paymentMethod === 'pix' ? offer.currentPrice * (1 - pixDiscount) : offer.currentPrice;
    const installmentPrice = finalPrice / 12;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 animate-fadeInScale">
            <div className="text-center mb-8">
              <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Finalizar Consultoria VIP
              </h2>
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6">
                <div className="text-2xl font-bold text-gray-900">
                  {offer.title}
                </div>
                <div className="text-4xl font-bold text-orange-600 my-2">
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
                    R$ {(offer.currentPrice * (1 - pixDiscount)).toFixed(2).replace('.', ',')}
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
                    R$ {offer.currentPrice.toFixed(2).replace('.', ',')}
                  </div>
                </button>
              </div>
            </div>

            <AnimatedButton
              size="xl"
              icon={CreditCard}
              onClick={handlePayment}
              className="w-full mb-4"
            >
              Confirmar Consultoria VIP - R$ {finalPrice.toFixed(2).replace('.', ',')}
            </AnimatedButton>

            <div className="text-center text-sm text-gray-500">
              <Shield className="w-4 h-4 inline mr-1" />
              Pagamento 100% seguro • Garantia de 30 dias • Suporte completo
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Success Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative container mx-auto px-4 py-12">
          <div className={`text-center text-white ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <CheckCircle className="w-20 h-20 mx-auto mb-6 animate-float" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Parabéns! 🎉
            </h1>
            <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
              Seu relatório está sendo preparado e chegará no seu email em até <strong>48 horas</strong>
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 inline-block">
              <div className="text-2xl font-bold mb-2">Próximo Passo Importante:</div>
              <div className="text-lg">Maximize seus resultados com nossa consultoria VIP</div>
            </div>
          </div>
        </div>
      </div>

      {/* Urgency Section */}
      <div className="py-8 bg-gradient-to-r from-red-500 to-orange-500">
        <div className="container mx-auto px-4">
          <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <AlertCircle className="w-6 h-6 text-white" />
              <span className="text-white font-bold text-lg">OFERTA ESPECIAL - APENAS PARA VOCÊ</span>
            </div>
            <CountdownTimer minutes={15} size="lg" color="orange" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 text-sm">
              {urgencyElements.map((element, index) => (
                <div key={index} className="bg-white/90 rounded-lg p-2 text-gray-700 font-medium">
                  {element}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Offer Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.5s'}}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Quer <span className="text-gradient">Implementar</span> Tudo Isso?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ter o relatório é só o começo. A verdadeira transformação acontece na <strong>implementação</strong>. 
              Deixe nossa equipe te guiar passo a passo.
            </p>
            
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    🎯 Seus Próximos Resultados:
                  </h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Implementar 100% das estratégias do relatório</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Aumentar seus preços em 200-500%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Captar investimento ou parcerias estratégicas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Posicionar-se como autoridade no mercado</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">ROI Médio dos Clientes</div>
                  <div className="text-6xl font-bold text-orange-600">854%</div>
                  <div className="text-sm text-gray-600">em 90 dias</div>
                </div>
              </div>
            </div>
          </div>

          {/* Offer Selection */}
          <div className={`mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.7s'}}>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {Object.entries(offers).map(([key, offer]) => (
                <div
                  key={key}
                  onClick={() => setSelectedOffer(key as any)}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    selectedOffer === key
                      ? 'transform scale-105 shadow-2xl'
                      : 'hover:transform hover:scale-102 shadow-lg'
                  }`}
                >
                  {key === 'consultoria' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
                      MAIS POPULAR
                    </div>
                  )}
                  
                  <div className={`bg-white rounded-3xl p-8 border-4 transition-all ${
                    selectedOffer === key ? 'border-orange-500' : 'border-gray-200'
                  }`}>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {offer.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{offer.subtitle}</p>
                      
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="text-gray-500 line-through text-lg">
                          R$ {offer.originalPrice.toLocaleString('pt-BR')}
                        </div>
                        <ArrowRight className="w-6 h-6 text-gray-400" />
                        <div className="text-3xl font-bold text-orange-600">
                          R$ {offer.currentPrice.toLocaleString('pt-BR')}
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600">
                        12x de R$ {offer.installmentPrice.toFixed(2).replace('.', ',')} sem juros
                      </div>
                      
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold mt-4 inline-block">
                        {Math.round((1 - offer.currentPrice / offer.originalPrice) * 100)}% de desconto
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {offer.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {selectedOffer === key && (
                      <div className="text-center">
                        <CheckCircle className="w-8 h-8 text-green-500 mx-auto animate-fadeInScale" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bonuses Section */}
          <div className={`mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.9s'}}>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
                🎁 Bônus Exclusivos (Valor: R$ 6.000)
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      {bonus.icon}
                      <div className="text-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                        {bonus.value}
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {bonus.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {bonus.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '1.1s'}}>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl p-8 max-w-4xl mx-auto mb-8">
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                Última Chance - Oferta Expira em:
              </h3>
              <CountdownTimer minutes={15} size="lg" color="orange" />
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Clock className="w-12 h-12 mx-auto mb-2 text-yellow-300" />
                  <div className="font-bold">Início Imediato</div>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 mx-auto mb-2 text-green-300" />
                  <div className="font-bold">Garantia de 30 dias</div>
                </div>
                <div className="text-center">
                  <Trophy className="w-12 h-12 mx-auto mb-2 text-blue-300" />
                  <div className="font-bold">Resultados Garantidos</div>
                </div>
              </div>
            </div>

            <AnimatedButton
              size="xl"
              icon={ArrowRight}
              onClick={() => setShowCheckout(true)}
              className="mb-6 animate-pulse-glow"
            >
              Garantir Minha Consultoria VIP - R$ {offers[selectedOffer].currentPrice.toLocaleString('pt-BR')}
            </AnimatedButton>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Garantia de 30 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Acesso imediato</span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => window.location.href = '/'}
                className="text-gray-500 hover:text-gray-700 transition-colors text-sm underline"
              >
                Não, obrigado. Quero apenas o relatório.
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 bg-gray-900 text-center">
        <p className="text-gray-400">
          © 2025 Flow Method™ - Desenvolvido por Tami Saito • Consultoria VIP Exclusiva
        </p>
      </div>
    </div>
  );
}