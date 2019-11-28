<template>
  <a class="link" style="position: relative;" :href="formatURL(item.url)" target="_blank" rel="noopener noreferrer">
    <img
      :class="{hasAlt: item.altImageUrl, [item.rank]: true, default: !item.altImageUrl}"
      :src="item.imageURL"
      :alt="item.name"
    >
    <img
      v-if="item.altImageUrl"
      :class="{[item.rank]: true, altImage: true}"
      :src="item.altImageUrl"
    >
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatURL(url) {
      console.log(this.item.altImage)
      if (!url.includes('http')) {
        return `http://${url}`
      } else {
        return url
      }
    }
  }
}
</script>
<style scoped>
.default {
  transition: 0.5s, -moz-filter 0.5s, -o-filter 0.5s, filter 0.5s;
  width: 100%;
  filter: brightness(0) invert(1);
}
.default:hover {
  filter: none;
}
.link img{
  transition: 0.5s, -moz-filter 0.5s, -o-filter 0.5s, filter 0.5s;
}
.link .hasAlt {
  opacity: 0;
}
.link:hover .hasAlt {
  opacity: 1;
}
.link .altImage {
  top: -100;
  left: 0;
  position: absolute;
  opacity: 1;
}
.link:hover .altImage {
  opacity: 0;
}
.tera {
  width: 400px;
}
.giga {
  max-width: 350px;
}
.mega {
  max-width: 300px;
}
.kilo {
  max-width: 225px;
}
.in-kind {
  max-width: 150px;
}
</style>
