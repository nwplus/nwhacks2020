<template>
  <section>
    <div class="columns">
      <div id="page-three" class="column">
        <!-- <b-field
          label="How did you hear about nwHacks?"
          custom-class="has-text-primary"
          class="required"
          :type="v.hacker.source.$error ? 'is-danger' : ''"
          :message="v.hacker.source.$error ? (!v.hacker.source.required ? 'Required' : '') : ''"
        >-->
        <fieldset>
          <legend
            :class="v.hacker.source.$error ? 'error' : 'question'"
          >
            How did you hear about nwHacks?
          </legend>
          <select v-model.trim="v.hacker.source.$model" placeholder="Select" required>
            <option value="MLH">
              MLH
            </option>
            <option value="Social media">
              Social media
            </option>
            <option value="Website">
              Website
            </option>
            <option value="Word of mouth">
              Word of mouth
            </option>
            <option value="Club newsletter">
              Club newsletter
            </option>
            <option value="Faculty newsletter">
              Faculty newsletter
            </option>
            <option value="Prof-inclass">
              Prof/in class
            </option>
            <option value="Other">
              Other
            </option>
          </select>
        </fieldset>
        <b-field
          v-if="v.hacker.source.$model === 'Other'"
          label="Please specify where you heard about nwHacks"
          class="required"
          :type="v.hacker.sourceother.$error ? 'is-danger' : ''"
          :message="v.hacker.sourceother.$error ? (!v.hacker.sourceother.required ? 'Required' : '') : ''"
        >
          <b-input v-model.trim="v.hacker.sourceother.$model" />
        </b-field>
        <div class="form-field">
          <p>
            🤖 We participate in Major League Hacking (MLH) as a MLH Member Event and are committed to providing a safe and inclusive environment for everyone attending nwHacks as required by the
            <a
              href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            >MLH Code of Conduct</a>.
          </p>
          <!-- <div class="field">
          <b-checkbox v-model.trim="v.hacker.isPrivacyPolicyChecked.$model">
            I authorize nwPlus to share certain application/registration information for event administration, ranking, MLH administration, and occasional messages about hackathons in line with the
            <a
              href="https://mlh.io/privacy"
            >MLH Privacy Policy</a>.
          </b-checkbox>
          </div>-->
          <div class="form-input">
            <label class="check-box">
              <input v-model.trim="v.hacker.isPrivacyPolicyChecked.$model" type="checkbox">
              <span class="nw-checkbox" />
              <span>
                I authorize nwPlus to share certain application/registration information for event administration, ranking, MLH administration, and occasional messages about hackathons in line with the
                <a
                  href="https://mlh.io/privacy"
                >MLH Privacy Policy</a>.
              </span>
            </label>
          </div>
          <!-- <div class="field">
          <b-checkbox v-model.trim="v.hacker.isCodeOfConductChecked.$model">
            I have read and agree to the
            <a
              href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            >Major League Hacking Code of Conduct</a>.
          </b-checkbox>
          </div>-->
          <div class="form-input">
            <label class="check-box">
              <input v-model.trim="v.hacker.isCodeOfConductChecked.$model" type="checkbox">
              <span>
                I have read and agree to the
                <a
                  href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                >Major League Hacking Code of Conduct</a>.
              </span>
            </label>
          </div>
        </div>
        <!-- <div class="field">
          <p>💾 We use your (anonymized!) data to help you get the best sponsors and continuously improve nwHacks with each iteration.</p>
          <b-checkbox
            v-model.trim="v.hacker.isDataReportingChecked.$model"
          >
            I authorize nwPlus to use my anonymized data for data reporting.
          </b-checkbox>
        </div>-->
        <div class="form-field">
          <p>💾 We use your (anonymized!) data to help you get the best sponsors and continuously improve nwHacks with each iteration.</p>
          <div class="form-input">
            <label class="check-box">
              <input v-model.trim="v.hacker.isDataReportingChecked.$model" type="checkbox">
              <span>I authorize nwPlus to use my anonymized data for data reporting.</span>
            </label>
          </div>
        </div>
        <!-- <div class="field">
          <p>💼 Our hackathon aims to connect you with industry professionals, recruiters, and career opportunities. In doing so, information about our hackers is needed in order for attending companies to contact you.</p>
          <b-checkbox
            v-model.trim="v.hacker.isResumeSharingChecked.$model"
          >
            I authorize nwPlus to provide my resume and supporting documents (Github, Linkedin, etc) to event sponsors for recruitment purposes upon request.
          </b-checkbox>
        </div>-->
        <div class="form-field">
          <p>💼 Our hackathon aims to connect you with industry professionals, recruiters, and career opportunities. In doing so, information about our hackers is needed in order for attending companies to contact you.</p>
          <div class="form-input">
            <!-- <label class="check-box">
              <input v-model.trim="v.hacker.isResumeSharingChecked.$model" type="checkbox">
              <span>I authorize nwPlus to provide my resume and supporting documents (Github, Linkedin, etc) to event sponsors for recruitment purposes upon request.</span>
            </label>-->
            <b-checkbox
              v-model.trim="v.hacker.isResumeSharingChecked.$model"
              type="is-nw-primary"
            >
              I authorize nwPlus to provide my resume and supporting documents (Github, Linkedin, etc) to event sponsors for recruitment purposes upon request.
            </b-checkbox>
          </div>
        </div>
        <!-- <div class="field">
          <p>Connect with the community of nwHacks on Medium, Twitter, and Facebook! Share your story and excitement with us!</p>
          <div class="icons">
            <a href="https://medium.com/nwhacks">
              <font-awesome-icon :icon="['fab', 'medium-m']" />
            </a>
            <a href="https://twitter.com/nwhacks">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
            <a href="https://www.facebook.com/nwHacks/">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a>
          </div>
        </div>-->
      </div>
    </div>
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
// @import "bulma/bulma.sass";
$primary: #21258a;
$background-color: #f2f7fe;
$font-family: "Apercu Pro", sans-serif;
$font-color: #21258a;

$colors: (
  "nw-primary": (
    $primary,
    $primary
  )
);
@import "~bulma/sass/utilities/_all";
@import "bulma/bulma.sass";
@import "~buefy/src/scss/buefy";

section {
  background-color: $background-color;
}
#page-three {
  color: $font-color;
  background-color: $background-color;
  font-family: $font-family;
  margin: 30px 16px;
  @include from($tablet) {
    margin: 100px 380px;
  }
}
#page-three legend {
  margin-bottom: 17px;
}

#page-three legend.question {
  color: $font-color;
}

#page-three legend.error {
  color: red;
}

#page-three select {
  margin-bottom: 60px;
}

#page-three .form-field {
  margin: 30px 0;
}

// #page-three .check-box input {
//   opacity: 0;
//   position: absolute;
//   cursor: pointer;
//   height: 0;
//   width: 0;
// }

#page-three label.check-box {
  display: inline-flex;
  cursor: pointer;
  position: relative;
}

#page-three label.check-box > span {
  color: $primary;
  padding: 0.5rem 0.25rem;
}

#page-three label.check-box > input {
  height: 25px;
  width: 25px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: 1px solid #34495e;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
  transition-duration: 0.3s;
  background-color: #41b883;
  cursor: pointer;
}
</style>
