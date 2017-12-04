<template lang="pug">
  .profile-details
    h1 {{ msg }}
    .row
      .col-2 2 of 6
      .col-4 4 of 6
</template>

<script>
  import axios from 'axios'
  import { profileLabels } from '../constants/profile-constant.js'

  export default {
    name: 'Profile',
    components: {},
    props: {
      id: {
        type: Number,
        default: 0
      }
    },
    data: () => ({
      msg: 'Details Profile',
      params: [],
      endpoint: 'person',
      ths: profileLabels,
      result: ''
    }),
    computed: {},
    created () {
      this.params = { id: this.id }
      this.fetchProfileById()
    },
    mounted () {
    },
    methods: {
      fetchProfileById () {
        axios.get(`http://localhost:8085/profile-management/${this.endpoint}`, {params: this.params})
          .then(({data}) => {
            this.result = JSON.stringify(data, '', 2)
          })
      }
    }
  }
</script>

<style scoped lang="scss">
  h1 {
    font-weight: normal;
  }
</style>
