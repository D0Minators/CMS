const getFormFields = require(`../../../lib/get-form-fields`)
// const store = require('../store')
const api = require('./api')
<<<<<<< HEAD
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#sign-in').on('submit', onSignIn)
=======
// const ui = require('./ui')

const onCreateContent = function (event) {
  console.log('Button For Create Content')
  const data = getFormFields(this)
  console.log(this)
  event.preventDefault()
  api.createContent(data)
    .then(console.log('You Have Created Content'))
    .catch(console.log('NOPPPPPE!'))
}

// const onGetContent = function (event) {
//   const data = getFormFields(this)
//   event.preventDefault()
//   api.signIn(data)
//     .then(ui.signInSuccess)
//     .catch(ui.signInFailure)
// }
// const onUpdateContent = function (event) {
//   const data = getFormFields(this)
//   event.preventDefault()
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }
//
// const onDeleteContent = function (event) {
//   event.preventDefault()
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }

const addHandlers = function () {
  $('#create-content').on('submit', onCreateContent)
>>>>>>> Added Create Content API, Events and Index.js
}

module.exports = {
  addHandlers,
<<<<<<< HEAD
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
=======
  onCreateContent
>>>>>>> Added Create Content API, Events and Index.js
}
