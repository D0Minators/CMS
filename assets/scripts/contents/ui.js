const store = require('../store')
const api = require('./api')
const showBlogsTemplate = require('../templates/blog-listing.handlebars')
const showContent = require('../templates/content-listing.handlebars')
// const getFormFields = require(`../../../lib/get-form-fields`)

const createContentSuccess = function (data) {
  $('#message').text('You have succesfully created content!')
  $('.post-list').empty()
  $('#view-posts').trigger('reset')
}

const createContentFailure = function () {
  $('#message').text('Error on creating content')
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

const getContentSuccess = function (data) {
  $('#message').text('You have succesfully received content!')
}

const getContentFailure = function () {
  $('#message').text('Error on creating content!')
}

const getPostsSuccess = function (data) {
  $('#message').text('Here Is Your List Of Posts:')
  $('.post-list').empty()
  const matchingPosts = data.contents.filter(content => content.type === 'post')
  const showContentHTML = showContent({ contents: matchingPosts })
  $('.post-list').append(showContentHTML)
  $('.delete-content').on('click', function (event) {
    event.preventDefault()
    $(this).parent().parent().remove()
    const id = $(this).parent().parent().data('id')
    api.deleteContent(id)
      .then(deletePostSuccess)
      .catch(deletePostFailure)
  })
  $('.edit-content').on('click', onEditPost)
}

const onEditPost = function (event) {
  event.preventDefault()
  const id = $(this).parent().parent().data('id')
  const title = $(this).parent().siblings()[0]
  const date = $(this).parent().siblings()[1]
  const text = $(this).parent().siblings()[2]
  const type = $(this).parent().siblings()[3]
  title.contentEditable = true
  text.contentEditable = true
  $(title).css('background-color', 'rgb(39, 43, 43)')
  $(text).css('background-color', 'rgb(39,43,43)')
  $('.save-content').on('click', function () {
    onSavePost(id, title, date, text, type)
  })
}

const onSavePost = function (id, title, date, text, type) {
  const newTitle = $(title).text()
  const newText = $(text).text()
  const newDate = $(date).text().trim()
  const newType = $(type).text()
  const data =
{
  content: {
    title: newTitle,
    date: newDate,
    text: newText,
    type: newType
  }
}
  title.remove()
  text.remove()
  api.updateContent(data, id)
    .then(updatePostSuccess)
    .catch(updatePostFailure)
}

const getPostsFailure = function () {
  $('#message').text(console.error + ' Error on getting posts')
}

const getPagesSuccess = function (data) {
  $('#message').text('Here Is Your List Of Pages:')
  $('.page-list').empty()
  const matchingPages = data.contents.filter(content => content.type === 'page')
  const showContentHTML = showContent({ contents: matchingPages })
  $('.page-list').append(showContentHTML)
  $('.delete-content').on('click', function (event) {
    event.preventDefault()
    $(this).parent().parent().remove()
    const id = $(this).parent().parent().data('id')
    api.deleteContent(id)
      .then(deletePageSuccess)
      .catch(deletePageFailure)
  })
  $('.edit-content').on('click', onEditPage)
}

const onEditPage = function (event) {
  event.preventDefault()
  const id = $(this).parent().parent().data('id')
  const title = $(this).parent().siblings()[0]
  const date = $(this).parent().siblings()[1]
  const text = $(this).parent().siblings()[2]
  const type = $(this).parent().siblings()[3]
  title.contentEditable = true
  text.contentEditable = true
  $(title).css('background-color', 'rgb(39, 43, 43)')
  $(text).css('background-color', 'rgb(39,43,43)')
  $('.save-content').on('click', function () {
    onSavePage(id, title, date, text, type)
  })
}

const onSavePage = function (id, title, date, text, type) {
  const newTitle = $(title).text()
  const newText = $(text).text()
  const newDate = $(date).text().trim()
  const newType = $(type).text()
  const data =
{
  content: {
    title: newTitle,
    date: newDate,
    text: newText,
    type: newType
  }
}
  title.remove()
  text.remove()
  api.updateContent(data, id)
    .then(updatePageSuccess)
    .catch(updatePageFailure)
}

const deletePostSuccess = function () {
  $('#message').text('Post deleted')
}

const deletePostFailure = function () {
  $('#message').text('Error on deleting post')
}

const deletePageFailure = function () {
  $('#message').text('Error on deleting page')
}

const deletePageSuccess = function () {
  $('#message').text('Page deleted')
}

const getPagesFailure = function () {
  $('#message').text('Error on getting pages')
}

const updatePostSuccess = function () {
  $('#message').text('Post updated')
  api.getContent()
    .then(getPostsSuccess)
    .catch(getPostsFailure)
}

const updatePostFailure = function () {
  console.log('try again')
  $('#message').text('Error on updating post')
}

const updatePageSuccess = function () {
  console.log('YEAH BUDDY')
  $('#message').text('Post updated')
  api.getContent()
    .then(getPagesSuccess)
    .catch(getPagesFailure)
}

const updatePageFailure = function () {
  console.log('try again')
  $('#message').text('Error on updating post')
}
module.exports = {
  createContentSuccess,
  createContentFailure,
  getPostsSuccess,
  getPostsFailure,
  getPagesSuccess,
  getPagesFailure,
  getContentSuccess,
  getContentFailure,
  getOneBlogSuccess,
  getOneBlogFailure,
  updatePostSuccess,
  updatePostFailure,
  deletePageFailure,
  deletePostFailure
}
