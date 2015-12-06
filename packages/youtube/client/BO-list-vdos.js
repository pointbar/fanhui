Template.listVdosBO.helpers({
  vdos: () =>
    Vdos.find(
      {category: Template.currentData().category},
      {sort: {rank: -1}})
})

Template.listVdosBO.events({
  'click .btn_remove_vdo': (event) =>
    Vdos.remove(event.target.id.replace(/btn-/, ''))
})
