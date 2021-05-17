<template>
  <b-container fluid>
    <b-row class="my-4 col-8 mx-auto">
      <b-col sm="3">
        <label>Predjeni kilomertri</label>
        <b-form-input
          class="my-2"
          type="number"
          :state="nameState1"
          v-model="predeniKm"
          placeholder="km"
          trim
          aria-describedby="input-live-help input-live-feedback"
        ></b-form-input>
      </b-col>

      <b-col sm="2">
        <label>Potrošnja auta</label>
        <b-form-input
          class="my-2"
          type="number"
          :state="nameState2"
          v-model="potrosnjaAuta"
          placeholder="L/100 Km"
          trim
          aria-describedby="input-live-help input-live-feedback"
        ></b-form-input>
      </b-col>
      <b-col sm="2">
        <label>Cijena 1 goriva</label>
        <b-form-input
          class="my-2"
          type="number"
          :state="nameState3"
          v-model="cijenaGoriva"
          placeholder="Kn"
          trim
          aria-describedby="input-live-help input-live-feedback"
        ></b-form-input>
      </b-col>
      <b-col sm="2">
        <label>Natočeno goriva</label>
        <b-form-input
          class="my-2"
          type="number"
          :state="nameState4"
          v-model="natocenoGorivo"
          placeholder="l"
          trim
          aria-describedby="input-live-help input-live-feedback"
        ></b-form-input>
      </b-col>
      <b-col sm="3">
        <label>Natočeno goriva za novce</label>
        <b-form-input
          class="my-2"
          type="number"
          :state="nameState5"
          v-model="natocenoGorivoZaNovce"
          placeholder="Kn"
          trim
          aria-describedby="input-live-help input-live-feedback"
        ></b-form-input>
      </b-col>

      <b-col class="my-3">
        <div>
          <b-button :disabled="pokazi1" @click="izracunGorivaPremaKilometrima()"
            >Izracun Goriva Prema Kilometrima!</b-button
          >
        </div>
        <br />
        <b-button
          :disabled="pokazi2"
          @click="izracunCijeneGorivaPremaKilometrima()"
          >Izracun Cijene Goriva Prema Kilometrima!</b-button
        ><br /><br />
        <b-button
          :disabled="pokazi3"
          @click="izracunPrelaskaKilometaraPremNatocenomGorivu()"
          >Izračun prelaska kilometara prema natočenim litrama goriva!</b-button
        ><br /><br />
        <b-button
          :disabled="pokazi4"
          @click="izracunPrelaskaKilometaraPremaNatocenomGorivuZaNovce()"
          >Izračun prelaska kilometara prema natočenom gorivu za odredjene
          novce!</b-button
        >
        <br /><br />
        <b-button
          :disabled="pokazi5"
          @click="izracunPotrosnjeAutaPremaNatocenomGorivuZaNovce()"
          >Izračun potrošnje auta prema natočenom gorivu za odredjene
          novce!</b-button
        >
        <br /><br />
        <b-button
          :disabled="pokazi6"
          @click="izracunPotrosnjeAutaPremaNatocenomGorivu()"
          >Izračun potrošnje auta prema natočenim litrama goriva!</b-button
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      predeniKm: "",
      potrosnjaAuta: "",
      cijenaGoriva: "",
      natocenoGorivo: "",
      natocenoGorivoZaNovce: "",
      pokazi1: true,
      pokazi2: true,
      pokazi3: true,
      pokazi4: true,
      pokazi5: true,
      pokazi6: true,
    };
  },
  methods: {
    otvori1() {
      if (this.predeniKm != false && this.potrosnjaAuta != false) {
        return (this.pokazi1 = false);
      }
    },
    otvori2() {
      if (
        this.predeniKm != false &&
        this.potrosnjaAuta != false &&
        this.cijenaGoriva != false
      ) {
        return (this.pokazi2 = false);
      }
    },
    otvori3() {
      if (this.natocenoGorivo != false && this.potrosnjaAuta != false) {
        return (this.pokazi3 = false);
      }
    },
    otvori4() {
      if (
        this.natocenoGorivoZaNovce != false &&
        this.cijenaGoriva != false &&
        this.potrosnjaAuta != false
      ) {
        return (this.pokazi4 = false);
      }
    },
    otvori5() {
      if (
        this.cijenaGoriva != false &&
        this.natocenoGorivoZaNovce != false &&
        this.predeniKm != false
      ) {
        return (this.pokazi5 = false);
      }
    },
    otvori6() {
      if (this.predeniKm != false && this.natocenoGorivo != false) {
        return (this.pokazi6 = false);
      }
    },
    sakrij1() {
      return (this.pokazi1 = true);
    },
    sakrij2() {
      return (this.pokazi2 = true);
    },
    sakrij3() {
      return (this.pokazi3 = true);
    },
    sakrij4() {
      return (this.pokazi4 = true);
    },
    sakrij5() {
      return (this.pokazi5 = true);
    },
    sakrij6() {
      return (this.pokazi6 = true);
    },
    izracunGorivaPremaKilometrima() {
      let rez;
      rez = (this.potrosnjaAuta / 100) * this.predeniKm;
      alert(
        "Kako bi prešli " +
          this.predeniKm +
          " Km potrebno Vam je " +
          rez.toFixed(1) +
          " L goriva"
      );
    },
    izracunCijeneGorivaPremaKilometrima() {
      let rez, a;
      a = (this.potrosnjaAuta / 100) * this.predeniKm;
      rez = a * this.cijenaGoriva;
      alert("Cijena za unesene podatke iznosi " + rez.toFixed(2) + " Kn");
    },
    izracunPrelaskaKilometaraPremNatocenomGorivu() {
      let rez;
      rez = (100 / this.potrosnjaAuta) * this.natocenoGorivo;
      alert(
        "Sa " +
          this.natocenoGorivo +
          " l natočenog goriva se može prijeći " +
          rez.toFixed(2) +
          " Km"
      );
    },
    izracunPrelaskaKilometaraPremaNatocenomGorivuZaNovce() {
      let rez, a;
      a = (this.natocenoGorivoZaNovce / this.cijenaGoriva) * 100;
      rez = a / this.potrosnjaAuta;
      alert(
        "Sa " +
          this.natocenoGorivoZaNovce +
          " kn natočenog goriva možete prijeći " +
          rez.toFixed(2) +
          " Km"
      );
    },
    izracunPotrosnjeAutaPremaNatocenomGorivuZaNovce() {
      let rez, a;
      a = (this.natocenoGorivoZaNovce / this.cijenaGoriva) * 100;
      rez = a / this.predeniKm;
      alert("Vaš auto troši " + rez.toFixed(2) + " l/100 km");
    },
    izracunPotrosnjeAutaPremaNatocenomGorivu() {
      let rez;
      rez = (this.natocenoGorivo / this.predeniKm) * 100;
      alert("Vaš auto troši " + rez.toFixed(2) + " l/100 km");
    },
  },
  computed: {
    nameState1() {
      if (this.predeniKm > 0) {
        this.otvori1();
        this.otvori6();
        return this.predeniKm ? true : false;
      } else if (this.predeniKm < 0) {
        return this.predeniKm ? false : true;
      } else {
        this.sakrij1();
        this.sakrij2();
        this.sakrij5();
        this.sakrij6();
        return null;
      }
    },
    nameState2() {
      if (this.potrosnjaAuta > 0) {
        this.otvori1();
        this.otvori2();
        return this.potrosnjaAuta ? true : false;
      } else if (this.potrosnjaAuta < 0) {
        return this.potrosnjaAuta ? false : true;
      } else {
        this.sakrij1();
        this.sakrij2();
        this.sakrij3();
        this.sakrij4();
        return null;
      }
    },
    nameState3() {
      if (this.cijenaGoriva > 0) {
        this.otvori1();
        return this.cijenaGoriva ? true : false;
      } else if (this.cijenaGoriva < 0) {
        return this.cijenaGoriva ? false : true;
      } else {
        this.sakrij2();
        this.sakrij4();
        this.sakrij5();
        return null;
      }
    },
    nameState4() {
      if (this.natocenoGorivo > 0) {
        this.otvori3();
        this.otvori6();
        return this.natocenoGorivo ? true : false;
      } else if (this.natocenoGorivo < 0) {
        return this.natocenoGorivo ? false : true;
      } else {
        this.sakrij3();
        this.sakrij6();
        return null;
      }
    },
    nameState5() {
      if (this.natocenoGorivoZaNovce > 0) {
        this.otvori4();
        this.otvori5();
        return this.natocenoGorivoZaNovce ? true : false;
      } else if (this.natocenoGorivoZaNovce < 0) {
        return this.natocenoGorivoZaNovce ? false : true;
      } else {
        this.sakrij4();
        this.sakrij5();
        return null;
      }
    },
  },
};
</script>
