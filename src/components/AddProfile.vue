<template lang="pug">
  tr.newProfile(v-if="isAppearRow")
    th(scope="row") {{ index }}
    td
      .input-group
        input.form-control(type="text", :placeholder="ths[1]", v-model="person.name")
    td
      .input-group
        input.form-control(type="text", :placeholder="ths[2]", v-model="person.address")
    td
      .input-group
        select.form-control(width="30%", v-model="person.city")
          option Ha Noi
          option Vinh
          option Hue
          option DN
          option HCM
    td
      .input-group
        .form-check
          label.form-check-label
            input#male.form-check-input(type="radio", :name="index.concat('sex')", value="true", checked="", v-model="person.sex")
            | Male
        .form-check
          label.form-check-label
            input#female.form-check-input(type="radio", :name="index.concat('sex')", value="false", v-model="person.sex")
            | Female
    td
      button.btn.btn-primary.save(@click="savePersons()", type="button") Save
      button.btn.btn-primary.delete(@click="deleteRow()", type="button") Delete
</template>

<script>
  import axios from 'axios'
  import profileConsts from '../constants/profile-constant.js'

  export default {
    name: 'Profile',
    components: {},
    props: {
      index: String
    },
    data: () => ({
      ths: profileConsts.profileLabels,
      msgInfo: '',
      person: { id: '', name: '', address: '', city: 'Ha Noi', sex: true },
      isAppearRow: true
    }),
    computed: {},
    created () {},
    mounted () {},
    methods: {
      savePersons () {
        axios.post(`http://localhost:8085/profile-management/person/save`, { params: this.person })
          .then(this.msgInfo = 'Save successfully')
          .catch(err => err.throwError)
      },

      deleteRow () {
        this.isAppearRow = false
      }
    }
  }
</script>

<style scoped lang="scss">
  .form-check :first-child {
    margin-right: 4px;
  }
</style>
