<template lang="pug">
  div
    <input v-bind="$attrs" v-on="$listeners">
</template>
<script>
  export default {
    name: 'Profile',
    components: {},
    props: {
      props: [
        'cho',
        'meo'
      ]
    }
  }
</script>

<style scoped lang="scss">
</style>
