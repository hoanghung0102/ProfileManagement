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
        template(v-for="(p, index) in result")
          r-u-profile(:index="(index + 1).toString()", :persons="result", :person="p", @updatePersons="updatePersons")

        template(v-for="(person, index) in persons")
          add-profile(:index="(idIncrement + index).toString()", :persons="result", @updatePersons="updatePersons")

    button.btn.btn-primary.add(@click="persons.push(0)", type="button") Add
    button.btn.btn-primary.saveAll(@click="savePersons()", type="button") Save All
</template>

<script>
  import axios from 'axios'
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
  import profileConsts from '../constants/profile-constant.js'
  import AddProfile from './AddProfile.vue'
  import RUProfile from './RUProfile.vue'

  export default {
    name: 'ProfileManagement',
    components: {
      PulseLoader,
      AddProfile,
      RUProfile
    },
    data () {
      return {
        msg: 'My Family',
        ths: profileConsts.profileLabels,
        links: [
          ['f1', 'https://vuejs.org'],
          ['f2', 'https://forum.vuejs.org'],
          ['f3', 'https://gitter.im/vuejs/vue'],
          ['f4', 'https://twitter.com/vuejs']
        ],
        result: '',
        persons: [],
        person: {},
        isClickEdit: false
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
      updatePerson () {
        axios.patch(`http://localhost:8085/profile-management/person/update`, this.person)
          .then(() => {
            this.msgInfo = 'Save successfully'
            console.log(this.msgInfo)
          })
          .catch(err => err.throw())
      },

      onDelete (id) {
        axios.delete(`http://localhost:8085/profile-management/person/delete`, {params: {id: id}})
          .then(
            this.result = this.result.filter(function (obj) {
              return obj.id !== id
            }))
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
          .catch(err => err.throw())
      },

      updatePersons () {
        this.fetchAllProfile()
        console.log('trigger')
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

  .table tr:last-child {
    th, td {
      border-bottom: 1px solid #eceeef;
    }
  }
</style>

<style lang="scss">
  .form-check :first-child {
    margin-right: 4px;
  }
</style>
