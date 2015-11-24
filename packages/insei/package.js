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
  api.use(['iron:router', 'templating'], 'client')
  api.addFiles('collection.js')
  api.addFiles(['server/record-inseis.js', 'server/model.js'], 'server')
  api.addFiles([
    'client/router.js',
    'client/list-inseis.html',
    'client/list-inseis.js'
  ], 'client')
})

Package.onTest(function(api) {
  api.use(['ecmascript', 'tinytest'])
  api.use(['iron:router@1.0.0', 'templating'], 'client')
  api.use('pntbr:insei')
  api.addFiles('tests-insei.js')
})
