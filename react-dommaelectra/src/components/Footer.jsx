import React, { useRef } from 'react';
import './Footer.css';
import whatsapp from '../assets/whatsapp.svg';
import linkedin from '../assets/linkedin.svg';

const icons = {
  email: (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='#201016'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect x='2' y='4' width='20' height='16' rx='2' />
      <polyline points='22,6 12,13 2,6' />
    </svg>
  ),
  instagram: (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='#201016'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect x='2' y='2' width='20' height='20' rx='5' />
      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
      <line x1='17.5' y1='6.5' x2='17.5' y2='6.5' />
    </svg>
  ),
  whatsapp: <img src={whatsapp} width={24} height={24} alt='WhatsApp' />,
  facebook: (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='#201016'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
    </svg>
  ),
  linkedin: <img src={linkedin} width={24} height={24} alt='LinkedIn' />,
  youtube: (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='#201016'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect x='2' y='4' width='20' height='16' rx='4' />
      <polygon points='10 9 16 12 10 15 10 9' />
    </svg>
  ),
  up: (
    <svg
      width='28'
      height='28'
      viewBox='0 0 24 24'
      fill='none'
      stroke='#fff'
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polyline points='18 15 12 9 6 15' />
    </svg>
  ),
};

const Footer = () => {
  const emailRef = useRef();
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='footer'>
      <div className='footer-stack'>
        <div className='footer-logo-row'>
          <img src='/logo.webp' alt='Logo Domma Electra' className='footer-logo-img-large' />
          <span className='footer-slogan-large'>Conectar • Proteger • Cuidar</span>
        </div>
        <nav className='footer-nav'>
          <ul>
            <li>
              <a href='#inicio'>Início</a>
            </li>
            <li>
              <a href='#ajuda'>Como Posso Ajudar</a>
            </li>
            <li>
              <a href='#quem'>Quem Sou Eu</a>
            </li>
            <li>
              <a href='#orcamento'>Solicitar Orçamento</a>
            </li>
          </ul>
        </nav>
        <form className='footer-newsletter' onSubmit={e => e.preventDefault()}>
          <label htmlFor='newsletter-email' className='sr-only'>
            Cadastre-se para novidades
          </label>
          <input
            ref={emailRef}
            type='email'
            id='newsletter-email'
            name='newsletter-email'
            placeholder='Seu e-mail...'
            autoComplete='email'
            required
            aria-label='Seu e-mail'
          />
          <button type='submit'>Cadastrar e receber novidades</button>
        </form>
        <div className='footer-social-row'>
          <a href='mailto:dommaelectra@gmail.com' aria-label='E-mail'>
            {icons.email}
          </a>
          <a
            href='https://instagram.com/dommaelectra'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
          >
            {icons.instagram}
          </a>
          <a
            href='https://facebook.com/dommaelectra'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'
          >
            {icons.facebook}
          </a>
          <a
            href='https://linkedin.com/company/dommaelectra'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            {icons.linkedin}
          </a>
          <a
            href='https://wa.me/5551996138467'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='WhatsApp'
          >
            {icons.whatsapp}
          </a>
          <a
            href='https://youtube.com/@dommaelectra'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='YouTube'
          >
            {icons.youtube}
          </a>
        </div>
      </div>
      <button className='footer-up-float' onClick={handleScrollTop} aria-label='Voltar ao topo'>
        {icons.up}
      </button>
      <div className='footer-copy'>
        &copy; {new Date().getFullYear()} Domma Electra. Todos os direitos reservados.{' '}
        <span className='footer-signature'>@VanessaRocha</span>
      </div>
    </footer>
  );
};

export default Footer;
