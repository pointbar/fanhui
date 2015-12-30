Router.route('/vdo/play/:videoId/:insei', {
  template: 'playVdoFO',
  data: function () {
    return {video_id: this.params.videoId}
  }
})

Router.route('/admin/vdo/course/oragefan', {
  template: 'youtubeBO'
})

Router.route('/admin/vdo/tournament/oragefan', {
  template: 'youtubeBO'
})

Router.route('/vdo/tournament/:insei', {
  template: 'tournament'
})

Router.route('/vdo/course/:insei', {
  template: 'course'
})
