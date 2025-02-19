// used for hitting the bookmark endpoint
import Api from '@/services/Api'

export default {
  index (bookmark) {
    return Api().get('bookmarks', {
      params: bookmark
    })
  },
  post (bookmark) {
    return Api().post('bookmarks', {
      params: bookmark
    })
  },
  delete (bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`)
  }
}
