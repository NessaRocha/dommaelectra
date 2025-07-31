import React, { useState, useEffect } from 'react';
import './AutomacaoResidencial.css';

const AutomacaoResidencial = ({ setSlideAtivo }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      id: 1,
      title: 'Automação Residencial',
      subtitle: 'Transforme sua casa em um lar inteligente',
      description: 'Controle iluminação, temperatura, segurança e muito mais com apenas um toque.',
      image: '/automacao.webp',
      cta: 'Solicitar Orçamento',
    },
    {
      id: 2,
      title: 'Sistemas de Segurança',
      subtitle: 'Proteção 24 horas para sua família',
      description: 'Câmeras inteligentes, sensores de movimento e alarmes integrados.',
      image: '/acesso.webp',
      cta: 'Conhecer Soluções',
    },
    {
      id: 3,
      title: 'Controle Climático',
      subtitle: 'Conforto térmico personalizado',
      description: 'Ar condicionado, ventilação e umidificação controlados automaticamente.',
      image: '/chuva.webp',
      cta: 'Ver Detalhes',
    },
  ];

  const servicos = [
    {
      id: 1,
      title: 'Iluminação Inteligente',
      description: 'Controle de luzes por voz, app ou automação',
      icon: '💡',
    },
    {
      id: 2,
      title: 'Sistema de Acesso',
      description: 'Fechaduras eletrônicas e controle de entrada',
      icon: '🔐',
    },
    {
      id: 3,
      title: 'Climatização',
      description: 'Controle automático de temperatura e umidade',
      icon: '🌡️',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setSlideAtivo('automacao-residencial');
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('automacao-residencial');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [setSlideAtivo]);

  return (
    <section
      id='automacao-residencial'
      className={`automacao-residencial ${isVisible ? 'visible' : ''}`}
    >
      <div className='banner-container'>
        <div className='banner-slider'>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className='slide-content'>
                <h1 className='slide-title'>{slide.title}</h1>
                <h2 className='slide-subtitle'>{slide.subtitle}</h2>
                <p className='slide-description'>{slide.description}</p>
                <a href='#orcamento' className='banner-btn'>
                  <span>{slide.cta}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className='banner-dots'>
          {slides.map((slide, index) => (
            <button
              key={`dot-${slide.id}`}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className='servicos-grid'>
        {servicos.map(servico => (
          <div key={servico.id} className='servico-card'>
            <div className='servico-icon'>{servico.icon}</div>
            <h3 className='servico-title'>{servico.title}</h3>
            <p className='servico-description'>{servico.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AutomacaoResidencial;
