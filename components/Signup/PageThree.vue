<template>
  <section>
    <b-field
      label="Travel"
      :type="v.hacker.travel.$error ? 'is-danger' : ''"
      :message="!v.hacker.travel.required ? 'Required' : !v.hacker.travel.matchesDropDown ? 'yes or no' : ''"
    >
      <b-input v-model.trim="v.hacker.travel.$model" />
    </b-field>
    <b-field
      label="Gender"
      :type="v.hacker.gender.$error ? 'is-danger' : ''"
      :message="!v.hacker.gender.required ? 'Required' : ''"
    >
      <b-input v-model.trim="v.hacker.gender.$model" />
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
