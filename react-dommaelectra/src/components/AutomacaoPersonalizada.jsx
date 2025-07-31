import React, { useEffect, useState } from 'react';
import './AutomacaoPersonalizada.css';

const AutomacaoPersonalizada = () => {
  const [animar, setAnimar] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimar(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('automacao-personalizada');
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
    <section id='automacao-personalizada' className='automacao-personalizada'>
      <div className='container'>
        <div className={`content ${animar ? 'animar' : ''}`}>
          <div className='header-section'>
            <h2 className='main-title'>
              <span className='title-accent'>AUTOMAÇÃO PERSONALIZADA</span>
              <span className='title-main'>Automação Personalizada</span>
            </h2>
            <p className='subtitle'>
              Cada detalhe pensado para a sua rotina, seu espaço, seu jeito
            </p>
            <p className='description'>
              Nem toda casa é igual. Nem todo morador tem os mesmos hábitos. Por isso, sua automação
              precisa ser feita sob medida, com soluções inteligentes adaptadas ao que realmente faz
              sentido pra você.
            </p>
          </div>

          <div className='solutions-grid'>
            <div className='solution-card'>
              <h3>Projetos adaptados para espaços comerciais, clínicas e consultórios</h3>
              <p>
                Som ambiente, controle de iluminação por sala, agendamento de abertura de cortinas e
                climatização personalizada para cada ambiente.
              </p>
            </div>

            <div className='solution-card'>
              <h3>Programações específicas para casas com pets</h3>
              <p>
                Evite alarmes falsos com sensores adaptados para cachorros e gatos. Automatize
                alimentação, climatização e conforto para os bichinhos.
              </p>
            </div>

            <div className='solution-card'>
              <h3>Automação pensada para idosos e crianças</h3>
              <p>
                Iluminação noturna automática, alarmes silenciosos de emergência, sensores de queda
                e ambientes mais seguros.
              </p>
            </div>

            <div className='solution-card'>
              <h3>Cenários personalizados por hábitos e horários</h3>
              <p>
                Acorda cedo? A casa se prepara pra você. Trabalha em turnos? A iluminação e
                temperatura se ajustam à sua rotina.
              </p>
            </div>

            <div className='solution-card'>
              <h3>Ambientes multiuso programáveis</h3>
              <p>
                Sala que vira home office de dia e cinema à noite? Com um botão, o espaço muda com
                iluminação, som, cortinas e temperatura ideais.
              </p>
            </div>

            <div className='solution-card highlight'>
              <h3>Diagnóstico técnico gratuito e consultoria completa</h3>
              <p>
                Vamos até seu espaço, entendemos sua rotina, tiramos todas as dúvidas e entregamos a
                melhor proposta técnica personalizada — sem custo e sem compromisso.
              </p>
            </div>
          </div>

          <div className='benefits-section'>
            <h3 className='benefits-title'>Benefícios:</h3>
            <ul className='benefits-list'>
              <li>Você não precisa se adaptar à tecnologia — a tecnologia se adapta a você</li>
              <li>Projetos flexíveis, que respeitam o seu orçamento e prioridades</li>
              <li>Consultoria humanizada, sem empurrar soluções que não fazem sentido</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomacaoPersonalizada;
