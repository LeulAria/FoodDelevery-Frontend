<template>
  <v-app>
    <app-bar />

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <app-footer />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";

@Component({
  components: {
    "app-bar": Navbar,
    "app-footer": Footer
  },
  computed: {
  },
})
export default class App extends Vue {

}
</script>
