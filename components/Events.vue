<template>
  <div class="mainContainer">
    <div v-for="item in sortedEvents" :key="item.order">
      <div class="columns is-vcentered white singleEvent" :class="{ flipped: isFlipped(item) }">
        <img
          v-if="item.title === 'Connect, Collaborate, and Create'"
          id="about-graphic"
          class="column imgResize graphic"
          src="../assets/about_illustration.svg"
        >
        <img
          v-else-if="isWestCoast(item.title)"
          id="smiley-graphic"
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
  margin: 7%;
  // max-height: 350px;
  @include until($tablet) {
    img {
      margin: 0;
    }
    h2 {
      margin-top: 15px;
    }
  }
  @include from($tablet) {
    margin-top: 0;
    h2,
    p {
      margin: 0;
    }
    #smiley-graphic {
      transform: translateY(130px) scale(0.8);
    }
  }
}

#events .singleEvent.flipped {
  @include from($tablet) {
    display: flex;
    flex-direction: row-reverse;
    h2,
    p {
      text-align: right;
      margin: 0;
    }
    margin-bottom: 0;
    max-height: 500px;
    #about-graphic {
      transform: translateY(-170px);
    }
  }
}

.allEvents .title {
  color: $heading-color;
  font-family: $heading-font;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 37px;
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
  margin: 0;
}
</style>
