// used for hitting the register endpoint
import Api from '@/services/Api'

export default {
  index () {
    return Api().get('rooms')
  }
}
