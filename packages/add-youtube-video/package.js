Package.describe({
  name: 'pntbr:add-youtube-video',
  version: '0.0.1',
  summary: 'Record video data from Youtube',
  git: 'https://github.com/goacademie/fanhui',
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.2.1')
  api.use(['ecmascript', 'mongo'])
  api.use(['templating'], 'client')
  api.addFiles('collection.js')
  api.addFiles('server/model.js', 'server')
  api.addFiles([
    'client/youtube-title.js',
    'client/check-save-vdo.js',
    'client/record-vdos.js',
    'client/BO-insert-vdo.html',
    'client/BO-insert-vdo.js'
  ], 'client')
  api.export('Vdos')
  api.export([
    'YoutubeTitle',
    'checkIsMember',
    'checkVideoIdLength',
    'completeRoundRecord',
    'completeCourseRecord',
    'queryValueByFieldName'
  ], 'client')
})

Package.onTest(function(api) {
  api.use(['ecmascript', 'tinytest', 'pntbr:add-youtube-video'])
  api.addFiles('tests/stubs-test.js', 'server')
  api.addFiles([
    'tests/youtube-title-test.js',
    'tests/check-save-vdo-test.js'
  ], 'client')
})
