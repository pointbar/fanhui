Package.describe({
  name: 'pntbr:insei',
  version: '0.0.1',
  summary: 'Manage Insei',
  git: 'https://github.com/goacademie/fanhui',
  documentation: 'README.md'
})
Package.onUse(function(api) {
  api.versionsFrom('1.2.1')
  api.use(['ecmascript', 'mongo'])
  api.use('hiukim:slack-client', 'server')
  api.use(['iron:router', 'templating'], 'client')
  api.addFiles('collection.js')
  api.addFiles([
    'server/slack-token.js',
    'server/record-slack-inseis.js',
    'server/model.js'
  ], 'server')
  api.addFiles([
    'client/router.js',
    'client/inseis.js',
    'client/list-inseis.html',
    'client/list-inseis.js'
  ], 'client')
  api.export('Inseis', 'server')
  api.export([
    'Inseis',
    'isInsei',
    'isSensei',
    'nickSlackFromUrl'
  ], 'client')
})
Package.onTest(function(api) {
  api.use(['ecmascript', 'tinytest'])
  api.use(['iron:router@1.0.0', 'templating'], 'client')
  api.use('pntbr:insei')
  api.addFiles('tests-stubs.js')
  api.addFiles('tests-insei.js', 'client')
})
