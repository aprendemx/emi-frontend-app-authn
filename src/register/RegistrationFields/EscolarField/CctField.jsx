import React from 'react';
import { useDispatch } from 'react-redux';

import { useIntl } from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';

import { FormGroup } from '../../../common-components';
import messages from '../../messages';
import { clearRegistrationBackendError } from '../../data/actions';

/**
 * CCT (Clave del Centro de Trabajo) field wrapper. It accepts following handlers
 * - handleChange for setting value change and
 * - handleErrorChange for setting error
 */
const CctField = (props) => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();

  const { handleErrorChange } = props;

  const validateCct = (value) => {
    if (!value || !value.trim()) {
      return 'Ingresa la CCT de tu escuela';
    }
    // CCT tiene formato específico: 2 dígitos + 3 letras + 4 dígitos + 1 letra
    const cctRegex = /^[0-9]{2}[A-Z]{3}[0-9]{4}[A-Z]$/;
    if (!cctRegex.test(value.toUpperCase())) {
      return 'Ingresa una CCT válida (ejemplo: 09DPR1234A)';
    }
    return '';
  };

  const handleOnBlur = (e) => {
    const { value } = e.target;
    const fieldError = validateCct(value);
    if (fieldError) {
      handleErrorChange('cct', fieldError);
    }
  };

  const handleOnFocus = () => {
    handleErrorChange('cct', '');
    dispatch(clearRegistrationBackendError('cct'));
  };

  const handleOnChange = (event) => {
    // Convertir a mayúsculas automáticamente
    const value = event.target.value.toUpperCase();
    props.handleChange({ target: { name: 'cct', value } });
  };

  return (
    <FormGroup
      {...props}
      handleChange={handleOnChange}
      handleBlur={handleOnBlur}
      handleFocus={handleOnFocus}
      maxLength={10}
    />
  );
};

CctField.defaultProps = {
  errorMessage: '',
};

CctField.propTypes = {
  errorMessage: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
};

export default CctField;
