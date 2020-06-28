<template>
  <section class="signup-content">
    <div class="page-header">
      <h2 class="header">
        About you 📚
      </h2>
      <p>nwHacks is Western Canada’s largest collegiate hackathon taking place on January 11th - 12th, 2020 at the University of British Columbia. We focus on creating a quality hackathon experience for all of our attendees but historically we've had more applicants than we would be able to accommodate at our event. So, for a fair assessment of your application, we encourage you to put your best foot forward on this journey! ⛰️</p>
    </div>
    <div class="name-section">
      <b-field
        :type="v.hacker.firstname.$error ? 'is-danger' : ''"
        :message="v.hacker.firstname.$error ? (!v.hacker.firstname.required ? 'Required' : '‎') : ''"
        label="What is your full legal name?"
        class="name-field"
      >
        <b-input v-model.trim="v.hacker.firstname.$model" placeholder="First Name" />
      </b-field>
      <b-field
        :label="isMobile() ? '' : '‏‏‎ ‎'"
        :type="v.hacker.lastname.$error ? 'is-danger' : ''"
        :message="v.hacker.lastname.$error ? (!v.hacker.lastname.required ? 'Required' : '') : ''"
        class="name-field"
      >
        <b-input v-model.trim="v.hacker.lastname.$model" placeholder="Last Name" />
      </b-field>
    </div>
    <b-field
      :type="v.hacker.email.$error ? 'is-danger' : ''"
      :message="v.hacker.email.$error ? (!v.hacker.email.required ? 'Required' : (!v.hacker.email.email ? 'Please enter a valid email' : '')) : ''"
      label="What is your email?"
    >
      <b-input v-model.trim="v.hacker.email.$model" placeholder="hacker@email.com" type="email" />
    </b-field>

    <b-field
      :type="v.hacker.phonenumber.$error ? 'is-danger' : ''"
      :message="v.hacker.phonenumber.$error ? (!v.hacker.phonenumber.required ? 'Required' : (!v.hacker.phonenumber.isPhoneNumberFormat ? 'Incorrect format' : '')) : ''"
      label="What is your phone number? (format: ###-###-####)"
    >
      <b-input
        v-model.trim="v.hacker.phonenumber.$model"
        placeholder="000-000-0000"
        maxlength="12"
      />
    </b-field>

    <b-field
      :type="v.hacker.gender.$error ? 'is-danger' : ''"
      :message="v.hacker.gender.$error ? (!v.hacker.gender.required ? 'Required' : (!v.hacker.gender.matchesDropdown ? 'Required' : '')) : ''"
      label="Which gender do you identify as?"
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
      :type="v.hacker.genderother.$error ? 'is-danger' : ''"
      :message="v.hacker.genderother.$error ? (!v.hacker.genderother.required ? 'Required' : '') : ''"
      label="Please specify your gender"
    >
      <b-input v-model.trim="v.hacker.genderother.$model" />
    </b-field>

    <b-field
      :type="v.hacker.ethnicity.$error ? 'is-danger' : ''"
      :message="v.hacker.ethnicity.$error ? (!v.hacker.ethnicity.required ? 'Required' : (!v.hacker.ethnicity.matchesDropdown ? 'Required' : '')) : ''"
      label="What is your race / ethnicity?"
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
      :type="v.hacker.ethnicityother.$error ? 'is-danger' : ''"
      :message="v.hacker.ethnicityother.$error ? (!v.hacker.ethnicityother.required ? 'Required' : '') : ''"
      label="Ethnicity (Please Specify)"
    >
      <b-input v-model.trim="v.hacker.ethnicityother.$model" />
    </b-field>

    <b-field
      :type="v.hacker.over19.$error ? 'is-danger' : ''"
      :message="v.hacker.over19.$error ? (!v.hacker.over19.required ? 'Required' : (!v.hacker.over19.matchesRadio ? 'Required' : '')) : ''"
      label="Will you be 19 years of age or older by January 11th, 2020?"
    >
      <div class="field-content">
        <b-radio v-model.trim="v.hacker.over19.$model" name="over19" native-value="yes">
          Yes
        </b-radio>
        <b-radio v-model.trim="v.hacker.over19.$model" name="over19" native-value="no">
          No
        </b-radio>
      </div>
    </b-field>
    <b-field
      :type="v.hacker.education.$error ? 'is-danger' : ''"
      :message="v.hacker.education.$error ? (!v.hacker.education.required ? 'Required' : (!v.hacker.education.matchesDropdown ? 'Required' : '')) : ''"
      label="What level of education are you currently studying at?"
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
        <option value="recent grad">
          Recent grad
        </option>
        <option value="other">
          Other
        </option>
      </b-select>
    </b-field>

    <b-field
      :type="v.hacker.school.$error ? 'is-danger' : ''"
      :message="v.hacker.school.$error ? (!v.hacker.school.required ? 'Required' : '') : ''"
      label="What school do you currently attend? (Non-abbreviated, ex. The University of British Columbia)"
    >
      <autocomplete
        :source="schools"
        :value="v.hacker.school.$model"
        @selected="schoolSelected"
        @clear="schoolClear"
        input-class="autocomplete-field"
        placeholder="Enter your school"
      />
    </b-field>

    <b-field
      v-if="v.hacker.school.$model === 'Other'"
      :type="v.hacker.schoolother.$error ? 'is-danger' : ''"
      :message="v.hacker.schoolother.$error ? (!v.hacker.schoolother.required ? 'Required' : '') : ''"
      label="Specify your school"
    >
      <b-input
        v-model.trim="v.hacker.schoolother.$model"
        placeholder="Enter your schools name"
      />
    </b-field>

    <b-field
      :type="v.hacker.major.$error ? 'is-danger' : ''"
      :message="v.hacker.major.$error ? (!v.hacker.major.required ? 'Required' : '') : ''"
      label="What is your current/intended major? (If not in list, choose the best answer)"
      name="high-school-major"
    >
      <autocomplete
        :source="majors"
        @clear="majorClear"
        @selected="majorSelected"
        input-class="autocomplete-field"
        placeholder="Enter your area of study"
      />
    </b-field>

    <b-field
      :type="v.hacker.gradyear.$error ? 'is-danger' : ''"
      :message="v.hacker.gradyear.$error ? (!v.hacker.gradyear.required ? 'Required' : (!v.hacker.gradyear.withinValidRange ? 'Not valid year' : '')) : ''"
      label="What is your graduation year?"
    >
      <b-input
        v-model.trim="v.hacker.gradyear.$model"
        min="1900"
        max="2027"
        type="number"
        controls-position="compact"
      />
    </b-field>

    <b-field
      :type="v.hacker.city.$error ? 'is-danger' : ''"
      :message="v.hacker.city.$error ? (!v.hacker.city.required ? 'Required' : '') : ''"
      label="Where are you traveling from?"
    >
      <b-input
        v-model.trim="v.hacker.city.$model"
        placeholder="Enter your city and province/state"
      />
    </b-field>

    <b-field
      :type="v.hacker.travel.$error ? 'is-danger' : ''"
      :message="v.hacker.travel.$error ? (!v.hacker.travel.required ? 'Required' : (!v.hacker.travel.matchesRadio ? 'Required' : '')) : ''"
      label="Would you like to apply for travel reimbursement?* If you are coming from the University of Washington, or the surrounding area, we will be providing a shuttle bus."
    >
      <div class="is-block field-content radio-stack">
        <p>*Note: If you would like to apply for a travel reimbursement, we will be subsidizing a maximum of $200 CAD and this application must be submitted by 11:59PM PST November 26, 2019.</p>
        <b-radio
          v-model.trim="v.hacker.travel.$model"
          name="travel"
          native-value="no"
          class="full-width"
        >
          No, I will not need a travel reimbursement.
        </b-radio>
        <b-radio
          v-model.trim="v.hacker.travel.$model"
          name="travel"
          native-value="travel reimbursement"
          class="ull-width"
        >
          Yes, I would like to apply for a travel reimbursement.
        </b-radio>
        <b-radio
          v-model.trim="v.hacker.travel.$model"
          name="travel"
          native-value="shuttle bus"
          class="full-width"
        >
          No, but I would like a seat on the bus from the Seattle/UW area.
        </b-radio>
      </div>
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
    isMobile() {
      return !(screen.width > 769)
    },
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
@import "~bulma/sass/utilities/_all";

.name-section {
  display: flex;
  @include until($tablet) {
    display: inline;
  }
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
.radio-stack .radio {
  margin: 5px 0 !important;
}
</style>
