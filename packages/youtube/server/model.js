Meteor.publish('vdos', () => {
  return Vdos.find()
})
