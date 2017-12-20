<template lang="pug">
  tr.ReadAndUpdateProfile
    th(scope="row") {{ index }}
    template(v-if="isClickEdit")
      td
        .input-group
          input.form-control(type="text", :placeholder="ths[1]", v-model="person.name")
      td
        .input-group
          input.form-control(type="text", :placeholder="ths[2]", v-model="person.address")
      td
        .input-group
          select.form-control(width="30%", v-model="person.city")
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
              input#male.form-check-input(type="radio", :name="index.toString().concat('sex')", value="true", v-model="person.sex")
              | Male
          .form-check
            label.form-check-label
              input#female.form-check-input(type="radio", :name="index.toString().concat('sex')", value="false", v-model="person.sex")
              | Female
      td
        input.form-control(type="hidden", v-model="person.hasEdit")
        button.btn.btn-primary.save(@click="updatePerson()", type="button") Save
        button.btn.btn-primary(@click="onDelete(person.id)", type="button") Delete

    template(v-else)
      td
        router-link(:to="{name: 'Profile', params: {id: person.id.toString()}}") {{ person.name }}
      td.hideText.text-truncate(v-tooltip:top="person.address") {{ person.address }}
      td {{ person.city }}
      td {{ person.sex ? 'Male' : 'Female' }}
      td
        button.btn.btn-primary(@click="isClickEdit = true", type="button") Edit
        button.btn.btn-primary(@click="onDelete(person.id)", type="button") Delete
</template>

<script>
  import { ToolTipable } from '../customdirective/tooltip-directive.js'
  import profileConsts from '../constants/profile-constant.js'
  import axios from 'axios'

  export default {
    name: 'RUProfile',
    components: {},
    props: {
      index: String,
      person: Object
    },
    data: () => ({
      ths: profileConsts.profileLabels,
      isClickEdit: false
    }),
    computed: {},
    created () {},
    mounted () {},
    directives: {
      ToolTipable
    },
    methods: {
      updatePerson () {
        axios.patch(`http://localhost:8085/profile-management/person/update`, this.person)
          .then(() => {
            // trigger method in the parents
            this.$emit('updatePersons', { msg: 'Update person successful', isAddNewPerson: false })
            this.isClickEdit = false
          })
          .catch(err => err.throw())
      },

      onDelete (id) {
        axios.delete(`http://localhost:8085/profile-management/person/delete`, {params: {id: id}})
          .then(() => {
            // trigger method in the parents
            this.$emit('updatePersons', { msg: 'Delete person successful', isAddNewPerson: false })
          })
          .catch(err => err.throwError)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/mixins.scss";

  .ReadAndUpdateProfile {
    .hideText {
       max-width: 250px;
     }

    @include text-truncate
  }
</style>
