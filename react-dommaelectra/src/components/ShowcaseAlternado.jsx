import React from 'react';
import { useMultiScrollAnimation } from '../hooks/useScrollAnimation';
import { generateSectionId } from '../data/services';
import './ShowcaseAlternado.css';

const ShowcaseAlternado = ({ sections }) => {
  const sectionRefs = useMultiScrollAnimation([], {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
    animationClass: 'animate',
  });

  return (
    <section className='showcase-alternado'>
      {sections.map((item, idx) => {
        const sectionId = generateSectionId(item.title);
        return (
          <div
            className={`showcase-row ${idx % 2 === 0 ? 'img-left' : 'img-right'}`}
            key={item.id}
            id={sectionId}
            aria-label={`Seção ${item.title}`}
            ref={el => (sectionRefs.current[idx] = el)}
          >
            <div className='showcase-img-bloco'>
              <img src={item.image} alt={item.alt} className='showcase-img' />
            </div>
            <div className='showcase-content-bloco'>
              <h3 className='showcase-title'>{item.title}</h3>
              {item.subtitle && <h3 className='showcase-subtitle'>{item.subtitle}</h3>}
              {item.description && <div className='showcase-desc'>{item.description}</div>}
              {item.features && (
                <div className='showcase-lista-bloco'>
                  <h4 className='showcase-lista-title'>O que você pode ter:</h4>
                  <ul className='showcase-lista'>
                    {item.features.map((feature, _featureIndex) => (
                      <li key={`${item.id}-feature-${feature.replace(/\s+/gu, '-').toLowerCase()}`}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {item.benefits && (
                <div className='showcase-beneficios-bloco'>
                  <h4 className='showcase-beneficios-title'>Benefícios:</h4>
                  <ul className='showcase-beneficios'>
                    {item.benefits.map((benefit, _benefitIndex) => (
                      <li key={`${item.id}-benefit-${benefit.replace(/\s+/gu, '-').toLowerCase()}`}>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {item.benefits && (
                <a href='https://wa.me/5551996138467?text=Olá! Gostaria de solicitar um orçamento para automação residencial.' className='banner-btn' target='_blank' rel='noopener noreferrer'>
                  <span>PEÇA SEU ORÇAMENTO</span>
                </a>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ShowcaseAlternado;
