<template>
  <div class="header">
    <div class="header-content">
      <a href="./signup">
        <div class="billboard" />
        <img class="mobile-billboard" src="~@/assets/billboard.svg">
      </a>
    </div>
  </div>
</template>

<script>
// an attempt to preload the billboard hover image so it doesnt lag when someone hovers it
const billboardPreload = new Image()
billboardPreload.src = '~@/assets/billboard-hover.svg'
export default {
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
  min-height: 105vw; // the bg image is _almost_ a square
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 100vw;
}
.billboard {
  width: 11.26vw;
  height: 11.74vw;
  background-image: url("~@/assets/billboard.svg");
  background-position: bottom;
  background-repeat: no-repeat;
}
.billboard:hover {
  background-image: url("~@/assets/billboard-hover.svg");
}
.mobile-billboard {
  max-height: 40vw;
}
//Desktop CSS:
@include from($desktop) {
  .header {
    background-image: url("~@/assets/header.svg");
  }
  .header-content {
    padding: 24vw 0 0 68vw;
  }
  .mobile-billboard {
    display: none;
    opacity: 0;
  }
}
//Mobile CSS:
@include until($desktop) {
  .header {
    background-image: url("~@/assets/header-mobile.svg");
    min-height: 264vw; // the bg image is height compared to width
  }
  .header-content {
    padding: 80vw 0 0 56vw;
  }
  .billboard {
    display: none;
    opacity: 0;
  }
  .mobile-billboard {
    display: inline;
    opacity: 100%;
  }
}
</style>
