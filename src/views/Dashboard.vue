<template>
  <v-container style="min-height: 100vh">
    <h1 style="text-align: center; margin-top: 10vh; font-size: 4rem">DASHBOARD</h1>
    <h3 style="text-align: center;">{{ user.email }}</h3>
    <h3 style="text-align: center;">{{ user.username }}</h3>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters("user", ["user"]),
  },
})

export default class App extends Vue {
  user!: any;
}
</script>


<style lang="stylus" scoped>

</style>