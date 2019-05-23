// used for hitting the register endpoint
import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('equip', {
      params: {
        search: search
      }
    })
  },
  show (placeId) {
    return Api().get(placeId)
  },
  post (equip) {
    return Api().post('equip', equip)
  },
  put (equip) {
    return Api().put(`journey/${equip.id}`, equip)
  }
}
