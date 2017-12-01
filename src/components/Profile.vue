<template lang="pug">
  .profile-details
    h1 {{ msg }}
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Profile',
    components: {},
    props: {
      id: {
        type: String,
        default: '0'
      }
    },
    data () {
      return {
        msg: 'Details Profile',
        params: [],
        endpoint: 'person'
      }
    },
    computed: {},
    created () {
      this.params = { id: this.id }
      this.fetchProfileById()
    },
    mounted () {
    },
    methods: {
      fetchProfileById () {
        axios.get(`http://localhost:8083/profile-management/${this.endpoint}`, {params: this.params})
          .then(({data}) => {
            this.msg = JSON.stringify(data, '', 2)
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
