<template lang="pug">
  .profile-details
    h1 {{ msg }}
    .container
      .row
        .col-2 {{ ths[1] }}
        .col-4 {{ result.name }}
      .row
        .col-2 {{ ths[2] }}
        .col-4 {{ result.address }} {{ result.city }}
      .row
        .col-2 {{ ths[3] }}
        .col-4 {{ result.sex }}
</template>

<script>
  import axios from 'axios'
  import profileConsts from '../constants/profile-constant.js'

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
    created () {
      this.fetchProfileDetails()
    },
    mounted () {},
    methods: {
      fetchProfileDetails () {
        axios.get(`http://localhost:8085/profile-management/${this.endpoint}`, {params: { id: this.id }})
          .then(({data}) => { this.result = data })
      }
    }
  }
</script>

<style scoped lang="scss">
  h1 {
    font-weight: normal;
  }
</style>
