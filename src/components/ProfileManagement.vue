<template lang="pug">
  .profile-management
    h1 {{ msg }}

    h4 Essential Links
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
        tr(v-for="(p, index) in result")
          th(scope="row") {{ index + 1 }}
          td
            router-link(:to="{name: 'Profile', params: {id: p.id.toString()}}") {{ p.name }}
          td {{ p.address }}
          td {{ p.city }}
          td {{ p.sex }}
          td
            button.btn.btn-primary(@click="onEdit(p.id)", type="button") Edit
            button.btn.btn-primary(@click="onDelete(p.id)", type="button") Delete

        template(v-for="(person, index) in persons")
          add-profile(:index="(idIncrement + index).toString()")

    button.btn.btn-primary.add(@click="persons.push(0)", type="button") Add
    button.btn.btn-primary.saveAll(@click="savePersons()", type="button") Save All
</template>

<script>
  import axios from 'axios'
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
  import profileConsts from '../constants/profile-constant.js'
  import AddProfile from './AddProfile.vue'

  export default {
    name: 'ProfileManagement',
    components: {
      PulseLoader,
      AddProfile
    },
    data () {
      return {
        msg: 'Welcome to Profile Management',
        ths: profileConsts.profileLabels,
        links: [
          ['f1', 'https://vuejs.org'],
          ['f2', 'https://forum.vuejs.org'],
          ['f3', 'https://gitter.im/vuejs/vue'],
          ['f4', 'https://twitter.com/vuejs']
        ],
        result: '',
        persons: []
      }
    },
    created () {
      this.fetchAllProfile()
    },
    computed: {
      idIncrement () {
        return this.result.length ? this.result.length + 1 : 1
      }
    },
    methods: {
      savePersons () {},

      onEdit (id) {},

      onDelete (id) {
        axios.delete(`http://localhost:8085/profile-management/person/delete`, {params: {id: id}})
          .then(this.fetchAllProfile())
          .catch(err => err.throwError)
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

  button {
    &.add, &.saveAll {
      width: 90px;
    }
  }
</style>
