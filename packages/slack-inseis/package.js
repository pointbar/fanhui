Package.describe({
  name: 'pntbr:slack-inseis',
  version: '0.0.1',
  summary: 'Manage Inseis',
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
    'server/slack-inseis.js',
    'server/slack-token.js',
    'server/record-slack-inseis.js',
    'server/model.js'
  ], 'server')
  api.addFiles([
    'client/router.js',
    'client/inseis.js',
    'client/edit-insei.html',
    'client/edit-insei.js',
    'client/list-inseis.html',
    'client/list-inseis.js'
  ], 'client')
  api.export(['SlackInseis', 'Inseis'], 'server')
  api.export([
    'isInsei',
    'isSensei',
    'getInseiBySlackName',
    'slackNameFromUrl'
  ], 'client')
})
Package.onTest(function(api) {
  api.use(['ecmascript', 'tinytest'])
  api.use(['iron:router@1.0.0', 'templating'], 'client')
  api.use('pntbr:slack-inseis')
  api.addFiles(['tests-stubs.js', 'tests-insei.js'])
})
