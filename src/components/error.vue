<template>
  <div class="container"><h5 class="col-2 mx-auto">404 error</h5></div>
</template>

<script>
export default {
  name: "stranicaNijePronadena",
  mounted() {
    this.$alert("404 Error, stranica nije pronađena!");
  },
};
</script>
