import React from 'react';
import { useDispatch } from 'react-redux';

import { useIntl } from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';

import { FormGroup } from '../../../common-components';
import { clearRegistrationBackendError } from '../../data/actions';

/**
 * Nombre de escuela field wrapper. It accepts following handlers
 * - handleChange for setting value change and
 * - handleErrorChange for setting error
 */
const NombreEscuelaField = (props) => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();

  const { handleErrorChange } = props;

  const validateNombreEscuela = (value) => {
    if (!value || !value.trim()) {
      return 'Ingresa el nombre de tu escuela';
    }
    if (value.trim().length < 3) {
      return 'El nombre de la escuela debe tener al menos 3 caracteres';
    }
    return '';
  };

  const handleOnBlur = (e) => {
    const { value } = e.target;
    const fieldError = validateNombreEscuela(value);
    if (fieldError) {
      handleErrorChange('nombre_escuela', fieldError);
    }
  };

  const handleOnFocus = () => {
    handleErrorChange('nombre_escuela', '');
    dispatch(clearRegistrationBackendError('nombre_escuela'));
  };

  return (
    <FormGroup
      {...props}
      handleBlur={handleOnBlur}
      handleFocus={handleOnFocus}
    />
  );
};

NombreEscuelaField.defaultProps = {
  errorMessage: '',
};

NombreEscuelaField.propTypes = {
  errorMessage: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
};

export default NombreEscuelaField;
