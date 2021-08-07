<template>
  <v-container fluid>
    <v-row dense class="hero-section" >
      <v-col sm="12" md="6" class="px-7">
        <h1 class="hero-title">
          It's the food you love,
          <br />
          deleivered
        </h1>
        <p class="hero-paragraph">Please Indeicate your address so that we can offer you the best restaurants and the best service .</p>
        <div class="hero-input-field">
          <v-text-field
            flat
            solo
            class="hero-input"
            append-icon="mdi-account"
            label="Name"
            required
          ></v-text-field>
          <v-btn
            color="#F85E72"
            class="hero-input-search"
          >
            Search
          </v-btn>
        </div>
      </v-col>
      <v-col sm="12" md="6" class="px-7">
        <img src="@/assets/delevery.svg" width="100%" />
      </v-col>
    </v-row>
    <div class="my-10"></div>
    <div class="youtube-player">
      <youtube :player-width="640" style="width: 80%" :video-id="videoId"></youtube>
    </div>
    <v-row>
      <v-col sm="12" md="6">
        <h1>
          It's the food you love,
          <br />
          delevered
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quis? Maiores quis quae, praesentium error, nesciunt labore aliquid ratione magnam libero, quibusdam quidem quod minima sit at animi eveniet reprehenderit dicta vel fuga asperiores! Facere blanditiis dicta numquam ex porro neque, dolorem illo vel natus, dolores earum! Nam architecto veniam est tempore, iste dolor maxime nihil deserunt sint labore doloribus voluptatibus sunt magnam recusandae quod porro vero veritatis numquam deleniti sit incidunt. Perspiciatis error adipisci totam distinctio modi inventore ex hic, laborum voluptatum aliquid vero est quasi quam beatae.</p>
        <img width="340px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcerr2SWYq1l2OXV-OpH_CFRYP3FLZ9ypRg&usqp=CAU" alt="">
      </v-col>
    <v-col sm="12" md="6" >
      <img style="border-radius: 10px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMgiLi_lbKC8eRg0MudRfDg9sYDwP_g6x65rnsWDUqHmZzhW46-QWbjTVHCB4_TbhpLc&usqp=CAU" width="100%" alt="">
    </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({  })
export default class Home extends Vue {
  videoId = "MXc7Qwpdzis"
};
</script>


<style lang="stylus" scoped>
.hero-section
  padding 5rem 0 6rem
.hero-title
  font-size 3rem
  color rgb(248,96,115)
.hero-paragraph
  font-size 1.2rem


.hero-input-field
  display flex
  height 55px
  border-radius 10px
  border 3px solid #D3D2D2
  z-index 200

.hero-input
  height 50px
  font-weight 600
  border-radius 10px
.hero-input-search
  color #FFF
  border-radius 0
  margin-right -3px
  border-top-right-radius 7px
  border-bottom-right-radius 7px
  height 50px !important
  font-weight 700

.youtube-player
  display flex
  margin 4rem 1rem
  justify-content center
</style>