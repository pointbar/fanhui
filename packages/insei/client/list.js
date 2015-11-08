Template.list.helpers({
  inseis: () => {
    Meteor.subscribe('inseis')
    return Inseis.find()
  }
})
