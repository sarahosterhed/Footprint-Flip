import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en-US/translation.json';
import translationSWE from './locales/swe-SWE/translation.json';

const resources = {
  English: {
    translation: translationEN,
  },
  Swedish: {
    translation: translationSWE,
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: ['English'],
  debug: false,
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;