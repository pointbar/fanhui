Template.listTournamentFO.onCreated(function () {
  this.subscribe('vdos')
})

Template.listTournamentFO.helpers({
  vdos: () =>
    Vdos.find(
      {category: Template.currentData().category},
      {sort: {rank: -1}})
})

Template.vdoTournamentFO.helpers({
  nickSlack: () => nickSlackFromUrl()
})
