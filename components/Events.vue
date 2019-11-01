<template>
  <div class="mainContainer">
    <div v-for="item in sortedEvents" :key="item.order">
      <div class="columns white singleEvent" :class="{ flipped: isFlipped(item) }">
        <img
          v-if="item.title === 'Connect, Collaborate, and Create'"
          class="column imgResize graphic"
          src="../assets/about_illustration.svg"
        >
        <img
          v-else-if="isWestCoast(item.title)"
          class="column imgResize graphic"
          src="../assets/smiley_illustration.svg"
        >
        <div v-else>
          BIG F!
        </div>
        <div class="column allEvents">
          <h2 class="title">
            {{ item.title }}
          </h2>
          <br>
          <p class="events">
            {{ item.blurb }}
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
      return item.title === 'Connect, Collaborate, and Create'
    },
    isWestCoast(title) {
      console.log('isWestCoast', title)
      return title === '"WEST COAST" == "BEST COAST"'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";
$heading-color: #f9c2e3;
$body-color: #69dde1;
$red: #ff7676;
$heading-font: "Apercu Pro", sans-serif;
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
  color: $heading-color;
  font-family: $heading-font;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 60px;
  margin-bottom: 0;
  letter-spacing: 0.05em;
}

.date {
  color: $red;
  font-family: $body-font;
  font-size: 20px;
  line-height: 18px;
  font-weight: bold;
}

.events {
  color: $body-color;
  font-family: $body-font;
  font-size: 20px;
  line-height: 28px;
  margin: 25px 0;
}
</style>
