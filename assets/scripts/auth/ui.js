const store = require('../store')

const signUpSuccess = function (data) {
  store.user = data.user
  $('#message').text('You have succesfully signed up! Now User Your Details To Log In.')
  $('#sign-up').hide()
  $('#sign-in').show()
}

const signUpFailure = function () {
  $('#message').text('Error on sign up. Username might have been taken or there is a typo!')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#message').text('You have succesfully signed in!')
  $('#change-password').show()
  $('#sign-out').show()
  $('#accordion').show()
  $('#blogcontent').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const signInFailure = function () {
  $('#message').text('Error with your login, buddy!')
    .then($('#change-password').hide())
    .then($('#sign-out').hide())
}

const changePasswordSuccess = function () {
  $('#message').text('You have succesfully changed password!')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Error wtih changing your password, buddy!')
  $('#change-password').trigger('reset')
}

const signOutSuccess = function (data) {
  $('#message').text('You have succesfully signed out!')
  store.user = null
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  // collapse accordions on sign-out
  $('#view-pages').addClass('collapsed')
  $('#view-posts').addClass('collapsed')
  $('#collapseOne').removeClass('in')
  $('#collapseTwo').removeClass('in')
  $('#collapseThree').removeClass('in')
  $('#accordion').hide()
  // clear out users pages and posts
  $('.post-list').empty()
  $('.page-list').empty()
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#create-content').trigger('reset')
  $('.showblogs').addClass('hidden')
  $('#selectPage').empty()
  $('#selectPage').addClass('hidden')
  $('.showpage').addClass('hidden')
  $('form').trigger('reset')
}

const signOutFailure = function () {
  $('#message').text('Error with signing out, buddy!')
    .then($('#change-password').hide())
    .then($('#sign-out').hide())
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
