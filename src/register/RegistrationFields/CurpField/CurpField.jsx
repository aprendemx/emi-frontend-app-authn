import React from 'react';
import { useDispatch } from 'react-redux';

import { useIntl } from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';

import { FormGroup } from '../../../common-components';
import { clearRegistrationBackendError } from '../../data/actions';

/**
 * CURP field wrapper. It accepts following handlers
 * - handleChange for setting value change and
 * - handleErrorChange for setting error
 */
const CurpField = (props) => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();

  const { handleErrorChange } = props;

  const validateCurp = (value) => {
    if (!value || !value.trim()) {
      return 'Ingresa tu CURP';
    }
    // CURP debe tener 18 caracteres
    if (value.length !== 18) {
      return 'La CURP debe tener exactamente 18 caracteres';
    }
    // Validación básica del formato CURP
    const curpRegex = /^[A-Z][AEIOUX][A-Z]{2}[0-9]{2}[0-1][0-9][0-3][0-9][HM][A-Z]{2}[BCDFGHJKLMNPQRSTVWXYZ][0-9A-Z][0-9]$/;
    if (!curpRegex.test(value.toUpperCase())) {
      return 'Ingresa una CURP válida';
    }
    return '';
  };

  const handleOnBlur = (e) => {
    const { value } = e.target;
    const fieldError = validateCurp(value);
    if (fieldError) {
      handleErrorChange('curp', fieldError);
    }
  };

  const handleOnFocus = () => {
    handleErrorChange('curp', '');
    dispatch(clearRegistrationBackendError('curp'));
  };

  const handleOnChange = (event) => {
    // Convertir a mayúsculas automáticamente
    const value = event.target.value.toUpperCase();
    props.handleChange({ target: { name: 'curp', value } });
  };

  return (
    <FormGroup
      {...props}
      handleChange={handleOnChange}
      handleBlur={handleOnBlur}
      handleFocus={handleOnFocus}
      maxLength={18}
    />
  );
};

CurpField.defaultProps = {
  errorMessage: '',
};

CurpField.propTypes = {
  errorMessage: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
};

export default CurpField;
