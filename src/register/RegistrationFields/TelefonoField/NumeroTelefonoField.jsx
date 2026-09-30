import React from 'react';
import { useDispatch } from 'react-redux';

import { useIntl } from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';

import { FormGroup } from '../../../common-components';
import { clearRegistrationBackendError } from '../../data/actions';

/**
 * Número de teléfono field wrapper. It accepts following handlers
 * - handleChange for setting value change and
 * - handleErrorChange for setting error
 */
const NumeroTelefonoField = (props) => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();

  const { handleErrorChange } = props;

  const validateNumeroTelefono = (value) => {
    if (!value || !value.trim()) {
      return 'Ingresa tu número de teléfono';
    }
    // Permite números de teléfono mexicanos (10 dígitos)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(value.replace(/\s/g, ''))) {
      return 'Ingresa un número de teléfono válido de 10 dígitos';
    }
    return '';
  };

  const handleOnBlur = (e) => {
    const { value } = e.target;
    const fieldError = validateNumeroTelefono(value);
    if (fieldError) {
      handleErrorChange('numero_telefono', fieldError);
    }
  };

  const handleOnFocus = () => {
    handleErrorChange('numero_telefono', '');
    dispatch(clearRegistrationBackendError('numero_telefono'));
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

NumeroTelefonoField.defaultProps = {
  errorMessage: '',
};

NumeroTelefonoField.propTypes = {
  errorMessage: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
};

export default NumeroTelefonoField;
