const { middleware: thunkMiddleware } = require('redux-saga-thunk')

// import logger from 'redux-logger'

const req = require.context('.', true, /\.\/.+\/middleware\.js$/)

module.exports = req
  .keys()
  .map(key => req(key).default)
  .concat([thunkMiddleware])
// .concat([thunkMiddleware, logger])
