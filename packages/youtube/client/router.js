Router.route('/admin/vdo/oragefan', {
  template: 'youtubeBO'
})
Router.route('/vdo/:insei', {
  template: 'youtubeFO',
  subscriptions: function () {
    return [
      Meteor.subscribe('isInsei', this.params.insei),
      Meteor.subscribe('vdos')]
  },
  action: function () {
    if (this.ready()) {
      if (typeof Inseis.findOne({nickSlack: this.params.insei}) === 'undefined')
        Router.go('/')
      this.render()
    } else
      this.render('loading')
  }
})
Router.route('/vdo/play/:videoId', {
  template: 'playVdoFO',
  data: function () {
    return {video_id: this.params.videoId}
  }
})
