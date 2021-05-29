<template>
  <dir class="container">
    <div id="about"><stars-rating v-bind="config"></stars-rating></div>
    <section>
      <VueHorizontal responsive>
        <b-card
          v-for="card in cards"
          :key="card"
          :title="title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          :tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </VueHorizontal>
    </section>

    <b-button @click="funk()">LOG</b-button>
  </dir>
</template>

<script>
import starsRating from "@/components/rating-stars";
import VueHorizontal from "vue-horizontal";

export default {
  name: "about",
  components: {
    starsRating: starsRating,
    VueHorizontal,
  },
  data() {
    return {
      config: {
        rating: 4.1,
        isIndicatorActive: true,
        starStyle: {
          fullStarColor: "#ffee00",
          emptyStarColor: "#dddddd",
          starWidth: 50,
          starHeight: 50,
        },
      },
      cards: [
        {
          title: "marko",
          article: "j",
        },
        { title: "janko", article: "a" },
        { title: "bruno", article: "r" },
        { title: "filip", article: "r" },
        { title: "goran", article: "r" },
        { title: "navojec", article: "r" },
      ],
    };
  },
  methods: {
    funk() {
      this.$swal("alert!");
    },
  },
  created() {},
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
