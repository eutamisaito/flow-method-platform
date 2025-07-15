'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

interface Question {
  id: number;
  category: 'identidade' | 'influencia' | 'legado';
  question: string;
  options: string[];
  scores: number[];
}

const questions: Question[] = [
  // IDENTIDADE (15 perguntas)
  {
    id: 1,
    category: 'identidade',
    question: 'Você tem clareza sobre seus valores fundamentais?',
    options: ['Tenho total clareza', 'Tenho boa clareza', 'Tenho alguma clareza', 'Tenho pouca clareza', 'Não tenho clareza'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 2,
    category: 'identidade',
    question: 'Você consegue identificar facilmente seus talentos únicos?',
    options: ['Muito facilmente', 'Facilmente', 'Com alguma dificuldade', 'Com muita dificuldade', 'Não consigo'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 3,
    category: 'identidade',
    question: 'Seu propósito de vida está claro para você?',
    options: ['Totalmente claro', 'Bem claro', 'Parcialmente claro', 'Pouco claro', 'Nada claro'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 4,
    category: 'identidade',
    question: 'Você se sente autêntico nas suas relações?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 5,
    category: 'identidade',
    question: 'Você conhece suas limitações e as aceita?',
    options: ['Totalmente', 'Em grande parte', 'Parcialmente', 'Pouco', 'Nada'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 6,
    category: 'identidade',
    question: 'Você toma decisões baseadas em seus valores pessoais?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 7,
    category: 'identidade',
    question: 'Você se sente confortável sendo você mesmo em diferentes situações?',
    options: ['Totalmente confortável', 'Confortável', 'Moderadamente confortável', 'Pouco confortável', 'Desconfortável'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 8,
    category: 'identidade',
    question: 'Você tem uma visão clara do que considera sucesso?',
    options: ['Muito clara', 'Clara', 'Moderadamente clara', 'Pouco clara', 'Nada clara'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 9,
    category: 'identidade',
    question: 'Você confia em suas capacidades e competências?',
    options: ['Totalmente', 'Em grande parte', 'Parcialmente', 'Pouco', 'Nada'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 10,
    category: 'identidade',
    question: 'Você consegue expressar suas opiniões de forma assertiva?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 11,
    category: 'identidade',
    question: 'Você tem uma narrativa pessoal coerente sobre sua jornada?',
    options: ['Totalmente coerente', 'Coerente', 'Parcialmente coerente', 'Pouco coerente', 'Incoerente'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 12,
    category: 'identidade',
    question: 'Você consegue identificar padrões de comportamento que te definem?',
    options: ['Muito facilmente', 'Facilmente', 'Com alguma dificuldade', 'Com muita dificuldade', 'Não consigo'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 13,
    category: 'identidade',
    question: 'Você se sente alinhado com seu estilo de vida atual?',
    options: ['Totalmente alinhado', 'Alinhado', 'Parcialmente alinhado', 'Pouco alinhado', 'Desalinhado'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 14,
    category: 'identidade',
    question: 'Você tem clareza sobre o que te motiva profundamente?',
    options: ['Total clareza', 'Boa clareza', 'Alguma clareza', 'Pouca clareza', 'Nenhuma clareza'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 15,
    category: 'identidade',
    question: 'Você se sente seguro sobre sua identidade pessoal?',
    options: ['Totalmente seguro', 'Seguro', 'Moderadamente seguro', 'Pouco seguro', 'Inseguro'],
    scores: [5, 4, 3, 2, 1]
  },
  // INFLUÊNCIA (15 perguntas)
  {
    id: 16,
    category: 'influencia',
    question: 'Você consegue inspirar outros com suas ideias?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 17,
    category: 'influencia',
    question: 'Pessoas buscam sua opinião para decisões importantes?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 18,
    category: 'influencia',
    question: 'Você tem facilidade para comunicar suas ideias?',
    options: ['Muita facilidade', 'Facilidade', 'Moderada facilidade', 'Pouca facilidade', 'Nenhuma facilidade'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 19,
    category: 'influencia',
    question: 'Você constrói relacionamentos sólidos facilmente?',
    options: ['Muito facilmente', 'Facilmente', 'Com alguma dificuldade', 'Com muita dificuldade', 'Não consigo'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 20,
    category: 'influencia',
    question: 'Você é visto como uma referência na sua área?',
    options: ['Totalmente', 'Em grande parte', 'Parcialmente', 'Pouco', 'Nada'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 21,
    category: 'influencia',
    question: 'Você consegue persuadir outros de forma ética?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 22,
    category: 'influencia',
    question: 'Você tem presença marcante em reuniões e apresentações?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 23,
    category: 'influencia',
    question: 'Você consegue mobilizar pessoas para uma causa comum?',
    options: ['Muito facilmente', 'Facilmente', 'Com alguma dificuldade', 'Com muita dificuldade', 'Não consigo'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 24,
    category: 'influencia',
    question: 'Você é procurado para liderar projetos e iniciativas?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 25,
    category: 'influencia',
    question: 'Você consegue adaptar sua comunicação ao seu público?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 26,
    category: 'influencia',
    question: 'Você tem facilidade para fazer networking?',
    options: ['Muita facilidade', 'Facilidade', 'Moderada facilidade', 'Pouca facilidade', 'Nenhuma facilidade'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 27,
    category: 'influencia',
    question: 'Você consegue influenciar decisões importantes em sua organização?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 28,
    category: 'influencia',
    question: 'Você tem credibilidade quando fala sobre sua área de expertise?',
    options: ['Total credibilidade', 'Boa credibilidade', 'Alguma credibilidade', 'Pouca credibilidade', 'Nenhuma credibilidade'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 29,
    category: 'influencia',
    question: 'Você consegue criar conexões genuínas com pessoas diferentes?',
    options: ['Muito facilmente', 'Facilmente', 'Com alguma dificuldade', 'Com muita dificuldade', 'Não consigo'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 30,
    category: 'influencia',
    question: 'Você é reconhecido como um comunicador eficaz?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  // LEGADO (15 perguntas)
  {
    id: 31,
    category: 'legado',
    question: 'Você pensa sobre o impacto que quer deixar no mundo?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 32,
    category: 'legado',
    question: 'Você está construindo algo que beneficiará futuras gerações?',
    options: ['Definitivamente', 'Provavelmente', 'Talvez', 'Provavelmente não', 'Definitivamente não'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 33,
    category: 'legado',
    question: 'Você tem projetos que transcendem sua existência?',
    options: ['Muitos', 'Alguns', 'Poucos', 'Muito poucos', 'Nenhum'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 34,
    category: 'legado',
    question: 'Você desenvolve outras pessoas regularmente?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 35,
    category: 'legado',
    question: 'Você documenta e compartilha seus aprendizados?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 36,
    category: 'legado',
    question: 'Você trabalha em causas que são maiores que você mesmo?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 37,
    category: 'legado',
    question: 'Você tem mentorado ou orientado outras pessoas?',
    options: ['Muitas pessoas', 'Algumas pessoas', 'Poucas pessoas', 'Muito poucas pessoas', 'Nenhuma pessoa'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 38,
    category: 'legado',
    question: 'Você contribui para o crescimento de sua comunidade?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 39,
    category: 'legado',
    question: 'Você tem uma visão clara do legado que quer deixar?',
    options: ['Muito clara', 'Clara', 'Moderadamente clara', 'Pouco clara', 'Nada clara'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 40,
    category: 'legado',
    question: 'Você investe tempo em projetos de longo prazo?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 41,
    category: 'legado',
    question: 'Você trabalha para resolver problemas sistêmicos?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 42,
    category: 'legado',
    question: 'Você pensa em como suas ações afetam o futuro?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 43,
    category: 'legado',
    question: 'Você tem criado conhecimento ou conteúdo duradouro?',
    options: ['Muito', 'Algum', 'Pouco', 'Muito pouco', 'Nenhum'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 44,
    category: 'legado',
    question: 'Você se preocupa com o impacto sustentável de suas ações?',
    options: ['Sempre', 'Frequentemente', 'Às vezes', 'Raramente', 'Nunca'],
    scores: [5, 4, 3, 2, 1]
  },
  {
    id: 45,
    category: 'legado',
    question: 'Você está construindo algo que continuará após sua partida?',
    options: ['Definitivamente', 'Provavelmente', 'Talvez', 'Provavelmente não', 'Definitivamente não'],
    scores: [5, 4, 3, 2, 1]
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

  const calculateScores = () => {
    const identidade = questions
      .filter(q => q.category === 'identidade')
      .reduce((sum, q) => sum + (answers[q.id] || 0), 0);
    
    const influencia = questions
      .filter(q => q.category === 'influencia')
      .reduce((sum, q) => sum + (answers[q.id] || 0), 0);
    
    const legado = questions
      .filter(q => q.category === 'legado')
      .reduce((sum, q) => sum + (answers[q.id] || 0), 0);

    return {
      identidade: Math.round((identidade / 75) * 100),
      influencia: Math.round((influencia / 75) * 100),
      legado: Math.round((legado / 75) * 100),
      total: Math.round(((identidade + influencia + legado) / 225) * 100)
    };
  };

  if (showUserForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-purple-900 mb-4">
              Avaliação Flow Method™
            </h1>
            <p className="text-gray-600">
              Descubra seu nível de desenvolvimento nos pilares de Identidade, Influência e Legado
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
              Iniciar Avaliação
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (isComplete) {
    const scores = calculateScores();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <div className="mb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-purple-900 mb-4">
                Parabéns, {userInfo.nome}!
              </h1>
              <p className="text-gray-600 mb-8">
                Você completou sua avaliação Flow Method™. Aqui estão seus resultados:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Identidade</h3>
                <div className="text-3xl font-bold text-blue-600">{scores.identidade}%</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Influência</h3>
                <div className="text-3xl font-bold text-green-600">{scores.influencia}%</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Legado</h3>
                <div className="text-3xl font-bold text-purple-600">{scores.legado}%</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl mb-8">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Pontuação Total</h3>
              <div className="text-4xl font-bold text-purple-600">{scores.total}%</div>
            </div>

            <div className="text-left bg-gray-50 p-6 rounded-2xl mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Interpretação dos Resultados:</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>80-100%:</strong> Excelente desenvolvimento - você está no caminho certo!</p>
                <p><strong>60-79%:</strong> Bom desenvolvimento - há oportunidades de crescimento</p>
                <p><strong>40-59%:</strong> Desenvolvimento moderado - foque em áreas específicas</p>
                <p><strong>20-39%:</strong> Desenvolvimento inicial - grandes oportunidades à frente</p>
                <p><strong>0-19%:</strong> Ponto de partida - tempo de investir em seu desenvolvimento</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl mb-8">
              <h3 className="text-lg font-semibold text-orange-900 mb-4">
                🎯 Quer uma análise mais profunda?
              </h3>
              <p className="text-gray-700 mb-4">
                Receba um relatório detalhado com metodologias científicas de valuation, 
                plano de ação personalizado e estratégias específicas para seu desenvolvimento.
              </p>
              <button 
                onClick={() => window.location.href = '/questionario-profundo'}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Acessar Análise Profunda - R$ 197,00
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600">
                Pergunta {currentQuestion + 1} de {questions.length}
              </span>
              <span className="text-sm font-medium text-purple-600 capitalize">
                {currentQ.category}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
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
              {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Próxima'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}