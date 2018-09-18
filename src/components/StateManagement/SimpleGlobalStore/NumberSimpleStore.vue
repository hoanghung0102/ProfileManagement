<template lang="pug">
  div.submit-number
    input(v-model="number")
    button.btn.btn-primary(@click="addNumber(number)") Add
</template>

<script>
  import { simpleStore } from '@/simple-store'

  export default {
    name: 'NumberSimpleStore',
    components: {},
    props: {},
    data: () => ({
      number: ''
    }),
    methods: {
      addNumber (number) {
        simpleStore.addNumber(number)
      }
    }
  }
</script>

<style scoped lang="scss">
  input {
    margin-right: 5px;
  }
</style>
