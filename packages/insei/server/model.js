Meteor.publish('inseis', () =>
  Inseis.find()
)
Meteor.methods({
  isInsei: (insei) => !! Inseis.find({nickSlack: insei}).count()
})
