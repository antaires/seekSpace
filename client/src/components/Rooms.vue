<template>
  <div>
    <div v-if="$store.state.isUserLoggedIn && $store.state.room">
      <panel title="You have selected a room: ">
      </panel>
    </div>

    <panel title="Select from our many luxurious rooms">
      <span v-if="!$store.state.isUserLoggedIn"> Please sign up or login to view rooms! </span>
      <span v-if="$store.state.isUserLoggedIn"> -- WELCOME! -- </span>

      <div v-for="room in rooms" :key="room.roomId">
        <div class="room">
          <v-flex>
            <div class="room-name">
              {{room.name}}
            </div>
            <div class="room-feature">
              {{room.feature}}
            </div>
            <div class="room-detail">
              {{room.detail}}
            </div>

            <img class="room-imageURL" :src="room.imageURL"/>
          </v-flex>
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
  },
  data () {
    return {
      rooms: [
        {
          roomId: 1,
          name: 'Eros',
          feature: 'twin bed and en-suite',
          imageURL: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/06/14/neptune-planet-space.jpg',
          detail: 'One Nepture year lasts 164.8 Earth years. In fact, since it was discovered in 1846, Nepture has only copmleted 1 year, in 2011'
        },
        {
          roomId: 2,
          name: 'Andromeda',
          feature: 'Queen size bed and double-wide galactic view window',
          imageURL: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/06/14/neptune-planet-space.jpg',
          detail: 'One Nepture year lasts 164.8 Earth years. In fact, since it was discovered in 1846, Nepture has only copmleted 1 year, in 2011'
        },
        {
          roomId: 3,
          name: 'Enceladus',
          feature: 'two full rooms and kitchen',
          imageURL: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/06/14/neptune-planet-space.jpg',
          detail: 'One Nepture year lasts 164.8 Earth years. In fact, since it was discovered in 1846, Nepture has only copmleted 1 year, in 2011'
        },
        {
          roomId: 4,
          name: 'Dione',
          feature: 'single bed and shared bath',
          imageURL: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/06/14/neptune-planet-space.jpg',
          detail: 'One Nepture year lasts 164.8 Earth years. In fact, since it was discovered in 1846, Nepture has only copmleted 1 year, in 2011'
        },
        {
          roomId: 5,
          name: 'Rhea',
          feature: 'honeymoon suite',
          imageURL: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/06/14/neptune-planet-space.jpg',
          detail: 'One Nepture year lasts 164.8 Earth years. In fact, since it was discovered in 1846, Nepture has only copmleted 1 year, in 2011'
        }
      ]
    }
  }
}
</script>

<style scoped>

.room {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.room-name {
  font-size: 30px;
}

.room-feature {
  font-size: 24px;
}

.room-booked {
  padding: 20px;
  font-size: 18px;
}

.room-imageURL {
  width: 100%;
  margin: 0 auto
}

.room-detail {
  padding: 20px;
  font-size: 18px;
}

</style>
