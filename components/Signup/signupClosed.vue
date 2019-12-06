<template>
  <div>
    <div id="notOpen" class="has-background-black">
      <img
        style="width: 10%;"
        src="~@/assets/NwPluslogo.svg"
      >
      <h1 class="title is-2 has-text-white">
        NwHacks signup is over
      </h1>
      <nuxt-link to="/">
        <button class="button is-large">
          take me back!
        </button>
      </nuxt-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "bulma/bulma.sass";
#notOpen {
  position: absolute;
  margin: auto;
  padding-top: 10%;
  text-align: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
}
$body-color: #4fd7db;
$button-text-color: #262662;
button {
    background: linear-gradient(180deg, #7dc8de 50.1%, #643198 164.06%);
    border-radius: 11px;
    border: none;
    color: $button-text-color;
    font-family: $body-font;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 0 15px;
    height: 50px;
    transition-duration: 0.5s;
  }
  button:hover {
    transform: scale(1.1);
  }
</style>
