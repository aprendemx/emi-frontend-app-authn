import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { FormattedMessage, useIntl } from '@edx/frontend-platform/i18n';
import {Form, FormText, Hyperlink} from '@openedx/paragon';
import PropTypes from 'prop-types';

import messages from '../../messages';

const Cuentanos = (props) => {
  const { formatMessage } = useIntl();
  const {
    errorMessage, onChangeHandler, value,
  } = props;

  return (
    <div id="cuentanos" className="micro text-muted pt-4">

      <FormattedMessage
          id="register.page.cuentanos"
          defaultMessage="Cuéntenos por qué estás interesado en Cursos @prende.mx"
          description="Cuéntenos por qué estás interesado en  Cursos @prende.mx"

      />
      <Form.Control
          as="textarea"
        className="form-field--text mt-1"
        id="cuentanos"
        name="cuentanos"
        value={value}
        onChange={onChangeHandler}
      >

      </Form.Control>
      {errorMessage && (
        <Form.Control.Feedback type="invalid" className="form-text-size" hasIcon={false}>
          {errorMessage}
        </Form.Control.Feedback>
      )}
    </div>
  );
};

Cuentanos.defaultProps = {
  errorMessage: '',
  value: false,
};

Cuentanos.propTypes = {
  errorMessage: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Cuentanos;
