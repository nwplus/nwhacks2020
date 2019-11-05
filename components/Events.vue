<template>
  <div class="mainContainer">
    <div v-for="item in sortedEvents" :key="item.order">
      <div
        class="columns is-desktop is-vcentered white singleEvent"
        :class="{ flipped: isFlipped(item) }"
      >
        <img
          v-if="item.title === 'Connect, .Collaborate, and Create'"
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
        <div class="column allEvents" :class="{ flipped: isFlipped(item) }">
          <div v-if="item.title === 'Connect, .Collaborate, and Create'" id="focus">
            <h1>nwHacks 2020</h1>
            <p>Western Canada's Largest Hackathon</p>
            <nuxt-link to="/signup">
              <button class="button">
                Apply Now
              </button>
            </nuxt-link>
            <a
              href="https://docs.google.com/forms/d/1n9rqrEuAPMykgvLRV7CnEXqceXbjyECqLJtNpNugnbo/edit"
              target="blank"
              rel="noopener"
            >
              <button class="button">Become a Mentor</button>
            </a>
          </div>
          <!-- <h2 class="title">
            {{ item.title }}
          </h2>-->
          <div class="titleParts">
            <h2
              v-for="titlePart in item.title.split('.')"
              :key="titlePart"
              class="title"
            >
              {{ titlePart }}
            </h2>
          </div>
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
      return item.title === 'Connect, .Collaborate, and Create'
    },
    isWestCoast(title) {
      console.log('isWestCoast', title)
      return title === '"WEST COAST" .== ."BEST COAST"'
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
  text-align: right;
  margin-bottom: 20px;
  button {
    background: linear-gradient(180deg, #7dc8de 50.1%, #643198 164.06%);
    border-radius: 11px;
    border: none;
    color: $button-text-color;
    font-family: $body-font;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 0 15px;
    height: 50px;
    transition-duration: 0.5s;
    @include until($desktop) {
      display: block;
      margin: 13px auto;
    }
    @include from($desktop) {
      margin: 5% 2%;
    }
  }
  button:hover {
    transform: scale(1.1);
  }
  h1 {
    font-size: 48px;
    line-height: 60px;
  }
  h1,
  p {
    font-weight: bold;
    background: -webkit-linear-gradient(270deg, #91e9ee 0%, #06c1c0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    letter-spacing: 0.05em;
    font-size: 24px;
  }
  @include until($desktop) {
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
    margin-bottom: 50px;
  }
}

#events .singleEvent {
  margin: 7%;
  @include until($desktop) {
    img {
      margin: 0 auto;
    }
    h2 {
      // margin-top: 30px;
      text-align: center;
    }
    #smiley-graphic {
      margin-bottom: 30px;
    }
  }
  @include from($desktop) {
    margin-top: 0;
    h2,
    p {
      margin: 0;
    }
    #smiley-graphic {
      transform: translateY(100px);
    }
  }
}

#events .singleEvent.flipped {
  @include from($desktop) {
    display: flex;
    flex-direction: row-reverse;
    h2,
    p {
      text-align: right;
      margin: 0;
    }
    margin-bottom: 76px;
    max-height: 500px;
    #about-graphic {
      transform: translateY(-170px);
    }
  }
}
.allEvents {
  @include from($desktop) {
    margin-left: 47px;
  }
}

.allEvents.flipped {
  @include from($desktop) {
    margin-right: 47px;
    margin-left: 0px;
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

.titleParts {
  display: flex;
  flex-direction: column;
  border: 2px solid red;
  width: 100%;
}

.flipped .titleParts {
  float: right;
}
.events {
  color: $body-color;
  font-family: $body-font;
  font-size: 20px;
  line-height: 28px;
  margin: 0;
}
</style>
