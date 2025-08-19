import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup } from '../../../common-components';

/**
 * Phone field wrapper. It accepts following handlers
 * - handleChange for setting value change and
 * - handleErrorChange for setting error
 */
const PhoneField = (props) => {
  const {
    name,
    value,
    handleChange,
    handleErrorChange,
    errorMessage,
    floatingLabel,
    helpText,
    ...otherProps
  } = props;

  const handleOnFocus = () => {
    handleErrorChange(name, '');
  };

  const handleOnChange = (event) => {
    // Solo permitir números y limitar a 10 dígitos
    const phoneValue = event.target.value.replace(/\D/g, '').slice(0, 10);
    const modifiedEvent = {
      ...event,
      target: {
        ...event.target,
        value: phoneValue,
      },
    };
    handleChange(modifiedEvent);
  };

  return (
    <FormGroup
      {...otherProps}
      name={name}
      value={value}
      handleChange={handleOnChange}
      handleFocus={handleOnFocus}
      errorMessage={errorMessage}
      helpText={helpText}
      floatingLabel={floatingLabel}
      maxLength={10}
      type="tel"
      pattern="[0-9]{10}"
    />
  );
};

PhoneField.defaultProps = {
  errorMessage: '',
  helpText: [],
};

PhoneField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  floatingLabel: PropTypes.string.isRequired,
  helpText: PropTypes.arrayOf(PropTypes.string),
};

export default PhoneField;
