import React from 'react';
import './Button.css';

/**
 * Componente Button reutilizável
 * @param {Object} props - Propriedades do botão
 * @param {string} props.variant - Variante do botão (primary, secondary, outline)
 * @param {string} props.size - Tamanho do botão (small, medium, large)
 * @param {boolean} props.disabled - Se o botão está desabilitado
 * @param {string} props.className - Classes CSS adicionais
 * @param {React.ReactNode} props.children - Conteúdo do botão
 * @param {Object} props.rest - Outras propriedades
 */
const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  children,
  ...rest
}) => {
  const buttonClass =
    `btn btn-${variant} btn-${size} ${disabled ? 'btn-disabled' : ''} ${className}`.trim();

  return (
    <button className={buttonClass} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
