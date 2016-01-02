Router.route('/vdo/play/:videoId/:insei', {
  template: 'playVdoFO',
  data: function () {
    return {video_id: this.params.videoId}
  }
})

Router.route('/admin/vdo/course/oragefan', {
  template: 'courseBO'
})

Router.route('/admin/vdo/tournament/oragefan', {
  template: 'tournamentBO'
})

Router.route('/vdo/tournament/:insei', {
  template: 'tournamentFO'
})

Router.route('/vdo/course/:insei', {
  template: 'courseFO'
})
