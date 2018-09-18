<template lang="pug">
  div.submit-number
    input(v-model="number")
    button.btn.btn-primary(@click="addNumber(number)") Add
</template>

<script>
  import { EventBus } from '@/event-bus'

  export default {
    name: 'Number',
    components: {},
    props: {},
    data: () => ({
      number: ''
    }),
    methods: {
      addNumber (number) {
        EventBus.$emit('number-added', +number)
      }
    }
  }
</script>

<style scoped lang="scss">
  input {
    margin-right: 5px;
  }
</style>
