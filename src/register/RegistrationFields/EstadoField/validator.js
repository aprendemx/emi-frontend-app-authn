import messages from "../../messages";

export const COUNTRY_CODE_KEY = 'code';
export const COUNTRY_DISPLAY_KEY = 'name';

const validateEstado =  (value, formatMessage)  => {
  let countryCode = '';
  let displayValue = value;
  let fieldError = '';
  try{
    parseInt(value)
  }catch (e){
    fieldError = formatMessage(messages['empty.estado.field.error']);
  }

  return fieldError;
};

export default validateEstado;
