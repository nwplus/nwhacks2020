<template>
  <div style="background: #E5E5E5;">
    <div class="nav">
      <nuxt-link to="/">
        <img style="margin-top: 0.3%; margin-left: 1%;" src="~/assets/signup-logo.svg" alt="nwPlus logo">
      </nuxt-link>
    </div>
    <div v-if="page !== -1">
      <p class="title">
        Sign up form
      </p>
      <pageOne v-if="page == 0" :v="$v" />
      <pageTwo v-if="page == 1" :v="$v" />
      <pageThree v-if="page == 2" :v="$v" />
      <section class="buttons">
        <button class="button nav-button" @click="page--">
          Previous
        </button>
        <button v-if="page !== 2" class="button nav-button" @click="page++">
          Next
        </button>
        <button v-if="page === 2" class="button submit-button" @click="submit">
          Submit
        </button>
      </section>
    </div>
    <signUpClosed v-if="page === -1" />
  </div>
</template>

<script>
import pageOne from '~/components/Signup/PageOne'
import pageTwo from '~/components/Signup/PageTwo'
import pageThree from '~/components/Signup/PageThree'
import validations from '~/validators/validators.js'
import vueDataProxy from 'vue-data-proxy'
import fireDb from '~/plugins/firebase.js'
import signUpClosed from '~/components/Signup/signupClosed'

export default {
  components: { pageOne, pageTwo, pageThree, signUpClosed },
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
    submit() {
      this.$v.hacker.$touch()
      // if its still pending or an error is returned do not submit
      if (this.$v.hacker.$pending || this.$v.hacker.$error) return
      // to form submit after this
      alert('Form submitted')
      fireDb.submitApplication(this.$store.state.hackerApplication)
    }
  }
}
</script>
<style scoped>
.nav-button {
  background: linear-gradient(180deg, #FFFFFF 33.85%, #F1F8FB 66.15%, #E9F5F9 99.97%, #DBEFF5 99.98%, #B6E0EC 99.99%, #CEECF4 100%);
  mix-blend-mode: normal;
  /* primaryshade */
  border: 1px solid #4483BD;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);
  color: #4483BD;
  width: 100px;
}
.submit-button{
  background: linear-gradient(180deg, #70B8CD 0%, #6572B0 76.56%, #6C62AF 99.99%, #693E94 100%);
  border-radius: 4px;
  box-shadow: 0px 0px 0px 0.2px #888888;
  color: white;
  width: 100px;
}
.buttons {
  margin: 5% 0;
  margin-left: 30%;
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
</style>
