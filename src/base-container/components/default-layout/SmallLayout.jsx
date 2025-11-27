import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import messages from './messages';

const SmallLayout = ({ children }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="fondo-llaveMX">
      <div className="container-llaveMX">
        <div className="right-section">
          <img src="https://aprende.gob.mx/images/llaveMX.png" alt="Llave MX" className="llavemx-logo" />
          <p className="terminos">
            Al iniciar sesión declaro que he leído los{' '}
            <a href="https://www.archivos.atdt.gob.mx/storage/app/media/Transparencia/TyC/TerminosLlaveMX.pdf" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a>
            {' '}y nuestro{' '}
            <a href="https://www.archivos.atdt.gob.mx/storage/app/media/Transparencia/PORTAL%20ATDT/AVISOS%20DE%20PRIVACIDAD/ATDT_Aviso%20de%20Privacidad%20Integral%20Llave%20MX.pdf" target="_blank" rel="noopener noreferrer">Aviso de Privacidad</a>.
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

SmallLayout.propTypes = {
  children: PropTypes.node,
};

SmallLayout.defaultProps = {
  children: null,
};

export default SmallLayout;
