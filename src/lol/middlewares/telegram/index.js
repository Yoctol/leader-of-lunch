const { chain } = require('bottender');
const addChannel = require('./addChannel')
const addUser = require('./addUser')
const addText = require('./addText')

module.exports = chain([
  addChannel,
  addUser,
  addText
])
