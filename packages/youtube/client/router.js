Router.route('/admin/vdo/oragefan', {
  template: 'youtubeBO'
})
Router.route('/vdo/play/:videoId', {
  template: 'playVdoFO',
  data: function () {
    return {video_id: this.params.videoId}
  }
})
Router.route('/vdo/:type/:insei', {
  subscriptions: function () {
    return [
      Meteor.subscribe('vdos')]
  },
  action: function () {
    if (this.ready()) {
      if (! isInsei(this.params.insei)
        || ! this.params.type.match(/course|tournament/))
        Router.go('/')
      this.render(this.params.type)
    } else
      this.render('loading')
  }
})
