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
  api.addFiles(['server/inseiRecords.js', 'server/model.js'], 'server')
  api.addFiles([
    'client/router.js',
    'client/inseis-list.html',
    'client/inseis-list.js'
  ], 'client')
})

Package.onTest(function(api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('pntbr:insei')
  api.addFiles('insei-tests.js')
})
