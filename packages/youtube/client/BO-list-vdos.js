Template.listVdosBO.onCreated(function () {
  this.subscribe('vdos')
})

Template.listVdosBO.helpers({
  vdos: () =>
    Vdos.find(
      {category: Template.currentData().category},
      {sort: {rank: -1}})
})

Template.listVdosBO.events({
  'click .btn_remove_vdo': (event) => {
    let _id = event.target.id.replace(/btn-/, '')
    Vdos.remove({_id: _id})
  }
})
