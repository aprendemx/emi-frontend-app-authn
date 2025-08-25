import React from 'react';
import PropTypes from 'prop-types';
import { Form } from '@openedx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';
import messages from '../../messages';

/**
 * EstadoField (select) expects props:
 * - estadoList: [{ code, name }]
 * - selectedEstado: { displayValue, estadoCode, estadoName }
 * - onChangeHandler: (event, countryValue, estadoValue) => {}
 * - handleErrorChange: (name, error) => {}
 */
const EstadoField = ({
  name,
  estadoList,
  selectedEstado,
  onChangeHandler,
  handleErrorChange,
  errorMessage,
  floatingLabel,
}) => {
  const { formatMessage } = useIntl();

  const onChange = (e) => {
    const code = e.target.value;
    const item = estadoList.find((x) => x.code === code);
    const estadoValue = item
      ? { displayValue: item.name, estadoCode: item.code, estadoName: item.name }
      : { displayValue: '', estadoCode: '', estadoName: '' };
    onChangeHandler({ target: { name, value: estadoValue.displayValue } }, null, estadoValue);
  };

  const onBlur = () => {
    if (!selectedEstado?.estadoCode) {
      handleErrorChange(name, formatMessage(messages['registration.estado.required']));
    } else {
      handleErrorChange(name, '');
    }
  };

  return (
    <Form.Group controlId={name} isInvalid={!!errorMessage}>
      <Form.Select name={name} value={selectedEstado?.estadoCode || ''} onChange={onChange} onBlur={onBlur}>
        <option value="">{floatingLabel}</option>
        {estadoList.map((e) => (
          <option key={e.code} value={e.code}>
            {e.name}
          </option>
        ))}
      </Form.Select>
      {errorMessage && <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>}
    </Form.Group>
  );
};

EstadoField.propTypes = {
  name: PropTypes.string.isRequired,
  estadoList: PropTypes.arrayOf(PropTypes.shape({ code: PropTypes.string, name: PropTypes.string })).isRequired,
  selectedEstado: PropTypes.shape({
    displayValue: PropTypes.string,
    estadoCode: PropTypes.string,
    estadoName: PropTypes.string,
  }),
  onChangeHandler: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  floatingLabel: PropTypes.string,
};

EstadoField.defaultProps = {
  selectedEstado: { displayValue: '', estadoCode: '', estadoName: '' },
  errorMessage: '',
  floatingLabel: 'Estado',
};

export default EstadoField;
