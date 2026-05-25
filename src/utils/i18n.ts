export const languages = {
  en: 'English',
  pt: 'Português',
};

export const ui = {
  en: {
    'contact.title': 'Get in touch',
    'contact.subtitle': 'Have a project in mind or want to chat? Drop me a message below.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
  },
  pt: {
    'contact.title': 'Entre em contato',
    'contact.subtitle': 'Tem um projeto em mente ou quer bater um papo? Envie uma mensagem abaixo.',
    'contact.name': 'Nome',
    'contact.email': 'E-mail',
    'contact.message': 'Mensagem',
    'contact.submit': 'Enviar Mensagem',
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui['en']) {
    return ui[lang][key] || ui['en'][key];
  };
}