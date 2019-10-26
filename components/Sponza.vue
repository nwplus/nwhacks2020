<template>
  <div class="sponza">
    <!-- <h2 style="margin-bottom: 30px;">
      Sponsors
    </h2> -->
    <img src="~/assets/Sponsors.svg" style="margin-top: 50px; margin-bottom: 30px;" title="Become a Sponsor" url="mailto:logistics@nwplus.io" is-wide="true">
    <br>
    <!--  -->
    <div id="sponsors-list" :class="is-flex">
      <div class="columns is-multiline is-vcentered is-centered">
        <div v-for="item in items" :key="item.name">
          <div v-if="item.rank == 'tera'">
            <div class="column">
              <a :href="formatURL(item.url)" target="_blank">
                <img class="tera" :src="item.imageURL" :alt="item.name">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <div id="sponsors-list" :class="is-flex">
      <div class="columns is-multiline is-vcentered is-centered">
        <div v-for="item in items" :key="item.name">
          <div v-if="item.rank == 'giga'">
            <div class="column">
              <a :href="formatURL(item.url)" target="_blank">
                <img class="giga" :src="item.imageURL" :alt="item.name">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <div id="sponsors-list" :class="is-flex">
      <div class="columns is-multiline is-vcentered is-centered">
        <div v-for="item in items" :key="item.name">
          <div v-if="item.rank == 'mega'">
            <div class="column">
              <a :href="formatURL(item.url)" target="_blank">
                <img class="mega" :src="item.imageURL" :alt="item.name">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <div id="sponsors-list" :class="is-flex">
      <div class="columns is-multiline is-vcentered is-centered">
        <div v-for="item in items" :key="item.name">
          <div v-if="item.rank == 'kilo'">
            <div class="column">
              <a :href="formatURL(item.url)" target="_blank">
                <img class="kilo" :src="item.imageURL" :alt="item.name">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <div id="sponsors-list" :class="is-flex">
      <div class="columns is-multiline is-vcentered is-centered">
        <div v-for="item in items" :key="item.name">
          <div v-if="item.rank == 'in-kind'">
            <div class="column">
              <a :href="formatURL(item.url)" target="_blank">
                <img class="in-kind" :src="item.imageURL" :alt="item.name">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <a href="mailto:logistics@nwplus.io">
      <img src="~/assets/ButtonSponsor.svg" style="margin-top: 50px;" title="Become a Sponsor" url="mailto:logistics@nwplus.io" is-wide="true">
    </a>
  </div>
</template>

<script>
// import Button from '~/components/Button.vue'
export default {
  // components: {
  //   Button
  // },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatURL(url) {
      if (!url.includes('http')) {
        return `http://${url}`
      } else {
        return url
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "bulma/bulma.sass";
$heading-font: "Caveat Brush";
//Desktop CSS:
.columns {
  margin-bottom: 20px !important;
}
.tera {
  width: 400px;
}
.giga {
  max-width: 350px;
}
.mega {
  max-width: 300px;
}
.kilo {
  max-width: 225px;
}
.in-kind {
  max-width: 150px;
}
h2 {
  font-family: $heading-font;
  font-size: 48px;
  line-height: 60px;
}
.sponza {
  margin-top: 5%;
  text-align: center;
}
//Mobile CSS:
@include until ($desktop) {
  }
</style>
