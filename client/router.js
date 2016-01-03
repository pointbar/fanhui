Router.configure({
  notFoundTemplate: 'notFound',
  layoutTemplate: 'layout'
})

Router.onBeforeAction(function () {
  this.wait(Meteor.subscribe('inseis'))
  if (this.ready()) {
    if (! isInsei(slackNameFromUrl()))
      Router.go('/')
    this.next()
  }
})

Router.route('/', {
  template: 'notFound'
})
