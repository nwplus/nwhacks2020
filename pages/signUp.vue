<template>
  <div>
    <p class="title">
      Sign up form
    </p>
    <section>
      <b-field
        label="First Name"
        :type="$v.hacker.firstname.$error ? 'is-danger' : ''"
        :message="!$v.hacker.firstname.required ? 'Required' : ''"
      >
        <b-input v-model.trim="$v.hacker.firstname.$model" />
      </b-field>
      <b-field
        label="Last Name"
        :type="$v.hacker.lastname.$error ? 'is-danger' : ''"
        :message="!$v.hacker.lastname.required ? 'Required' : ''"
      >
        <b-input v-model.trim="$v.hacker.lastname.$model" />
      </b-field>
      <b-field
        label="Email"
        :type="$v.hacker.email.$error ? 'is-danger' : ''"
        :message="!$v.hacker.email.required ? 'Required' : !$v.hacker.email.email ? 'Please enter a valid email' : ''"
      >
        <b-input
          v-model.trim="$v.hacker.email.$model"
          type="email"
        />
      </b-field>
      <b-button @click="submit">
        Submit
      </b-button>
      <b-button @click="$store.commit('clearState')">
        clear
      </b-button>
    </section>
  </div>
</template>

<script>
import validations from '~/validators/validators.js'
import vueDataProxy from 'vue-data-proxy'
export default {
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
    })
  },
  validations: validations,
  methods: {
    submit() {
      console.log(this.$store.state.hackerApplication)
    }
  }
}
</script>
