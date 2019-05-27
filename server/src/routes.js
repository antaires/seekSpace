const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const JourneyController = require('./controllers/JourneyController')
const BookmarksController = require('./controllers/BookmarksController')
const RoomController = require('./controllers/RoomController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/rooms',
    RoomController.index)
  app.post('/rooms',
    RoomController.post)

  app.get('/journey',
    JourneyController.index)
  app.get('/journey/:placeId',
    JourneyController.show)
  app.put('/journey/:placeId',
    JourneyController.put)
  app.post('/journey',
    JourneyController.post)

  app.get('/bookmarks', 
    BookmarksController.index)
  app.post('/bookmarks', 
    BookmarksController.post)
  app.delete('/bookmarks/:bookmarkId', 
    BookmarksController.delete)
}
