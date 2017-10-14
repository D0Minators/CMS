const config = require('../config')
const store = require('../store')

const createContent = function (data) {
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

const updateContent = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/contents/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteContent = function (id) {
  console.log(id)
  return $.ajax({
    url: config.apiOrigin + '/contents/' + id,
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
