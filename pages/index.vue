<template>
  <div id="main-page" style="position: relative; width: 100%;">
    <NavBar id="navbar" v-if="screenWidth > 768" :faq="faqFlag" />
    <section class="mainSection">
      <div class="mainContent">
        <Intro id="intro" :intro="intro" />
        <Events id="events" :items="events" />
        <Video />
        <WhyJoin id="about" />
        <FAQ id="faq" v-if="faqFlag" :items="FAQs" />
        <Sponza id="sponza" v-if="sponsorFlag" :items="sponsors" />
      </div>
    </section>
    <Footer :text="footer" />
    <div class="backgroundBottom" />
    <TeamSection id="teamSection" />
    <RealFooter :text="footer" />
  </div>
</template>

<script>
import TeamSection from '../components/TeamSection'
import NavBar from '~/components/NavBar.vue'
import Intro from '~/components/Intro.vue'
import Sponza from '~/components/Sponza.vue'
import Footer from '~/components/Footer.vue'
import fireDb from '~/plugins/firebase.js'
import Events from '~/components/Events.vue'
import FAQ from '~/components/Faq.vue'
import Video from '~/components/Video.vue'
import RealFooter from '~/components/realFooter'
export default {
  components: {
    TeamSection,
    Video,
    NavBar,
    RealFooter,
    Intro,
    Footer,
    Sponza,
    Events,
    FAQ
  },
  computed: {
    screenWidth() {
      return screen.width
    }
  },
  asyncData: async () => {
    const Sponsors = 'Sponsors'
    const Events = 'Events'
    const FAQ = 'Faq'
    // functions
    const getSponsorImage = async (sponsor) => {
      sponsor.imageURL = await fireDb.getImageUrl(sponsor.image)
      if (sponsor.altImage) {
        sponsor.altImageUrl = await fireDb.getImageUrl(sponsor.altImage)
      }
      return sponsor
    }
    // data
    const data = await fireDb.get()
    const listOfSponsors = await fireDb.get(Sponsors)
    const listOfEvents = await fireDb.get(Events)
    const FaqQuestions = await fireDb.get(FAQ)
    // Populate sponsors with their image urls
    const populatedSponsors = (await Promise.all(
      listOfSponsors.map(sponsor => getSponsorImage(sponsor))
    )).filter(sponsor => sponsor.imageURL !== '')
    return {
      info: data.WelcomeText,
      sponsors: populatedSponsors,
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
  },
  mounted: function () {
    if (this.$store.state.comingFromSuccessPage) {
      this.$store.commit('resetToFirstPage')
    }
  }
}
</script>

<style lang="scss">
@import "bulma/bulma.sass";
//Desktop CSS:
@font-face {
  font-family: "HK Grotesk Regular";
  src: url("../assets/fonts/HKGrotesk-Regular.otf") format("opentype");
}
#main-page {
  background-color: #262662;
}
</style>
