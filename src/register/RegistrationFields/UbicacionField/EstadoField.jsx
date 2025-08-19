import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useIntl } from '@edx/frontend-platform/i18n';
import { FormAutosuggest, FormAutosuggestOption, FormControlFeedback } from '@openedx/paragon';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { clearRegistrationBackendError } from '../../data/actions';

// Estados de México
const ESTADOS_MEXICO = [
  { code: 'AGU', name: 'Aguascalientes' },
  { code: 'BCN', name: 'Baja California' },
  { code: 'BCS', name: 'Baja California Sur' },
  { code: 'CAM', name: 'Campeche' },
  { code: 'CHP', name: 'Chiapas' },
  { code: 'CHH', name: 'Chihuahua' },
  { code: 'CMX', name: 'Ciudad de México' },
  { code: 'COA', name: 'Coahuila' },
  { code: 'COL', name: 'Colima' },
  { code: 'DUR', name: 'Durango' },
  { code: 'GUA', name: 'Guanajuato' },
  { code: 'GRO', name: 'Guerrero' },
  { code: 'HID', name: 'Hidalgo' },
  { code: 'JAL', name: 'Jalisco' },
  { code: 'MEX', name: 'Estado de México' },
  { code: 'MIC', name: 'Michoacán' },
  { code: 'MOR', name: 'Morelos' },
  { code: 'NAY', name: 'Nayarit' },
  { code: 'NLE', name: 'Nuevo León' },
  { code: 'OAX', name: 'Oaxaca' },
  { code: 'PUE', name: 'Puebla' },
  { code: 'QUE', name: 'Querétaro' },
  { code: 'ROO', name: 'Quintana Roo' },
  { code: 'SLP', name: 'San Luis Potosí' },
  { code: 'SIN', name: 'Sinaloa' },
  { code: 'SON', name: 'Sonora' },
  { code: 'TAB', name: 'Tabasco' },
  { code: 'TAM', name: 'Tamaulipas' },
  { code: 'TLA', name: 'Tlaxcala' },
  { code: 'VER', name: 'Veracruz' },
  { code: 'YUC', name: 'Yucatán' },
  { code: 'ZAC', name: 'Zacatecas' },
];

/**
 * Estado field wrapper. It accepts following handlers
 * - onChangeHandler for setting value change and
 * - handleErrorChange for setting error
 */
const EstadoField = (props) => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  
  const {
    selectedEstado,
    onChangeHandler,
    handleErrorChange,
    onFocusHandler,
  } = props;

  const estadoFieldValue = {
    userProvidedText: selectedEstado?.displayValue || '',
    selectionValue: selectedEstado?.displayValue || '',
    selectionId: selectedEstado?.estadoCode || '',
  };

  const validateEstado = (value) => {
    if (!value || !value.trim()) {
      return 'Selecciona tu estado';
    }
    const estadoExists = ESTADOS_MEXICO.find(estado => 
      estado.name.toLowerCase() === value.trim().toLowerCase()
    );
    if (!estadoExists) {
      return 'Selecciona un estado válido de la lista';
    }
    return '';
  };

  const handleOnBlur = (event) => {
    // No validar cuando se hace clic en el ícono del dropdown
    if (event.relatedTarget && event.relatedTarget.className.includes('pgn__form-autosuggest__icon-button')) {
      return;
    }

    const { value } = event.target;
    const error = validateEstado(value.trim());
    handleErrorChange('estado', error);
  };

  const handleOnFocus = (event) => {
    handleErrorChange('estado', '');
    dispatch(clearRegistrationBackendError('estado'));
    onFocusHandler(event);
  };

  const handleOnChange = (value) => {
    const selectedState = ESTADOS_MEXICO.find(estado => estado.code === value.selectionId);
    onChangeHandler(
      { target: { name: 'estado' } }, 
      { 
        estadoCode: value.selectionId, 
        displayValue: value.userProvidedText,
        estadoName: selectedState?.name || value.userProvidedText
      }
    );
  };

  const getEstadosList = () => ESTADOS_MEXICO.map((estado) => (
    <FormAutosuggestOption key={estado.code} id={estado.code}>
      {estado.name}
    </FormAutosuggestOption>
  ));

  return (
    <div className="mb-4">
      <FormAutosuggest
        floatingLabel="Estado"
        aria-label="form autosuggest estado"
        name="estado"
        value={estadoFieldValue || {}}
        className={classNames({ 'form-field-error': props.errorMessage })}
        onFocus={(e) => handleOnFocus(e)}
        onBlur={(e) => handleOnBlur(e)}
        onChange={(value) => handleOnChange(value)}
      >
        {getEstadosList()}
      </FormAutosuggest>
      {props.errorMessage !== '' && (
        <FormControlFeedback
          key="error"
          className="form-text-size"
          hasIcon={false}
          feedback-for="estado"
          type="invalid"
        >
          {props.errorMessage}
        </FormControlFeedback>
      )}
    </div>
  );
};

EstadoField.propTypes = {
  errorMessage: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
  onFocusHandler: PropTypes.func.isRequired,
  selectedEstado: PropTypes.shape({
    displayValue: PropTypes.string,
    estadoCode: PropTypes.string,
    estadoName: PropTypes.string,
  }),
};

EstadoField.defaultProps = {
  errorMessage: '',
  selectedEstado: {
    displayValue: '',
    estadoCode: '',
    estadoName: '',
  },
};

export default EstadoField;
