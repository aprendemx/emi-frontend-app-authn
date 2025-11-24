import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import PropTypes from 'prop-types';

import messages from './messages';

const LargeLayout = ({ children }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="fondo-llaveMX">
      <div className="container-llaveMX">
        <div className="left-section">
          <div className="boxLogin">
            <h1>
              Nombre del Sistema
              <br />
              (ACRÓNIMO)
            </h1>
            <img src="https://aprende.gob.mx/images/cursos-amx.png" alt="AprendeMX-Logo" />
          </div>
        </div>
        <div className="right-section">
          <img src="https://aprende.gob.mx/images/llaveMX.png" alt="LlaveMX-Logo" />
          <p className="terminos">
            Al iniciar sesión declaro que he leído los{' '}
            <a href="#" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a>
            {' '}y nuestro{' '}
            <a href="#" target="_blank" rel="noopener noreferrer">Aviso de Privacidad</a>
          </p>
          <div className="form-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

LargeLayout.propTypes = {
  children: PropTypes.node,
};

LargeLayout.defaultProps = {
  children: null,
};

export default LargeLayout;
