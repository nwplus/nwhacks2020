<template>
  <div>
    <div id="successDiv">
      <img id="sucessImage" src="~/assets/success-image.svg" alt="success image">
      <h1 id="title">
        Thanks for applying!
        <br v-if="isMobile">
        🙌
      </h1>
      <p id="subtitle">
        Thanks for applying to participate in nwHacks 2020! Stay tuned as your application gets assessed. Expect to hear back from us by the end of December.
      </p>
      <button id="backButton" @click="goHome">
        <span id="buttonText">&lt;- Take me back home</span>
      </button>
      </h1>
    </div>
    <div id="footer-div">
      <div id="footer-icons">
        <a href="https://www.facebook.com/nwhacks/" target="_blank" rel="noopener">
          <img src="~/assets/facebook_small.svg" alt="facebook icon">
        </a>
        <a href="https://twitter.com/nwplusubc" target="_blank" rel="noopener">
          <img src="~/assets/twitter_small.svg" alt="twitter icon">
        </a>
        <a href="https://medium.com/nwplusubc" target="_blank" rel="noopener">
          <img src="~/assets/medium_small.svg" alt="medium icon">
        </a>
      </div>
      <p id="footer-text">
        Connect with the community of nwHacks on Medium,
        Twitter, and Facebook! Share your story and excitement with us!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return !(screen.width > 769)
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
      this.$store.commit('clearState')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";

#sucessImage {
    margin: auto;
    width: 286px;
    margin-bottom: 30px;
}
#successDiv{
    padding-top: 90px;
    text-align: center;
}
#title {
    font-family: Apercu Pro;
    font-size: 50px;
    line-height: 62px;
    text-align: center;
    /* outline1 */
    color: #2C0A92;
    @include until($tablet){
        width: 95%;
        margin: auto;
    }
}
#subtitle {
    /* Body text */
    font-family: Apercu Pro;
    font-size: 18px;
    line-height: 25px;
    text-align: center;

    /* outline1 */
    color: #2C0A92;
    width: 679px;
    margin: auto;
    margin-top: 18px;
    @include until($tablet){
        width: 95%;
    }
}
#backButton {
    outline: none;
    margin-top: 43px;
    background: linear-gradient(180deg, #FFFFFF 33.85%, #F1F8FB 66.15%, #E9F5F9 99.97%, #DBEFF5 99.98%, #B6E0EC 99.99%, #CEECF4 100%);
    mix-blend-mode: normal;

    /* primaryshade */
    border: 1px solid #4483BD;
    box-sizing: border-box;
    border-radius: 4px;
    width: 240px;
    height: 40px;
    cursor: pointer;
}
#buttonText {
    font-family: Apercu Pro;
    font-size: 18px;
    line-height: 22px;

    /* identical to box height */
    text-align: center;

    /* primaryshade */
    color: #4483BD;
}
#footer-icons {
    text-align: center;
    margin-bottom: 24.1px;
}
#footer-icons > a > img {
    margin: 0 25px;
}
#footer-div {
    margin-top: 60px;
    padding-bottom: 40px;

}
#footer-text {
    font-family: Apercu Pro;
    font-size: 16px;
    line-height: 136.73%;

    /* or 22px */
    text-align: center;

    /* outline1 */
    color: #2C0A92;
    width: 679px;
    margin: auto;
    @include until($tablet){
        width: 95%;
    }
}
</style>
