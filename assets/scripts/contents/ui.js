const store = require('../store')
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
  console.log('You have succesfully received content!')
  $('#message').text('You have succesfully received content!')
  // there is a bug with this! This shows up after you sign in. That shouldn't happen!!!
}

const getContentFailure = function () {
  console.log('Error on creating content')
  $('#message').text('Error on creating content')
}

const getPostsSuccess = function (data) {
  console.log('Your post-list Has Been Retrived')
  console.log(data)
  $('#message').text('You got posts')
  // const matchingPosts = data.contents.filter(content => content.type === 'post')
  // const showContentHTML = showContent({ contents: matchingPosts })
  // $('.post-list').append(showContentHTML)
}

const getPostsFailure = function () {
  console.log('Error getting content')
  $('#message').text(console.error + ' Error on getting posts')
}

const getPagesSuccess = function (data) {
  console.log('Your post-list Has Been Retrived')
  console.log(data)
  const matchingPages = data.contents.filter(content => content.type === 'page')
  const showContentHTML = showContent({ contents: matchingPages })
  $('.page-list').append(showContentHTML)
}

const getPagesFailure = function () {
  console.log('Error getting content')
  $('#message').text('Error on getting pages')
}
module.exports = {
  createContentSuccess,
  createContentFailure,
  getPostsSuccess,
  getPostsFailure,
  getPagesSuccess,
  getPagesFailure,
  getContentSuccess,
  getContentFailure
}
