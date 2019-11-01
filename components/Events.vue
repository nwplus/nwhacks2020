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
          <h3 class="title">
            {{ item.title }}
          </h3>
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
      return item.title === 'Learn Day' || item.title === 'Share Day'
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

.events {
  color: $dark-blue;
  font-family: $body-font;
  font-size: 18px;
  line-height: 26px;
  margin: 25px 0;
}
</style>
