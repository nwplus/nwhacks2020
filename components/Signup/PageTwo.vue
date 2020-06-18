<template>
  <section>
    <div class="signup-content">
      <div class="page-header">
        <h2 class="header">
          Nice to meet you, {{ v.hacker.firstname.$model }} 👋
        </h2>
        <p>Help us get to know you better by providing as many links as you feel will support your application.</p>
      </div>
      <b-field
        :type="v.hacker.firstHackathon.$error ? 'is-danger' : ''"
        :message="v.hacker.firstHackathon.$error ? (!v.hacker.firstHackathon.required ? 'Required' : (!v.hacker.firstHackathon.matchesRadio ? 'Required' : '')) : ''"
        label="Is this your first hackathon?"
      >
        <div class="field-content">
          <b-radio
            v-model.trim="v.hacker.firstHackathon.$model"
            name="firstHackathon"
            native-value="yes"
          >
            Yes
          </b-radio>
          <b-radio
            v-model.trim="v.hacker.firstHackathon.$model"
            name="firstHackathon"
            native-value="no"
          >
            No
          </b-radio>
        </div>
      </b-field>
      <b-field
        :type="v.hacker.attendedLHD.$error ? 'is-danger' : ''"
        :message="v.hacker.attendedLHD.$error ? (!v.hacker.attendedLHD.required ? 'Required' : (!v.hacker.attendedLHD.matchesRadio ? 'Required' : '')) : ''"
        label="Have you attended either LHD: Learn Day or LHD: Build Day?"
      >
        <div class="field-content">
          <b-radio
            v-model.trim="v.hacker.attendedLHD.$model"
            name="attendedLHD"
            native-value="yes"
          >
            Yes
          </b-radio>
          <b-radio
            v-model.trim="v.hacker.attendedLHD.$model"
            name="attendedLHD"
            native-value="no"
          >
            No
          </b-radio>
        </div>
      </b-field>
      <b-field
        :type="(!v.hacker.hackerRoleDeveloper.$model && !v.hacker.hackerRoleDesigner.$model && !v.hacker.hackerRoleHardware.$model && !v.hacker.hackerRoleOther.$model)
          && true ? 'is-danger' : ''"
        :message="(!v.hacker.hackerRoleDeveloper.$model && !v.hacker.hackerRoleDesigner.$model && !v.hacker.hackerRoleHardware.$model && !v.hacker.hackerRoleOther.$model)
          && (v.hacker.hackerRoleDeveloper.$dirty || v.hacker.hackerRoleDesigner.$dirty || v.hacker.hackerRoleHardware.$dirty || v.hacker.hackerRoleOther.$dirty) ? 'Required' : ''"
        label="How do you wish to contribute at nwHacks? Your choice will not affect your application and you can always change your mind after you submit."
      >
        <div class="field-content">
          <b-checkbox v-model="v.hacker.hackerRoleDeveloper.$model">
            Developer
          </b-checkbox>
          <b-checkbox v-model="v.hacker.hackerRoleDesigner.$model">
            Designer
          </b-checkbox>
          <b-checkbox v-model="v.hacker.hackerRoleHardware.$model">
            Hardware/Robotics
          </b-checkbox>
          <b-checkbox v-model="v.hacker.hackerRoleOther.$model">
            Other
          </b-checkbox>
        </div>
      </b-field>

      <b-field label="GitHub link (ex. http://github.com/nwplus) (optional)">
        <b-input v-model="v.hacker.linkGithub.$model" placeholder="optional" type="url" />
      </b-field>

      <b-field label="Personal website/portfolio link (ex. http://mywebsite.ca) (optional)">
        <b-input v-model="v.hacker.linkPortfolio.$model" placeholder="optional" type="url" />
      </b-field>

      <b-field label="LinkedIn (ex. http://ca.linkedin.com/company/nwplus) (optional)">
        <b-input v-model="v.hacker.linkLinkedin.$model" placeholder="optional" type="url" />
      </b-field>

      <b-field
        :type="v.hacker.linkResume.$error ? 'is-danger' : ''"
        :message="v.hacker.linkResume.$error ? (!v.hacker.linkResume.required ? 'Required' : '') : ''"
        label="Resume link (Please ensure this link is publicly accessible by opening the link in an incognito browser)"
      >
        <b-input v-model="v.hacker.linkResume.$model" placeholder="required" type="url" />
      </b-field>

      <b-field
        :type="v.hacker.longTechnology.$error ? 'is-danger' : ''"
        :message="v.hacker.longTechnology.$error ? (!v.hacker.longTechnology.required ? 'Required' : '') : ''"
        label="🏗️ How would you like to utilize technology to make the world a better place?"
      >
        <b-input
          v-model.trim="v.hacker.longTechnology.$model"
          type="textarea"
          name="longTechnology"
          minlength="10"
          maxlength="650"
          placeholder="Max 650 characters"
        />
      </b-field>

      <b-field
        :type="v.hacker.longProject.$error ? 'is-danger' : ''"
        :message="v.hacker.longProject.$error ? (!v.hacker.longProject.required ? 'Required' : '') : ''"
        label="🏅 Tell us about a project you've worked on outside of school. This does not have to be technical or design related, just something you've worked on that you're proud of."
      >
        <b-input
          v-model.trim="v.hacker.longProject.$model"
          type="textarea"
          name="longProject"
          minlength="10"
          maxlength="650"
          placeholder="Max 650 characters"
        />
      </b-field>
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
