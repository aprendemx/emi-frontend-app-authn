import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import messages from './messages';

const MediumLayout = () => {
  const { formatMessage } = useIntl();
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

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
          <img src="https://aprende.gob.mx/images/llavemx-logo.svg" alt="LlaveMX-Logo" />
          <p className="terminos">
            Al iniciar sesión declaro que he leído los{' '}
            <a href="#" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a>
            {' '}y nuestro{' '}
            <a href="#" target="_blank" rel="noopener noreferrer">Aviso de Privacidad</a>
          </p>
          <div className="acciones">
            <div className="col-6">
              <a href="/login" className="login-button">
                Iniciar sesión
              </a>
            </div>
            <div className="col-6">
              <a href="/register" className="create-button">
                Crear cuenta
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediumLayout;
