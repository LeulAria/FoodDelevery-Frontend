<template>
    <v-app-bar app elevation="0">
      <router-link to="/" style="text-decoration: none">
        <div class="app-logo d-flex align-center">
          Deliver
        </div>
      </router-link>

      <v-spacer></v-spacer>

      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        flat
        hide-no-data
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search from message"
        solo-inverted
      ></v-autocomplete>

      <v-spacer></v-spacer>

      <router-link v-if="!isLoggedIn" to="signin" style="text-decoration: none">
        <v-btn
          text
        >
          <span class="mr-2">Login</span>
        </v-btn>
      </router-link>

      <router-link v-if="!isLoggedIn" to="signup" style="text-decoration: none">
        <v-btn
          text
        >
          <span class="mr-2">Signup</span>
        </v-btn>
      </router-link>

      <v-btn
        text
        @click="logout"
        v-if="isLoggedIn"
      >
        <span class="mr-2">Logout</span>
      </v-btn>
    </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import authApi from '@/api/Auth'

@Component({
  computed: {
    ...mapGetters("user", ["isLoggedIn", "userInfo", "user"]),
  },
  methods: {
    ...mapActions("user", ["logOut"]),
  },
})

export default class App extends Vue {

  loading = false;
  items = [];
  search = null;
  select = [];
  
  
  isLoggedIn!: boolean;

  logout() {
    authApi.logout();
    localStorage.clear();
    window.location.reload();
    this.$router.push({ name: "Home" });
  }
}
</script>

<style lang="stylus" scoped>
  .app-logo
    text-transform uppercase
    font-weight: 900;
    font-size: 1.5rem
    color: rgb(248,96,115)
    border-bottom 1px solid rgb(248,96,115) 
</style>