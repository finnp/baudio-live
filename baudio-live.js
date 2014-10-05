#!/usr/bin/env node
var baudio = require('baudio')
var file = process.argv[2]
var path = require.resolve(file)
var input = baudio(require(path))
console.log('Playing', path, '...')

setInterval(function () {
  delete require.cache[path]
  try {
    input._fn = require(path) // blocking :/
  } catch(e) { /* could console.error here */ }
}, 5)

input.play()