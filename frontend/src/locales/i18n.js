import { createI18n } from "vue-i18n";

export const i18n = createI18n({
  locale: "en",
  messages: {
    en: {
      message: {
        language: "en",
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
    name: "App",
    setup() {
        const { locale, t } = createI18n({
            inheritLocale: true
        })

        return { locale, t }
    }
}
*/