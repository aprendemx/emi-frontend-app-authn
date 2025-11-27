import React from 'react';
import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import SocialAuthProviders from './SocialAuthProviders';

/**
 * Bloque principal de autenticación Llave MX
 * Se muestra arriba del formulario tradicional
 */
const LlaveMXBlock = ({ providers, isLoginPage }) => {
  const { formatMessage } = useIntl();
  
  // Filtrar solo el proveedor de Llave MX
  const llaveMXProvider = providers.filter(provider => provider.id === 'llavemx');
  
  // Si no hay proveedor Llave MX, no renderizar nada
  if (!llaveMXProvider.length) {
    return null;
  }

  return (
    <div className="llavemx-block">
      <div className="llavemx-block__content">
        <SocialAuthProviders
          socialAuthProviders={llaveMXProvider}
          referrer={isLoginPage ? 'login' : 'register'}
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
