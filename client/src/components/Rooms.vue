<template>
  <div>
    <div v-if="$store.state.isUserLoggedIn && $store.state.room">
      <panel title="You have selected a room: ">
        <div v-for="room in rooms" :key="room.roomId">
        <div v-if="room.roomId == $store.state.room">
          <span class="room-name"> {{room.name}} </span>
        </div>
        </div>
      </panel>
    </div>

    <panel title="Select from our many luxurious rooms">
      <span v-if="!$store.state.isUserLoggedIn"> Please sign up or login to view rooms! </span>
      <span v-if="$store.state.isUserLoggedIn"> -- WELCOME! -- </span>

      <div v-if="$store.state.isUserLoggedIn">
      <div v-for="room in rooms" :key="room.roomId">
        <div class="room">
          <v-btn
            dark
            class="cyan"
            @click="book">
            book!
          </v-btn>
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

          <v-flex>
            <img class="room-imageURL" :src="room.imageURL"/>
          </v-flex>
          </v-flex>
        </div>
      </div>
      </div>

    </panel>
  </div>
</template>

<script>
import RoomService from '@/services/RoomService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      rooms: null
    }
  },
  async mounted () {
    // do a request to backend for all the rooms
    this.rooms = (await RoomService.index()).data
  },
  methods: {
    book () {}
  }
}
</script>

<style scoped>

.room {
  padding: 20px;
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
