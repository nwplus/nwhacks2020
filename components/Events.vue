<template>
  <div class="mainContainer">
    <div v-for="item in sortedEvents" :key="item.order">
      <div class="columns white singleEvent" :class="{ flipped: isFlipped(item) }">
        <img
          v-if="item.title === 'Learn Day'"
          class="column imgResize graphic"
          src="../assets/learn-deer-graphic.svg"
        >
        <img
          v-else-if="item.title === 'Build Day'"
          class="column imgResize graphic"
          src="../assets/build-beaver-graphic.svg"
        >
        <img
          v-else-if="item.title === 'Share Day'"
          class="column imgResize graphic"
          src="../assets/share-bear-graphic.svg"
        >
        <div class="column allEvents">
          <h3 class="title">
            {{ item.heading }}
          </h3>
          <br>
          <p class="date">
            {{ item.date }}
          </p>
          <p class="blurb">
            {{ item.body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import orderBy from 'lodash.orderby'
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    sortedEvents: function () {
      return orderBy(this.items, 'order')
    }
  },
  methods: {
    isFlipped(item) {
      console.log('isFlipped', item)
      return item.title === 'Learn Day' || item.title === 'Share Day'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";
$dark-blue: #425e96;
$red: #ff7676;
$heading-font: "Caveat Brush";
$body-font: "Apercu Pro", sans-serif;

#events .singleEvent {
  margin: 0 5% 130px 12%;
  @include until($desktop) {
    margin: 30px;
  }
}

#events .singleEvent.flipped {
  @include from($desktop) {
    display: flex;
    flex-direction: row-reverse;
  }
}

.allEvents .title {
  color: $dark-blue;
  font-family: $heading-font;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 60px;
  margin-bottom: 0;
}

.date {
  color: $red;
  font-family: $body-font;
  font-size: 20px;
  line-height: 18px;
  font-weight: bold;
}

.blurb {
  color: $dark-blue;
  font-family: $body-font;
  font-size: 18px;
  line-height: 26px;
  margin: 25px 0;
}
</style>
