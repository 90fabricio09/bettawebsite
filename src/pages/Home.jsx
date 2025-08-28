import React, { useState, useEffect } from 'react';
import BettaAgency from '../assets/betta.png';
import BettaNavbar from '../assets/betta-navbar.png';
import HeroBg from '../assets/background.png';
import ShowcaseImg from '../assets/showcase.png';
import Portfolio1 from '../assets/hbfretamento.png';
import Portfolio2 from '../assets/echotap.png';
import Portfolio3 from '../assets/multipixel.png';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

// Removendo a URL temporária do Unsplash
// const AvatarImg = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80";

export default function Home() {
  // Estado para controlar o menu no mobile
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`bettaagency-hero ${scrollPosition > 50 ? 'scrolled' : ''}`}>
        <nav className={`navbar ${scrollPosition > 50 ? 'fixed' : ''}`}>
          <div className="logo"><a href="/"><img src={scrollPosition > 50 ? BettaNavbar : BettaAgency} alt="Betta Agency - Agência de Identidade Visual e Desenvolvimento Web" loading="lazy" /></a></div>
          
          {/* Container que agrupa links e botão de Área do Cliente */}
          <div className={`nav-links-container ${isOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li><a href="#services" onClick={() => setIsOpen(false)}>Serviços</a></li>
              <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfólio</a></li>
            </ul>
            <a href="https://wa.me/5511931501833" target="_blank" rel="noopener noreferrer" className="client-area-button">Contato</a>
          </div>

          {/* Ícone do menu hambúrguer (aparece apenas no mobile) */}
          <div 
            className={`hamburger ${isOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>

        <div className="hero-content">
          <h1 className="bettaagency-title">
            Criamos identidades visuais<br /> e websites que inspiram
          </h1>
          <p className="bettaagency-slogan">Onde sua marca ganha vida</p>
          <p className="bettaagency-subtitle">
            Somos especialistas em criação de identidade visual e desenvolvimento de websites, transformando sua visão em realidade digital.
          </p>
          <div className="hero-buttons">
            <a href="https://wa.me/5511931501833" target="_blank" rel="noopener noreferrer" className="bettaagency-button">Fale Conosco</a>
            <a href="#services" className="hero-learn-more">Saiba mais <i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
        
        <div 
          className="hero-image" 
          style={{ 
            backgroundImage: `url(${HeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="gradient-overlay"></div>
        </div>
      </header>

      <section id="services" className="features">
        <div className="section-header">
          <h2>Nossos Serviços</h2>
          <p className="section-subtitle">Identidade visual e desenvolvimento web para sua marca</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <i className="bi bi-code-square feature-icon"></i>
            <h3>Desenvolvimento Web</h3>
            <p>Criamos websites modernos, responsivos e otimizados para performance. Desde sites institucionais até e-commerces completos.</p>
            <ul className="service-features">
              <li>Sites Institucionais</li>
              <li>Landing Pages</li>
              <li>E-commerces</li>
              <li>Sistemas Web</li>
              <li>Aplicativos Web</li>
            </ul>
          </div>
          <div className="feature-card">
            <i className="bi bi-palette feature-icon"></i>
            <h3>Identidade Visual</h3>
            <p>Criamos logotipos e identidades visuais únicas que comunicam a essência da sua marca e a diferenciam da concorrência.</p>
            <ul className="service-features">
              <li>Logotipos</li>
              <li>Identidade Visual</li>
              <li>Papelaria</li>
              <li>Social Media</li>
              <li>Branding</li>
            </ul>
          </div>
          <div className="feature-card">
            <i className="bi bi-laptop feature-icon"></i>
            <h3>Design de Interface</h3>
            <p>Desenvolvemos interfaces intuitivas e atrativas que proporcionam a melhor experiência para seus usuários.</p>
            <ul className="service-features">
              <li>UI/UX Design</li>
              <li>Prototipagem</li>
              <li>Design Responsivo</li>
              <li>Wireframes</li>
              <li>Testes de Usabilidade</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="showcase-content">
          <h2>Identidade que conecta</h2>
          <p>Criamos identidades visuais e websites que conectam sua marca com seu público de forma autêntica e memorável.</p>
          <a href="#portfolio" className="learn-more">Ver portfólio <i className="bi bi-arrow-right"></i></a>
        </div>
        <div className="showcase-image" style={{ backgroundImage: `url(${ShowcaseImg})` }} role="img" aria-label="Showcase de design"></div>
      </section>

      <section id="portfolio" className="portfolio">
        <div className="section-header">
          <h2>Nosso Portfólio</h2>
          <p className="section-subtitle">Projetos de identidade visual e desenvolvimento web que transformaram nossos clientes</p>
        </div>
        <div className="portfolio-grid">
          <a href="https://hbfretamento.com.br" target="_blank" rel="noopener noreferrer" className="portfolio-item">
            <div className="portfolio-image" style={{ backgroundImage: `url(${Portfolio1})` }} role="img" aria-label="Projeto HB Fretamento"></div>
            <div className="portfolio-content">
              <h3>HB Fretamento</h3>
              <p>Identidade visual completa e desenvolvimento de website institucional para empresa de fretamento executivo</p>
              <div className="portfolio-tags">
                <span className="portfolio-tag">Identidade Visual</span>
                <span className="portfolio-tag">Web Design</span>
                <span className="portfolio-tag">Branding</span>
              </div>
            </div>
          </a>
          <a href="https://echotap.com.br" target="_blank" rel="noopener noreferrer" className="portfolio-item">
            <div className="portfolio-image" style={{ backgroundImage: `url(${Portfolio2})` }} role="img" aria-label="Projeto EchoTap"></div>
            <div className="portfolio-content">
              <h3>EchoTap</h3>
              <p>Desenvolvimento de identidade visual e plataforma web para empresa de tecnologia e inovação</p>
              <div className="portfolio-tags">
                <span className="portfolio-tag">UI/UX Design</span>
                <span className="portfolio-tag">Desenvolvimento Web</span>
                <span className="portfolio-tag">Tecnologia</span>
              </div>
            </div>
          </a>
          <a href="https://multipixel.com.br" target="_blank" rel="noopener noreferrer" className="portfolio-item">
            <div className="portfolio-image" style={{ backgroundImage: `url(${Portfolio3})` }} role="img" aria-label="Projeto MultiPixel"></div>
            <div className="portfolio-content">
              <h3>MultiPixel</h3>
              <p>Desenvolvimento completo de website e UI/UX design para produtora audiovisual com estúdio próprio</p>
              <div className="portfolio-tags">
              <span className="portfolio-tag">UI/UX Design</span>
              <span className="portfolio-tag">Desenvolvimento Web</span>
                <span className="portfolio-tag">Audiovisual</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className="numbers">
        <div className="section-header">
          <h2>Nossos Números</h2>
          <p className="section-subtitle">Resultados que comprovam nossa expertise em identidade visual e desenvolvimento web</p>
        </div>
        <div className="numbers-grid">
          <NumberCard 
            icon="bi-code-slash"
            end={20}
            suffix="+"
            label="Projetos Entregues"
            description="Identidades visuais e websites desenvolvidos com excelência"
          />
          <NumberCard 
            icon="bi-palette"
            end={50}
            suffix="+"
            label="Logotipos Criados"
            description="Identidades visuais únicas desenvolvidas para nossos clientes"
          />
          <NumberCard 
            icon="bi-phone"
            end={100}
            suffix="%"
            label="Mobile First"
            description="Websites totalmente responsivos e otimizados para mobile"
          />
          <NumberCard 
            icon="bi-emoji-smile"
            end={100}
            suffix="%"
            label="Satisfação"
            description="Clientes satisfeitos com nossas identidades visuais e websites"
          />
        </div>
      </section>

      <section id="cta" className="cta">
        <div className="cta-content">
          <h2>Pronto para criar sua identidade visual?</h2>
          <p>Transforme sua visão em realidade com a Betta Agency</p>
                          <div className="cta-buttons">
                  <a href='https://wa.me/5511931501833' target="_blank" rel="noopener noreferrer" className="bettaagency-button"><i className="bi bi-whatsapp"></i> Solicite um Orçamento</a>
                </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={BettaAgency} alt="Betta Agency" loading="lazy" />
            <p>Onde sua marca ganha vida</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Serviços</h4>
              <ul>
                <li><a href="#services">Desenvolvimento Web</a></li>
                <li><a href="#services">Identidade Visual</a></li>
                <li><a href="#services">Design de Interface</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Empresa</h4>
              <ul>
                <li><a href="#services">Sobre nós</a></li>
                <li><a href="#portfolio">Portfólio</a></li>
                <li><a href="https://wa.me/5511931501833" target="_blank" rel="noopener noreferrer">Contato</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contato</h4>
              <ul>
                <li><a href="mailto:fabriciobetta88@gmail.com">fabriciobetta88@gmail.com</a></li>
                <li><a href="https://wa.me/5511931501833" target="_blank" rel="noopener noreferrer">(11) 93150-1833</a></li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Betta Agency - Agência de Identidade Visual e Desenvolvimento Web. Todos os direitos reservados.</p>
          <div className="social-links">
            <a href="https://wa.me/5511931501833" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>
            <a href="https://www.instagram.com/betta.agency_/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </footer>
    </>
  );
}

// Componente NumberCard
const NumberCard = ({ icon, end, suffix, label, description }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div className="number-card" ref={ref}>
      <div className="number-icon"><i className={`bi ${icon}`}></i></div>
      <div className="number-value">
        {inView ? <CountUp end={end} duration={2.5} /> : 0}{suffix}
      </div>
      <div className="number-label">{label}</div>
      <p>{description}</p>
    </div>
  );
};
