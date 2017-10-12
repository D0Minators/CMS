// const store = require('../store')

const createContentSuccess = function (data) {
  console.log('You have succesfully created content!')
  $('#message').text('You have succesfully created content!')
}

const createContentFailure = function () {
  console.log('Error on creating content')
  $('#message').text('Error on creating content')
}

module.exports = {
  createContentSuccess,
  createContentFailure
}
