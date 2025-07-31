// Dados centralizados dos serviços
export const servicesData = {
  'automacao-residencial': {
    id: 'automacao-residencial',
    title: 'Automação Residencial',
    subtitle: 'Transforme sua casa em um lar inteligente',
    description:
      'Controle total da sua casa através de dispositivos inteligentes. Iluminação, temperatura, segurança e muito mais na palma da sua mão.',
    image: '/automacao.webp',
    alt: 'Automação Residencial Inteligente',
    features: [
      'Controle de iluminação por voz ou app',
      'Sistema de climatização inteligente',
      'Automação de cortinas e persianas',
      'Controle de eletrodomésticos',
      'Cenários personalizados para cada momento',
    ],
    benefits: [
      'Economia de energia de até 30%',
      'Maior conforto e praticidade',
      'Segurança aprimorada',
      'Valorização do imóvel',
      'Tecnologia de ponta',
    ],
  },
  'acesso-inteligente': {
    id: 'acesso-inteligente',
    title: 'Acesso Inteligente',
    subtitle: 'Segurança e praticidade na entrada da sua casa',
    description:
      'Sistemas avançados de controle de acesso que garantem segurança sem abrir mão da praticidade.',
    image: '/acesso.webp',
    alt: 'Sistema de Acesso Inteligente',
    features: [
      'Fechaduras eletrônicas',
      'Controle de portões automáticos',
      'Sistema de intercomunicação',
      'Controle de acesso por biometria',
      'Monitoramento em tempo real',
    ],
    benefits: [
      'Segurança 24 horas',
      'Controle remoto de acessos',
      'Histórico de entradas e saídas',
      'Integração com sistema de alarme',
      'Facilidade de uso',
    ],
  },
  'automacao-climatica': {
    id: 'automacao-climatica',
    title: 'Automação Climática',
    subtitle: 'Conforto térmico personalizado',
    description:
      'Sistemas inteligentes que mantêm a temperatura ideal em cada ambiente da sua casa.',
    image: '/chuva.webp',
    alt: 'Automação Climática Inteligente',
    features: [
      'Controle de ar condicionado',
      'Sensores de temperatura e umidade',
      'Ventilação automática',
      'Controle de umidificadores',
      'Programação por horários',
    ],
    benefits: [
      'Conforto térmico ideal',
      'Economia de energia',
      'Saúde e bem-estar',
      'Controle por zona',
      'Automação inteligente',
    ],
  },
  'iluminacao-inteligente': {
    id: 'iluminacao-inteligente',
    title: 'Iluminação Inteligente',
    subtitle: 'Luz que se adapta ao seu momento',
    description:
      'Sistemas de iluminação inteligente que criam ambientes perfeitos para cada ocasião.',
    image: '/luzconforto.webp',
    alt: 'Iluminação Inteligente Residencial',
    features: [
      'Lâmpadas LED inteligentes',
      'Controle de intensidade',
      'Cores personalizáveis',
      'Cenários de iluminação',
      'Controle por voz',
    ],
    benefits: [
      'Economia de energia',
      'Ambientes personalizados',
      'Conforto visual',
      'Segurança noturna',
      'Tecnologia LED avançada',
    ],
  },
  'automacao-personalizada': {
    id: 'automacao-personalizada',
    title: 'Automação Personalizada',
    subtitle: 'Soluções sob medida para sua casa',
    description:
      'Projetos personalizados que atendem às necessidades específicas da sua família e do seu espaço.',
    image: '/personalizada.webp',
    alt: 'Automação Residencial Personalizada',
    features: [
      'Projeto personalizado',
      'Integração de sistemas',
      'Interface customizada',
      'Suporte técnico especializado',
      'Manutenção preventiva',
    ],
    benefits: [
      'Solução sob medida',
      'Integração completa',
      'Suporte dedicado',
      'Escalabilidade',
      'Tecnologia exclusiva',
    ],
  },
};

export const servicesArray = Object.values(servicesData);

export const getServiceData = serviceId => servicesData[serviceId] || null;

export const generateSectionId = title =>
  title
    .toLowerCase()
    .replace(/[^\w\s-]/gu, '') // Remove caracteres especiais
    .replace(/\s+/gu, '-') // Substitui espaços por hífens
    .replace(/-+/gu, '-') // Remove hífens duplicados
    .trim();
