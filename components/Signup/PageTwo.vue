<template>
  <section>
    <b-field
      label="Links - help us get to know you better by providing as many links as you feel will support your application"
      :type="v.hacker.links.$error ? 'is-danger' : ''"
      :message="!v.hacker.links.required ? 'Required' : ''"
    >
      <b-input v-model.trim="v.hacker.links.$model" />
    </b-field>
    <b-field
      label="Is this your first hackathon?"
      :type="v.hacker.firstHackathon.$error ? 'is-danger' : ''"
      :message="v.hacker.firstHackathon.$error ? (!v.hacker.firstHackathon.required ? 'Required' : (!v.hacker.firstHackathon.matchesRadio ? 'Does not match one of the choices' : '')) : ''"
    >
      <b-radio v-model.trim="v.hacker.firstHackathon.$model" name="firstHackathon" native-value="yes">
        Yes
      </b-radio>
      <b-radio v-model.trim="v.hacker.firstHackathon.$model" name="firstHackathon" native-value="no">
        No
      </b-radio>
    </b-field>
    <b-field
      label="Have you attended either LHD: Learn Day or LHD: Build Day?"
      :type="v.hacker.attendedLHD.$error ? 'is-danger' : ''"
      :message="v.hacker.attendedLHD.$error ? (!v.hacker.attendedLHD.required ? 'Required' : (!v.hacker.attendedLHD.matchesRadio ? 'Does not match one of the choices' : '')) : ''"
    >
      <b-radio v-model.trim="v.hacker.attendedLHD.$model" name="attendedLHD" native-value="yes">
        Yes
      </b-radio>
      <b-radio v-model.trim="v.hacker.attendedLHD.$model" name="attendedLHD" native-value="no">
        No
      </b-radio>
    </b-field>
    <b-field
      label="How do you wish to contribute at nwHacks? Your choice will not affect your application and you can always change your mind after you submit."
      :type="v.hacker.hackerRole.$error ? 'is-danger' : ''"
      :message="v.hacker.hackerRole.required ? 'Required' : ''"
    />
    <b-checkbox
      v-model="v.hacker.hackerRoleDeveloper.$model"
      name="hackerRole"
      native-value="developer"
    >
      Developer
    </b-checkbox>
    <b-checkbox
      v-model="v.hacker.hackerRoleDesigner.$model"
      name="hackerRole"
      native-value="designer"
    >
      Designer
    </b-checkbox>
    <b-checkbox
      v-model="v.hacker.hackerRoleHardware.$model"
      name="hackerRole"
      native-value="hardware"
    >
      Hardware/Robotics
    </b-checkbox>
    <b-checkbox
      v-model="v.hacker.hackerRoleOther.$model"
      name="hackerRole"
      native-value="other"
    >
      Other
    </b-checkbox>
    {{ v.hacker.hackerRoleDeveloper.$model }}
    </b-field>
    <b-field
      label="ethnicity"
      :type="v.hacker.ethnicity.$error ? 'is-danger' : ''"
      :message="!v.hacker.ethnicity.required ? 'Required' : !v.hacker.email.email ? 'Please enter a valid email' : ''"
    >
      <b-input
        v-model.trim="v.hacker.ethnicity.$model"
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
