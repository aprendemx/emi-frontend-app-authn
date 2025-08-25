import React from 'react';
import PropTypes from 'prop-types';
import { Form } from '@openedx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';
import messages from '../../messages';

const CurpField = ({ name, value, handleChange, handleErrorChange, errorMessage, floatingLabel, helpText }) => {
  const { formatMessage } = useIntl();

  const onBlur = (e) => {
    const v = (e.target.value || '').toUpperCase().trim();
    const re = /^[A-Z]{4}\d{6}[HM][A-Z]{5}\d{2}$/;
    handleErrorChange(name, re.test(v) ? '' : formatMessage(messages['registration.curp.invalid']));
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
        maxLength={18}
      />
      {helpText && <Form.Text>{helpText}</Form.Text>}
      {errorMessage && <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>}
    </Form.Group>
  );
};

CurpField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  floatingLabel: PropTypes.string,
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

CurpField.defaultProps = {
  value: '',
  errorMessage: '',
  floatingLabel: 'CURP',
  helpText: null,
};

export default CurpField;
