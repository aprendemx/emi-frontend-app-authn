import { snakeCaseObject } from '@edx/frontend-platform';

import {
  LETTER_REGEX,
  NUMBER_REGEX,
} from '../../data/constants';
import validateEmail from '../RegistrationFields/EmailField/validator';
import validateName from '../RegistrationFields/NameField/validator';
import validateUsername from '../RegistrationFields/UsernameField/validator';

/**
 * Validación de contraseña
 */
export const validatePasswordField = (value, formatMessage) => {
  let fieldError = '';
  if (!value || !LETTER_REGEX.test(value) || !NUMBER_REGEX.test(value) || value.length < 8) {
    fieldError = 'La contraseña debe tener al menos 8 caracteres, incluyendo letras y números';
  }
  return fieldError;
};

/**
 * Valida los campos conocidos y los que vienen en fieldDescriptions (backend).
 * Para tus campos extra, la validación se hace en los componentes Field.
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

  Object.keys(payload).forEach((key) => {
    switch (key) {
      case 'name':
        if (!fieldErrors.name) {
          fieldErrors.name = validateName(payload.name, formatMessage);
        }
        if (fieldErrors.name) isValid = false;
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
        if (fieldErrors.email) isValid = false;
        break;
      }
      case 'username':
        if (!fieldErrors.username) {
          fieldErrors.username = validateUsername(payload.username, formatMessage);
        }
        if (fieldErrors.username) isValid = false;
        break;
      case 'password':
        if (!fieldErrors.password) {
          fieldErrors.password = validatePasswordField(payload.password, formatMessage);
        }
        if (fieldErrors.password) isValid = false;
        break;
      default:
        break;
    }
  });

  // Validación de country si está
  if (configurableFormFields?.country && !configurableFormFields.country?.displayValue) {
    fieldErrors.country = 'Selecciona un país';
    isValid = false;
  } else if (configurableFormFields?.country && !configurableFormFields.country?.countryCode) {
    fieldErrors.country = 'Selecciona un país válido';
    isValid = false;
  }

  // Validación de campos requeridos desde backend
  Object.keys(fieldDescriptions).forEach((key) => {
    if (key === 'country' && !configurableFormFields?.country?.displayValue) {
      fieldErrors[key] = 'Selecciona un país';
    } else if (!configurableFormFields[key]) {
      fieldErrors[key] = fieldDescriptions[key].error_message;
    }
    if (fieldErrors[key]) isValid = false;
  });

  // Validación de términos y condiciones (ambos requeridos)
  if (!payload.honorCode) {
    fieldErrors.honorCode = 'Debes aceptar el código de honor para continuar';
    isValid = false;
  }

  if (!payload.privacyPolicy) {
    fieldErrors.privacyPolicy = 'Debes aceptar el aviso de privacidad para continuar';
    isValid = false;
  }

  return { isValid, fieldErrors, emailSuggestion };
};

/**
 * Prepara el payload que se envía al LMS.
 * - Incluye extras en la RAÍZ (no usa meta).
 * - Convierte claves a snake_case.
 * - Añade honor_code, terms_of_service y total_registration_time.
 */
export const prepareRegistrationPayload = (
  initPayload,
  configurableFormFields,
  showMarketingEmailOptInCheckbox,
  totalRegistrationTime,
  queryParams,
) => {
  let payload = { ...initPayload };

  // Mapear name a first_name y last_name para auth_user
  if (payload.name) {
    const nameParts = payload.name.trim().split(' ');
    payload.first_name = nameParts[0] || '';
    payload.last_name = nameParts.slice(1).join(' ') || '';
    // MANTENER name porque el endpoint base lo requiere
    // No eliminar payload.name
  }

  // Campos que van directamente a auth_userprofile (predefinidos por edX)
  // phone_number: reconocido por la API, va directo a auth_userprofile
  // state: reconocido por REGISTRATION_EXTRA_FIELDS, va a auth_userprofile  
  // country: reconocido por REGISTRATION_EXTRA_FIELDS, va a auth_userprofile

  // Para phone_number: enviar vacío siempre
  payload.phone_number = '';

  // Para state: enviar solo el código de 2 letras
  if (configurableFormFields?.state?.estadoCode) {
    payload.state = configurableFormFields.state.estadoCode; // ej. "NL", "CDMX"
  }

  // Country si existe
  if (configurableFormFields?.country?.countryCode) {
    payload.country = configurableFormFields.country.countryCode;
  }

  // Campos mexicanos adicionales van en meta como JSON
  // Solo los no reconocidos por edX van a meta
  const metaFields = {};
  if (payload.first_lastname) {
    metaFields.first_lastname = payload.first_lastname;
    delete payload.first_lastname;
  }
  if (payload.second_lastname) {
    metaFields.second_lastname = payload.second_lastname;
    delete payload.second_lastname;
  }
  if (payload.municipality) {
    metaFields.municipality = payload.municipality;
    delete payload.municipality;
  }
  
  // Campos escolares: si es estudiante los envía, si no los envía vacíos
  if (payload.isStudent) {
    if (payload.school_name) {
      metaFields.school_name = payload.school_name;
    }
    if (payload.cct) {
      metaFields.cct = payload.cct;
    }
    if (payload.grade) {
      metaFields.grade = payload.grade;
    }
  } else {
    // No es estudiante: campos vacíos
    metaFields.school_name = '';
    metaFields.cct = '';
    metaFields.grade = '';
  }
  // Remover estos campos del payload principal
  delete payload.school_name;
  delete payload.cct;
  delete payload.grade;
  delete payload.isStudent; // No enviar el checkbox al backend
  
  if (payload.curp) {
    metaFields.curp = payload.curp;
    delete payload.curp;
  }

  // Si hay campos meta, agregarlos como JSON string
  if (Object.keys(metaFields).length > 0) {
    payload.meta = JSON.stringify(metaFields);
  }

  // Marketing opt-in
  if (!showMarketingEmailOptInCheckbox) {
    delete payload.marketingEmailsOptIn;
  }

  // Requeridos por API - basados en los checkboxes reales
  payload.terms_of_service = Boolean(payload.privacyPolicy);
  payload.honor_code = Boolean(payload.honorCode);

  // Remover los campos de checkbox del payload final
  delete payload.honorCode;
  delete payload.privacyPolicy;

  // Tiempo total
  payload.totalRegistrationTime = totalRegistrationTime;

  // Convierte a snake_case
  payload = snakeCaseObject(payload);

  // Añade query params
  payload = { ...payload, ...queryParams };

  return payload;
};
