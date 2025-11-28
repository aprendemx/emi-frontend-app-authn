import React from 'react';
import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import SocialAuthProviders from './SocialAuthProviders';
import { LOGIN_PAGE, REGISTER_PAGE } from '../data/constants';

/**
 * Bloque principal de autenticación Llave MX
 * Se muestra arriba del formulario tradicional
 */
const LlaveMXBlock = ({ providers, isLoginPage, currentProvider }) => {
  const { formatMessage } = useIntl();
  
  console.log('LlaveMXBlock - currentProvider:', currentProvider);
  console.log('LlaveMXBlock - providers:', providers);
  
  // Si el usuario viene de Llave MX, no mostrar este bloque
  if (currentProvider === 'oa2-llavemx') {
    console.log('LlaveMXBlock - Ocultando bloque porque currentProvider es oa2-llavemx');
    return null;
  }
  
  // Filtrar solo el proveedor de Llave MX
  const llaveMXProvider = providers.filter(provider => provider.id === 'oa2-llavemx');
  
  // Si no hay proveedor Llave MX, no renderizar nada
  if (!llaveMXProvider.length) {
    return null;
  }

  return (
    <div className="llavemx-block">
      <div className="llavemx-block__content">
        <SocialAuthProviders
          socialAuthProviders={llaveMXProvider}
          referrer={isLoginPage ? LOGIN_PAGE : REGISTER_PAGE}
        />
        <p className="llavemx-block__description">
          {isLoginPage 
            ? 'Accede de forma rápida y segura con tu identidad digital oficial.'
            : 'Usa tu identidad Llave MX para crear tu cuenta automáticamente.'}
        </p>
      </div>
      
      {/* Logo y términos de Llave MX */}
      <div className="llavemx-footer">
        <img src="https://aprende.gob.mx/images/llaveMX.png" alt="Llave MX" className="llavemx-footer__logo" />
        <p className="llavemx-footer__terms">
          Al {isLoginPage ? 'iniciar sesión' : 'registrarme'} declaro que he leído los{' '}
          <a href="https://www.archivos.atdt.gob.mx/storage/app/media/Transparencia/TyC/TerminosLlaveMX.pdf" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a>
          {' '}y nuestro{' '}
          <a href="https://www.archivos.atdt.gob.mx/storage/app/media/Transparencia/PORTAL%20ATDT/AVISOS%20DE%20PRIVACIDAD/ATDT_Aviso%20de%20Privacidad%20Integral%20Llave%20MX.pdf" target="_blank" rel="noopener noreferrer">Aviso de Privacidad</a>.
        </p>
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
