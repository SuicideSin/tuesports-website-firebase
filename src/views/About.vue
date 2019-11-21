<template>
  <div color="blue-grey lighten-1">
    <v-container>
      <v-row align-content="center">
        <v-col> <p class="display-3 text-center">About Us</p></v-col>
      </v-row>
      <v-divider class="pb-4"></v-divider>
      <v-row align-content="center">
        <v-col> <p class="display-2 text-center">Esports Board</p></v-col>
      </v-row>
      <v-row>
        <v-col v-for="(person, index) in board1" :key="index"
          ><ImageCard :card="person" animated="fadeIn" />
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(person, index) in board2" :key="index"
          ><ImageCard :card="person" animated="fadeIn" />
        </v-col>
      </v-row>
      <v-divider class="pb-4"></v-divider>
      <v-row align-content="center">
        <v-col> <p class="display-2 text-center">PR Team</p></v-col>
      </v-row>
      <v-row align-content="center">
        <v-col sm="3" v-for="(item, index) in pr" :key="index"
          ><ImageChip :item="item"
        /></v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import ImageCard from "../components/ImageCard";
import ImageChip from "../components/ImageChip";
export default {
  components: {
    ImageCard,
    ImageChip
  },
  data() {
    return {
      board1: [
        {
          title: "Malvin",
          subtitle: "Ausii",
          desc: "President of the Esports Club. Plays a lot of OSU.",
          img: "./head.png"
        },
        {
          title: "Sweta",
          subtitle: "CHOCOLATE",
          desc: "Vice President and Evemts Coordinator. Fun gal.",
          img: "./sweta.jpg"
        },
        {
          title: "Ty",
          subtitle: "WizKid",
          desc: "Officer. Leader of the PR Team. Top 500 Overwatch player.",
          img: "./wizkid.jpg"
        }
      ],
      board2: [
        {
          title: "Ryan",
          subtitle: "Avro",
          desc: "Officer. Talks in chat sometimes.",
          img: "./head.png"
        },
        {
          title: "Brett",
          subtitle: "Zenlos",
          desc: "Officer. Pretty good at Rocket League.",
          img: "./head.png"
        },
        {
          title: "Ewing",
          subtitle: "BasilPanda",
          desc: "Discord Manager. Tyrant.",
          img: "./head.png"
        }
      ],
      pr: [
        {
          title: "Thomas",
          subtitle: "Stones24",
          desc: "Web developer. God of this website.",
          img:
            "https://scontent.fewr1-6.fna.fbcdn.net/v/t1.0-9/42702448_2247040531990836_5883124306593972224_n.jpg?_nc_cat=103&_nc_ohc=JqH_YXMNqxQAQnNG2iSsPIen8brXIrfrwQo3_i-7Cp0Cyr6TJuIJ4MAHQ&_nc_ht=scontent.fewr1-6.fna&oh=35d8e1025a72ceaa023261a202ffbdae&oe=5E4CBF8C"
        },
        {
          title: "Demi",
          subtitle: "gunstrings",
          desc: "Graphic Designer. Smol bunny.",
          img: "./demi.jpg"
        },
        {
          title: "Jake",
          subtitle: "MLGjakeg",
          desc: "Photographer. Takes pictures.",
          img: "./head.png"
        },
        {
          title: "Abby",
          subtitle: "kiseki_ace",
          desc:
            "Social Media Manager and leader of Merchandise. Professional Cosplayer.",
          img: "./head.png"
        },
        {
          title: "Steve",
          subtitle: "sir1650",
          desc: "President of the Ambler Esports Club.",
          img: "./head.png"
        },
        {
          title: "Mel",
          subtitle: "crispy",
          desc: "Graphic Designer. Makes buttons.",
          img: "./head.png"
        },
        {
          title: "Nadya",
          subtitle: "needle",
          desc: "Events coordinator. Friendliest person in the Discord.",
          img: "./head.png"
        },
        {
          title: "Antony",
          subtitle: "GeTroLLeDBro",
          desc: "Video Editor. Memer.",
          img: "./head.png"
        }
      ]
    };
  }
};
</script>
