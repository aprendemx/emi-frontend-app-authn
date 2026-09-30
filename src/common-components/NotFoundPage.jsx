import React from 'react';

import { FormattedMessage } from '@edx/frontend-platform/i18n';

const NotFoundPage = () => (
  <div className="container-fluid d-flex py-5 justify-content-center align-items-start text-center">
    <p className="my-0 py-5 text-muted mw-32em">
      <FormattedMessage
        id="error.notfound.message"
        defaultMessage="La página que buscas no está disponible o hay un error en la URL. Revisa la URL e inténtalo de nuevo."
        description="error message when a page does not exist"
      />
    </p>
  </div>
);

export default NotFoundPage;
