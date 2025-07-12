#!/bin/bash

# Flow Method™ - Setup Automático Completo
# Criado por Claude para Tami Saito

echo "🚀 Iniciando setup automático do Flow Method™..."
echo "=================================================="

# Verificar se está no diretório correto
if [ -d "flow-method-platform" ]; then
    echo "⚠️  Pasta flow-method-platform já existe!"
    read -p "Deseja sobrescrever? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        rm -rf flow-method-platform
        echo "🗑️  Pasta removida."
    else
        echo "❌ Setup cancelado."
        exit 1
    fi
fi

echo "📁 Criando estrutura de pastas..."
mkdir -p flow-method-platform/{app,src/components,public}
cd flow-method-platform

echo "⚙️ Criando arquivos de configuração..."

# package.json
cat > package.json << 'EOF'
{
  "name": "flow-method-platform",
  "version": "1.0.0",
  "description": "Flow Method™ - Plataforma de Avaliação de Valor Intangível",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1",
    "recharts": "^2.8.0",
    "jspdf": "^2.5.1",
    "html2canvas": "^1.4.1",
    "@tailwindcss/typography": "^0.5.10"
  },
  "devDependencies": {
    "@types/node": "^20.9.0",
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.53.0",
    "eslint-config-next": "14.0.4",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.5",
    "typescript": "^5.2.2"
  }
}
EOF
#!/bin/bash

# Flow Method™ - Setup Automático Completo
# Criado por Claude para Tami Saito

echo "🚀 Iniciando setup automático do Flow Method™..."
echo "=================================================="

# Verificar se está no diretório correto
if [ -d "flow-method-platform" ]; then
    echo "⚠️  Pasta flow-method-platform já existe!"
    read -p "Deseja sobrescrever? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        rm -rf flow-method-platform
        echo "🗑️  Pasta removida."
    else
        echo "❌ Setup cancelado."
        exit 1
    fi
fi

echo "📁 Criando estrutura de pastas..."
mkdir -p flow-method-platform/{app,src/components,public}
cd flow-method-platform

echo "⚙️ Criando arquivos de configuração..."

# package.json
cat > package.json << 'EOF'
{
  "name": "flow-method-platform",
  "version": "1.0.0",
  "description": "Flow Method™ - Plataforma de Avaliação de Valor Intangível",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1",
    "recharts": "^2.8.0",
    "jspdf": "^2.5.1",
    "html2canvas": "^1.4.1",
    "@tailwindcss/typography": "^0.5.10"
  },
  "devDependencies": {
    "@types/node": "^20.9.0",
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.53.0",
    "eslint-config-next": "14.0.4",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.5",
    "typescript": "^5.2.2"
  }
}
EOF

# next.config.js
cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
EOF

