<template>
  <div id="about"><stars-rating v-bind="config"></stars-rating></div>
</template>

<script>
import starsRating from "@/components/rating-stars";
export default {
  name: "about",
  components: {
    starsRating: starsRating,
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
    };
  },
  computed: {},
  methods: {},
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
