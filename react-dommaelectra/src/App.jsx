import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sobre from './components/Sobre'
import AutomacaoResidencial from './components/AutomacaoResidencial'
import ShowcaseAlternado from './components/ShowcaseAlternado'
import { useState } from 'react'
import './index.css'

const showcaseSections = [
  {
    src: '/automacao.jpg',
    alt: 'Automação Residencial',
    titulo: 'Automação Residencial',
    subtitulo: 'Conforto, praticidade e tecnologia na palma da sua mão',
    descricao: 'A automação residencial integra luz, som, climatização e segurança de forma invisível, mas poderosa. Facilite sua rotina, economize energia e traga conforto com um toque no celular ou comando de voz.',
    listaTitulo: 'O que você pode ter em casa:',
    lista: [
      'Luzes que acendem automaticamente ao detectar presença',
      'Controle total de iluminação, ar-condicionado e cortinas por aplicativo',
      'Comandos por voz com Alexa ou Google',
      'Programações inteligentes por horário ou presença',
      'Cenários personalizados: um botão ativa tudo de uma vez — ex: Modo Cinema'
    ],
    beneficios: [
      'Ambientes mais bonitos e funcionais',
      'Praticidade sem precisar encostar em interruptores',
      'Economia de energia',
      'Valorização do imóvel',
      'Conforto tecnológico, sem complicação'
    ]
  },
  {
    src: '/acesso.jpg',
    alt: 'Acesso Inteligente',
    titulo: 'Acesso Inteligente',
    subtitulo: 'Segurança e praticidade sem precisar de chaves',
    descricao: 'Abra portas com digital, senha ou aplicativo — sem riscos de cópia, sem perder tempo. Controle total sobre quem entra, quando e como, com tecnologia moderna e segura.',
    listaTitulo: 'O que você pode ter com acesso inteligente:',
    lista: [
      'Fechaduras digitais com acesso por senha, biometria ou aplicativo',
      'Automação de portões e portas, com abertura por controle remoto, app ou comando de voz',
      'Registro de entrada e saída: saiba exatamente quando alguém acessou sua casa',
      'Controle de visitas com câmera integrada, mesmo à distância'
    ],
    beneficios: [
      'Fim das cópias de chaves e dos esquecimentos',
      'Mais segurança para crianças, idosos e pets',
      'Controle total mesmo à distância',
      'Tecnologia que impressiona e protege'
    ]
  },
  {
    src: '/chuva.png',
    alt: 'Automação Climática Residencial',
    titulo: 'Automação Climática Residencial',
    subtitulo: 'Ambientes protegidos e inteligentes, faça sol ou faça chuva',
    descricao: 'Sua casa reage sozinha à mudança do clima: sacada fecha, desumidificador liga, janelas e cortinas se ajustam automaticamente. Você não precisa correr pra fechar nada — sua casa cuida de você.',
    listaTitulo: 'Soluções automáticas que você pode ter:',
    lista: [
      'Fechamento automático de sacadas e janelas por sensores de chuva',
      'Sensores de chuva e vento integrados',
      'Alertas em tempo real no seu celular',
      'Desumidificadores automatizados por sensor',
      'Irrigação de jardim com sensores de umidade',
      'Bomba d’água com acionamento por nível'
    ],
    beneficios: [
      'Evita alagamentos e infiltrações',
      'Preserva móveis e acabamentos',
      'Garante conforto térmico e qualidade do ar',
      'Mais saúde para a família (menos mofo, menos alergia)',
      'Funciona sozinho, mesmo quando você não está em casa'
    ]
  },
  {
    src: '/luzconforto.png',
    alt: 'Ambientes Iluminados com Inteligência',
    titulo: 'Ambientes Iluminados com Inteligência',
    subtitulo: 'Ambientes que se adaptam ao seu ritmo e melhoram sua qualidade de vida',
    descricao: 'A iluminação certa muda tudo: o humor, o foco, o descanso. Com automação, a luz da sua casa acompanha seu dia, sua rotina e seu bem-estar — de forma inteligente, automática e personalizada.',
    listaTitulo: 'O que você pode ter:',
    lista: [
      'Luzes que acendem sozinhas ao anoitecer ou por presença — corredores, banheiros e cozinhas iluminam ao detectar movimento.',
      'Cenários de iluminação para cada momento: luz suave para relaxar, luz branca para trabalhar, luz indireta para filmes.',
      'Controle por aplicativo ou comando de voz: ajuste intensidade, cor e temperatura da luz direto do celular, Alexa ou Google Assistente.',
      'Aproveitamento da luz natural com cortinas automatizadas: abrem e fecham secretas conforme a luz solar.',
      'Regulagem automática da iluminação por sensores de luminosidade.',
      'Luzes programadas para acordar ou dormir melhor: simular o nascer do sol para despertar naturalmente ou apague tudo suavemente na hora de dormir.'
    ],
    beneficios: [
      'Mais conforto visual para os olhos',
      'Economia de energia',
      'Ambientes mais bonitos, acolhedores e funcionais',
      'Comodidade no dia a dia',
      'Rotina mais leve e inteligente'
    ]
  },
  {
    src: '/personalizada.png',
    alt: 'Automação Personalizada',
    titulo: 'Automação Personalizada',
    subtitulo: 'Cada detalhe pensado para sua rotina, seu espaço, seu jeito',
    descricao: 'Nem toda casa é igual. Nem todo morador tem os mesmos hábitos. Por isso, sua automação precisa ser feita sob medida, com soluções inteligentes adaptadas ao que realmente faz sentido pra você.',
    listaTitulo: 'Soluções exclusivas que oferecemos:',
    lista: [
      'Projetos adaptados para espaços comerciais, clínicos e consultórios: som ambiente, controle de iluminação por sala, agendamento de abertura de cortinas e climatização personalizada.',
      'Programações específicas para casas com animais de estimação: sensores adaptados para cachorros e gatos, automação de alimentação, climatização e conforto.',
      'Automação pensada para idosos e crianças: iluminação noturna automática, alarmes silenciosos de emergência, sensores de queda e ambientes mais seguros.',
      'Cenários personalizados por hábitos e horários: a casa se prepara para sua rotina.',
      'Ambientes multiuso programáveis: sala que vira home office de dia e cinema à noite, com um botão.'
    ],
    beneficios: [
      'Você não precisa se adaptar à tecnologia — a tecnologia se adapta a você',
      'Projetos flexíveis, que respeitam seu orçamento e prioridades',
      'Consultoria humanizada, sem soluções que não fazem sentido'
    ]
  }
];

function App() {
  const [slideAtivo, setSlideAtivo] = useState('');
  return (
    <>
      <Navbar slideAtivo={slideAtivo} />
      <AutomacaoResidencial setSlideAtivo={setSlideAtivo} />
      <ShowcaseAlternado sections={showcaseSections} />
      <Sobre />
      <Footer />
    </>
  )
}

export default App
