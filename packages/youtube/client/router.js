Router.route('/vdo/play/:videoId/:insei', {
  template: 'playVdoFO',
  data: function () {
    return {video_id: this.params.videoId}
  }
})

Router.route('/admin/vdo/course/:insei', {
  template: 'courseBO'
})

Router.route('/admin/vdo/tournament/:insei', {
  template: 'tournamentBO'
})

Router.route('/vdo/tournament/:insei', {
  template: 'tournamentFO'
})

Router.route('/vdo/course/:insei', {
  template: 'courseFO'
})
