import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Separador colapsable entre el bloque de Llave MX y el formulario tradicional
 */
const AuthSeparator = ({ isLoginPage, children, currentProvider, autoExpand }) => {
  // Si viene de Llave MX o autoExpand es true, expandir por defecto
  const shouldAutoExpand = currentProvider === 'oa2-llavemx' || autoExpand;
  const [isExpanded, setIsExpanded] = useState(shouldAutoExpand);

  console.log('AuthSeparator - currentProvider:', currentProvider);
  console.log('AuthSeparator - autoExpand:', autoExpand);
  console.log('AuthSeparator - shouldAutoExpand:', shouldAutoExpand);
  console.log('AuthSeparator - isExpanded:', isExpanded);

  const text = isLoginPage
    ? 'Otras formas de acceder'
    : 'Otras formas de registrarse';

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Si viene de Llave MX o autoExpand, no mostrar el botón, solo el contenido
  if (shouldAutoExpand) {
    return (
      <div className="auth-separator-content">
        {children}
      </div>
    );
  }

  // Si no se auto-expande (no viene de Llave MX), no mostramos nada (ni botón ni formulario)
  return null;
};

AuthSeparator.propTypes = {
  isLoginPage: PropTypes.bool,
  children: PropTypes.node,
  currentProvider: PropTypes.string,
  autoExpand: PropTypes.bool,
};

AuthSeparator.defaultProps = {
  isLoginPage: false,
  children: null,
  currentProvider: null,
  autoExpand: false,
};

export default AuthSeparator;
