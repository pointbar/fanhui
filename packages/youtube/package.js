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
  api.use(['iron:router', 'templating', 'session'], 'client')
  api.addFiles('collection.js')
  api.addFiles(['server/model.js'], 'server')
  api.addFiles([
    'client/youtube.html',
    'client/style.css',
    'client/router.js',
    'client/list-vdos.html',
    'client/list-vdos.js',
    'client/insert-vdo.html',
    'client/insert-vdo.js'
  ], 'client')
  api.export(['notifBadYoutubeId'], 'client')
  api.export('Vdos', 'server')
  api.export([
    'Vdos',
    'youtubeIdCheckLength',
    'queryValueByFieldName',
    'checkTitle',
    'categoryByTitle',
    'dateByTitle',
    'rankByTitle'], 'client')
})

Package.onTest(function(api) {
  api.use(['ecmascript', 'tinytest', 'pntbr:youtube'])
  api.use(['iron:router@1.0.0', 'templating'], 'client')
  api.addFiles('tests-stubs.js')
  api.addFiles('tests-youtube.js')
})
