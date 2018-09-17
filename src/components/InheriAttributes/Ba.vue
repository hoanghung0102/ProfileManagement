<template lang="pug">
  div
    label value: {{ cho }}
    chau(:meo=meo)
</template>

<script>
  import Chau from '@/components/InheriAttributes/Chau'
  export default {
    name: 'Profile',
    components: {Chau},
    props: {
      cho: String,
      meo: String
    },
    computed: {
      meoValue () {
        return this.meo
      }
    },
    inheritAttrs: true
  }
</script>
