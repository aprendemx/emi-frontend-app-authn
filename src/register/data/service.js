import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient, getHttpClient } from '@edx/frontend-platform/auth';
import * as QueryString from 'query-string';
import {useMemo} from "react";

export async function registerRequest(registrationInformation) {
  const requestConfig = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    isPublic: true,
  };

  const { data } = await getAuthenticatedHttpClient()
    .post(
      `${getConfig().LMS_BASE_URL}/api/user/v2/account/registration/`,
      QueryString.stringify(registrationInformation),
      requestConfig,
    )
    .catch((e) => {
      throw (e);
    });

  return {
    redirectUrl: data.redirect_url || `${getConfig().LMS_BASE_URL}/dashboard`,
    success: data.success || false,
    authenticatedUser: data.authenticated_user,
  };
}

export async function getFieldsValidations(formPayload) {
  const requestConfig = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  };

  const { data } = await getHttpClient()
    .post(
      `${getConfig().LMS_BASE_URL}/api/user/v1/validation/registration`,
      QueryString.stringify(formPayload),
      requestConfig,
    )
    .catch((e) => {
      throw (e);
    });

  return {
    fieldValidations: data,
  };
}



export async function getMunicipios(estado) {
  const requestConfig = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  };

  const { data } = await getHttpClient()
    .get(
      `https://prueba-nem.aprende.gob.mx/api/general/catalogos/estados/${estado}/municipios/`,
      requestConfig,
    )
    .catch((e) => {
      throw (e);
      console.log("ya fue")
      return useMemo(() =>{[]},[]);
    });
  return useMemo(() =>{data.map((municipio) => ({code:municipio.id, name:municipio.nombre}))},[]);
}
