// used for hitting the register endpoint
import Api from '@/services/Api'

export default {
  index () {
    return Api().get('journey')
  },
  show (placeId) {
    return Api().get(`journey/${placeId}`)
  },
  post (place) {
    return Api().post('journey', place)
  }
}
