import Vue from 'vue'
import Hello from '@/components/Profile'

describe('Profile.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Details Profile')
  })
})
