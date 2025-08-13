import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  // institution login strings
  'institution.login.page.sub.heading': {
    id: 'institution.login.page.sub.heading',
    defaultMessage: 'Elige tu institución de la lista',
    description: 'Heading of the institutions list',
  },
  // logistration strings
  'logistration.sign.in': {
    id: 'logistration.sign.in',
    defaultMessage: 'Iniciar sesión',
    description: 'Text that appears on the tab to switch between login and register',
  },
  'logistration.register': {
    id: 'logistration.register',
    defaultMessage: 'Registrarse',
    description: 'Text that appears on the tab to switch between login and register',
  },
  // enterprise sso strings
  'enterprisetpa.title.heading': {
    id: 'enterprisetpa.title.heading',
    defaultMessage: '¿Quieres iniciar sesión con tus credenciales de {providerName}?',
    description: 'Header text used in enterprise third party authentication',
  },
  'enterprisetpa.login.button.text': {
    id: 'enterprisetpa.login.button.text',
    defaultMessage: 'Ver otras formas de iniciar sesión o registrarse',
    description: 'Button text for login',
  },
  'enterprisetpa.login.button.text.public.account.creation.disabled': {
    id: 'enterprisetpa.login.button.text.public.account.creation.disabled',
    defaultMessage: 'Ver otras formas de iniciar sesión',
    description: 'Button text for login when account creation is disabled',
  },
  // social auth providers
  'sso.sign.in.with': {
    id: 'sso.sign.in.with',
    defaultMessage: 'Iniciar sesión con {providerName}',
    description: 'Screen reader text that appears before social auth provider name',
  },
  'sso.create.account.using': {
    id: 'sso.create.account.using',
    defaultMessage: 'Crear cuenta con {providerName}',
    description: 'Screen reader text that appears before social auth provider name',
  },
  // password field strings
  'show.password': {
    id: 'show.password',
    defaultMessage: 'Mostrar contraseña',
    description: 'aria label for show password icon on password field',
  },
  'hide.password': {
    id: 'hide.password',
    defaultMessage: 'Ocultar contraseña',
    description: 'aria label for hide password icon on password field',
  },
  'one.letter': {
    id: 'one.letter',
    defaultMessage: '1 letra',
    description: 'password requirement to have 1 letter',
  },
  'one.number': {
    id: 'one.number',
    defaultMessage: '1 número',
    description: 'password requirement to have 1 number',
  },
  'eight.characters': {
    id: 'eight.characters',
    defaultMessage: '8 caracteres',
    description: 'password requirement to have a minimum of 8 characters',
  },
  'password.sr.only.helping.text': {
    id: 'password.sr.only.helping.text',
    defaultMessage: 'La contraseña debe tener al menos 8 caracteres, incluir al menos una letra y un número',
    description: 'Password helping text for the sr-only class',
  },
  // third party auth
  'tpa.alert.heading': {
    id: 'tpa.alert.heading',
    defaultMessage: '¡Casi terminas!',
    description: 'Success alert heading after user has successfully signed in with social auth',
  },
  'login.third.party.auth.account.not.linked': {
    id: 'login.third.party.auth.account.not.linked',
    defaultMessage: 'Has iniciado sesión correctamente en {currentProvider}, pero tu cuenta de {currentProvider} '
                    + 'no está vinculada a una cuenta de {platformName}. Para vincular tus cuentas, '
                    + 'inicia sesión ahora usando tu contraseña de {platformName}.',
    description: 'Message that appears on login page if user has successfully authenticated with social '
                  + 'auth but no associated platform account exists',
  },
  'register.third.party.auth.account.not.linked': {
    id: 'register.third.party.auth.account.not.linked',
    defaultMessage: '¡Has iniciado sesión correctamente con {currentProvider}! Solo necesitamos un poco más de información '
                    + 'antes de que empieces a aprender en {platformName}.',
    description: 'Message that appears on register page if user has successfully authenticated with TPA '
                  + 'but no associated platform account exists',
  },
  'registration.using.tpa.form.heading': {
    id: 'registration.using.tpa.form.heading',
    defaultMessage: 'Termina de crear tu cuenta',
    description: 'Heading that appears above form when user is trying to create account using social auth',
  },
  supportTitle: {
    id: 'zendesk.supportTitle',
    description: 'Title for the support button',
    defaultMessage: 'Soporte de edX',
  },
  selectTicketForm: {
    id: 'zendesk.selectTicketForm',
    description: 'Select ticket form',
    defaultMessage: 'Selecciona el tipo de solicitud:',
  },
  'registration.other.options.heading': {
    id: 'registration.other.options.heading',
    defaultMessage: 'O regístrate con:',
    description: 'A message that appears above third party auth providers i.e saml, google, facebook etc',
  },
  'institution.login.button': {
    id: 'institution.login.button',
    defaultMessage: 'Credenciales de institución/campus',
    description: 'shows institutions list',
  },
  'login.other.options.heading': {
    id: 'login.other.options.heading',
    defaultMessage: 'O inicia sesión con:',
    description: 'Text that appears above other sign in options like social auth buttons',
  },
  'enterprise.login.btn.text': {
    id: 'enterprise.login.btn.text',
    defaultMessage: 'Credenciales de empresa o escuela',
    description: 'Company or school login link text.',
  },
});

export default messages;
