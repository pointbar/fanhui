Router.route('/admin/vdo/oragefan', {
  template: 'youtubeBO'
})

Meteor.startup(() => {
  isInsei('pntbr', (elt) => console.log(elt))

  Router.route('/vdo/pntbr', {
    template: 'youtubeFO'
  })
})
