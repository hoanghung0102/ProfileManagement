<template lang="pug">
  .profile-management
    h1 {{ msg }}
    h2 Essential Links
    ul
      li
        a(href="https://vuejs.org", target="_blank") Core Docs
      li
        a(href="https://forum.vuejs.org", target="_blank") Forum
      li
        a(href="https://gitter.im/vuejs/vue", target="_blank") Gitter Chat
      li
        a(href="https://twitter.com/vuejs", target="_blank") Twitter
    h2 Profile Information
      ul
        li
          button(@click="redirectProfile") Details information
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  name: 'ProfileManagement',
  components: {
    PulseLoader
  },
  data () {
    return {
      msg: 'Welcome to Profile Management Vue2 App'
    }
  },

  methods: {
    redirectProfile () {
      this.$router.push({name: 'Profile'})
    }
  }
}
</script>

<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;

  li {
    display: inline-block;
    margin: 0 10px;

    a {
      color: #42b983;
    }
  }

  button {
    color: #42b983;
    cursor: pointer;
    padding: 5px;
    border-style: round(50%);
  }
}
</style>
