<template>
  <div id="signup-form">
    <div v-if="page !== -1">
      <pageOne v-if="page == 0" :v="$v" />
      <pageTwo v-if="page == 1" :v="$v" />
      <pageThree v-if="page == 2" :v="$v" />
      <div class="signup-buttons">
        <section v-if="page == 2" :v="$v">
          <b-button @click="page--">
            Previous
          </b-button>
          <b-button @click="clear">
            Clear
          </b-button>
          <b-button @click="submit">
            Submit
          </b-button>
        </section>
        <section v-if="page == 0 || page == 1" :v="$v">
          <b-button v-if="page !== 0" @click="page--">
            Previous
          </b-button>
          <b-button @click="clear">
            Clear
          </b-button>
          <b-button @click="page++">
            Next
          </b-button>
        </section>
      </div>
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
    },
    clear() {
      if (confirm('Are you sure you want to clear the entire form?')) {
        this.$store.commit('clearState')
      }
    }
  }
}
</script>
<style lang="scss">
//Desktop CSS:
@font-face {
  font-family: "Apercu Pro";
  src: url("../assets/fonts/apercu_regular_pro.otf") format("opentype");
}

</style>
