import type { Metadata } from 'next'
import './globals.css'
import ErrorBoundary from './components/ui/ErrorBoundary'

export const metadata: Metadata = {
  title: 'Flow Method™ - Plataforma de Avaliação de Valor Intangível',
  description: 'Descubra, desenvolva e maximize seu valor intangível através dos pilares de Identidade, Influência e Legado. Metodologia científica validada por McKinsey, BCG e PwC.',
  keywords: 'valor intangível, identidade, influência, legado, metodologia científica, avaliação profissional, flow method',
  authors: [{ name: 'Tami Saito' }],
  creator: 'Tami Saito',
  publisher: 'Flow Method™',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://flowmethod.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Flow Method™ - Descubra Seu Valor Real',
    description: 'Metodologia científica para avaliar e maximizar seus ativos intangíveis',
    url: 'https://flowmethod.com',
    siteName: 'Flow Method™',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flow Method™ - Descubra Seu Valor Real',
    description: 'Metodologia científica para avaliar e maximizar seus ativos intangíveis',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#9333ea" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className="antialiased">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}
