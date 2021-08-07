<template>
  <v-container>
    <h1 class="form-header-title">Signup</h1>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="form-container"
    >
      <v-text-field
        v-model="name"
        :rules="nameRules"
        flat
        solo-inverted
        append-icon="mdi-account"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="phone"
        :rules="phoneRules"
        flat
        solo-inverted
        append-icon="mdi-phone"
        label="Phone Number"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        flat
        solo-inverted
        append-icon="mdi-email"
        label="E-mail"
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

      <ul>
        <li>
          <small>lowercase letter(a-z)</small>
        </li>
        <li>
          <small>capital letters(A-Z)</small>
        </li>
        <li>
          <small>Numbers (0-9)</small>
        </li>
        <li>
          <small>Special Characters(!!@$#@%$^%&*)</small>
        </li>
      </ul>

      <br />

      <v-btn
        :disabled="!valid"
        color="#F85E72"
        class="mr-4 btn"
        block
        medium
        :loading="loading"
        elevation="0"
        @click="validate"
      >
        Signup
      </v-btn>
      <div class="mt-4"></div>
      <div>
        <a class="forgot-password-link" >Already a member?</a>
      </div>
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
    name: "",
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    phone: "",
    phoneRUle: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),

  methods: {
    validate () {
      this.$refs.form.validate()

      const user = {
        "username": this.name,
        "email": this.email,
        "password1": this.password,
        "password2": this.password,
      }

      this.loading = true;
      authApi.register(user)
      .then((res) => {
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