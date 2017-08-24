<template lang="pug">
  .profile-details
    h1 {{ msg }}
</template>

<script>
export default {
  name: 'ProfileManagement',
  data () {
    return {
      msg: 'Details Profile'
    }
  }
}
</script>

<style scoped lang="scss">
h1 {
  font-weight: normal;
}
</style>
