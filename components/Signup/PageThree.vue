<template>
  <section>
    <div class="signup-content">
      <div class="page-header">
        <h2 class="header">
          Almost there... 🏃‍♀️
        </h2>
      </div>
      <b-field
        :type="v.hacker.source.$error ? 'is-danger' : ''"
        :message="v.hacker.source.$error ? (!v.hacker.source.required ? 'Required' : '') : ''"
        label="How did you hear about nwHacks?"
        class="required"
      >
        <div class="field-content">
          <b-select v-model.trim="v.hacker.source.$model" placeholder="Select" required>
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
          </b-select>
        </div>
      </b-field>
      <b-field
        v-if="v.hacker.source.$model === 'Other'"
        :type="v.hacker.sourceother.$error ? 'is-danger' : ''"
        :message="v.hacker.sourceother.$error ? (!v.hacker.sourceother.required ? 'Required' : '') : ''"
        label="If you selected “Other,” please specify where you heard about nwHacks."
        class="required"
      >
        <div class="field-content">
          <b-input
            v-model.trim="v.hacker.sourceother.$model"
            required
            placeholder="Please specify"
          />
        </div>
      </b-field>
      <div class="field-content no-margin-left">
        <p>
          🤖 We participate in Major League Hacking (MLH) as a MLH Member Event and are committed to providing a safe and inclusive environment for everyone attending nwHacks as required by the
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          >MLH Code of Conduct</a>.
        </p>
        <b-field
          :type="v.hacker.isPrivacyPolicyChecked.$error ? 'is-danger' : ''"
          :message="v.hacker.isPrivacyPolicyChecked.$error ? (!v.hacker.isPrivacyPolicyChecked.sameAs ? 'Required' : '') : ''"
          class="required is-marginless"
        >
          <b-checkbox v-model.trim="v.hacker.isPrivacyPolicyChecked.$model" required>
            I authorize nwPlus to share certain application/registration information for event administration, ranking, MLH administration, and occasional messages about hackathons in line with the
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mlh.io/privacy"
            >MLH Privacy Policy</a>.
          </b-checkbox>
        </b-field>
        <p v-if="!v.hacker.isCodeOfConductChecked.required" class="help is-danger">
          Required
        </p>
        <b-field
          :type="v.hacker.isCodeOfConductChecked.$error ? 'is-danger' : ''"
          :message="v.hacker.isCodeOfConductChecked.$error ? (!v.hacker.isCodeOfConductChecked.sameAs ? 'Required' : '') : ''"
          class="required is-marginless"
        >
          <b-checkbox v-model.trim="v.hacker.isCodeOfConductChecked.$model" required>
            I have read and agree to the
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            >MLH Code of Conduct</a>.
          </b-checkbox>
        </b-field>
        <!-- </p> -->
      </div>
      <div class="field">
        <div class="field-content">
          <p>💾 We use your (anonymized!) data to help you get the best sponsors and continuously improve nwHacks with each iteration.</p>
          <b-field
            :type="v.hacker.isDataReportingChecked.$error ? 'is-danger' : ''"
            :message="v.hacker.isDataReportingChecked.$error ? (!v.hacker.isDataReportingChecked.sameAs ? 'Required' : '') : ''"
            class="required is-marginless"
          >
            <b-checkbox
              v-model.trim="v.hacker.isDataReportingChecked.$model"
              required
            >
              I authorize nwPlus to use my anonymized data for data reporting.
            </b-checkbox>
          </b-field>
        </div>
      </div>
      <div class="field-content">
        <p>💼 Our hackathon aims to connect you with industry professionals, recruiters, and career opportunities. In doing so, information about our hackers is needed in order for attending companies to contact you.</p>
        <b-field
          :type="v.hacker.isResumeSharingChecked.$error ? 'is-danger' : ''"
          :message="v.hacker.isResumeSharingChecked.$error ? (!v.hacker.isResumeSharingChecked.sameAs ? 'Required' : '') : ''"
          class="required is-marginless"
        >
          <b-checkbox
            v-model.trim="v.hacker.isResumeSharingChecked.$model"
            required
          >
            I authorize nwPlus to provide my resume and supporting documents (Github, Linkedin, etc) to event sponsors for recruitment purposes upon request.
          </b-checkbox>
        </b-field>
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
