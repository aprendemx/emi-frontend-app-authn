import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { FormattedMessage, useIntl } from '@edx/frontend-platform/i18n';
import { Form, Hyperlink } from '@openedx/paragon';
import PropTypes from 'prop-types';

import messages from '../../messages';

const EresDocente = (props) => {
  const { formatMessage } = useIntl();
  const {
    errorMessage, onChangeHandler, value,
  } = props;

  return (
    <div id="eres-docente" className="micro text-muted">
      <Form.Checkbox
        className="form-field--checkbox mt-1"
        id="eres_docente"
        checked={value}
        name="eres_docente"
        value={value}
        onChange={onChangeHandler}
      >
        <FormattedMessage
          id="register.page.eres_docente"
          defaultMessage="¿Eres docente?"
          description="Si tienes alguna relación con la educación, selecciona esta casilla."

        />
      </Form.Checkbox>
      {errorMessage && (
        <Form.Control.Feedback type="invalid" className="form-text-size" hasIcon={false}>
          {errorMessage}
        </Form.Control.Feedback>
      )}
    </div>
  );
};

EresDocente.defaultProps = {
  errorMessage: '',
  value: false,
};

EresDocente.propTypes = {
  errorMessage: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.bool,
};

export default EresDocente;
