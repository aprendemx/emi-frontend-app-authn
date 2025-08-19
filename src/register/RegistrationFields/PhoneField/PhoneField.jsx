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

  const handleOnBlur = (event) => {
    const { value } = event.target;
    // Limpiar el valor: solo números, máximo 10 dígitos
    const cleanValue = value.replace(/\D/g, '').slice(0, 10);
    
    // Validar longitud
    if (cleanValue.length > 0 && cleanValue.length < 10) {
      handleErrorChange(name, 'El número de teléfono debe tener exactamente 10 dígitos');
    } else if (cleanValue.length === 0) {
      handleErrorChange(name, 'El número de teléfono es requerido');
    }
    
    // Si el valor cambió, actualizar el campo
    if (cleanValue !== value) {
      const syntheticEvent = {
        target: {
          name: name,
          value: cleanValue,
        },
      };
      props.handleChange(syntheticEvent);
    }
  };

  return (
    <FormGroup
      {...props}
      type="tel"
      handleBlur={handleOnBlur}
      handleFocus={handleOnFocus}
      maxLength={10}
      pattern="[0-9]{10}"
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
