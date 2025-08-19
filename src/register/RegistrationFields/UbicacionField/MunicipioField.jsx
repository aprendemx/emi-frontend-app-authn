import React from 'react';
import { useDispatch } from 'react-redux';

import { useIntl } from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';

import { FormGroup } from '../../../common-components';
import { clearRegistrationBackendError } from '../../data/actions';

/**
 * Municipio field wrapper. It accepts following handlers
 * - handleChange for setting value change and
 * - handleErrorChange for setting error
 */
const MunicipioField = (props) => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();

  const { handleErrorChange } = props;

  const validateMunicipio = (value) => {
    if (!value || !value.trim()) {
      return 'Ingresa tu municipio o delegación';
    }
    if (value.trim().length < 2) {
      return 'El municipio debe tener al menos 2 caracteres';
    }
    return '';
  };

  const handleOnBlur = (e) => {
    const { value } = e.target;
    const fieldError = validateMunicipio(value);
    if (fieldError) {
      handleErrorChange('municipio', fieldError);
    }
  };

  const handleOnFocus = () => {
    handleErrorChange('municipio', '');
    dispatch(clearRegistrationBackendError('municipio'));
  };

  return (
    <FormGroup
      {...props}
      handleBlur={handleOnBlur}
      handleFocus={handleOnFocus}
    />
  );
};

MunicipioField.defaultProps = {
  errorMessage: '',
};

MunicipioField.propTypes = {
  errorMessage: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
};

export default MunicipioField;
