<template>
  <div id="App">
    <div>
      <div>
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
            <b-nav-item to="/">Početna</b-nav-item>
            <b-nav-item to="/forum">Forum</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item v-if="!store.trenutniKorisnik" to="/prijava">
              Prijava</b-nav-item
            >
            <b-nav-item v-if="store.trenutniKorisnik" @click="odjava">
              Odjava</b-nav-item
            ></b-navbar-nav
          >
        </b-navbar>
      </div>
    </div>
    <transition name="router-anim" enter-active-class="animated fadeIn">
      <router-view
    /></transition>
  </div>
</template>

<script>
import { firebase } from "@/firebase";
import store from "@/store";

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log("**********", user.email);
    store.trenutniKorisnik = user.email;
  } else {
    console.log("No user");
    store.trenutniKorisnik = null;
  }
});

export default {
  name: "App",
  data() {
    return {
      store,
    };
  },
  methods: {
    odjava() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "prijava" });
        });
    },
  },
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
  color: black;
}
</style>
