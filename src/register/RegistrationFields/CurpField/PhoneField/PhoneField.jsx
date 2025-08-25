import React from 'react';
import PropTypes from 'prop-types';
import { Form } from '@openedx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';
import messages from '../../messages';

const PhoneField = ({ name, value, handleChange, handleErrorChange, errorMessage, floatingLabel, helpText }) => {
  const { formatMessage } = useIntl();

  const onBlur = (e) => {
    const digits = (e.target.value || '').replace(/\D/g, '');
    handleErrorChange(name, /^\d{10}$/.test(digits) ? '' : formatMessage(messages['registration.telefono.invalid']));
  };

  const onFocus = () => {
    if (errorMessage) handleErrorChange(name, '');
  };

  const onChange = (e) => {
    // keep only digits, limit to 10
    const digits = (e.target.value || '').replace(/[^\d]/g, '').slice(0, 10);
    e.target.value = digits;
    handleChange(e);
  };

  return (
    <Form.Group controlId={name} isInvalid={!!errorMessage}>
      <Form.Control
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        floatingLabel={floatingLabel}
        placeholder={floatingLabel}
        inputMode="numeric"
      />
      {helpText && <Form.Text>{helpText}</Form.Text>}
      {errorMessage && <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>}
    </Form.Group>
  );
};

PhoneField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  floatingLabel: PropTypes.string,
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

PhoneField.defaultProps = {
  value: '',
  errorMessage: '',
  floatingLabel: '',
  helpText: null,
};

export default PhoneField;
