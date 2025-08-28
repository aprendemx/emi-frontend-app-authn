import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Form } from '@openedx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';

import { clearRegistrationBackendError } from '../../data/actions';
import messages from '../../messages';

/**
 * Estado selector field wrapper. It accepts following handlers
 * - onChangeHandler for setting value change and
 * - handleErrorChange for setting error
 */
const EstadoField = (props) => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  
  const {
    estadoList,
    selectedEstado,
    errorMessage,
    onChangeHandler,
    handleErrorChange,
    onBlurHandler,
    onFocusHandler,
    floatingLabel,
    ...otherProps
  } = props;

  const handleOnChange = (event) => {
    const selectedValue = event.target.value;
    const selectedEstadoData = estadoList.find(estado => estado.code === selectedValue);
    
    if (selectedEstadoData) {
      const estadoValue = {
        displayValue: selectedEstadoData.name,
        estadoCode: selectedEstadoData.code,
        estadoName: selectedEstadoData.name,
      };
      // Limpiar error al seleccionar
      handleErrorChange('state', '');
      onChangeHandler(event, null, estadoValue);
    } else {
      // Si no se selecciona nada, limpiar el estado
      onChangeHandler(event, null, {
        displayValue: '',
        estadoCode: '',
        estadoName: ''
      });
    }
  };

  const handleOnBlur = () => {
    if (!selectedEstado?.estadoCode) {
      handleErrorChange('state', formatMessage(messages['registration.estado.required']));
    } else {
      handleErrorChange('state', '');
    }
  };

  const handleOnFocus = () => {
    handleErrorChange('state', '');
    dispatch(clearRegistrationBackendError('state'));
  };

  return (
    <Form.Group controlId="state" isInvalid={!!errorMessage} className="mb-4">
      <Form.Label>{floatingLabel || 'Estado'}</Form.Label>
      <Form.Select
        name="state"
        value={selectedEstado?.estadoCode || ''}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        isInvalid={!!errorMessage}
      >
        <option value="">Selecciona tu estado</option>
        {estadoList.map(estado => (
          <option key={estado.code} value={estado.code}>
            {estado.name}
          </option>
        ))}
      </Form.Select>
      {errorMessage && (
        <Form.Control.Feedback type="invalid">
          {errorMessage}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

EstadoField.propTypes = {
  estadoList: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  selectedEstado: PropTypes.shape({
    displayValue: PropTypes.string,
    estadoCode: PropTypes.string,
    estadoName: PropTypes.string,
  }),
  errorMessage: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
  onBlurHandler: PropTypes.func.isRequired,
  onFocusHandler: PropTypes.func.isRequired,
  floatingLabel: PropTypes.string,
};

EstadoField.defaultProps = {
  selectedEstado: null,
  errorMessage: '',
  floatingLabel: 'Estado',
};

export default EstadoField;
