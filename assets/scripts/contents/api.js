const config = require('../config')
const store = require('../store')

const createContent = function (data) {
  console.log('api is loading...')
  console.log(store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/contents',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getContent = function () {
  return $.ajax({
    url: config.apiOrigin + '/contents',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateContent = function (data, contentId) {
  return $.ajax({
    url: config.apiOrigin + '/contents/' + contentId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteContent = function () {
  return $.ajax({
    url: config.apiOrigin + '/contents/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getAllContent = function () {
  return $.ajax({
    url: config.apiOrigin + '/contents',
    method: 'GET'
  })
}

const getOneBlog = function () {
  return $.ajax({
    url: config.apiOrigin + '/contents',
    method: 'GET'
  })
}

module.exports = {
  createContent,
  getContent,
  updateContent,
  deleteContent,
  getAllContent,
  getOneBlog
}
