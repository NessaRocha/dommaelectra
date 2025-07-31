import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = ({ slideAtivo }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Fechar menu mobile quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isMobileMenuOpen]);

  const services = [
    { id: 'automacao-residencial', title: 'Automação Residencial' },
    { id: 'acesso-inteligente', title: 'Acesso Inteligente' },
    { id: 'automacao-climatica-residencial', title: 'Automação Climática Residencial' },
    { id: 'ambientes-iluminados-com-inteligencia', title: 'Ambientes Iluminados com Inteligência' },
    { id: 'automacao-personalizada', title: 'Automação Personalizada' }
  ];

  const handleServiceClick = (serviceId) => {
    setShowDropdown(false);
    setIsMobileMenuOpen(false);
    // Navegar para a seção específica no site
    const sectionId = serviceId.replace('-', '-');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Adicionar indicador visual temporário
      element.setAttribute('data-active', 'true');
      element.focus();
      
      // Remover indicador após animação
      setTimeout(() => {
        element.removeAttribute('data-active');
      }, 2000);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar${slideAtivo === '/automacao.jpg' ? ' navbar-bordo' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo" aria-label="Ir para a página inicial">
          <img 
            src="/logo.webp" 
            alt="Domma Electra Logo" 
            className="logo-img" 
            loading="lazy"
            width="40"
            height="40"
          />
          <span className="logo-text">
            <span className="logo-domma">DOMMA</span>
            <span className="logo-electra">ELECTRA</span>
          </span>
        </a>
        
        {/* Menu Desktop */}
        <ul className="navbar-menu desktop-menu">
          <li><a href="#inicio">Início</a></li>
          <li className="dropdown" ref={dropdownRef}>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                setShowDropdown(!showDropdown);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setShowDropdown(!showDropdown);
                }
              }}
              aria-expanded={showDropdown}
              aria-haspopup="true"
              aria-label="Abrir menu de serviços"
            >
              Como Posso Ajudar
              <span className="dropdown-arrow" aria-hidden="true">
                {showDropdown ? '▼' : '▶'}
              </span>
            </a>
            {showDropdown && (
              <ul className="dropdown-menu" role="menu" aria-label="Serviços disponíveis">
                {services.map((service) => (
                  <li key={service.id} role="none">
                    <a 
                      href={`#${service.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleServiceClick(service.id);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleServiceClick(service.id);
                        }
                      }}
                      role="menuitem"
                      tabIndex={0}
                      aria-label={`Ir para seção ${service.title}`}
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li><a href="#quem">Quem Sou Eu</a></li>
          <li><a href="#orcamento">Entre em Contato</a></li>
        </ul>

        {/* Botão Hamburger Mobile */}
        <button 
          className="hamburger-menu"
          onClick={toggleMobileMenu}
          aria-label="Abrir menu de navegação"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* CTA Desktop */}
        <a href="#orcamento" className="navbar-cta desktop-cta"><span>PEÇA SEU ORÇAMENTO</span></a>
      </div>

      {/* Menu Mobile */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-list">
          <li><a href="#inicio" onClick={() => setIsMobileMenuOpen(false)}>Início</a></li>
          <li className="mobile-dropdown">
            <button 
              className="mobile-dropdown-toggle"
              onClick={() => setShowDropdown(!showDropdown)}
              aria-expanded={showDropdown}
            >
              Como Posso Ajudar
              <span className="mobile-dropdown-arrow">
                {showDropdown ? '▼' : '▶'}
              </span>
            </button>
            {showDropdown && (
              <ul className="mobile-dropdown-menu">
                {services.map((service) => (
                  <li key={service.id}>
                    <a 
                      href={`#${service.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleServiceClick(service.id);
                      }}
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li><a href="#quem" onClick={() => setIsMobileMenuOpen(false)}>Quem Sou Eu</a></li>
          <li><a href="#orcamento" onClick={() => setIsMobileMenuOpen(false)}>Entre em Contato</a></li>
        </ul>
        {/* <a href="#orcamento" className="mobile-cta" onClick={() => setIsMobileMenuOpen(false)}><span>PEÇA SEU ORÇAMENTO</span></a> */}
      </div>
    </nav>
  );
};

export default Navbar; 