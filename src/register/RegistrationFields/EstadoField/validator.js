export const COUNTRY_CODE_KEY = 'code';
export const COUNTRY_DISPLAY_KEY = 'name';

const validateEstadoField = (value, countryList, emptyErrorMessage, invalidCountryErrorMessage) => {
  let countryCode = '';
  let displayValue = value;
  let error = '';
  try{
    parseInt(value)
  }catch (e){
    console.log(e);
    error='Error en el campo';
  }

  return { error, countryCode, displayValue };
};

export default validateEstadoField;
