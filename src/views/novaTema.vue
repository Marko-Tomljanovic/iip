<template>
  <div class="form-field col-lg-8 mx-auto contact-form mt-1">
    <h4 class="col-3 mt-4 mx-auto">Nova tema</h4>
    <input
      id="naslov"
      v-model="naslov"
      placeholder="Naslov teme"
      class="input-text js-input col-11 mt-5"
      type="text"
    />
    <input
      id="opis"
      v-model="opis"
      placeholder="Opis teme"
      class="input-text js-input col-11 mt-5"
      type="text"
    />
    <b-button
      style="background-color:#3377ff; border:none"
      class="mt-5"
      @click="ucitajTemu"
      >Učitaj</b-button
    >
  </div>
</template>

<script>
import { db } from "@/firebase";
import store from "@/store";

export default {
  name: "Forum",
  data() {
    return {
      naslov: "",
      opis: "",
    };
  },
  methods: {
    ucitajTemu() {
      db.collection("teme")
        .doc(this.naslov)
        .set({
          opis: this.opis,
          korisnik: store.trenutniKorisnik,
          vrijemeObjaveTeme: Date.now(),
        })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.naslov = "";
          this.opis = "";
          this.$router.replace("/Forum");
        })
        .catch((e) => {
          console.error(e);
        });
      console.log("Osvrt je učitan");
    },
  },
};
</script>

<style scoped>
.contact-form .input-text {
  display: block;
  width: 100%;
  height: 36px;
  border-width: 0 0 2px 0;
  border-color: #2677a7;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
}
.contact-form .input-text:focus {
  outline: none;
}
</style>
