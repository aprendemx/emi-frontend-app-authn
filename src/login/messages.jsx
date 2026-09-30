import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'login.page.title': {
    id: 'login.page.title',
    defaultMessage: 'Iniciar sesión | {siteName}',
    description: 'login page title',
  },
  // Login labels
  'login.user.identity.label': {
    id: 'login.user.identity.label',
    defaultMessage: 'Usuario o correo electrónico',
    description: 'Label for user identity field to enter either username or email to login',
  },
  'login.password.label': {
    id: 'login.password.label',
    defaultMessage: 'Contraseña',
    description: 'Label for password field',
  },
  'sign.in.button': {
    id: 'sign.in.button',
    defaultMessage: 'Iniciar sesión',
    description: 'Sign in button label that appears on login page',
  },
  'forgot.password': {
    id: 'forgot.password',
    defaultMessage: '¿Olvidaste tu contraseña?',
    description: 'Button text for forgot password',
  },
  'institution.login.button': {
    id: 'institution.login.button',
    defaultMessage: 'Credenciales de institución/campus',
    description: 'shows institutions list',
  },
  'institution.login.page.title': {
    id: 'institution.login.page.title',
    defaultMessage: 'Inicia sesión con credenciales de institución/campus',
    description: 'Heading of institution page',
  },
  'institution.login.page.sub.heading': {
    id: 'institution.login.page.sub.heading',
    defaultMessage: 'Elige tu institución de la lista',
    description: 'Heading of the institutions list',
  },
  'non.compliant.password.title': {
    id: 'non.compliant.password.title',
    defaultMessage: 'Recientemente cambiamos los requisitos de contraseña',
    description: 'A title that appears in bold before error message for non-compliant password',
  },
  'non.compliant.password.message': {
    id: 'non.compliant.password.message',
    defaultMessage: 'Tu contraseña actual no cumple los nuevos requisitos de seguridad. '
                    + 'Te enviamos un correo para restablecerla a la dirección asociada a esta cuenta. '
                    + 'Gracias por ayudarnos a mantener segura tu información.',
    description: 'Error message for non-compliant password',
  },
  'account.locked.out.message.1': {
    id: 'account.locked.out.message.1',
    defaultMessage: 'Para proteger tu cuenta, ha sido bloqueada temporalmente. Intenta de nuevo en 30 minutos.',
    description: 'Part of message for when user account has been locked out after multiple failed login attempts',
  },
  'username.or.email.format.validation.less.chars.message': {
    id: 'username.or.email.format.validation.less.chars.message',
    defaultMessage: 'El usuario o correo debe tener al menos 2 caracteres.',
    description: 'Validation message that appears when username or email address is less than 2 characters',
  },
  'email.validation.message': {
    id: 'email.validation.message',
    defaultMessage: 'Ingresa tu usuario o correo electrónico',
    description: 'Validation message that appears when email is empty',
  },
  'password.validation.message': {
    id: 'password.validation.message',
    defaultMessage: 'Ingresa tu contraseña',
    description: 'Validation message that appears when password is empty',
  },
  // Account Activation Strings
  'account.activation.success.message.title': {
    id: 'account.activation.success.message.title',
    defaultMessage: '¡Listo! Has activado tu cuenta.',
    description: 'Account Activation success message title',
  },
  'account.activation.success.message': {
    id: 'account.activation.success.message',
    defaultMessage: 'Ahora recibirás actualizaciones y alertas relacionadas con tus cursos. Inicia sesión para continuar.',
    description: 'Message show to learners when their account has been activated successfully',
  },
  'account.activation.info.message': {
    id: 'account.activation.info.message',
    defaultMessage: 'Esta cuenta ya fue activada.',
    description: 'Message shown when learner account has already been activated',
  },
  'account.activation.error.message.title': {
    id: 'account.activation.error.message.title',
    defaultMessage: 'No se pudo activar tu cuenta',
    description: 'Account Activation error message title',
  },
  'account.activation.support.link': {
    id: 'account.activation.support.link',
    defaultMessage: 'contactar soporte',
    description: 'Link text used in account activation error message to go to learner help center',
  },
  // Email Confirmation Strings
  'account.confirmation.success.message.title': {
    id: 'account.confirmation.success.message.title',
    defaultMessage: '¡Listo! Has confirmado tu correo.',
    description: 'Account verification success message title',
  },
  'account.confirmation.success.message': {
    id: 'account.confirmation.success.message',
    defaultMessage: 'Inicia sesión para continuar.',
    description: 'Message show to learners when their account has been activated successfully',
  },
  'account.confirmation.info.message': {
    id: 'account.confirmation.info.message',
    defaultMessage: 'Este correo ya fue confirmado.',
    description: 'Message shown when learner account has already been verified',
  },
  'account.confirmation.error.message.title': {
    id: 'account.confirmation.error.message.title',
    defaultMessage: 'No se pudo confirmar tu correo',
    description: 'Account verification error message title',
  },
  'tpa.account.link': {
    id: 'tpa.account.link',
    defaultMessage: 'Cuenta de {provider}',
    description: 'Link text error message used to go to SSO when staff user try to login through password.',
  },
  'internal.server.error.message': {
    id: 'internal.server.error.message',
    defaultMessage: 'Ocurrió un error. Intenta refrescar la página o verifica tu conexión a internet.',
    description: 'Error message that appears when server responds with 500 error code',
  },
  'login.rate.limit.reached.message': {
    id: 'login.rate.limit.reached.message',
    defaultMessage: 'Demasiados intentos fallidos. Intenta de nuevo más tarde.',
    description: 'Error message that appears when an anonymous user has made too many failed login attempts',
  },
  'login.failure.header.title': {
    id: 'login.failure.header.title',
    defaultMessage: 'No pudimos iniciar tu sesión.',
    description: 'Login failure header message.',
  },
  'contact.support.link': {
    id: 'contact.support.link',
    defaultMessage: 'contactar soporte de {platformName}',
    description: 'Link text used in inactive user error message to go to learner help center',
  },
  'login.incorrect.credentials.error': {
    id: 'login.incorrect.credentials.error',
    defaultMessage: 'El usuario, correo o contraseña son incorrectos. Inténtalo de nuevo.',
    description: 'Error message for incorrect email or password',
  },
  'login.form.invalid.error.message': {
    id: 'login.form.invalid.error.message',
    defaultMessage: 'Por favor completa los campos abajo.',
    description: 'Login form empty input user message',
  },
  'login.incorrect.credentials.error.reset.link.text': {
    id: 'login.incorrect.credentials.error.reset.link.text',
    defaultMessage: 'restablece tu contraseña',
    description: 'Reset password link text for incorrect email or password credentials',
  },
  'login.incorrect.credentials.error.before.account.blocked.text': {
    id: 'login.incorrect.credentials.error.before.account.blocked.text',
    defaultMessage: 'haz clic aquí para restablecerla.',
    description: 'Reset password link text for incorrect email or password credentials before blocking account',
  },
  // Vulnerable password change prompt
  'password.security.nudge.title': {
    id: 'password.security.nudge.title',
    defaultMessage: 'Seguridad de contraseña',
    description: 'Title for prompt that nudges user to change their vulnerable password',
  },
  'password.security.block.title': {
    id: 'password.security.block.title',
    defaultMessage: 'Se requiere cambiar la contraseña',
    description: 'Title for prompt that asks user to change their vulnerable password',
  },
  'password.security.nudge.body': {
    id: 'password.security.nudge.body',
    defaultMessage: 'Nuestro sistema detectó que tu contraseña es vulnerable. '
                    + 'Te recomendamos cambiarla para mantener segura tu cuenta.',
    description: 'Message copy for prompt that nudges user to change their vulnerable password',
  },
  'password.security.block.body': {
    id: 'password.security.block.body',
    defaultMessage: 'Nuestro sistema detectó que tu contraseña es vulnerable. '
                    + 'Cámbiala para mantener segura tu cuenta.',
    description: 'Message copy for prompt that asks user to change their vulnerable password',
  },
  'password.security.close.button': {
    id: 'password.security.close.button',
    defaultMessage: 'Cerrar',
    description: 'Button to close popup',
  },
  'password.security.redirect.to.reset.password.button': {
    id: 'password.security.redirect.to.reset.password.button',
    defaultMessage: 'Restablecer contraseña',
    description: 'Button to redirect users to Reset Password page',
  },
  'login.tpa.authentication.failure': {
    id: 'login.tpa.authentication.failure',
    defaultMessage: 'Lo sentimos, no estás autorizado para acceder a {platform_name} por este medio. '
        + 'Contacta a tu administrador o responsable de aprendizaje para obtener acceso a {platform_name}. '
        + '{lineBreak}{lineBreak}Detalles del error:{lineBreak}{errorMessage}',
    description: 'Error message third party authentication pipeline fails',
  },
});

export default messages;
