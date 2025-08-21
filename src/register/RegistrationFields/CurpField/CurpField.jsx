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

  const handleOnBlur = () => {
    // Limpiar cualquier error previo
    handleErrorChange('curp', '');
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
