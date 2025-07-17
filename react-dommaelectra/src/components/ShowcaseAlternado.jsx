import React from "react";
import "./ShowcaseAlternado.css";

const ShowcaseAlternado = ({ sections }) => {
  return (
    <section className="showcase-alternado" id="ajuda-detalhes">
      <h2 className="showcase-global-title">Como Posso Ajudar</h2>
      {sections.map((item, idx) => {
        // Criar ID baseado no título
        const sectionId = item.titulo
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, '');
        
        return (
          <div
            className={`showcase-row ${idx % 2 === 0 ? "img-left" : "img-right"}`}
            key={item.titulo}
            id={sectionId}
            tabIndex="-1"
            role="region"
            aria-label={`Seção ${item.titulo}`}
          >
          <div className="showcase-img-bloco">
            <img src={item.src} alt={item.alt} className="showcase-img" />
          </div>
          <div className="showcase-content-bloco">
            <h3 className="showcase-title">{item.titulo}</h3>
            {item.subtitulo && <h3 className="showcase-subtitle">{item.subtitulo}</h3>}
            {item.descricao && <div className="showcase-desc">{item.descricao}</div>}
            {item.lista && (
              <div className="showcase-lista-bloco">
                <h4 className="showcase-lista-title">{item.listaTitulo}</h4>
                <ul className="showcase-lista">
                  {item.lista.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              </div>
            )}
            {item.beneficios && (
              <div className="showcase-beneficios-bloco">
                <h4 className="showcase-beneficios-title">Benefícios:</h4>
                <ul className="showcase-beneficios">
                  {item.beneficios.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
            {item.beneficios && (
              <a href="#orcamento" className="banner-btn"><span>PEÇA SEU ORÇAMENTO</span></a>
            )}
          </div>
          </div>
        );
      })}
    </section>
  );
};

export default ShowcaseAlternado; 