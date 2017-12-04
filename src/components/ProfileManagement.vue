<template lang="pug">
  .profile-management
    h1 {{ msg }}

    h2 Essential Links
    ul
      li(v-for="link in links")
        a(:href="link[1]", target="_blank") {{ link[0].toUpperCase() }}

    h2.line
    h2 Profile Information

    table.table.table-hover
      thead
        tr
          th(v-for="th in ths") {{ th }}
      tbody
        tr(v-for="p in result")
          th(scope='row') {{ p.id }}
          td {{ p.name }}
          td {{ p.address }}
          td {{ p.sex }}
          td
            button.btn.btn-primary(@click="redirectProfile(p.id)", type="button") View
</template>

<script>
  import axios from 'axios'
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

  export default {
    name: 'ProfileManagement',
    components: {
      PulseLoader
    },
    data () {
      return {
        msg: 'Welcome to Profile Management',
        ths: ['#', 'Name', 'Address', 'Sex', 'Profile'],
        links: [
          ['f1', 'https://vuejs.org'],
          ['f2', 'https://forum.vuejs.org'],
          ['f3', 'https://gitter.im/vuejs/vue'],
          ['f4', 'https://twitter.com/vuejs']
        ],
        result: ''
      }
    },
    created () {
      this.fetchAllProfile()
    },
    methods: {
      redirectProfile (id) {
        this.$router.push({name: 'Profile', params: {id: id}})
      },

      fetchAllProfile () {
        axios.get(`http://localhost:8085/profile-management/person/all`)
          .then(({data}) => {
            this.result = data.length && data.map(p => {
              p.sex = p.sex ? 'Female' : 'Male'
              return p
            })
          })
          .catch(err => err.throwError)
      }
    }
}
</script>

<style scoped lang="scss">
  @import "../assets/variables.scss";

  h1, h2 {
    font-weight: normal;

    &.line {
      border-bottom: 1px solid $border-color;
    }
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
  }
</style>
