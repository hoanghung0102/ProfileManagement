<template lang="pug">
  .navigator
    nav.navbar.navbar-inverse.navbar-fixed-top(role='navigation')
    .navbar-header(style='text-align:center;')
      button.navbar-toggle.pull-left(type='button', data-toggle='collapse', data-target='.navbar-aaa1')
        span.sr-only Toggle navigation
        span.icon-bar
        span.icon-bar
        span.icon-bar
      button.navbar-toggle.pull-right(type='button', data-toggle='collapse', data-target='.navbar-bbb1', style='padding: 3px 15px;')
        b.caret(style='border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 4px solid #fff;')
      div(style='padding-top: 15px;')
        a(href='', title='aaa', style='color:#ffffff;') Example.com
    #id1.collapse.navbar-collapse.navbar-aaa1
      ul.nav.navbar-nav.pull-left
        li
          a(href='') Link left 1
        li
          a(href='') Link left 2
        li
          a(href='') Link left 3
</template>

<script>
  import profileConsts from '@/constants/profile-constant.js'

  export default {
    name: 'Profile',
    components: {},
    props: {
      id: {
        type: String,
        default: '0'
      }
    },
    data: () => ({
      msg: 'Details Profile',
      endpoint: 'person',
      ths: profileConsts.profileLabels,
      result: ''
    }),
    computed: {},
    created () {},
    mounted () {},
    methods: {}
  }
</script>

<style scoped lang="scss">
  h1 {
    font-weight: normal;
  }
</style>
