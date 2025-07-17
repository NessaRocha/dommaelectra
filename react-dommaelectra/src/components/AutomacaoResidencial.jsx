import React, { useState, useEffect, useRef } from "react";
import "./AutomacaoResidencial.css";
// import ZigZagImagens from './ZigZagImagens';

const slides = [
  {
    img: "/automacao.jpg",
    titulo: "Automação Residencial",
    subtitulo: "Conforto, praticidade e tecnologia na palma da sua mão"
  },
  {
    img: "/acesso.jpg",
    titulo: "Acesso Inteligente",
    subtitulo: "Controle de portas, portões e segurança pelo app ou comando de voz."
  },
  {
    img: "/chuva.png",
    titulo: "Chuva de Conforto",
    subtitulo: "Sensores e automação para ambientes sempre agradáveis, sem esforço."
  },
  {
    img: "/luzconforto.png",
    titulo: "Luz & Conforto",
    subtitulo: "Cenários de iluminação e clima para cada momento do seu dia."
  }
];

const servicos = [
  {
    img: "/chuva.png",
    alt: "Chuva de Conforto",
    titulo: "Chuva de Conforto",
    desc: "Sensores e automação para ambientes sempre agradáveis, sem esforço."
  },
  {
    img: "/acesso.jpg",
    alt: "Acesso Inteligente",
    titulo: "Acesso Inteligente",
    desc: "Controle de portas, portões e segurança pelo app ou comando de voz."
  },
  {
    img: "/luzconforto.png",
    alt: "Luz & Conforto",
    titulo: "Luz & Conforto",
    desc: "Cenários de iluminação e clima para cada momento do seu dia."
  }
];

const WhatsAppIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#25D366"/><path d="M23.5 20.5c-.3-.2-1.8-.9-2.1-1-0.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-2-.8-3.3-2.8-3.5-3.2-.1-.2 0-.5.1-.6.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2.2-.3.1-.2.1-.4 0-.6-0.1-.2-.7-1.7-1-2.3-.2-.5-.4-.4-.7-.4h-.6c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2.1 3.3 5.2 4.4.7.2 1.2.3 1.6.2.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2z" fill="#fff"/></svg>
);

const AutomacaoResidencial = ({ setSlideAtivo }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Autoplay com pausa ao interagir
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  useEffect(() => {
    if (setSlideAtivo) setSlideAtivo(slides[current].img);
  }, [current, setSlideAtivo]);

  const goTo = (idx) => {
    clearTimeout(timeoutRef.current);
    setCurrent(idx);
  };

  return (
    <section className="ajuda-hero-section" id="ajuda">
      <div className="slider-container">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`slide${idx === current ? " active" : ""}`}
            style={{ backgroundImage: `url(${slide.img})` }}
            aria-hidden={idx !== current}
          >
            <div className="slide-content">
              <h1>{slide.titulo}</h1>
              <h2>{slide.subtitulo}</h2>
              <a href="#orcamento" className="banner-btn"><span>PEÇA SEU ORÇAMENTO</span></a>
            </div>
          </div>
        ))}
        {/* Navegação premium */}
        <div className="slider-navigation-wrapper">
          <div className="slider-line"></div>
          <div className="slider-dots">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`slider-dot${current === idx ? " active" : ""}`}
                aria-label={`Ir para slide ${idx + 1}`}
                onClick={() => goTo(idx)}
              />
            ))}
          </div>
        </div>
        {/* Removidas as setas laterais */}
      </div>
      {/* <ZigZagImagens /> */}
      <a
        href="https://wa.me/5551996138467"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#25D366"/><path d="M23.5 20.5c-.3-.2-1.8-.9-2.1-1-0.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-2-.8-3.3-2.8-3.5-3.2-.1-.2 0-.5.1-.6.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2.2-.3.1-.2.1-.4 0-.6-0.1-.2-.7-1.7-1-2.3-.2-.5-.4-.4-.7-.4h-.6c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2.1 3.3 5.2 4.4.7.2 1.2.3 1.6.2.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2z" fill="#fff"/></svg>
      </a>
    </section>
  );
};

export default AutomacaoResidencial; 