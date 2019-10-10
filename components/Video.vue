<template>
  <div class="video-div">
    <img class="twenty right" src="~/assets/20.svg">
    <img class="twenty left" src="~/assets/20-left.svg">
    <p class="video-title">
      nwHacks 2019 Recap
    </p>
    <img
      class="play-button"
      src="~/assets/play-button.svg"
    >
    <img
      class="vr-man"
      src="~/assets/VR-graphic.svg"
    >
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
@import "bulma/bulma.sass";
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
}
.play-button{
    margin: 0% 40%;
    margin-bottom: -3%;
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
    -webkit-background-clip: text;
    background-clip: text !important;
    -webkit-text-fill-color: transparent;
    background: -webkit-linear-gradient(180deg, #91E9EE 0%, #06C1C0 100%);
    margin-bottom: 10%;
}
@include until($desktop) {
    .vr-man {
        margin-left: 10%;
    }
    .twenty {
        display: none;
    }
}
</style>
