import { createI18n } from 'vue-i18n'
import en from './en'
import uz from './uz'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    uz
  }
})

export default i18n
