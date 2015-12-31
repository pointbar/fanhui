Package.describe({
  name: 'pntbr:list-videos',
  version: '0.0.1',
  summary: 'List videos',
  git: 'https://github.com/goacademie/fanhui',
  documentation: 'README.md'
})
Package.onUse(function(api) {
  api.versionsFrom('1.2.1')
  api.use(['ecmascript'])
  api.use('templating', 'client')
  api.addFiles([
    'client/BO-list-vdos.html',
    'client/BO-list-vdos.js',
    'client/BO-list-tournament.html',
    'client/BO-list-tournament.js',
    'client/FO-list-vdos.html',
    'client/FO-list-vdos.js',
    'client/style.css'
  ], 'client')
})
Package.onTest(function(api) {
  api.use(['ecmascript', 'tinytest', 'pntbr:list-videos'])
  api.use('templating', 'client')
})