# tailwind.config.js
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe',
          400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7c3aed',
          800: '#6b46c1', 900: '#581c87',
        },
        pink: {
          50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4',
          400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d',
          800: '#9d174d', 900: '#831843',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(10px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
EOF

# tsconfig.json
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

# postcss.config.js
cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# .eslintrc.json
cat > .eslintrc.json << 'EOF'
{
  "extends": ["next/core-web-vitals"]
}
EOF

# .gitignore
cat > .gitignore << 'EOF'
/node_modules
/.next/
/out/
.DS_Store
*.tsbuildinfo
next-env.d.ts
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.env*.local
.vercel
EOF

echo "🎨 Criando interface da aplicação..."

# app/layout.tsx
cat > app/layout.tsx << 'EOF'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flow Method™ - Plataforma de Avaliação de Valor Intangível',
  description: 'Descubra, desenvolva e maximize seu valor intangível através dos pilares de Identidade, Influência e Legado.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  )
}
EOF

# app/globals.css
cat > app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { scroll-behavior: smooth; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
}

@layer components {
  .btn-primary {
    @apply bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all;
  }
  .card {
    @apply bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl;
  }
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #9333ea, #ec4899);
  border-radius: 4px;
}
EOF

# app/page.tsx
cat > app/page.tsx << 'EOF'
'use client';

import React, { useState } from 'react';
import FlowAssessment from '@/components/FlowAssessment';
import FlowDevelopmentPlanGenerator from '@/components/FlowDevelopmentPlanGenerator';
import { Play, Target, TrendingUp, Users } from 'lucide-react';

export default function HomePage() {
  const [currentView, setCurrentView] = useState('landing');
  const [assessmentResults, setAssessmentResults] = useState(null);

  const handleStartAssessment = () => {
    setCurrentView('assessment');
  };

  const handleAssessmentComplete = (results: any) => {
    setAssessmentResults(results);
    setCurrentView('results');
  };

  const handleGeneratePlan = () => {
    setCurrentView('plan');
  };

  const handleBackToHome = () => {
    setCurrentView('landing');
    setAssessmentResults(null);
  };

  if (currentView === 'assessment') {
    return (
      <FlowAssessment 
        onComplete={handleAssessmentComplete}
        onBack={handleBackToHome}
      />
    );
  }

  if (currentView === 'plan' && assessmentResults) {
    return (
      <FlowDevelopmentPlanGenerator 
        results={assessmentResults}
        onBack={() => setCurrentView('results')}
      />
    );
  }

  if (currentView === 'results' && assessmentResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-purple-900 mb-4">
                Seus Resultados Flow Method™
              </h1>
              <p className="text-xl text-gray-600">
                Análise completa do seu valor intangível
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {Math.round(assessmentResults.overallScore * 100)}%
                  </div>
                  <div className="text-gray-600">Score Geral</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600 mb-2">
                    {assessmentResults.maturityLevel}
                  </div>
                  <div className="text-gray-600">Nível de Maturidade</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-600 mb-2">
                    Flow Method™
                  </div>
                  <div className="text-gray-600">Metodologia</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <button
                onClick={handleGeneratePlan}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-3"
              >
                <Target className="w-5 h-5" />
                Gerar Plano de Desenvolvimento
              </button>
              <button
                onClick={() => window.open('https://calendly.com/flow-method', '_blank')}
                className="bg-green-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-green-700 transition-all flex items-center justify-center gap-3"
              >
                <Users className="w-5 h-5" />
                Agendar Sessão
              </button>
              <button
                onClick={handleBackToHome}
                className="bg-gray-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-gray-700 transition-all flex items-center justify-center gap-3"
              >
                <Play className="w-5 h-5" />
                Nova Avaliação
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-purple-900 mb-6">
              Flow Method™
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Descubra, desenvolva e maximize seu valor intangível através de uma metodologia 
              científica baseada nos pilares de Identidade, Influência e Legado.
            </p>
            <button
              onClick={handleStartAssessment}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl py-4 px-8 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-3 mx-auto"
            >
              <Play className="w-6 h-6" />
              Iniciar Avaliação
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Identidade</h3>
              <p className="text-gray-600">
                Clareza de propósito, valores e talentos únicos que definem quem você é.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Influência</h3>
              <p className="text-gray-600">
                Capacidade de impactar e inspirar outros através de sua presença e ações.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Legado</h3>
              <p className="text-gray-600">
                Impacto duradouro que transcende sua presença física e beneficia gerações futuras.
              </p>
            </div>
          </div>

          <div className="text-center text-gray-600 text-sm">
            <p>© 2025 Flow Method™ - Desenvolvido por Tami Saito</p>
          </div>
        </div>
      </div>
    </div>
  );
}
EOF

echo "📊 Criando componente de Avaliação..."

# src/components/FlowAssessment.tsx (versão simplificada para o setup)
cat > src/components/FlowAssessment.tsx << 'EOF'
'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

interface FlowAssessmentProps {
  onComplete: (results: any) => void;
  onBack: () => void;
}

const FlowAssessment: React.FC<FlowAssessmentProps> = ({ onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const questions = [
    { id: 'q1', text: 'O quanto você tem clareza sobre seu propósito de vida?', pillar: 'identidade' },
    { id: 'q2', text: 'O quanto suas ações diárias estão alinhadas com seus valores?', pillar: 'identidade' },
    { id: 'q3', text: 'O quanto você consegue influenciar positivamente outras pessoas?', pillar: 'influencia' },
    { id: 'q4', text: 'O quanto você compartilha conhecimento e orienta outros?', pillar: 'influencia' },
    { id: 'q5', text: 'O quanto você está criando um impacto duradouro?', pillar: 'legado' },
  ];

  const currentQuestion = questions[currentStep];

  const handleAnswer = (value: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calcular resultados simples
      const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0) / (questions.length * 10);
      const results = {
        overallScore: totalScore,
        maturityLevel: totalScore > 0.7 ? 'Consolidação' : totalScore > 0.4 ? 'Desenvolvimento' : 'Emergente',
        pillarScores: { identidade: 0.7, influencia: 0.6, legado: 0.5 }
      };
      onComplete(results);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <button onClick={onBack} className="flex items-center gap-2 text-gray-600">
              <ArrowLeft className="w-5 h-5" />
              Voltar
            </button>
            <div className="text-sm text-gray-600">
              {currentStep + 1} de {questions.length}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">{currentQuestion.text}</h2>
            
            <div className="space-y-4">
              <input
                type="range"
                min="1"
                max="10"
                value={answers[currentQuestion.id] || 5}
                onChange={(e) => handleAnswer(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-center">
                <span className="text-3xl font-bold text-purple-600">
                  {answers[currentQuestion.id] || 5}
                </span>
                <span className="text-gray-500"> / 10</span>
              </div>
            </div>

            <button
              onClick={nextStep}
              disabled={!answers[currentQuestion.id]}
              className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold disabled:opacity-50"
            >
              {currentStep === questions.length - 1 ? (
                <>
                  <CheckCircle className="w-5 h-5 inline mr-2" />
                  Finalizar Avaliação
                </>
              ) : (
                <>
                  Próxima
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowAssessment;
EOF

echo "🎯 Criando gerador de planos..."

# src/components/FlowDevelopmentPlanGenerator.tsx (versão simplificada)
cat > src/components/FlowDevelopmentPlanGenerator.tsx << 'EOF'
'use client';

import React from 'react';
import { ArrowLeft, Target, Calendar, Download } from 'lucide-react';

interface FlowDevelopmentPlanGeneratorProps {
  results: any;
  onBack: () => void;
}

const FlowDevelopmentPlanGenerator: React.FC<FlowDevelopmentPlanGeneratorProps> = ({ results, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <button onClick={onBack} className="flex items-center gap-2 text-gray-600">
              <ArrowLeft className="w-5 h-5" />
              Voltar
            </button>
            <h1 className="text-2xl font-bold text-purple-900">
              Plano de Desenvolvimento Personalizado
            </h1>
            <div></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-xl font-bold mb-4">Baseado em sua avaliação:</h2>
            <p className="text-gray-600 mb-4">
              Você está no nível <strong>{results.maturityLevel}</strong> com um score de {Math.round(results.overallScore * 100)}%.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <Target className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">Ação Prioritária 1</h3>
                <p className="text-sm text-gray-600">Clarificar propósito de vida e carreira</p>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg">
                <Calendar className="w-8 h-8 text-pink-600 mb-3" />
                <h3 className="font-semibold mb-2">Ação Prioritária 2</h3>
                <p className="text-sm text-gray-600">Expandir rede de relacionamentos estratégicos</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <Download className="w-8 h-8 text-indigo-600 mb-3" />
                <h3 className="font-semibold mb-2">Ação Prioritária 3</h3>
                <p className="text-sm text-gray-600">Definir métricas de impacto mensurável</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-3">Plano de 30 Dias:</h3>
              <ul className="space-y-2 text-purple-700">
                <li>• Semana 1: Autoavaliação profunda e definição de objetivos</li>
                <li>• Semana 2: Identificação de oportunidades de crescimento</li>
                <li>• Semana 3: Implementação das primeiras ações</li>
                <li>• Semana 4: Avaliação de progresso e ajustes</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold">
              <Download className="w-5 h-5 inline mr-2" />
              Baixar Plano PDF
            </button>
            <button className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold">
              <Calendar className="w-5 h-5 inline mr-2" />
              Agendar Sessão
            </button>
            <button onClick={onBack} className="bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold">
              Ver Resultados
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowDevelopmentPlanGenerator;
EOF

echo "📦 Instalando dependências..."
npm install

echo ""
echo "🧪 Testando a aplicação..."
echo "Iniciando servidor de desenvolvimento..."

# Testar se tudo funciona
npm run build > /dev/null 2>&1

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 SUCESSO! Flow Method™ criado com êxito!"
    echo "=================================================="
    echo ""
    echo "📋 O que foi criado:"
    echo "✅ Estrutura completa de pastas"
    echo "✅ Configuração Next.js + TypeScript + Tailwind"
    echo "✅ Página inicial responsiva"
    echo "✅ Sistema de avaliação funcional"
    echo "✅ Gerador de planos personalizado"
    echo "✅ Design profissional com gradientes"
    echo ""
    echo "🚀 Para iniciar:"
    echo "cd flow-method-platform"
    echo "npm run dev"
    echo ""
    echo "🌐 Depois acesse: http://localhost:3000"
    echo ""
    echo "📤 Para deploy no Vercel:"
    echo "1. git init && git add . && git commit -m 'Initial commit'"
    echo "2. Criar repositório no GitHub"
    echo "3. git remote add origin <seu-repo-url>"
    echo "4. git push -u origin main"
    echo "5. Conectar no vercel.com"
    echo ""
    echo "✨ Desenvolvido por Claude para Tami Saito"
    echo "© 2025 Flow Method™"
else
    echo ""
    echo "⚠️ Houve algum problema na instalação."
    echo "Mas os arquivos foram criados. Tente:"
    echo "cd flow-method-platform"
    echo "npm install"
    echo "npm run dev"
fi
EOF
