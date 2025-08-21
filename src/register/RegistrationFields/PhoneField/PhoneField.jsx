import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup } from '../../../common-components';

/**
 * Phone field wrapper. It accepts following handlers
 * - handleChange for setting value change and
 * - handleErrorChange for setting error
 */
const PhoneField = (props) => {
  const { handleErrorChange, name } = props;

  const handleOnFocus = () => {
    handleErrorChange(name, '');
  };

  const handleOnBlur = () => {
    // Limpiar cualquier error previo
    handleErrorChange(name, '');
  };

  return (
    <FormGroup
      {...props}
      type="tel"
      handleBlur={handleOnBlur}
      handleFocus={handleOnFocus}
    />
  );
};

PhoneField.defaultProps = {
  errorMessage: '',
};

PhoneField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default PhoneField;
