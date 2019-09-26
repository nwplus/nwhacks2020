<template>
  <section>
    <b-field
      label="First Name"
      :type="v.hacker.firstname.$error ? 'is-danger' : ''"
      :message="!v.hacker.firstname.required ? 'Required' : ''"
    >
      <b-input v-model.trim="v.hacker.firstname.$model" />
    </b-field>
    <b-field
      label="Last Name"
      :type="v.hacker.lastname.$error ? 'is-danger' : ''"
      :message="!v.hacker.lastname.required ? 'Required' : ''"
    >
      <b-input v-model.trim="v.hacker.lastname.$model" />
    </b-field>
    <b-field
      label="Email"
      :type="v.hacker.email.$error ? 'is-danger' : ''"
      :message="!v.hacker.email.required ? 'Required' : !v.hacker.email.email ? 'Please enter a valid email' : ''"
    >
      <b-input
        v-model.trim="v.hacker.email.$model"
        type="email"
      />
    </b-field>
  </section>
</template>

<script>

export default {
  props: {
    v: {
      type: Object,
      required: true
    }
  }
}
</script>
