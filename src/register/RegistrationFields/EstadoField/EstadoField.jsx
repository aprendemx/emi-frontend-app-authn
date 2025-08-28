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
    estadoList = [],
    selectedEstado = null,
    errorMessage = '',
    onChangeHandler = () => {},
    handleErrorChange = () => {},
    onBlurHandler = () => {},
    onFocusHandler = () => {},
    floatingLabel = 'Estado',
    ...otherProps
  } = props || {};

  // Debug temporal
  console.log('EstadoField render - props:', {
    estadoListLength: estadoList?.length,
    selectedEstado,
    errorMessage
  });

  // Función simple para manejar cambios
  const handleOnChange = (event) => {
    console.log('EstadoField onChange triggered:', event.target.value);
    const selectedValue = event.target.value;
    
    if (!Array.isArray(estadoList)) {
      console.error('EstadoField: estadoList is not an array:', estadoList);
      return;
    }
    
    const selectedEstadoData = estadoList.find(estado => estado.code === selectedValue);
    console.log('Selected estado data:', selectedEstadoData);
    
    if (selectedEstadoData) {
      const estadoValue = {
        displayValue: selectedEstadoData.name,
        estadoCode: selectedEstadoData.code,
        estadoName: selectedEstadoData.name,
      };
      console.log('Calling onChangeHandler with:', estadoValue);
      handleErrorChange('state', '');
      onChangeHandler(event, null, estadoValue);
    } else {
      // Si no se selecciona nada, limpiar
      onChangeHandler(event, null, {
        displayValue: '',
        estadoCode: '',
        estadoName: ''
      });
    }
  };

  const handleOnBlur = () => {
    if (!selectedEstado?.estadoCode) {
      const message = formatMessage(messages['registration.estado.required']) || 'Selecciona un estado';
      handleErrorChange('state', message);
    } else {
      handleErrorChange('state', '');
    }
  };

  const handleOnFocus = () => {
    handleErrorChange('state', '');
    if (dispatch) {
      dispatch(clearRegistrationBackendError('state'));
    }
  };

  // Asegurar que siempre retornamos JSX válido
  return (
    <Form.Group controlId="state" isInvalid={!!errorMessage} className="mb-4">
      <Form.Label>{floatingLabel}</Form.Label>
      <Form.Select
        name="state"
        value={selectedEstado?.estadoCode || ''}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        isInvalid={!!errorMessage}
      >
        <option value="">Selecciona tu estado</option>
        {estadoList && estadoList.map((estado) => (
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
  })),
  selectedEstado: PropTypes.shape({
    displayValue: PropTypes.string,
    estadoCode: PropTypes.string,
    estadoName: PropTypes.string,
  }),
  errorMessage: PropTypes.string,
  onChangeHandler: PropTypes.func,
  handleErrorChange: PropTypes.func,
  onBlurHandler: PropTypes.func,
  onFocusHandler: PropTypes.func,
  floatingLabel: PropTypes.string,
};

EstadoField.defaultProps = {
  estadoList: [],
  selectedEstado: null,
  errorMessage: '',
  floatingLabel: 'Estado',
  onChangeHandler: () => {},
  handleErrorChange: () => {},
  onBlurHandler: () => {},
  onFocusHandler: () => {},
};

export default EstadoField;
