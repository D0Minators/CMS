const getFormFields = require(`../../../lib/get-form-fields`)
// const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onCreateContent = function (event) {
  console.log('Button For Create Content is Running')
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.createContent(data)
    .then(ui.createContentSuccess)
    .catch(ui.createContentFailure)
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
}

module.exports = {
  addHandlers,
  onCreateContent
}
