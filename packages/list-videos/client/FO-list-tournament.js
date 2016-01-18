Template.listLeagueBO.onCreated(function () {
  this.subscribe('vdos')
})

Template.tournamentFO.helpers({
  rounds: () =>
    _.uniq(Vdos.find({
      category: 'Great tournament'}, {
        fields: {round: 1},
        sort: {round: 1}
      }).fetch(), true, ({round}) => round)
})

Template.listVdosTournamentFO.helpers({
  vdos: () =>
    Vdos.find({
      category: 'Great tournament',
      round: Template.currentData().round}, {
        sort: {rank: -1}})
})

Template.vdoTournamentFO.helpers({
  nickSlack: () => slackNameFromUrl()
})
