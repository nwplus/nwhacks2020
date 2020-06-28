<template>
  <div id="signup-form">
    <div v-if="page !== -1" class="nav">
      <nuxt-link to="/">
        <img id="navImage" src="~/assets/signup-logo.svg" alt="nwPlus logo">
      </nuxt-link>
    </div>
    <div v-if="page !== 3" class="bread">
      <div :class="`circle ${page === 0 ? 'selectedCircle' : ''}`">
        <span :class="`breadNumber ${page === 0 ? 'selectedNumber' : ''}`">1</span>
      </div>
      <div :class="`circle ${page === 1 ? 'selectedCircle' : ''}`">
        <span :class="`breadNumber ${page === 1 ? 'selectedNumber' : ''}`">2</span>
      </div>
      <div :class="`circle ${page === 2 ? 'selectedCircle' : ''}`">
        <span :class="`breadNumber ${page === 2 ? 'selectedNumber' : ''}`">3</span>
      </div>
    </div>
    <div v-if="page !== -1">
      <div class="error-message">
        <p v-if="error" class="is-danger help is-size-4">
          There are some errors on this page.
        </p>
      </div>
      <pageOne v-if="page == 0" :v="$v" />
      <pageTwo v-if="page == 1" :v="$v" />
      <pageThree v-if="page == 2" :v="$v" />
      <successPage v-if="page == 3" />
      <section v-if="page !== 3" class="buttons">
        <button v-if="page !== 0" @click="page--" class="button nav-button">
          Back
        </button>
        <button v-if="page === 0" @click="cancel" class="button nav-button">
          Cancel
        </button>
        <button v-if="page !== 2" @click="nextPage" class="button submit-button">
          Next
        </button>
        <button v-if="page === 2" @click="submit" class="button submit-button">
          Submit
        </button>
      </section>
    </div>
    <signUpClosed v-if="page === -1" />
  </div>
</template>

<script>
import vueDataProxy from 'vue-data-proxy'
import pageOne from '~/components/Signup/PageOne'
import pageTwo from '~/components/Signup/PageTwo'
import pageThree from '~/components/Signup/PageThree'
import successPage from '~/components/Signup/SuccessPage'
import validations from '~/validators/validators.js'
import fireDb from '~/plugins/firebase.js'
import signUpClosed from '~/components/Signup/signupClosed'

