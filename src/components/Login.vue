<template lang="pug">
  .login-form
    h1 {{ title }}
    h2.line

    div.shadow.border-form
      div.error-msg(v-show="errMsg")
        span {{ errMsg }}
      form(v-on:submit.prevent="reqLogin")
        .form-group.row
          label.col-sm-2.col-form-label(for='username') Username
          .col-sm-10
            input#inputEmail3.form-control(required, placeholder='Username', v-model="params.username")
        .form-group.row
          label.col-sm-2.col-form-label(for='password') Password
          .col-sm-10
            input#inputPassword3.form-control(required, placeholder='Password', v-model="params.password", type="password")
        .form-group.row
          .offset-sm-2.col-sm-10
            button.btn.btn-primary(type='submit') Sign in
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Login',
    components: {},
    data: () => ({
      title: 'Login',
      endpoint: 'login',
      result: '',
      params: {username: '', password: ''},
      errMsg: ''
    }),
    computed: {},
    created () {},
    mounted () {},
    methods: {
      reqLogin () {
        axios.post(`http://localhost:8085/profile-management/${this.endpoint}`, JSON.stringify(this.params),
          {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(({data}) => {
            if (data) {
              this.$router.push('/home')
            } else {
              this.$router.push({path: '/login', params: {errMsg: this.errMsg}})
            }
          })
          .catch((err) => {
            console.log(err.response)
          })
      }
    }
  }
</script>

<style scoped lang="scss">
  h1 {
    font-weight: normal;
  }

  form {
    margin: 20px 0 20px 20px;
    width: 80%;
  }

  .border-form {
    border: 1px solid #b198ca44;
    border-radius: 5px;
    background: #eaedf1;
    box-shadow: 6px 6px 5px #888;
  }

  .error-msg {
    color: red;
    text-align: left;
  }

  .btn {
    width: 20%;
    padding: 3px;
  }
</style>

