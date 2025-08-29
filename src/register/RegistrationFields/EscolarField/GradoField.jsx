import React from 'react';
import { useDispatch } from 'react-redux';

import { useIntl } from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';

import { FormGroup } from '../../../common-components';
import messages from '../../messages';
import { clearRegistrationBackendError } from '../../data/actions';

/**
 * Grado field wrapper. It accepts following handlers
 * - handleChange for setting value change and
 * - handleErrorChange for setting error
 */
const GradoField = (props) => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();

  const { handleErrorChange } = props;

  const validateGrado = (value) => {
    if (!value || !value.trim()) {
      return 'Selecciona tu grado';
    }
    return '';
  };

  const handleOnBlur = (e) => {
    const { value } = e.target;
    const fieldError = validateGrado(value);
    if (fieldError) {
      handleErrorChange('grado', fieldError);
    }
  };

  const handleOnFocus = () => {
    handleErrorChange('grado', '');
    dispatch(clearRegistrationBackendError('grado'));
  };

  return (
    <FormGroup
      {...props}
      as="select"
      handleBlur={handleOnBlur}
      handleFocus={handleOnFocus}
    >
      <option value="">Selecciona tu grado</option>
      <option value="1_primaria">1° Primaria</option>
      <option value="2_primaria">2° Primaria</option>
      <option value="3_primaria">3° Primaria</option>
      <option value="4_primaria">4° Primaria</option>
      <option value="5_primaria">5° Primaria</option>
      <option value="6_primaria">6° Primaria</option>
      <option value="1_secundaria">1° Secundaria</option>
      <option value="2_secundaria">2° Secundaria</option>
      <option value="3_secundaria">3° Secundaria</option>
      <option value="1_preparatoria">1° Preparatoria</option>
      <option value="2_preparatoria">2° Preparatoria</option>
      <option value="3_preparatoria">3° Preparatoria</option>
    </FormGroup>
  );
};

GradoField.defaultProps = {
  errorMessage: '',
};

GradoField.propTypes = {
  errorMessage: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
};

export default GradoField;
