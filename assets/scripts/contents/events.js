const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store')
const showContent = require('../templates/content-listing.handlebars')
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


const onGetPostContent = function (event) {
  api.getContent()
    .then(ui.getPostsSuccess)
    .catch(ui.getPostsFailure)
}

const onGetPageContent = function (event) {
  console.log('On Get Page Content')
  api.getContent()
    .then(ui.getPagesSuccess)
    .catch(ui.getPagesFailure)
}

// const onUpdateContent = function (event) {
//   const data = getFormFields(this)
//   event.preventDefault()
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }
//

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
  $('#view-posts').on('click', onGetPostContent)
  $('#view-pages').on('click', onGetPageContent)
}

module.exports = {
  addHandlers,
  onCreateContent,
  onGetPostContent
}
