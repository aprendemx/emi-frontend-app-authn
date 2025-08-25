import React from 'react';
import PropTypes from 'prop-types';
import { Form } from '@openedx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';
import messages from '../../messages';

const CctField = ({ name, value, handleChange, handleErrorChange, errorMessage, floatingLabel, helpText }) => {
  const { formatMessage } = useIntl();

  const onBlur = (e) => {
    const v = (e.target.value || '').toUpperCase().trim();
    handleErrorChange(name, /^[A-Z0-9]{10}$/.test(v) ? '' : formatMessage(messages['registration.cct.invalid']));
  };

  const onFocus = () => {
    if (errorMessage) handleErrorChange(name, '');
  };

  const onChange = (e) => {
    e.target.value = (e.target.value || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10);
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
      />
      {helpText && <Form.Text>{helpText}</Form.Text>}
      {errorMessage && <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>}
    </Form.Group>
  );
};

CctField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  floatingLabel: PropTypes.string,
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

CctField.defaultProps = {
  value: '',
  errorMessage: '',
  floatingLabel: 'CCT',
  helpText: null,
};

export default CctField;
