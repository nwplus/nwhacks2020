<template>
  <div class="header">
    <Snowf
      :amount="200"
      :size="5"
      :speed="1.5"
      :wind="0"
      :opacity="1"
      :swing="1"
      :image="null"
      :z-index="null"
      :resize="true"
      color="#fff"
    />
    <div class="header-content">
      <img src="~@/assets/animals.svg" class="animals">
      <div class="text">
        <p>nwPlus Presents</p>
        <img src="~@/assets/lhd.svg" class="lhd">
        <p>@ University of British Columbia</p>
        <p v-for="item in text" :key="item" class="date">
          {{ item }}
        </p>
        <Button title="Contact Us" url="mailto:lhd@nwplus.io" />
        <Button
          :disabled="!introButtonEnabled"
          title="Sign Up"
          :url="introLink"
        />
        <p class="signupText">
          {{ signUpText }}
        </p>
        <Email />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/Button.vue'
import Snowf from 'vue-snowf'
import Email from '~/components/Email.vue'
export default {
  components: {
    Snowf,
    Button,
    Email
  },
  props: {
    intro: {
      type: Object,
      default: () => {
        return {
          text: '',
          introButtonEnabled: false,
          signUpText: '',
          introLink: '#'
        }
      }
    }
  },
  data() {
    return {
      ...this.intro,
      text: this.intro.text.split('.')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";
.signupText {
  max-width: 60%;
  text-align: center;
  margin: 0 20%;
}
.header {
  min-height: 60vw; // the bg image height is 60% its width
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 100vw;
}
.header-content {
  display: flex;
  flex: 1 0 auto;
  flex-wrap: wrap-reverse;
  justify-content: space-evenly;
}
.animals {
  margin-bottom: 3%;
  float: left;
  align-self: flex-start;
}
.text {
  text-align: center;
  line-height: 26px;
  align-self: flex-start;
}
//Desktop CSS:
@include from($desktop) {
  .header {
    margin-bottom: -12vw;
    background-image: url("~@/assets/header.svg");
  }
  .header-content {
    padding: 10vw 0vw 0 0vw;
  }
  .lhd {
    max-height: 16vw;
    margin-bottom: 12px;
  }
  .animals {
    max-height: 28vw;
  }
}
//Mobile CSS:
@include until($desktop) {
  .header {
    background-image: url("~@/assets/mobile-header.svg");
  }
  .header-content {
    padding: 15vw 0 0 0;
  }
  .lhd {
    max-height: 50vh;
    margin-bottom: 12px;
  }
  .date {
    display: none;
  }
}
</style>
