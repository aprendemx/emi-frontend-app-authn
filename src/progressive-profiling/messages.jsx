import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'progressive.profiling.page.title': {
    id: 'progressive.profiling.page.title',
    defaultMessage: 'Bienvenido(a) | {siteName}',
    description: 'progressive profiling page title',
  },
  'progressive.profiling.page.heading': {
    id: 'progressive.profiling.page.heading',
    defaultMessage: 'Unas cuantas preguntas nos ayudarán a conocerte mejor.',
    description: 'The page heading for the progressive profiling page.',
  },
  'optional.fields.information.link': {
    id: 'optional.fields.information.link',
    defaultMessage: 'Más información sobre cómo usamos esta información.',
    description: 'Optional fields page information link',
  },
  'optional.fields.submit.button': {
    id: 'optional.fields.submit.button',
    defaultMessage: 'Enviar',
    description: 'Submit button text',
  },
  'optional.fields.skip.button': {
    id: 'optional.fields.skip.button',
    defaultMessage: 'Omitir por ahora',
    description: 'Skip button text',
  },
  'optional.fields.next.button': {
    id: 'optional.fields.next.button',
    defaultMessage: 'Siguiente',
    description: 'Next button text',
  },
  // modal dialog box
  'continue.to.platform': {
    id: 'continue.to.platform',
    defaultMessage: 'Continuar a {platformName}',
    description: 'Button text for modal when user chooses "skip for now" option',
  },
  'modal.title': {
    id: 'modal.title',
    defaultMessage: 'Gracias por contarnos.',
    description: 'Heading for welcome page modal',
  },
  'modal.description': {
    id: 'modal.description',
    defaultMessage: 'Puedes completar tu perfil en configuración cuando quieras.',
    description: 'Modal body text',
  },
  // error message
  'welcome.page.error.heading': {
    id: 'welcome.page.error.heading',
    defaultMessage: 'No pudimos actualizar tu perfil',
    description: 'Error message heading',
  },
  'welcome.page.error.message': {
    id: 'welcome.page.error.message',
    defaultMessage: 'Ocurrió un error. Puedes completar tu perfil en configuración cuando quieras.',
    description: 'Error message body',
  },
});
export default messages;
