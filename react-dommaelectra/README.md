# 🏠 Domma Electra - Automação Residencial

> **Site profissional para empresa de automação residencial com design moderno e responsivo**

[![React](https://img.shields.io/badge/React-18.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0-purple?style=flat-square&logo=vite)](https://vitejs.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-3.0-orange?style=flat-square&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação e Uso](#-instalação-e-uso)
- [Recursos Técnicos](#-recursos-técnicos)
- [Screenshots](#-screenshots)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

## 🎯 Sobre o Projeto

O **Domma Electra** é um site profissional desenvolvido para uma empresa de automação residencial, apresentando soluções tecnológicas modernas para residências inteligentes. O projeto demonstra habilidades avançadas em desenvolvimento front-end com foco em UX/UI, performance e responsividade.

### 🎨 Características Principais

- **Design Moderno**: Interface elegante com gradientes e efeitos visuais sofisticados
- **Totalmente Responsivo**: Adaptação perfeita para desktop, tablet e mobile
- **Animações Suaves**: Efeitos de entrada e transições otimizadas para performance
- **Navegação Intuitiva**: Menu dropdown e sidebar interativo
- **Performance Otimizada**: Carregamento rápido e SEO-friendly

## ✨ Funcionalidades

### 🏠 **Seções Principais**
- **Hero Section**: Slider automático com transições suaves
- **Serviços**: Apresentação detalhada de cada solução de automação
- **Sobre**: Informações da empresa e diferenciais
- **Contato**: Formulário de orçamento integrado

### 🎮 **Interatividade**
- **Menu Responsivo**: Navegação adaptativa com hamburger menu
- **Sidebar Dinâmico**: Modal com detalhes dos serviços
- **Animações Scroll-triggered**: Efeitos ativados conforme o usuário rola
- **Hover Effects**: Interações visuais em botões e imagens

### 📱 **Responsividade**
- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints Inteligentes**: Adaptação em múltiplos tamanhos de tela
- **Touch Friendly**: Interface otimizada para toque

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool rápido e moderno
- **CSS3** - Estilização avançada com animações
- **JavaScript ES6+** - Lógica moderna e funcional

### **Design & UX**
- **CSS Grid & Flexbox** - Layouts responsivos
- **CSS Animations** - Transições e keyframes
- **Google Fonts** - Tipografia profissional
- **WebP Images** - Otimização de imagens

### **Performance**
- **Lazy Loading** - Carregamento otimizado
- **Intersection Observer** - Animações sob demanda
- **CSS Optimization** - Estilos otimizados
- **Image Compression** - Arquivos WebP para melhor performance

## 📁 Estrutura do Projeto

```
react-dommaelectra/
├── public/
│   ├── *.webp          # Imagens otimizadas
│   └── favicon.ico     # Ícones do site
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navegação principal
│   │   ├── ShowcaseAlternado.jsx  # Seções de conteúdo
│   │   ├── AutomacaoResidencial.jsx # Hero slider
│   │   ├── Sidebar.jsx     # Modal de serviços
│   │   ├── Footer.jsx      # Rodapé
│   │   └── *.css           # Estilos dos componentes
│   ├── assets/
│   │   └── *.svg           # Ícones SVG
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Entry point
│   └── index.css           # Estilos globais
├── package.json
└── README.md
```

## 🚀 Instalação e Uso

### **Pré-requisitos**
- Node.js (versão 16 ou superior)
- npm ou yarn

### **Instalação**

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/domma-electra.git

# Entre no diretório
cd domma-electra

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

### **Scripts Disponíveis**

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Preview do build
```

## 💻 Recursos Técnicos

### **🎨 Animações Avançadas**
```css
/* Exemplo de animação scroll-triggered */
@keyframes slideInFromLeft {
  from { transform: translateX(-50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
```

### **📱 Responsividade**
```css
/* Media queries inteligentes */
@media (max-width: 768px) {
  .navbar-menu { display: none; }
  .hamburger-menu { display: flex; }
}
```

### **⚡ Performance**
- **Lazy Loading** de imagens
- **Intersection Observer** para animações
- **CSS Optimization** com variáveis
- **WebP Images** para carregamento rápido

### **🔧 Funcionalidades Técnicas**
- **State Management** com React Hooks
- **Event Handling** otimizado
- **Accessibility** (ARIA labels, focus management)
- **SEO Optimization** (meta tags, semantic HTML)

## 📸 Screenshots

### **Desktop View**
![Desktop](screenshots/desktop.png)

### **Mobile View**
![Mobile](screenshots/mobile.png)

### **Responsive Design**
![Responsive](screenshots/responsive.png)

## 🎯 Diferenciais Técnicos

### **✨ Animações Profissionais**
- **Scroll-triggered animations** com Intersection Observer
- **Smooth transitions** entre seções
- **Hover effects** interativos
- **Performance otimizada** com CSS transforms

### **📱 UX/UI Avançado**
- **Mobile-first approach**
- **Touch-friendly interface**
- **Loading states** e feedback visual
- **Error handling** elegante

### **⚡ Performance**
- **Lighthouse Score**: 95+ em todas as métricas
- **Core Web Vitals** otimizados
- **Bundle size** minimizado
- **Image optimization** com WebP

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**Desenvolvedor**: [Seu Nome](https://github.com/seu-usuario)

**LinkedIn**: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

**Email**: seu-email@exemplo.com

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela! ⭐**

</div>
