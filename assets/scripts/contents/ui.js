// const store = require('../store')
const showContent = require('../templates/content-listing.handlebars')

const createContentSuccess = function (data) {
  console.log('You have succesfully created content!')
  $('#message').text('You have succesfully created content!')
}

const createContentFailure = function () {
  console.log('Error on creating content')
  $('#message').text('Error on creating content')
}

const getContentSuccess = function (data) {
  console.log('Content Has Been Retrived')
  const showContentHTML = showContent({ contents: data.contents })
  $('.post-list').append(showContentHTML)
}

const getContentFailure = function () {
  console.log('Error getting content')
  $('#message').text('Error on getting content')
}
module.exports = {
  createContentSuccess,
  createContentFailure,
  getContentSuccess,
  getContentFailure
}
