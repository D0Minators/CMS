const store = require('../store')

const createContentSuccess = function (data) {
  store.user = data.user
  $('#message').text('You have succesfully created content!')
  $('#sign-up').hide()
  $('#sign-in').show()
}

const createContentFailure = function () {
  $('#message').text('Error on creating content')
}

module.exports = {
  createContentSuccess,
  createContentFailure
}
