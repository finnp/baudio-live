#!/usr/bin/env node
var baudio = require('baudio')
var fs = require('fs')
var path = require('path')
var argv = require('minimist')(process.argv.slice(2))
var musicFile = argv._[0]
var musicFilePath = require.resolve(path.resolve(process.cwd(), musicFile))
var input = baudio(require(musicFilePath))
console.log('Playing', musicFilePath, '...')

fs.watchFile(musicFilePath, { interval: 1 },function () {
  console.log('Updated.')
  delete require.cache[musicFilePath]
  try {
    var load = require(musicFilePath)
    load(0) // rough check for errors
    input._fn = load
  } catch(e) { console.error(e) }
})

input.play()
if('o' in argv) input.record(argv.o)