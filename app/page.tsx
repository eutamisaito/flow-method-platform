'use client';

import React, { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(target.getAttribute('href')!);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Navigation background on scroll
    const handleScroll = () => {
      const nav = document.querySelector('.nav') as HTMLElement;
      if (nav) {
        if (window.scrollY > 50) {
          nav.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
          nav.style.background = 'rgba(255, 255, 255, 0.8)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Enhanced button interactions
    document.querySelectorAll('.button-primary, .button-secondary, .cta-button').forEach(button => {
      const handleMouseEnter = () => {
        (button as HTMLElement).style.transform = 'scale(1.05)';
      };
      
      const handleMouseLeave = () => {
        (button as HTMLElement).style.transform = 'scale(1)';
      };

      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);
    });

    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener('click', () => {
        alert('Menu mobile em desenvolvimento');
      });
    }

    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #7c0ef8;
          --secondary: #f9c614;
          --dark: #000064;
          --light: #ded7e3;
          --gray-50: #fafafa;
          --gray-100: #f5f5f5;
          --gray-200: #e5e5e5;
          --gray-300: #d4d4d4;
          --gray-600: #525252;
          --gray-800: #262626;
          --gray-900: #171717;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: var(--gray-900);
          background: #fff;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 60px;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 40px;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--gray-800);
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        .cta-button {
          background: var(--primary);
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .cta-button:hover {
          background: var(--dark);
          transform: scale(1.05);
        }

        /* Hero Section */
        .hero {
          padding: 120px 20px 80px;
          text-align: center;
          background: linear-gradient(135deg, rgba(124, 14, 248, 0.05) 0%, rgba(249, 198, 20, 0.05) 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .hero-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero h1 {
          font-size: clamp(48px, 8vw, 72px);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 24px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: fadeInUp 1s ease;
        }

        .hero p {
          font-size: 24px;
          color: var(--gray-600);
          margin-bottom: 40px;
          animation: fadeInUp 1s ease 0.2s both;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 1s ease 0.4s both;
        }

        .button-primary {
          background: var(--primary);
          color: white;
          padding: 16px 32px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 18px;
          transition: all 0.3s ease;
          border: 2px solid var(--primary);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .button-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(124, 14, 248, 0.3);
        }

        .button-secondary {
          background: transparent;
          color: var(--primary);
          padding: 16px 32px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 18px;
          border: 2px solid var(--primary);
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .button-secondary:hover {
          background: var(--primary);
          color: white;
          transform: scale(1.05);
        }

        /* Pillars Section */
        .pillars {
          padding: 100px 20px;
          background: white;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title h2 {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--gray-900);
        }

        .section-title p {
          font-size: 20px;
          color: var(--gray-600);
          max-width: 600px;
          margin: 0 auto;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .pillar-card {
          background: white;
          border-radius: 20px;
          padding: 40px 30px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid var(--gray-200);
          position: relative;
          overflow: hidden;
        }

        .pillar-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
        }

        .pillar-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .pillar-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary), var(--dark));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          font-size: 36px;
          color: white;
        }

        .pillar-card h3 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--gray-900);
        }

        .pillar-card p {
          font-size: 16px;
          color: var(--gray-600);
          margin-bottom: 24px;
        }

        .pillar-features {
          list-style: none;
        }

        .pillar-features li {
          padding: 8px 0;
          font-size: 14px;
          color: var(--gray-600);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pillar-features li::before {
          content: '✓';
          color: var(--secondary);
          font-weight: bold;
        }

        /* Stats Section */
        .stats {
          padding: 100px 20px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%);
          color: white;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          max-width: 800px;
          margin: 0 auto;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--secondary);
        }

        .stat-label {
          font-size: 16px;
          opacity: 0.9;
        }

        /* Tools Preview */
        .tools-preview {
          padding: 100px 20px;
          background: var(--gray-50);
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }

        .tool-card {
          background: white;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .tool-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        }

        .tool-tag {
          background: var(--light);
          color: var(--primary);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 16px;
          display: inline-block;
        }

        .tool-card h4 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--gray-900);
        }

        .tool-card p {
          font-size: 14px;
          color: var(--gray-600);
          line-height: 1.5;
        }

        /* CTA Section */
        .final-cta {
          padding: 100px 20px;
          background: white;
          text-align: center;
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 700;
          margin-bottom: 24px;
          color: var(--gray-900);
        }

        .cta-content p {
          font-size: 20px;
          color: var(--gray-600);
          margin-bottom: 40px;
        }

        /* Footer */
        .footer {
          background: var(--gray-900);
          color: white;
          padding: 60px 20px 40px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .footer-logo {
          font-size: 28px;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 16px;
        }

        .footer p {
          color: var(--gray-300);
          margin-bottom: 40px;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .footer-links a {
          color: var(--gray-300);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--primary);
        }

        .footer-bottom {
          border-top: 1px solid var(--gray-800);
          padding-top: 20px;
          color: var(--gray-500);
          font-size: 14px;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .animate-on-scroll.animate {
          opacity: 1;
          transform: translateY(0);
        }

        /* Mobile Menu */
        .mobile-menu-button {
          display: none;
          flex-direction: column;
          gap: 4px;
          cursor: pointer;
        }

        .mobile-menu-button span {
          width: 25px;
          height: 3px;
          background: var(--gray-800);
          transition: all 0.3s ease;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-button {
            display: flex;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .pillars-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .tools-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .footer-links {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <a href="#" className="logo">Flow Method™</a>
          <ul className="nav-links">
            <li><a href="#pilares">Pilares</a></li>
            <li><a href="#ferramentas">Ferramentas</a></li>
            <li><a href="#resultados">Resultados</a></li>
            <li><a href="#sobre">Sobre</a></li>
          </ul>
          <a href="#contato" className="cta-button">Comece Agora</a>
          <div className="mobile-menu-button">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>Transforme sua expertise em autoridade de mercado</h1>
          <p>Arsenal completo de 30+ ferramentas proprietárias para líderes que querem se tornar referências</p>
          <div className="hero-buttons">
            <a href="#diagnostico" className="button-primary">
              🎯 Fazer Diagnóstico Gratuito
            </a>
            <a href="#demo" className="button-secondary">
              ▶️ Ver Demo
            </a>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="pillars animate-on-scroll" id="pilares">
        <div className="section-container">
          <div className="section-title">
            <h2>3 Pilares da Transformação</h2>
            <p>Uma jornada estruturada em 8 etapas para construir identidade, influência e legado duradouro</p>
          </div>
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">🎯</div>
              <h3>Flow Identity Matrix™</h3>
              <p>Construção de identidade de autoridade através de Essência, Expressão e Impacto</p>
              <ul className="pillar-features">
                <li>Flow Values Assessment™</li>
                <li>Talent Mapping Protocol™</li>
                <li>Purpose Articulation Framework™</li>
                <li>Strategic Positioning Canvas</li>
                <li>Personal Narrative Development</li>
                <li>Impact Measurement Dashboard</li>
              </ul>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">📡</div>
              <h3>Flow Influence System™</h3>
              <p>Desenvolvimento de influência autêntica através de Autoridade, Visibilidade e Conexão</p>
              <ul className="pillar-features">
                <li>Authority Assessment Matrix</li>
                <li>Visibility Amplification Plan™</li>
                <li>Flow Storytelling Matrix™</li>
                <li>Strategic Relationship Mapping™</li>
                <li>Community Building Protocol</li>
                <li>Content Authority Framework</li>
              </ul>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">🏛️</div>
              <h3>Flow Legacy Architecture™</h3>
              <p>Criação de legado duradouro através de Criação, Amplificação e Perpetuação</p>
              <ul className="pillar-features">
                <li>Innovation Framework</li>
                <li>Systems Architecture Blueprint</li>
                <li>Impact Multiplication System</li>
                <li>Succession Planning Framework™</li>
                <li>Legacy Vision Canvas™</li>
                <li>Knowledge Transfer Protocol</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats animate-on-scroll" id="resultados">
        <div className="section-container">
          <div className="section-title">
            <h2 style={{color: 'white'}}>Resultados Comprovados</h2>
            <p style={{color: 'rgba(255,255,255,0.8)'}}>Métricas de sucesso dos nossos clientes</p>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Clareza de Propósito</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">380%</div>
              <div className="stat-label">Aumento de Autoridade</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">87%</div>
              <div className="stat-label">Taxa de Sustentabilidade</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Ferramentas Proprietárias</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Preview */}
      <section className="tools-preview animate-on-scroll" id="ferramentas">
        <div className="section-container">
          <div className="section-title">
            <h2>Arsenal Completo de Ferramentas</h2>
            <p>Mais de 30 ferramentas organizadas estrategicamente para sua transformação</p>
          </div>
          <div className="tools-grid">
            <div className="tool-card">
              <span className="tool-tag">Diagnóstico</span>
              <h4>Flow Values Assessment™</h4>
              <p>Mapeamento profundo dos valores essenciais e sua aplicação na liderança e posicionamento</p>
            </div>
            <div className="tool-card">
              <span className="tool-tag">Estratégia</span>
              <h4>Strategic Positioning Canvas</h4>
              <p>Definição do posicionamento estratégico baseado em diferenciação autêntica</p>
            </div>
            <div className="tool-card">
              <span className="tool-tag">Implementação</span>
              <h4>Flow Storytelling Matrix™</h4>
              <p>Estrutura para desenvolvimento de narrativas de autoridade e conexão</p>
            </div>
            <div className="tool-card">
              <span className="tool-tag">Monitoramento</span>
              <h4>Impact Measurement Dashboard</h4>
              <p>Métricas de impacto da identidade na percepção de autoridade</p>
            </div>
            <div className="tool-card">
              <span className="tool-tag">Escalabilidade</span>
              <h4>Systems Architecture Blueprint</h4>
              <p>Estruturação de sistemas escaláveis para amplificação de impacto</p>
            </div>
            <div className="tool-card">
              <span className="tool-tag">Legado</span>
              <h4>Succession Planning Framework™</h4>
              <p>Planejamento estratégico para perpetuação do legado através de sucessores</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta animate-on-scroll" id="contato">
        <div className="cta-content">
          <h2>Pronto para se tornar uma referência?</h2>
          <p>Comece sua jornada de transformação com diagnóstico estratégico gratuito</p>
          <a href="#diagnostico" className="button-primary" style={{fontSize: '20px', padding: '20px 40px'}}>
            🚀 Agendar Diagnóstico Estratégico
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">Flow Method™</div>
          <p>Desenvolvido por Tami Saito - Transformação integral de líderes em referências de autoridade</p>
          <div className="footer-links">
            <a href="#privacidade">Privacidade</a>
            <a href="#termos">Termos</a>
            <a href="#contato">Contato</a>
            <a href="#suporte">Suporte</a>
          </div>
          <div className="footer-bottom">
            © 2025 Flow Method™. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
