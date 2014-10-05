#!/usr/bin/env node
var baudio = require('baudio')
var fs = require('fs')
var path = require('path')

var musicFile = process.argv[2]
var musicFilePath = require.resolve(path.resolve(process.cwd(), musicFile))
var input = baudio(require(musicFilePath))
console.log('Playing', musicFilePath, '...')

fs.watchFile(musicFilePath, { interval: 1 },function () {
  console.log('Updated.')
  delete require.cache[musicFilePath]
  try {
    input._fn = require(musicFilePath)
  } catch(e) { console.error(e) }
})

input.play()