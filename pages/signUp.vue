<template>
  <div>
    <p class="title">
      Sign up form
    </p>
    <pageOne v-if="page == 0" :v="$v" />
    <pageTwo v-if="page == 1" :v="$v" />
    <section>
      <b-button @click="submit">
        Submit
      </b-button>
      <b-button @click="$store.commit('clearState')">
        clear
      </b-button>
    </section>
    <section>
      <b-button @click="page--">
        Previous
      </b-button>
      <b-button @click="page++">
        Next
      </b-button>
    </section>
  </div>
</template>

<script>
import pageOne from '~/components/Signup/PageOne'
import pageTwo from '~/components/Signup/PageTwo'
import validations from '~/validators/validators.js'
import vueDataProxy from 'vue-data-proxy'

export default {
  components: { pageOne, pageTwo },
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
  validations,
  methods: {
    submit() {
      this.$v.hacker.$touch()
      // if its still pending or an error is returned do not submit
      if (this.$v.hacker.$pending || this.$v.hacker.$error) return
      // to form submit after this
      alert('Form submitted')
      console.log(this.$store.state.hackerApplication)
    }
  }
}
</script>
