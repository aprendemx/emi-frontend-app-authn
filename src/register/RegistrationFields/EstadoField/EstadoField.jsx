import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup } from '../../../common-components';

/**
 * Estado selector field wrapper. It accepts following handlers
 * - handleChange for setting value change and
 * - handleErrorChange for setting error
 */
const EstadoField = (props) => {
  const {
    estadoList,
    selectedEstado,
    errorMessage,
    onChangeHandler,
    handleErrorChange,
    onBlurHandler,
    onFocusHandler,
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
      onChangeHandler(event, null, estadoValue);
    } else {
      onChangeHandler(event);
    }
  };

  const estadoOptions = () => [
    <option key="" value="">Selecciona tu estado</option>,
    ...estadoList.map(estado => (
      <option key={estado.code} value={estado.code}>
        {estado.name}
      </option>
    )),
  ];

  return (
    <FormGroup
      name="estado"
      type="select"
      value={selectedEstado?.estadoCode || ''}
      options={estadoOptions}
      handleChange={handleOnChange}
      handleBlur={onBlurHandler}
      handleFocus={onFocusHandler}
      errorMessage={errorMessage}
      floatingLabel={props.floatingLabel || "Estado"}
      trailingElement={<i className="fa fa-angle-down" />}
    />
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
};

EstadoField.defaultProps = {
  selectedEstado: null,
  errorMessage: '',
};

export default EstadoField;
