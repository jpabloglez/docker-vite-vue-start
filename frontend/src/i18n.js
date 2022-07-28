import { createI18n } from 'vue-i18n';
//import VueI18n  from 'vue-i18n';
/*
import Locales from './locales/locales.js';

export const i18n = createI18n({
  locale: "es",
  messages: Locales
});
*/


export const i18n = createI18n({
  locale: "es",
  messages: {
    en: {
      message: {
        language: "Language",
        hello: "hello world!"
      }
    },
    es: {
      message: {
        language: "es",
        hello: "hola mundo!"
      }
    }
  }
});


/*

export default {
  name: 'App',
  setup() {
    const { locale, t } = createI18n({
      inheritLocale: true
    })

    return { locale, t }
  }
}
*/