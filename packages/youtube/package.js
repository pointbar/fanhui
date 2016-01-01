Package.describe({
  name: 'pntbr:youtube',
  version: '0.0.1',
  summary: 'Manage Youtube\'s videos',
  git: 'https://github.com/goacademie/fanhui',
  documentation: 'README.md'
})
Package.onUse(function(api) {
  api.versionsFrom('1.2.1')
  api.use(['ecmascript'])
  api.use(['iron:router', 'templating'], 'client')
  api.addFiles([
    'client/FO-player-vdo.html',
    'client/style.css',
    'client/router.js'
  ], 'client')
})
Package.onTest(function(api) {
  api.use(['ecmascript', 'tinytest', 'pntbr:youtube'])
  api.use(['iron:router@1.0.0', 'templating'], 'client')
})
