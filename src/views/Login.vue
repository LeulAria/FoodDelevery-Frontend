<template>
  <v-container>
    <h1 class="form-header-title">Signin</h1>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="form-container"
    >
      <v-text-field
        v-model="email"
        :rules="emailRules"
        flat
        solo-inverted
        append-icon="mdi-email"
        label="E-mail or Username"
        required
      ></v-text-field>
      
      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        :rules="nameRules"
        bottom
        flat
        solo-inverted
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="#F85E72"
        class="mr-4 btn"
        block
        medium
        elevation="0"
        :loading="loading"
        @click="validate"
      >
        Login
      </v-btn>
      <div class="mt-4"></div>
      <div>
        <a class="forgot-password-link" >Forgot Password?</a>
      </div>
      <v-btn
        color="#EEE"
        style="color: #333"
        :disabled="!valid"
        class="mr-4 btn"
        block
        elevation="0"
        @click="validate"
      >
        Create an account
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import authApi from '@/api/Auth'

export default {
  data: () => ({
    valid: true,
    show1: false,
    loading: false,
    password: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length > 4) || 'Password must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail or Username is required',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
      const user = {};
      if(this.email.includes('@')) {
        user.email = this.email;
      } else {
        user.username = this.email;
      }
      user.password = this.password;
      this.loading = true;
      authApi.login(user)
      .then((res) => {
        console.log("RESULT HERE: ", res)
        this.loading = false;
        this.$store.dispatch("user/setUser", res);
        this.$router.push({ name: "Dashboard" });
      });
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>

<style lang="stylus" scoped>
.form-container
  width: 70%
  max-width 450px
  margin auto
  min-height 80vh
.form-header-title
  text-align center
  margin-bottom 1rem
  color #F85E72
.btn
  border-radius 10px
  color: #FFF
  padding 10px
.forgot-password-link
  display block
  margin-bottom 5px
  marign auto
  text-align center
</style>