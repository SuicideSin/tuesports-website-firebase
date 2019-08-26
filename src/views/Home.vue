<template>
  <v-layout v-resize="onResize" column>
    <v-parallax
      dark
      src="https://cdn.vodafone.co.uk/en/assets/images/large2X/IMG_Background_Bokeh_Red.jpg"
      :height="windowSize.y"
    >
      <v-container>
        <v-layout fill-height row wrap justify-space-around>
          <v-flex xs12 md6>
            <v-layout fill-height align-center justify-center>
              <v-img src="./logo.png" contain max-height="214px" max-width="400px" />
            </v-layout>
          </v-flex>
          <v-flex xs12 md6 align-self-center>
            <p
              class="subheading text-lg-right text-sm-center"
              style="margin-bottom:-5px;"
            >Welcome to the official unofficial website for the</p>
            <h6 class="display-3 text-lg-right text-sm-center">Temple University <br v-if="$vuetify.breakpoint.xsOnly"> Esports Club</h6>
          </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>
    <v-divider></v-divider>
    <br />
    <br />
    <h2 class="display-3 font-weight-light text-sm-center font-italic">Testimonials</h2>
    <br />
    <br />
    <v-layout row fill-height wrap justify-space-around>
      <v-flex xs11 md3 :key="item.name" pb-5 v-for="item in testimonials">
        <Testimonial
          :name=item.name
          :rating=item.rating
          :text=item.text
        />
      </v-flex>
    </v-layout>
    <br>
    <br />
    <br>
    <v-sheet class="hidden-sm-and-down" :min-width="windowSize.y" color="blue-grey lighten-1" :min-height="windowSize.y/2">
      <v-layout column fill-height justify-center>
        <v-flex xs4>
          
        </v-flex>
        <v-flex xs4 style="padding-top:150px;">
          <a href="https://discord.gg/tuesports">
      <h2 class="display-3 font-weight-bold text-sm-center white--text"><u>Big Fat Discord Invite Link</u></h2>
          </a>
      <p
              class="subheading text-sm-center white--text font-weight-light"
              style="margin-bottom:-5px;"
            >There would be a widget here but a <i>certain someone</i> changed all the discord permissions.</p>
        </v-flex>
                <v-flex xs4>
          
        </v-flex>
      </v-layout>
    </v-sheet>
    <div style="padding-bottom: 100px;"></div>
  </v-layout>
</template>

<script>
import Testimonial from "../components/Testimonial"
export default {
  components: {
    Testimonial,
  },

  data: () => ({
    windowSize: {
      x: 0,
      y: 0
    },
    testimonials: [
      {
        rating: 3,
        name: "Sweta Prasad",
        text: "No Rocket League inhouses but hey Malvin's really cool. 3/5"
      },
      {
        rating: 5,
        name: "Thomas Chin",
        text: "I never go on when there's drama so I only experience the good parts. 5/5"
      },
      {
        rating: 3.5,
        name: "Brett LeClair",
        text: "Lots of snacks but no traps (@QNA). 7/11"
      }
    ]
  }),

  mounted() {
    this.onResize();
  },

  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    }
  }
};
</script>
<style>

</style>