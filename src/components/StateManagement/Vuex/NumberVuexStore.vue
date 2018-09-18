<template lang="pug">
  div.submit-number
    input(v-model="number")
    button.btn.btn-primary(@click="addNumber(number)") Add
</template>

<script>
  export default {
    name: 'NumberVuexStore',
    components: {},
    props: {},
    data: () => ({
      number: ''
    }),
    methods: {
      addNumber (number) {
        this.$store.dispatch('addNumber', +number)
      }
    }
  }
</script>

<style scoped lang="scss">
  input {
    margin-right: 5px;
  }
</style>
