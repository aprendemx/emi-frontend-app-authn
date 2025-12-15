import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useIntl } from '@edx/frontend-platform/i18n';
import { FormAutosuggest, FormAutosuggestOption, FormControlFeedback } from '@openedx/paragon';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import validateCatalogoField, { COUNTRY_CODE_KEY, COUNTRY_DISPLAY_KEY } from './validator';
import { clearRegistrationBackendError } from '../../data/actions';
import messages from '../../messages';

/**
 * Country field wrapper. It accepts following handlers
 * - handleChange for setting value change and
 * - handleErrorChange for setting error
 *
 * It is responsible for
 * - Auto populating catalogo field if backendCountryCode is available in redux
 * - Performing catalogo field validations
 * - clearing error on focus
 * - setting value on change and selection
 */
const CatalogoField = (props) => {
  const {
    catalogoList,
    selectedCatalogo,
    onChangeHandler,
    handleErrorChange,
    onFocusHandler,
      target
  } = props;
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();

  const catalogoFieldValue = {
    userProvidedText: selectedCatalogo.displayValue,
    selectionValue: selectedCatalogo.displayValue,
    selectionId: selectedCatalogo.catalogoCode,
  };

  const backendCatalogoCode = useSelector(state => state.register.backendCatalogoCode);

  useEffect(() => {
    if (backendCatalogoCode && backendCatalogoCode !== selectedCatalogo?.catalogoCode) {
      let catalogoCode = '';
      let catalogoDisplayValue = '';

      const catalogoVal = catalogoList.find(
        (catalogo) => (catalogo[COUNTRY_CODE_KEY].toLowerCase() === backendCatalogoCode.toLowerCase()),
      );
      if (catalogoVal) {
        catalogoCode = catalogoVal[COUNTRY_CODE_KEY];
        catalogoDisplayValue = catalogoVal[COUNTRY_DISPLAY_KEY];
      }
      onChangeHandler(
        { target: { name: target } },
        { catalogoCode, displayValue: catalogoDisplayValue },
      );
    } else if (!selectedCatalogo.displayValue) {
      onChangeHandler(
        { target: { name: target } },
        { catalogoCode: '', displayValue: '' },
      );
    }
  }, [backendCatalogoCode, catalogoList]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleOnBlur = (event) => {
    // Do not run validations when drop-down arrow is clicked
    if (event.relatedTarget && event.relatedTarget.className.includes('pgn__form-autosuggest__icon-button')) {
      return;
    }

    const { value } = event.target;

    const { error } = validateCatalogoField(
      value.trim(), catalogoList, formatMessage(messages['empty.'+target+'.field.error']), formatMessage(messages['invalid.'+target+'.field.error']),
    );
    handleErrorChange(target, error);
  };

  const handleOnFocus = (event) => {
    handleErrorChange(target, '');
    dispatch(clearRegistrationBackendError(target));
    onFocusHandler(event);
  };

  const handleOnChange = (value) => {
    onChangeHandler({ target: { name: target } }, { catalogoCode: value.selectionId, displayValue: value.userProvidedText });

    // We have put this check because proviously we also had onSelected event handler and we call
    // the onBlur on that event handler but now there is no such handler and we only have
    // onChange so we check the is there is proper sectionId which only be
    // proper one when we select it from dropdown's item otherwise its null.
    if (value.selectionId !== '') {
      handleOnBlur({ target: { name: target, value: value.userProvidedText } });
    }
  };

  const getCatalogoList = () => catalogoList.map((catalogo) => (
    <FormAutosuggestOption key={catalogo[COUNTRY_DISPLAY_KEY]} id={catalogo[COUNTRY_CODE_KEY]}>
      {catalogo[COUNTRY_DISPLAY_KEY]}
    </FormAutosuggestOption>
  ));

  return (
    <div className="mb-4">
      <FormAutosuggest
        floatingLabel={formatMessage(messages['registration.'+target+'.label'])}
        aria-label="form autosuggest"
        name="catalogo"
        value={catalogoFieldValue || {}}
        className={classNames({ 'form-field-error': props.errorMessage })}
        onFocus={(e) => handleOnFocus(e)}
        onBlur={(e) => handleOnBlur(e)}
        onChange={(value) => handleOnChange(value)}
      >
        {getCatalogoList()}
      </FormAutosuggest>
      {props.errorMessage !== '' && (
        <FormControlFeedback
          key="error"
          className="form-text-size"
          hasIcon={false}
          feedback-for="catalogo"
          type="invalid"
        >
          {props.errorMessage}
        </FormControlFeedback>
      )}
    </div>
  );
};

CatalogoField.propTypes = {
  catalogoList: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  errorMessage: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
  onFocusHandler: PropTypes.func.isRequired,
  selectedCatalogo: PropTypes.shape({
    displayValue: PropTypes.string,
    catalogoCode: PropTypes.string,
  }),
  target: PropTypes.string.isRequired,
};

CatalogoField.defaultProps = {
  errorMessage: null,
  selectedCatalogo: {
    value: '',
  },
};

export default CatalogoField;
