Router.configure({
  notFoundTemplate: 'notFound',
  layoutTemplate: 'layout'
})

Router.route('/', {
  template: 'notFound'
})
