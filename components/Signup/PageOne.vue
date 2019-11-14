<template>
  <section id="page-one">
    <h1 class="title">
      About you 📚
    </h1>
    <p class="description">
      nwHacks is Western Canada’s largest collegiate hackathon taking place on January 11th - 12th, 2020 at the University of British Columbia. We focus on creating a quality hackathon experience all of our attendees but historically we've had more applicants than we would be able to accommodate at our event. So, for a fair assessment of your application, we encourage you to put your best foot forward on this journey! ⛰️
    </p>
    <div class="name-section">
      <b-field
        label="What is your full leagal name?"
        custom-class="field-label"
        :type="v.hacker.firstname.$error ? 'is-danger' : ''"
        :message="v.hacker.firstname.$error ? (!v.hacker.firstname.required ? 'Required' : '') : ''"
      >
        <b-input v-model.trim="v.hacker.firstname.$model" placeholder="First Name" />
      </b-field>

      <b-field
        label=""
        :type="v.hacker.lastname.$error ? 'is-danger' : ''"
        :message="v.hacker.lastname.$error ? (!v.hacker.lastname.required ? 'Required' : '') : ''"
      >
        <b-input v-model.trim="v.hacker.lastname.$model" placeholder="Last Name" />
      </b-field>
    </div>

    <b-field
      label="What is your Email?"
      :type="v.hacker.email.$error ? 'is-danger' : ''"
      :message="v.hacker.email.$error ? (!v.hacker.email.required ? 'Required' : (!v.hacker.email.email ? 'Please enter a valid email' : '')) : ''"
    >
      <b-input
        v-model.trim="v.hacker.email.$model"
        placeholder="hacker@email.com"
        type="email"
      />
    </b-field>

    <b-field
      label="What is your Phone Number? (format: ###-###-####)"
      :type="v.hacker.phonenumber.$error ? 'is-danger' : ''"
      :message="v.hacker.phonenumber.$error ? (!v.hacker.phonenumber.required ? 'Required' : (!v.hacker.phonenumber.isPhoneNumberFormat ? 'Incorrect format' : '')) : ''"
    >
      <b-input v-model.trim="v.hacker.phonenumber.$model" placeholder="000-000-0000" maxlength="12" />
    </b-field>

    <b-field
      label="Which gender do you identify as?"
      :type="v.hacker.gender.$error ? 'is-danger' : ''"
      :message="v.hacker.gender.$error ? (!v.hacker.gender.required ? 'Required' : (!v.hacker.gender.matchesDropdown ? 'Does not match one of the choices' : '')) : ''"
    >
      <b-select v-model.trim="v.hacker.gender.$model" placeholder="Select an option">
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
      :type="v.hacker.genderother.$error ? 'is-danger' : ''"
      :message="v.hacker.genderother.$error ? (!v.hacker.genderother.required ? 'Required' : '') : ''"
    >
      <b-input v-model.trim="v.hacker.genderother.$model" />
    </b-field>

    <b-field
      label="What is your race / ethnicity?"
      :type="v.hacker.ethnicity.$error ? 'is-danger' : ''"
      :message="v.hacker.ethnicity.$error ? (!v.hacker.ethnicity.required ? 'Required' : (!v.hacker.ethnicity.matchesDropdown ? 'Does not match one of the choices' : '')) : ''"
    >
      <b-select v-model.trim="v.hacker.ethnicity.$model" placeholder="Select an option">
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
      :type="v.hacker.ethnicityother.$error ? 'is-danger' : ''"
      :message="v.hacker.ethnicityother.$error ? (!v.hacker.ethnicityother.required ? 'Required' : '') : ''"
    >
      <b-input v-model.trim="v.hacker.ethnicityother.$model" />
    </b-field>

    <b-field
      label="Will you be 19 years of age or older by January 11th, 2020?"
      class="display-block"
      :type="v.hacker.over19.$error ? 'is-danger' : ''"
      :message="v.hacker.over19.$error ? (!v.hacker.over19.required ? 'Required' : (!v.hacker.over19.matchesRadio ? 'Does not match one of the choices' : '')) : ''"
    >
      <b-radio v-model.trim="v.hacker.over19.$model" class="inline-radio" name="over19" native-value="yes">
        Yes
      </b-radio>
      <b-radio v-model.trim="v.hacker.over19.$model" class="inline-radio" name="over19" native-value="no">
        No
      </b-radio>
    </b-field>

    <b-field
      label="What level of education are you currently studying at?"
      :type="v.hacker.education.$error ? 'is-danger' : ''"
      :message="v.hacker.education.$error ? (!v.hacker.education.required ? 'Required' : (!v.hacker.education.matchesDropdown ? 'Does not match one of the choices' : '')) : ''"
    >
      <b-select v-model.trim="v.hacker.education.$model" placeholder="Select an option">
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
      :type="v.hacker.school.$error ? 'is-danger' : ''"
      :message="v.hacker.school.$error ? (!v.hacker.school.required ? 'Required' : '') : ''"
    >
      <autocomplete
        :source="schools"
        input-class="field"
        placeholder="Enter your school"
        :value="v.hacker.school.$model"
        @selected="schoolSelected"
        @clear="schoolClear"
      />
    </b-field>

    <b-field
      v-if="v.hacker.school.$model === 'Other'"
      label="Specify your school"
      :type="v.hacker.schoolother.$error ? 'is-danger' : ''"
      :message="v.hacker.schoolother.$error ? (!v.hacker.schoolother.required ? 'Required' : '') : ''"
    >
      <b-input v-model.trim="v.hacker.schoolother.$model" />
    </b-field>

    <b-field
      label="What is your current/intended major?"
      name="high-school-major"
      :type="v.hacker.major.$error ? 'is-danger' : ''"
      :message="v.hacker.major.$error ? (!v.hacker.major.required ? 'Required' : '') : ''"
    >
      <autocomplete
        :source="majors"
        input-class="field"
        placeholder="Enter your area of study"
        @clear="majorClear"
        @selected="majorSelected"
      />
    </b-field>

    <b-field
      label="What is your graduation year?"
      :type="v.hacker.gradyear.$error ? 'is-danger' : ''"
      :message="v.hacker.gradyear.$error ? (!v.hacker.gradyear.required ? 'Required' : (!v.hacker.gradyear.withinValidRange ? 'Not valid year' : '')) : ''"
    >
      <b-input v-model.trim="v.hacker.gradyear.$model" min="1900" max="2027" type="number" controls-position="compact" />
    </b-field>

    <b-field
      label="Where are you traveling from?"
      :type="v.hacker.city.$error ? 'is-danger' : ''"
      :message="v.hacker.city.$error ? (!v.hacker.city.required ? 'Required' : '') : ''"
    >
      <b-input v-model.trim="v.hacker.city.$model" placeholder="Enter your city and province/state" />
    </b-field>

    <b-field
      label="Would you like to apply for travel reimbursement? (if you are coming from the University of Washington, or the surrounding area, we will be providing a shuttle bus)"
      class="display-block"
      :type="v.hacker.travel.$error ? 'is-danger' : ''"
      :message="v.hacker.travel.$error ? (!v.hacker.travel.required ? 'Required' : (!v.hacker.travel.matchesRadio ? 'Does not match one of the choices' : '')) : ''"
    >
      <b-radio v-model.trim="v.hacker.travel.$model" name="travel" native-value="no" class="inline-radio full-width">
        No
      </b-radio>
      <b-radio v-model.trim="v.hacker.travel.$model" name="travel" native-value="travel reimbursement" class="inline-radio full-width">
        Yes I would like to apply for a travel reimbursement
      </b-radio>
      <b-radio v-model.trim="v.hacker.travel.$model" name="travel" native-value="shuttle bus" class="inline-radio full-width">
        Yes I would like a seat on the bus from the Seattle/UW area
      </b-radio>
    </b-field>
  </section>
</template>

<script>
import Autocomplete from 'vuejs-auto-complete'
import schools from '../../data/schools.json'
import majors from '../../data/majors.json'

export default {
  components: {
    Autocomplete
  },
  props: {
    v: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      schools: schools,
      majors: majors
    }
  },
  methods: {
    schoolClear() {
      this.v.hacker.school.$model = ''
    },
    schoolSelected(value) {
      this.v.hacker.school.$model = value.display
    },
    majorClear() {
      this.v.hacker.major.$model = ''
    },
    majorSelected(value) {
      this.v.hacker.major.$model = value.display
    }
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";

#page-one {
    background: #F2F7FE;
    width: 40%;
    margin: 0 auto;
}
.title {
    font-size: 40px;
    font-weight: bold;
    color: #2C0A92;
}
.description {
    color: #2C0A92;
    margin-bottom: 60px;
}
.name-section * {
    display: inline-block;
}
.display-block {
    display: block !important;
}
.inline-radio {
    display: inline-flex !important;
}
.full-width {
    width: 100%;
}
.radio {
    margin: 5px 0 !important;
}
div.field {
    margin: 20px 0 !important;
    font-size: 20px;
}
@include until ($tablet) {
    #page-one {
        width: 95%;
    }
}
</style>
