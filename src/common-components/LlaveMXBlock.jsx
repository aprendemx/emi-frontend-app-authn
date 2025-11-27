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
const LlaveMXBlock = ({ providers, isLoginPage }) => {
  const { formatMessage } = useIntl();
  
  console.log('LlaveMXBlock - providers:', providers);
  console.log('LlaveMXBlock - isLoginPage:', isLoginPage);
  
  // Filtrar solo el proveedor de Llave MX
  const llaveMXProvider = providers.filter(provider => provider.id === 'llavemx');
  
  console.log('LlaveMXBlock - llaveMXProvider:', llaveMXProvider);
  
  // Si no hay proveedor Llave MX, no renderizar nada
  if (!llaveMXProvider.length) {
    console.log('LlaveMXBlock - No hay proveedores Llave MX, retornando null');
    return null;
  }

  console.log('LlaveMXBlock - Renderizando bloque de Llave MX');

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
};

LlaveMXBlock.defaultProps = {
  isLoginPage: false,
};

export default LlaveMXBlock;
