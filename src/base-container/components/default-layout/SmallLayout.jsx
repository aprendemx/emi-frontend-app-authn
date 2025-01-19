import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import messages from './messages';

const SmallLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <span className="bg-primary-400 w-100">
      <div className="col-md-12 small-screen-top-stripe" />
      <div>

        <div className="d-flex align-items-center m-3.5">
           <img src="https://sisadmin.mexicox.gob.mx/extramexicox/mexicox-amx.png" alt="AprendeMX-Logo" width="100%"/><br/>
          <div className={classNames({'small-yellow-line mr-n2.5': getConfig().SITE_NAME === 'edX'})}/>
        </div>
      </div>
    </span>
  );
};

export default SmallLayout;
