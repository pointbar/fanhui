Template.listVdos.helpers({
  vdos: () => {
    Meteor.subscribe('vdos')
    return Vdos.find()
  }
})
