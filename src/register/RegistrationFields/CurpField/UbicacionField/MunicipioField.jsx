import React from 'react';
import PropTypes from 'prop-types';
import { Form } from '@openedx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';
import messages from '../../messages';

const MunicipioField = ({ name, value, handleChange, handleErrorChange, errorMessage, floatingLabel, helpText }) => {
  const { formatMessage } = useIntl();

  const onBlur = (e) => {
    const v = (e.target.value || '').trim();
    const re = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s'.-]{2,}$/;
    handleErrorChange(name, v && re.test(v) ? '' : formatMessage(messages['registration.municipio.invalid']));
  };

  const onFocus = () => {
    if (errorMessage) handleErrorChange(name, '');
  };

  return (
    <Form.Group controlId={name} isInvalid={!!errorMessage}>
      <Form.Control
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        floatingLabel={floatingLabel}
        placeholder={floatingLabel}
      />
      {helpText && <Form.Text>{helpText}</Form.Text>}
      {errorMessage && <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>}
    </Form.Group>
  );
};

MunicipioField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  floatingLabel: PropTypes.string,
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

MunicipioField.defaultProps = {
  value: '',
  errorMessage: '',
  floatingLabel: 'Municipio',
  helpText: null,
};

export default MunicipioField;
