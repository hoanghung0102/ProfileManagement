<template lang="pug">
  div.acb
    ba(cho="Cho", meo="Meo")

</template>

<script>
  import Ba from '@/components/InheriAttributes/Ba'

  export default {
    components: {Ba}
  }
</script>

<style scoped lang="scss">
  div.acb {
    border: 1px solid red;
    padding: 3px;
  }
</style>
