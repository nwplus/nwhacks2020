<template>
  <div class="emailContainer">
    <div class="leftPos">
      <div class="level is-mobile">
        <div class="level-item isMobile">
          <b-input v-model="email" class="emailInput" placeholder="hacker@nwplus.io" type="email" />
          <b-button style="color: white; background-color: #3c5587; border:none;" class="subBtn" @click="submit">
            Subscribe
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      email: ''
    }
  },
  methods: {
    async submit() {
      try {
        await this.$axios.post(process.env.mailingListUrl, {
          email_address: this.email
        })
        this.email = ''
        this.$toast.open({
          duration: 5000,
          message: `Successfully added you to our mailing list!`,
          type: 'is-success',
          position: 'is-bottom'
        })
      } catch (e) {
        const reply = e.response
        if (reply.status === 500) {
          this.$toast.open({
            duration: 5000,
            message: `Something went wrong with our sever.. please try again later`,
            position: 'is-bottom',
            type: 'is-danger'
          })
        }
        if (reply.status === 502) {
          this.$toast.open({
            duration: 5000,
            message: `An error occured: ${reply.data.errors}`,
            position: 'is-bottom',
            type: 'is-danger'
          })
        }
        if (reply.status === 400) {
          this.$toast.open({
            duration: 5000,
            message: `Please fill out all fields!`,
            position: 'is-bottom',
            type: 'is-danger'
          })
        }
      }
    }
  }
}

</script>

<style lang="scss">
@import "bulma/bulma.sass";
$title_font: Merriweather;
$sub_font: Apercu Pro, sans-serif;

.emailContainer {
  text-align: left;
  margin: 0 17%;
  @include until ($desktop) {
    margin: auto;
  }
}

.leftPos {
  padding: 16px;
}

.isMobile {
  @include from ($desktop) {
    justify-content: flex-start !important;
  }
}

@media (max-width: 300px) {
  .leftPos {
    padding: 0;
  }
}

.emailInput {
  position: relative;
  z-index: 0;
  box-sizing: border-box;
  border-radius: 4px;
  // width: 313px;
  padding-right: 0px !important;
}

#subscribeText {
  font-size: 18px;
  line-height: 23px;
  font-family: $sub_font;
  margin-bottom: 10px;
  display: block;
  @include until ($desktop) {
    display: none;
  }
}

#subscribeTextMobile {
  margin: auto;
  font-size: 18px;
  line-height: 23px;
  font-family: $sub_font;
  color: #21258A;
  margin-bottom: 30px;
  text-align: center;
  font-weight: bold;
  display: none;
  @include until ($desktop) {
    display: block;
  }
}

.subBtn {
  position: absolute;
  text-align: center;
  color: white;
  font-size: 17px;
  line-height: 21px;
  font-family: $sub_font;
  transform: translate(-20px);
}
</style>
