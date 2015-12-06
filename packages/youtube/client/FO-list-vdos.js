Template.listVdosFO.onCreated(function () {
  this.subscribe('vdos')
})
Template.listVdosFO.helpers({
  vdos: () =>
    Vdos.find(
      {category: Template.currentData().category},
      {sort: {rank: -1}})
})
