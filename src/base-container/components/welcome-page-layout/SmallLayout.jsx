import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import PropTypes from 'prop-types';

import messages from './messages';

const SmallLayout = ({ fullName }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="fondo-llaveMX">
      <div className="container-llaveMX">
        <div className="left-section">
          <div className="boxLogin">
            <h1>
              Bienvenido a Cursos @prende.mx, {fullName}
            </h1>
            <img src="https://cursos.aprende.gob.mx/static/indigo/images/Logo_marquesina_1.ff17638b6c25.png" alt="AprendeMX-Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

SmallLayout.propTypes = {
  fullName: PropTypes.string.isRequired,
};

export default SmallLayout;
