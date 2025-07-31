import React, { useState, useEffect } from 'react';
import './Sobre.css';

/**
 * Componente Sobre - Seção sobre a empresa com foto dinâmica
 * @returns {JSX.Element} Componente da seção sobre
 */
const Sobre = () => {
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

    const element = document.getElementById('sobre');
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
    <section id='sobre' className={`sobre-section ${isVisible ? 'visible' : ''}`}>
      {/* Background com gradiente vermelho escuro */}
      <div className='sobre-background'>
        <div className='sobre-overlay'></div>
      </div>

      {/* Container principal */}
      <div className='sobre-container'>
        {/* Conteúdo textual */}
        <div className='sobre-content'>
          <h2 className='sobre-title'>Sobre a Domma Electra</h2>
          
          {/* Palavras-chave da empresa */}
          <div className='sobre-keywords'>
            <div className='keyword-item'>
              <span className='keyword-text'>Conectar</span>
            </div>
            <div className='keyword-item'>
              <span className='keyword-text'>Proteger</span>
            </div>
            <div className='keyword-item'>
              <span className='keyword-text'>Cuidar</span>
            </div>
          </div>
          
          <div className='sobre-text'>
            <p className='sobre-highlight'>
              Especialistas em automação residencial e comercial, transformamos sua casa em um ambiente moderno e conectado.
            </p>
            
            <p>
              Com anos de experiência no mercado, nossa equipe técnica qualificada desenvolve projetos personalizados 
              que atendem às necessidades específicas de cada cliente, utilizando as mais avançadas tecnologias.
            </p>
            
            <p>
              Nossa missão é proporcionar conforto, praticidade e economia de energia através de sistemas inteligentes 
              que se adaptam ao seu estilo de vida, trabalhando com as principais marcas do mercado.
            </p>
            
            <p className='sobre-cta'>
              Entre em contato e descubra como podemos transformar sua casa em um lar inteligente e moderno.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Sobre;
