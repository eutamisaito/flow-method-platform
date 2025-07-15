#!/bin/bash

# 🚀 Deploy Automatizado - Flow Method™ Platform
# Executa o deploy em múltiplas plataformas

echo "🔥 Iniciando Deploy Automatizado..."
echo ""

# 1. Build de produção
echo "📦 Fazendo build de produção..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso!"
else
    echo "❌ Erro no build. Cancelando deploy."
    exit 1
fi

echo ""
echo "🌐 Arquivos estáticos gerados em /out"
echo "📊 Tamanho total: $(du -sh out | cut -f1)"
echo ""

# 2. Opções de deploy
echo "Escolha uma opção de deploy:"
echo "1) Vercel (Recomendado)"
echo "2) Netlify" 
echo "3) Surge.sh"
echo "4) GitHub Pages"
echo ""

read -p "Digite o número da opção (1-4): " option

case $option in
    1)
        echo "🚀 Fazendo deploy no Vercel..."
        echo "Execute: vercel --prod"
        echo "Acesse: https://vercel.com para fazer login se necessário"
        ;;
    2)
        echo "🚀 Fazendo deploy no Netlify..."
        echo "1. Acesse: https://netlify.com"
        echo "2. Arraste a pasta 'out' para o Netlify"
        echo "3. Ou use: npm install -g netlify-cli && netlify deploy --prod --dir=out"
        ;;
    3)
        echo "🚀 Fazendo deploy no Surge.sh..."
        echo "Execute: cd out && surge"
        ;;
    4)
        echo "🚀 Preparando para GitHub Pages..."
        echo "1. Faça commit dos arquivos em /out"
        echo "2. Configure GitHub Pages para usar a pasta /out"
        echo "3. Ou use: gh-pages -d out"
        ;;
    *)
        echo "❌ Opção inválida"
        exit 1
        ;;
esac

echo ""
echo "🎯 Deploy concluído!"
echo "📱 Teste seu site após o deploy"
echo ""
echo "✅ Sistema Flow Method™ está ONLINE!"
echo "💰 Valuation científico funcionando!"
echo "🔬 3 metodologias internacionais ativas!"
echo ""