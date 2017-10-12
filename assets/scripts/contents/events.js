const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onCreateContent = function (event) {
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

const onVisitorView = function (event) {
  event.preventDefault()
  api.getAllContent()
    .then(ui.getAllContentSuccess)
    .catch(ui.getAllContentFailure)
}

const onViewOneBlog = function (event) {
  store.userid = getFormFields(this).userid
  event.preventDefault()
  api.getOneBlog()
    .then(ui.getOneBlogSuccess)
    .catch(ui.getOneBlogFailure)
}

const addHandlers = function () {
  $('#create-content').on('submit', onCreateContent)
  $('.get-blogs').on('submit', onViewOneBlog)
}

module.exports = {
  addHandlers,
  onCreateContent
}
