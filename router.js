'use strict'

const _ = require('lodash')
const express = require('express')
const resolver = require('deep-equal-resolver')()

module.exports = _.memoize((config) => {
  const router = new express.Router()

  const mw = require('./middleware')(config)

  router.route('/')
    .get(mw.findOne)
    .post(mw.create)
    .patch(mw.update)
    .put(mw.update)

  return router
}, resolver)
