import React, { useState, useEffect } from 'react';
import './Navbar.css';

/**
 * Componente Navbar - Barra de navegação principal
 * @returns {JSX.Element} Componente da navbar
 */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar dropdown quando clicar fora




  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className='navbar-container'>
        {/* Logo/Brand */}
        <div className='navbar-brand'>
          <a href='#home' className='navbar-logo'>
            <img src='/logo.webp' alt='Domma Electra' />
            <span>Domma Electra</span>
          </a>
        </div>

        {/* Menu de Navegação */}
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a href='#servicos' className='nav-link'>
                Serviços
              </a>
            </li>

            <li className='nav-item'>
              <a href='#sobre' className='nav-link'>
                Sobre
              </a>
            </li>
            <li className='nav-item'>
              <a href='https://wa.me/5551996138467?text=Olá! Gostaria de conversar sobre automação residencial.' className='nav-link' target='_blank' rel='noopener noreferrer'>
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className='navbar-cta'>
          <a href='https://wa.me/5551996138467?text=Olá! Gostaria de solicitar um orçamento para automação residencial.' className='navbar-button' target='_blank' rel='noopener noreferrer'>
            <span>Solicite seu orçamento</span>
          </a>
        </div>

        {/* Botão Mobile */}
        <button
          className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label='Toggle navigation menu'
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
