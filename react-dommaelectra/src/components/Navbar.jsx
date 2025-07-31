import React, { useState, useEffect } from 'react';
import { servicesArray } from '../data/services';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServiceClick = serviceId => {
    setShowDropdown(false);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDropdown = e => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setShowDropdown(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className='navbar-container'>
        <div className='navbar-brand'>
          <a href='#home' className='navbar-logo'>
            <img src='/logo.webp' alt='Domma Electra' />
            <span>Domma Electra</span>
          </a>
        </div>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a href='#home' className='nav-link'>
                Home
              </a>
            </li>
            <li className='nav-item dropdown'>
              <button
                className='nav-link dropdown-toggle'
                onClick={toggleDropdown}
                onKeyDown={e => handleKeyDown(e, toggleDropdown)}
                aria-expanded={showDropdown}
                aria-haspopup='true'
              >
                Serviços
              </button>
              {showDropdown && (
                <ul className='dropdown-menu'>
                  {servicesArray.map(service => (
                    <li key={service.id}>
                      <button
                        className='dropdown-item'
                        onClick={() => handleServiceClick(service.id)}
                        onKeyDown={e => handleKeyDown(e, () => handleServiceClick(service.id))}
                      >
                        {service.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className='nav-item'>
              <a href='#sobre' className='nav-link'>
                Sobre
              </a>
            </li>
            <li className='nav-item'>
              <a href='#contato' className='nav-link'>
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div className='navbar-cta'>
          <button
            className='cta-button'
            onClick={() => {
              const element = document.getElementById('orcamento');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span>Entre em Contato</span>
          </button>
        </div>

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
