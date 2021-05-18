import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-auth-ui'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
