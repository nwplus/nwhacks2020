<template>
  <div id="teamSection">
    <ul id="grid" class="clear">
      <li v-for="index in 112" :key="index" class="container">
        <img :src="'/team-section/Vector' + index + '.svg.png'" class="teamPic">
        <div v-if="imageIndexes.includes(index) && linkedins[index] !== ''">
          <a :href="linkedins[index]" class="icon" title="LinkedIn" target="_blank" rel="noopener">
            <img class="linkedin" src="/team-section/linkedin.svg">
          </a>
        </div>
      </li>
    </ul>
    <div id="teamSectionFooter">
      <p id="teamSectionText">
        Made with love by the nwPlus team
      </p>
      <div id="mascotDiv">
        <img id="mascot" src="/team-section/mascot.svg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamSection',
  data() {
    return {
      resetFuncs: [],
      imageIndexes: [6,
        19, 20, 22, 23, 24,
        33, 34, 35, 36, 37, 39,
        46, 47, 49, 50, 51, 52, 53,
        60, 61, 62, 63, 64, 65, 66, 67,
        74, 76, 77, 78, 79, 80,
        89, 90, 91, 92, 93, 94 ],
      linkedins: {
        6: '',
        19: '',
        20: 'https://www.linkedin.com/in/allison-chiang/',
        22: '',
        23: 'https://www.linkedin.com/in/tiffanycyap',
        24: 'https://www.linkedin.com/in/cayenne-chen-471087171/',
        33: '',
        34: 'https://www.linkedin.com/in/anita-tse/',
        35: 'https://www.linkedin.com/in/anneguo3/',
        36: 'https://www.linkedin.com/in/austinkobayashi/',
        37: 'https://www.linkedin.com/in/venessali/',
        39: '',
        46: 'https://www.linkedin.com/in/shu-ting-hu/',
        47: '',
        49: 'https://linkedin.com/in/ianmah',
        50: 'https://linkedin.com/in/anlin-chen',
        51: '',
        52: 'https://www.linkedin.com/in/luceliu/',
        53: '',
        60: 'https://www.linkedin.com/in/kevin-zou/',
        61: 'https://www.linkedin.com/in/jvssicawu',
        62: 'https://www.linkedin.com/in/linstanford',
        63: '',
        64: 'https://www.linkedin.com/in/nicholaswongx/',
        65: 'https://www.linkedin.com/in/anita-mahinpei/',
        66: 'https://www.linkedin.com/in/joiceyhtang/',
        67: '',
        74: 'https://www.linkedin.com/in/bonnyyu00',
        76: '',
        77: '',
        78: 'https://www.linkedin.com/in/r-xie/',
        79: 'https://www.linkedin.com/in/victoriasekim/',
        80: '',
        89: 'https://www.linkedin.com/in/giulio-rossi-662152110/',
        90: '',
        91: '',
        92: 'https://www.linkedin.com/in/nadakourkmas/',
        93: 'https://www.linkedin.com/in/elaineauyang/'
      }
    }
  },
  mounted() {
    this.setupAnimation()
    const teamSection = window.document.getElementById('teamSection')
    const self = this
    const top = screen.width < 768 ? teamSection.offsetTop : teamSection.offsetTop - teamSection.offsetHeight
    const resetTop = top - window.innerHeight
    function scrollFunc(event) {
      const scroll = window.pageYOffset || document.documentElement.scrollTop
      if (scroll > top) {
        self.resetFuncs.forEach(fn => fn())
        self.resetFuncs = []
      }
      if (self.resetFuncs.length === 0 && scroll < resetTop) {
        self.setupAnimation()
      }
    }
    window.addEventListener('scroll', scrollFunc)
  },
  methods: {
    setupAnimation() {
      Array.from(window.document.getElementsByClassName('teamPic')).forEach((element) => {
        const x = screen.width < 768 ? Math.random() * 400 - 200 : Math.random() * 800 - 400
        const y = screen.width < 768 ? Math.random() * 250 - 125 : Math.random() * 500 - 250
        const transformString = `transform: translate(${x}px, ${y}px);`
        const transition = Math.random() * 2 + 0.5
        element.style.cssText = `${transformString} transition-duration: 0s;`
        this.resetFuncs.push(() => {
          element.style.cssText = `transition-duration: ${transition}s;`
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";
.teamPic {
  transform: translate(0, 0);
  transition-duration: 3s;
  transition-timing-function: ease-in;
}
#teamSection {
  margin-bottom: 0;
}

#grid {
  position: relative;
  width: 70%;
  padding: 0;
  margin: 5% 0 15% 15%;
}

.clear:after {
  content: "";
  display: block;
  clear: both;
}

#grid li {
  list-style-type: none;
  position: relative;
  float: left;
  width: 8.96428571429%;
  margin-right: -2%;
  margin-bottom: -0.45%;
}

img {
  width: 100%;
  height: 100%;
}

#grid li:nth-child(14n+2),
#grid li:nth-child(14n+4),
#grid li:nth-child(14n+6),
#grid li:nth-child(14n+8),
#grid li:nth-child(14n+10),
#grid li:nth-child(14n+12),
#grid li:nth-child(14n+14) {
  -o-transform: translateY(47.5%);
  -moz-transform: translateY(47.5%);
  -webkit-transform: translateY(47.5%);
  -ms-transform: translateY(47.5%);
  transform: translateY(47.5%);
}

li:hover .icon {
  opacity: 100%;
}

/* The icon inside the overlay is positioned in the middle vertically and horizontally */
.icon {
  color: white;
  font-size: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-49.5%, -53%);
  -ms-transform: translate(-49.5%, -53%);
  -o-transform: translate(-49.5%, -53%);
  -moz-transform: translate(-49.5%, -53%);
  -webkit-transform: translate(-49.5%, -53%);
  text-align: center;
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

#teamSectionFooter {
  display: inline;
  text-align: center;
}

#teamSectionText {
  color: #F9C2E3;
  font-size: 1.5rem;
}
#mascotDiv{
  width: 100%;
}
#mascot {
  width: 10%;
  float: right;
  margin-right: 5%;
  -o-transform: translateY(-60%);
  -moz-transform: translateY(-60%);
  -webkit-transform: translateY(-60%);
  -ms-transform: translateY(-60%);
  transform: translateY(-60%);
}
@include until($desktop) {
  #mascot {
    margin: auto;
    float: none;
    transform: none;
    width: 10%;
  }

}
</style>
