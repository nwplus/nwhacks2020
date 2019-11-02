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
        <div class="column allEvents">
          <div v-if="item.title === 'Connect, Collaborate, and Create'" id="focus">
            <h1>nwHacks 2020</h1>
            <p>Western Canada's Largest Hackathon</p>
            <a href="http://google.ca">
              <button class="button">Apply Now</button>
            </a>
            <a href="http://google.ca">
              <button class="button">Become a Mentor</button>
            </a>
          </div>
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
$button-text-color: #262662;
.mainContainer {
  justify-content: right;
}
#focus {
  button {
    background: linear-gradient(180deg, #7dc8de 50.1%, #643198 164.06%);
    border-radius: 11px;
    border: none;
    color: $button-text-color;
    font-family: $body-font;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 0 30px;
    margin: 0 10px;
    @include until($tablet) {
      display: block;
      margin: 14px auto;
    }
  }
  text-align: right;
  margin-bottom: 20px;
  h1 {
    font-size: 48px;
    line-height: 60px;
  }
  h1,
  p {
    font-weight: bold;
    background: -webkit-linear-gradient(180deg, #91e9ee 0%, #06c1c0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    letter-spacing: 0.05em;
    font-size: 24px;
  }
  @include until($tablet) {
    h1 {
      font-size: 36px;
      line-height: 37px;
      margin: 5% 5%;
    }
    p {
      line-height: 103.3%;
      margin: 5% 5%;
    }
    text-align: center;
  }
}

#events .singleEvent {
  margin: 7%;
  @include until($tablet) {
    img {
      margin: 0;
    }
    h2 {
      margin-top: 15px;
      text-align: center;
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
