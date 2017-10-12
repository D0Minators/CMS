const store = require('../store')
const showBlogsTemplate = require('../templates/blog-listing.handlebars')

const createContentSuccess = function (data) {
  $('#message').text('You have succesfully created content!')
  $('#sign-up').hide()
  $('#sign-in').show()
}

const createContentFailure = function () {
  $('#message').text('Error on creating content')
}

const getAllContentSuccess = function (data) {
  $('#message').text('Success on getting all content')
  const showBlogsHtml = showBlogsTemplate({ contents: data.contents })
  $('.showBlogs').empty()
  $('.showBlogs').append(showBlogsHtml)
}

const getAllContentFailure = function () {
  $('#message').text('Error on getting all content')
}

const getOneBlogSuccess = function (data) {
  const matchingEntries = data.contents.filter(content => content._owner === store.userid)
  $('#message').text('Success on getting one user\'s blog content')
  const showBlogsHtml = showBlogsTemplate({ contents: matchingEntries })
  $('.showBlogs').empty()
  $('.showBlogs').append(showBlogsHtml)
}

const getOneBlogFailure = function () {
  $('#message').text('Failure on getting one user\'s blog content')
}

module.exports = {
  createContentSuccess,
  createContentFailure,
  getAllContentFailure,
  getAllContentSuccess,
  getOneBlogSuccess,
  getOneBlogFailure
}
