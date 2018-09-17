<template lang="pug">
  div.input-text
    input(v-model="userInput")
  div.display-message
    span {{ message | concat userInput}}
</template>

<script>
  export default {
    name: 'Profile',
    components: {},
    props: {},
    data: () => ({
      message: '',
      userInput: ''
    }),
    computed: {},
    created () {},
    mounted () {},
    methods: {}
  }
</script>

<style scoped lang="scss">
</style>
