import Vue from 'vue'
import SolorumGroup from './SolorumGroup.vue'

Vue.config.productionTip = false

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

new Vue({
  el: '#app',
  render () {
    return <SolorumGroup logo={this.logo} />
  },
})
