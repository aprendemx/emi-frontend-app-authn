import React from 'react';
import PropTypes from 'prop-types';

/**
 * Separador visual entre el bloque de Llave MX y el formulario tradicional
 */
const AuthSeparator = ({ isLoginPage }) => {
  const text = isLoginPage 
    ? '— Otras formas de acceder —' 
    : '— Otras formas de registrarse —';

  return (
    <div className="auth-separator">
      <span className="auth-separator__text">{text}</span>
    </div>
  );
};

AuthSeparator.propTypes = {
  isLoginPage: PropTypes.bool,
};

AuthSeparator.defaultProps = {
  isLoginPage: false,
};

export default AuthSeparator;
