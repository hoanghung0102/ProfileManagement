<template lang="pug">
  div.display-number-after-submit
    span {{ storeState.numbers }}
    hr
    number-simple-store
</template>

<script>
  import { simpleStore } from '@/simple-store'
  import NumberSimpleStore from '@/components/StateManagement/SimpleGlobalStore/NumberSimpleStore'

  export default {
    name: 'DisplayNumberSimpleStore',
    components: {NumberSimpleStore},
    data: () => ({
      storeState: simpleStore.state
    }),
    methods: {}
  }
</script>

<style scoped lang="scss">
  div.display-number-after-submit {
    padding: 3px;
  }
</style>
