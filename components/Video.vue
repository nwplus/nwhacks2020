<template>
  <div class="video-div">
    <div v-if="video" v-on-clickaway="hideVideo" class="player-container">
      <div class="player">
        <iframe
          class="youtube"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/hJ0slbmYmKc"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
    <img class="twenty right" src="~/assets/20.svg">
    <img class="twenty left" src="~/assets/20-left.svg">
    <p class="video-title">
      nwHacks 2019 Recap
    </p>
    <a @click="showVideo">
      <img
        class="play-button"
        src="~/assets/play-button.svg"
      >
    </a>
    <img
      class="vr-man"
      src="~/assets/VR-graphic.svg"
    >
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
  mixins: [clickaway],
  data() {
    return {
      video: false
    }
  },
  methods: {
    showVideo() {
      this.video = true
    },
    hideVideo() {
      this.video = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import "bulma/bulma.sass";
.twenty {
    z-index: 1;
}
.youtube {
    width: 100%;
    height: 100%;
}
.player-container {
    width: 100%;
}
.player {
    z-index: 20;
    position: absolute;
    width: 800px;
    height: 450px;
    position: absolute;
    left: 50%;
    top: 24%;
    transform: translate(-50%,-50%) scale(1.25, 1.25);
}
.right{
    position: absolute;
    right: 0%;
    bottom: 18%;
}
 .left{
    position: absolute;
    left: 0%;
    top: 0%;
}
.vr-man {
    margin: 0 auto;
    margin-left: 7%;
    z-index: -1;
}

@keyframes pulse {
  100% {
    transform:translate(-50%,-50%) scale(1.0);
  }
  0% {
    transform:translate(-50%,-50%) scale(1.15);
  }
}

.play-button{
    position: absolute;
    margin-bottom: -3%;
    z-index: 5;
    left: 50%;
    transform: translate(-50%,-50%);
    transition: all .2s ease-in-out;
    animation: pulse 1s infinite linear alternate;
}
.play-button:hover {
  transform: translate(-50%,-50%) scale(1.15);
  animation: none;
}
.video-div {
    position: relative;
    text-align: center;
    margin-bottom: 8%;
}
.video-title {
    font-family: Apercu Pro;
    font-size: 36px;
    line-height: 37px;
    letter-spacing: 0.05em;
    -webkit-background-clip: text !important;
    background-clip: text !important;
    color: transparent;
    -webkit-text-fill-color: transparent;
    background: -webkit-linear-gradient(180deg, #91E9EE 0%, #06C1C0 100%);
    margin-bottom: 10%;
}
@include until($desktop) {
    .video-title {
        margin-bottom: 20%;
    }
    .play-button {
        left: 50%;
        width: 15%;
        transform: translate(-50%,-50%);
    }
    .vr-man {
      width: 60%;
      margin-left: 12%;
    }
    .twenty {
        display: none;
    }
    .player {
        top: 26%;
        transform: translate(-50%,-50%) scale(.80, .80);
    }
}
//mobile only styling (excludes ipad)
@include until (768px) {
  .player {
    transform: translate(-50%,-50%) scale(.4, .4);
  }
}
</style>
