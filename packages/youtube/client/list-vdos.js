Template.listVdos.onCreated(function () {
  this.subscribe('vdos')
})

Template.listVdos.helpers({
  vdos: () => Vdos.find()
})

Template.listVdos.events({
  'click .btn_remove_vdo': (event) => {
    let _id = event.target.id.replace(/btn-/, '')
    Vdos.remove({_id: _id})
  }
})
