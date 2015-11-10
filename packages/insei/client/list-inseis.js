Template.inseisList.helpers({
  inseis: () => {
    Meteor.subscribe('inseis')
    return Inseis.find()
  }
})
