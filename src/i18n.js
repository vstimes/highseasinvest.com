import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import zh from './locales/zh.json';

// Function to detect browser language
const getInitialLocale = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  const lang = browserLang.split('-')[0].toLowerCase();
  if (lang === 'zh') {
    return 'zh';
  }
  // Default to English for 'en' and any other languages
  return 'en';
};

const i18n = createI18n({
  legacy: false, // you must set `legacy: false` to use Composition API
  locale: getInitialLocale(), // set locale from browser
  fallbackLocale: 'en', // set fallback locale
  messages: {
    en,
    zh,
  },
});

export default i18n;
