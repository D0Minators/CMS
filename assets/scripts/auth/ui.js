const store = require('../store')
const contentApi = require('../contents/api')
const ui = require('../contents/ui')

const signUpSuccess = function (data) {
  store.user = data.user
  $('#message').text('You have succesfully signed up!')
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#list-body').hide()
  $('#get-movies').hide()
}

const signUpFailure = function () {
  $('#message').text('Error on sign up. Username might have been taken or there is a typo!')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#message').text('You have succesfully signed in!')
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#list-body').show()
  $('#get-movies').show()
  contentApi.getContent()
  .then(ui.getContentSuccess)
  .catch(ui.getContentFailure)
}

const signInFailure = function () {
  $('#message').text('Error with your login, buddy!')
    .then($('#change-password').hide())
    .then($('#sign-out').hide())
    .then($('#list-body').hide())
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
  $('#list-body').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#list').empty()
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
