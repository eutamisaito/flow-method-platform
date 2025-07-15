'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp, DollarSign, Zap, Crown, Target, Users } from 'lucide-react';
import AnimatedButton from '../components/ui/AnimatedButton';
import ProgressBar from '../components/ui/ProgressBar';

interface Question {
  id: number;
  category: 'consistencia_marca' | 'autoridade_credibilidade' | 'propriedade_intelectual' | 'metodologias_frameworks' | 'conteudo_criacoes' | 'rede_relacionamentos';
  question: string;
  options: string[];
  scores: number[];
  valorationInput: string;
}

const questions: Question[] = [
  // CONSISTÊNCIA DE MARCA PESSOAL (8 perguntas)
  {
    id: 1,
    category: 'consistencia_marca',
    question: 'Qual é sua receita anual aproximada atualmente?',
    options: ['Até R$ 50.000', 'R$ 50.001 - R$ 150.000', 'R$ 150.001 - R$ 300.000', 'R$ 300.001 - R$ 500.000', 'Acima de R$ 500.000'],
    scores: [25000, 100000, 225000, 400000, 750000],
    valorationInput: 'receita_base'
  },
  {
    id: 2,
    category: 'consistencia_marca',
    question: 'Há quantos anos você atua de forma consistente na sua área?',
    options: ['Menos de 1 ano', '1-2 anos', '3-5 anos', '6-10 anos', 'Mais de 10 anos'],
    scores: [0.5, 1.5, 4, 8, 12],
    valorationInput: 'tempo_consistencia'
  },
  {
    id: 3,
    category: 'consistencia_marca',
    question: 'Com que frequência você produz conteúdo sobre sua área de expertise?',
    options: ['Raramente/nunca', 'Mensalmente', 'Semanalmente', 'Várias vezes por semana', 'Diariamente'],
    scores: [1, 2, 3, 4, 5],
    valorationInput: 'frequencia_conteudo'
  },
  {
    id: 4,
    category: 'consistencia_marca',
    question: 'Qual é o tamanho da sua audiência total (redes sociais, email, etc.)?',
    options: ['Até 1.000', '1.001 - 5.000', '5.001 - 20.000', '20.001 - 100.000', 'Mais de 100.000'],
    scores: [500, 3000, 12500, 60000, 200000],
    valorationInput: 'tamanho_audiencia'
  },
  {
    id: 5,
    category: 'consistencia_marca',
    question: 'Quantas pessoas reconhecem você como referência na sua área?',
    options: ['Menos de 50', '50-200', '200-1.000', '1.000-10.000', 'Mais de 10.000'],
    scores: [25, 125, 600, 5500, 25000],
    valorationInput: 'reconhecimento'
  },
  {
    id: 6,
    category: 'consistencia_marca',
    question: 'Qual é a frequência de menções espontâneas da sua marca pessoal?',
    options: ['Muito raramente', 'Algumas vezes por mês', 'Várias vezes por semana', 'Diariamente', 'Múltiplas vezes por dia'],
    scores: [1, 2, 3, 4, 5],
    valorationInput: 'mencoes_espontaneas'
  },
  {
    id: 7,
    category: 'consistencia_marca',
    question: 'Quantos canais de comunicação você mantém ativos?',
    options: ['1-2 canais', '3-4 canais', '5-6 canais', '7-8 canais', 'Mais de 8 canais'],
    scores: [1.5, 3.5, 5.5, 7.5, 10],
    valorationInput: 'canais_comunicacao'
  },
  {
    id: 8,
    category: 'consistencia_marca',
    question: 'Qual o nível de engajamento médio do seu conteúdo?',
    options: ['Menos de 2%', '2-5%', '5-10%', '10-20%', 'Mais de 20%'],
    scores: [1, 3.5, 7.5, 15, 25],
    valorationInput: 'engajamento_medio'
  },

  // AUTORIDADE & CREDIBILIDADE (8 perguntas)
  {
    id: 9,
    category: 'autoridade_credibilidade',
    question: 'Quantas certificações ou títulos relevantes você possui?',
    options: ['Nenhuma', '1-2', '3-5', '6-10', 'Mais de 10'],
    scores: [0, 1.5, 4, 8, 15],
    valorationInput: 'certificacoes'
  },
  {
    id: 10,
    category: 'autoridade_credibilidade',
    question: 'Quantos anos de experiência comprovada você tem na área?',
    options: ['Menos de 2 anos', '2-5 anos', '5-10 anos', '10-20 anos', 'Mais de 20 anos'],
    scores: [1, 3.5, 7.5, 15, 25],
    valorationInput: 'experiencia_comprovada'
  },
  {
    id: 11,
    category: 'autoridade_credibilidade',
    question: 'Quantas vezes você foi convidado como palestrante ou especialista?',
    options: ['Nunca', '1-5 vezes', '6-20 vezes', '21-50 vezes', 'Mais de 50 vezes'],
    scores: [0, 3, 13, 35, 75],
    valorationInput: 'palestras_convites'
  },
  {
    id: 12,
    category: 'autoridade_credibilidade',
    question: 'Quantos artigos ou publicações você tem em veículos reconhecidos?',
    options: ['Nenhum', '1-5', '6-20', '21-50', 'Mais de 50'],
    scores: [0, 3, 13, 35, 75],
    valorationInput: 'publicacoes'
  },
  {
    id: 13,
    category: 'autoridade_credibilidade',
    question: 'Qual seu nível de formação acadêmica?',
    options: ['Ensino Médio', 'Graduação', 'Especialização', 'Mestrado', 'Doutorado'],
    scores: [1, 3, 5, 8, 12],
    valorationInput: 'formacao_academica'
  },
  {
    id: 14,
    category: 'autoridade_credibilidade',
    question: 'Quantos prêmios ou reconhecimentos profissionais você recebeu?',
    options: ['Nenhum', '1-2', '3-5', '6-10', 'Mais de 10'],
    scores: [0, 1.5, 4, 8, 15],
    valorationInput: 'premios_reconhecimentos'
  },
  {
    id: 15,
    category: 'autoridade_credibilidade',
    question: 'Com que frequência você é citado ou referenciado por outros especialistas?',
    options: ['Nunca', 'Raramente', 'Algumas vezes por mês', 'Semanalmente', 'Frequentemente'],
    scores: [0, 1, 3, 6, 10],
    valorationInput: 'citacoes_referencias'
  },
  {
    id: 16,
    category: 'autoridade_credibilidade',
    question: 'Qual o tamanho da sua rede profissional qualificada?',
    options: ['Menos de 100', '100-500', '500-2.000', '2.000-10.000', 'Mais de 10.000'],
    scores: [50, 300, 1250, 6000, 20000],
    valorationInput: 'rede_profissional'
  },

  // PROPRIEDADE INTELECTUAL (7 perguntas)
  {
    id: 17,
    category: 'propriedade_intelectual',
    question: 'Quantas marcas registradas você possui?',
    options: ['Nenhuma', '1', '2-3', '4-5', 'Mais de 5'],
    scores: [0, 2, 5, 8, 12],
    valorationInput: 'marcas_registradas'
  },
  {
    id: 18,
    category: 'propriedade_intelectual',
    question: 'Quantos livros ou e-books você publicou?',
    options: ['Nenhum', '1', '2-3', '4-7', 'Mais de 7'],
    scores: [0, 3, 6, 10, 15],
    valorationInput: 'livros_publicados'
  },
  {
    id: 19,
    category: 'propriedade_intelectual',
    question: 'Quantos cursos online você criou e comercializa?',
    options: ['Nenhum', '1', '2-3', '4-7', 'Mais de 7'],
    scores: [0, 2, 5, 9, 15],
    valorationInput: 'cursos_online'
  },
  {
    id: 20,
    category: 'propriedade_intelectual',
    question: 'Quantas patentes ou direitos autorais você registrou?',
    options: ['Nenhum', '1', '2-3', '4-7', 'Mais de 7'],
    scores: [0, 4, 8, 14, 25],
    valorationInput: 'patentes_direitos'
  },
  {
    id: 21,
    category: 'propriedade_intelectual',
    question: 'Qual a receita anual gerada pelos seus produtos intelectuais?',
    options: ['R$ 0', 'R$ 1-50K', 'R$ 50-200K', 'R$ 200K-1M', 'Mais de R$ 1M'],
    scores: [0, 25000, 125000, 600000, 2000000],
    valorationInput: 'receita_propriedade'
  },
  {
    id: 22,
    category: 'propriedade_intelectual',
    question: 'Quantos softwares ou ferramentas digitais você desenvolveu?',
    options: ['Nenhum', '1', '2-3', '4-7', 'Mais de 7'],
    scores: [0, 3, 6, 12, 20],
    valorationInput: 'softwares_ferramentas'
  },
  {
    id: 23,
    category: 'propriedade_intelectual',
    question: 'Quantos templates, planilhas ou recursos você licencia?',
    options: ['Nenhum', '1-5', '6-15', '16-30', 'Mais de 30'],
    scores: [0, 3, 10, 23, 40],
    valorationInput: 'templates_recursos'
  },

  // METODOLOGIAS & FRAMEWORKS (8 perguntas)
  {
    id: 24,
    category: 'metodologias_frameworks',
    question: 'Quantas metodologias exclusivas você desenvolveu?',
    options: ['Nenhuma', '1', '2-3', '4-5', 'Mais de 5'],
    scores: [0, 4, 8, 12, 20],
    valorationInput: 'metodologias_exclusivas'
  },
  {
    id: 25,
    category: 'metodologias_frameworks',
    question: 'Quantos frameworks estruturados você criou?',
    options: ['Nenhum', '1', '2-3', '4-7', 'Mais de 7'],
    scores: [0, 3, 6, 11, 18],
    valorationInput: 'frameworks_criados'
  },
  {
    id: 26,
    category: 'metodologias_frameworks',
    question: 'Quantos clientes aplicaram suas metodologias com sucesso?',
    options: ['Nenhum', '1-10', '11-50', '51-200', 'Mais de 200'],
    scores: [0, 5, 30, 125, 400],
    valorationInput: 'clientes_metodologia'
  },
  {
    id: 27,
    category: 'metodologias_frameworks',
    question: 'Qual o resultado médio alcançado pelos clientes com suas metodologias?',
    options: ['Não mensurado', '10-30% melhoria', '30-100% melhoria', '100-300% melhoria', 'Mais de 300%'],
    scores: [0, 1.2, 1.65, 2, 3],
    valorationInput: 'resultado_metodologia'
  },
  {
    id: 28,
    category: 'metodologias_frameworks',
    question: 'Quantos processos únicos você sistematizou?',
    options: ['Nenhum', '1-3', '4-8', '9-15', 'Mais de 15'],
    scores: [0, 2, 6, 12, 20],
    valorationInput: 'processos_sistematizados'
  },
  {
    id: 29,
    category: 'metodologias_frameworks',
    question: 'Suas metodologias são replicáveis por outros profissionais?',
    options: ['Não são replicáveis', 'Parcialmente', 'Com treinamento', 'Facilmente replicáveis', 'Totalmente sistematizadas'],
    scores: [1, 1.5, 2, 2.5, 3],
    valorationInput: 'replicabilidade'
  },
  {
    id: 30,
    category: 'metodologias_frameworks',
    question: 'Quantos estudos de caso documentados você possui?',
    options: ['Nenhum', '1-5', '6-15', '16-30', 'Mais de 30'],
    scores: [0, 3, 10, 23, 40],
    valorationInput: 'estudos_caso'
  },
  {
    id: 31,
    category: 'metodologias_frameworks',
    question: 'Qual o tempo médio para implementação das suas metodologias?',
    options: ['Mais de 1 ano', '6-12 meses', '3-6 meses', '1-3 meses', 'Menos de 1 mês'],
    scores: [1, 1.5, 2, 2.5, 3],
    valorationInput: 'tempo_implementacao'
  },

  // CONTEÚDO & CRIAÇÕES (8 perguntas)
  {
    id: 32,
    category: 'conteudo_criacoes',
    question: 'Quantos vídeos educacionais você produziu?',
    options: ['Nenhum', '1-20', '21-100', '101-500', 'Mais de 500'],
    scores: [0, 10, 60, 300, 1000],
    valorationInput: 'videos_educacionais'
  },
  {
    id: 33,
    category: 'conteudo_criacoes',
    question: 'Quantos podcasts ou programas você criou/participou?',
    options: ['Nenhum', '1-10', '11-50', '51-200', 'Mais de 200'],
    scores: [0, 5, 30, 125, 400],
    valorationInput: 'podcasts_programas'
  },
  {
    id: 34,
    category: 'conteudo_criacoes',
    question: 'Quantos webinars ou masterclasses você realizou?',
    options: ['Nenhum', '1-10', '11-50', '51-200', 'Mais de 200'],
    scores: [0, 5, 30, 125, 400],
    valorationInput: 'webinars_masterclasses'
  },
  {
    id: 35,
    category: 'conteudo_criacoes',
    question: 'Qual o alcance total dos seus conteúdos (visualizações/downloads)?',
    options: ['Menos de 10K', '10K-100K', '100K-1M', '1M-10M', 'Mais de 10M'],
    scores: [5000, 55000, 550000, 5500000, 25000000],
    valorationInput: 'alcance_conteudo'
  },
  {
    id: 36,
    category: 'conteudo_criacoes',
    question: 'Quantos templates, checklists ou recursos você criou?',
    options: ['Nenhum', '1-10', '11-30', '31-100', 'Mais de 100'],
    scores: [0, 5, 20, 65, 150],
    valorationInput: 'recursos_criados'
  },
  {
    id: 37,
    category: 'conteudo_criacoes',
    question: 'Qual a frequência de criação de conteúdo original?',
    options: ['Raramente', 'Mensalmente', 'Semanalmente', 'Várias vezes/semana', 'Diariamente'],
    scores: [1, 2, 3, 4, 5],
    valorationInput: 'frequencia_criacao'
  },
  {
    id: 38,
    category: 'conteudo_criacoes',
    question: 'Quantas horas de conteúdo educacional você acumulou?',
    options: ['Menos de 10h', '10-50h', '50-200h', '200-1000h', 'Mais de 1000h'],
    scores: [5, 30, 125, 600, 2000],
    valorationInput: 'horas_conteudo'
  },
  {
    id: 39,
    category: 'conteudo_criacoes',
    question: 'Qual o nível de exclusividade dos seus conteúdos?',
    options: ['Muito comum', 'Parcialmente único', 'Majoritariamente único', 'Altamente exclusivo', 'Totalmente inovador'],
    scores: [1, 1.5, 2, 2.5, 3],
    valorationInput: 'exclusividade_conteudo'
  },

  // REDE/RELACIONAMENTOS (6 perguntas)
  {
    id: 40,
    category: 'rede_relacionamentos',
    question: 'Quantos parceiros estratégicos você possui?',
    options: ['Nenhum', '1-5', '6-15', '16-30', 'Mais de 30'],
    scores: [0, 3, 10, 23, 40],
    valorationInput: 'parceiros_estrategicos'
  },
  {
    id: 41,
    category: 'rede_relacionamentos',
    question: 'Quantos influenciadores da sua área você conhece pessoalmente?',
    options: ['Nenhum', '1-5', '6-15', '16-50', 'Mais de 50'],
    scores: [0, 3, 10, 33, 75],
    valorationInput: 'influenciadores_conhecidos'
  },
  {
    id: 42,
    category: 'rede_relacionamentos',
    question: 'Quantas empresas/organizações você tem acesso direto ao CEO/fundador?',
    options: ['Nenhuma', '1-5', '6-15', '16-50', 'Mais de 50'],
    scores: [0, 3, 10, 33, 75],
    valorationInput: 'acesso_ceos'
  },
  {
    id: 43,
    category: 'rede_relacionamentos',
    question: 'Qual a qualidade média da sua rede profissional?',
    options: ['Iniciantes', 'Profissionais médios', 'Especialistas', 'Líderes seniores', 'C-Level/Fundadores'],
    scores: [1, 2, 3, 4, 5],
    valorationInput: 'qualidade_rede'
  },
  {
    id: 44,
    category: 'rede_relacionamentos',
    question: 'Quantas indicações qualificadas você recebe mensalmente?',
    options: ['Nenhuma', '1-5', '6-15', '16-30', 'Mais de 30'],
    scores: [0, 3, 10, 23, 40],
    valorationInput: 'indicacoes_mensais'
  },
  {
    id: 45,
    category: 'rede_relacionamentos',
    question: 'Qual sua capacidade de mobilizar sua rede para projetos?',
    options: ['Muito baixa', 'Baixa', 'Moderada', 'Alta', 'Muito alta'],
    scores: [1, 1.5, 2, 2.5, 3],
    valorationInput: 'capacidade_mobilizacao'
  }
];

