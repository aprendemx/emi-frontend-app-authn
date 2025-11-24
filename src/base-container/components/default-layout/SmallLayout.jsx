import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import classNames from 'classnames';

import messages from './messages';

const SmallLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <div className="small-screen-top-stripe" />
      <div className="d-flex py-5 align-items-center justify-content-center">
        <div className={classNames({'small-yellow-line mr-n4.5 mt-n5.5': getConfig().SITE_NAME === 'edX'})}/>
      </div>
    </>
  );
};

export default SmallLayout;
