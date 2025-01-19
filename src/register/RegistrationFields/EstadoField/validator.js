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
    console.log(e);
    fieldError = formatMessage(messages['empty.estadi.field.error']);
  }

  return fieldError;
};

export default validateEstado;
