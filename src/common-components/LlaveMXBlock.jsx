import React from 'react';
import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Link } from 'react-router-dom';
import { LOGIN_PAGE, REGISTER_PAGE } from '../data/constants';

/**
 * Bloque principal de autenticación Llave MX
 * Estructura: Logo -> Términos -> Botones (Iniciar Sesión | Crear Cuenta)
 */
const LlaveMXBlock = ({ providers, isLoginPage, currentProvider }) => {
  const { formatMessage } = useIntl();

  // Si el usuario viene de Llave MX, no mostrar este bloque
  if (currentProvider === 'oa2-llavemx') {
    return null;
  }

  // Filtrar el proveedor de Llave MX para obtener URLs
  const llaveMXProvider = providers.find(provider => provider.id === 'oa2-llavemx');

  // Si no hay proveedor Llave MX, no renderizar nada
  if (!llaveMXProvider) {
    return null;
  }

  // URLs de Auth (Redirección al backend)
  const loginAuthUrl = getConfig().LMS_BASE_URL + llaveMXProvider.loginUrl;
  const registerAuthUrl = getConfig().LMS_BASE_URL + llaveMXProvider.registerUrl;

  return (
    <div className="llavemx-block">

      {/* 1. Logo Centrado Arriba */}
      <div className="llavemx-footer">
        <img src="https://aprende.gob.mx/images/llaveMX.png" alt="Llave MX" className="llavemx-footer__logo" />

        {/* 2. Términos y Privacidad (En medio) */}
        <p className="llavemx-footer__terms">
          Al iniciar sesión declaro que he leído los{' '}
          <a href="https://www.archivos.atdt.gob.mx/storage/app/media/Transparencia/TyC/TerminosLlaveMX.pdf" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a>
          {' '}y nuestro{' '}
          <a href="https://www.archivos.atdt.gob.mx/storage/app/media/Transparencia/PORTAL%20ATDT/AVISOS%20DE%20PRIVACIDAD/ATDT_Aviso%20de%20Privacidad%20Integral%20Llave%20MX.pdf" target="_blank" rel="noopener noreferrer">Aviso de Privacidad</a>.
        </p>
      </div>

      <div className="llavemx-block__content">
        {/* 3. Botones Duales Lado a Lado */}
        <div className="llavemx-buttons-container">

          {/* Botón IZQUIERDO: Iniciar Sesión (Estilo VINO Sólido) */}
          {isLoginPage ? (
            // Si estmos en Login, es un BOTÓN funcional de Auth
            <button
              type="button"
              className="btn-llavemx"
              onClick={() => window.location.href = loginAuthUrl}
            >
              Iniciar sesión
            </button>
          ) : (
            // Si estamos en Registro, es un Link para ir a Login
            <Link to={LOGIN_PAGE} className="btn-llavemx">
              Iniciar sesión
            </Link>
          )}

          {/* Botón DERECHO: Crear Cuenta (Estilo BORDEADO) */}
          {isLoginPage ? (
            // Si estamos en Login, es un Link para ir a Registro
            <Link to={REGISTER_PAGE} className="btn-llavemx-secondary">
              Crear cuenta
            </Link>
          ) : (
            // Si estamos en Registro, es un BOTÓN funcional de Auth (Registro)
            // NOTA: Usamos registerAuthUrl
            <button
              type="button"
              className="btn-llavemx-secondary"
              onClick={() => window.location.href = registerAuthUrl}
            >
              Crear cuenta
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

LlaveMXBlock.propTypes = {
  providers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      iconClass: PropTypes.string,
      iconImage: PropTypes.string,
      loginUrl: PropTypes.string,
      registerUrl: PropTypes.string,
    }),
  ).isRequired,
  isLoginPage: PropTypes.bool,
  currentProvider: PropTypes.string,
};

LlaveMXBlock.defaultProps = {
  isLoginPage: false,
  currentProvider: null,
};

export default LlaveMXBlock;
