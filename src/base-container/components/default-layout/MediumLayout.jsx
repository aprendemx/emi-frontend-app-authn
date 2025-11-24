import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import messages from './messages';

const MediumLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <div className="medium-screen-top-stripe" />
      <div className="w-100 medium-layout">
        <div className="col-md-10 p-0 mb-4 medium-layout-col position-relative">
          <svg className="ml-n1 w-100 h-100 medium-screen-svg-primary" preserveAspectRatio="xMinYMin meet">
            <g transform="skewX(168.2)">
              <rect x="0" y="0" height="100%" width="101.5%" />
            </g>
          </svg>
          <div className="d-flex align-items-center justify-content-center py-5">
            <div className={classNames({'medium-yellow-line mr-n4.5 mt-n5.5': getConfig().SITE_NAME === 'edX'})}/>
          </div>
          <Image className="logo" alt={getConfig().SITE_NAME} src={getConfig().LOGO_WHITE_URL} />
        </div>
      </div>
    </>
  );
};

export default MediumLayout;
