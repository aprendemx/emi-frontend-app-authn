export const LLAVEMX_PROVIDER_ID = 'oa2-llavemx';

// URLs centralizadas para términos y privacidad de Llave MX
export const LLAVEMX_TERMS_URL = 'https://www.archivos.atdt.gob.mx/storage/app/media/Transparencia/TyC/TerminosLlaveMX.pdf';
export const LLAVEMX_PRIVACY_URL = 'https://www.archivos.atdt.gob.mx/storage/app/media/Transparencia/PORTAL%20ATDT/AVISOS%20DE%20PRIVACIDAD/ATDT_Aviso%20de%20Privacidad%20Integral%20Llave%20MX.pdf';

export const isLlaveMXProvider = (providerId) => (
  providerId === LLAVEMX_PROVIDER_ID || providerId === 'llavemx'
);
