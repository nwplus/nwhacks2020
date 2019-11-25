<template>
  <div class="sponza">
    <p class="sponsor-title">
      Sponsors
    </p>
    <br>
    <!--  -->
    <div id="sponsors-list" :class="is-flex">
      <div class="columns is-multiline is-vcentered is-centered">
        <div v-for="item in items" :key="item.name">
          <div v-if="item.rank == 'tera'">
            <div class="column">
              <a :href="formatURL(item.url)" target="_blank" rel="noopener noreferrer">
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
              <a :href="formatURL(item.url)" target="_blank" rel="noopener noreferrer">
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
              <a :href="formatURL(item.url)" target="_blank" rel="noopener noreferrer">
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
              <a :href="formatURL(item.url)" target="_blank" rel="noopener noreferrer">
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
              <a :href="formatURL(item.url)" target="_blank" rel="noopener noreferrer">
                <img class="in-kind" :src="item.imageURL" :alt="item.name">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <a href="mailto:logistics@nwplus.io">
      <img
        class="becomeSponsor"
        src="~/assets/ButtonSponsor.svg"
        style="margin-top: 15px;"
        title="Become a Sponsor"
      >
    </a>
  </div>
</template>

<script>
export default {
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
.becomeSponsor {
  transition-duration: 0.5s;
  width: auto;
}
.becomeSponsor:hover {
  transform: scale(1.1);
}
$heading-font: "Caveat Brush";
//Desktop CSS:
img {
  transition: 0.5s, -moz-filter 0.5s, -o-filter 0.5s, filter 0.5s;
  width: 100%;
}

img:hover {
  filter: none;
}
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
.sponsor-title {
  font-family: Apercu Pro;
  font-size: 36px;
  line-height: 37px;
  letter-spacing: 0.05em;
  font-weight: bold;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent;
  -webkit-text-fill-color: transparent;
  background: -webkit-linear-gradient(180deg, #91e9ee 0%, #06c1c0 100%);
  margin-bottom: 20px;
}
.sponza {
  margin-top: 5%;
  text-align: center;
}
//Mobile CSS:
@include until($desktop) {
}
</style>
