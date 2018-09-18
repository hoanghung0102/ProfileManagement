<template lang="pug">
  div.display-number-after-submit
    span {{ numbers }}
    hr
    number
</template>

<script>
  import Number from '@/components/StateManagement/UsingEventBus/Number'
  import { EventBus } from '@/event-bus'

  export default {
    name: 'DisplayNumberEventBus',
    components: {Number},
    data: () => ({
      numbers: [1, 2, 3]
    }),
    created () {
      EventBus.$on('number-added', number => { this.addNumber(number) })
    },
    methods: {
      addNumber (number) {
        console.log(number)
        this.numbers.push(number)
      }
    }
  }
</script>

<style scoped lang="scss">
  div.display-number-after-submit {
    padding: 3px;
  }
</style>
