<template>
  <div>
    <panel title="The Journey Timeline">
      <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'>
      <body>
      <h1>
        <em>S</em>
        <em class="planet left">E</em>
        <em>E</em>
        <em>E</em>
        <em class="planet right">E</em>
        <em>K</em>
      </h1>
      </body>
          <v-timeline>
            <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small>
              <template v-slot:opposite>
                <span :class="`headline font-weight-bold ${year.color}--text`" v-text="year.year"></span>
              </template>
              <div class="py-3">
                <h2 :class="`headline font-weight-light mb-3 ${year.color}--text`" v-text="year.title"></h2>
                <div v-text="year.text"></div>
              </div>
            </v-timeline-item>
          </v-timeline>
    </panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      years: [
        {
          color: 'cyan',
          year: '2120',
          title: 'Takeoff: Earth',
          text: 'After 100 years of building the machinery for this spaceship and the ' +
          'self-sustaining materials for human life, the spaceship left Earths atmosphere ' +
          'from Houston, Texas (a city on Earth). The first 2 years on board were scary ' +
          'because nobody knew what could happen out here, but we made it! Now the scientists ' +
          'are working on making contact with Old Earth to see how they are doing.'
        },
        {
          color: 'green',
          year: '2125',
          title: 'Exiting the Solar System',
          text: 'When we finally made it past pluto (which by the way is still a planet) ' +
          'all that could be heard around the spaceship was applause. Passing Pluto Day is celebrated ' +
          'every Earth Year on the 27th of July. From this point onwards the only life found ' +
          'was that of old satellites discared. It took 40 years before scientists captured ' +
          'what is now known as Alien0, the first alien species we discovered on a meteor.'
        },
        {
          color: 'pink',
          year: '2160',
          title: 'Leaving the Milky Way Behind',
          text: 'Leaving the Mily Way was a difficult day for everyone on board, because it meant ' +
          'that our communications with Earth humans would be non-existant until new technologies ' +
          'are made. Here, at the very edge of the Milky Way, was where a young boy spotted ' +
          'the Space Jellyfish, floating amongst the emptyness of space. It is these space  ' +
          'jellyfish who we extract fluids from to power our communications tower so efficiently.'
        },
        {
          color: 'amber',
          year: '2200',
          title: 'Onto New Galaxies',
          text: 'The Andromeda Galaxy, also known as Messier 31, is a spiral galaxy ' +
          'approximately 780 kiloparsecs (2.5 million light-years) from Earth, ' +
          'and the nearest major galaxy to the Milky Way. Its name stems from the area of ' +
          'the Earths sky in which it appears, the constellation of Andromeda. This was the next ' +
          'place we stopped on the tour. Did you know that the he Milky Way and Andromeda galaxies ' +
          'are expected to collide in ~4.5 billion years, merging to form a giant elliptical galaxy!'
        },
        {
          color: 'orange',
          year: 'Present',
          title: 'Beyond Our Wildest Dreams',
          text: 'Some fun things we hope to see continuing on this journey include ' +
          'more members of the Virgo Supercluster (the local group of galaxies to which ' +
          'the Milky Way belongs). Particularly, we hope to visit the Triangulum Galaxy ' +
          'which is the third largest member of the Local Group, at about 5×1010 M☉. It ' +
          'is also the third spiral galaxy of this group. The scientists on board hope to  ' +
          'discover new information and fresh aliens in this galaxy which would make the ' +
          'on board alien zoo alot more fun to visit!'
        }
      ]
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
/* modified version of codepen by captainbrosset
https://codepen.io/captainbrosset/pen/JoZabN */
.v-timeline {
background-color: black;
}
.py-3 {
  color: white;
}
html {
  margin: 0;
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: #ccc;
  height: 700px;
}
html::before,
html::after,
body::before,
body::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: .5vmin;
  height: .5vmin;
  border-radius: 50%;
  color: transparent;
}
html::before {
  box-shadow: 93vw 63vh .3vmin rgba(255,255,255,.8),
              3vw 17vh .3vmin rgba(255,255,255,.8),
              28vw 85vh .3vmin rgba(255,255,255,.8),
              97vw 82vh .3vmin rgba(255,255,255,.8),
              55vw 83vh .3vmin rgba(255,255,255,.8),
              74vw 72vh .3vmin rgba(255,255,255,.8),
              84vw 11vh .3vmin rgba(255,255,255,.8),
              32vw 6vh .3vmin rgba(255,255,255,.8),
              45vw 92vh .3vmin rgba(255,255,255,.8),
              98vw 57vh .3vmin rgba(255,255,255,.8),
              63vw 98vh .3vmin rgba(255,255,255,.8),
              90vw 46vh .3vmin rgba(255,255,255,.8),
              50vw 86vh .3vmin rgba(255,255,255,.8),
              38vw 21vh .3vmin rgba(255,255,255,.8),
              74vw 2vh .3vmin rgba(255,255,255,.8),
              89vw 22vh .3vmin rgba(255,255,255,.8),
              39vw 0vh .3vmin rgba(255,255,255,.8),
              25vw 89vh .3vmin rgba(255,255,255,.8),
              54vw 58vh .3vmin rgba(255,255,255,.8),
              81vw 39vh .3vmin rgba(255,255,255,.8),
              51vw 8vh .3vmin rgba(255,255,255,.8),
              24vw 56vh .3vmin rgba(255,255,255,.8),
              50vw 23vh .3vmin rgba(255,255,255,.8),
              62vw 34vh .3vmin rgba(255,255,255,.8),
              10vw 77vh .3vmin rgba(255,255,255,.8),
              92vw 45vh .3vmin rgba(255,255,255,.8),
              70vw 40vh .3vmin rgba(255,255,255,.8),
              2vw 53vh .3vmin rgba(255,255,255,.8),
              3vw 54vh .3vmin rgba(255,255,255,.8),
              18vw 21vh .3vmin rgba(255,255,255,.8),
              48vw 47vh .3vmin rgba(255,255,255,.8),
              83vw 96vh .3vmin rgba(255,255,255,.8),
              26vw 32vh .3vmin rgba(255,255,255,.8),
              46vw 9vh .3vmin rgba(255,255,255,.8),
              2vw 13vh .3vmin rgba(255,255,255,.8),
              29vw 63vh .3vmin rgba(255,255,255,.8),
              17vw 90vh .3vmin rgba(255,255,255,.8),
              78vw 9vh .3vmin rgba(255,255,255,.8),
              15vw 39vh .3vmin rgba(255,255,255,.8),
              90vw 5vh .3vmin rgba(255,255,255,.8);
}
html::after {
  box-shadow: 67vw 35vh .2vmin .1vmin rgba(255,200,200,.8),
              89vw 13vh .2vmin .1vmin rgba(255,200,200,.8),
              77vw 62vh .2vmin .1vmin rgba(255,200,200,.8),
              1vw 74vh .2vmin .1vmin rgba(255,200,200,.8),
              38vw 15vh .2vmin .1vmin rgba(255,200,200,.8),
              79vw 10vh .2vmin .1vmin rgba(255,200,200,.8),
              16vw 47vh .2vmin .1vmin rgba(255,200,200,.8),
              74vw 71vh .2vmin .1vmin rgba(255,200,200,.8),
              30vw 96vh .2vmin .1vmin rgba(255,200,200,.8),
              13vw 98vh .2vmin .1vmin rgba(255,200,200,.8),
              9vw 40vh .2vmin .1vmin rgba(255,200,200,.8),
              9vw 71vh .2vmin .1vmin rgba(255,200,200,.8),
              12vw 93vh .2vmin .1vmin rgba(255,200,200,.8),
              91vw 26vh .2vmin .1vmin rgba(255,200,200,.8),
              73vw 48vh .2vmin .1vmin rgba(255,200,200,.8),
              61vw 46vh .2vmin .1vmin rgba(255,200,200,.8),
              20vw 3vh .2vmin .1vmin rgba(255,200,200,.8),
              90vw 59vh .2vmin .1vmin rgba(255,200,200,.8),
              48vw 72vh .2vmin .1vmin rgba(255,200,200,.8),
              91vw 68vh .2vmin .1vmin rgba(255,200,200,.8);
}
body::before {
  box-shadow: 30vw 90vh .2vmin rgba(190,200,255,.9),
              93vw 64vh .2vmin rgba(190,200,255,.9),
              75vw 80vh .2vmin rgba(190,200,255,.9),
              37vw 24vh .2vmin rgba(190,200,255,.9),
              83vw 58vh .2vmin rgba(190,200,255,.9),
              12vw 36vh .2vmin rgba(190,200,255,.9),
              62vw 82vh .2vmin rgba(190,200,255,.9),
              87vw 91vh .2vmin rgba(190,200,255,.9),
              9vw 2vh .2vmin rgba(190,200,255,.9),
              99vw 46vh .2vmin rgba(190,200,255,.9),
              39vw 86vh .2vmin rgba(190,200,255,.9),
              48vw 42vh .2vmin rgba(190,200,255,.9),
              53vw 24vh .2vmin rgba(190,200,255,.9),
              63vw 42vh .2vmin rgba(190,200,255,.9),
              2vw 53vh .2vmin rgba(190,200,255,.9),
              67vw 11vh .2vmin rgba(190,200,255,.9),
              32vw 44vh .2vmin rgba(190,200,255,.9),
              0vw 82vh .2vmin rgba(190,200,255,.9),
              51vw 47vh .2vmin rgba(190,200,255,.9),
              74vw 30vh .2vmin rgba(190,200,255,.9);
}
body::after {
  box-shadow: 80vw 64vh .1vmin rgba(200,255,230,.7),
              32vw 45vh .1vmin rgba(200,255,230,.7),
              65vw 62vh .1vmin rgba(200,255,230,.7),
              22vw 55vh .1vmin rgba(200,255,230,.7),
              68vw 19vh .1vmin rgba(200,255,230,.7),
              54vw 34vh .1vmin rgba(200,255,230,.7),
              1vw 56vh .1vmin rgba(200,255,230,.7),
              95vw 1vh .1vmin rgba(200,255,230,.7),
              60vw 93vh .1vmin rgba(200,255,230,.7),
              14vw 82vh .1vmin rgba(200,255,230,.7),
              6vw 64vh .1vmin rgba(200,255,230,.7),
              19vw 12vh .1vmin rgba(200,255,230,.7),
              25vw 39vh .1vmin rgba(200,255,230,.7),
              21vw 36vh .1vmin rgba(200,255,230,.7),
              4vw 10vh .1vmin rgba(200,255,230,.7),
              85vw 70vh .1vmin rgba(200,255,230,.7),
              54vw 93vh .1vmin rgba(200,255,230,.7),
              9vw 46vh .1vmin rgba(200,255,230,.7),
              63vw 59vh .1vmin rgba(200,255,230,.7),
              48vw 28vh .1vmin rgba(200,255,230,.7);
}
h1 {
  margin: 0;
  height: 12vmin;
  width: 120vmin;
  display: flex;
  justify-content: center;
  position: relative;
}
h1::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  top: -26vmin;
  left: 29vmin;
  width: 62vmin;
  height: 62vmin;
  border-radius: 50%;
  border: 1.3vmin solid currentColor;
  box-sizing: border-box;
}
em {
  font-family: 'Josefin Sans', sans-serif;
  color: currentColor;
  font-size: 15vmin;
  position: relative;
  font-style: normal;
  width: 20vmin;
  text-align: center;
}
em.planet {
  -webkit-animation: planet-rotate 10s linear infinite;
  animation: planet-rotate 10s linear infinite;
  position: relative;
}
em.planet::before {
  content: "";
  position: absolute;
  top: -.5vmin;
  left: 3.5vmin;
  z-index: -1;
  width: 13vmin;
  height: 13vmin;
  border-radius: 50%;
  background: black;
}
em.planet.left {
  -webkit-transform-origin: 40vmin 5vmin;
  transform-origin: 40vmin 5vmin;
}
em.planet.right {
  -webkit-transform-origin: -20vmin 5vmin;
  transform-origin: -20vmin 5vmin;
}
@-webkit-keyframes planet-rotate {
  to {
    -webkit-transform: rotate(1turn);
  }
}
@keyframes planet-rotate {
  to {
    transform: rotate(1turn);
  }
}
</style>
