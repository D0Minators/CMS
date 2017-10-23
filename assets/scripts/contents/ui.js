const store = require('../store')
const api = require('./api')
const showBlogsTemplate = require('../templates/blog-listing.handlebars')
const showContent = require('../templates/content-listing.handlebars')
const showPageTemplate = require('../templates/page-listing.handlebars')
// const getFormFields = require(`../../../lib/get-form-fields`)

const createContentSuccess = function (data) {
  $('#message').text('You have succesfully created content!')
  $('.post-list').empty()
  $('#view-posts').trigger('reset')
}

const createContentFailure = function () {
  $('#message').text('Error on creating content. Please Check All Fields Are Filled In.')
}

const getOneBlogSuccess = function (data) {
  const matchingEntries = data.contents.filter(content => content.type === 'post')
  if (matchingEntries.length === 0) {
    $('#message').text('This user does not have any blog posts')
  } else {
    $('#message').text('Success getting one user\'s blog content')
    matchingEntries.sort(function (a, b) {
      const aDate = new Date(a.date)
      const bDate = new Date(b.date)
      return bDate - aDate
    })
    $.each(matchingEntries, function (index, value) {
      value['date'] = value['date'].split('T')[0]
    })
    const showBlogsHtml = showBlogsTemplate({ contents: matchingEntries })
    $('.showblogs').empty()
    $('.showblogs').append(showBlogsHtml)
    $('.showblogs').removeClass('hidden')
  }
}

const getOneBlogFailure = function () {
  $('#message').text('Failure on getting one user\'s blog content')
}

const populatePageList = function (data) {
  const matchingEntries = data.contents.filter(content => content.type === 'page')
  if (matchingEntries.length === 0) {
    $('#message').text('This user does not have any web pages')
  } else {
    $('#message').text('Success getting one user\'s web pages')
    matchingEntries.sort(function (a, b) {
      const aDate = new Date(a.date)
      const bDate = new Date(b.date)
      return bDate - aDate
    })
    $.each(matchingEntries, function (index, value) {
      value['date'] = value['date'].split('T')[0]
    })
    $('#selectPage').empty()
    $('#selectPage').append($('<option value=0>Select a Page to View</option>'))
    $.each(matchingEntries, function (index, value) {
      $('#selectPage').append($('<option></option>').val(value._id).html(value.title))
    })

    store.OwnersPages = matchingEntries
    $('#selectPage').removeClass('hidden')
    $('#selectPage').on('change', function () {
      const value = $(this).val()
      selectedPage(matchingEntries, value)
    })
  }
}

const selectedPage = (matchingEntries, value) => {
  const pickPage = matchingEntries.filter(content => content._id === value)
  const showPageHtml = showPageTemplate({ contents: pickPage })
  $('.showpage').empty()
  $('.showblogs').empty()
  $('.showpage').append(showPageHtml)
  $('.showpage').removeClass('hidden')
}

const getPageFailure = function () {
  $('#message').text('Failure on getting one user\'s blog content')
}

const getContentSuccess = function (data) {
  $('#message').text('You have succesfully received content!')
}

const getContentFailure = function () {
  $('#message').text('Error on getting content.')
}

const getPostsSuccess = function (data) {
  $('#message').text('Here Is Your List Of Posts:')
  $('.post-list').empty()
  const matchingPosts = data.contents.filter(content => content.type === 'post')
  $.each(matchingPosts, function (index, value) {
    value['date'] = value['date'].split('T')[0]
  })
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
  $('.save-content').show()
  $('.edit-content').hide()
  const id = $(this).parent().parent().data('id')
  const title = $(this).parent().siblings()[0]
  const date = $(this).parent().siblings()[1]
  const text = $(this).parent().siblings()[2]
  const type = $(this).parent().siblings()[3]
  title.contentEditable = true
  text.contentEditable = true
  $(title).css('background-color', 'rgba(39, 43, 43, 0.7)')
  $(text).css('background-color', 'rgba(39,43,43, 0.7)')
  $('.save-content').on('click', function () {
    onSavePost(id, title, date, text, type)
  })
  $('#message').text('You Are Editing Your Content:')
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
  $.each(matchingPages, function (index, value) {
    value['date'] = value['date'].split('T')[0]
  })
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
  $('.save-content').show()
  $('.edit-content').hide()
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
  $('#message').text('Your Post Has Been Updated')
  api.getContent()
    .then(getPostsSuccess)
    .catch(getPostsFailure)
}

const updatePostFailure = function () {
  $('#message').text('Error on updating post')
}

const updatePageSuccess = function () {
  $('#message').text('Your Page Has Been Updated')
  api.getContent()
    .then(getPagesSuccess)
    .catch(getPagesFailure)
}

const updatePageFailure = function () {
  $('#message').text('Error on updating page')
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
  deletePostFailure,
  // getPageSuccess,
  getPageFailure,
  populatePageList
}
