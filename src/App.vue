<template>
  <div id="App">
    <div>
      <div>
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
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
    <router-view />
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

<style></style>