export default {
  components: { successPage, pageOne, pageTwo, pageThree, signUpClosed },
  data() {
    return {
      error: false
    }
  },
  computed: {
    ...vueDataProxy({
      hacker: {
        fetch() {
          return { ...this.$store.state.hackerApplication }
        },
        commit(value) {
          this.$store.commit('updateApplication', value)
        }
      }
    }),
    page: {
      get() {
        return this.$store.state.signUpPage
      },
      set(value) {
        this.$store.commit('goToPage', value)
        console.log(this.page)
      }
    }
  },
  async asyncData({ store }) {
    const data = await fireDb.get()
    if (!data.featureFlags.signup) {
      store.commit('ApplicationClosed')
    } else {
      store.commit('ApplicationOpen')
    }
    return {}
  },
  validations,
  methods: {
    cancel() {
      this.clear()
    },
    touchPageOne() {
      return (
        this.$v.hacker.lastname.$error ||
      this.$v.hacker.firstname.$error ||
      this.$v.hacker.email.$error ||
      this.$v.hacker.phonenumber.$error ||
      this.$v.hacker.gender.$error ||
      this.$v.hacker.genderother.$error ||
      this.$v.hacker.ethnicity.$error ||
      this.$v.hacker.ethnicityother.$error ||
      this.$v.hacker.over19.$error ||
      this.$v.hacker.education.$error ||
      this.$v.hacker.school.$error ||
      this.$v.hacker.schoolother.$error ||
      this.$v.hacker.major.$error ||
      this.$v.hacker.gradyear.$error ||
      this.$v.hacker.city.$error ||
      this.$v.hacker.travel.$error)
    },
    touchPageTwo() {
      return this.$v.hacker.firstHackathon.$error ||
      this.$v.hacker.attendedLHD.$error ||
      this.$v.hacker.hackerRoleDeveloper.$error ||
      this.$v.hacker.hackerRoleDesigner.$error ||
      this.$v.hacker.hackerRoleHardware.$error ||
      this.$v.hacker.hackerRoleOther.$error ||
      this.$v.hacker.linkGithub.$error ||
      this.$v.hacker.linkPortfolio.$error ||
      this.$v.hacker.linkLinkedin.$error ||
      this.$v.hacker.linkResume.$error ||
      this.$v.hacker.longTechnology.$error ||
      this.$v.hacker.longProject.$error
    },
    previousPage() {
      this.$v.hacker.$reset()
      this.error = false
      this.page--
    },
    nextPage() {
      this.$v.hacker.$touch()
      window.scroll(0, 0)
      if (this.page === 0 && this.touchPageOne()) {
        this.error = true
        return
      }
      if (this.page === 1 && this.touchPageTwo()) {
        this.error = true

        return
      }
      this.$v.hacker.$reset()
      this.error = false
      this.page++
    },
    async submit() {
      this.$v.hacker.$touch()
      // if its still pending or an error is returned do not submit
      if (this.$v.hacker.$pending || this.$v.hacker.$error) {
        this.error = true
        window.scroll(0, 0)
        return
      }
      // to form submit after this
      const reply = await fireDb.submitApplication(this.$store.state.hackerApplication)
      if (!reply) {
        alert('This email is already signed up.\n If you\'d like to update your application\n please contact logistics@nwplus.io or contact us on facebook')
        this.page = 0
        window.scroll(0, 0)
        return
      }
      this.page++
    },
    clear() {
      if (confirm('Are you sure you want to cancel the entire form?\nif you just close this page, your progress will be saved.')) {
        this.$store.commit('clearState')
        this.$router.push('/')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";

.nav-button {
  background: linear-gradient(180deg, #FFFFFF 33.85%, #F1F8FB 66.15%, #E9F5F9 99.97%, #DBEFF5 99.98%, #B6E0EC 99.99%, #CEECF4 100%);
  mix-blend-mode: normal;
  /* primaryshade */
  border: 1px solid #4483BD;
  box-sizing: border-box;
  border-radius: 4px;
  color: #4483BD;
  width: 100px;
    @include until($tablet) {
      margin: auto;
      width: 40%;
      // is this enough vertical room for the nw logo bar at the top on mobile?
    }
}
.submit-button{
  background: linear-gradient(180deg, #70B8CD 0%, #6572B0 76.56%, #6C62AF 99.99%, #693E94 100%);
  border-radius: 4px;
  color: white;
  width: 100px;
    @include until($tablet) {
      margin: auto;
      width: 40%;
      // is this enough vertical room for the nw logo bar at the top on mobile?
    }
}
.submit-button:hover {
  color: white;
}
.submit-button:focus {
  color: white;
}
.buttons {
  max-width: 900px;
  margin: auto;
  padding: 0 0 60px 60px; //these 60s has to be the same as the other 60s
    @include until($tablet) {
      margin: auto;
      padding: 0 0 60px 0; //these 60s has to be the same as the other 60s
      // is this enough vertical room for the nw logo bar at the top on mobile?
    }

}
#navImage {
  margin: 5px 30px;
  width: 20px;
}
.nav {
  position: fixed;
  top: 0%;
  width: 100%;
  background: #FFFFFF;
  /* Drop shadow */
  box-shadow: 0px 4px 6px rgba(0, 82, 174, 0.15);
  z-index: 5;
}
.bread {
  display: flex;
  max-width: 900px;
  margin: auto;
  padding: 90px 60px 0 60px; //these 60s has to be the same as the other 60s
  @include until($tablet) {
    padding: 90px 0 0 12px;
  }
}
.circle {
  position: relative;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  margin: 0.5%;
  border: 1px solid #4483BD;
  box-sizing: border-box;
}
.selectedCircle {
  border: none;
  background: linear-gradient(180deg, #70B8CD 0%, #6572B0 76.56%, #6C62AF 99.99%, #693E94 100%);
}
.breadNumber {
  position: absolute;
  left: 40%;
  right: 40%;
  top: 22.5%;
  bottom: 20%;
  font-family: HK Grotesk Regular;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  text-align: center;
  color: #4483BD;
}
.selectedNumber{
  /* White */
  color: #FFFFFF;
}
</style>
<style lang="scss">
//Desktop CSS:
@font-face {
  font-family: "HK Grotesk Regular";
  src: url("../assets/fonts/HKGrotesk-Regular.otf") format("opentype");
}
</style>
