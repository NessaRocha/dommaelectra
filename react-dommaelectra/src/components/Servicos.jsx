import React, { useState, useEffect } from 'react';
import './Servicos.css';

/**
 * Componente Servicos - Seção âncora para serviços
 * @returns {JSX.Element} Componente da seção âncora de serviços
 */
const Servicos = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Observer para animação de entrada
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('servicos');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id='servicos' className={`servicos-section ${isVisible ? 'visible' : ''}`}>
      {/* Background com gradiente */}
      <div className='servicos-background'>
        <div className='servicos-overlay'></div>
      </div>

      {/* Container principal */}
      <div className='servicos-container'>
        <h2 className='servicos-title'>SERVIÇOS</h2>
      </div>
    </section>
  );
};

export default Servicos; 