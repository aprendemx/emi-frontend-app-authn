import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'sign.in.text': {
    id: 'sign.in.text',
    defaultMessage: 'Iniciar sesión',
    description: 'login page link on reset password page',
  },
  'reset.password.page.title': {
    id: 'reset.password.page.title',
    defaultMessage: 'Reset Password | {siteName}',
    description: 'reset password page title',
  },
  'reset.password.page.heading': {
    id: 'reset.password.page.heading',
    defaultMessage: 'Restablecer contraseña',
    description: 'Reset password page heading',
  },
  'reset.password.page.subheading': {
    id: 'reset.password.page.subheading',
    defaultMessage: 'Ingresa y confirma tu nueva contraseña.',
    description: 'Reset password page subheading',
  },
  'reset.password.new.password.label': {
    id: 'reset.password.new.password.label',
    defaultMessage: 'Nueva contraseña',
    description: 'New password input label',
  },
  'reset.password.confirm.password.label': {
    id: 'reset.password.confirm.password.label',
    defaultMessage: 'Confirmar contraseña',
    description: 'Confirm password input label',
  },
  'password.criteria.not.met': {
    id: 'password.criteria.not.met',
    defaultMessage: 'La contraseña no cumple con los criterios',
    description: 'Password criteria not met message',
  },
  'password.do.not.match': {
    id: 'password.do.not.match',
    defaultMessage: 'Las contraseñas no coinciden',
    description: 'Passwords do not match message',
  },
  'confirm.password.placeholder': {
    id: 'confirm.password.placeholder',
    defaultMessage: 'Confirma tu contraseña',
    description: 'Placeholder confirm password',
  },
  'reset.password.request.failure.header': {
    id: 'reset.password.request.failure.header',
    defaultMessage: 'No pudimos restablecer tu contraseña.',
    description: 'Reset password failure header message.',
  },
  'reset.password.request.server.error': {
    id: 'reset.password.request.server.error',
    defaultMessage: 'Ocurrió un error. Intenta refrescar la página o verifica tu conexión a internet.',
    description: 'Server error message',
  },
  'reset.server.rate.limit.error': {
    id: 'reset.server.rate.limit.error',
    defaultMessage: 'Too many requests.',
    description: 'Rate limit error title',
  },
  'reset.password.success.heading': {
    id: 'reset.password.success.heading',
    defaultMessage: 'Password reset complete.',
    description: 'Reset password success heading',
  },
  'reset.password.success': {
    id: 'reset.password.success',
    defaultMessage: 'Your password has been reset. Sign in to your account.',
    description: 'Reset password success message',
  },
  'internal.server.error.message': {
    id: 'internal.server.error.message',
    defaultMessage: 'Ocurrió un error. Intenta refrescar la página o verifica tu conexión a internet.',
    description: 'General server error message',
  },
  'rate.limit.message': {
    id: 'rate.limit.message',
    defaultMessage: 'Se produjeron demasiadas solicitudes. Inténtalo más tarde.',
    description: 'Rate limit generic message',
  },

  // --- Compat: claves usadas por componentes ---
  'password.validation.message': {
    id: 'password.validation.message',
    defaultMessage: 'Password criteria has not been met',
    description: 'Validation error shown under password field',
  },
  'confirm.your.password': {
    id: 'confirm.your.password',
    defaultMessage: 'Confirm your password',
    description: 'Validation error shown under confirm password field when empty',
  },
  'passwords.do.not.match': {
    id: 'passwords.do.not.match',
    defaultMessage: 'Passwords do not match',
    description: 'Validation error when passwords do not match',
  },
  'sign.in': {
    id: 'sign.in',
    defaultMessage: 'Sign in',
    description: 'Tab link text to go back to login',
  },
  'reset.password': {
    id: 'reset.password',
    defaultMessage: 'Reset password',
    description: 'Generic reset password label',
  },
  'reset.password.page.instructions': {
    id: 'reset.password.page.instructions',
    defaultMessage: 'Enter and confirm your new password.',
    description: 'Instructions shown on reset page',
  },
  'new.password.label': {
    id: 'new.password.label',
    defaultMessage: 'New password',
    description: 'Floating label for new password field',
  },
  'confirm.password.label': {
    id: 'confirm.password.label',
    defaultMessage: 'Confirm password',
    description: 'Floating label for confirm password field',
  },
  'reset.password.failure.heading': {
    id: 'reset.password.failure.heading',
    defaultMessage: 'We couldn\'t reset your password.',
    description: 'Heading for reset password failure alert',
  },
  'rate.limit.error': {
    id: 'rate.limit.error',
    defaultMessage: 'An error has occurred because of too many requests. Please try again after some time.',
    description: 'Alias for rate limit message',
  },
  'internal.server.error': {
    id: 'internal.server.error',
    defaultMessage: 'An error has occurred. Try refreshing the page, or check your internet connection.',
    description: 'Alias for internal server error message',
  },
  'reset.password.form.submission.error': {
    id: 'reset.password.form.submission.error',
    defaultMessage: 'Please check your responses and try again.',
    description: 'Form submission generic error',
  },
});

export default messages;
