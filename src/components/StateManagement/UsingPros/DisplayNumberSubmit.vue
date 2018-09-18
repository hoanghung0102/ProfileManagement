<template lang="pug">
  div.diplay-number-after-submit
    span {{ numbers }}
    hr
    number-submit(:numbers="numbers")
</template>

<script>
  import NumberSubmit from '@/components/StateManagement/UsingPros/NumberSubmit'

  export default {
    name: 'DisplayNumberSubmit',
    components: {NumberSubmit},
    data: () => ({
      numbers: [1, 2, 3]
    })
  }
</script>

<style scoped lang="scss">
  div.diplay-number-after-submit {
    border: 1px solid red;
    padding: 3px;
  }
</style>
