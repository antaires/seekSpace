<template>
  <div>
    <panel title="The Journey Timeline">
      <div id="app">
        <v-app id="inspire">
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
        </v-app>
      </div>
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
</style>
