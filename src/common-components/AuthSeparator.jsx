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

  return (
    <div className="auth-separator-wrapper">
      <button 
        type="button"
        className="auth-separator-toggle"
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
      >
        <span className="auth-separator-toggle__icon">
          {isExpanded ? '▼' : '▶'}
        </span>
        <span className="auth-separator-toggle__text">{text}</span>
      </button>
      
      {isExpanded && (
        <div className="auth-separator-content">
          {children}
        </div>
      )}
    </div>
  );
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
