<template lang="pug">
  tr.newProfile(v-if="isAppearRow")
    th(scope="row") {{ index }}
    td
      .input-group
        input.form-control(type="text", :placeholder="ths[1]", v-model="person.name", name="name")
    td
      .input-group
        input.form-control(type="text", :placeholder="ths[2]", v-model="person.address", name="address")
    td
      .input-group
        select.form-control(width="30%", v-model="person.city", name="city")
          option(value="Ha Noi") Ha Noi
          option(value="Vinh") Vinh
          option(value="Hue") Hue
          option(value="Da Nang") Da Nang
          option(value="Sai Gon") Sai Gon
          option(value="Abroad") Abroad
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
      button.btn.btn-primary.save(@click="savePerson()", type="button") Save
      button.btn.btn-primary.delete(@click="deleteRow()", type="button") Delete
</template>

<script>
  import profileConsts from '../constants/profile-constant.js'
  import axios from 'axios'

  export default {
    name: 'Profile',
    components: {},
    props: {
      index: String,
      isAppearRow: true
    },
    data: () => ({
      ths: profileConsts.profileLabels,
      msgInfo: '',
      person: { id: '', name: '', address: '', city: 'Ha Noi', sex: true, age: 9 }
    }),
    computed: {},
    created () {},
    mounted () {},
    methods: {
      savePerson () {
        axios.post(`http://localhost:8085/profile-management/person/save`, this.person)
          .then(() => {
            this.msgInfo = 'Save successfully'
            // trigger method in the parents
            this.$emit('updatePersons', { msg: 'Adding person successful', isAddNewPerson: true })
            this.isAppearRow = false
          })
          .catch(err => err.throw())
      },

      deleteRow () {
        this.isAppearRow = false
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
