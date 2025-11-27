import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import messages from './messages';

const MediumLayout = ({ children }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="fondo-llaveMX">
      <div className="container-llaveMX">
        <div className="left-section">
          <div className="boxLogin">
            <h1>
              {getConfig().SITE_NAME}
            </h1>
            <img src="https://aprende.gob.mx/images/cursos-amx.png" alt="AprendeMX-Logo" />
          </div>
        </div>
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

MediumLayout.propTypes = {
  children: PropTypes.node,
};

MediumLayout.defaultProps = {
  children: null,
};

export default MediumLayout;
