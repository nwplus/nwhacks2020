<template>
  <div>
    <div class="header" :class="{visible: isTimeout}">
      <div class="header-content">
        <svg
          width="162"
          height="169"
          viewBox="0 0 162 169"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <a href="./signup">
            <g class="billboard" @mouseover="shadowValues = '0 0 0 0 1 0 0 0 0 0.819608 0 0 0 0 0.352941 0 0 0 1 0'" @mouseleave="shadowValues = '0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0'">
              <path d="M88.3145 136.016L101.16 143.607V151.782L88.3145 159.664L75.1768 151.782V143.607L88.3145 136.016Z" fill="#606060" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M101.16 143.607L88.3145 136.016L75.1768 143.607L88.3145 150.906V159.664L101.16 151.782V143.607Z" fill="#3B3B3B" />
              <path d="M96.7243 142.354L85.9507 148.691L78.9795 144.889V108.765L85.9507 111.934L96.7243 105.597V142.354Z" fill="#3B3B3B" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M85.9507 111.934L78.9795 108.765V144.889L85.9507 148.691V111.934Z" fill="#606060" />
              <path d="M8 159.465V144.889H10.535V158.831L16.8724 163.268L156.296 83.4158L146.79 77.7121V66.3047H149.325V77.0784L162 84.6833L20.0412 168.338L8 159.465Z" fill="#3B3B3B" />
              <path d="M8 158.198V143.621H10.535V157.564L16.8724 162L154.395 80.8807L146.79 76.4445V65.0371H149.325V75.8108L162 83.4157L20.0412 167.07L8 158.198Z" fill="#606060" />
              <path d="M39.687 129.679V143.622L44.1232 146.79" stroke="#606060" stroke-width="1.26749" />
              <path d="M89.1191 100.527V114.469L94.1891 117.638" stroke="#606060" stroke-width="1.26749" />
              <path d="M125.877 78.9795V92.9219L132.214 96.7243" stroke="#606060" stroke-width="1.26749" />
              <path d="M13.7036 161.366L151.86 79.6133" stroke="#606060" stroke-width="1.26749" />
              <g filter="url(#filter0_d)">
                <path id="billboard" d="M150.913 73.4594L13.07 154.395L8.2535 150.783C8.09392 150.663 8 150.475 8 150.276V87.8518L145.211 8.18076C145.404 8.06867 145.642 8.06641 145.837 8.17482L151.226 11.1687V72.9129C151.226 73.1377 151.107 73.3456 150.913 73.4594Z" fill="white" />
              </g>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M151.226 11.1687L13.07 91.0206V154.395L8.2535 150.783C8.09392 150.663 8 150.475 8 150.276V87.8518L145.211 8.18076C145.404 8.06867 145.642 8.06641 145.837 8.17483L151.226 11.1687Z" fill="#3B3B3B" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.07 91.0206L151.226 11.1687L145.837 8.17483C145.642 8.06641 145.404 8.06867 145.211 8.18076L8 87.8518L13.07 91.0206Z" fill="#606060" />
              <path d="M41.9448 112.083L44.8546 110.403L40.2072 96.449L37.5052 98.009L32.3007 117.651L35.2106 115.971L36.3362 111.399L40.9504 108.735L41.9448 112.083ZM38.7878 101.356L40.2291 106.3L37.153 108.076L38.7878 101.356ZM56.5189 97.679C56.5806 93.9595 55.0012 92.3759 51.8419 94.1999C50.5533 94.9439 49.5837 96.3118 49.2823 97.1037L49.303 95.8559L46.7257 97.3439L46.444 114.334L49.0213 112.846L49.1208 106.846C49.5669 107.254 50.575 107.29 51.635 106.678C54.7943 104.854 56.4573 101.399 56.5189 97.679ZM53.8169 99.239C53.7771 101.639 52.6749 103.559 51.3239 104.339C49.9729 105.119 48.9343 104.435 48.9741 102.035C49.0139 99.6354 50.0954 97.7275 51.4464 96.9475C52.7974 96.1675 53.8567 96.8394 53.8169 99.239ZM68.9207 90.5189C68.9824 86.7994 67.4029 85.2157 64.2437 87.0397C62.955 87.7837 61.9854 89.1516 61.6841 89.9435L61.7048 88.6957L59.1275 90.1837L58.8458 107.173L61.4231 105.685L61.5225 99.6862C61.9686 100.094 62.9767 100.13 64.0368 99.518C67.196 97.694 68.859 94.2384 68.9207 90.5189ZM66.2187 92.0789C66.1789 94.4786 65.0766 96.3984 63.7256 97.1784C62.3746 97.9584 61.3361 97.2746 61.3759 94.8749C61.4157 92.4752 62.4972 90.5674 63.8482 89.7874C65.1992 89.0074 66.2585 89.6792 66.2187 92.0789ZM71.5283 78.1757L71.2465 95.1653L73.8238 93.6773L74.1055 76.6877L71.5283 78.1757ZM75.4497 80.7601L79.0655 89.8905L77.1633 96.5977L79.6575 95.1577L85.3432 75.0481L82.7659 76.5361L80.3539 85.439L78.0478 79.2601L75.4497 80.7601ZM92.2124 71.0821L92.0118 83.1765L94.5891 81.6885L94.6691 76.8651C94.722 73.6736 95.8938 71.2858 97.1409 70.5658C98.0138 70.0618 98.6282 70.2537 98.6044 71.6936L98.4758 79.4445L101.053 77.9565L101.196 69.3177C101.237 66.894 99.9059 66.4502 98.0352 67.5302C96.6842 68.3102 95.5475 69.8221 94.7574 71.5379L94.7897 69.5941L92.2124 71.0821ZM103.461 70.5772C103.403 74.0807 105.311 75.6884 108.678 73.7444C112.045 71.8004 114.044 67.9367 114.102 64.4332C114.16 60.9297 112.252 59.3221 108.885 61.2661C105.518 63.2101 103.519 67.0737 103.461 70.5772ZM106.163 69.0172C106.196 67.0255 107.18 64.7697 108.843 63.8097C110.506 62.8497 111.433 64.0015 111.4 65.9932C111.367 67.985 110.383 70.2407 108.72 71.2007C107.057 72.1607 106.13 71.009 106.163 69.0172ZM127.771 50.5525L125.762 59.9354L124.133 52.6525L121.722 54.0445L119.818 63.3674L118.085 56.1445L115.487 57.6445L118.633 67.8068L120.919 66.4868L122.857 57.6199L124.536 64.3988L126.822 63.0788L130.369 49.0525L127.771 50.5525Z" fill="#262662" />
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0.0949707"
                  width="159.226"
                  height="162.3"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="4" />
                  <feColorMatrix
                    type="matrix"
                    :values="shadowValues"
                  />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
              </defs>
            </g>
          </a>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    shadowValues: {
      type: String,
      default: () => {
        return '0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0'
      }
    },
    isTimeout: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },

  mounted: function () {
    setTimeout(() => {
      this.isTimeout = true
    }, 600)
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";
.signupText {
  max-width: 60%;
  text-align: center;
  margin: 0 20%;
}
.header {
  opacity: 0;
  transition: opacity 600ms linear 0ms;
  min-height: 105vw; // the bg image is _almost_ a square
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 100vw;
}
.billboard #billboard {
  fill: #fff;
  transition: fill .2s ease;
}
.billboard:hover #white-glow {
  opacity: 100%;
}
.billboard:hover #billboard {
  fill: #FFD154;
}
.visible {
  opacity: 1;
}
//Desktop CSS:
@include from($desktop) {
  .header {
    background-image: url("~@/assets/header.svg");
  }
  .header-content {
    padding: 24vw 0 0 68vw;
  }
}
//Mobile CSS:
@include until($desktop) {
  .header {
    background-image: url("~@/assets/header-mobile.svg");
    min-height: 264vw; // the bg image is height compared to width
  }
  .header-content {
    padding: 90vw 0 0 59vw;
  }
}
</style>
