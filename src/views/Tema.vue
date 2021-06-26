<template>
  <div class="container">
    <h4 class="mx-auto col-4 mt-4 mb-4">{{ this.$route.params.id }}</h4>
    <komentar
      v-for="(izv, index) in karticaKomentari"
      :key="index.naslov"
      :tema="izv.naslov"
      :vrijeme="izv.vrijemeObjaveKomentara"
      :komentar="izv.komentar"
      :korisnik="izv.korisnik"
    ></komentar>
    <div v-if="!store.trenutniKorisnik" class="card mt-3">
      <h5 class="mx-auto">Prijavite se kako bi komentirali</h5>
    </div>
    <div
      v-if="store.trenutniKorisnik"
      class="card mt-3"
      style="background-color:#e6eeff"
    >
      <h6 class="mb-1 mt-3 px-4">
        {{ karticaKomentari.naslov }}
        <p class="float-right mt-1 text-secondary">
          Post
        </p>
      </h6>
      <b-form-textarea
        style="border-radius: 8px;"
        class="col-11 mb-2 mx-auto text-secondary"
        id="textarea"
        v-model="komentar"
        placeholder="Upiši post.."
        rows="2"
        max-rows="7"
      ></b-form-textarea>
      <b-button
        class="btn col-11 mx-auto mb-3"
        @click="ucitajKomentar"
        style="background-color: #3377ff; border-color:#2677a7"
        >Objavi</b-button
      >
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";
import komentar from "@/components/komentar";
import moment from "moment";
import store from "@/store";

export default {
  components: {
    komentar,
  },
  data() {
    return {
      karticaKomentari: [],
      store,
      komentar: "",
    };
  },
  methods: {
    dohvatiKomentare() {
      db.collectionGroup("komentari")
        .where("naslov", "==", this.$route.params.id)
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const dataK = doc.data();
            this.karticaKomentari.push({
              komentar: dataK.komentar,
              naslov: dataK.naslov,
              korisnik: dataK.korisnik,
              vrijemeObjaveKomentara: moment(dataK.vrijemeObjave).format(
                "DD-MM-YYYY"
              ),
            });
          });
        });
    },
    ucitajKomentar() {
      db.collection("teme")
        .doc(this.$route.params.id)
        .collection("komentari")
        .add({
          naslov: this.$route.params.id,
          komentar: this.komentar,
          korisnik: store.trenutniKorisnik,
          vrijemeObjaveKomentara: Date.now(),
        })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.komentar = "";
          this.karticaKomentari = [];
          this.dohvatiKomentare();
        })
        .catch((e) => {
          console.error(e);
        });
      console.log("Osvrt je učitan");
    },
  },
  mounted() {
    this.dohvatiKomentare();
  },
};
</script>
