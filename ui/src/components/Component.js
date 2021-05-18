import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'AuthUi',

  setup () {
    return () => h(QBadge, {
      class: 'AuthUi',
      label: 'AuthUi'
    })
  }
}
