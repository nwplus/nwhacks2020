<template>
  <section>
    <b-field
      label="What is your First Name?"
      class="required"
      :type="v.hacker.firstname.$error ? 'is-danger' : ''"
      :message="v.hacker.firstname.$error ? (!v.hacker.firstname.required ? 'Required' : '') : ''"
    >
      <b-input v-model.trim="v.hacker.firstname.$model" />
    </b-field>

    <b-field
      label="What is your Last Name?"
      class="required"
      :type="v.hacker.lastname.$error ? 'is-danger' : ''"
      :message="v.hacker.lastname.$error ? (!v.hacker.lastname.required ? 'Required' : '') : ''"
    >
      <b-input v-model.trim="v.hacker.lastname.$model" />
    </b-field>

    <b-field
      label="What is your Email?"
      class="required"
      :type="v.hacker.email.$error ? 'is-danger' : ''"
      :message="v.hacker.email.$error ? (!v.hacker.email.required ? 'Required' : (!v.hacker.email.email ? 'Please enter a valid email' : '')) : ''"
    >
      <b-input
        v-model.trim="v.hacker.email.$model"
        type="email"
      />
    </b-field>

    <b-field
      label="What is your Phone Number? (format: ###-###-####)"
      class="required"
      :type="v.hacker.phonenumber.$error ? 'is-danger' : ''"
      :message="v.hacker.phonenumber.$error ? (!v.hacker.phonenumber.required ? 'Required' : (!v.hacker.phonenumber.isPhoneNumberFormat ? 'Incorrect format' : '')) : ''"
    >
      <b-input v-model.trim="v.hacker.phonenumber.$model" maxlength="12" />
    </b-field>

    <b-field
      label="Which gender do you identify as?"
      class="required"
      :type="v.hacker.gender.$error ? 'is-danger' : ''"
      :message="v.hacker.gender.$error ? (!v.hacker.gender.required ? 'Required' : (!v.hacker.gender.matchesDropdown ? 'Does not match one of the choices' : '')) : ''"
    >
      <b-select v-model.trim="v.hacker.gender.$model" placeholder="Please Select">
        <option value="female">
          Female
        </option>
        <option value="male">
          Male
        </option>
        <option value="non-binary">
          Non-Binary
        </option>
        <option value="prefer not to specify">
          Prefer not to specify
        </option>
        <option value="other">
          Other
        </option>
      </b-select>
    </b-field>

    <b-field
      v-if="v.hacker.gender.$model === 'other'"
      label="Please specify your gender"
      class="required"
      :type="v.hacker.genderother.$error ? 'is-danger' : ''"
      :message="v.hacker.genderother.$error ? (!v.hacker.genderother.required ? 'Required' : '') : ''"
    >
      <b-input v-model.trim="v.hacker.genderother.$model" />
    </b-field>

    <b-field
      label="What is your race / ethnicity?"
      class="required"
      :type="v.hacker.ethnicity.$error ? 'is-danger' : ''"
      :message="v.hacker.ethnicity.$error ? (!v.hacker.ethnicity.required ? 'Required' : (!v.hacker.ethnicity.matchesDropdown ? 'Does not match one of the choices' : '')) : ''"
    >
      <b-select v-model.trim="v.hacker.ethnicity.$model" placeholder="Please Select">
        <option value="american indian">
          American Indian
        </option>
        <option value="alaskan native">
          Alaskan Native
        </option>
        <option value="asian / pacific islander">
          Asian / Pacific Islander
        </option>
        <option value="black or african american">
          Black or African American
        </option>
        <option value="hispanic">
          Hispanic
        </option>
        <option value="white / caucasian">
          White / Caucasian
        </option>
        <option value="multiple ethnicity">
          Multiple Ethnicity
        </option>
        <option value="other">
          Other
        </option>
        <option value="prefer not to answer">
          Prefer not to answer
        </option>
      </b-select>
    </b-field>

    <b-field
      v-if="v.hacker.ethnicity.$model === 'other'"
      label="Ethnicity (Please Specify)"
      class="required"
      :type="v.hacker.ethnicityother.$error ? 'is-danger' : ''"
      :message="v.hacker.ethnicityother.$error ? (!v.hacker.ethnicityother.required ? 'Required' : '') : ''"
    >
      <b-input v-model.trim="v.hacker.ethnicityother.$model" />
    </b-field>

    <b-field
      label="Will you be 19 years of age or older by January 11th, 2020?"
      class="required"
      :type="v.hacker.over19.$error ? 'is-danger' : ''"
      :message="v.hacker.over19.$error ? (!v.hacker.over19.required ? 'Required' : (!v.hacker.over19.matchesRadio ? 'Does not match one of the choices' : '')) : ''"
    >
      <b-radio v-model.trim="v.hacker.over19.$model" name="over19" native-value="yes">
        Yes
      </b-radio>
      <b-radio v-model.trim="v.hacker.over19.$model" name="over19" native-value="no">
        No
      </b-radio>
    </b-field>

    <b-field
      label="What level of education are you currently studying at?"
      class="required"
      :type="v.hacker.education.$error ? 'is-danger' : ''"
      :message="v.hacker.education.$error ? (!v.hacker.education.required ? 'Required' : (!v.hacker.education.matchesDropdown ? 'Does not match one of the choices' : '')) : ''"
    >
      <b-select v-model.trim="v.hacker.education.$model" placeholder="Please Select">
        <option value="high school">
          High School
        </option>
        <option value="undergraduate">
          Undergraduate
        </option>
        <option value="graduate">
          Graduate
        </option>
      </b-select>
    </b-field>

    <b-field
      label="What school do you currently attend?"
      class="required"
      :type="v.hacker.school.$error ? 'is-danger' : ''"
      :message="v.hacker.school.$error ? (!v.hacker.school.required ? 'Required' : '') : ''"
    >
      <b-select v-model.trim="v.hacker.school.$model" placeholder="Please Select">
        <option value="ubc">
          UBC
        </option>
      </b-select>
    </b-field>

    <b-field
      v-if="v.hacker.education === 'high school'"
      label="What is your major?"
      class="required"
      name="high-school-major"
      :type="v.hacker.major.$error ? 'is-danger' : ''"
      :message="v.hacker.major.$error ? (!v.hacker.major.required ? 'Required' : '') : ''"
    >
      <b-select v-model.trim="v.hacker.major.$model" placeholder="Please Select">
        <option value="computer science">
          Computer Science
        </option>
      </b-select>
    </b-field>

    <b-field
      v-if="v.hacker.education === 'undergraduate' || v.hacker.education === 'graduate'"
      label="What do you plan on studying?"
      class="required"
      name="university-major"
      :type="v.hacker.major.$error ? 'is-danger' : ''"
      :message="v.hacker.major.$error ? (!v.hacker.major.required ? 'Required' : '') : ''"
    >
      <b-select v-model.trim="v.hacker.major.$model" placeholder="Please Select">
        <option value="computer science">
          Computer Science
        </option>
      </b-select>
    </b-field>

    <b-field
      label="What is your graduation year?"
      class="required"
      :type="v.hacker.gradyear.$error ? 'is-danger' : ''"
      :message="v.hacker.gradyear.$error ? (!v.hacker.gradyear.required ? 'Required' : (!v.hacker.gradyear.withinValidRange ? 'Not valid year' : '')) : ''"
    >
      <b-numberinput v-model.trim="v.hacker.gradyear.$model" min="2019" max="2027" />
    </b-field>

    <b-field
      label="Where are you traveling from?"
      class="required"
      :type="v.hacker.city.$error ? 'is-danger' : ''"
      :message="v.hacker.city.$error ? (!v.hacker.city.required ? 'Required' : '') : ''"
    >
      <b-input v-model.trim="v.hacker.city.$model" />
    </b-field>

    <b-field
      label="Would you like to apply for travel reimbursement? (if you are coming from the University of Washington, or the surrounding area, we will be providing a shuttle bus)"
      class="required"
      :type="v.hacker.travel.$error ? 'is-danger' : ''"
      :message="v.hacker.travel.$error ? (!v.hacker.travel.required ? 'Required' : (!v.hacker.travel.matchesRadio ? 'Does not match one of the choices' : '')) : ''"
    >
      <b-radio v-model.trim="v.hacker.travel.$model" name="travel" native-value="no">
        No
      </b-radio>
      <b-radio v-model.trim="v.hacker.travel.$model" name="travel" native-value="travel reimbursement">
        Yes I would like to apply for a travel reimbursement
      </b-radio>
      <b-radio v-model.trim="v.hacker.travel.$model" name="travel" native-value="shuttle bus">
        Yes I would like a seat on the bus from the Seattle/UW area
      </b-radio>
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

<style lang="scss" scoped>
div.field {
    // This is to give it enough space to display *
    margin: 0px 15px;
}
.required {
    position: relative;
}
.required::before{
    content: "*";
    color: red;
    position: absolute;
    top: 0px;
    left: -10px;
}
</style>
