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
    'client/BO-list-course.html',
    'client/BO-list-course.js',
    'client/BO-list-round.html',
    'client/BO-list-round.js',
    'client/BO-list-tournament.html',
    'client/BO-list-tournament.js',
    'client/FO-list-course.html',
    'client/FO-list-course.js',
    'client/FO-list-round.html',
    'client/FO-list-round.js',
    'client/FO-list-tournament.html',
    'client/FO-list-tournament.js'
  ], 'client')
})
Package.onTest(function(api) {
  api.use(['ecmascript', 'tinytest', 'pntbr:list-videos'])
  api.use('templating', 'client')
})
