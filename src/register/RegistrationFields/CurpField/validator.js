import messages from '../../messages';

// regex more focused towards url matching
//regex for mexican curp
export const URL_REGEX =  /[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[a-zA-Z0-9]{2}/gi;


const validateCurp = (value, formatMessage) => {
  let fieldError = '';
  if (!value.trim()) {
    fieldError = formatMessage(messages['empty.curp.field.error']);
  } else if (!URL_REGEX.test(value) ) {
    fieldError = formatMessage(messages['curp.validation.message']);
  }
  return fieldError;
};

export default validateCurp;
