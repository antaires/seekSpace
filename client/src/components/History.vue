<template>
<div class="w3-container">
  <panel title="">
    <div class="main">
      <div class="header">
        <h1>A Brief History of seekSpace</h1>
        <p class=subscript> for an extended version, see our upcoming book!</p>
      </div>
      <div class="past">
        <h2> The Past </h2>
        <p> The company was founded in the second dark ages of the mid 2000s, at a time
            when the human race had not yet colonized a single planetary body. The
            visionary missionZero launched from a small base in Arizona, and established
            the first continuously inhabited colony on Mars. With the colony as a launch
            convenient launch base, seekSpace quickly expanded into commercial asteroid
            mining, comet deflection, and public-space access programs.
        </p>
        <v-flex>
        <v-img contain
          src="https://static.planetminecraft.com/files/resource_media/screenshot/1325/world2_5744256.jpg"
          aspect-ratio="1"></v-img>
        </v-flex>
      </div>
      <div class="present">
        <h3> The Present </h3>
          <p>500 years later, the company is still going strong thanks to the hard work
          of its team and with support from the public. We are excited to announce
          the innagural flight of the colony ship Charon (we respect that Pluto does
          things a little differently).
        </p>
        <div class="spacer"></div>
        <v-img contain
          src="https://www.juancole.com/images/2018/03/a-prototype-mars-colony-in-the-m-750x422.jpg"
          aspect-ratio="1"></v-img>
      </div>
      <div class="future">
        <h4> The Future </h4>
          <p>With the present success of the company and the newly invented Pimko
          engine, seekSpace has a bright future. We promise to continue to push
          into the great frontier of space, catologue our discoveries as open
          source publicatoins in Open Science Direct, and ferry the citizens of
          the modern Hegemony to the expanse of new planets we may soon call
          home.
          </p>
        <div class="spacer"></div>
        <v-img contain src="https://vignette.wikia.nocookie.net/macrossfrontier/images/f/f2/Macross_fleet.jpg/revision/latest?cb=20120916013151">
        </v-img>
      </div>
    </div>
  </panel>
</div>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  }
}
</script>

<style scoped>
.main {
  background-color: rgb(65, 57, 170)
}
.header {
  color: rgb(255, 255, 255);
  background-color: rgb(5, 0, 77);
  font-family: verdana;
  font-size: 200%;
  padding: 30px
}
.subscript {
  color: rgb(255, 255, 255);
  background-color: rgb(5, 0, 77);
  font-family: courier;
  font-size: 100%;
  padding: 10px
}
.past {
  color: rgb(255, 255, 255);
  background-color: rgb(36, 31, 112);
  font-family: verdana;
  font-size: 100%;
}
.present {
  color: rgb(255, 255, 255);
  background-color: rgb(59, 52, 153);
  font-family: verdana;
  font-size: 100%;
}
.future {
  color: rgb(255, 255, 255);
  background-color: rgb(112, 106, 199);
  font-family: verdana;
  font-size: 100%;
}
.spacer {
  padding: 1px
}
</style>
