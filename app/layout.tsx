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
