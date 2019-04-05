// used for hitting the register endpoint
import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('journey', {
      params: {
        search: search
      }
    })
  },
  show (placeId) {
    return Api().get(`journey/${placeId}`)
  },
  post (place) {
    return Api().post('journey', place)
  },
  put (place) {
    return Api().put(`journey/${place.id}`, place)
  }
}
