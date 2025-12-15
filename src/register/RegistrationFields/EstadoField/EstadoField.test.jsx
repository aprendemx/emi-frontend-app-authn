import React from 'react';
import { Provider } from 'react-redux';

import { mergeConfig } from '@edx/frontend-platform';
import { injectIntl, IntlProvider } from '@edx/frontend-platform/i18n';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import { COUNTRY_CODE_KEY, COUNTRY_DISPLAY_KEY } from './validator';
import { EstadoField } from '../index';

const IntlEstadoField = injectIntl(EstadoField);
const mockStore = configureStore();

jest.mock('react-router-dom', () => {
  const mockNavigation = jest.fn();

  // eslint-disable-next-line react/prop-types
  const Navigate = ({ to }) => {
    mockNavigation(to);
    return <div />;
  };

  return {
    ...jest.requireActual('react-router-dom'),
    Navigate,
    mockNavigate: mockNavigation,
  };
});

describe('EstadoField', () => {
  let props = {};
  let store = {};

  const reduxWrapper = children => (
      <IntlProvider locale="es">
        <Provider store={store}>{children}</Provider>
      </IntlProvider>
  );

  const routerWrapper = children => (
      <Router>
        {children}
      </Router>
  );

  const initialState = {
    register: {},
  };

  beforeEach(() => {
    store = mockStore(initialState);
    props = {
      estadoList: [{
        [COUNTRY_CODE_KEY]: '9',
        [COUNTRY_DISPLAY_KEY]: 'Ciudad de México',
      }],
      selectedEstado: {
        estadoCode: '',
        displayValue: '',
      },
      errorMessage: '',
      onChangeHandler: jest.fn(),
      handleErrorChange: jest.fn(),
      onFocusHandler: jest.fn(),
    };
    window.location = { search: '' };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Test Estado Field', () => {
    mergeConfig({
      SHOW_CONFIGURABLE_EDX_FIELDS: true,
    });

    const emptyFieldValidation = {
      estado: 'Select your estado or region of residence',
    };

    it('should run estado field validation when onBlur is fired', () => {
      const { container } = render(routerWrapper(reduxWrapper(<IntlEstadoField {...props} />)));
      const estadoInput = container.querySelector('input[name="estado"]');

      fireEvent.blur(estadoInput, {
        target: { value: '', name: 'estado' },
      });

      expect(props.handleErrorChange).toHaveBeenCalledTimes(1);
      expect(props.handleErrorChange).toHaveBeenCalledWith(
          'estado',
          emptyFieldValidation.estado,
      );
    });

    it('should run estado field validation when estado name is invalid', () => {
      const { container } = render(routerWrapper(reduxWrapper(<IntlEstadoField {...props} />)));
      const estadoInput = container.querySelector('input[name="estado"]');

      fireEvent.blur(estadoInput, {
        target: { value: 'Pak', name: 'estado' },
      });

      expect(props.handleErrorChange).toHaveBeenCalledTimes(1);
      expect(props.handleErrorChange).toHaveBeenCalledWith(
          'estado',
          'Estado must match with an option available in the dropdown.',
      );
    });

    it('should not run estado field validation when onBlur is fired by drop-down arrow icon click', () => {
      const { container } = render(routerWrapper(reduxWrapper(<IntlEstadoField {...props} />)));
      const estadoInput = container.querySelector('input[name="estado"]');
      const dropdownArrowIcon = container.querySelector('.btn-icon.pgn__form-autosuggest__icon-button');

      fireEvent.blur(estadoInput, {
        target: { value: '', name: 'estado' },
        relatedTarget: dropdownArrowIcon,
      });

      expect(props.handleErrorChange).toHaveBeenCalledTimes(0);
    });

    it('should update errors for frontend validations', () => {
      const { container } = render(routerWrapper(reduxWrapper(<IntlEstadoField {...props} />)));
      const estadoInput = container.querySelector('input[name="estado"]');

      fireEvent.blur(estadoInput, { target: { value: '', name: 'estado' } });

      expect(props.handleErrorChange).toHaveBeenCalledTimes(1);
      expect(props.handleErrorChange).toHaveBeenCalledWith('estado', emptyFieldValidation.estado);
    });

    it('should clear error on focus', () => {
      const { container } = render(routerWrapper(reduxWrapper(<IntlEstadoField {...props} />)));
      const estadoInput = container.querySelector('input[name="estado"]');

      fireEvent.focus(estadoInput);

      expect(props.handleErrorChange).toHaveBeenCalledTimes(1);
      expect(props.handleErrorChange).toHaveBeenCalledWith('estado', '');
    });

    it('should update state from estado code present in redux store', () => {
      store = mockStore({
        ...initialState,
        register: {
          ...initialState.register,
          backendEstadoCode: '9',
        },
      });

      const { container } = render(routerWrapper(reduxWrapper(<IntlEstadoField {...props} />)));

      container.querySelector('input[name="estado"]');
      expect(props.onChangeHandler).toHaveBeenCalledTimes(1);
      expect(props.onChangeHandler).toHaveBeenCalledWith(
          { target: { name: 'estado' } },
          { estadoCode: '9', displayValue: 'Ciudad de México' },
      );
    });

    it('should set option on dropdown menu item click', () => {
      const { container } = render(routerWrapper(reduxWrapper(<IntlEstadoField {...props} />)));

      const dropdownButton = container.querySelector('.pgn__form-autosuggest__icon-button');
      fireEvent.click(dropdownButton);

      const dropdownItem = container.querySelector('.dropdown-item');
      fireEvent.click(dropdownItem);

      expect(props.onChangeHandler).toHaveBeenCalledTimes(2);
      expect(props.onChangeHandler).toHaveBeenCalledWith(
          { target: { name: 'estado' } },
          { estadoCode: 'PK', displayValue: 'Pakistan' },
      );
    });

    it('should set value on change', () => {
      const { container } = render(
          routerWrapper(reduxWrapper(<IntlEstadoField {...props} />)),
      );

      const estadoInput = container.querySelector('input[name="estado"]');
      fireEvent.change(estadoInput, { target: { value: 'pak', name: 'estado' } });

      expect(props.onChangeHandler).toHaveBeenCalledTimes(2);
      expect(props.onChangeHandler).toHaveBeenCalledWith(
          { target: { name: 'estado' } },
          { estadoCode: '', displayValue: 'pak' },
      );
    });

    it('should display error on invalid estado input', () => {
      props = {
        ...props,
        errorMessage: 'estado error message',
      };

      const { container } = render(routerWrapper(reduxWrapper(<IntlEstadoField {...props} />)));

      const feedbackElement = container.querySelector('div[feedback-for="estado"]');
      expect(feedbackElement).toBeTruthy();
      expect(feedbackElement.textContent).toEqual('estado error message');
    });
  });
});
