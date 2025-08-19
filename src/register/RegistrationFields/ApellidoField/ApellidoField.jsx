import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup } from '../../../common-components';

/**
 * Apellido field wrapper. It accepts following handlers
 * - handleChange for setting value change and
 * - handleErrorChange for setting error
 */
const ApellidoField = (props) => {
  const {
    name,
    value,
    handleChange,
    handleErrorChange,
    errorMessage,
    floatingLabel,
    helpText,
    maxLength,
  } = props;

  const handleOnFocus = () => {
    handleErrorChange(name, '');
  };

  return (
    <FormGroup
      name={name}
      value={value}
      handleChange={handleChange}
      handleFocus={handleOnFocus}
      errorMessage={errorMessage}
      helpText={helpText}
      floatingLabel={floatingLabel}
      maxLength={maxLength || 150}
    />
  );
};

ApellidoField.defaultProps = {
  errorMessage: '',
  helpText: [],
};

ApellidoField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  floatingLabel: PropTypes.string.isRequired,
  helpText: PropTypes.arrayOf(PropTypes.string),
  maxLength: PropTypes.number,
};

export default ApellidoField;
