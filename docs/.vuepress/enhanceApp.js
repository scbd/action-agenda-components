import VueParticles from 'vue-particles'
import VueI18n from 'vue-i18n'
import Auth    from '@scbd/sso-vue-plugin-scbd'
import i18n from '../../packages/view/src/locales/index.js'

export default ({ Vue, options, router, siteData }) => {
  Vue.use(VueParticles)
  Vue.use(VueI18n)
  Vue.use(Auth, { forceEnv: 'production' })

  options.i18n = new VueI18n({ locale: 'en', fallbackLocale: 'en', messages: i18n.messages })
}
