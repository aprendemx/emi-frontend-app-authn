import { snakeCaseObject } from '@edx/frontend-platform';

import { LETTER_REGEX, NUMBER_REGEX } from '../../data/constants';
import messages from '../messages';
import validateEmail from '../RegistrationFields/EmailField/validator';
import validateName from '../RegistrationFields/NameField/validator';
import validateUsername from '../RegistrationFields/UsernameField/validator';

/**
 * It validates the password field value
 * @param value
 * @param formatMessage
 * @returns {string}
 */
export const validatePasswordField = (value, formatMessage) => {
  let fieldError = '';
  if (!value || !LETTER_REGEX.test(value) || !NUMBER_REGEX.test(value) || value.length < 8) {
    fieldError = formatMessage(messages['password.validation.message']);
  }
  return fieldError;
};

/**
 * It accepts complete registration data as payload and checks if the form is valid.
 * NOTE: This validates core fields and configurable ones coming from fieldDescriptions.
 * Custom fields that are not exposed by fieldDescriptions should add local validation in their Field components.
 * @param payload
 * @param errors
 * @param configurableFormFields
 * @param fieldDescriptions
 * @param formatMessage
 * @returns {{fieldErrors, isValid: boolean, emailSuggestion: { suggestion: string, type: string }}}
 */
export const isFormValid = (
  payload,
  errors,
  configurableFormFields,
  fieldDescriptions,
  formatMessage,
) => {
  const fieldErrors = { ...errors };
  let isValid = true;
  let emailSuggestion = { suggestion: '', type: '' };

  Object.keys(payload).forEach(key => {
    switch (key) {
      case 'name':
        if (!fieldErrors.name) {
          fieldErrors.name = validateName(payload.name, formatMessage);
        }
        if (fieldErrors.name) { isValid = false; }
        break;
      case 'email': {
        if (!fieldErrors.email) {
          const { fieldError, confirmEmailError, suggestion } = validateEmail(
            payload.email,
            configurableFormFields?.confirm_email,
            formatMessage,
          );
          if (fieldError) {
            fieldErrors.email = fieldError;
            isValid = false;
          }
          if (confirmEmailError) {
            fieldErrors.confirm_email = confirmEmailError;
            isValid = false;
          }
          emailSuggestion = suggestion;
        }
        if (fieldErrors.email) { isValid = false; }
        break;
      }
      case 'username':
        if (!fieldErrors.username) {
          fieldErrors.username = validateUsername(payload.username, formatMessage);
        }
        if (fieldErrors.username) { isValid = false; }
        break;
      case 'password':
        if (!fieldErrors.password) {
          fieldErrors.password = validatePasswordField(payload.password, formatMessage);
        }
        if (fieldErrors.password) { isValid = false; }
        break;
      default:
        break;
    }
  });

  // Country validation (if present/required)
  if (configurableFormFields?.country && !configurableFormFields.country?.displayValue) {
    fieldErrors.country = formatMessage(messages['empty.country.field.error']);
    isValid = false;
  } else if (configurableFormFields?.country && !configurableFormFields.country?.countryCode) {
    fieldErrors.country = formatMessage(messages['invalid.country.field.error']);
    isValid = false;
  }

  // Validate configurable required fields returned by backend (fieldDescriptions)
  Object.keys(fieldDescriptions).forEach(key => {
    if (key === 'country' && !configurableFormFields?.country?.displayValue) {
      fieldErrors[key] = formatMessage(messages['empty.country.field.error']);
    } else if (!configurableFormFields[key]) {
      fieldErrors[key] = fieldDescriptions[key].error_message;
    }
    if (fieldErrors[key]) { isValid = false; }
  });

  return { isValid, fieldErrors, emailSuggestion };
};

// ---- PATCH: pack custom fields into payload.meta ---- //
const EXTRA_KEYS = [
  'primer_apellido',
  'segundo_apellido',
  'numero_telefono',
  'estado',
  'municipio',
  'nombre_escuela',
  'cct',
  'grado',
  'curp',
];

/**
 * It prepares a payload for registration data that can be passed to registration API endpoint.
 * - Copies configurableFormFields into payload (country -> countryCode, estado -> estadoCode)
 * - Forces honor_code/terms_of_service
 * - Adds totalRegistrationTime
 * - Moves custom fields into payload.meta
 * - Converts to snake_case
 * - Appends query params
 * @param initPayload
 * @param configurableFormFields
 * @param showMarketingEmailOptInCheckbox
 * @param totalRegistrationTime
 * @param queryParams
 * @returns {*}
 */
export const prepareRegistrationPayload = (
  initPayload,
  configurableFormFields,
  showMarketingEmailOptInCheckbox,
  totalRegistrationTime,
  queryParams,
) => {
  let payload = { ...initPayload };

  // Merge configurable fields
  Object.keys(configurableFormFields).forEach((fieldName) => {
    if (fieldName === 'country') {
      payload[fieldName] = configurableFormFields[fieldName].countryCode;
    } else if (fieldName === 'estado') {
      payload[fieldName] = configurableFormFields[fieldName].estadoCode;
    } else {
      payload[fieldName] = configurableFormFields[fieldName];
    }
  });

  // Marketing opt-in guarded by flag
  if (!showMarketingEmailOptInCheckbox) {
    delete payload.marketingEmailsOptIn;
  }

  // Mandatory booleans in the API
  payload.terms_of_service = true;
  payload.honor_code = true;

  // Total registration time (snakeCaseObject will convert it to total_registration_time)
  payload.totalRegistrationTime = totalRegistrationTime;

  // Move extras to meta
  const meta = {};
  EXTRA_KEYS.forEach((k) => {
    const v = payload[k];
    if (v !== undefined && v !== '') {
      meta[k] = v;
      delete payload[k];
    }
  });

  // Preserve rich 'estado' details if available
  if (configurableFormFields?.estado?.estadoCode) {
    meta.estadoCode = configurableFormFields.estado.estadoCode;
  }
  if (configurableFormFields?.estado?.estadoName) {
    meta.estadoName = configurableFormFields.estado.estadoName;
  }

  if (Object.keys(meta).length) {
    payload.meta = { ...(payload.meta || {}), ...meta };
  }

  // Convert to snake_case
  payload = snakeCaseObject(payload);

  // Add query params
  payload = { ...payload, ...queryParams };
  return payload;
};
