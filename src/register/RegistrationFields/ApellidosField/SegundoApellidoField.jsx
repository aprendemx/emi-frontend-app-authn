import React from 'react';
import { useDispatch } from 'react-redux';

import { useIntl } from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';

import { FormGroup } from '../../../common-components';
import { clearRegistrationBackendError } from '../../data/actions';
import messages from '../../messages';

/**
 * Segundo apellido field wrapper. It accepts following handlers
 * - handleChange for setting value change and
 * - handleErrorChange for setting error
 */
const SegundoApellidoField = (props) => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();

  const { handleErrorChange } = props;

  const validateSegundoApellido = (value) => {
    if (!value || !value.trim()) {
      return 'Ingresa tu segundo apellido';
    }
    if (value.trim().length < 2) {
      return 'El segundo apellido debe tener al menos 2 caracteres';
    }
    if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/.test(value)) {
      return 'El segundo apellido solo puede contener letras';
    }
    return '';
  };

  const handleOnBlur = (e) => {
    const { value } = e.target;
    const fieldError = validateSegundoApellido(value);
    if (fieldError) {
      handleErrorChange('segundo_apellido', fieldError);
    }
  };

  const handleOnFocus = () => {
    handleErrorChange('segundo_apellido', '');
    dispatch(clearRegistrationBackendError('segundo_apellido'));
  };

  return (
    <FormGroup
      {...props}
      handleBlur={handleOnBlur}
      handleFocus={handleOnFocus}
    />
  );
};

SegundoApellidoField.defaultProps = {
  errorMessage: '',
};

SegundoApellidoField.propTypes = {
  errorMessage: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
};

export default SegundoApellidoField;
