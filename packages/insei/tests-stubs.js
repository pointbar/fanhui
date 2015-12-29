if (Meteor.isServer) {
  Inseis.find().map((elt) => Inseis.remove(elt._id))
  Inseis.insert({
    firstName: 'Stef',
    lastName: 'Lan',
    nickSlack: 'pntbr',
    role: 'insei'
  })
  Inseis.insert({
    firstName: 'Hui',
    lastName: 'Fan',
    nickSlack: 'oragefan',
    role: 'sensei'
  })
}
if (Meteor.isClient)
  Meteor.subscribe('inseis')
