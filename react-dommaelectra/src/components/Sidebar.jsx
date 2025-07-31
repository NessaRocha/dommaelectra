import React from 'react';
import { getServiceData } from '../data/services';
import './Sidebar.css';

const Sidebar = ({ isOpen, service, onClose }) => {
  if (!isOpen || !service) {
    return null;
  }

  const data = getServiceData(service);
  if (!data) {
    return (
      <div className='sidebar-overlay' onClick={onClose}>
        <div className='sidebar' onClick={e => e.stopPropagation()}>
          <div className='sidebar-content'>
            <p>Serviço não encontrado.</p>
          </div>
        </div>
      </div>
    );
  }

  const renderFeatures = () => {
    if (!data.features || data.features.length === 0) {
      return null;
    }

    return (
      <div className='sidebar-features'>
        <h4>O que você pode ter:</h4>
        <ul>
          {data.features.map((feature, _index) => (
            <li key={`feature-${data.id}-${feature.replace(/\s+/gu, '-').toLowerCase()}`}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderBenefits = () => {
    if (!data.benefits || data.benefits.length === 0) {
      return null;
    }

    return (
      <div className='sidebar-benefits'>
        <h4>Benefícios:</h4>
        <ul>
          {data.benefits.map((benefit, _index) => (
            <li key={`benefit-${data.id}-${benefit.replace(/\s+/gu, '-').toLowerCase()}`}>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className='sidebar-overlay' onClick={onClose}>
      <div className='sidebar' onClick={e => e.stopPropagation()}>
        <button className='sidebar-close' onClick={onClose} aria-label='Fechar detalhes do serviço'>
          <span>×</span>
        </button>

        <div className='sidebar-content'>
          <div className='sidebar-header'>
            <h2>{data.title}</h2>
            {data.subtitle && <h3>{data.subtitle}</h3>}
          </div>

          {data.image && (
            <div className='sidebar-image'>
              <img src={data.image} alt={data.alt || data.title} />
            </div>
          )}

          {data.description && (
            <div className='sidebar-description'>
              <p>{data.description}</p>
            </div>
          )}

          {renderFeatures()}
          {renderBenefits()}

          <div className='sidebar-cta'>
            <a href='#orcamento' className='sidebar-button'>
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
