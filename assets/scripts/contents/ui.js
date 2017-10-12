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

module.exports = {
  createContentSuccess,
  createContentFailure,
  getAllContentFailure,
  getAllContentSuccess
}