export default function QuestionarioPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const categoryNames = {
    consistencia_marca: 'Consistência de Marca',
    autoridade_credibilidade: 'Autoridade & Credibilidade', 
    propriedade_intelectual: 'Propriedade Intelectual',
    metodologias_frameworks: 'Metodologias & Frameworks',
    conteudo_criacoes: 'Conteúdo & Criações',
    rede_relacionamentos: 'Rede & Relacionamentos'
  };

  const categoryIcons = {
    consistencia_marca: <Crown className="w-6 h-6" />,
    autoridade_credibilidade: <Target className="w-6 h-6" />,
    propriedade_intelectual: <CheckCircle className="w-6 h-6" />,
    metodologias_frameworks: <Zap className="w-6 h-6" />,
    conteudo_criacoes: <TrendingUp className="w-6 h-6" />,
    rede_relacionamentos: <Users className="w-6 h-6" />
  };

  const handleAnswer = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    
    setTimeout(() => {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = optionIndex;
      setAnswers(newAnswers);
      
      if (currentQuestion < questions.length - 1) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedOption(null);
          setAnimationKey(prev => prev + 1);
          setIsTransitioning(false);
        }, 300);
      } else {
        setTimeout(() => {
          setShowResult(true);
        }, 800);
      }
    }, 600);
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1);
        setSelectedOption(answers[currentQuestion - 1] ?? null);
        setAnimationKey(prev => prev + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const calculateValuation = () => {
    let valoracaoData: any = {};
    
    questions.forEach((question, index) => {
      if (answers[index] !== undefined) {
        valoracaoData[question.valorationInput] = question.scores[answers[index]];
      }
    });

    // MÉTODO 1: Relief from Royalty Method (RRM)
    const receitaBase = valoracaoData.receita_base || 0;
    const royaltyRate = 0.15 + (valoracaoData.tempo_consistencia / 100) + (valoracaoData.frequencia_conteudo / 200);
    const crescimentoAudiencia = Math.min(valoracaoData.tamanho_audiencia / 1000, 50);
    const valorRRM = receitaBase * royaltyRate * (1 + crescimentoAudiencia / 100) * 5;

    // MÉTODO 2: Multi-Period Excess Earnings Method (MPEEM)
    const fluxoCaixaBase = receitaBase * 0.25;
    const premioRisco = 1 + (valoracaoData.experiencia_comprovada / 100) + (valoracaoData.certificacoes / 200);
    const capacidadeGeracao = (valoracaoData.clientes_metodologia + valoracaoData.alcance_conteudo) / 10000;
    const valorMPEEM = fluxoCaixaBase * premioRisco * capacidadeGeracao * 8;

    // MÉTODO 3: With and Without Method (WWM)
    const cenarioComAtivos = receitaBase * (1 + valoracaoData.resultado_metodologia);
    const cenarioSemAtivos = receitaBase * 0.3;
    const valorWWM = (cenarioComAtivos - cenarioSemAtivos) * 6;

    const valoracaoFinal = Math.max(valorRRM, valorMPEEM, valorWWM);
    const valorFormatado = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(valoracaoFinal);

    return {
      valor: valoracaoFinal,
      valorFormatado,
      metodoUtilizado: valorRRM >= Math.max(valorMPEEM, valorWWM) ? 'Relief from Royalty' : 
                      valorMPEEM >= valorWWM ? 'Multi-Period Excess Earnings' : 'With and Without'
    };
  };

  if (showResult) {
    const resultado = calculateValuation();
    const economia = ((50000 - 197) / 50000) * 100;
    const roi = (resultado.valor / 197) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-8 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-6 py-2 mb-4">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-green-800 font-semibold">Avaliação Concluída!</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
              Seus Ativos Intangíveis Valem:
            </h1>
            <div className="text-5xl md:text-7xl font-bold text-green-600 mb-4 animate-pulse-glow">
              {resultado.valorFormatado}
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Calculado usando o método <strong>{resultado.metodoUtilizado}</strong> - 
              mesmo usado por McKinsey, BCG e PwC
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <DollarSign className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">{roi.toFixed(0)}%</div>
              <div className="text-gray-600">ROI do Investimento</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <TrendingUp className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">{economia.toFixed(1)}%</div>
              <div className="text-gray-600">Economia vs Consultoria</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <Zap className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">5 min</div>
              <div className="text-gray-600">Tempo de Análise</div>
            </div>
          </div>

          <div className="text-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎯 Quer um Relatório Detalhado de 40+ Páginas?
              </h3>
              <p className="text-gray-600 mb-6">
                Descubra exatamente como maximizar cada um dos seus 6 tipos de ativos intangíveis
              </p>
              <AnimatedButton
                size="xl"
                icon={ArrowRight}
                onClick={() => window.location.href = '/questionario-profundo'}
                className="animate-pulse-glow"
              >
                Ver Análise Completa por R$ 197
              </AnimatedButton>
            </div>
            
            <p className="text-gray-500 text-sm">
              💡 Consultores tradicionais cobram R$ 50.000+ pela mesma análise
            </p>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header com Progress */}
        <div className="mb-8 animate-fadeInUp">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={goToPrevious}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Anterior</span>
            </button>
            
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2">
              {categoryIcons[currentQ.category]}
              <span className="text-sm font-semibold text-purple-800">
                {categoryNames[currentQ.category]}
              </span>
            </div>
          </div>
          
          <ProgressBar current={currentQuestion + 1} total={questions.length} />
        </div>

        {/* Question Card */}
        <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
          <div key={animationKey} className="bg-white rounded-3xl shadow-xl p-8 md:p-12 animate-fadeInScale">
            <div className="text-center mb-8">
              <div className="text-purple-600 mb-4">
                {categoryIcons[currentQ.category]}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-relaxed">
                {currentQ.question}
              </h2>
            </div>

            <div className="space-y-4">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedOption !== null}
                  className={`w-full p-4 md:p-6 rounded-2xl border-2 transition-all duration-300 text-left font-medium ${
                    selectedOption === index
                      ? 'border-green-500 bg-green-50 text-green-800 transform scale-105 shadow-lg'
                      : selectedOption !== null
                      ? 'border-gray-200 bg-gray-50 text-gray-400'
                      : 'border-gray-200 bg-white text-gray-800 hover:border-purple-300 hover:bg-purple-50 hover:transform hover:scale-102 interactive'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {selectedOption === index && (
                      <CheckCircle className="w-6 h-6 text-green-500 animate-fadeInScale" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Pergunta {currentQuestion + 1} de {questions.length} • 
                Tempo restante: ~{Math.ceil((questions.length - currentQuestion - 1) * 0.5)} minutos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}