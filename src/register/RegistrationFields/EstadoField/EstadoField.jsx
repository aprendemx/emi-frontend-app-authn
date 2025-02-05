import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useIntl } from '@edx/frontend-platform/i18n';
import { FormAutosuggest, FormAutosuggestOption, FormControlFeedback } from '@openedx/paragon';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import validateEstadoField, { COUNTRY_CODE_KEY, COUNTRY_DISPLAY_KEY } from './validator';
import { clearRegistrationBackendError } from '../../data/actions';
import messages from '../../messages';

/**
 * Country field wrapper. It accepts following handlers
 * - handleChange for setting value change and
 * - handleErrorChange for setting error
 *
 * It is responsible for
 * - Auto populating country field if backendCountryCode is available in redux
 * - Performing country field validations
 * - clearing error on focus
 * - setting value on change and selection
 */
const EstadoField = (props) => {
  const {
    estadoList,
    selectedEstado,
    onChangeHandler,
    handleErrorChange,
    onFocusHandler,
      target
  } = props;
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();

  const estadoFieldValue = {
    userProvidedText: selectedEstado.displayValue,
    selectionValue: selectedEstado.displayValue,
    selectionId: selectedEstado.estadoCode,
  };

  const backendEstadoCode = useSelector(state => state.register.backendEstadoCode);

  useEffect(() => {
    if (backendEstadoCode && backendEstadoCode !== selectedEstado?.estadoCode) {
      let estadoCode = '';
      let estadoDisplayValue = '';

      const estadoVal = estadoList.find(
          (estado) => (estado[COUNTRY_CODE_KEY].toLowerCase() === backendEstadoCode.toLowerCase()),
      );
      if (estadoVal) {
        estadoCode = estadoVal[COUNTRY_CODE_KEY];
        estadoDisplayValue = estadoVal[COUNTRY_DISPLAY_KEY];
      }
      onChangeHandler(
          { target: { name: target } },
          { estadoCode, displayValue: estadoDisplayValue },
      );
    } else if (!selectedEstado.displayValue) {
      onChangeHandler(
          { target: { name: target } },
          { estadoCode: '', displayValue: '' },
      );
    }
  }, [backendEstadoCode, estadoList]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleOnBlur = (event) => {
    // Do not run validations when drop-down arrow is clicked
    if (event.relatedTarget && event.relatedTarget.className.includes('pgn__form-autosuggest__icon-button')) {
      return;
    }

    const { value } = event.target;

    const { error } = validateEstadoField(
        value.trim(), estadoList, formatMessage(messages['empty.'+target+'.field.error']), formatMessage(messages['invalid.'+target+'.field.error']),
    );
    handleErrorChange(target, error);
  };

  const handleOnFocus = (event) => {
    handleErrorChange(target, '');
    dispatch(clearRegistrationBackendError(target));
    onFocusHandler(event);
  };

  const handleOnChange = (value) => {
    onChangeHandler({ target: { name: target } }, { estadoCode: value.selectionId, displayValue: value.userProvidedText });

    // We have put this check because proviously we also had onSelected event handler and we call
    // the onBlur on that event handler but now there is no such handler and we only have
    // onChange so we check the is there is proper sectionId which only be
    // proper one when we select it from dropdown's item otherwise its null.
    if (value.selectionId !== '') {
      handleOnBlur({ target: { name: target, value: value.userProvidedText } });
    }
  };

  const getEstadoList = () => estadoList.map((estado) => (
      <FormAutosuggestOption key={estado[COUNTRY_DISPLAY_KEY]} id={estado[COUNTRY_CODE_KEY]}>
        {estado[COUNTRY_DISPLAY_KEY]}
      </FormAutosuggestOption>
  ));

  return (
      <div className="mb-4">
        <FormAutosuggest
            floatingLabel={messages['empty.'+props.target+'.field.error'].defaultMessage}
            aria-label="form autosuggest"
            name={target}
            value={estadoFieldValue || {}}
            className={classNames({ 'form-field-error': props.errorMessage })}
            onFocus={(e) => handleOnFocus(e)}
            onBlur={(e) => handleOnBlur(e)}
            onChange={(value) => handleOnChange(value)}
        >
          {getEstadoList()}
        </FormAutosuggest>
        {props.errorMessage !== '' && (
            <FormControlFeedback
                key="error"
                className="form-text-size"
                hasIcon={false}
                feedback-for={props.target}
                type="invalid"
            >
              {props.errorMessage}
            </FormControlFeedback>
        )}
      </div>
  );
};

EstadoField.propTypes = {
  estadoList: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string,
        name: PropTypes.string,
      }),
  ).isRequired,
  errorMessage: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
  onFocusHandler: PropTypes.func.isRequired,
  selectedEstado: PropTypes.shape({
    displayValue: PropTypes.string,
    estadoCode: PropTypes.string,
  }),
  target:PropTypes.string
};

EstadoField.defaultProps = {
  errorMessage: null,
  selectedEstado: {
    value: '',
  },
};

export default EstadoField;
