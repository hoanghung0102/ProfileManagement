<template lang="pug">
  .profile-details
    h1 {{ msg }}
</template>

<script>
export default {
  name: 'Profile',
  components: {},
  props: {},
  data () {
    return {
      msg: 'Details Profile'
    }
  },
  computed: {},
  mounted () {
    this.fetchProfileById()
  },
  methods: {
    fetchProfileById () {
      this.msg = 'Under Details Profile'
    }
  }
}
</script>

<style scoped lang="scss">
h1 {
  font-weight: normal;
}
</style>
