Package.describe({
  name: 'pntbr:youtube',
  version: '0.0.1',
  summary: 'Manage Youtube\'s videos',
  git: 'https://github.com/goacademie/fanhui',
  documentation: 'README.md'
})
Package.onUse(function(api) {
  api.versionsFrom('1.2.1')
  api.use(['ecmascript', 'mongo'])
  api.use(['iron:router', 'templating'], 'client')
  api.addFiles('collection.js')
  api.addFiles('server/model.js', 'server')
  api.addFiles([
    'client/BO-youtube.html',
    'client/BO-list-vdos.html',
    'client/BO-list-vdos.js',
    'client/BO-insert-vdo.html',
    'client/BO-insert-vdo.js',
    'client/BO-record-vdos.js',
    'client/FO-youtube.html',
    'client/FO-list-vdos.html',
    'client/FO-list-vdos.js',
    'client/FO-player-vdo.html',
    'client/style.css',
    'client/router.js'
  ], 'client')
  api.export('Vdos', 'server')
  api.export([
    'Vdos',
    'blackPlayerByTitle',
    'categoryByTitle',
    'checkIsMember',
    'checkVideoIdLength',
    'checkVideoStageByTitle',
    'checkVideoRoundByTitle',
    'completeRoundRecord',
    'completeStageRecord',
    'dateByTitle',
    'leagueByTitle',
    'queryValueByFieldName',
    'rankByTitle',
    'roundByTitle',
    'whitePlayerByTitle'
  ], 'client')
})
Package.onTest(function(api) {
  api.use(['ecmascript', 'tinytest', 'pntbr:youtube'])
  api.use(['iron:router@1.0.0', 'templating'], 'client')
  api.addFiles(['tests-stubs.js', 'tests-youtube.js'])
})
