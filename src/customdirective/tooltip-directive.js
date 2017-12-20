import Vue from 'vue'

export const ToolTipable = {
  bind: function (el, binding, vnode) {
    console.log('el =', el)
  }
}

Vue.directive('tooltip', ToolTipable)
