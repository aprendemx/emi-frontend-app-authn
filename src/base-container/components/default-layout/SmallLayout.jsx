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
        <div className="left-section">
          <div className="boxLogin">
            <h1>
              {getConfig().SITE_NAME}
            </h1>
            <img src="https://aprende.gob.mx/images/cursos-amx.png" alt="AprendeMX-Logo" />
          </div>
        </div>
        <div className="right-section">
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
