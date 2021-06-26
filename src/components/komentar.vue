<template>
  <div class="card mt-3" style="background-color:#e6eeff">
    <h6 style="margin-left:27px; margin-top: 18px" class="mb-0">
      Tema: {{ tema }}
    </h6>
    <div
      style="margin-left:27px; text-align: justify;"
      class="mb-0 col-11 mt-1 text-secondary"
    >
      {{ korisnik }}
    </div>
    <h6 style="margin-left:27px; margin-top: 18px" class="mb-0">
      {{ komentar }}
    </h6>
    <p style="text-align: right;" class="text-muted mb-1">
      <small>{{ vrijeme }}</small>
    </p>
  </div>
</template>

<script>
export default {
  props: ["komentar", "tema", "vrijeme", "korisnik"],
};
</script>
