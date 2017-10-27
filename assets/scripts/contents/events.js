const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onCreateContent = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createContent(data)
    .then(ui.createContentSuccess)
    .catch(ui.createContentFailure)
}

const onGetPostContent = function (event) {
  // only fetch data when accordion is going to expand
  if ($(event.target).attr('class') === 'collapsed') {
    api.getContent()
      .then(ui.getPostsSuccess)
      .catch(ui.getPostsFailure)
  }
}

const onGetPageContent = function (event) {
  // only fetch data when accordion is going to expand
  if ($(event.target).attr('class') === 'collapsed') {
    api.getContent()
      .then(ui.getPagesSuccess)
      .catch(ui.getPagesFailure)
  }
}

const onViewOneBlog = function (event) {
  const email = getFormFields(this).email
  event.preventDefault()
  api.getOneBlog(email)
    .then(ui.getOneBlogSuccess)
    .catch(ui.getOneBlogFailure)
}

const onChangeCreateContentMessage = function (event) {
  $('#message').text('Start Telling Your Story:')
}

const onGetPageList = function (event) {
  event.preventDefault()
  const email = getFormFields(this).email
  api.getOnePage(email)
    .then(ui.populatePageList)
    .catch(ui.getPageFailure)
}

const addHandlers = function () {
  $('#create-content').on('submit', onCreateContent)
  $('.mb-0').on('click', onChangeCreateContentMessage)
  $('.get-blogs').on('submit', onViewOneBlog)
  $('.get-page-list').on('submit', onGetPageList)
  $('#view-posts').on('click', onGetPostContent)
  $('#view-pages').on('click', onGetPageContent)
}

module.exports = {
  addHandlers,
  onCreateContent,
  onGetPostContent
}
