<template>
  <section>
    <b-field label="How did you hear about nwHacks?">
      <b-select placeholder="Select" required>
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
    </b-field>
    <p>
      🤖 We participate in Major League Hacking (MLH) as a MLH Member Event and are committed to providing a safe and inclusive environment for everyone attending nwHacks as required by the
      <a
        href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
      >MLH Code of Conduct</a>.
    </p>
    <div class="field">
      <b-checkbox>
        I authorize nwPlus to share certain application/registration information for event administration, ranking, MLH administration, and occasional messages about hackathons in line with the
        <a
          href="https://mlh.io/privacy"
        >MLH Privacy Policy</a>.
      </b-checkbox>
    </div>
    <div class="field">
      <b-checkbox>
        I have read and agree to the
        <a
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
        >Major League Hacking Code of Conduct</a>.
      </b-checkbox>
    </div>
    <div class="field">
      <p>💾 We use your (anonymized!) data to help you get the best sponsors and continuously improve nwHacks with each iteration.</p>
      <b-checkbox>I authorize nwPlus to use my anonymized data for data reporting.</b-checkbox>
    </div>
    <div class="field">
      <p>💼 Our hackathon aims to connect you with industry professionals, recruiters, and career opportunities. In doing so, information about our hackers is needed in order for attending companies to contact you.</p>
      <b-checkbox>I authorize nwPlus to provide my resume and supporting documents (Github, Linkedin, etc) to event sponsors for recruitment purposes upon request.</b-checkbox>
    </div>
    <div class="field">
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
