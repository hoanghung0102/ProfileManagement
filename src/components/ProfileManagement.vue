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
          r-u-profile(:index="(index + 1).toString()", :person="p", @updatePerson="updatePersons")

        template
          add-profile(:index="idIncrement.toString()", @updatePerson="updatePersons", :isAppearRow="isClickAdd")

    button.btn.btn-primary.add(@click="addNewPerson()", type="button") Add
    button.btn.btn-primary.saveAll(@click="savePersons()", type="button") Save All
</template>

<script>
  import axios from 'axios'
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
  import profileConsts from '../constants/profile-constant.js'
  import AddProfile from '../components/AddProfile.vue'
  import RUProfile from '../components/RUProfile.vue'

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
        person: {},
        isClickEdit: false,
        isClickAdd: false
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
      fetchAllProfile () {
        axios.get(`http://localhost:8085/profile-management/person/all`)
          .then(({data}) => {
            this.result = data
              .map(a => {
                a.hasEdit = false
                return a
              })
              .sort((a, b) => a.id - b.id)
          })
          .catch(err => err.throw())
      },

      updatePersons (fbData) {
        this.fetchAllProfile()
        // if (fbData.isAddNewPerson) this.isClickAdd = false
        console.log('isClickAdd:= ', this.isClickAdd)
      },

      addNewPerson () {
        this.isClickAdd = true
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
