Meteor.publish('inseis', () => {
  return Inseis.find()
})
