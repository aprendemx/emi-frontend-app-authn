import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Separador colapsable entre el bloque de Llave MX y el formulario tradicional
 */
const AuthSeparator = ({ isLoginPage, children, currentProvider }) => {
  // Si viene de Llave MX, expandir por defecto
  const [isExpanded, setIsExpanded] = useState(currentProvider === 'oa2-llavemx');
  
  const text = isLoginPage 
    ? 'Otras formas de acceder' 
    : 'Otras formas de registrarse';

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  
  // Si viene de Llave MX, no mostrar el botón, solo el contenido
  if (currentProvider === 'oa2-llavemx') {
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
};

AuthSeparator.defaultProps = {
  isLoginPage: false,
  children: null,
  currentProvider: null,
};

export default AuthSeparator;
