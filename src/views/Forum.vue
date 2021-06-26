<template>
  <div class="container">
    <div class="card mx-auto mt-4" style="width: 45rem;">
      <h4 class="mx-auto">Forum</h4>
    </div>
    <div class="card mx-auto mt-4" style="width: 45rem;">
      <b-button
        style="color:white; background-color:#3377ff; border:none"
        to="/novaTema"
        >NOVA TEMA</b-button
      >
    </div>

    <tema
      v-for="(izv, index) in kartica"
      :key="index.tema"
      :tema="izv.tema"
      :link="izv.link"
      :vrijeme="izv.vrijemeObjaveTeme"
      :opis="izv.opis"
    ></tema>
  </div>
</template>

<script>
import { db } from "@/firebase";
import tema from "@/components/tema";
import moment from "moment";

export default {
  components: {
    tema,
  },
  data() {
    return {
      kartica: [],
    };
  },
  methods: {
    dohvati() {
      db.collection("teme")
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const dataK = doc.data();
            this.kartica.push({
              tema: doc.id,
              link: "/tema/" + doc.id,
              naslov: dataK.naslov,
              opis: dataK.opis,
              vrijemeObjaveTeme: moment(dataK.vrijemeObjave).format(
                "DD-MM-YYYY"
              ),
            });
          });
        });
    },
  },
  mounted() {
    this.dohvati();
  },
};
</script>
