'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp, DollarSign } from 'lucide-react';

interface Question {
  id: number;
  category: 'consistencia_marca' | 'autoridade_credibilidade' | 'propriedade_intelectual' | 'metodologias_frameworks' | 'conteudo_criacoes' | 'rede_relacionamentos';
  question: string;
  options: string[];
  scores: number[];
  valorationInput: string; // Novo campo para inputs de valoração
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
    question: 'Qual é sua taxa de engajamento média nas redes sociais?',
    options: ['Menos de 1%', '1-3%', '3-5%', '5-8%', 'Mais de 8%'],
    scores: [0.5, 2, 4, 6.5, 10],
    valorationInput: 'taxa_engajamento'
  },
  {
    id: 6,
    category: 'consistencia_marca',
    question: 'Você possui marca registrada ou proteção legal da sua marca pessoal?',
    options: ['Não', 'Em processo', 'Marca registrada nacional', 'Marca registrada internacional', 'Portfólio completo de proteção'],
    scores: [1, 2, 3, 4, 5],
    valorationInput: 'protecao_marca'
  },
  {
    id: 7,
    category: 'consistencia_marca',
    question: 'Quantos parceiros estratégicos ou embaixadores você possui?',
    options: ['Nenhum', '1-3', '4-10', '11-25', 'Mais de 25'],
    scores: [0, 2, 7, 18, 35],
    valorationInput: 'parceiros_estrategicos'
  },
  {
    id: 8,
    category: 'consistencia_marca',
    question: 'Qual é o valor médio dos seus produtos/serviços?',
    options: ['Até R$ 500', 'R$ 501 - R$ 2.000', 'R$ 2.001 - R$ 10.000', 'R$ 10.001 - R$ 50.000', 'Acima de R$ 50.000'],
    scores: [250, 1250, 6000, 30000, 75000],
    valorationInput: 'valor_medio_produto'
  },

  // AUTORIDADE E CREDIBILIDADE (8 perguntas)
  {
    id: 9,
    category: 'autoridade_credibilidade',
    question: 'Quantas certificações, diplomas ou credenciais relevantes você possui?',
    options: ['Nenhuma', '1-2', '3-5', '6-10', 'Mais de 10'],
    scores: [0, 1.5, 4, 8, 15],
    valorationInput: 'credenciais'
  },
  {
    id: 10,
    category: 'autoridade_credibilidade',
    question: 'Quantas palestras, workshops ou apresentações você fez no último ano?',
    options: ['Nenhuma', '1-5', '6-15', '16-30', 'Mais de 30'],
    scores: [0, 3, 10, 23, 40],
    valorationInput: 'palestras_ano'
  },
  {
    id: 11,
    category: 'autoridade_credibilidade',
    question: 'Quantas publicações (artigos, livros, papers) você possui?',
    options: ['Nenhuma', '1-3', '4-10', '11-25', 'Mais de 25'],
    scores: [0, 2, 7, 18, 35],
    valorationInput: 'publicacoes'
  },
  {
    id: 12,
    category: 'autoridade_credibilidade',
    question: 'Qual é sua posição em rankings ou listas do seu setor?',
    options: ['Não apareço', 'Top 100', 'Top 50', 'Top 20', 'Top 10'],
    scores: [1, 2, 3, 4, 5],
    valorationInput: 'ranking_setor'
  },
  {
    id: 13,
    category: 'autoridade_credibilidade',
    question: 'Quantas menções na mídia (entrevistas, citações) você teve no último ano?',
    options: ['Nenhuma', '1-5', '6-15', '16-30', 'Mais de 30'],
    scores: [0, 3, 10, 23, 40],
    valorationInput: 'mencoes_midia'
  },
  {
    id: 14,
    category: 'autoridade_credibilidade',
    question: 'Qual é o premium de preço que você consegue cobrar em relação à concorrência?',
    options: ['Mesmos preços', '10-20% maior', '20-40% maior', '40-70% maior', 'Mais de 70% maior'],
    scores: [0, 15, 30, 55, 85],
    valorationInput: 'premium_preco'
  },
  {
    id: 15,
    category: 'autoridade_credibilidade',
    question: 'Quantos casos de sucesso documentados você possui?',
    options: ['Nenhum', '1-10', '11-25', '26-50', 'Mais de 50'],
    scores: [0, 5, 18, 38, 75],
    valorationInput: 'casos_sucesso'
  },
  {
    id: 16,
    category: 'autoridade_credibilidade',
    question: 'Qual é sua taxa de retenção de clientes?',
    options: ['Menos de 50%', '50-70%', '70-85%', '85-95%', 'Mais de 95%'],
    scores: [40, 60, 77.5, 90, 97.5],
    valorationInput: 'taxa_retencao'
  },

  // PROPRIEDADE INTELECTUAL (7 perguntas)
  {
    id: 17,
    category: 'propriedade_intelectual',
    question: 'Quantas metodologias proprietárias você desenvolveu?',
    options: ['Nenhuma', '1-2', '3-5', '6-10', 'Mais de 10'],
    scores: [0, 1.5, 4, 8, 15],
    valorationInput: 'metodologias_proprietarias'
  },
  {
    id: 18,
    category: 'propriedade_intelectual',
    question: 'Quantos frameworks únicos você criou?',
    options: ['Nenhum', '1-2', '3-5', '6-10', 'Mais de 10'],
    scores: [0, 1.5, 4, 8, 15],
    valorationInput: 'frameworks_unicos'
  },
  {
    id: 19,
    category: 'propriedade_intelectual',
    question: 'Você possui patentes, marcas registradas ou direitos autorais?',
    options: ['Nenhum', 'Em processo', '1-3 registros', '4-10 registros', 'Mais de 10 registros'],
    scores: [0, 1, 2, 4, 5],
    valorationInput: 'registros_pi'
  },
  {
    id: 20,
    category: 'propriedade_intelectual',
    question: 'Qual é o tempo de desenvolvimento investido nas suas metodologias (em anos)?',
    options: ['Menos de 1 ano', '1-2 anos', '3-5 anos', '6-10 anos', 'Mais de 10 anos'],
    scores: [0.5, 1.5, 4, 8, 12],
    valorationInput: 'tempo_desenvolvimento'
  },
  {
    id: 21,
    category: 'propriedade_intelectual',
    question: 'Suas metodologias são aplicáveis em outros países/culturas?',
    options: ['Apenas local', 'Regional', 'Nacional', 'Internacional', 'Global'],
    scores: [1, 2, 3, 4, 5],
    valorationInput: 'aplicabilidade_global'
  },
  {
    id: 22,
    category: 'propriedade_intelectual',
    question: 'Quantos profissionais você já treinou para aplicar suas metodologias?',
    options: ['Nenhum', '1-10', '11-50', '51-200', 'Mais de 200'],
    scores: [0, 5, 30, 125, 300],
    valorationInput: 'profissionais_treinados'
  },
  {
    id: 23,
    category: 'propriedade_intelectual',
    question: 'Qual é o potencial de licenciamento das suas metodologias?',
    options: ['Baixo', 'Moderado', 'Alto', 'Muito alto', 'Extremamente alto'],
    scores: [1, 2, 3, 4, 5],
    valorationInput: 'potencial_licenciamento'
  },

  // METODOLOGIAS E FRAMEWORKS (8 perguntas)
  {
    id: 24,
    category: 'metodologias_frameworks',
    question: 'Qual percentual da sua receita é atribuível às suas metodologias proprietárias?',
    options: ['0-20%', '21-40%', '41-60%', '61-80%', '81-100%'],
    scores: [10, 30, 50, 70, 90],
    valorationInput: 'receita_atribuivel'
  },
  {
    id: 25,
    category: 'metodologias_frameworks',
    question: 'Quantos clientes diferentes já aplicaram suas metodologias?',
    options: ['Nenhum', '1-10', '11-50', '51-200', 'Mais de 200'],
    scores: [0, 5, 30, 125, 300],
    valorationInput: 'clientes_metodologia'
  },
  {
    id: 26,
    category: 'metodologias_frameworks',
    question: 'Qual é a taxa de sucesso documentada das suas metodologias?',
    options: ['Menos de 50%', '50-70%', '70-85%', '85-95%', 'Mais de 95%'],
    scores: [40, 60, 77.5, 90, 97.5],
    valorationInput: 'taxa_sucesso_metodologia'
  },
  {
    id: 27,
    category: 'metodologias_frameworks',
    question: 'Há quanto tempo suas metodologias vêm sendo refinadas?',
    options: ['Menos de 1 ano', '1-2 anos', '3-5 anos', '6-10 anos', 'Mais de 10 anos'],
    scores: [0.5, 1.5, 4, 8, 12],
    valorationInput: 'tempo_refinamento'
  },
  {
    id: 28,
    category: 'metodologias_frameworks',
    question: 'Suas metodologias possuem ferramentas de suporte (software, planilhas, etc.)?',
    options: ['Nenhuma', 'Básicas', 'Intermediárias', 'Avançadas', 'Suite completa'],
    scores: [1, 2, 3, 4, 5],
    valorationInput: 'ferramentas_suporte'
  },
  {
    id: 29,
    category: 'metodologias_frameworks',
    question: 'Qual é o ROI médio que seus clientes obtêm com suas metodologias?',
    options: ['1-2x', '2-5x', '5-10x', '10-20x', 'Mais de 20x'],
    scores: [1.5, 3.5, 7.5, 15, 25],
    valorationInput: 'roi_clientes'
  },
  {
    id: 30,
    category: 'metodologias_frameworks',
    question: 'Você possui sistema de certificação para suas metodologias?',
    options: ['Não', 'Em desenvolvimento', 'Básico', 'Intermediário', 'Completo e reconhecido'],
    scores: [1, 2, 3, 4, 5],
    valorationInput: 'sistema_certificacao'
  },
  {
    id: 31,
    category: 'metodologias_frameworks',
    question: 'Quantas empresas/organizações usam suas metodologias regularmente?',
    options: ['Nenhuma', '1-5', '6-20', '21-50', 'Mais de 50'],
    scores: [0, 3, 13, 35, 75],
    valorationInput: 'empresas_usuarios'
  },

  // CONTEÚDO E CRIAÇÕES (8 perguntas)
  {
    id: 32,
    category: 'conteudo_criacoes',
    question: 'Quantos livros, e-books ou guias você publicou?',
    options: ['Nenhum', '1-2', '3-5', '6-10', 'Mais de 10'],
    scores: [0, 1.5, 4, 8, 15],
    valorationInput: 'livros_publicados'
  },
  {
    id: 33,
    category: 'conteudo_criacoes',
    question: 'Quantos cursos online você possui?',
    options: ['Nenhum', '1-2', '3-5', '6-10', 'Mais de 10'],
    scores: [0, 1.5, 4, 8, 15],
    valorationInput: 'cursos_online'
  },
  {
    id: 34,
    category: 'conteudo_criacoes',
    question: 'Qual é o número total de artigos/posts que você já publicou?',
    options: ['0-50', '51-200', '201-500', '501-1000', 'Mais de 1000'],
    scores: [25, 125, 350, 750, 1500],
    valorationInput: 'artigos_publicados'
  },
  {
    id: 35,
    category: 'conteudo_criacoes',
    question: 'Quantos vídeos educacionais/tutoriais você possui?',
    options: ['0-10', '11-50', '51-200', '201-500', 'Mais de 500'],
    scores: [5, 30, 125, 350, 750],
    valorationInput: 'videos_educacionais'
  },
  {
    id: 36,
    category: 'conteudo_criacoes',
    question: 'Qual é o tempo médio de vida útil do seu conteúdo?',
    options: ['Menos de 1 ano', '1-2 anos', '3-5 anos', '6-10 anos', 'Mais de 10 anos'],
    scores: [0.5, 1.5, 4, 8, 12],
    valorationInput: 'vida_util_conteudo'
  },
  {
    id: 37,
    category: 'conteudo_criacoes',
    question: 'Qual é a receita gerada especificamente pelo seu conteúdo?',
    options: ['0-10% da receita', '11-25%', '26-50%', '51-75%', 'Mais de 75%'],
    scores: [5, 18, 38, 63, 87.5],
    valorationInput: 'receita_conteudo'
  },
  {
    id: 38,
    category: 'conteudo_criacoes',
    question: 'Quantas visualizações/downloads totais seu conteúdo possui?',
    options: ['0-10.000', '10.001-100.000', '100.001-1M', '1M-10M', 'Mais de 10M'],
    scores: [5000, 55000, 550000, 5500000, 15000000],
    valorationInput: 'visualizacoes_totais'
  },
  {
    id: 39,
    category: 'conteudo_criacoes',
    question: 'Seu conteúdo é protegido por direitos autorais ou licenças específicas?',
    options: ['Não', 'Proteção básica', 'Direitos autorais', 'Licenças específicas', 'Proteção completa'],
    scores: [1, 2, 3, 4, 5],
    valorationInput: 'protecao_conteudo'
  },

  // REDE DE RELACIONAMENTOS (8 perguntas)
  {
    id: 40,
    category: 'rede_relacionamentos',
    question: 'Quantos contatos profissionais relevantes você possui?',
    options: ['0-100', '101-500', '501-2000', '2001-5000', 'Mais de 5000'],
    scores: [50, 300, 1250, 3500, 7500],
    valorationInput: 'contatos_profissionais'
  },
  {
    id: 41,
    category: 'rede_relacionamentos',
    question: 'Quantas parcerias estratégicas ativas você possui?',
    options: ['Nenhuma', '1-5', '6-15', '16-30', 'Mais de 30'],
    scores: [0, 3, 10, 23, 40],
    valorationInput: 'parcerias_ativas'
  },
  {
    id: 42,
    category: 'rede_relacionamentos',
    question: 'Qual percentual de novos negócios vem via referências?',
    options: ['0-20%', '21-40%', '41-60%', '61-80%', '81-100%'],
    scores: [10, 30, 50, 70, 90],
    valorationInput: 'negocios_referencia'
  },
  {
    id: 43,
    category: 'rede_relacionamentos',
    question: 'Quantos mentores ou advisors você possui?',
    options: ['Nenhum', '1-2', '3-5', '6-10', 'Mais de 10'],
    scores: [0, 1.5, 4, 8, 15],
    valorationInput: 'mentores_advisors'
  },
  {
    id: 44,
    category: 'rede_relacionamentos',
    question: 'Você participa de quantos grupos/comunidades profissionais?',
    options: ['Nenhum', '1-3', '4-8', '9-15', 'Mais de 15'],
    scores: [0, 2, 6, 12, 20],
    valorationInput: 'grupos_profissionais'
  },
  {
    id: 45,
    category: 'rede_relacionamentos',
    question: 'Qual é sua taxa de conversão através da rede de contatos?',
    options: ['0-5%', '6-15%', '16-30%', '31-50%', 'Mais de 50%'],
    scores: [2.5, 10.5, 23, 40.5, 65],
    valorationInput: 'taxa_conversao_rede'
  }
];

