import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'register.page.title': {
    id: 'register.page.title',
    defaultMessage: 'Registrarse | {siteName}',
    description: 'register page title',
  },
  // Field labels
  'registration.fullname.label': {
    id: 'registration.fullname.label',
    defaultMessage: 'Nombre completo',
    description: 'Label that appears above fullname field',
  },
  'registration.email.label': {
    id: 'registration.email.label',
    defaultMessage: 'Correo electrónico',
    description: 'Label that appears above email field on register page',
  },
  'registration.username.label': {
    id: 'registration.username.label',
    defaultMessage: 'Nombre de usuario público',
    description: 'Label that appears above username field',
  },
  'registration.password.label': {
    id: 'registration.password.label',
    defaultMessage: 'Contraseña',
    description: 'Label that appears above password field',
  },
  'registration.country.label': {
    id: 'registration.country.label',
    defaultMessage: 'País/Región',
    description: 'Placeholder for the country options dropdown.',
  },
  'registration.opt.in.label': {
    id: 'registration.opt.in.label',
    defaultMessage: 'Acepto que {siteName} me envíe mensajes de marketing.',
    description: 'Text for opt in option on register page.',
  },
  // Help text
  'help.text.name': {
    id: 'help.text.name',
    defaultMessage: 'Este nombre se usará en los certificados que obtengas.',
    description: 'Help text for fullname field on registration page',
  },
  'help.text.username.1': {
    id: 'help.text.username.1',
    defaultMessage: 'El nombre que te identificará en tus cursos.',
    description: 'Part of help text for username field on registration page',
  },
  'help.text.username.2': {
    id: 'help.text.username.2',
    defaultMessage: 'No se puede cambiar después.',
    description: 'Part of help text for username field on registration page',
  },
  'help.text.email': {
    id: 'help.text.email',
    defaultMessage: 'Para activar tu cuenta y recibir actualizaciones importantes',
    description: 'Help text for email field on registration page',
  },
  // Form buttons
  'create.account.for.free.button': {
    id: 'create.account.for.free.button',
    defaultMessage: 'Crear una cuenta gratis',
    description: 'Label text for registration form submission button',
  },
  'create.account.cta.button': {
    id: 'create.account.cta.button',
    defaultMessage: '{label}',
    description: 'Label text for registration form submission button for those users who are landing through redirections',
  },
  // Institution login
  'register.institution.login.page.title': {
    id: 'register.institution.login.page.title',
    defaultMessage: 'Regístrate con credenciales de institución/campus',
    description: 'Heading of institution page',
  },
  // Validation messages
  'empty.name.field.error': {
    id: 'empty.name.field.error',
    defaultMessage: 'Ingresa tu nombre completo',
    description: 'Error message for empty fullname field',
  },
  'empty.email.field.error': {
    id: 'empty.email.field.error',
    defaultMessage: 'Ingresa tu correo electrónico',
    description: 'Error message for empty email field',
  },
  'empty.username.field.error': {
    id: 'empty.username.field.error',
    defaultMessage: 'El nombre de usuario debe tener entre 2 y 30 caracteres',
    description: 'Error message for empty username field',
  },
  'empty.password.field.error': {
    id: 'empty.password.field.error',
    defaultMessage: 'La contraseña no cumple con los criterios',
    description: 'Error message for empty password field',
  },
  'empty.country.field.error': {
    id: 'empty.country.field.error',
    defaultMessage: 'Selecciona tu país o región de residencia',
    description: 'Error message when no country/region is selected',
  },
  'invalid.country.field.error': {
    id: 'invalid.country.field.error',
    defaultMessage: 'El país debe coincidir con una opción del listado.',
    description: 'Error message when country is invalid',
  },
  'email.do.not.match': {
    id: 'email.do.not.match',
    defaultMessage: 'Los correos electrónicos no coinciden.',
    description: 'Email not match to confirm email',
  },
  'email.invalid.format.error': {
    id: 'email.invalid.format.error',
    defaultMessage: 'Ingresa un correo electrónico válido',
    description: 'Validation error for invalid email address',
  },
  'username.validation.message': {
    id: 'username.validation.message',
    defaultMessage: 'El nombre de usuario debe tener entre 2 y 30 caracteres',
    description: 'Error message for empty username field',
  },
  'name.validation.message': {
    id: 'name.validation.message',
    defaultMessage: 'Ingresa un nombre válido',
    description: 'Validation message that appears when fullname contain URL',
  },
  'password.validation.message': {
    id: 'password.validation.message',
    defaultMessage: 'La contraseña no cumple con los criterios',
    description: 'Error message for empty or invalid password',
  },
  'username.format.validation.message': {
    id: 'username.format.validation.message',
    defaultMessage: 'El nombre de usuario solo puede contener letras (A-Z, a-z), números (0-9), guiones bajos (_) y guiones (-). No puede contener espacios',
    description: 'Validation message that appears when username format is invalid',
  },
  // Error messages
  'registration.request.failure.header': {
    id: 'registration.request.failure.header',
    defaultMessage: 'No pudimos crear tu cuenta.',
    description: 'error message when registration failure.',
  },
  'registration.empty.form.submission.error': {
    id: 'registration.empty.form.submission.error',
    defaultMessage: 'Revisa tus respuestas e inténtalo de nuevo.',
    description: 'Error message that appears on top of the form when empty form is submitted',
  },
  'registration.request.server.error': {
    id: 'registration.request.server.error',
    defaultMessage: 'Ocurrió un error. Intenta refrescar la página o verifica tu conexión a internet.',
    description: 'Error message for internal server error.',
  },
  'registration.rate.limit.error': {
    id: 'registration.rate.limit.error',
    defaultMessage: 'Demasiados intentos de registro. Inténtalo más tarde.',
    description: 'Error message that appears when an anonymous user has made too many failed registration attempts',
  },
  'registration.tpa.session.expired': {
    id: 'registration.tpa.session.expired',
    defaultMessage: 'La sesión de registro con {provider} expiró.',
    description: '',
  },
  'registration.tpa.authentication.failure': {
    id: 'registration.tpa.authentication.failure',
    defaultMessage: 'Lo sentimos, no estás autorizado para acceder a {platform_name} por este medio. '
        + 'Contacta a tu administrador o responsable de aprendizaje para obtener acceso a {platform_name}. '
        + '{lineBreak}{lineBreak}Detalles del error:{lineBreak}{errorMessage}',
    description: 'Error message third party authentication pipeline fails',
  },
  // Terms of Service and Honor Code
  'terms.of.service.and.honor.code': {
    id: 'terms.of.service.and.honor.code',
    defaultMessage: 'Términos del servicio y Código de honor',
    description: 'Text for the hyperlink that redirects user to terms of service and honor code',
  },
  'privacy.policy': {
    id: 'privacy.policy',
    defaultMessage: 'Política de privacidad',
    description: 'Text for the hyperlink that redirects user to privacy policy',
  },
  'honor.code': {
    id: 'honor.code',
    defaultMessage: 'Código de honor',
    description: 'Text for the hyperlink that redirects user to the honor code',
  },
  'terms.of.service': {
    id: 'terms.of.service',
    defaultMessage: 'Términos del servicio',
    description: 'Text for the hyperlink that redirects user to the terms of service',
  },
  // miscellaneous strings
  'registration.username.suggestion.label': {
    id: 'registration.username.suggestion.label',
    defaultMessage: 'Sugerido:',
    description: 'Suggested usernames label text.',
  },
  'did.you.mean.alert.text': {
    id: 'did.you.mean.alert.text',
    defaultMessage: '¿Quisiste decir',
    description: 'Did you mean alert suggestion',
  },
});

export default messages;
