<template lang="pug">
  #app
    .container
      router-view
      .row.footer
        .col
          .footer-text &copy; Vue 2 - {{ new Date().toDateString() }}
</template>

<script>
  import Navigator from './components/navigator/Navigator.vue'

  export default {
    name: 'app',
    component: {Navigator}
  }
</script>

<!--Global setting for application-->
<style lang="scss">
  @import "./assets/fonts";
  @import "./assets/variables.scss";
  @import "~bootstrap/scss/bootstrap";

  html, body {
    font-size: $font-size;
  }

  body {
    color: $text-color;
  }

  button {
    cursor: pointer;

    &.btn {
      width: 70px;
      padding: 0 15px;
      margin: 2px;
    }
  }

  h2.line {
    border-bottom: 1px solid $border-color;
  }
</style>

<!--Owner setting for current-->
<style scoped lang="scss">
  @import "./assets/variables.scss";

  .container {
    min-height: calc(100vh - 50px);
    padding: 50px 10px;
    background-color: #f4fbf5;

    .row.footer {
      margin-top: 10px;
    }
  }
</style>
