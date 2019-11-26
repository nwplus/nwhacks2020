<template>
  <a :href="formatURL(item.url)" target="_blank" rel="noopener noreferrer">
    <img
      :class="{[item.rank]: true, default: !item.altImage}"
      :src="item.altImage && hover ? item.altImage : item.imageURL"
      :alt="item.name"
      @mouseover="hover = true"
      @mouseleave="hover = false"
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
  data() {
    return {
      hover: false
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
