if (Meteor.isServer) {
  Inseis.find().map((elt) => Inseis.remove(elt._id))
  Inseis.insert({
    firstName: 'Stef',
    lastName: 'Lan',
    nickSlack: 'pnt',
    role: 'insei'
  })
}