export default function QuestionarioPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [isComplete, setIsComplete] = useState(false);
  const [userInfo, setUserInfo] = useState({
    nome: '',
    email: '',
    telefone: ''
  });
  const [showUserForm, setShowUserForm] = useState(true);

  const handleAnswer = (questionId: number, score: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: score
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleUserSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInfo.nome && userInfo.email) {
      setShowUserForm(false);
    }
  };

  // Cálculo baseado no Framework Aprimorado de Valoração
  const calculateValuation = () => {
    const inputs: { [key: string]: number } = {};
    
    // Extrair inputs das respostas
    questions.forEach(q => {
      const answer = answers[q.id];
      if (answer !== undefined) {
        inputs[q.valorationInput] = answer;
      }
    });

    // 1. CONSISTÊNCIA DE MARCA PESSOAL (Relief from Royalty Method)
    const receitaBase = inputs.receita_base || 100000;
    const tempoConsistencia = inputs.tempo_consistencia || 1;
    const multiplicadorTemporal = Math.min(1 + (tempoConsistencia * 0.1), 2.0);
    const taxaRoyaltyBase = 0.05; // 5% base
    const taxaRoyaltyAjustada = taxaRoyaltyBase * (1 + (inputs.frequencia_conteudo || 1) * 0.2) * (1 + (inputs.protecao_marca || 1) * 0.1);
    const taxaDesconto = 0.18;
    const taxaImposto = 0.30;
    
    let vmcm = 0;
    for (let t = 1; t <= 5; t++) {
      const receitaPeriodo = receitaBase * Math.pow(1.15, t); // 15% crescimento
      vmcm += (receitaPeriodo * taxaRoyaltyAjustada * (1 - taxaImposto)) / Math.pow(1 + taxaDesconto, t);
    }
    vmcm *= multiplicadorTemporal;

    // 2. AUTORIDADE E CREDIBILIDADE (With and Without Method)
    const premiumPreco = (inputs.premium_preco || 0) / 100;
    const diferencialVolume = Math.min((inputs.publicacoes || 0) * 0.02 + (inputs.mencoes_midia || 0) * 0.01, 0.3);
    
    let vma = 0;
    for (let t = 1; t <= 5; t++) {
      const receitaPeriodo = receitaBase * Math.pow(1.15, t);
      const fccCom = receitaPeriodo * (1 + premiumPreco) * (1 + diferencialVolume);
      const fccSem = receitaPeriodo;
      vma += (fccCom - fccSem) / Math.pow(1 + 0.20, t);
    }

    // 3. PROPRIEDADE INTELECTUAL (Relief from Royalty Method)
    const metodologiasProprietarias = inputs.metodologias_proprietarias || 0;
    const frameworksUnicos = inputs.frameworks_unicos || 0;
    const totalPI = metodologiasProprietarias + frameworksUnicos;
    const taxaRoyaltyPI = Math.min(0.10 + (totalPI * 0.02), 0.20); // 10-20%
    const fatorProtecao = 0.8 + (inputs.registros_pi || 0) * 0.05;
    
    let vpi = 0;
    for (let t = 1; t <= 10; t++) {
      const receitaPeriodo = receitaBase * Math.pow(1.12, t);
      vpi += (receitaPeriodo * taxaRoyaltyPI * (1 - taxaImposto)) / Math.pow(1 + 0.22, t);
    }
    vpi *= fatorProtecao;

    // 4. METODOLOGIAS E FRAMEWORKS (Multi-Period Excess Earnings Method)
    const receitaAtribuivel = (inputs.receita_atribuivel || 50) / 100;
    const taxaRetorno = 0.15;
    
    let vmp = 0;
    for (let t = 1; t <= 7; t++) {
      const receitaPeriodo = receitaBase * Math.pow(1.18, t) * receitaAtribuivel;
      const despesas = receitaPeriodo * 0.40;
      const encargosCapital = (vmcm + vma + vpi) * taxaRetorno;
      const excessEarnings = receitaPeriodo - despesas - encargosCapital;
      vmp += Math.max(excessEarnings, 0) / Math.pow(1 + 0.22, t);
    }

    // 5. CONTEÚDO E CRIAÇÕES (Relief from Royalty Method)
    const livros = inputs.livros_publicados || 0;
    const cursos = inputs.cursos_online || 0;
    const videos = inputs.videos_educacionais || 0;
    const totalConteudo = livros + cursos + (videos / 10);
    const taxaRoyaltyConteudo = Math.min(0.12 + (totalConteudo * 0.01), 0.25);
    const fatorDurabilidade = 0.8 + (inputs.vida_util_conteudo || 1) * 0.05;
    
    let vpc = 0;
    const receitaConteudo = receitaBase * ((inputs.receita_conteudo || 20) / 100);
    for (let t = 1; t <= 6; t++) {
      const receitaPeriodo = receitaConteudo * Math.pow(1.10, t);
      vpc += (receitaPeriodo * taxaRoyaltyConteudo * (1 - taxaImposto)) / Math.pow(1 + 0.18, t);
    }
    vpc *= fatorDurabilidade;

    // 6. REDE DE RELACIONAMENTOS (With and Without Method)
    const negociosReferencia = (inputs.negocios_referencia || 20) / 100;
    const taxaConversaoRede = (inputs.taxa_conversao_rede || 10) / 100;
    const diferencialRede = negociosReferencia * taxaConversaoRede;
    
    let vcr = 0;
    for (let t = 1; t <= 4; t++) {
      const receitaPeriodo = receitaBase * Math.pow(1.12, t);
      const fccComRede = receitaPeriodo * (1 + diferencialRede);
      const fccSemRede = receitaPeriodo;
      vcr += (fccComRede - fccSemRede) / Math.pow(1 + 0.22, t);
    }

    // VALOR TOTAL
    const valorTotal = vmcm + vma + vpi + vmp + vpc + vcr;

    return {
      consistencia_marca: Math.round(vmcm),
      autoridade_credibilidade: Math.round(vma),
      propriedade_intelectual: Math.round(vpi),
      metodologias_frameworks: Math.round(vmp),
      conteudo_criacoes: Math.round(vpc),
      rede_relacionamentos: Math.round(vcr),
      valor_total: Math.round(valorTotal),
      receita_base: receitaBase
    };
  };

  if (showUserForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <DollarSign className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-purple-900 mb-4">
              Avaliação de Ativos Intangíveis
            </h1>
            <p className="text-gray-600">
              Descubra o valor monetário dos seus ativos intangíveis com metodologia científica internacional
            </p>
          </div>

          <form onSubmit={handleUserSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                value={userInfo.nome}
                onChange={(e) => setUserInfo(prev => ({ ...prev, nome: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                value={userInfo.email}
                onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Telefone (opcional)
              </label>
              <input
                type="tel"
                value={userInfo.telefone}
                onChange={(e) => setUserInfo(prev => ({ ...prev, telefone: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Iniciar Avaliação Científica
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (isComplete) {
    const valuation = calculateValuation();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <div className="mb-8">
              <TrendingUp className="w-20 h-20 text-green-500 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-purple-900 mb-4">
                Parabéns, {userInfo.nome}!
              </h1>
              <p className="text-gray-600 mb-8">
                Sua avaliação de ativos intangíveis foi concluída. Aqui está o valor monetário dos seus ativos:
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4">
                💰 Valor Total dos Seus Ativos Intangíveis
              </h2>
              <div className="text-6xl font-bold text-green-600 mb-4">
                R$ {valuation.valor_total.toLocaleString('pt-BR')}
              </div>
              <p className="text-green-700">
                Baseado em metodologias internacionais de valuation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Consistência de Marca</h3>
                <div className="text-2xl font-bold text-blue-600">
                  R$ {valuation.consistencia_marca.toLocaleString('pt-BR')}
                </div>
                <p className="text-sm text-blue-700 mt-2">Relief from Royalty Method</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Autoridade & Credibilidade</h3>
                <div className="text-2xl font-bold text-green-600">
                  R$ {valuation.autoridade_credibilidade.toLocaleString('pt-BR')}
                </div>
                <p className="text-sm text-green-700 mt-2">With and Without Method</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Propriedade Intelectual</h3>
                <div className="text-2xl font-bold text-purple-600">
                  R$ {valuation.propriedade_intelectual.toLocaleString('pt-BR')}
                </div>
                <p className="text-sm text-purple-700 mt-2">Relief from Royalty Method</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">Metodologias & Frameworks</h3>
                <div className="text-2xl font-bold text-orange-600">
                  R$ {valuation.metodologias_frameworks.toLocaleString('pt-BR')}
                </div>
                <p className="text-sm text-orange-700 mt-2">Multi-Period Excess Earnings</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-pink-900 mb-2">Conteúdo & Criações</h3>
                <div className="text-2xl font-bold text-pink-600">
                  R$ {valuation.conteudo_criacoes.toLocaleString('pt-BR')}
                </div>
                <p className="text-sm text-pink-700 mt-2">Relief from Royalty Method</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-indigo-900 mb-2">Rede de Relacionamentos</h3>
                <div className="text-2xl font-bold text-indigo-600">
                  R$ {valuation.rede_relacionamentos.toLocaleString('pt-BR')}
                </div>
                <p className="text-sm text-indigo-700 mt-2">With and Without Method</p>
              </div>
            </div>

            <div className="text-left bg-gray-50 p-6 rounded-2xl mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Metodologia Científica Aplicada:</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div>
                  <strong>Relief from Royalty Method:</strong> Marca, PI e Conteúdo
                </div>
                <div>
                  <strong>With and Without Method:</strong> Autoridade e Rede
                </div>
                <div>
                  <strong>Multi-Period Excess Earnings:</strong> Metodologias
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Múltiplo sobre Receita:</strong> {(valuation.valor_total / valuation.receita_base).toFixed(1)}x
                  | <strong>Base de Receita:</strong> R$ {valuation.receita_base.toLocaleString('pt-BR')}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl mb-8">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">
                🚀 Quer um relatório detalhado de 40+ páginas?
              </h3>
              <p className="text-gray-700 mb-4">
                Receba uma análise completa com benchmarking, plano de maximização de valor, 
                projeções futuras e estratégias específicas baseadas em metodologias científicas de valuation.
              </p>
              <button 
                onClick={() => window.location.href = '/questionario-profundo'}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-8 rounded-lg font-semibold hover:shadow-lg transition-all text-lg"
              >
                Análise Profunda Completa - R$ 197,00
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];
  const isAnswered = answers[currentQ.id] !== undefined;

  const categoryNames = {
    'consistencia_marca': 'Consistência de Marca',
    'autoridade_credibilidade': 'Autoridade & Credibilidade',
    'propriedade_intelectual': 'Propriedade Intelectual',
    'metodologias_frameworks': 'Metodologias & Frameworks',
    'conteudo_criacoes': 'Conteúdo & Criações',
    'rede_relacionamentos': 'Rede de Relacionamentos'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-4">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600">
                Pergunta {currentQuestion + 1} de {questions.length}
              </span>
              <span className="text-sm font-medium text-purple-600">
                {categoryNames[currentQ.category]}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {currentQ.question}
            </h2>

            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(currentQ.id, currentQ.scores[index])}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    answers[currentQ.id] === currentQ.scores[index]
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-purple-25'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                currentQuestion === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Anterior
            </button>

            <button
              onClick={nextQuestion}
              disabled={!isAnswered}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                !isAnswered
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'Calcular Valor' : 'Próxima'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}