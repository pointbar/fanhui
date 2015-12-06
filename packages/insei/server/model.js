Meteor.publish('inseis', () =>
  Inseis.find()
)
Meteor.publish('isInsei', (insei) =>
  Inseis.find({nickSlack: insei})
)
