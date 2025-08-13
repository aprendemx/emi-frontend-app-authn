import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'forgot.password.page.title': {
    id: 'forgot.password.page.title',
    defaultMessage: 'Olvidé mi contraseña | {siteName}',
    description: 'forgot password page title',
  },
  'forgot.password.page.heading': {
    id: 'forgot.password.page.heading',
    defaultMessage: 'Restablecer contraseña',
    description: 'The page heading for the forgot password page.',
  },
  'forgot.password.page.instructions': {
    id: 'forgot.password.page.instructions',
    defaultMessage: 'Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña.',
    description: 'Instructions message for forgot password page.',
  },
  'forgot.password.page.invalid.email.message': {
    id: 'forgot.password.page.invalid.email.message',
    defaultMessage: 'Ingresa un correo electrónico válido',
    description: 'Invalid email address message for input field.',
  },
  'forgot.password.page.email.field.label': {
    id: 'forgot.password.page.email.field.label',
    defaultMessage: 'Correo electrónico',
    description: 'Email field label for the forgot password page.',
  },
  'forgot.password.page.submit.button': {
    id: 'forgot.password.page.submit.button',
    defaultMessage: 'Enviar',
    description: 'Submit button text for the forgot password page.',
  },
  'forgot.password.error.alert.title': {
    id: 'forgot.password.error.alert.title.',
    defaultMessage: 'No pudimos comunicarnos contigo.',
    description: 'Failed to send password recovery email.',
  },
  'forgot.password.error.message.title': {
    id: 'forgot.password.error.message.title',
    defaultMessage: 'Ocurrió un error.',
    description: 'Title for message that appears when error occurs for password assistance page',
  },
  'forgot.password.request.in.progress.message': {
    id: 'forgot.password.request.in.progress.message',
    defaultMessage: 'Tu solicitud anterior sigue en proceso, inténtalo de nuevo en unos momentos.',
    description: 'Message displayed when previous password reset request is still in progress.',
  },
  'forgot.password.empty.email.field.error': {
    id: 'forgot.password.empty.email.field.error',
    defaultMessage: 'Ingresa tu correo electrónico',
    description: 'Error message that appears when user tries to submit empty email field',
  },
  'forgot.password.email.help.text': {
    id: 'forgot.password.email.help.text',
    defaultMessage: 'El correo con el que te registraste en {platformName}',
    description: 'text help for the email',
  },
  // Confirmation Alert Message
  'confirmation.message.title': {
    id: 'confirmation.message.title',
    defaultMessage: 'Revisa tu correo',
    description: 'Forgot password confirmation message title',
  },
  'confirmation.support.link': {
    id: 'confirmation.support.link',
    defaultMessage: 'contactar soporte técnico',
    description: 'Technical support link text',
  },
  'need.help.sign.in.text': {
    id: 'need.help.sign.in.text',
    defaultMessage: '¿Necesitas ayuda para iniciar sesión?',
    description: 'Sign in help link on forgot password page',
  },
  'additional.help.text': {
    id: 'additional.help.text',
    defaultMessage: 'Para más ayuda, contacta al soporte de {platformName} en ',
    description: 'additional help text on forgot password page',
  },
  'sign.in.text': {
    id: 'sign.in.text',
    defaultMessage: 'Iniciar sesión',
    description: 'login page link on password page',
  },
  'extend.field.errors': {
    id: 'extend.field.errors',
    defaultMessage: '{emailError} abajo.',
    description: 'extends the field error for alert message',
  },
  // Reset password token validation failure
  'invalid.token.heading': {
    id: 'invalid.token.heading',
    defaultMessage: 'Enlace para restablecer inválido',
    description: 'Alert heading when reset password link is invalid',
  },
  'invalid.token.error.message': {
    id: 'invalid.token.error.message',
    defaultMessage: 'Este enlace para restablecer la contraseña no es válido o ya fue usado. Ingresa tu correo para recibir uno nuevo.',
    description: 'Alert message when reset password link has expired or is invalid',
  },
  'token.validation.rate.limit.error.heading': {
    id: 'token.validation.rate.limit.error.heading',
    defaultMessage: 'Demasiadas solicitudes',
    description: 'Too many request at server end point',
  },
  'token.validation.rate.limit.error': {
    id: 'token.validation.rate.limit.error',
    defaultMessage: 'Ocurrió un error por demasiadas solicitudes. Inténtalo más tarde.',
    description: 'Error message that appears when server responds with 429 error code',
  },
  'token.validation.internal.sever.error.heading': {
    id: 'token.validation.internal.sever.error.heading',
    defaultMessage: 'Error al validar el token',
    description: 'Failed to validate reset password token error message.',
  },
  'token.validation.internal.sever.error': {
    id: 'token.validation.internal.sever.error',
    defaultMessage: 'Ocurrió un error. Intenta refrescar la página o verifica tu conexión a internet.',
    description: 'Error message that appears when server responds with 500 error code',
  },
  // Error messages
  'internal.server.error': {
    id: 'internal.server.error',
    defaultMessage: 'Ocurrió un error. Intenta refrescar la página o verifica tu conexión a internet.',
    description: 'Error message that appears when server responds with 500 error code',
  },
});
export default messages;
