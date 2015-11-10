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
  api.addFiles(['server/vdoRecords.js', 'server/model.js'], 'server')
  api.addFiles([
    'client/youtube.html',
    'client/router.js',
    'client/list-vdos.html',
    'client/list-vdos.js',
    'client/insert-vdo.html',
    'client/insert-vdo.js'
  ], 'client')
})

Package.onTest(function(api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('pntbr:youtube')
  api.addFiles('youtube-tests.js')
})
