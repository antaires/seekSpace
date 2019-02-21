// used for hitting the register endpoint
import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}
