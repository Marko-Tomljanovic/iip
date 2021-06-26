<template
  ><b-link :to="link">
    <div class="card mt-3" style="background-color: #e6eeff">
      <h6 style="margin-left:27px; margin-top: 18px" class="mb-0">
        {{ tema }}
      </h6>
      <div
        style="margin-left:27px; text-align: justify;"
        class="mb-0 col-11 mt-1 text-secondary"
      >
        Opis:
        {{ opis }}
      </div>
      <p style="text-align: right;" class="text-muted mt-1 mb-1">
        <small>{{ vrijeme }}</small>
      </p>
    </div></b-link
  >
</template>

<script>
export default {
  props: ["link", "tema", "opis", "vrijeme"],
};
</script>
