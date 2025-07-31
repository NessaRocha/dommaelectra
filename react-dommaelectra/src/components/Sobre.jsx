import React from 'react';
import './Sobre.css';

const Sobre = () => (
  <section id='sobre' className='sobre-section'>
    <div className='sobre-container'>
      <div className='sobre-content'>
        <h2 className='sobre-title'>Sobre a Domma Electra</h2>

        <div className='sobre-text'>
          <p>
            Somos especialistas em automação residencial e comercial, oferecendo soluções
            inteligentes que transformam sua casa em um ambiente moderno e conectado.
          </p>

          <p>
            Com anos de experiência no mercado, nossa equipe técnica qualificada desenvolve projetos
            personalizados que atendem às necessidades específicas de cada cliente.
          </p>

          <p>
            Utilizamos as mais avançadas tecnologias do mercado para garantir que sua automação seja
            eficiente, segura e fácil de usar.
          </p>

          <p>
            Nossa missão é proporcionar conforto, praticidade e economia de energia através de
            sistemas inteligentes que se adaptam ao seu estilo de vida.
          </p>

          <p>
            Trabalhamos com as principais marcas do mercado, garantindo qualidade e durabilidade em
            todos os nossos projetos.
          </p>

          <p>
            Entre em contato conosco e descubra como podemos transformar sua casa em um lar
            inteligente e moderno.
          </p>

          <p>
            Oferecemos consultoria gratuita e orçamento sem compromisso para que você possa conhecer
            todas as possibilidades disponíveis.
          </p>
        </div>
      </div>

      <div className='sobre-image'>
        <img src='/sobre.png' alt='Equipe Domma Electra' />
      </div>
    </div>
  </section>
);

export default Sobre;
