<template>
  <div style="position: relative; width: 100%;">
    <NavBar id="navbar" :faq="FAQFlag" />
    <section class="mainSection">
      <div class="mainContent">
        <Intro id="intro" :intro="intro" />
        <Bulletin />
        <WhyJoin id="about" />
        <Events id="events" :items="events" />
        <FAQ v-if="!faqFlag" id="faq" :items="FAQs" />
        <Sponza id="sponza" />
        <Outro id="contact" :text="outro" />
      </div>
    </section>
    <Footer :text="footer" />
    <div class="backgroundBottom" />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Intro from '~/components/Intro.vue'
import Sponza from '~/components/Sponza.vue'
import Outro from '~/components/Outro.vue'
import Footer from '~/components/Footer.vue'
import fireDb from '~/plugins/firebase.js'
import Events from '~/components/Events.vue'
import FAQ from '~/components/Faq.vue'
import Bulletin from '~/components/Bulletin.vue'
export default {
  components: {
    Bulletin,
    NavBar,
    Intro,
    Outro,
    Footer,
    Sponza,
    Events,
    FAQ
  },
  asyncData: async () => {
    const Sponsors = 'Sponsors'
    const Events = 'Events'
    const FAQ = 'Faq'
    // functions
    const getSponsorImage = async (sponsor) => {
      sponsor.imageURL = await fireDb.getImageUrl(sponsor.image)
      return sponsor
    }
    // data
    const data = await fireDb.get()
    const listOfSponsors = await fireDb.get(Sponsors)
    const listOfEvents = await fireDb.get(Events)
    const FaqQuestions = await fireDb.get(FAQ)
    // Populate sponsors with their image urls
    const populatedSponsors = await Promise.all(
      listOfSponsors.map(sponsor => getSponsorImage(sponsor))
    )
    return {
      info: data.WelcomeText,
      Sponsors: populatedSponsors,
      outro: data.OutroText,
      footer: data.FooterText,
      events: listOfEvents,
      intro: {
        text: data.IntroText,
        introButtonEnabled: data.IntroButtonEnabled,
        introLink: data.IntroButtonLink,
        signUpText: data.SignUpText
      },
      FAQs: FaqQuestions,
      ...data.featureFlags
    }
  }
}
</script>

<style lang="scss">
@import "bulma/bulma.sass";
//Desktop CSS:
@font-face {
  font-family: "Apercu Pro";
  src: url("../assets/fonts/apercu_regular_pro.otf") format("opentype");
}

body {
  background-color: #f6edec;
  font-family: "Apercu Pro";
  // background-image: url('~@/assets/bg.svg');
  // background-size: 100vw;
  color: #425e96;
  overflow-x: hidden;
}
</style>
