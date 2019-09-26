<template>
  <div class="outro">
    <p>
      nwPlus is always looking for new ventures, opportunities, and connections. If you are interested in working with us, joining us or speaking at one of our events, feel free to reach out to us at
      <a
        href="mailto:hello@nwplus.io"
      >hello@nwplus.io</a>.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'loading..'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";
//Desktop CSS:
.outro {
  margin: 5% 10%;
  margin-bottom: 2%;
  text-align: center;
}

.outro a {
  color: #71bfd8;
  &:hover {
    color: $red;
  }
}
//Mobile CSS:
@include until($desktop) {
}
</style>
