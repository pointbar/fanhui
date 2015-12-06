Router.route('/admin/insei/oragefan', {
  template: 'inseisList',
  subscriptions: function () {
    return Meteor.subscribe('inseis')
  },
  action: function () {
    if (this.ready())
      this.render()
    else
      this.render('loading')
  }
})
Router.route('/insei/:insei', {
  template: 'inseisList',
  subscriptions: function () {
    return Meteor.subscribe('inseis')
  },
  action: function () {
    if (this.ready()) {
      if (typeof Inseis.findOne() === 'undefined')
        Router.go('/')
      this.render()
    } else
      this.render('loading')
  }
})

