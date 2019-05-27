// used for hitting the register endpoint
import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('rooms', {
      params: {
        search: search
      }
    })
  },
  post (place) {
    return Api().post('rooms', place)
  },
  put (room) {
    return Api().put(`rooms/`, room)
  }
}
