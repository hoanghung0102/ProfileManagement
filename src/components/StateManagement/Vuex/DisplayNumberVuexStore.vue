<template lang="pug">
  div.display-number-after-submit
    span {{ numbers }}
    hr
    number-vuex-store
</template>

<script>
  import NumberVuexStore from '@/components/StateManagement/Vuex/NumberVuexStore'

  export default {
    name: 'DisplayNumberVuexStore',
    components: {NumberVuexStore},
    computed: {
      numbers () {
        return this.$store.getters.getNumbers
      }
    },
    data: () => ({}),
    methods: {}
  }
</script>

<style scoped lang="scss">
  div.display-number-after-submit {
    padding: 3px;
  }
</style>
