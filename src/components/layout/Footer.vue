<template>
  <v-footer class="footer">
    <v-row class="my-4">
      <v-col sm="12" md="6" lg="3">
        <h1>DELEVER</h1>
        <img width="130px" src="@/assets/footer-appstore.png" alt="download app from store.">
      </v-col>
      <v-col sm="12" md="6" lg="3">
        <h4 class="footer-header-text">Legal</h4>
        <p>Privecy</p>
        <p>Policies</p>
        <p>Cookies</p>
        <p>Terms and conditions</p>
      </v-col>
      <v-col sm="12" md="6" lg="3">
        <h4 class="footer-header-text">Help</h4>
        <p>Help Center</p>
        <p>Contact Us</p>
        <p>Restaurants</p>
        <p>User Orders</p>
      </v-col>
      <v-col sm="12" md="6" lg="3">
        <h4 class="footer-header-text">Legal</h4>
        <p>Privecy</p>
        <p>Policies</p>
        <p>Cookies</p>
        <p>Terms and conditions</p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  computed: {
  },
})
export default class Footer extends Vue {

}
</script>

<style lang="stylus" scoped>
.footer-header-text
  margin-bottom 1rem
</style>