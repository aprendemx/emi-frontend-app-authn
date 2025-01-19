import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import messages from './messages';

const LargeLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="w-50 d-flex">
      <div className="col-md-9 bg-primary-400">
        <div className="min-vh-100  align-items-center">

          <div className={classNames({'large-yellow-line mr-n4.5': getConfig().SITE_NAME === 'edX'})}/>
          <img src="https://sisadmin.mexicox.gob.mx/extramexicox/mexicox-amx.png" alt="AprendeMX-Logo" width="350px"/>
          <div></div>
        </div>
      </div>
      <div className="col-md-3 bg-white p-0">
        <svg className="ml-n1 w-100 h-100 large-screen-svg-primary" preserveAspectRatio="xMaxYMin meet">
          <g transform="skewX(171.6)">
            <rect x="0" y="0" height="100%" width="100%" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default LargeLayout;
