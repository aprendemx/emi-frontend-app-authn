import React from 'react';
import { useDispatch } from 'react-redux';

import { useIntl } from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';

import { FormGroup } from '../../../common-components';
import { clearRegistrationBackendError } from '../../data/actions';
import messages from '../../messages';

/**
 * Primer apellido field wrapper. It accepts following handlers
 * - handleChange for setting value change and
 * - handleErrorChange for setting error
 */
const PrimerApellidoField = (props) => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();

  const { handleErrorChange } = props;

  const validatePrimerApellido = (value) => {
    if (!value || !value.trim()) {
      return 'Ingresa tu primer apellido';
    }
    if (value.trim().length < 2) {
      return 'El primer apellido debe tener al menos 2 caracteres';
    }
    if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/.test(value)) {
      return 'El primer apellido solo puede contener letras';
    }
    return '';
  };

  const handleOnBlur = (e) => {
    const { value } = e.target;
    const fieldError = validatePrimerApellido(value);
    if (fieldError) {
      handleErrorChange('primer_apellido', fieldError);
    }
  };

  const handleOnFocus = () => {
    handleErrorChange('primer_apellido', '');
    dispatch(clearRegistrationBackendError('primer_apellido'));
  };

  return (
    <FormGroup
      {...props}
      handleBlur={handleOnBlur}
      handleFocus={handleOnFocus}
    />
  );
};

PrimerApellidoField.defaultProps = {
  errorMessage: '',
};

PrimerApellidoField.propTypes = {
  errorMessage: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
};

export default PrimerApellidoField;
