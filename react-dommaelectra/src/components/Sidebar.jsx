import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, service, onClose }) => {
  if (!isOpen || !service) return null;

  const serviceData = {
    'automacao-residencial': {
      title: 'Automação Residencial',
      subtitle: 'Conforto, praticidade e tecnologia na palma da sua mão',
      description: 'A automação residencial integra luz, som, climatização e segurança de forma invisível, mas poderosa. Facilite sua rotina, economize energia e traga conforto com um toque no celular ou comando de voz.',
      features: [
        'Luzes que acendem automaticamente ao detectar presença',
        'Controle total de iluminação, ar-condicionado e cortinas por aplicativo',
        'Comandos por voz com Alexa ou Google',
        'Programações inteligentes por horário ou presença',
        'Cenários personalizados: um botão ativa tudo de uma vez — ex: Modo Cinema'
      ],
      benefits: [
        'Ambientes mais bonitos e funcionais',
        'Praticidade sem precisar encostar em interruptores',
        'Economia de energia',
        'Valorização do imóvel',
        'Conforto tecnológico, sem complicação'
      ],
      image: '/automacao.jpg'
    },
    'acesso-inteligente': {
      title: 'Acesso Inteligente',
      subtitle: 'Segurança e praticidade sem precisar de chaves',
      description: 'Abra portas com digital, senha ou aplicativo — sem riscos de cópia, sem perder tempo. Controle total sobre quem entra, quando e como, com tecnologia moderna e segura.',
      features: [
        'Fechaduras digitais com acesso por senha, biometria ou aplicativo',
        'Automação de portões e portas, com abertura por controle remoto, app ou comando de voz',
        'Registro de entrada e saída: saiba exatamente quando alguém acessou sua casa',
        'Controle de visitas com câmera integrada, mesmo à distância'
      ],
      benefits: [
        'Fim das cópias de chaves e dos esquecimentos',
        'Mais segurança para crianças, idosos e pets',
        'Controle total mesmo à distância',
        'Tecnologia que impressiona e protege'
      ],
      image: '/acesso.jpg'
    },
    'automacao-climatica': {
      title: 'Automação Climática Residencial',
      subtitle: 'Ambientes protegidos e inteligentes, faça sol ou faça chuva',
      description: 'Sua casa reage sozinha à mudança do clima: sacada fecha, desumidificador liga, janelas e cortinas se ajustam automaticamente. Você não precisa correr pra fechar nada — sua casa cuida de você.',
      features: [
        'Fechamento automático de sacadas e janelas por sensores de chuva',
        'Sensores de chuva e vento integrados',
        'Alertas em tempo real no seu celular',
        'Desumidificadores automatizados por sensor',
        'Irrigação de jardim com sensores de umidade',
        'Bomba d\'água com acionamento por nível'
      ],
      benefits: [
        'Evita alagamentos e infiltrações',
        'Preserva móveis e acabamentos',
        'Garante conforto térmico e qualidade do ar',
        'Mais saúde para a família (menos mofo, menos alergia)',
        'Funciona sozinho, mesmo quando você não está em casa'
      ],
      image: '/chuva.png'
    },
    'iluminacao-inteligente': {
      title: 'Ambientes Iluminados com Inteligência',
      subtitle: 'Ambientes que se adaptam ao seu ritmo e melhoram sua qualidade de vida',
      description: 'A iluminação certa muda tudo: o humor, o foco, o descanso. Com automação, a luz da sua casa acompanha seu dia, sua rotina e seu bem-estar — de forma inteligente, automática e personalizada.',
      features: [
        'Luzes que acendem sozinhas ao anoitecer ou por presença',
        'Cenários de iluminação para cada momento: luz suave para relaxar, luz branca para trabalhar',
        'Controle por aplicativo ou comando de voz: ajuste intensidade, cor e temperatura da luz',
        'Aproveitamento da luz natural com cortinas automatizadas',
        'Regulagem automática da iluminação por sensores de luminosidade',
        'Luzes programadas para acordar ou dormir melhor'
      ],
      benefits: [
        'Mais conforto visual para os olhos',
        'Economia de energia',
        'Ambientes mais bonitos, acolhedores e funcionais',
        'Comodidade no dia a dia',
        'Rotina mais leve e inteligente'
      ],
      image: '/luzconforto.png'
    },
    'automacao-personalizada': {
      title: 'Automação Personalizada',
      subtitle: 'Cada detalhe pensado para sua rotina, seu espaço, seu jeito',
      description: 'Nem toda casa é igual. Nem todo morador tem os mesmos hábitos. Por isso, sua automação precisa ser feita sob medida, com soluções inteligentes adaptadas ao que realmente faz sentido pra você.',
      features: [
        'Projetos adaptados para espaços comerciais, clínicos e consultórios',
        'Programações específicas para casas com animais de estimação',
        'Automação pensada para idosos e crianças',
        'Cenários personalizados por hábitos e horários',
        'Ambientes multiuso programáveis',
        'Diagnóstico técnico gratuito e consultoria completa'
      ],
      benefits: [
        'Você não precisa se adaptar à tecnologia — a tecnologia se adapta a você',
        'Projetos flexíveis, que respeitam seu orçamento e prioridades',
        'Consultoria humanizada, sem soluções que não fazem sentido'
      ],
      image: '/personalizada.png'
    }
  };

  const data = serviceData[service];

  return (
    <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="sidebar" onClick={(e) => e.stopPropagation()}>
        <button className="sidebar-close" onClick={onClose}>
          <span>×</span>
        </button>
        
        <div className="sidebar-content">
          <div className="sidebar-header">
            <img src={data.image} alt={data.title} className="sidebar-image" />
            <h2 className="sidebar-title">{data.title}</h2>
            <h3 className="sidebar-subtitle">{data.subtitle}</h3>
          </div>
          
          <div className="sidebar-body">
            <p className="sidebar-description">{data.description}</p>
            
            <div className="sidebar-section">
              <h4>O que você pode ter:</h4>
              <ul className="sidebar-features">
                {data.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="sidebar-section">
              <h4>Benefícios:</h4>
              <ul className="sidebar-benefits">
                {data.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="sidebar-footer">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 