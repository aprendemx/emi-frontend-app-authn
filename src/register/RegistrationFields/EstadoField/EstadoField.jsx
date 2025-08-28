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

  // Función defensiva para manejar cambios
  const handleOnChange = React.useCallback((event) => {
    try {
      const selectedValue = event?.target?.value || '';
      
      if (!Array.isArray(estadoList)) {
        console.warn('EstadoField: estadoList is not an array:', estadoList);
        return;
      }
      
      const selectedEstadoData = estadoList.find(estado => estado?.code === selectedValue);
      
      if (selectedEstadoData) {
        const estadoValue = {
          displayValue: selectedEstadoData.name || '',
          estadoCode: selectedEstadoData.code || '',
          estadoName: selectedEstadoData.name || '',
        };
        handleErrorChange('state', '');
        onChangeHandler(event, null, estadoValue);
      } else {
        onChangeHandler(event, null, {
          displayValue: '',
          estadoCode: '',
          estadoName: ''
        });
      }
    } catch (error) {
      console.error('EstadoField handleOnChange error:', error);
    }
  }, [estadoList, handleErrorChange, onChangeHandler]);

  const handleOnBlur = React.useCallback(() => {
    try {
      if (!selectedEstado?.estadoCode) {
        const message = formatMessage(messages['registration.estado.required']) || 'Selecciona un estado';
        handleErrorChange('state', message);
      } else {
        handleErrorChange('state', '');
      }
    } catch (error) {
      console.error('EstadoField handleOnBlur error:', error);
    }
  }, [selectedEstado, handleErrorChange, formatMessage]);

  const handleOnFocus = React.useCallback(() => {
    try {
      handleErrorChange('state', '');
      if (dispatch && clearRegistrationBackendError) {
        dispatch(clearRegistrationBackendError('state'));
      }
    } catch (error) {
      console.error('EstadoField handleOnFocus error:', error);
    }
  }, [handleErrorChange, dispatch]);

  // Renderizar las opciones de manera segura
  const renderOptions = () => {
    if (!Array.isArray(estadoList)) {
      return null;
    }

    return estadoList.map((estado, index) => {
      if (!estado || typeof estado.code !== 'string' || typeof estado.name !== 'string') {
        console.warn(`EstadoField: Invalid estado at index ${index}:`, estado);
        return null;
      }
      
      return (
        <option key={estado.code} value={estado.code}>
          {estado.name}
        </option>
      );
    }).filter(Boolean);
  };

  // Asegurar que siempre retornamos JSX válido
  try {
    return (
      <Form.Group controlId="state" isInvalid={!!errorMessage} className="mb-4">
        <Form.Label>{floatingLabel}</Form.Label>
        <Form.Select
          name="state"
          value={selectedEstado?.estadoCode || ''}
          onChange={handleOnChange}
          onBlur={onBlurHandler || handleOnBlur}
          onFocus={onFocusHandler || handleOnFocus}
          isInvalid={!!errorMessage}
        >
          <option value="">Selecciona tu estado</option>
          {renderOptions()}
        </Form.Select>
        {errorMessage && (
          <Form.Control.Feedback type="invalid">
            {errorMessage}
          </Form.Control.Feedback>
        )}
      </Form.Group>
    );
  } catch (error) {
    console.error('EstadoField render error:', error);
    // Retorno fallback en caso de error
    return (
      <div className="mb-4">
        <label>Estado</label>
        <select name="state" defaultValue="">
          <option value="">Selecciona tu estado</option>
        </select>
        <div style={{color: 'red', fontSize: '0.8rem'}}>
          Error cargando selector de estados
        </div>
      </div>
    );
  }
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
