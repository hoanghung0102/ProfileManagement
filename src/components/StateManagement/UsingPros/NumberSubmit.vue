<template lang="pug">
  div.submit-number
    input(v-model="number")
    button.btn.btn-primary(@click="addNumber(number)") Add
</template>
<script>
  export default {
    name: 'NumberSubmit',
    components: {},
    props: {
      numbers: Array
    },
    data: () => ({
      number: ''
    }),
    methods: {
      addNumber (number) {
        this.numbers.push(+number)
      }
    }
  }
</script>

<style scoped lang="scss">
  input {
    margin-right: 5px;
  }
</style>
