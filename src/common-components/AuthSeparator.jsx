import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Separador colapsable entre el bloque de Llave MX y el formulario tradicional
 */
const AuthSeparator = ({ isLoginPage, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const text = isLoginPage 
    ? 'Otras formas de acceder' 
    : 'Otras formas de registrarse';

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

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
};

AuthSeparator.defaultProps = {
  isLoginPage: false,
  children: null,
};

export default AuthSeparator;
